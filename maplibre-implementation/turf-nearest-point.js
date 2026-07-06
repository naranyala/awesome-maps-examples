const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [-0.09, 51.505], zoom: 10
        });
        
        const stores = turf.featureCollection([
            turf.point([-0.12, 51.51], { name: 'Store A' }),
            turf.point([-0.08, 51.52], { name: 'Store B' }),
            turf.point([-0.05, 51.49], { name: 'Store C' }),
            turf.point([-0.15, 51.48], { name: 'Store D' }),
            turf.point([-0.02, 51.50], { name: 'Store E' })
        ]);
        
        let clickMarker = null, nearestMarker = null, nearestLine = null;
        
        map.on('load', () => {
            // Add store markers
            stores.features.forEach(f => {
                const el = document.createElement('div');
                el.style.cssText = 'width:14px;height:14px;background:#10b981;border-radius:50%;border:2px solid white;box-shadow:0 0 4px rgba(0,0,0,0.3);';
                new maplibregl.Marker({ element: el })
                    .setLngLat(f.geometry.coordinates)
                    .setPopup(new maplibregl.Popup().setText(f.properties.name))
                    .addTo(map);
            });
            
            map.addSource('nearest-line', { type: 'geojson', data: turf.featureCollection([]) });
            map.addLayer({ id: 'nearest-line-layer', type: 'line', source: 'nearest-line', paint: { 'line-color': '#ef4444', 'line-width': 2, 'line-dasharray': [5, 5] } });
        });
        
        map.on('click', (e) => {
            if (clickMarker) clickMarker.remove();
            if (nearestMarker) nearestMarker.remove();
            
            const pt = turf.point([e.lngLat.lng, e.lngLat.lat]);
            const nearest = turf.nearestPoint(pt, stores);
            const dist = turf.distance(pt, nearest, { units: 'kilometers' }).toFixed(2);
            
            // Draw line
            map.getSource('nearest-line').setData(turf.lineString([
                [e.lngLat.lng, e.lngLat.lat],
                nearest.geometry.coordinates
            ]));
            
            // Click marker
            const el = document.createElement('div');
            el.style.cssText = 'width:12px;height:12px;background:#ef4444;border-radius:50%;border:2px solid white;';
            clickMarker = new maplibregl.Marker({ element: el })
                .setLngLat([e.lngLat.lng, e.lngLat.lat])
                .setPopup(new maplibregl.Popup().setHTML(`Nearest: ${nearest.properties.name}<br>${dist} km`))
                .addTo(map);
            clickMarker.togglePopup();
        });