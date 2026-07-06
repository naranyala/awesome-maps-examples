const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);

        const locations = [
            { lat: 51.5074, lng: -0.1278, name: 'Westminster', desc: 'Home of Parliament' },
            { lat: 51.5014, lng: -0.1419, name: 'Buckingham Palace', desc: 'The Queen\'s residence' },
            { lat: 51.5085, lng: -0.0762, name: 'Tower of London', desc: 'Historic castle' },
            { lat: 51.5033, lng: -0.1195, name: 'London Eye', desc: '135m observation wheel' }
        ];

        locations.forEach(loc => {
            const marker = L.marker([loc.lat, loc.lng]).addTo(map);
            marker.bindPopup(`<div class="popup-title">${loc.name}</div><div class="popup-desc">${loc.desc}</div><div style="margin-top:6px"><img src="https://placehold.co/200x100/3b82f6/fff?text=${encodeURIComponent(loc.name)}" style="border-radius:4px;width:100%"></div>`, { className: 'custom-popup', maxWidth: 220 });
            marker.bindTooltip(`<b>${loc.name}</b>`, { direction: 'top', offset: [0, -12], opacity: 0.9 });
        });