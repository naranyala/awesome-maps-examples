const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19, attribution: '© OpenStreetMap'
        }).addTo(map);

        let marker = L.marker([51.505, -0.09]).addTo(map).bindPopup('London').openPopup();

        function flyTo(lat, lng, zoom, name) {
            map.flyTo([lat, lng], zoom, { duration: 2 });
            setTimeout(() => {
                marker.setLatLng([lat, lng]).setPopupContent(name).openPopup();
                document.getElementById('info').textContent = `Current: ${name} (${lat.toFixed(3)}, ${lng.toFixed(3)})`;
            }, 2100);
        }

        map.on('move', () => {
            const c = map.getCenter();
            document.getElementById('info').textContent = `Lat: ${c.lat.toFixed(4)}, Lng: ${c.lng.toFixed(4)}, Zoom: ${map.getZoom()}`;
        });