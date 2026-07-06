const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [-0.1275, 51.507222],
            zoom: 10
        });

        const menu = document.getElementById('contextMenu');
        let currentLngLat = null;
        let markers = [];

        map.on('contextmenu', (e) => {
            currentLngLat = e.lngLat;
            menu.style.display = 'block';
            menu.style.left = e.point.x + 'px';
            menu.style.top = e.point.y + 'px';
            
            document.getElementById('menu-coords').innerText = `${e.lngLat.lat.toFixed(4)}, ${e.lngLat.lng.toFixed(4)}`;
        });

        map.on('click', () => {
            menu.style.display = 'none';
        });

        document.getElementById('menu-center').addEventListener('click', () => {
            if(currentLngLat) map.flyTo({ center: currentLngLat });
            menu.style.display = 'none';
        });

        document.getElementById('menu-marker').addEventListener('click', () => {
            if(currentLngLat) {
                const marker = new maplibregl.Marker({ color: '#f43f5e' })
                    .setLngLat(currentLngLat)
                    .addTo(map);
                markers.push(marker);
            }
            menu.style.display = 'none';
        });