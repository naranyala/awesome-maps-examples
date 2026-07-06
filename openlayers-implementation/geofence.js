const center = ol.proj.fromLonLat([-0.1275, 51.5074]);
        const fenceRadius = 50;
        const fenceSource = new ol.source.Vector();
        const fenceLayer = new ol.layer.Vector({
            source: fenceSource,
            style: new ol.style.Style({ fill: new ol.style.Fill({ color: 'rgba(59,130,246,0.15)' }), stroke: new ol.style.Stroke({ color: '#3b82f6', width: 2, lineDash: [5, 5] }) })
        });
        const markerSource = new ol.source.Vector();
        const markerLayer = new ol.layer.Vector({ source: markerSource });

        const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), fenceLayer, markerLayer],
            view: new ol.View({ center: center, zoom: 10 })
        });

        // Draw fence circle
        const fenceCenter = ol.proj.toLonLat(center);
        const circle = turf.circle(fenceCenter, fenceRadius, { steps: 64, units: 'kilometers' });
        const fenceFeatures = new ol.format.GeoJSON().readFeatures(circle, { featureProjection: 'EPSG:3857' });
        fenceSource.addFeatures(fenceFeatures);

        const info = document.getElementById('info');
        map.on('click', function(evt) {
            markerSource.clear();
            const feature = new ol.Feature({ geometry: new ol.geom.Point(evt.coordinate) });
            feature.setStyle(new ol.style.Style({ image: new ol.style.Circle({ radius: 8, fill: new ol.style.Fill({ color: '#22c55e' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) }) }));
            markerSource.addFeature(feature);

            const clickLonLat = ol.proj.toLonLat(evt.coordinate);
            const point = turf.point(clickLonLat);
            const fenceCenterPt = turf.point(fenceCenter);
            const dist = turf.distance(point, fenceCenterPt, { units: 'kilometers' });
            const inside = dist <= fenceRadius;
            info.className = 'info ' + (inside ? 'inside' : 'outside');
            info.textContent = inside ? '✅ Inside fence (' + dist.toFixed(1) + 'km)' : '❌ Outside fence (' + dist.toFixed(1) + 'km)';
        });