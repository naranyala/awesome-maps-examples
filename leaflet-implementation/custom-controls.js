const map = L.map('map', { zoomControl: false, rotation: 0.5 }).setView([0, 0], 3);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);

        const ZoomControl = L.Control.extend({
            options: { position: 'topleft' },
            onAdd: function () {
                const div = L.DomUtil.create('div', 'custom-zoom leaflet-bar');
                div.innerHTML = '<a href="#" onclick="map.zoomIn()" title="Zoom in">+</a><a href="#" onclick="map.zoomOut()" title="Zoom out">−</a>';
                L.DomEvent.disableClickPropagation(div);
                return div;
            }
        });
        map.addControl(new ZoomControl());

        const RotateNorthControl = L.Control.extend({
            options: { position: 'topleft' },
            onAdd: function () {
                const btn = L.DomUtil.create('button', 'rotate-north-btn');
                btn.innerHTML = 'N';
                btn.title = 'Reset rotation';
                btn.onclick = function () { map.setRotation(0); };
                L.DomEvent.disableClickPropagation(btn);
                return btn;
            }
        });
        map.addControl(new RotateNorthControl());