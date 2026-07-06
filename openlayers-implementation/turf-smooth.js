const vectorSource = new ol.source.Vector();
const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
        fill: new ol.style.Fill({ color: 'rgba(59,130,246,0.2)' }),
        stroke: new ol.style.Stroke({ color: '#3b82f6', width: 2 })
    })
});

const map = new ol.Map({
    target: 'map',
    layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer],
    view: new ol.View({ center: ol.proj.fromLonLat([-0.09, 51.505]), zoom: 12 })
});

const jagged = turf.polygon([[
    [-0.14, 51.52], [-0.12, 51.515], [-0.10, 51.525], [-0.08, 51.51],
    [-0.06, 51.52], [-0.05, 51.50], [-0.07, 51.49], [-0.09, 51.48],
    [-0.11, 51.49], [-0.13, 51.48], [-0.15, 51.50], [-0.14, 51.52]
]]);

function renderGeoJSON(geojson) {
    vectorSource.clear();
    const feats = new ol.format.GeoJSON().readFeatures(geojson, { featureProjection: 'EPSG:3857' });
    feats.forEach(f => vectorSource.addFeature(f));
}

window.updateSmooth = function(iter, isReset) {
    if (isReset) {
        document.getElementById('iterations').value = 1;
        document.getElementById('iter-val').textContent = '1';
        iter = 1;
    }
    const smoothed = turf.polygonSmooth(jagged, { iterations: parseInt(iter) });
    const result = smoothed.features.length ? smoothed : jagged;
    renderGeoJSON(result);
    const coords = result.geometry.coordinates[0];
    document.getElementById('vert-count').textContent = coords.length;
};

window.resetPoly = function() { updateSmooth(1, true); };

renderGeoJSON(jagged);
