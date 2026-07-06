const osmLayer = new ol.layer.Tile({ source: new ol.source.OSM(), visible: true });
        const satelliteLayer = new ol.layer.Tile({ source: new ol.source.XYZ({ url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', attributions: '© Esri' }), visible: false });
        const darkLayer = new ol.layer.Tile({ source: new ol.source.XYZ({ url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', attributions: '© CARTO' }), visible: false });

        const map = new ol.Map({
            target: 'map',
            layers: [osmLayer, satelliteLayer, darkLayer],
            view: new ol.View({ center: ol.proj.fromLonLat([-74.006, 40.7128]), zoom: 12 })
        });

        function setLayer(name, btn) {
            osmLayer.setVisible(name === 'osm');
            satelliteLayer.setVisible(name === 'satellite');
            darkLayer.setVisible(name === 'dark');
            document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }