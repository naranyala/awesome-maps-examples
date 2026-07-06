const vectorSource = new ol.source.Vector();
        const vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ fill: new ol.style.Fill({ color: 'rgba(59,130,246,0.4)' }), stroke: new ol.style.Stroke({ color: '#3b82f6', width: 2 }), image: new ol.style.Circle({ radius: 6, fill: new ol.style.Fill({ color: '#3b82f6' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) }) })
        });
        const map = new ol.Map({ target: 'map', layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer], view: new ol.View({ center: [0, 20], zoom: 2 }) });

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
                    const format = new ol.format.GeoJSON();
                    const features = format.readFeatures(geojson, { featureProjection: 'EPSG:3857' });
                    vectorSource.clear();
                    vectorSource.addFeatures(features);
                    const count = features.length;
                    document.getElementById('feature-count').textContent = '✅ ' + count + ' feature(s) loaded';
                    document.getElementById('feature-count').style.display = 'block';
                    const extent = vectorSource.getExtent();
                    map.getView().fit(extent, { padding: [50, 50, 50, 50], maxZoom: 15 });
                    dropZone.style.display = 'none';
                } catch (err) { alert('Invalid GeoJSON file'); }
            };
            reader.readAsText(file);
        }