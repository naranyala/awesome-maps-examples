const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [0, 0],
            zoom: 2
        });

        document.getElementById('toggle-geolines').addEventListener('change', (e) => {
            const visibility = e.target.checked ? 'visible' : 'none';
            if (map.getLayer('geolines')) {
                map.setLayoutProperty('geolines', 'visibility', visibility);
            }
        });