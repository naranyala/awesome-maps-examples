const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [-2, 52], zoom: 5 });
        map.addControl(new maplibregl.NavigationControl());

        map.on('load', function() {
            map.addSource('overlay', { type: 'image', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Satellite_image_of_the_United_Kingdom_%282000%29.jpg/800px-Satellite_image_of_the_United_Kingdom_%282000%29.jpg', coordinates: [[-10, 48], [5, 48], [5, 56], [-10, 56]] });
            map.addLayer({ id: 'overlay-layer', type: 'raster', source: 'overlay', paint: { 'raster-opacity': 0.7 } });
        });

        document.getElementById('opacity').addEventListener('input', function() {
            map.setPaintProperty('overlay-layer', 'raster-opacity', +this.value);
        });