const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19, attribution: '© OpenStreetMap'
        }).addTo(map);

        const drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);

        const drawControl = new L.Control.Draw({
            edit: { featureGroup: drawnItems },
            draw: { polygon: true, polyline: true, circle: false, circlemarker: false, rectangle: true, marker: true }
        });
        map.addControl(drawControl);

        map.on(L.Draw.Event.CREATED, (e) => {
            drawnItems.addLayer(e.layer);
            updateGeoJSON();
        });
        map.on(L.Draw.Event.DELETED, updateGeoJSON);
        map.on(L.Draw.Event.EDITED, updateGeoJSON);

        function updateGeoJSON() {
            const geo = drawnItems.toGeoJSON();
            document.getElementById('geojson-output').value = JSON.stringify(geo, null, 2);
        }
        function copyGeoJSON() { navigator.clipboard.writeText(document.getElementById('geojson-output').value); }
        function downloadGeoJSON() {
            const blob = new Blob([document.getElementById('geojson-output').value], { type: 'application/json' });
            const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'drawn-features.json'; a.click();
        }
        function clearAll() { drawnItems.clearLayers(); updateGeoJSON(); }