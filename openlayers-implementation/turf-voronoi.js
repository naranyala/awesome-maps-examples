const pointSource = new ol.source.Vector();
        const pointLayer = new ol.layer.Vector({ source: pointSource, style: new ol.style.Style({ image: new ol.style.Circle({ radius: 6, fill: new ol.style.Fill({ color: '#3b82f6' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) }) }) });
        const voronoiSource = new ol.source.Vector();
        const voronoiLayer = new ol.layer.Vector({ source: voronoiSource, style: new ol.style.Style({ fill: new ol.style.Fill({ color: 'rgba(139,92,246,0.2)' }), stroke: new ol.style.Stroke({ color: '#8b5cf6', width: 1 }) }) });
        const map = new ol.Map({ target: 'map', layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), voronoiLayer, pointLayer], view: new ol.View({ center: ol.proj.fromLonLat([-0.1275, 51.5074]), zoom: 12 }) });

        map.on('click', function(evt) {
            const lonlat = ol.proj.toLonLat(evt.coordinate);
            pointSource.addFeature(new ol.Feature({ geometry: new ol.geom.Point(evt.coordinate) }));
            if (pointSource.getFeatures().length >= 3) {
                voronoiSource.clear();
                const points = turf.featureCollection(pointSource.getFeatures().map(f => turf.point(ol.proj.toLonLat(f.getGeometry().getCoordinates()))));
                const bbox = turf.bbox(points);
                const voronoi = turf.voronoi(points, { bbox });
                if (voronoi) voronoiSource.addFeatures(new ol.format.GeoJSON().readFeatures(voronoi, { featureProjection: 'EPSG:3857' }));
            }
        });