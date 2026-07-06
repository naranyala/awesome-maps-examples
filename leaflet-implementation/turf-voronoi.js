const map = L.map('map').setView([51.505, -0.09], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
        
        let points = [];
        let voronoiLayer = null;
        let markersLayer = L.layerGroup().addTo(map);
        
        const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
        
        function updateVoronoi() {
            if (voronoiLayer) map.removeLayer(voronoiLayer);
            if (points.length < 3) return;
            
            const bbox = [-180, -90, 180, 90];
            const fc = turf.featureCollection(points);
            const voronoi = turf.voronoi(fc, { bbox });
            
            if (voronoi) {
                voronoiLayer = L.geoJSON(voronoi, {
                    style: (feature, i) => ({
                        color: colors[feature.properties?.point_index % colors.length] || '#666',
                        fillColor: colors[feature.properties?.point_index % colors.length] || '#666',
                        fillOpacity: 0.15,
                        weight: 2
                    })
                }).addTo(map);
            }
        }
        
        map.on('click', function(e) {
            const pt = turf.point([e.latlng.lng, e.latlng.lat]);
            pt.properties = { point_index: points.length };
            points.push(pt);
            
            L.marker(e.latlng, {
                icon: L.divIcon({ className: '', html: `<div style="width:10px;height:10px;background:${colors[points.length % colors.length]};border-radius:50%;border:2px solid white;box-shadow:0 0 4px rgba(0,0,0,0.3);"></div>`, iconSize: [14, 14] })
            }).addTo(markersLayer);
            
            updateVoronoi();
        });
        
        function clearPoints() {
            points = [];
            markersLayer.clearLayers();
            if (voronoiLayer) map.removeLayer(voronoiLayer);
        }