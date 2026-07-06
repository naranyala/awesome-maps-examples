const vectorSource = new ol.source.Vector();
const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
        fill: new ol.style.Fill({ color: 'rgba(59,130,246,0.2)' }),
        stroke: new ol.style.Stroke({ color: '#60a5fa', width: 2 })
    })
});

const map = new ol.Map({
    target: 'map',
    layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer],
    view: new ol.View({ center: ol.proj.fromLonLat([-0.09, 51.505]), zoom: 12 })
});

const complexPoly = turf.polygon([[
    [-0.14, 51.5], [-0.13, 51.51], [-0.12, 51.505], [-0.11, 51.515],
    [-0.10, 51.505], [-0.09, 51.51], [-0.08, 51.5], [-0.09, 51.49],
    [-0.10, 51.495], [-0.11, 51.485], [-0.12, 51.495], [-0.13, 51.49],
    [-0.14, 51.5]
]]);

function renderSimplify(tolerance) {
    vectorSource.clear();
    const simplified = turf.simplify(complexPoly, { tolerance: parseFloat(tolerance), highQuality: false });
    const features = new ol.format.GeoJSON().readFeatures(simplified, { featureProjection: 'EPSG:3857' });
    features.forEach(f => vectorSource.addFeature(f));
    const coords = simplified.geometry.coordinates[0];
    document.getElementById('vert-count').textContent = coords.length;
}

window.updateSimplify = function(tolerance) {
    document.getElementById('tolerance-val').textContent = tolerance;
    renderSimplify(tolerance);
};

renderSimplify(0.01);
