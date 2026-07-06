const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-0.09, 51.505],
    zoom: 13
});

const polyA = turf.polygon([[
    [-0.12, 51.51], [-0.08, 51.51], [-0.08, 51.49], [-0.12, 51.49], [-0.12, 51.51]
]]);
const polyB = turf.polygon([[
    [-0.10, 51.52], [-0.06, 51.52], [-0.06, 51.50], [-0.10, 51.50], [-0.10, 51.52]
]]);
const initialFC = turf.featureCollection([polyA, polyB]);

let dissolved = false;

map.on('load', () => {
    map.addSource('dissolve-source', { type: 'geojson', data: initialFC });
    map.addLayer({
        id: 'dissolve-fill', type: 'fill', source: 'dissolve-source',
        paint: { 'fill-color': ['case', ['==', ['get', 'id'], 0], '#3b82f6', '#10b981'], 'fill-opacity': 0.2 }
    });
    map.addLayer({
        id: 'dissolve-outline', type: 'line', source: 'dissolve-source',
        paint: { 'line-color': ['case', ['==', ['get', 'id'], 0], '#3b82f6', '#10b981'], 'line-width': 2 }
    });
});

window.dissolve = function() {
    if (dissolved) return;
    const unioned = turf.union(polyA, polyB);
    map.getSource('dissolve-source').setData(unioned);
    dissolved = true;
    document.getElementById('poly-count').textContent = '1 dissolved polygon';
};

window.resetPolys = function() {
    map.getSource('dissolve-source').setData(initialFC);
    dissolved = false;
    document.getElementById('poly-count').textContent = '2 separate polygons';
};
