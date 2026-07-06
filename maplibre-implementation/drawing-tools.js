const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [-0.09, 51.505], zoom: 13 });
        map.addControl(new maplibregl.NavigationControl());

        const draw = new MapboxDraw({ displayControlsDefault: false, controls: { polygon: true, line_string: true, point: true, trash: true } });
        map.addControl(draw);
        window.draw = draw;

        function updateStats() {
            const features = draw.getAll().features;
            document.getElementById('count').textContent = features.length;
            let totalArea = 0;
            features.forEach(f => {
                if (f.geometry.type === 'Polygon') {
                    const coords = f.geometry.coordinates[0];
                    let area = 0;
                    for (let i = 0; i < coords.length - 1; i++) {
                        area += (coords[i+1][0] - coords[i][0]) * (coords[i+1][1] + coords[i][1]);
                    }
                    totalArea += Math.abs(area / 2) * 111 * 111 * Math.cos(51.505 * Math.PI / 180);
                }
            });
            document.getElementById('area').textContent = totalArea.toFixed(2);
        }

        map.on('draw.create', updateStats);
        map.on('draw.delete', updateStats);
        map.on('draw.update', updateStats);