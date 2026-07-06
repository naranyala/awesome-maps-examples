const london = [51.5074, -0.1275];
        const map = L.map('map').setView(london, 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);

        const fenceRadius = 50;
        const fenceCircle = turf.circle(london.slice().reverse(), fenceRadius, { steps: 64, units: 'kilometers' });
        const fenceCoords = fenceCircle.geometry.coordinates[0].map(c => [c[1], c[0]]);
        L.polygon(fenceCoords, { color: '#3b82f6', weight: 2, dashArray: '5,5', fillColor: 'rgba(59,130,246,0.15)' }).addTo(map);
        L.circleMarker(london, { radius: 4, color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 1 }).addTo(map);

        const markerGroup = L.layerGroup().addTo(map);
        const info = document.getElementById('info');

        map.on('click', function (e) {
            markerGroup.clearLayers();
            const m = L.circleMarker(e.latlng, { radius: 8, color: '#22c55e', fillColor: '#22c55e', fillOpacity: 1 }).addTo(markerGroup);
            const dist = turf.distance(turf.point([e.latlng.lng, e.latlng.lat]), turf.point([london[1], london[0]]), { units: 'kilometers' });
            const inside = dist <= fenceRadius;
            info.className = 'info ' + (inside ? 'inside' : 'outside');
            info.textContent = inside ? '✅ Inside fence (' + dist.toFixed(1) + 'km)' : '❌ Outside fence (' + dist.toFixed(1) + 'km)';
        });