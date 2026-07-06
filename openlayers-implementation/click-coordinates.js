const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
            view: new ol.View({ center: ol.proj.fromLonLat([0, 0]), zoom: 2 })
        });
        const info = document.getElementById('info');
        map.on('click', function(evt) {
            const coords = ol.proj.toLonLat(evt.coordinate);
            info.innerHTML = 'Lat: ' + coords[1].toFixed(6) + ', Lon: ' + coords[0].toFixed(6);
        });