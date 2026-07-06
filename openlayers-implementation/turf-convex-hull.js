const pointSource = new ol.source.Vector();
        const pointLayer = new ol.layer.Vector({ source: pointSource, style: new ol.style.Style({ image: new ol.style.Circle({ radius: 6, fill: new ol.style.Fill({ color: '#22c55e' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) }) }) });
        const hullSource = new ol.source.Vector();
        const hullLayer = new ol.layer.Vector({ source: hullSource, style: new ol.style.Style({ fill: new ol.style.Fill({ color: 'rgba(34,197,94,0.2)' }), stroke: new ol.style.Stroke({ color: '#22c55e', width: 2, lineDash: [5, 5] }) }) });
        const map = new ol.Map({ target: 'map', layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), hullLayer, pointLayer], view: new ol.View({ center: ol.proj.fromLonLat([-0.1275, 51.5074]), zoom: 12 }) });

        map.on('click', function(evt) {
            pointSource.addFeature(new ol.Feature({ geometry: new ol.geom.Point(evt.coordinate) }));
            if (pointSource.getFeatures().length >= 3) {
                hullSource.clear();
                const points = turf.featureCollection(pointSource.getFeatures().map(f => turf.point(ol.proj.toLonLat(f.getGeometry().getCoordinates()))));
                const hull = turf.convex(points);
                if (hull) hullSource.addFeatures(new ol.format.GeoJSON().readFeatures(hull, { featureProjection: 'EPSG:3857' }));
            }
        });