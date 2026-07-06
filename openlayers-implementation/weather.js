const radarLayer = new ol.layer.Tile({
            source: new ol.source.TileWMS({ url: 'https://opengeo.ncep.noaa.gov/geoserver/conus/conus_bref_qcd/ows', params: { LAYERS: 'conus_bref_qcd', FORMAT: 'image/png' }, serverType: 'geoserver' }),
            opacity: 0.5
        });
        const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), radarLayer],
            view: new ol.View({ center: ol.proj.fromLonLat([-98, 38]), zoom: 4 })
        });
        function toggleLayer(type) {
            if (type === 'radar') radarLayer.setVisible(document.getElementById('showRadar').checked);
            if (type === 'opacity') radarLayer.setOpacity(+document.getElementById('opacity').value);
        }