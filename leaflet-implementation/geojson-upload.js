const map = L.map('map').setView([20, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
        const geoLayer = L.geoJSON(null, {
            style: { color: '#3b82f6', weight: 2, fillOpacity: 0.3, fillColor: 'rgba(59,130,246,0.4)' },
            pointToLayer: (f, latlng) => L.circleMarker(latlng, { radius: 6, color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 1 })
        }).addTo(map);

        const dropZone = document.getElementById('drop-zone');
        const fileInput = document.getElementById('file-input');
        dropZone.addEventListener('click', () => fileInput.click());
        dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('dragover'); });
        dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
        dropZone.addEventListener('drop', (e) => { e.preventDefault(); dropZone.classList.remove('dragover'); handleFile(e.dataTransfer.files[0]); });
        fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));

        function handleFile(file) {
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function (e) {
                try {
                    const geojson = JSON.parse(e.target.result);
                    geoLayer.clearLayers();
                    geoLayer.addData(geojson);
                    const count = geoLayer.getLayers().length;
                    document.getElementById('feature-count').textContent = '✅ ' + count + ' feature(s) loaded';
                    document.getElementById('feature-count').style.display = 'block';
                    map.fitBounds(geoLayer.getBounds(), { padding: [50, 50], maxZoom: 15 });
                    dropZone.style.display = 'none';
                } catch (err) { alert('Invalid GeoJSON file'); }
            };
            reader.readAsText(file);
        }