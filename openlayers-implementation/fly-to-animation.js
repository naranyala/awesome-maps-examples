const view = new ol.View({ center: ol.proj.fromLonLat([-0.09, 51.505]), zoom: 13 });
        const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
            view: view
        });

        const markerEl = document.createElement('div');
        markerEl.innerHTML = '<div style="width:12px;height:12px;background:#3b82f6;border:2px solid #fff;border-radius:50%;box-shadow:0 0 8px rgba(59,130,246,0.6)"></div>';
        const marker = new ol.Overlay({ element: markerEl, positioning: 'center-center', offset: [0, 0] });
        marker.setPosition(ol.proj.fromLonLat([-0.09, 51.505]));
        map.addOverlay(marker);

        const popupEl = document.createElement('div');
        popupEl.style.cssText = 'background:#fff;padding:8px 12px;border-radius:6px;box-shadow:0 2px 10px rgba(0,0,0,0.2);font-size:13px;white-space:nowrap;';
        popupEl.innerHTML = '<b>London</b>';
        const popup = new ol.Overlay({ element: popupEl, positioning: 'bottom-center', offset: [0, -10] });
        popup.setPosition(ol.proj.fromLonLat([-0.09, 51.505]));
        map.addOverlay(popup);

        function flyTo(lat, lng, zoom, name) {
            view.animate({
                center: ol.proj.fromLonLat([lng, lat]),
                zoom: zoom,
                duration: 2000
            });
            setTimeout(() => {
                const pos = ol.proj.fromLonLat([lng, lat]);
                marker.setPosition(pos);
                popup.setPosition(pos);
                popupEl.innerHTML = `<b>${name}</b>`;
                document.getElementById('info').textContent = `Current: ${name} (${lat.toFixed(3)}, ${lng.toFixed(3)})`;
            }, 2100);
        }

        view.on('change:center', () => {
            const c = ol.proj.toLonLat(view.getCenter());
            document.getElementById('info').textContent = `Lat: ${c[1].toFixed(4)}, Lng: ${c[0].toFixed(4)}, Zoom: ${Math.round(view.getZoom())}`;
        });