const center = [-0.09, 51.505];
        const zoom = 13;

        const map1 = new maplibregl.Map({ container: 'map1', style: { version: 8, sources: { osm: { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© OpenStreetMap' } }, layers: [{ id: 'osm', type: 'raster', source: 'osm' }] }, center, zoom, attributionControl: false });
        const map2 = new maplibregl.Map({ container: 'map2', style: { version: 8, sources: { osm: { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© OpenStreetMap' } }, layers: [{ id: 'osm', type: 'raster', source: 'osm' }] }, center, zoom, attributionControl: false });

        function sync(src, tgt) {
            tgt.setCenter(src.getCenter());
            tgt.setZoom(src.getZoom());
            tgt.setPitch(src.getPitch());
            tgt.setBearing(src.getBearing());
        }

        map1.on('move', () => sync(map1, map2));
        map2.on('move', () => sync(map2, map1));