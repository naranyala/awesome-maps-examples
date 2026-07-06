const map = L.map('map').setView([51.505, -0.09], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
        
        let points = [];
        let hullLayer = null;
        let markersLayer = L.layerGroup().addTo(map);
        
        function updateHull() {
            if (hullLayer) map.removeLayer(hullLayer);
            if (points.length < 3) return;
            
            const fc = turf.featureCollection(points);
            const hull = turf.convex(fc, { concavity: 2 });
            
            if (hull) {
                hullLayer = L.geoJSON(hull, {
                    style: { color: '#8b5cf6', weight: 2, fillColor: '#8b5cf6', fillOpacity: 0.15, dashArray: '5,5' }
                }).addTo(map);
            }
        }
        
        map.on('click', function(e) {
            const pt = turf.point([e.latlng.lng, e.latlng.lat]);
            points.push(pt);
            
            L.circleMarker(e.latlng, { radius: 5, color: '#8b5cf6', fillColor: '#8b5cf6', fillOpacity: 0.8, weight: 1 }).addTo(markersLayer);
            updateHull();
        });
        
        function clearPoints() {
            points = [];
            markersLayer.clearLayers();
            if (hullLayer) map.removeLayer(hullLayer);
        }