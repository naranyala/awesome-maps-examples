const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [-0.09, 51.505], zoom: 12 });
        map.addControl(new maplibregl.NavigationControl());

        const geojson = {
            type: 'FeatureCollection',
            features: [
                { type: 'Feature', properties: { name: 'Zone A', value: 85 }, geometry: { type: 'Polygon', coordinates: [[[-0.12,51.52],[-0.06,51.52],[-0.06,51.49],[-0.12,51.49],[-0.12,51.52]]] } },
                { type: 'Feature', properties: { name: 'Zone B', value: 62 }, geometry: { type: 'Polygon', coordinates: [[[-0.06,51.52],[0.0,51.52],[0.0,51.49],[-0.06,51.49],[-0.06,51.52]]] } },
                { type: 'Feature', properties: { name: 'Zone C', value: 94 }, geometry: { type: 'Polygon', coordinates: [[[-0.12,51.49],[-0.06,51.49],[-0.06,51.46],[-0.12,51.46],[-0.12,51.49]]] } }
            ]
        };

        map.on('load', () => {
            map.addSource('zones', { type: 'geojson', data: geojson });
            map.addLayer({ id: 'zones-fill', type: 'fill', source: 'zones', paint: { 'fill-color': '#3b82f6', 'fill-opacity': 0.3 } });
            map.addLayer({ id: 'zones-border', type: 'line', source: 'zones', paint: { 'line-color': '#3b82f6', 'line-width': 2 } });

            const tooltip = document.getElementById('tooltip');

            map.on('mouseenter', 'zones-fill', (e) => {
                map.getCanvas().style.cursor = 'pointer';
                const p = e.features[0].properties;
                tooltip.style.display = 'block';
                tooltip.textContent = `${p.name} — Score: ${p.value}`;
                map.setPaintProperty('zones-fill', 'fill-opacity', ['case', ['==', ['get', 'name'], p.name], 0.7, 0.3]);
            });

            map.on('mousemove', 'zones-fill', (e) => {
                tooltip.style.left = (e.originalEvent.clientX + 12) + 'px';
                tooltip.style.top = (e.originalEvent.clientY - 10) + 'px';
            });

            map.on('mouseleave', 'zones-fill', () => {
                map.getCanvas().style.cursor = '';
                tooltip.style.display = 'none';
                map.setPaintProperty('zones-fill', 'fill-opacity', 0.3);
            });
        });