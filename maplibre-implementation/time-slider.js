const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [-0.09, 51.505], zoom: 12 });
        map.addControl(new maplibregl.NavigationControl());

        const hourlyData = [];
        for (let h = 0; h < 24; h++) {
            const features = [];
            for (let i = 0; i < 30; i++) {
                features.push({
                    type: 'Feature',
                    properties: { hour: h, intensity: Math.max(0, Math.sin((h - 6) * Math.PI / 12) + Math.random() * 0.3) },
                    geometry: { type: 'Point', coordinates: [-0.09 + (Math.random() - 0.5) * 0.1, 51.505 + (Math.random() - 0.5) * 0.08] }
                });
            }
            hourlyData.push({ type: 'FeatureCollection', features });
        }

        map.on('load', () => {
            map.addSource('time-data', { type: 'geojson', data: hourlyData[12] });
            map.addLayer({ id: 'time-circles', type: 'circle', source: 'time-data', paint: {
                'circle-radius': ['interpolate', ['linear'], ['get', 'intensity'], 0, 3, 1, 12],
                'circle-color': ['interpolate', ['linear'], ['get', 'intensity'], 0, '#3b82f6', 0.5, '#f59e0b', 1, '#ef4444'],
                'circle-opacity': 0.7
            }});
        });

        function updateTime(h) {
            const hour = parseInt(h);
            document.getElementById('time-label').textContent = `${hour.toString().padStart(2, '0')}:00`;
            if (map.getSource('time-data')) map.getSource('time-data').setData(hourlyData[hour]);
        }