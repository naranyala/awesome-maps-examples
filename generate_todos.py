matrix = {
    '3d-building': {'leaf': False, 'map': True, 'ol': False, 'name': '3D Building'},
    'animate-line': {'leaf': True, 'map': True, 'ol': True, 'name': 'Animate Line'},
    'basic-map': {'leaf': True, 'map': True, 'ol': True, 'name': 'Basic Map'},
    'choropleth': {'leaf': True, 'map': True, 'ol': True, 'name': 'Choropleth Map'},
    'click-coordinates': {'leaf': True, 'map': True, 'ol': True, 'name': 'Click Coordinates'},
    'cluster-markers': {'leaf': True, 'map': True, 'ol': False, 'name': 'Marker Clustering'}, # Unifying marker-clustering & cluster-markers
    'context-menu': {'leaf': True, 'map': True, 'ol': True, 'name': 'Context Menu'},
    'custom-controls': {'leaf': True, 'map': True, 'ol': True, 'name': 'Custom Controls'},
    'custom-marker': {'leaf': True, 'map': True, 'ol': True, 'name': 'Custom Marker'},
    'drawing-tools': {'leaf': True, 'map': True, 'ol': True, 'name': 'Drawing Tools'}, # Unifying draw-geojson, draw-polygon, draw-features
    'external-layer-control': {'leaf': False, 'map': True, 'ol': False, 'name': 'External Layer Control'},
    'fly-to-animation': {'leaf': True, 'map': False, 'ol': False, 'name': 'Fly To Animation'},
    'fullscreen': {'leaf': True, 'map': True, 'ol': True, 'name': 'Fullscreen'},
    'geocoding': {'leaf': True, 'map': True, 'ol': False, 'name': 'Geocoding'}, # Unifying geocode-nominatim and geocoding
    'geofence': {'leaf': True, 'map': True, 'ol': True, 'name': 'Geofence'},
    'geojson-upload': {'leaf': True, 'map': True, 'ol': False, 'name': 'GeoJSON Upload'},
    'geolocation': {'leaf': True, 'map': True, 'ol': True, 'name': 'Geolocation'},
    'heatmap': {'leaf': True, 'map': True, 'ol': True, 'name': 'Heatmap'},
    'hover-effect': {'leaf': True, 'map': True, 'ol': False, 'name': 'Hover Effect'},
    'image-overlay': {'leaf': True, 'map': True, 'ol': True, 'name': 'Image Overlay'},
    'layer-toggle': {'leaf': True, 'map': False, 'ol': False, 'name': 'Layer Toggle'},
    'minimap': {'leaf': True, 'map': True, 'ol': True, 'name': 'Mini Map'},
    'mouse-follow': {'leaf': True, 'map': False, 'ol': False, 'name': 'Mouse Follow'},
    'polygon-extrusion': {'leaf': False, 'map': False, 'ol': True, 'name': 'Polygon Extrusion'},
    'popup-tooltip': {'leaf': True, 'map': True, 'ol': True, 'name': 'Popup & Tooltip'}, # Unifying popup-tooltip and overlay
    'realtime-data': {'leaf': True, 'map': True, 'ol': False, 'name': 'Realtime Data'},
    'satellite-map': {'leaf': True, 'map': True, 'ol': False, 'name': 'Satellite Map'},
    'scale-bar': {'leaf': True, 'map': True, 'ol': True, 'name': 'Scale Bar'}, # Unifying scale-control and scale-bar
    'store-locator': {'leaf': True, 'map': True, 'ol': True, 'name': 'Store Locator'},
    'sync-maps': {'leaf': True, 'map': True, 'ol': True, 'name': 'Sync Maps'},
    'sync-maps-comparison': {'leaf': True, 'map': True, 'ol': True, 'name': 'Sync Maps Comparison'},
    'time-slider': {'leaf': True, 'map': True, 'ol': False, 'name': 'Time Slider'},
    'turf-area-measurement': {'leaf': True, 'map': True, 'ol': True, 'name': 'Turf Area Measurement'},
    'turf-buffer': {'leaf': True, 'map': True, 'ol': True, 'name': 'Turf Buffer'},
    'turf-convex-hull': {'leaf': True, 'map': True, 'ol': True, 'name': 'Turf Convex Hull'},
    'turf-great-circle': {'leaf': True, 'map': True, 'ol': True, 'name': 'Turf Great Circle'},
    'turf-intersection': {'leaf': True, 'map': True, 'ol': True, 'name': 'Turf Intersection'},
    'turf-nearest-point': {'leaf': True, 'map': True, 'ol': True, 'name': 'Turf Nearest Point'},
    'turf-point-in-polygon': {'leaf': True, 'map': True, 'ol': True, 'name': 'Turf Point in Polygon'},
    'turf-voronoi': {'leaf': True, 'map': True, 'ol': True, 'name': 'Turf Voronoi'},
    'wasd-navigation': {'leaf': True, 'map': True, 'ol': True, 'name': 'WASD Navigation'},
    'weather': {'leaf': True, 'map': True, 'ol': True, 'name': 'Weather Mapping'},
}

todo_content = """# Awesome Maps Examples - Gap Analysis & TODOs

This document tracks inconsistencies across the three mapping libraries (Leaflet, MapLibre, OpenLayers) and lists the missing examples required to achieve full parity.

## 🛠️ Naming & Structure Refactoring
Currently, similar examples have different filenames across libraries. These should be unified:
- **Marker Clustering**: `leaflet-examples/marker-clustering.html` vs `maplibre-examples/cluster-markers.html` -> Standardize to `cluster-markers.html`
- **Drawing Tools**: `leaflet-examples/draw-geojson.html`, `maplibre-examples/draw-polygon.html`, `openlayers-examples/drawing-tools.html` -> Standardize to `drawing-tools.html`
- **Geocoding**: `leaflet-examples/geocoding.html` vs `maplibre-examples/geocode-nominatim.html` -> Standardize to `geocoding.html`
- **Scale Bar**: `leaflet-examples/scale-control.html` vs `openlayers-examples/scale-bar.html` -> Standardize to `scale-bar.html`
- **Popups**: `leaflet-examples/popup-tooltip.html` vs `openlayers-examples/overlay.html` -> Standardize to `popup-tooltip.html`

---

## 📌 Missing Leaflet Examples
To reach parity with MapLibre and OpenLayers, the following examples need to be built for Leaflet:
"""
for k, v in matrix.items():
    if not v['leaf']:
        todo_content += f"- [ ] **{v['name']}** (`{k}.html`)\n"

todo_content += """
---

## 📌 Missing MapLibre Examples
To reach parity with Leaflet and OpenLayers, the following examples need to be built for MapLibre:
"""
for k, v in matrix.items():
    if not v['map']:
        todo_content += f"- [ ] **{v['name']}** (`{k}.html`)\n"

todo_content += """
---

## 📌 Missing OpenLayers Examples
To reach parity with Leaflet and MapLibre, the following examples need to be built for OpenLayers:
"""
for k, v in matrix.items():
    if not v['ol']:
        todo_content += f"- [ ] **{v['name']}** (`{k}.html`)\n"


with open('TODOS.md', 'w', encoding='utf-8') as f:
    f.write(todo_content)

