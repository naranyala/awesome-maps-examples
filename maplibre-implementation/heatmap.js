const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [0, 0], zoom: 2 });
        map.addControl(new maplibregl.NavigationControl());

        const points = [];
        for (let i = 0; i < 200; i++) {
            points.push({ type: 'Feature', properties: { intensity: Math.random() }, geometry: { type: 'Point', coordinates: [-0.09 + (Math.random()-0.5)*12, 51.505 + (Math.random()-0.5)*8] } });
        }

        map.on('load', () => {
            map.addSource('heat', { type: 'geojson', data: { type: 'FeatureCollection', features: points } });
            map.addLayer({ id: 'heat-layer', type: 'heatmap', source: 'heat', paint: {
                'heatmap-weight': ['interpolate', ['linear'], ['get', 'intensity'], 0, 0, 1, 1],
                'heatmap-radius': 30, 'heatmap-intensity': 5,
                'heatmap-color': ['interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(0,0,255,0)', 0.2, 'blue', 0.4, 'cyan', 0.6, 'lime', 0.8, 'yellow', 1, 'red']
            }});
        });

        function updateHeat() {
            if (!map.getLayer('heat-layer')) return;
            map.setPaintProperty('heat-layer', 'heatmap-radius', parseInt(document.getElementById('radius').value));
            map.setPaintProperty('heat-layer', 'heatmap-intensity', parseInt(document.getElementById('intensity').value));
        }