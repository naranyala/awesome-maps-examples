const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' });
        const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, attribution: '© Esri' });
        const dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© CARTO' });

        const map = L.map('map', { layers: [osm] }).setView([40.7128, -74.006], 12);

        function setLayer(name, btn) {
            map.eachLayer(function (l) { if (l._isBaseLayer) map.removeLayer(l); });
            const layers = { osm, satellite, dark };
            layers[name]._isBaseLayer = true;
            map.addLayer(layers[name]);
            document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }