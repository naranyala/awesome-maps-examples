const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        L.marker([51.505, -0.09]).addTo(map)
            .bindPopup('<b>London</b><br>Hello from Leaflet!').openPopup();