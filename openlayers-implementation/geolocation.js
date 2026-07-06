const map = new ol.Map({
            target: 'map',
            layers: [ new ol.layer.Tile({ source: new ol.source.OSM() }) ],
            view: new ol.View({ center: ol.proj.fromLonLat([0, 0]), zoom: 2 })
        });

        const geolocation = new ol.Geolocation({
            trackingOptions: { enableHighAccuracy: true },
            projection: map.getView().getProjection()
        });

        geolocation.setTracking(true);

        const accuracyFeature = new ol.Feature();
        geolocation.on('change:accuracyGeometry', function () {
            accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
        });

        const positionFeature = new ol.Feature();
        positionFeature.setStyle(new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({ color: '#3399CC' }),
                stroke: new ol.style.Stroke({ color: '#fff', width: 2 })
            })
        }));

        geolocation.on('change:position', function () {
            const coordinates = geolocation.getPosition();
            positionFeature.setGeometry(coordinates ? new ol.geom.Point(coordinates) : null);
            map.getView().animate({ center: coordinates, zoom: 14 });
        });

        new ol.layer.Vector({
            map: map,
            source: new ol.source.Vector({ features: [accuracyFeature, positionFeature] })
        });