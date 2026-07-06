const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [0, 0],
            zoom: 2
        });
        map.addControl(new maplibregl.NavigationControl());
        const marker = new maplibregl.Marker().setLngLat([0, 0]).setPopup(new maplibregl.Popup().setHTML('<b>Hello from MapLibre!</b>')).addTo(map);
        marker.togglePopup();