const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [-74.006, 40.7128], // New York
            zoom: 12
        });

        // Create a custom HTML element for the marker
        const el = document.createElement('div');
        el.className = 'custom-marker';

        // Add marker to map
        new maplibregl.Marker({ element: el })
            .setLngLat([-74.006, 40.7128])
            .setPopup(new maplibregl.Popup({ offset: 25 }).setHTML('<h3>MapLibre GL JS</h3><p>Custom animated marker in NYC.</p>'))
            .addTo(map);