const center = [-0.09, 51.505];
        const zoom = 13;

        const mapL = new maplibregl.Map({ container: 'map-left', style: { version: 8, sources: { osm: { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© OpenStreetMap' } }, layers: [{ id: 'osm', type: 'raster', source: 'osm' }] }, center, zoom, attributionControl: false });
        const mapR = new maplibregl.Map({ container: 'map-right', style: { version: 8, sources: { osm: { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© OpenStreetMap' } }, layers: [{ id: 'osm', type: 'raster', source: 'osm' }] }, center, zoom, attributionControl: false });

        function sync(src, tgt) { tgt.setCenter(src.getCenter()); tgt.setZoom(src.getZoom()); tgt.setPitch(src.getPitch()); tgt.setBearing(src.getBearing()); }
        mapL.on('move', () => sync(mapL, mapR));
        mapR.on('move', () => sync(mapR, mapL));

        const divider = document.getElementById('divider');
        let dragging = false;
        divider.addEventListener('mousedown', () => dragging = true);
        document.addEventListener('mouseup', () => dragging = false);
        document.addEventListener('mousemove', (e) => {
            if (!dragging) return;
            const pct = (e.clientX / window.innerWidth) * 100;
            document.getElementById('map-left').style.right = (100 - pct) + '%';
            document.getElementById('map-right').style.left = pct + '%';
            divider.style.left = pct + '%';
            mapL.resize(); mapR.resize();
        });