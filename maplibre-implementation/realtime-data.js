const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [-0.09, 51.505], zoom: 12 });
        map.addControl(new maplibregl.NavigationControl());

        let points = [];

        function addRandomPoint() {
            points.push({
                type: 'Feature',
                properties: { id: Date.now(), value: Math.random() * 100 },
                geometry: { type: 'Point', coordinates: [-0.09 + (Math.random() - 0.5) * 0.1, 51.505 + (Math.random() - 0.5) * 0.08] }
            });
            if (points.length > 50) points.shift();
            if (map.getSource('live-points')) {
                map.getSource('live-points').setData({ type: 'FeatureCollection', features: points });
            }
            document.getElementById('count').textContent = points.length;
        }

        map.on('load', () => {
            map.addSource('live-points', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
            map.addLayer({ id: 'live-dots', type: 'circle', source: 'live-points', paint: { 'circle-radius': 5, 'circle-color': '#3b82f6', 'circle-stroke-color': '#fff', 'circle-stroke-width': 2 } });
            for (let i = 0; i < 10; i++) addRandomPoint();
            setInterval(addRandomPoint, 800);
        });