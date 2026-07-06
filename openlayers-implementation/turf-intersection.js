const poly1 = turf.polygon([[[-0.15, 51.49], [-0.10, 51.49], [-0.10, 51.53], [-0.15, 51.53], [-0.15, 51.49]]]);
        const poly2 = turf.polygon([[[-0.13, 51.50], [-0.08, 51.50], [-0.08, 51.54], [-0.13, 51.54], [-0.13, 51.50]]]);
        const intersection = turf.intersect(poly1, poly2);
        const format = new ol.format.GeoJSON();
        const f1 = format.readFeatures(poly1, { featureProjection: 'EPSG:3857' });
        const f2 = format.readFeatures(poly2, { featureProjection: 'EPSG:3857' });
        const fInt = intersection ? format.readFeatures(intersection, { featureProjection: 'EPSG:3857' }) : [];
        const map = new ol.Map({ target: 'map', layers: [
            new ol.layer.Tile({ source: new ol.source.OSM() }),
            new ol.layer.Vector({ source: new ol.source.Vector({ features: f1 }), style: new ol.style.Style({ fill: new ol.style.Fill({ color: 'rgba(0,100,255,0.3)' }), stroke: new ol.style.Stroke({ color: '#0064ff', width: 2 }) }) }),
            new ol.layer.Vector({ source: new ol.source.Vector({ features: f2 }), style: new ol.style.Style({ fill: new ol.style.Fill({ color: 'rgba(255,100,0,0.3)' }), stroke: new ol.style.Stroke({ color: '#ff6400', width: 2 }) }) }),
            new ol.layer.Vector({ source: new ol.source.Vector({ features: fInt }), style: new ol.style.Style({ fill: new ol.style.Fill({ color: 'rgba(0,200,100,0.6)' }), stroke: new ol.style.Stroke({ color: '#00c864', width: 3 }) }) })
        ], view: new ol.View({ center: ol.proj.fromLonLat([-0.11, 51.52]), zoom: 13 }) });