const nyc = turf.point([-74.006, 40.7128]);
        const london = turf.point([-0.1278, 51.5074]);
        const greatCircle = turf.greatCircle(nyc, london, { npoints: 100 });
        const gcFeature = new ol.format.GeoJSON().readFeatures(greatCircle, { featureProjection: 'EPSG:3857' });
        const markers = new ol.source.Vector({
            features: [nyc, london].map(p => new ol.Feature({ geometry: new ol.geom.Point(ol.proj.fromLonLat(p.geometry.coordinates)) }))
        });
        const map = new ol.Map({ target: 'map', layers: [
            new ol.layer.Tile({ source: new ol.source.OSM() }),
            new ol.layer.Vector({ source: new ol.source.Vector({ features: gcFeature }), style: new ol.style.Style({ stroke: new ol.style.Stroke({ color: '#ef4444', width: 2, lineDash: [6, 4] }) }) }),
            new ol.layer.Vector({ source: markers, style: new ol.style.Style({ image: new ol.style.Circle({ radius: 8, fill: new ol.style.Fill({ color: '#3b82f6' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) }) }) })
        ], view: new ol.View({ center: ol.proj.fromLonLat([-30, 30]), zoom: 2 }) });