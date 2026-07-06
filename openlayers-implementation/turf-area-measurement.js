const drawSource = new ol.source.Vector();
        const drawLayer = new ol.layer.Vector({ source: drawSource, style: new ol.style.Style({ fill: new ol.style.Fill({ color: 'rgba(59,130,246,0.2)' }), stroke: new ol.style.Stroke({ color: '#3b82f6', width: 2 }) }) });
        const map = new ol.Map({ target: 'map', layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), drawLayer], view: new ol.View({ center: ol.proj.fromLonLat([0, 0]), zoom: 2 }) });
        const draw = new ol.interaction.Draw({ source: drawSource, type: 'Polygon' });
        map.addInteraction(draw);
        draw.on('drawend', function(evt) {
            const coords = evt.feature.getGeometry().getCoordinates()[0].map(c => ol.proj.toLonLat(c));
            const poly = turf.polygon([[...coords, coords[0]]]);
            const area = turf.area(poly);
            document.getElementById('info').textContent = 'Area: ' + (area / 1e6).toFixed(2) + ' km²';
        });