const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);

        const userIcon = L.divIcon({
            html: '<div style="width:16px;height:16px;background:#3b82f6;border:3px solid #fff;border-radius:50%;box-shadow:0 0 10px rgba(59,130,246,.5)"></div>',
            className: '', iconSize: [22, 22], iconAnchor: [11, 11]
        });

        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                (pos) => {
                    const { latitude: lat, longitude: lng, accuracy } = pos.coords;
                    map.setView([lat, lng], 14);
                    L.marker([lat, lng], { icon: userIcon }).addTo(map);
                    L.circle([lat, lng], { radius: accuracy, color: '#3b82f6', fillOpacity: 0.1 }).addTo(map);
                    document.getElementById('info').textContent = `📍 ${lat.toFixed(5)}, ${lng.toFixed(5)} ± ${Math.round(accuracy)}m`;
                },
                () => { document.getElementById('info').textContent = '⚠️ Geolocation denied — showing default location'; }
            );
        }