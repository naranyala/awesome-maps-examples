// Pre-generate 24 hours of data
        const hourlyData = [];
        for (let h = 0; h < 24; h++) {
            const features = [];
            for (let i = 0; i < 30; i++) {
                features.push(new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([-0.09 + (Math.random()-0.5)*0.1, 51.505 + (Math.random()-0.5)*0.08])),
                    intensity: Math.max(0, Math.sin((h - 6) * Math.PI / 12) + Math.random() * 0.3)
                }));
            }
            hourlyData.push(features);
        }

        const source = new ol.source.Vector({ features: hourlyData[12] });
        const vectorLayer = new ol.layer.Vector({
            source,
            style: function(f) {
                const intensity = f.get('intensity');
                const color = intensity > 0.7 ? '#ef4444' : intensity > 0.3 ? '#f59e0b' : '#3b82f6';
                return new ol.style.Style({ image: new ol.style.Circle({ radius: 3 + intensity * 10, fill: new ol.style.Fill({ color, opacity: 0.7 }) }) });
            }
        });

        const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer],
            view: new ol.View({ center: ol.proj.fromLonLat([-0.09, 51.505]), zoom: 12 })
        });

        function updateTime(h) {
            const hour = parseInt(h);
            document.getElementById('time-label').textContent = hour.toString().padStart(2, '0') + ':00';
            source.clear();
            source.addFeatures(hourlyData[hour]);
        }