const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        const customIcon = L.divIcon({
            html: '<div class="custom-marker"></div>',
            className: '',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });

        L.marker([51.505, -0.09], { icon: customIcon })
         .addTo(map)
         .bindPopup('<b>Hello from Leaflet!</b><br>This is a custom animated marker.')
         .openPopup();