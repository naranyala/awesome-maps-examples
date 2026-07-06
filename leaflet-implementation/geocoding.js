const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19, attribution: '© OpenStreetMap'
        }).addTo(map);

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
                    map.setView([item.lat, item.lon], 15);
                    if (marker) map.removeLayer(marker);
                    marker = L.marker([item.lat, item.lon]).addTo(map).bindPopup(item.display_name).openPopup();
                    results.style.display = 'none';
                };
                results.appendChild(div);
            });
        }