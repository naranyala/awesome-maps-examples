const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    const latEl = document.getElementById('lat-val');
    const lngEl = document.getElementById('lng-val');
    let popup = L.popup();

    map.on('click', function(e) {
        latEl.textContent = e.latlng.lat.toFixed(5);
        lngEl.textContent = e.latlng.lng.toFixed(5);
        
        popup
            .setLatLng(e.latlng)
            .setContent("Copied!<br><span style='color:#ef4444;font-size:0.85em;margin-top:4px;display:block'>" + e.latlng.lat.toFixed(4) + ", " + e.latlng.lng.toFixed(4) + "</span>")
            .openOn(map);
    });