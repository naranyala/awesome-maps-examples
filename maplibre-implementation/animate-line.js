const route = [[-0.09,51.505],[-0.08,51.51],[-0.07,51.515],[-0.05,51.52],[-0.03,51.518],[-0.01,51.525],[0.01,51.52],[0.03,51.515],[0.05,51.51],[0.07,51.505],[0.09,51.5],[0.11,51.495]];
        const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [0.01, 51.51], zoom: 13 });
        map.addControl(new maplibregl.NavigationControl());

        map.on('load', () => {
            map.addSource('route', { type: 'geojson', data: { type: 'Feature', geometry: { type: 'LineString', coordinates: [] } } });
            map.addLayer({ id: 'route-line', type: 'line', source: 'route', paint: { 'line-color': '#3b82f6', 'line-width': 3 } });

            map.addSource('point', { type: 'geojson', data: { type: 'Feature', geometry: { type: 'Point', coordinates: route[0] } } });
            map.addLayer({ id: 'point-layer', type: 'circle', source: 'point', paint: { 'circle-radius': 6, 'circle-color': '#f44336', 'circle-stroke-width': 2, 'circle-stroke-color': '#fff' } });
        });

        let animating = false;
        function animateLine() {
            if (animating) return;
            animating = true;
            let step = 0;
            const coords = [];
            const lineSource = map.getSource('route');

            function frame() {
                coords.push(route[step]);
                lineSource.setData({ type: 'Feature', geometry: { type: 'LineString', coordinates: coords } });
                map.getSource('point').setData({ type: 'Feature', geometry: { type: 'Point', coordinates: route[step] } });
                step++;
                if (step < route.length) requestAnimationFrame(frame);
                else animating = false;
            }
            frame();
        }