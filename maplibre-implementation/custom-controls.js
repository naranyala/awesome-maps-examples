const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [0, 0], zoom: 2, bearing: 30 });
        map.addControl(new maplibregl.NavigationControl());

        document.getElementById('rotateNorth').addEventListener('click', function() {
            map.resetNorth({ duration: 500 });
        });