const source = new ol.source.Vector();
        const vectorLayer = new ol.layer.Vector({
            source,
            style: new ol.style.Style({ image: new ol.style.Circle({ radius: 5, fill: new ol.style.Fill({ color: '#3b82f6' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) }) })
        });

        const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer],
            view: new ol.View({ center: ol.proj.fromLonLat([-0.09, 51.505]), zoom: 12 })
        });

        function addRandomPoint() {
            const feature = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([-0.09 + (Math.random()-0.5)*0.1, 51.505 + (Math.random()-0.5)*0.08]))
            });
            source.addFeature(feature);
            if (source.getFeatures().length > 50) source.removeFeature(source.getFeatures()[0]);
            document.getElementById('count').textContent = source.getFeatures().length;
        }

        for (let i = 0; i < 10; i++) addRandomPoint();
        setInterval(addRandomPoint, 800);