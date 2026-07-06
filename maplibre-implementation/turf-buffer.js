const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [-74.006, 40.7128],
            zoom: 10
        });

        map.on('load', () => {
            map.addSource('buffer-source', { type: 'geojson', data: turf.featureCollection([]) });
            
            map.addLayer({
                id: 'buffer-fill',
                type: 'fill',
                source: 'buffer-source',
                paint: { 'fill-color': '#10b981', 'fill-opacity': 0.3 }
            });
            
            map.addLayer({
                id: 'buffer-outline',
                type: 'line',
                source: 'buffer-source',
                paint: { 'line-color': '#10b981', 'line-width': 2 }
            });
            
            map.getCanvas().style.cursor = 'crosshair';
        });

        let centerMarker = null;

        map.on('click', function(e) {
            const pt = turf.point([e.lngLat.lng, e.lngLat.lat]);
            const buffered = turf.buffer(pt, 10, { units: 'kilometers' });
            
            map.getSource('buffer-source').setData(buffered);
            
            if (centerMarker) centerMarker.remove();
            centerMarker = new maplibregl.Marker().setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(map);
        });