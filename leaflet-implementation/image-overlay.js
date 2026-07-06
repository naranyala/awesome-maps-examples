const map = L.map('map').setView([52, -2], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);

        const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Satellite_image_of_the_United_Kingdom_%282000%29.jpg/800px-Satellite_image_of_the_United_Kingdom_%282000%29.jpg';
        const bounds = [[48, -10], [56, 5]];
        const overlay = L.imageOverlay(imageUrl, bounds, { opacity: 0.7 }).addTo(map);