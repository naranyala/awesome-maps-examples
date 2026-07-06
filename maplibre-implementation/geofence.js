const london = [-0.1275, 51.5074];
        const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: london, zoom: 9 });
        map.addControl(new maplibregl.NavigationControl());

        const fenceRadius = 50;
        const circle = turf.circle(london, fenceRadius, { steps: 64, units: 'kilometers' });

        map.on('load', function() {
            map.addSource('fence', { type: 'geojson', data: circle });
            map.addLayer({ id: 'fence-fill', type: 'fill', source: 'fence', paint: { 'fill-color': '#3b82f6', 'fill-opacity': 0.1 } });
            map.addLayer({ id: 'fence-outline', type: 'line', source: 'fence', paint: { 'line-color': '#3b82f6', 'line-width': 2, 'line-dasharray': [5, 5] } });
            map.addSource('marker', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
            map.addLayer({ id: 'marker-layer', type: 'circle', source: 'marker', paint: { 'circle-radius': 8, 'circle-color': '#22c55e', 'circle-stroke-color': '#fff', 'circle-stroke-width': 2 } });
        });

        const info = document.getElementById('info');
        map.on('click', function(e) {
            const pt = turf.point([e.lngLat.lng, e.lngLat.lat]);
            const center = turf.point(london);
            const dist = turf.distance(pt, center, { units: 'kilometers' });
            const inside = dist <= fenceRadius;
            info.className = 'info ' + (inside ? 'inside' : 'outside');
            info.textContent = inside ? '✅ Inside fence (' + dist.toFixed(1) + 'km)' : '❌ Outside fence (' + dist.toFixed(1) + 'km)';
            const src = map.getSource('marker');
            if (src) src.setData({ type: 'FeatureCollection', features: [{ type: 'Feature', geometry: { type: 'Point', coordinates: [e.lngLat.lng, e.lngLat.lat] } }] });
        });