const osm = new ol.layer.Tile({ source: new ol.source.OSM(), visible: true });
        const topo = new ol.layer.Tile({
            source: new ol.source.XYZ({ url: 'https://{a}.tile.opentopomap.org/{z}/{x}/{y}.png', attributions: '© OpenTopoMap' }),
            visible: false
        });
        const carto = new ol.layer.Tile({
            source: new ol.source.XYZ({ url: 'https://{a}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', attributions: '© CARTO' }),
            visible: false
        });

        const map = new ol.Map({
            target: 'map',
            layers: [osm, topo, carto],
            view: new ol.View({ center: ol.proj.fromLonLat([-0.09, 51.505]), zoom: 13 })
        });

        const layerSwitcher = document.createElement('div');
        layerSwitcher.style.cssText = 'position:absolute;top:10px;left:10px;background:white;padding:8px;border-radius:4px;box-shadow:0 2px 6px rgba(0,0,0,0.3);z-index:1000';
        [['OpenStreetMap', osm], ['Topographic', topo], ['Dark CARTO', carto]].forEach(([name, layer]) => {
            const btn = document.createElement('button');
            btn.textContent = name;
            btn.style.cssText = 'display:block;margin:4px 0;padding:6px 12px;cursor:pointer;border:1px solid #ccc;border-radius:3px;background:' + (layer.getVisible() ? '#e0e0e0' : '#fff');
            btn.onclick = () => { layer.setVisible(!layer.getVisible()); btn.style.background = layer.getVisible() ? '#e0e0e0' : '#fff'; };
            layerSwitcher.appendChild(btn);
        });
        document.getElementById('map').parentNode.appendChild(layerSwitcher);