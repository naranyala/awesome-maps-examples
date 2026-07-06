const vectorSource = new ol.source.Vector();
const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({ color: '#60a5fa', width: 2 })
    })
});

const map = new ol.Map({
    target: 'map',
    layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer],
    view: new ol.View({ center: ol.proj.fromLonLat([-0.09, 51.505]), zoom: 11 })
});

let points = [];
let totalKm = 0;

map.on('click', function(evt) {
    const lonlat = ol.proj.toLonLat(evt.coordinate);
    points.push(lonlat);

    const ptFeat = new ol.Feature(new ol.geom.Point(evt.coordinate));
    ptFeat.setStyle(new ol.style.Style({
        image: new ol.style.CircleStyle({ radius: 5, fill: new ol.style.Fill({ color: '#60a5fa' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) })
    }));
    vectorSource.addFeature(ptFeat);

    if (points.length >= 2) {
        const coords = points.map(p => ol.proj.fromLonLat(p));
        const lineFeat = new ol.Feature(new ol.geom.LineString(coords));
        lineFeat.setStyle(new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#60a5fa', width: 2 })
        }));
        vectorSource.clear();
        vectorSource.addFeature(lineFeat);
        points.forEach(p => {
            const f = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat(p)));
            f.setStyle(new ol.style.Style({
                image: new ol.style.CircleStyle({ radius: 5, fill: new ol.style.Fill({ color: '#60a5fa' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) })
            }));
            vectorSource.addFeature(f);
        });

        totalKm = 0;
        for (let i = 1; i < points.length; i++) {
            totalKm += turf.distance(turf.point(points[i - 1]), turf.point(points[i]), { units: 'kilometers' });
        }
        document.getElementById('distance').textContent = totalKm.toFixed(2);
    }
});

window.resetMeasure = function() {
    points = [];
    vectorSource.clear();
    totalKm = 0;
    document.getElementById('distance').textContent = '0.00';
};
