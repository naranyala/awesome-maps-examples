const map = L.map('map').setView([51.50, -0.06], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);

        const zones = [
            { name: 'Zone A', value: 85, coords: [[51.52, -0.12], [51.52, -0.06], [51.49, -0.06], [51.49, -0.12]] },
            { name: 'Zone B', value: 62, coords: [[51.52, -0.06], [51.52, 0.0], [51.49, 0.0], [51.49, -0.06]] },
            { name: 'Zone C', value: 94, coords: [[51.49, -0.12], [51.49, -0.06], [51.46, -0.06], [51.46, -0.12]] }
        ];

        zones.forEach(z => {
            const polygon = L.polygon(z.coords, { color: '#3b82f6', weight: 2, fillColor: 'rgba(59,130,246,0.3)', fillOpacity: 0.3 }).addTo(map);
            polygon.on('mouseover', function (e) {
                this.setStyle({ fillOpacity: 0.7, weight: 3, color: '#2563eb' });
                const tip = document.getElementById('tooltip');
                tip.style.display = 'block';
                tip.style.left = (e.originalEvent.clientX + 12) + 'px';
                tip.style.top = (e.originalEvent.clientY - 10) + 'px';
                tip.textContent = z.name + ' — Score: ' + z.value;
                map.getContainer().style.cursor = 'pointer';
            });
            polygon.on('mouseout', function () {
                this.setStyle({ fillOpacity: 0.3, weight: 2, color: '#3b82f6' });
                document.getElementById('tooltip').style.display = 'none';
                map.getContainer().style.cursor = '';
            });
        });