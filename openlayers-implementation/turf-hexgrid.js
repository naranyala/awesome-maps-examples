const vectorSource = new ol.source.Vector();
const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
        fill: new ol.style.Fill({ color: 'rgba(59,130,246,0.1)' }),
        stroke: new ol.style.Stroke({ color: '#3b82f6', width: 1 })
    })
});

const map = new ol.Map({
    target: 'map',
    layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer],
    view: new ol.View({ center: ol.proj.fromLonLat([-0.09, 51.505]), zoom: 9 })
});

const bbox = [-0.5, 51.3, 0.3, 51.7];

window.updateGrid = function(km) {
    document.getElementById('size-val').textContent = km;
    vectorSource.clear();
    const grid = turf.hexGrid(bbox, parseFloat(km), { units: 'kilometers' });
    const features = new ol.format.GeoJSON().readFeatures(grid, { featureProjection: 'EPSG:3857' });
    features.forEach(f => vectorSource.addFeature(f));
    document.getElementById('cell-count').textContent = grid.features.length;
};

window.updateGrid(5);
