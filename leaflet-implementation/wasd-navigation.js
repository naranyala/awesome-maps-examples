const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        const panStep = 50; // pixels to pan
        let keys = {};

        // Focus map to allow keyboard events
        map.getContainer().focus();

        document.addEventListener('keydown', (e) => {
            if (['w', 'a', 's', 'd'].includes(e.key.toLowerCase())) {
                keys[e.key.toLowerCase()] = true;
                panMap();
            }
        });

        document.addEventListener('keyup', (e) => {
             if (['w', 'a', 's', 'd'].includes(e.key.toLowerCase())) {
                keys[e.key.toLowerCase()] = false;
             }
        });

        function panMap() {
            let dx = 0;
            let dy = 0;
            if (keys['a']) dx -= panStep;
            if (keys['d']) dx += panStep;
            if (keys['w']) dy -= panStep;
            if (keys['s']) dy += panStep;

            if (dx !== 0 || dy !== 0) {
                map.panBy([dx, dy], { animate: true, duration: 0.1 });
            }
        }