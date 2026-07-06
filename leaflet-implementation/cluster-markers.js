const map = L.map('map').setView([51.505, -0.09], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19, attribution: '© OpenStreetMap'
        }).addTo(map);

        const markers = L.markerClusterGroup();
        for (let i = 0; i < 100; i++) {
            const lat = 51.505 + (Math.random() - 0.5) * 0.15;
            const lng = -0.09 + (Math.random() - 0.5) * 0.15;
            markers.addLayer(L.marker([lat, lng]).bindPopup(`Point #${i+1}<br>Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`));
        }
        map.addLayer(markers);