const source = new ol.source.Vector({ wrapX: false });
        const vector = new ol.layer.Vector({ source: source });
        const map = new ol.Map({ layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vector], target: 'map', view: new ol.View({ center: ol.proj.fromLonLat([-0.1275, 51.5074]), zoom: 12 }) });
        let draw;
        const typeSelect = document.getElementById('type');
        function addInteraction() { draw = new ol.interaction.Draw({ source: source, type: typeSelect.value }); map.addInteraction(draw); }
        typeSelect.onchange = function() { map.removeInteraction(draw); addInteraction(); };
        addInteraction();