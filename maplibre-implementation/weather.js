const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [-98, 38], zoom: 4 });
        map.addControl(new maplibregl.NavigationControl());

        map.on('load', function() {
            map.addSource('radar', { type: 'raster', tiles: ['https://opengeo.ncep.noaa.gov/geoserver/conus/conus_bref_qcd/wms?service=WMS&version=1.1.0&request=GetMap&layers=conus_bref_qcd&bbox={bbox-epsg-3857}&width=256&height=256&srs=EPSG:3857&format=image/png&transparent=true'], tileSize: 256 });
            map.addLayer({ id: 'radar-layer', type: 'raster', source: 'radar', paint: { 'raster-opacity': 0.5, 'raster-resampling': 'nearest' } });
        });

        document.getElementById('showRadar').addEventListener('change', function() { map.setLayoutProperty('radar-layer', 'visibility', this.checked ? 'visible' : 'none'); });
        document.getElementById('opacity').addEventListener('input', function() { map.setPaintProperty('radar-layer', 'raster-opacity', +this.value); });