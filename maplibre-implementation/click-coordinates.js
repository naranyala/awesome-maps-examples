const map = new maplibregl.Map({
        container: 'map',
        style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
        center: [-74.006, 40.7128],
        zoom: 12
    });

    map.on('load', () => {
        map.getCanvas().style.cursor = 'crosshair';
    });

    const latEl = document.getElementById('lat-val');
    const lngEl = document.getElementById('lng-val');
    let currentMarker = null;

    map.on('click', function(e) {
        latEl.textContent = e.lngLat.lat.toFixed(5);
        lngEl.textContent = e.lngLat.lng.toFixed(5);
        
        if (currentMarker) currentMarker.remove();
        
        const el = document.createElement('div');
        el.className = 'ping-marker';
        
        currentMarker = new maplibregl.Marker({ element: el })
            .setLngLat([e.lngLat.lng, e.lngLat.lat])
            .addTo(map);
            
        map.panTo([e.lngLat.lng, e.lngLat.lat], { duration: 800 });
    });