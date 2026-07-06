const extent = ol.proj.transformExtent([-10, 48, 5, 56], 'EPSG:4326', 'EPSG:3857');
        const overlay = new ol.layer.Image({
            source: new ol.source.ImageStatic({ url: 'https://via.placeholder.com/1024x768.png?text=Image+Overlay', projection: 'EPSG:3857', imageExtent: extent }),
            opacity: 0.7
        });
        const map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), overlay],
            view: new ol.View({ center: ol.proj.fromLonLat([-2, 52]), zoom: 6 }),
            loadTilesWhileAnimating: false,
            loadTilesWhileInteracting: false
        });