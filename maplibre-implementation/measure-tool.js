const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-0.09, 51.505],
    zoom: 11
});

let points = [];
let markers = [];
let lineId = null;
let totalKm = 0;

map.on('load', () => {
    map.addSource('measure-line', { type: 'geojson', data: turf.featureCollection([]) });
    map.addLayer({ id: 'measure-line-layer', type: 'line', source: 'measure-line', paint: { 'line-color': '#60a5fa', 'line-width': 2 } });
});

map.on('click', function(e) {
    const lng = e.lngLat.lng, lat = e.lngLat.lat;
    points.push([lng, lat]);

    const el = document.createElement('div');
    el.style.cssText = 'width:10px;height:10px;background:#60a5fa;border:2px solid #fff;border-radius:50%;cursor:pointer;';
    markers.push(new maplibregl.Marker({ element: el }).setLngLat([lng, lat]).addTo(map));

    if (points.length >= 2) {
        const geojson = turf.lineString(points);
        map.getSource('measure-line').setData(geojson);

        totalKm = 0;
        for (let i = 1; i < points.length; i++) {
            totalKm += turf.distance(turf.point(points[i - 1]), turf.point(points[i]), { units: 'kilometers' });
        }
        document.getElementById('distance').textContent = totalKm.toFixed(2);
    }
});

function resetMeasure() {
    points = [];
    markers.forEach(m => m.remove());
    markers = [];
    map.getSource('measure-line').setData(turf.featureCollection([]));
    totalKm = 0;
    document.getElementById('distance').textContent = '0.00';
}
