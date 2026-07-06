const map = L.map('map').setView([51.505, -0.09], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
        const markers = L.layerGroup().addTo(map);

        function addRandomPoint() {
            const lat = 51.505 + (Math.random() - 0.5) * 0.08;
            const lng = -0.09 + (Math.random() - 0.5) * 0.1;
            L.circleMarker([lat, lng], { radius: 5, color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 1 }).addTo(markers);
            if (markers.getLayers().length > 50) markers.removeLayer(markers.getLayers()[0]);
            document.getElementById('count').textContent = markers.getLayers().length;
        }

        for (let i = 0; i < 10; i++) addRandomPoint();
        setInterval(addRandomPoint, 800);