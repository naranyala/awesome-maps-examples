const center = [-0.09, 51.505];
        const zoom = 13;

        const map1 = new maplibregl.Map({ container: 'map1', style: 'https://demotiles.maplibre.org/style.json', center, zoom, attributionControl: false });
        const map2 = new maplibregl.Map({ container: 'map2', style: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', center, zoom, attributionControl: false });

        function sync(src, tgt) {
            tgt.setCenter(src.getCenter());
            tgt.setZoom(src.getZoom());
            tgt.setPitch(src.getPitch());
            tgt.setBearing(src.getBearing());
        }

        map1.on('move', () => sync(map1, map2));
        map2.on('move', () => sync(map2, map1));