const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [0, 20],
            zoom: 1.5
        });
        map.addControl(new maplibregl.NavigationControl());
        map.addControl(new maplibregl.FullscreenControl());
        new maplibregl.Marker().setLngLat([0, 20]).setPopup(new maplibregl.Popup().setHTML('<b>Full Screen Demo</b><br>Click the ⛶ button')).addTo(map).togglePopup();