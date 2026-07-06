const markerSource = new ol.source.Vector();
const markerLayer = new ol.layer.Vector({
    source: markerSource,
    style: new ol.style.Style({
        image: new ol.style.CircleStyle({ radius: 7, fill: new ol.style.Fill({ color: '#ef4444' }), stroke: new ol.style.Stroke({ color: '#fff', width: 2 }) })
    })
});

const map = new ol.Map({
    target: 'map',
    layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), markerLayer],
    view: new ol.View({ center: ol.proj.fromLonLat([-0.09, 51.505]), zoom: 13 })
});

map.on('click', async function(evt) {
    const lonlat = ol.proj.toLonLat(evt.coordinate);
    const lat = lonlat[1], lng = lonlat[0];
    document.getElementById('address-name').textContent = 'Looking up...';
    document.getElementById('address-detail').textContent = '';
    document.getElementById('address-coords').textContent = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;

    markerSource.clear();
    const pt = new ol.Feature(new ol.geom.Point(evt.coordinate));
    markerSource.addFeature(pt);

    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`);
        const data = await res.json();
        if (data.display_name) {
            const parts = data.display_name.split(', ');
            document.getElementById('address-name').textContent = parts.slice(0, 3).join(', ');
            document.getElementById('address-detail').textContent = parts.slice(3).join(', ');
        } else {
            document.getElementById('address-name').textContent = 'No address found';
        }
    } catch {
        document.getElementById('address-name').textContent = 'Geocoding failed';
    }
});
