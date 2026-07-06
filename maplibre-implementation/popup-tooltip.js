const locations = [
            { lng: -0.1278, lat: 51.5074, name: 'Westminster', desc: 'Home of Parliament' },
            { lng: -0.1419, lat: 51.5014, name: 'Buckingham Palace', desc: "The Queen's residence" },
            { lng: -0.0762, lat: 51.5085, name: 'Tower of London', desc: 'Historic castle' },
            { lng: -0.1195, lat: 51.5033, name: 'London Eye', desc: '135m observation wheel' }
        ];

        const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [-0.1, 51.505], zoom: 14 });
        map.addControl(new maplibregl.NavigationControl());

        const features = locations.map(l => ({ type: 'Feature', properties: { name: l.name, desc: l.desc, img: `https://placehold.co/200x100/3b82f6/fff?text=${encodeURIComponent(l.name)}` }, geometry: { type: 'Point', coordinates: [l.lng, l.lat] } }));

        map.on('load', function() {
            map.addSource('pois', { type: 'geojson', data: { type: 'FeatureCollection', features } });
            map.addLayer({ id: 'pois-layer', type: 'circle', source: 'pois', paint: { 'circle-radius': 8, 'circle-color': '#3b82f6', 'circle-stroke-color': '#fff', 'circle-stroke-width': 2 } });

            const popup = new maplibregl.Popup({ offset: 25 });
            const tooltipEl = document.getElementById('tooltip');

            map.on('click', 'pois-layer', function(e) {
                const f = e.features[0];
                popup.setLngLat(e.lngLat).setHTML(`<b>${f.properties.name}</b><p style="margin:4px 0">${f.properties.desc}</p><img src="${f.properties.img}" style="border-radius:4px;width:100%">`).addTo(map);
            });

            map.on('mousemove', 'pois-layer', function(e) {
                map.getCanvas().style.cursor = 'pointer';
                tooltipEl.style.display = 'block';
                tooltipEl.style.left = (e.originalEvent.clientX + 12) + 'px';
                tooltipEl.style.top = (e.originalEvent.clientY - 10) + 'px';
                tooltipEl.innerHTML = `<b>${e.features[0].properties.name}</b>`;
            });
            map.on('mouseleave', 'pois-layer', function() {
                map.getCanvas().style.cursor = '';
                tooltipEl.style.display = 'none';
            });
            map.on('click', function(e) { if (!e.features.length) popup.remove(); });
        });