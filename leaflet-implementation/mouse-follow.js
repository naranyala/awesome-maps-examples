const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        const followerIcon = L.divIcon({
            html: '<div style="background: red; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 5px rgba(0,0,0,0.5);"></div>',
            className: '',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        const follower = L.marker([51.505, -0.09], { icon: followerIcon, interactive: false }).addTo(map);

        map.on('mousemove', (e) => {
            // Use requestAnimationFrame for smooth following
            requestAnimationFrame(() => {
                follower.setLatLng(e.latlng);
            });
        });