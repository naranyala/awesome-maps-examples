const stores = [
            { name: 'Coffee House', category: 'coffee', coords: [51.51, -0.12] },
            { name: 'Bakery Cafe', category: 'coffee', coords: [51.52, -0.11] },
            { name: 'Italian Bistro', category: 'restaurant', coords: [51.50, -0.13] },
            { name: 'Sushi Place', category: 'restaurant', coords: [51.49, -0.10] },
            { name: 'Book Store', category: 'shop', coords: [51.51, -0.14] },
            { name: 'Tech Shop', category: 'shop', coords: [51.52, -0.09] }
        ];
        const icons = { coffee: '☕', restaurant: '🍽️', shop: '🛍️' };

        const map = L.map('map').setView([51.51, -0.12], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);

        const markers = L.layerGroup().addTo(map);
        stores.forEach(s => {
            const m = L.marker(s.coords, { icon: L.divIcon({ html: icons[s.category], iconSize: [24, 24], className: '' }) }).addTo(markers);
            m.bindPopup(s.name);
        });

        function filterStores() {
            const q = document.getElementById('search').value.toLowerCase();
            const cat = document.getElementById('category').value;
            const list = document.getElementById('storeList');
            list.innerHTML = '';
            stores.filter(s => (cat === 'all' || s.category === cat) && s.name.toLowerCase().includes(q)).forEach(s => {
                const div = document.createElement('div');
                div.className = 'store-item';
                div.textContent = icons[s.category] + ' ' + s.name;
                div.onclick = () => map.flyTo(s.coords, 15);
                list.appendChild(div);
            });
        }
        document.getElementById('search').oninput = filterStores;
        document.getElementById('category').onchange = filterStores;
        filterStores();