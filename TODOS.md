# Awesome Maps Examples - Gap Analysis & TODOs

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
- [ ] **3D Building** (`3d-building.html`)
- [ ] **External Layer Control** (`external-layer-control.html`)
- [ ] **Polygon Extrusion** (`polygon-extrusion.html`)

---

## 📌 Missing MapLibre Examples
To reach parity with Leaflet and OpenLayers, the following examples need to be built for MapLibre:
- [ ] **Fly To Animation** (`fly-to-animation.html`)
- [ ] **Layer Toggle** (`layer-toggle.html`)
- [ ] **Mouse Follow** (`mouse-follow.html`)
- [ ] **Polygon Extrusion** (`polygon-extrusion.html`)

---

## 📌 Missing OpenLayers Examples
To reach parity with Leaflet and MapLibre, the following examples need to be built for OpenLayers:
- [ ] **3D Building** (`3d-building.html`)
- [ ] **Marker Clustering** (`cluster-markers.html`)
- [ ] **External Layer Control** (`external-layer-control.html`)
- [ ] **Fly To Animation** (`fly-to-animation.html`)
- [ ] **Geocoding** (`geocoding.html`)
- [ ] **GeoJSON Upload** (`geojson-upload.html`)
- [ ] **Hover Effect** (`hover-effect.html`)
- [ ] **Layer Toggle** (`layer-toggle.html`)
- [ ] **Mouse Follow** (`mouse-follow.html`)
- [ ] **Realtime Data** (`realtime-data.html`)
- [ ] **Satellite Map** (`satellite-map.html`)
- [ ] **Time Slider** (`time-slider.html`)
