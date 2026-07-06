const fixedPoints = turf.featureCollection([
            turf.point([-0.12, 51.51], { name: 'A' }), turf.point([-0.14, 51.52], { name: 'B' }),
            turf.point([-0.10, 51.53], { name: 'C' }), turf.point([-0.16, 51.50], { name: 'D' }),
            turf.point([-0.08, 51.49], { name: 'E' })
        ]);
        const fixedSource = new ol.source.Vector({ features: new ol.format.GeoJSON().readFeatures(fixedPoints, { featureProjection: 'EPSG:3857' }) });
        const clickSource = new ol.source.Vector();
        const lineSource = new ol.source.Vector();
        const map = new ol.Map({ target: 'map', layers: [
            new ol.layer.Tile({ source: new ol.source.OSM() }),
            new ol.layer.Vector({ source: lineSource, style: new ol.style.Style({ stroke: new ol.style.Stroke({ color: '#ef4444', width: 2, lineDash: [6, 4] }) }) }),
            new ol.layer.Vector({ source: fixedSource, style: new ol.style.Style({ image: new ol.style.Circle({ radius: 8, fill: new ol.style.Fill({ color: '#22c55e' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) }) }) }),
            new ol.layer.Vector({ source: clickSource, style: new ol.style.Style({ image: new ol.style.Circle({ radius: 8, fill: new ol.style.Fill({ color: '#ef4444' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) }) }) })
        ], view: new ol.View({ center: ol.proj.fromLonLat([-0.1275, 51.5074]), zoom: 13 }) });

        map.on('click', function(evt) {
            clickSource.clear(); lineSource.clear();
            const pt = turf.point(ol.proj.toLonLat(evt.coordinate));
            const nearest = turf.nearestPoint(pt, fixedPoints);
            const dist = turf.distance(pt, nearest, { units: 'kilometers' }).toFixed(2);
            clickSource.addFeature(new ol.Feature({ geometry: new ol.geom.Point(evt.coordinate) }));
            lineSource.addFeature(new ol.Feature({ geometry: new ol.geom.LineString([evt.coordinate, ol.proj.fromLonLat(nearest.geometry.coordinates)]) }));
            document.getElementById('info').textContent = 'Nearest: Point ' + nearest.properties.name + ' (' + dist + ' km)';
        });