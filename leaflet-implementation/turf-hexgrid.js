const map = L.map('map').setView([51.505, -0.09], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '\u00a9 OpenStreetMap' }).addTo(map);

const bbox = [-0.5, 51.3, 0.3, 51.7];
L.rectangle([[bbox[1], bbox[0]], [bbox[3], bbox[2]]], { color: '#f59e0b', weight: 1, fill: false, dashArray: '4 4' }).addTo(map);

let gridLayer = null;

function updateGrid(km) {
    document.getElementById('size-val').textContent = km;
    const grid = turf.hexGrid(bbox, parseFloat(km), { units: 'kilometers' });
    if (gridLayer) map.removeLayer(gridLayer);
    gridLayer = L.geoJSON(grid, {
        style: { color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 0.1, weight: 1 },
        onEachFeature: function(f, l) {
            l.on('mouseover', () => l.setStyle({ fillOpacity: 0.3 }));
            l.on('mouseout', () => l.setStyle({ fillOpacity: 0.1 }));
        }
    }).addTo(map);
    document.getElementById('cell-count').textContent = grid.features.length;
}

updateGrid(5);
