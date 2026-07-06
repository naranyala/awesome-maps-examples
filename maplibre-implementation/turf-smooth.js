const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-0.09, 51.505],
    zoom: 12
});

const jagged = turf.polygon([[
    [-0.14, 51.52], [-0.12, 51.515], [-0.10, 51.525], [-0.08, 51.51],
    [-0.06, 51.52], [-0.05, 51.50], [-0.07, 51.49], [-0.09, 51.48],
    [-0.11, 51.49], [-0.13, 51.48], [-0.15, 51.50], [-0.14, 51.52]
]]);

map.on('load', () => {
    map.addSource('smooth-source', { type: 'geojson', data: jagged });
    map.addLayer({ id: 'smooth-fill', type: 'fill', source: 'smooth-source', paint: { 'fill-color': '#3b82f6', 'fill-opacity': 0.2 } });
    map.addLayer({ id: 'smooth-outline', type: 'line', source: 'smooth-source', paint: { 'line-color': '#3b82f6', 'line-width': 2 } });
    updateSmooth(1);
});

window.updateSmooth = function(iter, isReset) {
    if (isReset) {
        document.getElementById('iterations').value = 1;
        document.getElementById('iter-val').textContent = '1';
        iter = 1;
    }
    const smoothed = turf.polygonSmooth(jagged, { iterations: parseInt(iter) });
    const result = smoothed.features.length ? smoothed : jagged;
    map.getSource('smooth-source').setData(result);
    const coords = result.geometry.coordinates[0];
    document.getElementById('vert-count').textContent = coords.length;
};

window.resetPoly = function() { updateSmooth(1, true); };
