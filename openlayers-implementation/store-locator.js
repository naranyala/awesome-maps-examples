const stores = [
            { name: 'Coffee House', category: 'coffee', coords: [-0.12, 51.51] },
            { name: 'Bakery Cafe', category: 'coffee', coords: [-0.11, 51.52] },
            { name: 'Italian Bistro', category: 'restaurant', coords: [-0.13, 51.50] },
            { name: 'Sushi Place', category: 'restaurant', coords: [-0.10, 51.49] },
            { name: 'Book Store', category: 'shop', coords: [-0.14, 51.51] },
            { name: 'Tech Shop', category: 'shop', coords: [-0.09, 51.52] }
        ];
        const icons = { coffee: '☕', restaurant: '🍽️', shop: '🛍️' };
        const source = new ol.source.Vector({ features: stores.map(s => new ol.Feature({ geometry: new ol.geom.Point(ol.proj.fromLonLat(s.coords)), name: s.name, category: s.category })) });
        const vectorLayer = new ol.layer.Vector({
            source: source,
            style: function(f) { return new ol.style.Style({ text: new ol.style.Text({ text: icons[f.get('category')] || '📍', font: '20px sans-serif', offsetY: -15 }) }); }
        });
        const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer],
            view: new ol.View({ center: ol.proj.fromLonLat([-0.12, 51.51]), zoom: 13 })
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
                div.onclick = () => map.getView().animate({ center: ol.proj.fromLonLat(s.coords), zoom: 15 });
                list.appendChild(div);
            });
        }
        document.getElementById('search').oninput = filterStores;
        document.getElementById('category').onchange = filterStores;
        filterStores();