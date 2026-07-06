const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-0.09, 51.505],
    zoom: 12
});

const regions = {
    type: 'FeatureCollection',
    features: [
        { type: 'Feature', properties: { name: 'Soho', type: 'commercial', area_km2: 0.8, population: 3000 }, geometry: { type: 'Polygon', coordinates: [[[-0.14,51.515],[-0.13,51.515],[-0.13,51.513],[-0.14,51.513],[-0.14,51.515]]] } },
        { type: 'Feature', properties: { name: 'Covent Garden', type: 'commercial', area_km2: 0.5, population: 2500 }, geometry: { type: 'Polygon', coordinates: [[[-0.13,51.517],[-0.12,51.517],[-0.12,51.515],[-0.13,51.515],[-0.13,51.517]]] } },
        { type: 'Feature', properties: { name: 'Hyde Park', type: 'park', area_km2: 1.4, population: 0 }, geometry: { type: 'Polygon', coordinates: [[[-0.18,51.512],[-0.15,51.512],[-0.15,51.505],[-0.18,51.505],[-0.18,51.512]]] } },
        { type: 'Feature', properties: { name: 'Mayfair', type: 'commercial', area_km2: 0.6, population: 2000 }, geometry: { type: 'Polygon', coordinates: [[[-0.15,51.512],[-0.14,51.512],[-0.14,51.508],[-0.15,51.508],[-0.15,51.512]]] } },
        { type: 'Feature', properties: { name: 'Thames River', type: 'water', area_km2: 0.3, population: 0 }, geometry: { type: 'Polygon', coordinates: [[[-0.12,51.505],[-0.06,51.505],[-0.06,51.503],[-0.12,51.503],[-0.12,51.505]]] } }
    ]
};

map.on('load', function() {
    map.addSource('regions', { type: 'geojson', data: regions });
    map.addLayer({
        id: 'regions-fill', type: 'fill', source: 'regions',
        paint: {
            'fill-color': ['match', ['get', 'type'], 'park', '#10b981', 'water', '#3b82f6', '#ef4444'],
            'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.4, 0.2]
        }
    });
    map.addLayer({
        id: 'regions-outline', type: 'line', source: 'regions',
        paint: {
            'line-color': ['match', ['get', 'type'], 'park', '#10b981', 'water', '#3b82f6', '#ef4444'],
            'line-width': 2
        }
    });

    let hoveredId = null;
    map.on('mousemove', 'regions-fill', function(e) {
        if (e.features.length) {
            if (hoveredId !== null) map.setFeatureState({ source: 'regions', id: hoveredId }, { hover: false });
            hoveredId = e.features[0].id;
            map.setFeatureState({ source: 'regions', id: hoveredId }, { hover: true });
        }
    });
    map.on('mouseleave', 'regions-fill', function() {
        if (hoveredId !== null) map.setFeatureState({ source: 'regions', id: hoveredId }, { hover: false });
        hoveredId = null;
    });

    map.on('click', 'regions-fill', function(e) {
        if (e.features.length) showProps(e.features[0].properties);
    });
});

function showProps(props) {
    const div = document.getElementById('inspector');
    div.style.display = 'block';
    div.innerHTML = '<div class="name">' + props.name + '</div>' +
        Object.keys(props).filter(k => k !== 'name').map(k => '<div class="prop">' + k + ': <span>' + props[k] + '</span></div>').join('');
    setTimeout(() => { div.style.display = 'none'; }, 5000);
}

window.filterBy = function(type) {
    map.setFilter('regions-fill', type === 'all' ? null : ['==', ['get', 'type'], type]);
    map.setFilter('regions-outline', type === 'all' ? null : ['==', ['get', 'type'], type]);
};
