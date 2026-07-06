const map = L.map('map').setView([38, -98], 4);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);

        const radar = L.tileLayer.wms('https://opengeo.ncep.noaa.gov/geoserver/conus/conus_bref_qcd/ows', {
            layers: 'conus_bref_qcd', format: 'image/png', transparent: true, opacity: 0.5, attribution: '© NOAA'
        }).addTo(map);

        function toggleLayer(type) {
            if (type === 'radar') radar.setVisible(document.getElementById('showRadar').checked);
            if (type === 'opacity') radar.setOpacity(+document.getElementById('opacity').value);
        }