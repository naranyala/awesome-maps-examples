const geojson = {
            type: 'FeatureCollection',
            features: [
                { type: 'Feature', properties: { name: 'Zone A', value: 85 }, geometry: { type: 'Polygon', coordinates: [[[-0.12,51.52],[-0.06,51.52],[-0.06,51.49],[-0.12,51.49],[-0.12,51.52]]] } },
                { type: 'Feature', properties: { name: 'Zone B', value: 62 }, geometry: { type: 'Polygon', coordinates: [[[-0.06,51.52],[0.0,51.52],[0.0,51.49],[-0.06,51.49],[-0.06,51.52]]] } },
                { type: 'Feature', properties: { name: 'Zone C', value: 94 }, geometry: { type: 'Polygon', coordinates: [[[-0.12,51.49],[-0.06,51.49],[-0.06,51.46],[-0.12,51.46],[-0.12,51.49]]] } }
            ]
        };
        const source = new ol.source.Vector({ features: new ol.format.GeoJSON().readFeatures(geojson, { featureProjection: 'EPSG:3857' }) });
        const normalStyle = new ol.style.Style({ fill: new ol.style.Fill({ color: 'rgba(59,130,246,0.3)' }), stroke: new ol.style.Stroke({ color: '#3b82f6', width: 2 }) });
        const hoverStyle = new ol.style.Style({ fill: new ol.style.Fill({ color: 'rgba(59,130,246,0.7)' }), stroke: new ol.style.Stroke({ color: '#2563eb', width: 3 }) });
        source.forEachFeature(f => f.setStyle(normalStyle));

        const vectorLayer = new ol.layer.Vector({ source, style: function(f) { return f.getStyle() || normalStyle; } });
        const tooltip = document.getElementById('tooltip');
        let highlighted = null;

        const map = new ol.Map({ target: 'map', layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer], view: new ol.View({ center: ol.proj.fromLonLat([-0.06, 51.50]), zoom: 12 }) });

        map.on('pointermove', (e) => {
            const feature = map.forEachFeatureAtPixel(e.pixel, f => f);
            if (feature) {
                if (highlighted && highlighted !== feature) highlighted.setStyle(normalStyle);
                feature.setStyle(hoverStyle);
                highlighted = feature;
                tooltip.style.display = 'block';
                tooltip.style.left = (e.originalEvent.clientX + 12) + 'px';
                tooltip.style.top = (e.originalEvent.clientY - 10) + 'px';
                tooltip.textContent = feature.get('name') + ' — Score: ' + feature.get('value');
                map.getViewport().style.cursor = 'pointer';
            } else {
                if (highlighted) { highlighted.setStyle(normalStyle); highlighted = null; }
                tooltip.style.display = 'none';
                map.getViewport().style.cursor = '';
            }
        });