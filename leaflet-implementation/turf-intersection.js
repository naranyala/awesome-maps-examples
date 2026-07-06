const map = L.map('map').setView([51.505, -0.09], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

        const poly1 = turf.polygon([[[-0.1, 51.51], [-0.08, 51.51], [-0.08, 51.49], [-0.1, 51.49], [-0.1, 51.51]]]);
        const poly2 = turf.polygon([[[-0.09, 51.50], [-0.07, 51.50], [-0.07, 51.48], [-0.09, 51.48], [-0.09, 51.50]]]);

        L.geoJSON(poly1, { style: { color: '#3b82f6', fillOpacity: 0.2 } }).addTo(map);
        L.geoJSON(poly2, { style: { color: '#ef4444', fillOpacity: 0.2 } }).addTo(map);

        const intersection = turf.intersect(poly1, poly2);
        if (intersection) {
            L.geoJSON(intersection, { style: { color: '#10b981', fillColor: '#10b981', fillOpacity: 0.6 } }).addTo(map);
        }