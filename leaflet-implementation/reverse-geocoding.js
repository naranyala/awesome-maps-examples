const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '\u00a9 OpenStreetMap' }).addTo(map);

let marker = null;

map.on('click', async function(e) {
    const { lat, lng } = e.latlng;
    document.getElementById('address-name').textContent = 'Looking up...';
    document.getElementById('address-detail').textContent = '';
    document.getElementById('address-coords').textContent = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;

    if (marker) map.removeLayer(marker);
    marker = L.marker(e.latlng).addTo(map);

    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`);
        const data = await res.json();
        if (data.display_name) {
            const parts = data.display_name.split(', ');
            document.getElementById('address-name').textContent = parts.slice(0, 3).join(', ');
            document.getElementById('address-detail').textContent = parts.slice(3).join(', ');
        } else {
            document.getElementById('address-name').textContent = 'No address found';
        }
    } catch {
        document.getElementById('address-name').textContent = 'Geocoding failed';
    }
});
