const center = [51.505, -0.09], zoom = 13;
        const mapL = L.map('map-left', { center, zoom, zoomControl: false }).addLayer(L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }));
        const mapR = L.map('map-right', { center, zoom, zoomControl: false }).addLayer(L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: '© Esri' }));

        let syncing = false;
        function syncMap(source, target) {
            if (syncing) return;
            syncing = true;
            target.setView(source.getCenter(), source.getZoom(), { animate: false });
            syncing = false;
        }
        mapL.on('move', () => syncMap(mapL, mapR));
        mapR.on('move', () => syncMap(mapR, mapL));

        // Draggable divider
        const divider = document.getElementById('divider');
        let dragging = false;
        divider.addEventListener('mousedown', () => dragging = true);
        document.addEventListener('mouseup', () => dragging = false);
        document.addEventListener('mousemove', (e) => {
            if (!dragging) return;
            const pct = (e.clientX / window.innerWidth) * 100;
            document.getElementById('map-left').style.right = (100 - pct) + '%';
            document.getElementById('map-right').style.left = pct + '%';
            divider.style.left = pct + '%';
            mapL.invalidateSize(); mapR.invalidateSize();
        });