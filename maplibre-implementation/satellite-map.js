const styles = {
            streets: 'https://demotiles.maplibre.org/style.json',
            satellite: { version: 8, sources: { 'satellite': { type: 'raster', tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'], tileSize: 256 } }, layers: [{ id: 'satellite', type: 'raster', source: 'satellite' }] },
            dark: { version: 8, sources: { 'osm': { type: 'raster', tiles: ['https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© CARTO' } }, layers: [{ id: 'dark', type: 'raster', source: 'osm' }] }
        };

        const map = new maplibregl.Map({ container: 'map', style: styles.streets, center: [-74.006, 40.7128], zoom: 12 });
        map.addControl(new maplibregl.NavigationControl());

        function setStyle(name, btn) {
            map.setStyle(styles[name]);
            document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }