const { test, expect } = require('@playwright/test');
const { readFileSync } = require('fs');
const { resolve } = require('path');

// Extract the inline JSON configuration directly from index.html
const indexContent = readFileSync(resolve(__dirname, '../index.html'), 'utf-8');
const match = indexContent.match(/const EXAMPLES = (\{[\s\S]*?\});/);
let examples = [];
if (match) {
  const examplesDict = JSON.parse(match[1]);
  examples = Object.values(examplesDict);
}

// Map library API indicators and readiness checks
const MAP_READY = {
  leaflet: () => {
    const el = document.querySelector('.leaflet-container');
    return el && window.L && Object.keys(window.L).length > 0 && el.getBoundingClientRect().width > 0;
  },
  maplibre: () => {
    const el = document.querySelector('.maplibregl-map');
    return el && window.maplibregl && el.getBoundingClientRect().width > 0;
  },
  openlayers: () => {
    const el = document.querySelector('.ol-viewport');
    return el && window.ol && el.getBoundingClientRect().width > 0;
  },
};

for (const ex of examples) {
  test(`Comprehensive Validation: ${ex.library} - ${ex.name}`, async ({ page }) => {
    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];

    // 1. Catch Console Errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        // Ignore known map tile 404s/403s which happen frequently due to API limits
        if (!msg.text().includes('403') && !msg.text().includes('404')) {
          consoleErrors.push(msg.text());
        }
      }
    });

    // 2. Catch Uncaught Exceptions
    page.on('pageerror', err => {
      pageErrors.push(err.message);
    });

    // 3. Catch Network Failures (Ignoring 3rd party tile servers which can be flaky)
    page.on('response', response => {
      const status = response.status();
      const url = response.url();
      if (status >= 400 && url.includes('localhost')) {
        failedRequests.push(`[${status}] ${url}`);
      }
    });

    // Navigate to the local example
    await page.goto(ex.file, { waitUntil: 'domcontentloaded' });

    // 4. Verify Map Container, Canvas Size, and Global Library Objects
    const readyFn = MAP_READY[ex.library];
    await expect(async () => {
      const isReady = await page.evaluate(readyFn);
      expect(isReady).toBe(true);
    }).toPass({ timeout: 15000 });

    // 5. Verify the postMessage Middleware Injection (from serve.py)
    // Send a mock postMessage to zoom in, ensuring it doesn't throw errors
    await page.evaluate((lib) => {
      window.postMessage({ action: 'zoom_in', library: lib }, '*');
    }, ex.library);

    // Give the map a moment to process the postMessage
    await page.waitForTimeout(500);

    // 6. Final Assertions - Exposing every corner of failure!
    expect(pageErrors, `Uncaught JS Exceptions found: ${pageErrors.join(', ')}`).toHaveLength(0);
    expect(consoleErrors, `Console Errors found: ${consoleErrors.join(', ')}`).toHaveLength(0);
    expect(failedRequests, `Local Asset Network Failures: ${failedRequests.join(', ')}`).toHaveLength(0);
  });
}
