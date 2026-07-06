const map = L.map('map').setView([51.505, -0.09], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
        
        // Create a sample polygon
        const polygon = turf.polygon([[
            [-0.2, 51.45], [-0.05, 51.45], [-0.05, 51.55], [-0.2, 51.55], [-0.2, 51.45]
        ]]);
        
        L.geoJSON(polygon, {
            style: { color: '#3b82f6', weight: 2, fillColor: '#3b82f6', fillOpacity: 0.15 }
        }).addTo(map).bindPopup('Target Polygon');
        
        let testMarker = null;
        
        map.on('click', function(e) {
            if (testMarker) map.removeLayer(testMarker);
            
            const pt = turf.point([e.latlng.lng, e.latlng.lat]);
            const inside = turf.booleanPointInPolygon(pt, polygon);
            
            testMarker = L.circleMarker(e.latlng, {
                radius: 8,
                color: inside ? '#10b981' : '#ef4444',
                fillColor: inside ? '#10b981' : '#ef4444',
                fillOpacity: 0.8,
                weight: 2
            }).addTo(map).bindPopup(inside ? '✅ Inside polygon' : '❌ Outside polygon').openPopup();
            
            document.getElementById('result').innerHTML = `<div class="result ${inside ? 'inside' : 'outside'}">${inside ? '✅ Inside' : '❌ Outside'}</div>`;
        });