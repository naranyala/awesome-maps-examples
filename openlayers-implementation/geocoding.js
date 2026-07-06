const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
            view: new ol.View({ center: [0, 0], zoom: 2 })
        });
        map.addControl(new ol.control.FullScreen());

        let marker = null;
        document.getElementById('search-input').addEventListener('keypress', (e) => { if (e.key === 'Enter') search(); });

        async function search() {
            const query = document.getElementById('search-input').value;
            if (!query) return;
            const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`);
            const data = await res.json();
            const results = document.getElementById('results');
            results.innerHTML = '';
            if (data.length === 0) { results.style.display = 'none'; return; }
            results.style.display = 'block';
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'result-item';
                div.textContent = item.display_name;
                div.onclick = () => {
                    map.getView().animate({ center: ol.proj.fromLonLat([parseFloat(item.lon), parseFloat(item.lat)]), zoom: 15, duration: 1000 });
                    if (marker) map.removeOverlay(marker);
                    const el = document.createElement('div');
                    el.innerHTML = '📍';
                    el.style.fontSize = '24px';
                    marker = new ol.Overlay({ element: el, position: ol.proj.fromLonLat([parseFloat(item.lon), parseFloat(item.lat)]), positioning: 'bottom-center' });
                    map.addOverlay(marker);
                    results.style.display = 'none';
                };
                results.appendChild(div);
            });
        }