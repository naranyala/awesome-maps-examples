const stores = [
            { name: 'Coffee House', category: 'coffee', coords: [-0.12, 51.51] },
            { name: 'Bakery Cafe', category: 'coffee', coords: [-0.11, 51.52] },
            { name: 'Italian Bistro', category: 'restaurant', coords: [-0.13, 51.50] },
            { name: 'Sushi Place', category: 'restaurant', coords: [-0.10, 51.49] },
            { name: 'Book Store', category: 'shop', coords: [-0.14, 51.51] },
            { name: 'Tech Shop', category: 'shop', coords: [-0.09, 51.52] }
        ];
        const icons = { coffee: '☕', restaurant: '🍽️', shop: '🛍️' };

        const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [-0.12, 51.51], zoom: 13 });
        map.addControl(new maplibregl.NavigationControl());

        const features = stores.map(s => ({ type: 'Feature', properties: { name: s.name, category: s.category, icon: icons[s.category] }, geometry: { type: 'Point', coordinates: s.coords } }));

        map.on('load', function() {
            map.addSource('stores', { type: 'geojson', data: { type: 'FeatureCollection', features } });
            map.addLayer({ id: 'stores-layer', type: 'symbol', source: 'stores', layout: { 'text-field': ['get', 'icon'], 'text-size': 20, 'text-offset': [0, -1.2] } });
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
                div.onclick = () => map.flyTo({ center: s.coords, zoom: 15 });
                list.appendChild(div);
            });
        }
        document.getElementById('search').oninput = filterStores;
        document.getElementById('category').onchange = filterStores;
        filterStores();