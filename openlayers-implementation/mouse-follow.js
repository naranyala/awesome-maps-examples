const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
            view: new ol.View({ center: ol.proj.fromLonLat([-0.09, 51.505]), zoom: 13 })
        });

        const followerEl = document.createElement('div');
        followerEl.innerHTML = '<div style="background:red;width:20px;height:20px;border-radius:50%;border:2px solid white;box-shadow:0 0 5px rgba(0,0,0,0.5)"></div>';

        const follower = new ol.Overlay({
            element: followerEl,
            positioning: 'center-center',
            stopEvent: false
        });
        follower.setPosition(ol.proj.fromLonLat([-0.09, 51.505]));
        map.addOverlay(follower);

        map.on('pointermove', (e) => {
            requestAnimationFrame(() => {
                follower.setPosition(e.coordinate);
            });
        });