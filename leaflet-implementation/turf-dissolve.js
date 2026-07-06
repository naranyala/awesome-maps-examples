const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '\u00a9 OpenStreetMap' }).addTo(map);

const polyA = turf.polygon([[
    [-0.12, 51.51], [-0.08, 51.51], [-0.08, 51.49], [-0.12, 51.49], [-0.12, 51.51]
]]);
const polyB = turf.polygon([[
    [-0.10, 51.52], [-0.06, 51.52], [-0.06, 51.50], [-0.10, 51.50], [-0.10, 51.52]
]]);

let layer = null;
let dissolved = false;

function showOriginal() {
    if (layer) map.removeLayer(layer);
    const fc = turf.featureCollection([polyA, polyB]);
    layer = L.geoJSON(fc, {
        style: function(f) {
            return f === 0 ? { color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 0.2, weight: 2 }
                           : { color: '#10b981', fillColor: '#10b981', fillOpacity: 0.2, weight: 2 };
        }
    }).addTo(map);
    dissolved = false;
    document.getElementById('poly-count').textContent = '2 separate polygons';
}

function dissolve() {
    if (dissolved) return;
    if (layer) map.removeLayer(layer);
    const unioned = turf.union(polyA, polyB);
    layer = L.geoJSON(unioned, {
        style: { color: '#f59e0b', fillColor: '#f59e0b', fillOpacity: 0.3, weight: 2 }
    }).addTo(map);
    dissolved = true;
    document.getElementById('poly-count').textContent = '1 dissolved polygon';
}

function resetPolys() { showOriginal(); }

showOriginal();
