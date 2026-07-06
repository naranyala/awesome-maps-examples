const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
            view: new ol.View({ center: ol.proj.fromLonLat([0, 0]), zoom: 2 })
        });
        const keys = { w: false, a: false, s: false, d: false, q: false, e: false };
        document.addEventListener('keydown', function(e) { if (keys.hasOwnProperty(e.key)) keys[e.key] = true; });
        document.addEventListener('keyup', function(e) { if (keys.hasOwnProperty(e.key)) keys[e.key] = false; });
        function animate() {
            const view = map.getView();
            let dx = 0, dy = 0;
            if (keys.a) dx -= 50; if (keys.d) dx += 50;
            if (keys.w) dy -= 50; if (keys.s) dy += 50;
            if (dx || dy) view.setCenter([view.getCenter()[0] + dx, view.getCenter()[1] + dy]);
            if (keys.q) view.setZoom(view.getZoom() + 0.1);
            if (keys.e) view.setZoom(view.getZoom() - 0.1);
            requestAnimationFrame(animate);
        }
        animate();