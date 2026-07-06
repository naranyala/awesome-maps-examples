const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-0.09, 51.505],
    zoom: 13
});

let marker = null;

map.on('click', async function(e) {
    const { lng, lat } = e.lngLat;
    document.getElementById('address-name').textContent = 'Looking up...';
    document.getElementById('address-detail').textContent = '';
    document.getElementById('address-coords').textContent = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;

    if (marker) marker.remove();
    marker = new maplibregl.Marker().setLngLat([lng, lat]).addTo(map);

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
