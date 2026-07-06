const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [0, 0], zoom: 2 });
        map.addControl(new maplibregl.NavigationControl());
        const keys = { w: false, a: false, s: false, d: false, q: false, e: false };
        document.addEventListener('keydown', function(e) { if (keys.hasOwnProperty(e.key)) keys[e.key] = true; });
        document.addEventListener('keyup', function(e) { if (keys.hasOwnProperty(e.key)) keys[e.key] = false; });
        function animate() {
            let dx = 0, dy = 0;
            if (keys.a) dx -= 0.02; if (keys.d) dx += 0.02;
            if (keys.w) dy += 0.02; if (keys.s) dy -= 0.02;
            if (dx || dy) map.panBy([dx * 500, dy * 500], { duration: 0 });
            if (keys.q) map.zoomTo(map.getZoom() + 0.05, { duration: 0 });
            if (keys.e) map.zoomTo(map.getZoom() - 0.05, { duration: 0 });
            requestAnimationFrame(animate);
        }
        animate();