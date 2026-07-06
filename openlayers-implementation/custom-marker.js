const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
            view: new ol.View({ center: ol.proj.fromLonLat([-0.1275, 51.5074]), zoom: 12 })
        });
        const markerEl = document.createElement('div');
        markerEl.className = 'marker';
        const marker = new ol.Overlay({ element: markerEl, positioning: 'center-center' });
        marker.setPosition(ol.proj.fromLonLat([-0.1275, 51.5074]));
        map.addOverlay(marker);

        const popupEl = document.createElement('div');
        popupEl.style.cssText = 'background:white;padding:8px;border-radius:4px;box-shadow:0 2px 4px rgba(0,0,0,0.2);font-size:12px;';
        popupEl.innerHTML = '<b>Custom Marker</b><br>London, UK';
        const popup = new ol.Overlay({ element: popupEl, positioning: 'bottom-center', offset: [0, -15] });
        popup.setPosition(ol.proj.fromLonLat([-0.1275, 51.5074]));
        map.addOverlay(popup);