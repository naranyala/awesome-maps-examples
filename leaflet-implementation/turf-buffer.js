const map = L.map('map').setView([51.505, -0.09], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);

        let bufferLayer = null;

        map.on('click', function(e) {
            if (bufferLayer) map.removeLayer(bufferLayer);
            
            // 1. Create a Turf Point
            const pt = turf.point([e.latlng.lng, e.latlng.lat]);
            
            // 2. Calculate 10km buffer
            const buffered = turf.buffer(pt, 10, { units: 'kilometers' });
            
            // 3. Add to map
            bufferLayer = L.geoJSON(buffered, {
                style: { color: '#ef4444', weight: 2, fillColor: '#ef4444', fillOpacity: 0.2 }
            }).addTo(map);
            
            // Add center marker
            L.marker(e.latlng).addTo(bufferLayer);
        });