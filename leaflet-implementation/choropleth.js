const map = L.map('map').setView([40, -96], 4);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19, attribution: '© OpenStreetMap'
        }).addTo(map);

        const states = {
            "type": "FeatureCollection",
            "features": [
                {"type":"Feature","properties":{"name":"California","density":254},"geometry":{"type":"Polygon","coordinates":[[[-124.48,40],[-124.48,34],[-114.13,34],[-114.13,40],[-124.48,40]]]}},
                {"type":"Feature","properties":{"name":"Texas","density":113},"geometry":{"type":"Polygon","coordinates":[[[-106.65,32],[-106.65,26],[-93.51,26],[-93.51,32],[-106.65,32]]]}},
                {"type":"Feature","properties":{"name":"New York","density":421},"geometry":{"type":"Polygon","coordinates":[[[-79.76,43],[-79.76,41],[-71.85,41],[-71.85,43],[-79.76,43]]]}},
                {"type":"Feature","properties":{"name":"Florida","density":410},"geometry":{"type":"Polygon","coordinates":[[[-87.63,31],[-87.63,25],[-80.03,25],[-80.03,31],[-87.63,31]]]}},
                {"type":"Feature","properties":{"name":"Illinois","density":231},"geometry":{"type":"Polygon","coordinates":[[[-91.51,42.5],[-91.51,37],[-87.02,37],[-87.02,42.5],[-91.51,42.5]]]}}
            ]
        };

        function getColor(d) {
            return d > 400 ? '#800026' : d > 300 ? '#BD0026' : d > 200 ? '#E31A1C' : d > 100 ? '#FC4E2A' : '#FED976';
        }

        function style(feature) {
            return { fillColor: getColor(feature.properties.density), weight: 2, opacity: 1, color: 'white', fillOpacity: 0.7 };
        }

        const geojson = L.geoJson(states, { style: style, onEachFeature: (feature, layer) => {
            layer.bindPopup(`<b>${feature.properties.name}</b><br>Density: ${feature.properties.density}/km²`);
            layer.on('mouseover', function(e) { this.setStyle({ weight: 3, fillOpacity: 0.9 }); e.target.openPopup(); });
            layer.on('mouseout', function(e) { geojson.resetStyle(e.target); });
        }}).addTo(map);