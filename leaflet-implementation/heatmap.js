const map = L.map('map').setView([51.505, -0.09], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19, attribution: '© OpenStreetMap'
        }).addTo(map);

        const heatData = [];
        for (let i = 0; i < 200; i++) {
            heatData.push([51.505 + (Math.random() - 0.5) * 0.12, -0.09 + (Math.random() - 0.5) * 0.12, Math.random()]);
        }

        const heat = L.heatLayer(heatData, { radius: 25, blur: 15, maxZoom: 17 }).addTo(map);

        document.getElementById('radius').addEventListener('input', (e) => { heat.setOptions({ radius: parseInt(e.target.value) }); heat.redraw(); });
        document.getElementById('blur').addEventListener('input', (e) => { heat.setOptions({ blur: parseInt(e.target.value) }); heat.redraw(); });