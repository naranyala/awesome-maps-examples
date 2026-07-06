// Generating random points for heatmap
        const features = [];
        for (let i = 0; i < 500; i++) {
            const coordinates = [
                2 * Math.random() * 20037508 - 20037508,
                2 * Math.random() * 20037508 - 20037508
            ];
            features.push(new ol.Feature(new ol.geom.Point(coordinates)));
        }

        const source = new ol.source.Vector({ features: features });

        const heatmapLayer = new ol.layer.Heatmap({
            source: source,
            blur: 15,
            radius: 20,
            weight: function (feature) {
                return 0.5 + Math.random() * 0.5; // Random weight for demo
            }
        });

        const map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({ source: new ol.source.OSM() }),
                heatmapLayer
            ],
            view: new ol.View({ center: [0, 0], zoom: 2 })
        });