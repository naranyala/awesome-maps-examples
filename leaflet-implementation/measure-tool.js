const map = L.map('map').setView([51.505, -0.09], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '\u00a9 OpenStreetMap' }).addTo(map);

let points = [];
let markers = [];
let lineLayer = null;
let totalKm = 0;

map.on('click', function(e) {
    const ll = e.latlng;
    points.push([ll.lng, ll.lat]);
    markers.push(L.circleMarker(ll, { radius: 5, color: '#60a5fa', fillColor: '#60a5fa', fillOpacity: 0.9 }).addTo(map));

    if (points.length >= 2) {
        if (lineLayer) map.removeLayer(lineLayer);
        lineLayer = L.geoJSON(turf.lineString(points), { style: { color: '#60a5fa', weight: 2, opacity: 0.8 } }).addTo(map);

        totalKm = 0;
        for (let i = 1; i < points.length; i++) {
            totalKm += turf.distance(turf.point(points[i - 1]), turf.point(points[i]), { units: 'kilometers' });
        }
        document.getElementById('distance').textContent = totalKm.toFixed(2);
    }
});

function resetMeasure() {
    points = [];
    markers.forEach(m => map.removeLayer(m));
    markers = [];
    if (lineLayer) map.removeLayer(lineLayer);
    totalKm = 0;
    document.getElementById('distance').textContent = '0.00';
}
