const center = ol.proj.fromLonLat([-0.09, 51.505]);
        const zoom = 13;

        const view1 = new ol.View({ center: center, zoom: zoom });
        const view2 = new ol.View({ center: center, zoom: zoom });

        const map1 = new ol.Map({ target: 'map1', view: view1, controls: [] });
        map1.addLayer(new ol.layer.Tile({ source: new ol.source.OSM() }));

        const map2 = new ol.Map({ target: 'map2', view: view2, controls: [] });
        map2.addLayer(new ol.layer.Tile({ source: new ol.source.XYZ({ url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', attributions: '© Esri' }) }));

        let syncing = false;
        function sync(source, target) {
            if (syncing) return;
            syncing = true;
            target.setCenter(source.getCenter());
            target.setZoom(source.getZoom());
            syncing = false;
        }

        window.map = map1;
        view1.on('change:center', () => sync(view1, view2));
        view1.on('change:resolution', () => sync(view1, view2));
        view2.on('change:center', () => sync(view2, view1));
        view2.on('change:resolution', () => sync(view2, view1));