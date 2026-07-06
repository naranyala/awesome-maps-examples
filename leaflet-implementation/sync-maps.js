const center = [51.505, -0.09];
        const zoom = 13;

        const map1 = L.map('map1').setView(center, zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map1);

        const map2 = L.map('map2').setView(center, zoom);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 19,
            attribution: 'Tiles &copy; Esri'
        }).addTo(map2);

        // Simple manual sync implementation
        let isSyncingLeft = false;
        let isSyncingRight = false;

        map1.on('move', () => {
            if (!isSyncingLeft) {
                isSyncingRight = true;
                map2.setView(map1.getCenter(), map1.getZoom(), { animate: false });
            }
            isSyncingLeft = false;
        });

        map2.on('move', () => {
            if (!isSyncingRight) {
                isSyncingLeft = true;
                map1.setView(map2.getCenter(), map2.getZoom(), { animate: false });
            }
            isSyncingRight = false;
        });