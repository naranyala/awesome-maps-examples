const style = new ol.style.Style({
            fill: new ol.style.Fill({ color: 'rgba(0, 150, 255, 0.4)' }),
            stroke: new ol.style.Stroke({ color: '#333', width: 1 })
        });
        const highlightStyle = new ol.style.Style({
            fill: new ol.style.Fill({ color: 'rgba(255, 100, 0, 0.6)' }),
            stroke: new ol.style.Stroke({ color: '#333', width: 2 })
        });

        const vectorSource = new ol.source.Vector({
            url: 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json',
            format: new ol.format.GeoJSON()
        });
        const vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            style: style
        });

        const map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({ source: new ol.source.OSM() }),
                vectorLayer
            ],
            view: new ol.View({ center: ol.proj.fromLonLat([0, 20]), zoom: 2 })
        });

        let selected = null;
        const info = document.getElementById('info');

        map.on('pointermove', function(evt) {
            if (evt.dragging) return;
            const feature = map.forEachFeatureAtPixel(evt.pixel, function(f) { return f; });
            if (feature !== selected) {
                if (selected) selected.setStyle(style);
                selected = feature;
                if (feature) {
                    feature.setStyle(highlightStyle);
                    info.innerHTML = '<b>' + (feature.get('name') || 'Unknown') + '</b>';
                } else {
                    info.innerHTML = 'Hover over a country';
                }
            }
        });