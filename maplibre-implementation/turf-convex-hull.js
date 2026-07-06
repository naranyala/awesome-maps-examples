const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [-0.09, 51.505], zoom: 10
        });
        
        let points = [];
        let markers = [];
        
        map.on('load', () => {
            map.addSource('hull', { type: 'geojson', data: turf.featureCollection([]) });
            map.addLayer({ id: 'hull-fill', type: 'fill', source: 'hull', paint: { 'fill-color': '#8b5cf6', 'fill-opacity': 0.2, 'fill-outline-color': '#8b5cf6' } });
            map.addLayer({ id: 'hull-line', type: 'line', source: 'hull', paint: { 'line-color': '#8b5cf6', 'line-width': 2, 'line-dasharray': [5, 5] } });
            map.getCanvas().style.cursor = 'crosshair';
        });
        
        map.on('click', (e) => {
            const pt = turf.point([e.lngLat.lng, e.lngLat.lat]);
            points.push(pt);
            
            const el = document.createElement('div');
            el.style.cssText = 'width:10px;height:10px;background:#8b5cf6;border-radius:50%;border:2px solid white;box-shadow:0 0 4px rgba(0,0,0,0.3);';
            markers.push(new maplibregl.Marker({ element: el }).setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(map));
            
            if (points.length >= 3) {
                const hull = turf.convex(turf.featureCollection(points), { concavity: 2 });
                if (hull) map.getSource('hull').setData(hull);
            }
        });
        
        function clearAll() {
            points = [];
            markers.forEach(m => m.remove());
            markers = [];
            if (map.getSource('hull')) map.getSource('hull').setData(turf.featureCollection([]));
        }