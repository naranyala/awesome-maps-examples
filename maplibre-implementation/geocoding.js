const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [0, 0], zoom: 2 });
        map.addControl(new maplibregl.NavigationControl());
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
                    map.flyTo({ center: [parseFloat(item.lon), parseFloat(item.lat)], zoom: 15 });
                    if (marker) marker.remove();
                    marker = new maplibregl.Marker().setLngLat([parseFloat(item.lon), parseFloat(item.lat)]).setPopup(new maplibregl.Popup().setHTML(item.display_name)).addTo(map);
                    marker.togglePopup();
                    results.style.display = 'none';
                };
                results.appendChild(div);
            });
        }