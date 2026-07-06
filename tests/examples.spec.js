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

const MAP_SELECTOR = { leaflet: '.leaflet-container', maplibre: '.maplibregl-map', openlayers: '.ol-viewport' };

for (const ex of examples) {
  test(`Comprehensive Validation: ${ex.library} - ${ex.name}`, async ({ page }) => {
    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];

    // 1. Catch Console Errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        if (!msg.text().includes('403') && !msg.text().includes('404')) {
          consoleErrors.push(msg.text());
        }
      }
    });

    // 2. Catch Uncaught Exceptions
    page.on('pageerror', err => {
      pageErrors.push(err.message);
    });

    // 3. Catch Network Failures (local assets only)
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
    const sel = MAP_SELECTOR[ex.library];
    await expect(async () => {
      const isReady = await page.evaluate(readyFn);
      expect(isReady).toBe(true);
    }).toPass({ timeout: 15000 });

    // Give map a beat for tile layer initialization
    await page.waitForTimeout(1000);

    // 5. UNIVERSAL INTERACTIONS — exercise click, scroll, keyboard on every page
    // Click at map center
    const box = await page.locator(sel).boundingBox();
    if (box) {
      const cx = box.x + box.width / 2;
      const cy = box.y + box.height / 2;

      // Left-click
      await page.mouse.click(cx, cy);
      await page.waitForTimeout(200);

      // Mouse scroll (zoom)
      await page.mouse.move(cx, cy);
      await page.mouse.wheel(0, -120);
      await page.waitForTimeout(200);

      // Double-click
      await page.mouse.dblclick(cx, cy);
      await page.waitForTimeout(200);

      // Right-click
      await page.mouse.click(cx, cy, { button: 'right' });
      await page.waitForTimeout(200);
    }

    // Keyboard: press WASD keys
    for (const key of ['w', 'a', 's', 'd']) {
      await page.keyboard.down(key);
      await page.waitForTimeout(50);
      await page.keyboard.up(key);
      await page.waitForTimeout(50);
    }

    // 6. postMessage Middleware — exercise all remote-control actions
    for (const action of ['zoom_in', 'zoom_out', 'pan_north', 'pan_south', 'pan_east', 'pan_west']) {
      await page.evaluate(({ action, lib }) => {
        window.postMessage({ action, library: lib }, '*');
      }, { action, lib: ex.library });
      await page.waitForTimeout(200);
    }

    // 7. Final Assertions
    expect(pageErrors, `Uncaught JS Exceptions found: ${pageErrors.join(', ')}`).toHaveLength(0);
    expect(consoleErrors, `Console Errors found: ${consoleErrors.join(', ')}`).toHaveLength(0);
    expect(failedRequests, `Local Asset Network Failures: ${failedRequests.join(', ')}`).toHaveLength(0);
  });
}
