const route = [[51.505, -0.09], [51.51, -0.08], [51.515, -0.07], [51.52, -0.05], [51.518, -0.03], [51.525, -0.01], [51.52, 0.01], [51.515, 0.03], [51.51, 0.05], [51.505, 0.07], [51.5, 0.09], [51.495, 0.11]];

        const map = L.map('map').setView([51.51, 0.01], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);

        const lineLayer = L.layerGroup().addTo(map);
        const marker = L.circleMarker(route[0], { radius: 6, color: '#f44343', fillColor: '#f44343', fillOpacity: 1 }).addTo(map);
        let animating = false;

        function animateLine() {
            if (animating) return;
            animating = true;
            document.getElementById('playBtn').disabled = true;
            lineLayer.clearLayers();
            let step = 0;
            const coords = [];

            function frame() {
                coords.push(route[step]);
                lineLayer.clearLayers();
                L.polyline(coords, { color: '#3b82f6', weight: 3 }).addTo(lineLayer);
                marker.setLatLng(route[step]);
                step++;
                if (step < route.length) requestAnimationFrame(frame);
                else animating = false;
            }
            frame();
        }

        function resetLine() {
            animating = false;
            document.getElementById('playBtn').disabled = false;
            lineLayer.clearLayers();
            marker.setLatLng(route[0]);
        }