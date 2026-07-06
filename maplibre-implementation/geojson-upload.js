const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [0, 20], zoom: 2 });
        map.addControl(new maplibregl.NavigationControl());

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
            reader.onload = (e) => {
                try {
                    const geojson = JSON.parse(e.target.result);
                    if (map.getSource('uploaded')) map.getSource('uploaded').setData(geojson);
                    else {
                        map.addSource('uploaded', { type: 'geojson', data: geojson });
                        map.addLayer({ id: 'uploaded-fill', type: 'fill', source: 'uploaded', paint: { 'fill-color': '#3b82f6', 'fill-opacity': 0.4 }, filter: ['==', '$type', 'Polygon'] });
                        map.addLayer({ id: 'uploaded-line', type: 'line', source: 'uploaded', paint: { 'line-color': '#3b82f6', 'line-width': 2 } });
                        map.addLayer({ id: 'uploaded-point', type: 'circle', source: 'uploaded', paint: { 'circle-radius': 6, 'circle-color': '#3b82f6', 'circle-stroke-color': '#fff', 'circle-stroke-width': 2 }, filter: ['==', '$type', 'Point'] });
                    }
                    const count = geojson.features ? geojson.features.length : 0;
                    document.getElementById('feature-count').textContent = `✅ ${count} feature(s) loaded`;
                    document.getElementById('feature-count').style.display = 'block';
                    if (geojson.features && geojson.features.length > 0) {
                        const bbox = turf.bbox(geojson);
                        map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 40 });
                    }
                    dropZone.style.display = 'none';
                } catch (err) { alert('Invalid GeoJSON file'); }
            };
            reader.readAsText(file);
        }