const map = L.map('map').setView([51.505, -0.09], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
        
        // Predefined store locations
        const stores = turf.featureCollection([
            turf.point([-0.12, 51.51], { name: 'Store A' }),
            turf.point([-0.08, 51.52], { name: 'Store B' }),
            turf.point([-0.05, 51.49], { name: 'Store C' }),
            turf.point([-0.15, 51.48], { name: 'Store D' }),
            turf.point([-0.02, 51.50], { name: 'Store E' })
        ]);
        
        // Add store markers
        stores.features.forEach(f => {
            L.circleMarker([f.geometry.coordinates[1], f.geometry.coordinates[0]], {
                radius: 8, color: '#10b981', fillColor: '#10b981', fillOpacity: 0.8, weight: 2
            }).addTo(map).bindPopup(f.properties.name);
        });
        
        let nearestLine = null;
        let nearestMarker = null;
        
        map.on('click', function(e) {
            if (nearestLine) map.removeLayer(nearestLine);
            if (nearestMarker) map.removeLayer(nearestMarker);
            
            const pt = turf.point([e.latlng.lng, e.latlng.lat]);
            const nearest = turf.nearestPoint(pt, stores);
            
            // Draw line from click to nearest
            nearestLine = L.polyline([
                [e.latlng.lat, e.latlng.lng],
                [nearest.geometry.coordinates[1], nearest.geometry.coordinates[0]]
            ], { color: '#ef4444', weight: 2, dashArray: '5,5' }).addTo(map);
            
            const dist = turf.distance(pt, nearest, { units: 'kilometers' }).toFixed(2);
            nearestMarker = L.circleMarker(e.latlng, { radius: 6, color: '#ef4444', fillColor: '#ef4444', fillOpacity: 0.8, weight: 2 })
                .addTo(map)
                .bindPopup(`Nearest: ${nearest.properties.name} (${dist} km)`).openPopup();
        });