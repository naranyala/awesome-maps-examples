const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '\u00a9 OpenStreetMap' }).addTo(map);

const regions = L.geoJSON({
    type: 'FeatureCollection',
    features: [
        { type: 'Feature', properties: { name: 'Soho', type: 'commercial', area_km2: 0.8, population: 3000 }, geometry: { type: 'Polygon', coordinates: [[[-0.14,51.515],[-0.13,51.515],[-0.13,51.513],[-0.14,51.513],[-0.14,51.515]]] } },
        { type: 'Feature', properties: { name: 'Covent Garden', type: 'commercial', area_km2: 0.5, population: 2500 }, geometry: { type: 'Polygon', coordinates: [[[-0.13,51.517],[-0.12,51.517],[-0.12,51.515],[-0.13,51.515],[-0.13,51.517]]] } },
        { type: 'Feature', properties: { name: 'Hyde Park', type: 'park', area_km2: 1.4, population: 0 }, geometry: { type: 'Polygon', coordinates: [[[-0.18,51.512],[-0.15,51.512],[-0.15,51.505],[-0.18,51.505],[-0.18,51.512]]] } },
        { type: 'Feature', properties: { name: 'Mayfair', type: 'commercial', area_km2: 0.6, population: 2000 }, geometry: { type: 'Polygon', coordinates: [[[-0.15,51.512],[-0.14,51.512],[-0.14,51.508],[-0.15,51.508],[-0.15,51.512]]] } },
        { type: 'Feature', properties: { name: 'Thames River', type: 'water', area_km2: 0.3, population: 0 }, geometry: { type: 'Polygon', coordinates: [[[-0.12,51.505],[-0.06,51.505],[-0.06,51.503],[-0.12,51.503],[-0.12,51.505]]] } }
    ]
}, {
    style: function(f) {
        const type = f.properties.type;
        return { color: type === 'park' ? '#10b981' : type === 'water' ? '#3b82f6' : '#ef4444', fillColor: type === 'park' ? '#10b981' : type === 'water' ? '#3b82f6' : '#ef4444', fillOpacity: 0.2, weight: 2 };
    },
    onEachFeature: function(f, l) {
        l.on('click', function() { showProps(f.properties); });
        l.on('mouseover', function() { this.setStyle({ fillOpacity: 0.4 }); });
        l.on('mouseout', function() { this.setStyle({ fillOpacity: 0.2 }); });
    }
}).addTo(map);

function showProps(props) {
    const div = document.getElementById('inspector');
    div.style.display = 'block';
    div.innerHTML = '<div class="name">' + props.name + '</div>' +
        Object.keys(props).filter(k => k !== 'name').map(k => '<div class="prop">' + k + ': <span>' + props[k] + '</span></div>').join('');
    setTimeout(() => { div.style.display = 'none'; }, 5000);
}

window.filterBy = function(type) {
    regions.eachLayer(function(l) {
        const props = l.feature.properties;
        if (type === 'all' || (type === 'highway' && props.type === 'commercial') || props.type === type) {
            map.addLayer(l);
        } else {
            map.removeLayer(l);
        }
    });
};
