const map = L.map('map').setView([30, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
        
        const cityA = turf.point([-73.935242, 40.730610]); // New York
        const cityB = turf.point([2.3522, 48.8566]); // Paris
        
        const gc = turf.greatCircle(cityA, cityB, { npoints: 100 });
        
        L.geoJSON(gc, { style: { color: '#ef4444', weight: 3, dashArray: '8,6' } }).addTo(map);
        
        L.marker([cityA.geometry.coordinates[1], cityA.geometry.coordinates[0]]).addTo(map).bindPopup('<b>New York</b>');
        L.marker([cityB.geometry.coordinates[1], cityB.geometry.coordinates[0]]).addTo(map).bindPopup('<b>Paris</b>');
        
        const dist = turf.distance(cityA, cityB, { units: 'kilometers' }).toFixed(0);
        L.popup().setLatLng([35, -30]).setContent(`<b>${dist} km</b><br>Great circle distance`).openOn(map);