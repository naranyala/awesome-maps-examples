const regions = [
    { name: 'Soho', type: 'commercial', area_km2: 0.8, population: 3000, coords: [[-0.14,51.515],[-0.13,51.515],[-0.13,51.513],[-0.14,51.513],[-0.14,51.515]] },
    { name: 'Covent Garden', type: 'commercial', area_km2: 0.5, population: 2500, coords: [[-0.13,51.517],[-0.12,51.517],[-0.12,51.515],[-0.13,51.515],[-0.13,51.517]] },
    { name: 'Hyde Park', type: 'park', area_km2: 1.4, population: 0, coords: [[-0.18,51.512],[-0.15,51.512],[-0.15,51.505],[-0.18,51.505],[-0.18,51.512]] },
    { name: 'Mayfair', type: 'commercial', area_km2: 0.6, population: 2000, coords: [[-0.15,51.512],[-0.14,51.512],[-0.14,51.508],[-0.15,51.508],[-0.15,51.512]] },
    { name: 'Thames River', type: 'water', area_km2: 0.3, population: 0, coords: [[-0.12,51.505],[-0.06,51.505],[-0.06,51.503],[-0.12,51.503],[-0.12,51.505]] }
];

const vectorSource = new ol.source.Vector();
const regionFeatures = regions.map((r, i) => {
    const poly = new ol.geom.Polygon([r.coords.map(c => ol.proj.fromLonLat(c))]);
    const f = new ol.Feature(poly);
    f.setProperties(r);
    f.setId(i);
    vectorSource.addFeature(f);
    return f;
});

const colorMap = { commercial: '#ef4444', park: '#10b981', water: '#3b82f6' };

const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: function(f) {
        const type = f.get('type');
        const c = colorMap[type] || '#ef4444';
        return new ol.style.Style({
            fill: new ol.style.Fill({ color: f.get('hover') ? 'rgba(255,255,255,0.1)' : c + '33' }),
            stroke: new ol.style.Stroke({ color: c, width: 2 })
        });
    }
});

const map = new ol.Map({
    target: 'map',
    layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer],
    view: new ol.View({ center: ol.proj.fromLonLat([-0.09, 51.505]), zoom: 12 })
});

map.on('pointermove', function(e) {
    vectorSource.getFeatures().forEach(f => f.set('hover', false));
    map.forEachFeatureAtPixel(e.pixel, function(f) { f.set('hover', true); });
    vectorSource.changed();
});

map.on('click', function(e) {
    map.forEachFeatureAtPixel(e.pixel, function(f) { showProps(f.getProperties()); });
});

function showProps(props) {
    const div = document.getElementById('inspector');
    div.style.display = 'block';
    div.innerHTML = '<div class="name">' + props.name + '</div>' +
        ['type', 'area_km2', 'population'].filter(k => props[k] !== undefined).map(k => '<div class="prop">' + k + ': <span>' + props[k] + '</span></div>').join('');
    setTimeout(() => { div.style.display = 'none'; }, 5000);
}

window.filterBy = function(type) {
    regionFeatures.forEach(f => {
        if (type === 'all' || f.get('type') === type) vectorSource.addFeature(f);
        else vectorSource.removeFeature(f);
    });
};
