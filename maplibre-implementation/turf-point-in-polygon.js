const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [-0.09, 51.505], zoom: 10
        });
        
        const polygon = turf.polygon([[
            [-0.2, 51.45], [-0.05, 51.45], [-0.05, 51.55], [-0.2, 51.55], [-0.2, 51.45]
        ]]);
        
        let testMarker = null;
        
        map.on('load', () => {
            map.addSource('polygon', { type: 'geojson', data: polygon });
            map.addLayer({ id: 'polygon-fill', type: 'fill', source: 'polygon', paint: { 'fill-color': '#3b82f6', 'fill-opacity': 0.15 } });
            map.addLayer({ id: 'polygon-outline', type: 'line', source: 'polygon', paint: { 'line-color': '#3b82f6', 'line-width': 2 } });
        });
        
        map.on('click', (e) => {
            if (testMarker) testMarker.remove();
            
            const pt = turf.point([e.lngLat.lng, e.lngLat.lat]);
            const inside = turf.booleanPointInPolygon(pt, polygon);
            
            const el = document.createElement('div');
            el.style.cssText = `width:16px;height:16px;background:${inside ? '#10b981' : '#ef4444'};border-radius:50%;border:3px solid white;box-shadow:0 0 6px rgba(0,0,0,0.3);`;
            
            testMarker = new maplibregl.Marker({ element: el })
                .setLngLat([e.lngLat.lng, e.lngLat.lat])
                .setPopup(new maplibregl.Popup().setHTML(inside ? '✅ Inside polygon' : '❌ Outside polygon'))
                .addTo(map);
            testMarker.togglePopup();
            
            document.getElementById('result').innerHTML = `<div class="result ${inside ? 'inside' : 'outside'}">${inside ? '✅ Inside' : '❌ Outside'}</div>`;
        });