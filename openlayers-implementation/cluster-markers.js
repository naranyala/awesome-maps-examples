const count = 20000;
        const features = new Array(count);
        const e = 4500000;
        for (let i = 0; i < count; ++i) {
            const coordinates = [2 * e * Math.random() - e, 2 * e * Math.random() - e];
            features[i] = new ol.Feature(new ol.geom.Point(coordinates));
        }

        const source = new ol.source.Vector({ features: features });
        const clusterSource = new ol.source.Cluster({
            distance: parseInt(40, 10),
            source: source,
        });

        const styleCache = {};
        const clusters = new ol.layer.Vector({
            source: clusterSource,
            style: function (feature) {
                const size = feature.get('features').length;
                let style = styleCache[size];
                if (!style) {
                    const color = size > 100 ? '#f43f5e' : size > 10 ? '#f59e0b' : '#3b82f6';
                    const radius = Math.max(12, Math.min(size * 1.5, 25));
                    style = new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: radius,
                            stroke: new ol.style.Stroke({ color: '#fff', width: 2 }),
                            fill: new ol.style.Fill({ color: color })
                        }),
                        text: new ol.style.Text({
                            text: size.toString(),
                            fill: new ol.style.Fill({ color: '#fff' }),
                            font: 'bold 12px sans-serif'
                        })
                    });
                    styleCache[size] = style;
                }
                return style;
            }
        });

        const map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({ source: new ol.source.OSM() }),
                clusters
            ],
            view: new ol.View({
                center: [0, 0],
                zoom: 2
            })
        });