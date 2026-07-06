const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [-0.09, 51.505], zoom: 11 });
        map.addControl(new maplibregl.NavigationControl());

        const pts = [];
        for (let i = 0; i < 500; i++) {
            pts.push({ type: 'Feature', properties: { id: i }, geometry: { type: 'Point', coordinates: [-0.09 + (Math.random()-0.5)*0.2, 51.505 + (Math.random()-0.5)*0.15] } });
        }

        const index = new Supercluster({ radius: 60, maxZoom: 17 });
        index.load(pts);

        function updateClusters() {
            const bbox = map.getBounds().toArray();
            const clusters = index.load(pts).getClusters(bbox.flat(), map.getZoom());
            if (map.getSource('points')) map.getSource('points').setData({ type: 'FeatureCollection', features: clusters });
        }

        map.on('load', () => {
            map.addSource('points', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
            map.addLayer({ id: 'clusters', type: 'circle', source: 'points', filter: ['has', 'point_count'], paint: { 'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 10, '#f1f075', 50, '#f28cb1'], 'circle-radius': ['step', ['get', 'point_count'], 15, 10, 20, 50, 25], 'circle-stroke-width': 2, 'circle-stroke-color': '#fff' } });
            map.addLayer({ id: 'cluster-count', type: 'symbol', source: 'points', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}', 'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 } });
            map.addLayer({ id: 'unclustered', type: 'circle', source: 'points', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': '#11b4da', 'circle-radius': 4, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' } });
            updateClusters();
        });

        map.on('moveend', updateClusters);
        map.on('click', 'clusters', (e) => {
            const id = e.features[0].properties.cluster_id;
            const center = index.getClusterExpansionZoom(id);
            map.easeTo({ center: index.getCluster(id).geometry.coordinates, zoom: center });
        });