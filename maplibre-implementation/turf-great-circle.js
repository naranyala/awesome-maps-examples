const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [-30, 30], zoom: 2
        });
        
        const cityA = turf.point([-73.935242, 40.730610]);
        const cityB = turf.point([2.3522, 48.8566]);
        const gc = turf.greatCircle(cityA, cityB, { npoints: 100 });
        
        map.on('load', () => {
            map.addSource('great-circle', { type: 'geojson', data: gc });
            map.addLayer({ id: 'gc-line', type: 'line', source: 'great-circle', paint: { 'line-color': '#ef4444', 'line-width': 3, 'line-dasharray': [8, 6] } });
            
            new maplibregl.Marker().setLngLat(cityA.geometry.coordinates).setPopup(new maplibregl.Popup().setText('New York')).addTo(map);
            new maplibregl.Marker().setLngLat(cityB.geometry.coordinates).setPopup(new maplibregl.Popup().setText('Paris')).addTo(map);
        });