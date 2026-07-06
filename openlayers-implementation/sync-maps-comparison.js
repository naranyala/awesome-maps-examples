const center = ol.proj.fromLonLat([-0.09, 51.505]);
        const zoom = 13;

        const viewLeft = new ol.View({ center: center, zoom: zoom });
        const viewRight = new ol.View({ center: center, zoom: zoom });

        const mapL = new ol.Map({ target: 'map-left', view: viewLeft, controls: [] });
        mapL.addLayer(new ol.layer.Tile({ source: new ol.source.OSM() }));

        const mapR = new ol.Map({ target: 'map-right', view: viewRight, controls: [] });
        mapR.addLayer(new ol.layer.Tile({ source: new ol.source.XYZ({ url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', attributions: '© Esri' }) }));

        let syncing = false;
        function sync(source, target) {
            if (syncing) return;
            syncing = true;
            target.setCenter(source.getCenter());
            target.setZoom(source.getZoom());
            syncing = false;
        }
        viewLeft.on('change:center', () => sync(viewLeft, viewRight));
        viewLeft.on('change:resolution', () => sync(viewLeft, viewRight));
        viewRight.on('change:center', () => sync(viewRight, viewLeft));
        viewRight.on('change:resolution', () => sync(viewRight, viewLeft));

        const divider = document.getElementById('divider');
        let dragging = false;
        divider.addEventListener('mousedown', () => dragging = true);
        document.addEventListener('mouseup', () => dragging = false);
        document.addEventListener('mousemove', (e) => {
            if (!dragging) return;
            const pct = (e.clientX / window.innerWidth) * 100;
            document.getElementById('map-left').style.right = (100 - pct) + '%';
            document.getElementById('map-right').style.left = pct + '%';
            divider.style.left = pct + '%';
            mapL.updateSize(); mapR.updateSize();
        });