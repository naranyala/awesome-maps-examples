const map = L.map('map', {
            contextmenu: true,
            contextmenuWidth: 160,
            contextmenuItems: [
                { text: '📍 Mark this location', callback: (e) => { L.marker(e.latlng).addTo(map).bindPopup(`Marked at ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`).openPopup(); document.getElementById('output').textContent = `Marker added at ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`; } },
                { text: '📏 Measure distance', callback: (e) => { document.getElementById('output').textContent = `Distance center: ${(map.getCenter().distanceTo(e.latlng) / 1000).toFixed(2)} km`; } },
                '-',
                { text: '🏠 Fly to London', callback: () => map.flyTo([51.505, -0.09], 13) }
            ]
        }).setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);