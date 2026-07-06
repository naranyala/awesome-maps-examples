const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
            view: new ol.View({ center: ol.proj.fromLonLat([-74.006, 40.7128]), zoom: 15, pitch: 45 })
        });

        const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
        const coords = [
            [[-74.011, 40.708], [-74.004, 40.708], [-74.004, 40.715], [-74.011, 40.715]],
            [[-74.015, 40.712], [-74.008, 40.712], [-74.008, 40.719], [-74.015, 40.719]],
            [[-74.007, 40.703], [-74.000, 40.703], [-74.000, 40.710], [-74.007, 40.710]],
            [[-74.013, 40.716], [-74.006, 40.716], [-74.006, 40.723], [-74.013, 40.723]],
            [[-74.009, 40.700], [-74.002, 40.700], [-74.002, 40.707], [-74.009, 40.707]]
        ];

        const features = coords.map((ring, i) => new ol.Feature({
            geometry: new ol.geom.Polygon([ring.map(c => ol.proj.fromLonLat(c))])
        }));

        const vector = new ol.layer.Vector({
            source: new ol.source.Vector({ features }),
            style: (feat) => new ol.style.Style({
                fill: new ol.style.Fill({ color: colors[feat.get('id') ?? 0] }),
                stroke: new ol.style.Stroke({ color: '#fff', width: 2 })
            })
        });
        features.forEach((f, i) => f.set('id', i));
        map.addLayer(vector);

        const pitchInput = document.getElementById('pitch');
        const pitchVal = document.getElementById('pitchVal');
        pitchInput.addEventListener('input', () => {
            const v = parseInt(pitchInput.value);
            pitchVal.textContent = v;
            map.getView().setPitch(v);
        });