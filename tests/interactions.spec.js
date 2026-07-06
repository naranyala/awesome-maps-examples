const { test, expect } = require('@playwright/test');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const indexContent = readFileSync(resolve(__dirname, '../index.html'), 'utf-8');
const match = indexContent.match(/const EXAMPLES = (\{[\s\S]*?\});/);
let examples = [];
if (match) {
  const examplesDict = JSON.parse(match[1]);
  examples = Object.values(examplesDict);
}

const MAP_SEL = { leaflet: '.leaflet-container', maplibre: '.maplibregl-map', openlayers: '.ol-viewport' };
const MAP_READY = {
  leaflet: () => { const el = document.querySelector('.leaflet-container'); return el && window.L && Object.keys(window.L).length > 0 && el.getBoundingClientRect().width > 0; },
  maplibre: () => { const el = document.querySelector('.maplibregl-map'); return el && window.maplibregl && el.getBoundingClientRect().width > 0; },
  openlayers: () => { const el = document.querySelector('.ol-viewport'); return el && window.ol && el.getBoundingClientRect().width > 0; },
};

function getExample(lib, nameSubstring) {
  return examples.find(e => e.library === lib && e.name.toLowerCase().includes(nameSubstring));
}

function getExactMatch(lib, name) {
  return examples.find(e => e.library === lib && e.name === name);
}

async function waitForMap(page, lib) {
  const fn = MAP_READY[lib];
  await expect(async () => {
    expect(await page.evaluate(fn)).toBe(true);
  }).toPass({ timeout: 15000 });
  await page.waitForTimeout(1000);
}

async function mapCenter(page, lib) {
  const box = await page.locator(MAP_SEL[lib]).boundingBox();
  if (!box) throw new Error('Map not found');
  return { x: box.x + box.width / 2, y: box.y + box.height / 2 };
}

function validGeoJSON() {
  return JSON.stringify({
    type: 'FeatureCollection',
    features: [{ type: 'Feature', geometry: { type: 'Point', coordinates: [0, 20] }, properties: {} }]
  });
}

// ===================== GeoJSON Upload =====================
test.describe('GeoJSON Upload', () => {
  for (const lib of ['leaflet', 'maplibre', 'openlayers']) {
    test(`${lib} - upload valid GeoJSON shows feature count`, async ({ page }) => {
      const ex = getExample(lib, 'geojson upload');
      await page.goto(ex.file, { waitUntil: 'domcontentloaded' });
      await waitForMap(page, lib);

      // #file-input has display:none; dispatch change event programmatically
      await page.evaluate((json) => {
        const file = new File([json], 'test.geojson', { type: 'application/json' });
        const dt = new DataTransfer();
        dt.items.add(file);
        const input = document.getElementById('file-input');
        Object.defineProperty(input, 'files', { value: dt.files });
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }, validGeoJSON());
      await page.waitForTimeout(1000);

      await expect(page.locator('#feature-count')).toHaveText(/✅/, { timeout: 5000 });
    });

    test(`${lib} - upload invalid GeoJSON catches error gracefully`, async ({ page }) => {
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('console', msg => { if (msg.type() === 'error' && !msg.text().includes('404') && !msg.text().includes('403')) errors.push(msg.text()); });

      const ex = getExample(lib, 'geojson upload');
      await page.goto(ex.file, { waitUntil: 'domcontentloaded' });
      await waitForMap(page, lib);

      await page.evaluate(() => {
        const file = new File(['not valid json {{{'], 'bad.geojson', { type: 'application/json' });
        const dt = new DataTransfer();
        dt.items.add(file);
        const input = document.getElementById('file-input');
        Object.defineProperty(input, 'files', { value: dt.files });
        input.dispatchEvent(new Event('change', { bubbles: true }));
      });
      await page.waitForTimeout(1000);

      expect(errors).toHaveLength(0);
    });
  }
});

// ===================== Drawing Tools =====================
test.describe('Drawing Tools', () => {
  async function drawPolygonViaClick(page, lib) {
    const c = await mapCenter(page, lib);
    const offset = 50;

    if (lib === 'leaflet') {
      await page.locator('.leaflet-draw-draw-polygon').click({ force: true });
      await page.waitForTimeout(300);
    }
    if (lib === 'maplibre') {
      await page.locator('.mapbox-gl-draw_polygon').click({ force: true });
      await page.waitForTimeout(300);
    }

    const vertices = [[-offset, -offset], [offset, -offset], [offset, offset], [-offset, offset]];
    for (const [dx, dy] of vertices) {
      await page.mouse.click(c.x + dx, c.y + dy);
      await page.waitForTimeout(200);
    }
    await page.mouse.dblclick(c.x - offset, c.y - offset);
    await page.waitForTimeout(500);
  }

  test('leaflet - draw polygon updates GeoJSON output', async ({ page }) => {
    const ex = getExactMatch('leaflet', 'Draw GeoJSON');
    await page.goto(ex.file, { waitUntil: 'domcontentloaded' });
    await waitForMap(page, 'leaflet');

    const before = await page.locator('#geojson-output').inputValue();
    await drawPolygonViaClick(page, 'leaflet');
    const after = await page.locator('#geojson-output').inputValue();

    expect(after).not.toBe(before);
    const parsed = JSON.parse(after);
    expect(parsed.features.length).toBeGreaterThan(0);
  });

  test('leaflet - clear all button empties GeoJSON output', async ({ page }) => {
    const ex = getExactMatch('leaflet', 'Draw GeoJSON');
    await page.goto(ex.file, { waitUntil: 'domcontentloaded' });
    await waitForMap(page, 'leaflet');

    await drawPolygonViaClick(page, 'leaflet');
    await page.locator('text=Clear All').click();
    await page.waitForTimeout(300);

    const val = await page.locator('#geojson-output').inputValue();
    const parsed = JSON.parse(val);
    expect(parsed.features.length).toBe(0);
  });

  test('maplibre - draw polygon via API adds features', async ({ page }) => {
    const ex = getExactMatch('maplibre', 'Draw Polygon');
    await page.goto(ex.file, { waitUntil: 'domcontentloaded' });
    await waitForMap(page, 'maplibre');

    const featureCount = await page.evaluate(() => {
      const d = window.draw;
      if (!d) return -1;
      d.add({
        type: 'Feature',
        geometry: { type: 'Polygon', coordinates: [[[-0.1, 51.5], [0.1, 51.5], [0.1, 51.6], [-0.1, 51.6], [-0.1, 51.5]]] },
        properties: {}
      });
      return d.getAll().features.length;
    });
    expect(featureCount).toBeGreaterThan(0);
  });

  test('openlayers - draw polygon interaction does not crash', async ({ page }) => {
    const ex = getExample('openlayers', 'drawing tools');
    await page.goto(ex.file, { waitUntil: 'domcontentloaded' });
    await waitForMap(page, 'openlayers');

    await drawPolygonViaClick(page, 'openlayers');
  });
});

// ===================== Context Menu =====================
test.describe('Context Menu', () => {
  test('leaflet - right click on map changes output', async ({ page }) => {
    const ex = getExactMatch('leaflet', 'Context Menu');
    await page.goto(ex.file, { waitUntil: 'domcontentloaded' });
    await waitForMap(page, 'leaflet');

    // Fire the contextmenu event to show the menu, then click the first item
    const clicked = await page.evaluate(() => {
      const m = window._leafletMap;
      if (!m) return 'no map';
      const center = m.getCenter();
      m.fire('contextmenu', {
        latlng: center,
        layerPoint: m.latLngToLayerPoint(center),
        containerPoint: m.latLngToContainerPoint(center),
        originalEvent: { button: 2, type: 'contextmenu' }
      });
      // Click the first context menu item to trigger its callback
      const menu = document.querySelector('.leaflet-contextmenu');
      if (!menu) return 'no menu';
      const firstItem = menu.querySelector('a');
      if (!firstItem) return 'no items';
      firstItem.click();
      return 'ok';
    });
    expect(clicked).toBe('ok');
    await page.waitForTimeout(500);

    const output = await page.locator('#output').textContent();
    expect(output).not.toContain('Right-click on the map');
  });
});

// ===================== Fullscreen =====================
test.describe('Fullscreen', () => {
  for (const lib of ['leaflet', 'maplibre', 'openlayers']) {
    test(`${lib} - fullscreen button can be clicked`, async ({ page }) => {
      const ex = getExample(lib, 'fullscreen');
      await page.goto(ex.file, { waitUntil: 'domcontentloaded' });
      await waitForMap(page, lib);

      const btn = page.locator([
        '.leaflet-control-fullscreen-button',
        '.maplibregl-ctrl-fullscreen',
        '.ol-full-screen'
      ].join(', '));

      if (await btn.count() > 0) {
        await btn.first().click({ force: true });
        await page.waitForTimeout(500);
      }
    });
  }
});

// ===================== Sync Maps =====================
test.describe('Sync Maps', () => {
  test('leaflet - dragging map1 pans the view', async ({ page }) => {
    const ex = getExactMatch('leaflet', 'Sync Maps');
    await page.goto(ex.file, { waitUntil: 'domcontentloaded' });

    await expect(page.locator('#map1')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('#map2')).toBeVisible({ timeout: 10000 });
    await page.waitForTimeout(2000);

    // Read CSS transform of leaflet-map-pane inside each map
    const getTransform = async (id) => {
      return page.evaluate((i) => {
        const el = document.querySelector(`#${i} .leaflet-map-pane`);
        return el ? el.style.transform : null;
      }, id);
    };

    const before1 = await getTransform('map1');
    const before2 = await getTransform('map2');

    // Pan via mouse drag on #map1
    const box = await page.locator('#map1').boundingBox();
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;
    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx - 100, cy, { steps: 10 });
    await page.mouse.up();
    await page.waitForTimeout(500);

    const after1 = await getTransform('map1');
    const after2 = await getTransform('map2');

    // Verify map1 moved
    expect(after1).not.toBe(before1);
  });
});

// ===================== Layer Toggle =====================
test.describe('Layer Toggle', () => {
  test('leaflet - layer control is present and switchable', async ({ page }) => {
    const ex = getExactMatch('leaflet', 'Layer Toggle');
    await page.goto(ex.file, { waitUntil: 'domcontentloaded' });
    await waitForMap(page, 'leaflet');

    const layerControl = page.locator('.leaflet-control-layers');
    await expect(layerControl).toBeVisible();

    await layerControl.click();
    await page.waitForTimeout(300);

    const radios = page.locator('.leaflet-control-layers-selector');
    const count = await radios.count();
    if (count >= 2) {
      await radios.nth(1).click({ force: true });
      await page.waitForTimeout(500);
    }
  });
});

// ===================== Geocoding Search =====================
test.describe('Geocoding Search', () => {
  const searches = [
    { lib: 'leaflet', match: 'geocoding' },
    { lib: 'maplibre', match: 'geocode' },
    { lib: 'openlayers', match: 'geocode' },
  ];

  for (const { lib, match } of searches) {
    test(`${lib} - search input accepts text and submits`, async ({ page }) => {
      const ex = getExample(lib, match);
      await page.goto(ex.file, { waitUntil: 'domcontentloaded' });
      await waitForMap(page, lib);

      await page.locator('#search-input').fill('London');
      await page.waitForTimeout(300);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(3000);
    });
  }
});

// ===================== Mobile Viewport =====================
test.describe('Mobile Viewport', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  for (const lib of ['leaflet', 'maplibre', 'openlayers']) {
    test(`${lib} - basic map renders on mobile viewport`, async ({ page }) => {
      const ex = getExample(lib, 'basic');
      await page.goto(ex.file, { waitUntil: 'domcontentloaded' });
      await waitForMap(page, lib);

      const box = await page.locator(MAP_SEL[lib]).boundingBox();
      expect(box.width).toBeGreaterThan(0);
      expect(box.height).toBeGreaterThan(0);
    });
  }
});
