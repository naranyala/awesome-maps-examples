const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '\u00a9 OpenStreetMap' }).addTo(map);

const jagged = turf.polygon([[
    [-0.14, 51.52], [-0.12, 51.515], [-0.10, 51.525], [-0.08, 51.51],
    [-0.06, 51.52], [-0.05, 51.50], [-0.07, 51.49], [-0.09, 51.48],
    [-0.11, 51.49], [-0.13, 51.48], [-0.15, 51.50], [-0.14, 51.52]
]]);

let layer = null;

function updateSmooth(iter, isReset) {
    if (isReset) {
        document.getElementById('iterations').value = 1;
        document.getElementById('iter-val').textContent = '1';
        iter = 1;
    }
    const smoothed = turf.polygonSmooth(jagged, { iterations: parseInt(iter) });
    const result = smoothed.features.length ? smoothed : jagged;
    if (layer) map.removeLayer(layer);

    layer = L.geoJSON(result, {
        style: { color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 0.2, weight: 2 }
    }).addTo(map);

    const coords = result.geometry.coordinates[0];
    document.getElementById('vert-count').textContent = coords.length;
}

function resetPoly() { updateSmooth(1, true); }

updateSmooth(1);
