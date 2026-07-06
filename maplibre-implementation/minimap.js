const london = [-0.1275, 51.5074];
        const mainMap = new maplibregl.Map({ container: 'mainMap', style: 'https://demotiles.maplibre.org/style.json', center: london, zoom: 12 });
        mainMap.addControl(new maplibregl.NavigationControl());

        const miniMap = new maplibregl.Map({ container: 'miniMap', style: 'https://demotiles.maplibre.org/style.json', center: london, zoom: 8, attributionControl: false, dragPan: false, scrollZoom: false, doubleClickZoom: false, touchZoomRotate: false, keyboard: false });

        mainMap.on('move', function() {
            miniMap.setCenter(mainMap.getCenter());
            miniMap.setZoom(mainMap.getZoom() - 4);
        });