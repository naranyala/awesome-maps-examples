const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
            view: new ol.View({ center: ol.proj.fromLonLat([0, 0]), zoom: 2 })
        });
        const menu = document.getElementById('contextMenu');
        let clickCoords = null;

        document.getElementById('map').addEventListener('contextmenu', function(e) {
            e.preventDefault();
            clickCoords = map.getEventCoordinate(e);
            menu.style.display = 'block';
            menu.style.left = e.pageX + 'px';
            menu.style.top = e.pageY + 'px';
        });
        document.addEventListener('click', function() { menu.style.display = 'none'; });
        function zoomIn() { map.getView().animate({ zoom: map.getView().getZoom() + 1, duration: 300 }); }
        function zoomOut() { map.getView().animate({ zoom: map.getView().getZoom() - 1, duration: 300 }); }
        function addMarker() {
            if (!clickCoords) return;
            const feature = new ol.Feature({ geometry: new ol.geom.Point(clickCoords) });
            feature.setStyle(new ol.style.Style({ image: new ol.style.Circle({ radius: 8, fill: new ol.style.Fill({ color: '#ff0000' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) }) }));
            const source = new ol.source.Vector();
            source.addFeature(feature);
            map.addLayer(new ol.layer.Vector({ source: source }));
        }
        function hideMenu() { menu.style.display = 'none'; }