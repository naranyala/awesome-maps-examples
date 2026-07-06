const vectorSource = new ol.source.Vector();
const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: function(f) {
        const id = f.get('id') || 0;
        return new ol.style.Style({
            fill: new ol.style.Fill({ color: id === 2 ? 'rgba(245,158,11,0.3)' : (id === 0 ? 'rgba(59,130,246,0.2)' : 'rgba(16,185,129,0.2)') }),
            stroke: new ol.style.Stroke({ color: id === 2 ? '#f59e0b' : (id === 0 ? '#3b82f6' : '#10b981'), width: 2 })
        });
    }
});

const map = new ol.Map({
    target: 'map',
    layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer],
    view: new ol.View({ center: ol.proj.fromLonLat([-0.09, 51.505]), zoom: 13 })
});

const polyA = turf.polygon([[
    [-0.12, 51.51], [-0.08, 51.51], [-0.08, 51.49], [-0.12, 51.49], [-0.12, 51.51]
]]);
const polyB = turf.polygon([[
    [-0.10, 51.52], [-0.06, 51.52], [-0.06, 51.50], [-0.10, 51.50], [-0.10, 51.52]
]]);

let dissolved = false;

function renderFeature(geojson, id) {
    const feat = new ol.format.GeoJSON().readFeatures(geojson, { featureProjection: 'EPSG:3857' });
    feat.forEach(f => { f.set('id', id); vectorSource.addFeature(f); });
}

function showOriginal() {
    vectorSource.clear();
    renderFeature(polyA, 0);
    renderFeature(polyB, 1);
    dissolved = false;
    document.getElementById('poly-count').textContent = '2 separate polygons';
}

window.dissolve = function() {
    if (dissolved) return;
    vectorSource.clear();
    const unioned = turf.union(polyA, polyB);
    renderFeature(unioned, 2);
    dissolved = true;
    document.getElementById('poly-count').textContent = '1 dissolved polygon';
};

window.resetPolys = showOriginal;

showOriginal();
