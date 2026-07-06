const map = new maplibregl.Map({
            container: 'map',
            style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
            center: [-0.09, 51.505],
            zoom: 15,
            pitch: 60,
            bearing: -20
        });
        map.addControl(new maplibregl.NavigationControl());

        // Demo: add some 3D-like buildings using filled extrusions
        const buildings = { type: 'FeatureCollection', features: [] };
        const center = [-0.09, 51.505];
        for (let i = 0; i < 30; i++) {
            const w = 0.001 + Math.random() * 0.002;
            const h = 0.001 + Math.random() * 0.002;
            const x = center[0] + (Math.random() - 0.5) * 0.02;
            const y = center[1] + (Math.random() - 0.5) * 0.01;
            const height = 10 + Math.random() * 80;
            buildings.features.push({ type: 'Feature', properties: { height }, geometry: { type: 'Polygon', coordinates: [[[x, y], [x+w, y], [x+w, y+h], [x, y+h], [x, y]]] } });
        }

        map.on('load', () => {
            map.addSource('buildings', { type: 'geojson', data: buildings });
            map.addLayer({ id: 'buildings-3d', type: 'fill-extrusion', source: 'buildings', paint: {
                'fill-extrusion-color': ['interpolate', ['linear'], ['get', 'height'], 10, '#fee08b', 50, '#d9ef8b', 90, '#91cf60'],
                'fill-extrusion-height': ['get', 'height'],
                'fill-extrusion-base': 0,
                'fill-extrusion-opacity': 0.8
            }});
        });