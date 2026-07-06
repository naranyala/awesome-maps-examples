const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [-0.09, 51.505], zoom: 10
        });
        
        let points = [];
        let markers = [];
        
        map.on('load', () => {
            map.addSource('voronoi', { type: 'geojson', data: turf.featureCollection([]) });
            map.addLayer({ id: 'voronoi-fill', type: 'fill', source: 'voronoi', paint: { 'fill-color': '#3b82f6', 'fill-opacity': 0.15, 'fill-outline-color': '#3b82f6' } });
            map.getCanvas().style.cursor = 'crosshair';
        });
        
        const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
        
        map.on('click', (e) => {
            const pt = turf.point([e.lngLat.lng, e.lngLat.lat]);
            pt.properties = { point_index: points.length };
            points.push(pt);
            
            const el = document.createElement('div');
            el.style.cssText = `width:10px;height:10px;background:${colors[points.length % colors.length]};border-radius:50%;border:2px solid white;box-shadow:0 0 4px rgba(0,0,0,0.3);`;
            markers.push(new maplibregl.Marker({ element: el }).setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(map));
            
            if (points.length >= 3) {
                const bbox = [-180, -90, 180, 90];
                const fc = turf.featureCollection(points);
                const voronoi = turf.voronoi(fc, { bbox });
                if (voronoi) map.getSource('voronoi').setData(voronoi);
            }
        });
        
        function clearAll() {
            points = [];
            markers.forEach(m => m.remove());
            markers = [];
            if (map.getSource('voronoi')) map.getSource('voronoi').setData(turf.featureCollection([]));
        }