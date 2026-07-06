const view = new ol.View({ center: ol.proj.fromLonLat([-0.1275, 51.5074]), zoom: 12 });
        const mainMap = new ol.Map({ target: 'mainMap', layers: [new ol.layer.Tile({ source: new ol.source.OSM() })], view: view });
        const miniView = new ol.View({ center: view.getCenter(), zoom: 8 });
        const miniMap = new ol.Map({ target: 'miniMap', layers: [new ol.layer.Tile({ source: new ol.source.OSM() })], view: miniView, controls: [] });
        view.on('change:center', function() { miniView.setCenter(view.getCenter()); });
        view.on('change:resolution', function() { miniView.setResolution(view.getResolution() * 4); });