const map = L.map('map').setView([51.505, -0.09], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
        
        let vertices = [];
        let markers = [];
        let polygonLayer = null;
        
        map.on('click', function(e) {
            vertices.push([e.latlng.lng, e.latlng.lat]);
            markers.push(L.circleMarker(e.latlng, { radius: 5, color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 0.8 }).addTo(map));
            
            if (vertices.length >= 3) {
                if (polygonLayer) map.removeLayer(polygonLayer);
                const ring = [...vertices, vertices[0]];
                const poly = turf.polygon([ring]);
                polygonLayer = L.geoJSON(poly, { style: { color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 0.2, weight: 2 } }).addTo(map);
                
                const area = turf.area(poly);
                const km2 = (area / 1e6).toFixed(3);
                document.getElementById('area-display').textContent = `Area: ${km2} km²`;
            }
        });
        
        function clearPolygon() {
            vertices = [];
            markers.forEach(m => map.removeLayer(m));
            markers = [];
            if (polygonLayer) map.removeLayer(polygonLayer);
            document.getElementById('area-display').textContent = 'Area: 0 km²';
        }