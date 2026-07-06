const poly = turf.polygon([[[-0.16, 51.49], [-0.09, 51.49], [-0.09, 51.53], [-0.16, 51.53], [-0.16, 51.49]]]);
        const polySource = new ol.source.Vector({ features: new ol.format.GeoJSON().readFeatures(poly, { featureProjection: 'EPSG:3857' }) });
        const pointSource = new ol.source.Vector();
        const map = new ol.Map({ target: 'map', layers: [
            new ol.layer.Tile({ source: new ol.source.OSM() }),
            new ol.layer.Vector({ source: polySource, style: new ol.style.Style({ fill: new ol.style.Fill({ color: 'rgba(59,130,246,0.2)' }), stroke: new ol.style.Stroke({ color: '#3b82f6', width: 2 }) }) }),
            new ol.layer.Vector({ source: pointSource })
        ], view: new ol.View({ center: ol.proj.fromLonLat([-0.1275, 51.51]), zoom: 13 }) });

        map.on('click', function(evt) {
            pointSource.clear();
            const pt = turf.point(ol.proj.toLonLat(evt.coordinate));
            const inside = turf.booleanPointInPolygon(pt, poly);
            pointSource.addFeature(new ol.Feature({ geometry: new ol.geom.Point(evt.coordinate), inside }));
            document.getElementById('info').innerHTML = inside ? '✅ Point is INSIDE polygon' : '❌ Point is OUTSIDE polygon';
        });