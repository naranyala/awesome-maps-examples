const map = L.map('map').setView([51.505, -0.09], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
        const layer = L.layerGroup().addTo(map);

        const hourlyData = [];
        for (let h = 0; h < 24; h++) {
            const pts = [];
            for (let i = 0; i < 30; i++) {
                pts.push({
                    lat: 51.505 + (Math.random() - 0.5) * 0.08,
                    lng: -0.09 + (Math.random() - 0.5) * 0.1,
                    intensity: Math.max(0, Math.sin((h - 6) * Math.PI / 12) + Math.random() * 0.3)
                });
            }
            hourlyData.push(pts);
        }

        function updateTime(h) {
            const hour = parseInt(h);
            document.getElementById('time-label').textContent = hour.toString().padStart(2, '0') + ':00';
            layer.clearLayers();
            hourlyData[hour].forEach(p => {
                const color = p.intensity > 0.7 ? '#ef4444' : p.intensity > 0.3 ? '#f59e0b' : '#3b82f6';
                L.circleMarker([p.lat, p.lng], { radius: 3 + p.intensity * 10, color, fillColor: color, fillOpacity: 0.7 }).addTo(layer);
            });
        }
        updateTime(12);