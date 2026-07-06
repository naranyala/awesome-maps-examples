const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-0.09, 51.505],
    zoom: 9
});

const bbox = [-0.5, 51.3, 0.3, 51.7];

map.on('load', () => {
    map.addSource('hex-source', { type: 'geojson', data: turf.featureCollection([]) });
    map.addLayer({ id: 'hex-fill', type: 'fill', source: 'hex-source', paint: { 'fill-color': '#3b82f6', 'fill-opacity': 0.1 } });
    map.addLayer({ id: 'hex-outline', type: 'line', source: 'hex-source', paint: { 'line-color': '#3b82f6', 'line-width': 1 } });
    updateGrid(5);
});

window.updateGrid = function(km) {
    document.getElementById('size-val').textContent = km;
    const grid = turf.hexGrid(bbox, parseFloat(km), { units: 'kilometers' });
    map.getSource('hex-source').setData(grid);
    document.getElementById('cell-count').textContent = grid.features.length;
};
