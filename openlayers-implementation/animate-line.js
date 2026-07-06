const route = [[-0.09,51.505],[-0.08,51.51],[-0.07,51.515],[-0.05,51.52],[-0.03,51.518],[-0.01,51.525],[0.01,51.52],[0.03,51.515],[0.05,51.51],[0.07,51.505],[0.09,51.5],[0.11,51.495]];
        const routeCoords = route.map(c => ol.proj.fromLonLat(c));

        const lineSource = new ol.source.Vector({ features: [new ol.Feature({ geometry: new ol.geom.LineString([]) })] });
        const lineLayer = new ol.layer.Vector({ source: lineSource, style: new ol.style.Style({ stroke: new ol.style.Stroke({ color: '#3b82f6', width: 3 }) }) });

        const pointSource = new ol.source.Vector({ features: [new ol.Feature({ geometry: new ol.geom.Point(routeCoords[0]) })] });
        const pointLayer = new ol.layer.Vector({ source: pointSource, style: new ol.style.Style({ image: new ol.style.Circle({ radius: 6, fill: new ol.style.Fill({ color: '#f44336' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) }) }) });

        const map = new ol.Map({ target: 'map', layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), lineLayer, pointLayer], view: new ol.View({ center: ol.proj.fromLonLat([0.01, 51.51]), zoom: 13 }) });

        let animating = false;
        function animateLine() {
            if (animating) return;
            animating = true;
            let step = 0;
            const coords = [];
            const lineFeature = lineSource.getFeatures()[0];

            function frame() {
                coords.push(routeCoords[step]);
                lineFeature.getGeometry().setCoordinates(coords);
                pointSource.getFeatures()[0].getGeometry().setCoordinates(routeCoords[step]);
                step++;
                if (step < routeCoords.length) requestAnimationFrame(frame);
                else animating = false;
            }
            frame();
        }