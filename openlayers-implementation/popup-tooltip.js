const container = document.getElementById('popup');
        const content = document.getElementById('popup-content');
        const closer = document.getElementById('popup-closer');

        const overlay = new ol.Overlay({
            element: container,
            autoPan: { animation: { duration: 250 } }
        });

        closer.onclick = function () {
            overlay.setPosition(undefined);
            closer.blur();
            return false;
        };

        const map = new ol.Map({
            target: 'map',
            layers: [ new ol.layer.Tile({ source: new ol.source.OSM() }) ],
            overlays: [overlay],
            view: new ol.View({ center: [0, 0], zoom: 2 })
        });

        map.on('singleclick', function (evt) {
            const coordinate = evt.coordinate;
            const hdms = ol.coordinate.toStringHDMS(ol.proj.toLonLat(coordinate));
            content.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>';
            overlay.setPosition(coordinate);
        });