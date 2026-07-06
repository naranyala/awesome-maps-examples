const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [-0.09, 51.505], zoom: 11
        });
        
        let vertices = [];
        let markers = [];
        
        map.on('load', () => {
            map.addSource('polygon', { type: 'geojson', data: turf.featureCollection([]) });
            map.addLayer({ id: 'polygon-fill', type: 'fill', source: 'polygon', paint: { 'fill-color': '#3b82f6', 'fill-opacity': 0.2 } });
            map.addLayer({ id: 'polygon-outline', type: 'line', source: 'polygon', paint: { 'line-color': '#3b82f6', 'line-width': 2 } });
            map.getCanvas().style.cursor = 'crosshair';
        });
        
        map.on('click', (e) => {
            vertices.push([e.lngLat.lng, e.lngLat.lat]);
            
            const el = document.createElement('div');
            el.style.cssText = 'width:10px;height:10px;background:#3b82f6;border-radius:50%;border:2px solid white;';
            markers.push(new maplibregl.Marker({ element: el }).setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(map));
            
            if (vertices.length >= 3) {
                const ring = [...vertices, vertices[0]];
                const poly = turf.polygon([ring]);
                map.getSource('polygon').setData(poly);
                
                const area = turf.area(poly);
                const km2 = (area / 1e6).toFixed(3);
                document.getElementById('area-display').textContent = `Area: ${km2} km²`;
            }
        });
        
        function clearPolygon() {
            vertices = [];
            markers.forEach(m => m.remove());
            markers = [];
            if (map.getSource('polygon')) map.getSource('polygon').setData(turf.featureCollection([]));
            document.getElementById('area-display').textContent = 'Area: 0 km²';
        }