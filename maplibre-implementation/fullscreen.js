const map = new maplibregl.Map({
            container: 'map',
            style: { version: 8, sources: { osm: { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© OpenStreetMap' } }, layers: [{ id: 'osm', type: 'raster', source: 'osm' }] },
            center: [0, 20],
            zoom: 1.5
        });
        map.addControl(new maplibregl.NavigationControl());
        map.addControl(new maplibregl.FullscreenControl());
        new maplibregl.Marker().setLngLat([0, 20]).setPopup(new maplibregl.Popup().setHTML('<b>Full Screen Demo</b><br>Click the ⛶ button')).addTo(map).togglePopup();