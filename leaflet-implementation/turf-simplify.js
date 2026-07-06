const map = L.map('map').setView([51.5, -0.12], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '\u00a9 OpenStreetMap' }).addTo(map);

const complexPoly = turf.polygon([[
    [-0.12, 51.5], [-0.11, 51.51], [-0.10, 51.505], [-0.09, 51.515],
    [-0.08, 51.505], [-0.07, 51.51], [-0.06, 51.5], [-0.07, 51.49],
    [-0.08, 51.495], [-0.09, 51.485], [-0.10, 51.495], [-0.11, 51.49],
    [-0.12, 51.5]
]]);

let layer = null;

function updateSimplify(tolerance) {
    document.getElementById('tolerance-val').textContent = tolerance;
    const simplified = turf.simplify(complexPoly, { tolerance: parseFloat(tolerance), highQuality: false });
    if (layer) map.removeLayer(layer);
    layer = L.geoJSON(simplified, {
        style: { color: '#60a5fa', fillColor: '#3b82f6', fillOpacity: 0.2, weight: 2 }
    }).addTo(map);
    const coords = simplified.geometry.coordinates[0];
    document.getElementById('vert-count').textContent = coords.length;
}

updateSimplify(0.01);
