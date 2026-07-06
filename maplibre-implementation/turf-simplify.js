const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-0.09, 51.505],
    zoom: 12
});

const complexPoly = turf.polygon([[
    [-0.14, 51.5], [-0.13, 51.51], [-0.12, 51.505], [-0.11, 51.515],
    [-0.10, 51.505], [-0.09, 51.51], [-0.08, 51.5], [-0.09, 51.49],
    [-0.10, 51.495], [-0.11, 51.485], [-0.12, 51.495], [-0.13, 51.49],
    [-0.14, 51.5]
]]);

map.on('load', () => {
    map.addSource('simplify-source', { type: 'geojson', data: complexPoly });
    map.addLayer({ id: 'simplify-fill', type: 'fill', source: 'simplify-source', paint: { 'fill-color': '#3b82f6', 'fill-opacity': 0.2 } });
    map.addLayer({ id: 'simplify-outline', type: 'line', source: 'simplify-source', paint: { 'line-color': '#60a5fa', 'line-width': 2 } });
    updateSimplify(0.01);
});

window.updateSimplify = function(tolerance) {
    document.getElementById('tolerance-val').textContent = tolerance;
    const simplified = turf.simplify(complexPoly, { tolerance: parseFloat(tolerance), highQuality: false });
    map.getSource('simplify-source').setData(simplified);
    const coords = simplified.geometry.coordinates[0];
    document.getElementById('vert-count').textContent = coords.length;
};
