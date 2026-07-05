# Awesome Maps Examples [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated collection of interactive map examples built with [Leaflet.js](https://leafletjs.com/), [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/), and [Azure Maps](https://azuremaps.com/).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## Table of Contents

- [Leaflet.js (82 examples)](#leafletjs)
  - [Getting Started](#leaflet-getting-started) | [Markers](#leaflet-markers) | [Popups](#leaflet-popups) | [Layers & Tiles](#leaflet-layers--tiles)
  - [Drawing & Editing](#leaflet-drawing--editing) | [GeoJSON](#leaflet-geojson) | [Controls & UI](#leaflet-controls--ui) | [Search & Geocoding](#leaflet-search--geocoding)
  - [Animation](#leaflet-animation) | [Geospatial Analysis](#leaflet-geospatial-analysis) | [Performance](#leaflet-performance)
- [MapLibre GL JS (100+ examples)](#maplibre-gl-js)
  - [Getting Started](#maplibre-getting-started) | [Markers & Icons](#maplibre-markers--icons) | [Popups](#maplibre-popups) | [Layers & Sources](#maplibre-layers--sources)
  - [3D & Terrain](#maplibre-3d--terrain) | [Globe](#maplibre-globe) | [GeoJSON & Data](#maplibre-geojson--data) | [Drawing](#maplibre-drawing)
  - [Filtering & Styling](#maplibre-filtering--styling) | [Controls & UI](#maplibre-controls--ui) | [Search & Geocoding](#maplibre-search) | [Animation](#maplibre-animation) | [Camera & Navigation](#maplibre-camera--navigation)
- [Azure Maps (284 examples)](#azure-maps)
  - [Getting Started](#azure-maps-getting-started) | [3D & WebGL](#azure-maps-3d--webgl) | [Animations](#azure-maps-animations) | [Markers](#azure-maps-markers)
  - [Layers](#azure-maps-layers) | [Controls & UI](#azure-maps-controls--ui) | [Drawing & Editing](#azure-maps-drawing--editing) | [Search & Routing](#azure-maps-search--routing)
  - [Geospatial Files](#azure-maps-geospatial-files) | [Spatial Analysis](#azure-maps-spatial-analysis) | [Popups](#azure-maps-popups) | [Data Visualization](#azure-maps-data-visualization)
  - [Traffic & Weather](#azure-maps-traffic--weather) | [Device Sensors](#azure-maps-device-sensors)
- [Plugins Reference](#plugins-reference)
- [Related Projects](#related-projects)
- [Contributing](#contributing)

---

## Leaflet.js

> Source: [tomickigrzegorz/leaflet-examples](https://tomickigrzegorz.github.io/leaflet-examples/) (82 examples)

### Leaflet: Getting Started

| Example | Description |
|---------|-------------|
| [Simple map](https://tomickigrzegorz.github.io/leaflet-examples/#01.simple-map) | Minimal map setup |
| [Changing locate zoom control](https://tomickigrzegorz.github.io/leaflet-examples/#02.changing-locate-zoom-control) | Custom zoom control positioning |
| [Coordinates after clicking on the map](https://tomickigrzegorz.github.io/leaflet-examples/#05.coordinates-after-clicking-on-the-map) | Capture click coordinates |
| [Coordinates of the visible map](https://tomickigrzegorz.github.io/leaflet-examples/#06.coordinates-of-the-visible-map) | Get current viewport bounds |
| [Coordinates of the center of the visible map](https://tomickigrzegorz.github.io/leaflet-examples/#39.coordinates-of-the-center-of-the-visible-map) | Track map center in real-time |
| [MaxBound map restricts the view](https://tomickigrzegorz.github.io/leaflet-examples/#20.maxBound-map-restricts-the-view) | Restrict panning to a region |
| [FitBounds with padding](https://tomickigrzegorz.github.io/leaflet-examples/#25.fitBounds-with-padding) | Responsive bounds fitting |
| [Scale](https://tomickigrzegorz.github.io/leaflet-examples/#42.scale) | Map scale bar |
| [Map rotation](https://tomickigrzegorz.github.io/leaflet-examples/#82.map-rotation) | Rotate with right-click drag or pinch |
| [Linked view](https://tomickigrzegorz.github.io/leaflet-examples/#29.linked-view) | Synchronized map views |

### Leaflet: Markers

| Example | Description |
|---------|-------------|
| [Adding one marker](https://tomickigrzegorz.github.io/leaflet-examples/#03.adding-one-marker) | Place a single marker |
| [Many markers](https://tomickigrzegorz.github.io/leaflet-examples/#04.many-markers) | Render multiple markers |
| [Controlling different groups of markers](https://tomickigrzegorz.github.io/leaflet-examples/#08.controlling-different-groups-of-markers) | Toggle marker groups |
| [SVG markers with legends](https://tomickigrzegorz.github.io/leaflet-examples/#13.svg-markers-width-legends) | Custom SVG marker icons |
| [Draggable markers](https://tomickigrzegorz.github.io/leaflet-examples/#14.dragable-markers) | Drag markers to reposition |
| [Add, move and delete marker](https://tomickigrzegorz.github.io/leaflet-examples/#18.add-move-and-delete-marker) | Full marker CRUD operations |
| [Center map when click marker](https://tomickigrzegorz.github.io/leaflet-examples/#22.center-map-when-click-marker) | Pan to marker on click |
| [Awesome markers plugin](https://tomickigrzegorz.github.io/leaflet-examples/#31.Leaflet.awesome-markers) | Font Awesome icon markers |
| [Image icons prev/next](https://tomickigrzegorz.github.io/leaflet-examples/#32.image-icons-prev-next) | Navigate between image markers |
| [Marker draggable on a click](https://tomickigrzegorz.github.io/leaflet-examples/#35.marker-draggable-on-a-click) | Toggle drag on click |
| [Random marker in map bounds](https://tomickigrzegorz.github.io/leaflet-examples/#47.random-marker-in-map-bounds) | Generate markers randomly |
| [Bind more popups to the same marker](https://tomickigrzegorz.github.io/leaflet-examples/#61.bind-more-popups-to-the-same-marker) | Multiple popups per marker |
| [Count markers](https://tomickigrzegorz.github.io/leaflet-examples/#62.count-markers) | Display marker count |
| [Marker slide to](https://tomickigrzegorz.github.io/leaflet-examples/#65.marker-slide-to) | Smooth marker animation |
| [Add data attribute to marker](https://tomickigrzegorz.github.io/leaflet-examples/#67.add-data-attribute-to-marker) | Custom data-* attributes |
| [Text below a marker](https://tomickigrzegorz.github.io/leaflet-examples/#71.text-below-a-marker) | Label markers with text |
| [Move marker](https://tomickigrzegorz.github.io/leaflet-examples/#76.move-marker) | Move with buttons or keyboard |
| [Marker tracking with direction indicator](https://tomickigrzegorz.github.io/leaflet-examples/#81.marker-tracking-with-direction-indicator) | Off-screen marker indicator |

### Leaflet: Popups

| Example | Description |
|---------|-------------|
| [Custom marker and popup](https://tomickigrzegorz.github.io/leaflet-examples/#23.custom-marker-and-popup) | Styled popups with custom content |
| [Sidebar replacing popup](https://tomickigrzegorz.github.io/leaflet-examples/#59.sidebar-replacing-popup) | Sidebar as popup alternative |
| [Tabs in popup](https://tomickigrzegorz.github.io/leaflet-examples/#51.tabs-in-popup) | Tabbed popup content |
| [Popup in a fixed position](https://tomickigrzegorz.github.io/leaflet-examples/#68.popup-in-a-fixed-position) | Fixed-position popup overlay |

### Leaflet: Layers & Tiles

| Example | Description |
|---------|-------------|
| [Image instead of map](https://tomickigrzegorz.github.io/leaflet-examples/#07.image-instead-of-map) | Use image overlay as base layer |
| [TileLayer](https://tomickigrzegorz.github.io/leaflet-examples/#17.TileLayer) | Custom tile layer configuration |
| [Multiple tile layers](https://tomickigrzegorz.github.io/leaflet-examples/#34.multiple-tile-layers) | Switch between tile providers |
| [Image on map](https://tomickigrzegorz.github.io/leaflet-examples/#43.image-on-map) | Overlay images on the map |
| [Tiles gray](https://tomickigrzegorz.github.io/leaflet-examples/#48.tiles-gray) | Grayscale tile style |
| [Store plan - full project](https://tomickigrzegorz.github.io/leaflet-examples/#52.full-project) | OSM + image overlay combination |
| [Control layers outside the map](https://tomickigrzegorz.github.io/leaflet-examples/#58.control-layers-outside-the-map) | External layer controls |
| [Add rectangle over click tiles](https://tomickigrzegorz.github.io/leaflet-examples/#72.add-rectangle-over-click-tiles) | Draw on tile click |
| [Change tile style when click](https://tomickigrzegorz.github.io/leaflet-examples/#73.change-tile-style-when-click) | Dynamic tile style switching |

### Leaflet: Drawing & Editing

| Example | Description |
|---------|-------------|
| [Controlling polygons](https://tomickigrzegorz.github.io/leaflet-examples/#12.controling-polygons) | Create and manage polygons |
| [Polyline](https://tomickigrzegorz.github.io/leaflet-examples/#24.polyline) | Draw polylines |
| [Create and save GeoJSON](https://tomickigrzegorz.github.io/leaflet-examples/#53.create-and-save-geojson) | Draw and export GeoJSON |
| [Leaflet-Geoman](https://tomickigrzegorz.github.io/leaflet-examples/#66.leaflet-geoman) | Full geometry editing toolkit |
| [Polygon with gradient](https://tomickigrzegorz.github.io/leaflet-examples/#70.polygon-with-gradien) | Gradient-filled polygons |
| [Arrow marked lines](https://tomickigrzegorz.github.io/leaflet-examples/#77.arrow-marked-lines) | Directional polyline arrows |
| [Calculate area](https://tomickigrzegorz.github.io/leaflet-examples/#78.calculate-area) | Area calculation on polygon |
| [Draw dynamic circles between two points](https://tomickigrzegorz.github.io/leaflet-examples/#79.draw-dinamic-circles-between-two-points) | Dynamic circle markers |

### Leaflet: GeoJSON

| Example | Description |
|---------|-------------|
| [GeoJSON simple](https://tomickigrzegorz.github.io/leaflet-examples/#15.geoJson-simple) | Basic GeoJSON rendering |
| [GeoJSON extended action](https://tomickigrzegorz.github.io/leaflet-examples/#16.geoJson-extended-action) | Interactive GeoJSON features |
| [Autocomplete with GeoJSON](https://tomickigrzegorz.github.io/leaflet-examples/#64.autocomplete-with-geojson) | Search within GeoJSON data |

### Leaflet: Controls & UI

| Example | Description |
|---------|-------------|
| [Controlling the map from outside](https://tomickigrzegorz.github.io/leaflet-examples/#11.controlling-the-map-from-outside-the-map) | External map controls |
| [Custom button](https://tomickigrzegorz.github.io/leaflet-examples/#19.custom-button) | Add custom map buttons |
| [Fullscreen](https://tomickigrzegorz.github.io/leaflet-examples/#27.fullscreen) | Fullscreen toggle |
| [MiniMap plugin](https://tomickigrzegorz.github.io/leaflet-examples/#30.mini-map) | Overview minimap |
| [Back to home button](https://tomickigrzegorz.github.io/leaflet-examples/#41.back-to-home-button) | Reset view button |
| [Location button](https://tomickigrzegorz.github.io/leaflet-examples/#49.location-button) | Geolocation button |
| [Autocomplete on map - button](https://tomickigrzegorz.github.io/leaflet-examples/#50.autocomplete-on-map-button) | Search with autocomplete |
| [Contextmenu](https://tomickigrzegorz.github.io/leaflet-examples/#54.contextmenu) | Right-click context menu |
| [Sidebar](https://tomickigrzegorz.github.io/leaflet-examples/#56.sidebar) | Sidebar component |
| [Data on sidebar](https://tomickigrzegorz.github.io/leaflet-examples/#44.data-on-sidebar) | Display data in sidebar |
| [Dynamic data on sidebar](https://tomickigrzegorz.github.io/leaflet-examples/#75.dynamic-data-on-sidebar) | Live-updating sidebar data |
| [Create additional control placeholders](https://tomickigrzegorz.github.io/leaflet-examples/#57.create-additional-control-placeholders) | Custom control positions |
| [Open popup markercluster from outside](https://tomickigrzegorz.github.io/leaflet-examples/#74.open-popup-markercluster-from-outside) | Trigger cluster popups externally |
| [Follow mouse](https://tomickigrzegorz.github.io/leaflet-examples/#55.follow-mouse) | Tooltip follows cursor |

### Leaflet: Search & Geocoding

| Example | Description |
|---------|-------------|
| [Geocoding addresses (search engine outside map)](https://tomickigrzegorz.github.io/leaflet-examples/#21.geocoding-addresses-search-engine-outside-the-map) | Autocomplete geocoding |
| [Distance between cities](https://tomickigrzegorz.github.io/leaflet-examples/#40.distance-between-cities-on-map) | Distance measurement with autocomplete |
| [Multi layer search](https://tomickigrzegorz.github.io/leaflet-examples/#45.multi-layer-search) | Search across multiple layers |
| [Leaflet Routing Machine](https://tomickigrzegorz.github.io/leaflet-examples/#63.leaflet-routing-machine) | Turn-by-turn routing with OSRM |

### Leaflet: Animation

| Example | Description |
|---------|-------------|
| [Story map with IntersectionObserver](https://tomickigrzegorz.github.io/leaflet-examples/#36.story-maps-IntersectionObserver) | Scroll-driven story map |
| [Marker slide to](https://tomickigrzegorz.github.io/leaflet-examples/#65.marker-slide-to) | Smooth marker transitions |
| [Simple jump marker](https://tomickigrzegorz.github.io/leaflet-examples/#69.simple-jump-marker) | CSS-animated bouncing markers |
| [Marker tracking with direction indicator](https://tomickigrzegorz.github.io/leaflet-examples/#81.marker-tracking-with-direction-indicator) | Real-time marker tracking |

### Leaflet: Geospatial Analysis

| Example | Description |
|---------|-------------|
| [Enlarge a polygon box by 5%](https://tomickigrzegorz.github.io/leaflet-examples/#37.enlarge-a-polygon-box-by-5-percent) | Buffer polygon with Turf.js |
| [Part of the common](https://tomickigrzegorz.github.io/leaflet-examples/#38.part-of-the-common) | Polygon intersection with Turf.js |
| [Great circle](https://tomickigrzegorz.github.io/leaflet-examples/#60.great-circle) | Great circle arcs with Turf.js |

### Leaflet: Performance

| Example | Description |
|---------|-------------|
| [Markers 60K](https://tomickigrzegorz.github.io/leaflet-examples/#26.markers-60K) | 60K markers with canvas + clustering |
| [Checking if the marker is in viewport](https://tomickigrzegorz.github.io/leaflet-examples/#46.checking-if-the-marker-is-in-viewport) | Viewport-based filtering |
| [Many markers (100K) with Web Worker](https://tomickigrzegorz.github.io/leaflet-examples/#80.many-markers-with-web-worker-1000000) | Web Worker + IndexedDB + RBush |

---

## MapLibre GL JS

> Source: [MapLibre GL JS examples](https://maplibre.org/maplibre-gl-js/docs/examples/) (100+ examples)

### MapLibre: Getting Started

| Example | Description |
|---------|-------------|
| [Display a map](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-map/) | Basic map initialization |
| [Display a non-interactive map](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-non-interactive-map/) | Static, non-interactive map |
| [Display a satellite map](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-satellite-map/) | Satellite imagery basemap |
| [Display a hybrid satellite map with terrain elevation](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-hybrid-satellite-map-with-terrain-elevation/) | Satellite + terrain |
| [Display map navigation controls](https://maplibre.org/maplibre-gl-js/docs/examples/display-map-navigation-controls/) | Standard zoom/rotate controls |
| [Check if WebGL is supported](https://maplibre.org/maplibre-gl-js/docs/examples/check-if-webgl-is-supported/) | Feature detection |
| [Cooperative gestures](https://maplibre.org/maplibre-gl-js/docs/examples/cooperative-gestures/) | Multi-finger scroll zoom |
| [Restrict map panning to an area](https://maplibre.org/maplibre-gl-js/docs/examples/restrict-map-panning-to-an-area/) | Bounds constraint |
| [Disable map rotation](https://maplibre.org/maplibre-gl-js/docs/examples/disable-map-rotation/) | Lock bearing |
| [Disable scroll zoom](https://maplibre.org/maplibre-gl-js/docs/examples/disable-scroll-zoom/) | Disable wheel zoom |
| [Fit a map to a bounding box](https://maplibre.org/maplibre-gl-js/docs/examples/fit-a-map-to-a-bounding-box/) | Fit to bounds |
| [Set pitch and bearing](https://maplibre.org/maplibre-gl-js/docs/examples/set-pitch-and-bearing/) | Tilt and rotate |
| [Hash routing](https://maplibre.org/maplibre-gl-js/docs/examples/hash-routing/) | URL hash sync |
| [Locale switching](https://maplibre.org/maplibre-gl-js/docs/examples/locale-switching/) | Multi-language labels |
| [Render world copies](https://maplibre.org/maplibre-gl-js/docs/examples/render-world-copies/) | Infinite horizontal wrap |
| [View a fullscreen map](https://maplibre.org/maplibre-gl-js/docs/examples/view-a-fullscreen-map/) | Fullscreen toggle |
| [Display Map Performance Metrics](https://maplibre.org/maplibre-gl-js/docs/examples/display-performance-metrics/) | FPS and tile stats |
| [Display a map with MLT](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-map-with-mlt/) | MapLibre Tiles format |

### MapLibre: Markers & Icons

| Example | Description |
|---------|-------------|
| [Add a default marker](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-default-marker/) | Basic marker |
| [Add custom icons with Markers](https://maplibre.org/maplibre-gl-js/docs/examples/add-custom-icons-with-markers/) | Custom marker icons |
| [Add an icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-an-icon-to-the-map/) | External URL icon |
| [Add a generated icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-generated-icon-to-the-map/) | Runtime-generated icon |
| [Add an animated icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-an-animated-icon-to-the-map/) | Canvas API animated icon |
| [Add a stretchable image to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-stretchable-image-to-the-map/) | 9-slice stretchable image |
| [Display a remote SVG symbol](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-remote-svg-symbol/) | SVG as symbol layer |
| [Create a draggable Marker](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-marker/) | Draggable marker |
| [Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/) | Draggable GeoJSON point |
| [Generate and add a missing icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/generate-and-add-a-missing-icon-to-the-map/) | Dynamic icon generation |
| [Create and style clusters](https://maplibre.org/maplibre-gl-js/docs/examples/create-and-style-clusters/) | Marker clustering |

### MapLibre: Popups

| Example | Description |
|---------|-------------|
| [Display a popup](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup/) | Basic popup |
| [Display a popup on click](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-click/) | Click-triggered popup |
| [Display a popup on hover](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover/) | Hover-triggered popup |
| [Attach a popup to a marker instance](https://maplibre.org/maplibre-gl-js/docs/examples/attach-a-popup-to-a-marker-instance/) | Popup bound to marker |
| [Display HTML clusters with custom properties](https://maplibre.org/maplibre-gl-js/docs/examples/display-html-clusters-with-custom-properties/) | Custom cluster popups |
| [Show polygon information on click](https://maplibre.org/maplibre-gl-js/docs/examples/show-polygon-information-on-click/) | Feature info popup |

### MapLibre: Layers & Sources

| Example | Description |
|---------|-------------|
| [Add a raster tile source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-raster-tile-source/) | Third-party raster tiles |
| [Add a vector tile source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-vector-tile-source/) | Vector tile source |
| [Add a WMS source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-wms-source/) | Web Map Service |
| [Add a COG raster source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-cog-raster-source/) | Cloud Optimized GeoTIFF |
| [Add a canvas source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-canvas-source/) | HTML canvas as source |
| [Add a video](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-video/) | Video overlay on satellite |
| [Add a GeoJSON line](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-geojson-line/) | GeoJSON LineString |
| [Add a GeoJSON polygon](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-geojson-polygon/) | GeoJSON polygon fill |
| [Add multiple geometries from one GeoJSON source](https://maplibre.org/maplibre-gl-js/docs/examples/add-multiple-geometries-from-one-geojson-source/) | Multi-geometry source |
| [Add a new layer below labels](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-new-layer-below-labels/) | Layer ordering |
| [Add a hillshade layer](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-hillshade-layer/) | Hillshade from DEM |
| [Add a multidirectional hillshade layer](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-multidirectional-hillshade-layer/) | Multi-light hillshade |
| [Add a color relief layer](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-color-relief-layer/) | Color-coded elevation |
| [Add Contour Lines](https://maplibre.org/maplibre-gl-js/docs/examples/add-contour-lines/) | Contour lines from raster-dem |
| [Add a pattern to a polygon](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-pattern-to-a-polygon/) | Repeating fill pattern |
| [Add a custom style layer](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-custom-style-layer/) | Custom WebGL rendering |
| [Add live realtime data](https://maplibre.org/maplibre-gl-js/docs/examples/add-live-realtime-data/) | Realtime GeoJSON streams |
| [PMTiles source and protocol](https://maplibre.org/maplibre-gl-js/docs/examples/pmtiles-source-and-protocol/) | PMTiles single-file archives |
| [Style lines with a data-driven property](https://maplibre.org/maplibre-gl-js/docs/examples/style-lines-with-a-data-driven-property/) | Data-driven line styling |
| [Display line that crosses 180th meridian](https://maplibre.org/maplibre-gl-js/docs/examples/display-line-that-crosses-180th-meridian/) | Antimeridian handling |

### MapLibre: 3D & Terrain

| Example | Description |
|---------|-------------|
| [3D Terrain](https://maplibre.org/maplibre-gl-js/docs/examples/3d-terrain/) | 3D terrain with raster-dem |
| [Sky, Fog, Terrain](https://maplibre.org/maplibre-gl-js/docs/examples/sky-fog-terrain/) | Atmosphere effects |
| [Display buildings in 3D](https://maplibre.org/maplibre-gl-js/docs/examples/display-buildings-in-3d/) | Fill-extrusion buildings |
| [Extrude polygons for 3D indoor mapping](https://maplibre.org/maplibre-gl-js/docs/examples/extrude-polygons-for-3d-indoor-mapping/) | Indoor 3D floor plans |
| [Create a heatmap layer](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-heatmap-layer/) | Heatmap visualization |
| [Set center point above ground](https://maplibre.org/maplibre-gl-js/docs/examples/set-center-point-above-ground/) | Elevated camera focus |
| [Change building color based on zoom level](https://maplibre.org/maplibre-gl-js/docs/examples/change-building-color-based-on-zoom-level/) | Zoom-driven styling |

### MapLibre: Globe

| Example | Description |
|---------|-------------|
| [Display a globe with a vector map](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-globe-with-a-vector-map/) | Globe projection |
| [Display a globe with an atmosphere](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-globe-with-an-atmosphere/) | Globe with atmosphere |
| [Display a globe with a fill extrusion layer](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-globe-with-a-fill-extrusion-layer/) | 3D buildings on globe |
| [Create a Heatmap layer on a globe with terrain elevation](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-heatmap-layer-on-a-globe-with-terrain-elevation/) | Heatmap + terrain |
| [Add a simple custom layer on a globe](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-simple-custom-layer-on-a-globe/) | WebGL on globe |
| [Add a custom layer with tiles to a globe](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-custom-layer-with-tiles-to-a-globe/) | Custom tiles on globe |
| [Zoom and planet size relation on globe](https://maplibre.org/maplibre-gl-js/docs/examples/zoom-and-planet-size-relation-on-globe/) | Globe zoom behavior |

### MapLibre: GeoJSON & Data

| Example | Description |
|---------|-------------|
| [View local GeoJSON](https://maplibre.org/maplibre-gl-js/docs/examples/view-local-geojson/) | Load local GeoJSON file |
| [View local GeoJSON (experimental)](https://maplibre.org/maplibre-gl-js/docs/examples/view-local-geojson-experimental/) | Experimental local file |
| [Update GeoJSON polygons](https://maplibre.org/maplibre-gl-js/docs/examples/update-geojson-polygons/) | Dynamic polygon updates |
| [Update a feature in realtime](https://maplibre.org/maplibre-gl-js/docs/examples/update-a-feature-in-realtime/) | Realtime feature updates |
| [Visualize population density](https://maplibre.org/maplibre-gl-js/docs/examples/visualize-population-density/) | Choropleth visualization |
| [Create deck.gl layer using REST API](https://maplibre.org/maplibre-gl-js/docs/examples/create-deckgl-layer-using-rest-api/) | deck.gl integration |
| [Toggle deck.gl layer](https://maplibre.org/maplibre-gl-js/docs/examples/toggle-deckgl-layer/) | deck.gl layer toggle |

### MapLibre: Drawing

| Example | Description |
|---------|-------------|
| [Draw a Circle](https://maplibre.org/maplibre-gl-js/docs/examples/draw-a-circle/) | Circle drawing |
| [Draw GeoJSON points](https://maplibre.org/maplibre-gl-js/docs/examples/draw-geojson-points/) | Point drawing |
| [Draw polygon with mapbox-gl-draw](https://maplibre.org/maplibre-gl-js/docs/examples/draw-polygon-with-mapbox-gl-draw/) | Polygon drawing with draw plugin |
| [Draw geometries with terra-draw](https://maplibre.org/maplibre-gl-js/docs/examples/draw-geometries-with-terra-draw/) | Geometry drawing with terra-draw |
| [Measure distances](https://maplibre.org/maplibre-gl-js/docs/examples/measure-distances/) | Distance measurement |

### MapLibre: Filtering & Styling

| Example | Description |
|---------|-------------|
| [Filter symbols by text input](https://maplibre.org/maplibre-gl-js/docs/examples/filter-symbols-by-text-input/) | Text-based filtering |
| [Filter symbols by toggling a list](https://maplibre.org/maplibre-gl-js/docs/examples/filter-symbols-by-toggling-a-list/) | List-based filtering |
| [Filter within a Layer](https://maplibre.org/maplibre-gl-js/docs/examples/filter-within-a-layer/) | Layer-based filtering |
| [Filter layer symbols using global state](https://maplibre.org/maplibre-gl-js/docs/examples/filter-layer-symbols-using-global-state/) | Global state filtering |
| [Change a layer's color with buttons](https://maplibre.org/maplibre-gl-js/docs/examples/change-a-layers-color-with-buttons/) | Button-driven color change |
| [Change a map's language](https://maplibre.org/maplibre-gl-js/docs/examples/change-a-maps-language/) | Dynamic language switch |
| [Change the case of labels](https://maplibre.org/maplibre-gl-js/docs/examples/change-the-case-of-labels/) | Label case transformation |
| [Display and style rich text labels](https://maplibre.org/maplibre-gl-js/docs/examples/display-and-style-rich-text-labels/) | Rich text formatting |
| [Create a hover effect](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect/) | Hover state styling |
| [Variable label placement](https://maplibre.org/maplibre-gl-js/docs/examples/variable-label-placement/) | Smart label positioning |
| [Variable label placement with offset](https://maplibre.org/maplibre-gl-js/docs/examples/variable-label-placement-with-offset/) | Offset label placement |
| [Create a gradient line using an expression](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-gradient-line-using-an-expression/) | Gradient line styling |
| [Create a gradient line with dasharray using an expression](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-gradient-dashed-line-using-an-expression/) | Gradient dashed line |

### MapLibre: Controls & UI

| Example | Description |
|---------|-------------|
| [Change the default position for attribution](https://maplibre.org/maplibre-gl-js/docs/examples/change-the-default-position-for-attribution/) | Attribution positioning |
| [Toggle interactions](https://maplibre.org/maplibre-gl-js/docs/examples/toggle-interactions/) | Enable/disable controls |
| [Customize the map transform constrain](https://maplibre.org/maplibre-gl-js/docs/examples/customize-the-map-transform-constrain/) | Custom transform constraints |
| [Navigate the map with game-like controls](https://maplibre.org/maplibre-gl-js/docs/examples/navigate-the-map-with-game-like-controls/) | WASD navigation |
| [Level of Detail Control](https://maplibre.org/maplibre-gl-js/docs/examples/level-of-detail-control/) | LOD management |
| [Select features with a boxZoomEnd callback](https://maplibre.org/maplibre-gl-js/docs/examples/select-features-with-box-zoom-end-callback/) | Box zoom selection |
| [Use a fallback image](https://maplibre.org/maplibre-gl-js/docs/examples/use-a-fallback-image/) | Error handling for tiles |

### MapLibre: Search & Geocoding

| Example | Description |
|---------|-------------|
| [Geocode with Nominatim](https://maplibre.org/maplibre-gl-js/docs/examples/geocode-with-nominatim/) | OpenStreetMap geocoding |
| [Get coordinates of the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-coordinates-of-the-mouse-pointer/) | Mouse coordinate tracking |
| [Get features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-features-under-the-mouse-pointer/) | Feature query on hover |
| [Center the map on a clicked symbol](https://maplibre.org/maplibre-gl-js/docs/examples/center-the-map-on-a-clicked-symbol/) | Click-to-center |

### MapLibre: Animation

| Example | Description |
|---------|-------------|
| [Animate a line](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-line/) | Line drawing animation |
| [Animate a marker](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-marker/) | Marker position animation |
| [Animate a point](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-point/) | Point animation |
| [Animate a point along a route](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-point-along-a-route/) | Turf.js route animation |
| [Animate a series of images](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-series-of-images/) | Image sequence animation |
| [Animate map camera around a point](https://maplibre.org/maplibre-gl-js/docs/examples/animate-map-camera-around-a-point/) | Orbiting camera |
| [Animate symbol to follow the mouse](https://maplibre.org/maplibre-gl-js/docs/examples/animate-symbol-to-follow-the-mouse/) | Mouse-following symbol |
| [Create a time slider](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-time-slider/) | Temporal data slider |
| [Add support for right-to-left scripts](https://maplibre.org/maplibre-gl-js/docs/examples/add-support-for-right-to-left-scripts/) | RTL text rendering |

### MapLibre: Camera & Navigation

| Example | Description |
|---------|-------------|
| [Fly to a location](https://maplibre.org/maplibre-gl-js/docs/examples/fly-to-a-location/) | Animated fly-to |
| [Slowly fly to a location](https://maplibre.org/maplibre-gl-js/docs/examples/slowly-fly-to-a-location/) | Slow fly-to |
| [Fly to a location based on scroll position](https://maplibre.org/maplibre-gl-js/docs/examples/fly-to-a-location-based-on-scroll-position/) | Scroll-driven fly-to |
| [Jump to a series of locations](https://maplibre.org/maplibre-gl-js/docs/examples/jump-to-a-series-of-location/) | Sequential location jumps |
| [Customize camera animations](https://maplibre.org/maplibre-gl-js/docs/examples/customize-camera-animations/) | Custom easing curves |
| [Offset the vanishing point using padding](https://maplibre.org/maplibre-gl-js/docs/examples/offset-the-vanishing-point-using-padding/) | Camera offset |
| [Fit to the bounds of a LineString](https://maplibre.org/maplibre-gl-js/docs/examples/fit-to-the-bounds-of-a-linestring/) | Fit to line geometry |
| [Locate the user](https://maplibre.org/maplibre-gl-js/docs/examples/locate-the-user/) | Geolocation |
| [Sync movement of multiple maps](https://maplibre.org/maplibre-gl-js/docs/examples/sync-movement-of-multiple-maps/) | Multi-map sync |
| [Use addProtocol to Transform Feature Properties](https://maplibre.org/maplibre-gl-js/docs/examples/use-addprotocol-to-transform-feature-properties/) | Protocol-based transforms |

---

## Azure Maps

> Source: [Azure Maps Code Samples](https://samples.azuremaps.com/) (284 examples)

### Azure Maps: Getting Started

| Example | Description |
|---------|-------------|
| [Create a basic map](https://samples.azuremaps.com/map/create-a-basic-map/) | Minimal map setup |
| [Display map with different language](https://samples.azuremaps.com/map/display-map-with-different-language/) | Language options |
| [Display map with different projections](https://samples.azuremaps.com/map/display-map-with-different-projections/) | Map projections |
| [Display map with different view](https://samples.azuremaps.com/map/display-map-with-different-view/) | View options |
| [Enable map events](https://samples.azuremaps.com/map/enable-map-events/) | Event handling |
| [Get map camera details](https://samples.azuremaps.com/map/get-map-camera-details/) | Camera state access |
| [Get map style details](https://samples.azuremaps.com/map/get-map-style-details/) | Style inspection |
| [Set camera to area](https://samples.azuremaps.com/map/set-camera-to-area/) | Bounds-based camera |

### Azure Maps: 3D & WebGL

| Example | Description |
|---------|-------------|
| [Babylon custom WebGL layer](https://samples.azuremaps.com/3d-layer/babylon.js/) | Custom 3D layer with Babylon.js |
| [Deck GL custom WebGL layer](https://samples.azuremaps.com/3d-layer/deck.gl/) | Custom 3D layer with Deck.gl |
| [Flowmap.gl integration](https://samples.azuremaps.com/3d-layer/flowmap.gl/) | Flow map visualization |
| [Three.js custom WebGL layer](https://samples.azuremaps.com/3d-layer/three.js/) | Custom 3D layer with Three.js |
| [Threebox custom WebGL layer](https://samples.azuremaps.com/3d-layer/threebox/) | Custom 3D layer with Threebox |
| [NYC cab trips WebGL](https://samples.azuremaps.com/3d-layer/newyork/) | 3D trips layer with Deck.gl |
| [Simple 2D WebGL layer](https://samples.azuremaps.com/3d-layer/webgl/) | Custom 2D triangle on map |

### Azure Maps: Animations

| Example | Description |
|---------|-------------|
| [Animate a choropleth map](https://samples.azuremaps.com/animations/animate-a-choropleth-map/) | Animated choropleth over time |
| [Animate a GPS trace](https://samples.azuremaps.com/animations/animate-a-gps-trace/) | Smooth GPS trace animation |
| [Animate a line](https://samples.azuremaps.com/animations/animate-a-line/) | Line position animation |
| [Animate a snakeline](https://samples.azuremaps.com/animations/animate-a-snakeline/) | Snake-like line drawing |
| [Animate along a path](https://samples.azuremaps.com/animations/animate-along-a-path/) | Symbol along path with controls |
| [Animate along a route path](https://samples.azuremaps.com/animations/animate-along-a-route-path/) | Timestamp-aware route animation |
| [Animate marker along path](https://samples.azuremaps.com/animations/animate-marker-along-path/) | HTML marker path animation |
| [Animate multiple points](https://samples.azuremaps.com/animations/animate-multiple-points/) | Multi-point animation |
| [Animate point along path](https://samples.azuremaps.com/animations/animate-point-along-path/) | Point path animation |
| [Animate to new position of marker](https://samples.azuremaps.com/animations/animate-to-new-position-of-marker/) | Marker position transition |
| [Animate to new position of point](https://samples.azuremaps.com/animations/animate-to-new-position-of-point/) | Point position transition |
| [Animated tile layer](https://samples.azuremaps.com/animations/animated-tile-layer/) | Tile layer sequence |
| [Animated traffic flow](https://samples.azuremaps.com/animations/animated-traffic-flow/) | Flowing dashed traffic lines |
| [Animation easings](https://samples.azuremaps.com/animations/animation-easings/) | Built-in easing functions |
| [Bouncing marker animation](https://samples.azuremaps.com/animations/bouncing-marker-animation/) | CSS bouncing marker |
| [Drop markers on interval](https://samples.azuremaps.com/animations/drop-markers-on-interval/) | Interval marker drops |
| [Drop multiple markers animation](https://samples.azuremaps.com/animations/drop-multiple-markers-animation/) | Batch marker drops |
| [Drop multiple symbols animation](https://samples.azuremaps.com/animations/drop-multiple-symbols-animation/) | Batch symbol drops |
| [Drop symbol animation](https://samples.azuremaps.com/animations/drop-symbol-animation/) | Single symbol drop |
| [Drop symbols on interval](https://samples.azuremaps.com/animations/drop-symbols-on-interval/) | Interval symbol drops |
| [HTML marker pulse animation](https://samples.azuremaps.com/animations/html-marker-pulse-animation/) | CSS pulse effect |
| [Morph shape animation](https://samples.azuremaps.com/animations/morph-shape-animation/) | Geometry morphing |
| [Moving dashed line](https://samples.azuremaps.com/animations/moving-dashed-line/) | Flowing dash animation |
| [Pulse animation with bubble layer](https://samples.azuremaps.com/animations/pulse-animation-with-bubble-layer/) | Bubble layer pulse |
| [Simple HTML marker animation](https://samples.azuremaps.com/animations/simple-html-marker-animation/) | Basic marker movement |
| [Simple symbol animation](https://samples.azuremaps.com/animations/simple-symbol-animation/) | Basic symbol movement |

### Azure Maps: Markers

| Example | Description |
|---------|-------------|
| [All built-in icon templates as HTML markers](https://samples.azuremaps.com/html-markers/all-built-in-icon-templates-as-html-markers/) | Icon template gallery |
| [Clustered pie chart HTML markers](https://samples.azuremaps.com/html-markers/clustered-pie-chart-html-markers/) | Pie chart clusters |
| [CSS styled HTML marker](https://samples.azuremaps.com/html-markers/css-styled-html-marker/) | CSS-based markers |
| [Draggable HTML marker](https://samples.azuremaps.com/html-markers/draggable-html-marker/) | Draggable markers |
| [HTML marker events](https://samples.azuremaps.com/html-markers/html-marker-events/) | Marker event handling |
| [HTML marker layer](https://samples.azuremaps.com/html-markers/html-marker-layer/) | Data source layer |
| [HTML marker layer and vector tiles](https://samples.azuremaps.com/html-markers/html-marker-layer-and-vector-tiles/) | Vector tile markers |
| [HTML marker layer events](https://samples.azuremaps.com/html-markers/html-marker-layer-events/) | Layer event handling |
| [HTML marker with built-in icon template](https://samples.azuremaps.com/html-markers/html-marker-with-built-in-icon-template/) | Template-based markers |
| [HTML marker with custom SVG template](https://samples.azuremaps.com/html-markers/html-marker-with-custom-svg-template/) | SVG template markers |
| [Pie chart HTML marker options](https://samples.azuremaps.com/html-markers/pie-chart-html-marker-options/) | Pie chart options |
| [Bubble layer options](https://samples.azuremaps.com/bubble-layer/bubble-layer-options/) | All bubble layer options |
| [Cluster aggregate average values](https://samples.azuremaps.com/bubble-layer/cluster-aggregate-average-values/) | Cluster aggregation |
| [Cluster aggregates](https://samples.azuremaps.com/bubble-layer/cluster-aggregates/) | Custom cluster properties |
| [Data-driven bubble layer styling](https://samples.azuremaps.com/bubble-layer/data-driven-bubble-layer-styling/) | Magnitude-based styling |
| [Point clusters in bubble layer](https://samples.azuremaps.com/bubble-layer/point-clusters-in-bubble-layer/) | Clustered bubble rendering |
| [Add a symbol layer](https://samples.azuremaps.com/symbol-layer/add-a-symbol-layer/) | Basic symbol layer |
| [Data-driven symbol layer styling](https://samples.azuremaps.com/symbol-layer/data-driven-symbol-layer-styling/) | Property-based styling |
| [Symbol layer options](https://samples.azuremaps.com/symbol-layer/symbol-layer-options/) | All symbol options |

### Azure Maps: Layers

| Example | Description |
|---------|-------------|
| [Add an image layer](https://samples.azuremaps.com/image-layer/add-an-image-layer/) | Basic image overlay |
| [Image layer options](https://samples.azuremaps.com/image-layer/image-layer-options/) | Image layer options |
| [Video layer](https://samples.azuremaps.com/image-layer/video-layer/) | Video on satellite basemap |
| [Add a GeoJSON LineString](https://samples.azuremaps.com/line-layer/add-a-geojson-linestring/) | Basic line rendering |
| [Arc line layer](https://samples.azuremaps.com/line-layer/arc-line-layer/) | 3D arc lines |
| [Data-driven line layer styling](https://samples.azuremaps.com/line-layer/data-driven-line-layer-styling/) | Property-based styling |
| [Draw line between two points](https://samples.azuremaps.com/line-layer/draw-line-between-two-points/) | Two-point connection |
| [Line layer options](https://samples.azuremaps.com/line-layer/line-layer-options/) | All line options |
| [Add a GeoJSON polygon](https://samples.azuremaps.com/polygon-and-polygon-extrusion-layers/add-a-geojson-polygon/) | Basic polygon fill |
| [Data-driven polygon extrusion styling](https://samples.azuremaps.com/polygon-and-polygon-extrusion-layers/data-driven-polygon-extrusion-styling/) | Extrusion styling |
| [Polygon extrusion layer options](https://samples.azuremaps.com/polygon-and-polygon-extrusion-layers/polygon-extrusion-layer-options/) | Extrusion options |
| [Polygon layer options](https://samples.azuremaps.com/polygon-and-polygon-extrusion-layers/polygon-layer-options/) | Polygon options |
| [Add a raster tile source](https://samples.azuremaps.com/tile-layers/add-a-raster-tile-source/) | Raster tiles |
| [Add a vector tile source](https://samples.azuremaps.com/tile-layers/add-a-vector-tile-source/) | Vector tiles |
| [Add a WMS source](https://samples.azuremaps.com/tile-layers/add-a-wms-source/) | Web Map Service |
| [Add Bing Maps tile layer](https://samples.azuremaps.com/tile-layers/add-bing-maps-tile-layer/) | Bing Maps tiles |
| [PMTiles layer](https://samples.azuremaps.com/pmtiles-layer/) | PMTiles single-file |
| [Cluster weighted heat map](https://samples.azuremaps.com/heat-map-layer/cluster-weighted-heat-map/) | Performance-optimized clustering |
| [Consistent zoomable heat map](https://samples.azuremaps.com/heat-map-layer/consistent-zoomable-heat-map/) | Zoom-consistent radius |
| [Heat map layer options](https://samples.azuremaps.com/heat-map-layer/heat-map-layer-options/) | All heat map options |
| [Simple heat map layer](https://samples.azuremaps.com/heat-map-layer/simple-heat-map-layer/) | Basic heat map |
| [Weighted heat map layer](https://samples.azuremaps.com/heat-map-layer/weighted-heat-map-layer/) | Property-weighted intensity |

### Azure Maps: Controls & UI

| Example | Description |
|---------|-------------|
| [Bring data into view control](https://samples.azuremaps.com/controls/bring-data-into-view-control/) | Auto-fit to data bounds |
| [Category legend options](https://samples.azuremaps.com/controls/category-legend-options/) | Legend type options |
| [Create a layer control](https://samples.azuremaps.com/controls/create-a-layer-control/) | Layer toggle control |
| [Create a legend control](https://samples.azuremaps.com/controls/create-a-legend-control/) | Custom legend |
| [Create HTML legend](https://samples.azuremaps.com/controls/create-html-legend/) | HTML-based legend |
| [Custom navigation controls](https://samples.azuremaps.com/controls/custom-navigation-controls/) | External nav controls |
| [Custom styled legend](https://samples.azuremaps.com/controls/custom-styled-legend/) | CSS-styled legend |
| [Dynamic legend and layer controls](https://samples.azuremaps.com/controls/dynamic-legend-and-layer-controls/) | Dynamic controls |
| [Fullscreen control](https://samples.azuremaps.com/controls/fullscreen-control/) | Fullscreen toggle |
| [Fullscreen control options](https://samples.azuremaps.com/controls/fullscreen-control-options/) | Fullscreen options |
| [Gradient legend options](https://samples.azuremaps.com/controls/gradient-legend-options/) | Gradient legend type |
| [Layer control options](https://samples.azuremaps.com/controls/layer-control-options/) | Layer control options |
| [Legend control options](https://samples.azuremaps.com/controls/legend-control-options/) | Legend control options |
| [Map navigation control options](https://samples.azuremaps.com/controls/map-navigation-control-options/) | Navigation options |
| [Map style picker](https://samples.azuremaps.com/controls/map-style-picker/) | Style picker control |
| [Route range control](https://samples.azuremaps.com/controls/route-range-control/) | Isochrone range display |
| [Select shapes with selection control](https://samples.azuremaps.com/controls/select-shapes-with-selection-control/) | Polygon selection |
| [Selection control](https://samples.azuremaps.com/controls/selection-control/) | Area-based selection |
| [Simple scale bar control](https://samples.azuremaps.com/controls/simple-scale-bar-control/) | Custom scale bar |
| [Spyglass map visualization](https://samples.azuremaps.com/controls/spyglass-map-visualization/) | Spyglass data viewer |
| [Spyglass module options](https://samples.azuremaps.com/controls/spyglass-module-options/) | Spyglass options |

### Azure Maps: Drawing & Editing

| Example | Description |
|---------|-------------|
| [Add drawing toolbar to map](https://samples.azuremaps.com/drawing-tools-module/add-drawing-toolbar-to-map/) | Basic drawing toolbar |
| [Allow map panning with drawing tools](https://samples.azuremaps.com/drawing-tools-module/allow-map-panning-with-drawing-tools/) | Pan while drawing |
| [Change drawing rendering style](https://samples.azuremaps.com/drawing-tools-module/change-drawing-rendering-style/) | Custom draw styles |
| [Create a measuring tool](https://samples.azuremaps.com/drawing-tools-module/create-a-measuring-tool/) | Distance/area measurement |
| [Draw gridded polygon](https://samples.azuremaps.com/drawing-tools-module/draw-gridded-polygon/) | Grid pattern in polygon |
| [Drawing manager options](https://samples.azuremaps.com/drawing-tools-module/drawing-manager-options/) | Manager options |
| [Drawing toolbar options](https://samples.azuremaps.com/drawing-tools-module/drawing-toolbar-options/) | Toolbar options |
| [Drawing tools events](https://samples.azuremaps.com/drawing-tools-module/drawing-tools-events/) | Drawing events |
| [Get drawn shapes from drawing manager](https://samples.azuremaps.com/drawing-tools-module/get-drawn-shapes-from-drawing-manager/) | Export drawn shapes |
| [Load data into drawing manager](https://samples.azuremaps.com/drawing-tools-module/load-data-into-drawing-manager/) | Programmatic loading |
| [Select data in drawn polygon area](https://samples.azuremaps.com/drawing-tools-module/select-data-in-drawn-polygon-area/) | Area selection |
| [Snap drawn line to roads](https://samples.azuremaps.com/drawing-tools-module/snap-drawn-line-to-roads/) | Road snapping |
| [Snap grid options](https://samples.azuremaps.com/drawing-tools-module/snap-grid-options/) | Grid snap options |
| [Use a snapping grid](https://samples.azuremaps.com/drawing-tools-module/use-a-snapping-grid/) | Grid snapping |
| [Show polygon information on click](https://samples.azuremaps.com/polygon-and-polygon-extrusion-layers/show-polygon-information-on-click/) | Click info display |

### Azure Maps: Search & Routing

| Example | Description |
|---------|-------------|
| [Address search](https://samples.azuremaps.com/rest-services/address-search/) | Forward geocoding |
| [Address reverse geocoding](https://samples.azuremaps.com/rest-services/address-reverse-geocoding/) | Reverse geocoding |
| [Autocomplete search](https://samples.azuremaps.com/rest-services/autocomplete-search/) | Search suggestions |
| [Fuzzy search](https://samples.azuremaps.com/rest-services/fuzzy-search/) | Fuzzy text search |
| [Nearby search](https://samples.azuremaps.com/rest-services/nearby-search/) | POI nearby search |
| [Search category](https://samples.azuremaps.com/rest-services/search-category/) | Category-based search |
| [Search along route](https://samples.azuremaps.com/rest-services/search-along-route/) | Route-based POI search |
| [Get directions](https://samples.azuremaps.com/rest-services/get-directions/) | Route directions |
| [Get matrix of travel times](https://samples.azuremaps.com/rest-services/get-matrix-of-travel-times/) | Travel time matrix |
| [Get route range](https://samples.azuremaps.com/rest-services/get-route-range/) | Isochrone polygon |
| [Traffic flow](https://samples.azuremaps.com/rest-services/traffic-flow/) | Live traffic data |

### Azure Maps: Geospatial Files

| Example | Description |
|---------|-------------|
| [Add TopoJSON data to the map](https://samples.azuremaps.com/geospatial-files/add-topojson-data-to-the-map/) | TopoJSON import |
| [Drag and drop GeoJSON file](https://samples.azuremaps.com/geospatial-files/drag-and-drop-geojson-file-onto-map/) | GeoJSON drag & drop |
| [Drag and drop shapefiles](https://samples.azuremaps.com/geospatial-files/drag-and-drop-shapefiles-onto-the-map/) | Shapefile drag & drop |
| [Extract photo location](https://samples.azuremaps.com/geospatial-files/extract-and-display-photo-location/) | EXIF GPS extraction |
| [GeoJSON file optimizer](https://samples.azuremaps.com/geospatial-files/geojson-file-optimizer/) | Optimize GeoJSON files |
| [Load large shapefiles with Web Worker](https://samples.azuremaps.com/geospatial-files/load-large-shapefiles-using-a-web-worker/) | Worker-based shapefile loading |
| [Load shapefiles onto the map](https://samples.azuremaps.com/geospatial-files/load-shapefiles-onto-the-map/) | Basic shapefile loading |
| [Visualize Excel data](https://samples.azuremaps.com/geospatial-files/visualize-excel-data/) | Excel file visualization |

### Azure Maps: Spatial Analysis

| Example | Description |
|---------|-------------|
| [Calculate distance](https://samples.azuremaps.com/spatial-math/calculate-distance/) | Point-to-point distance |
| [Calculate nearest point on a line](https://samples.azuremaps.com/spatial-math/calculate-nearest-point-on-a-line/) | Nearest point projection |
| [Convex hull](https://samples.azuremaps.com/spatial-math/convex-hull/) | Convex hull computation |
| [Geofence](https://samples.azuremaps.com/spatial-analysis/geofence/) | Geofence detection |
| [Point in circle](https://samples.azuremaps.com/spatial-analysis/point-in-circle/) | Circle containment |
| [Point in polygon](https://samples.azuremaps.com/spatial-analysis/point-in-polygon/) | Polygon containment |
| [Point in rectangle](https://samples.azuremaps.com/spatial-analysis/point-in-rectangle/) | Rectangle containment |
| [Simplify polygon](https://samples.azuremaps.com/spatial-math/simplify-polygon/) | Polygon simplification |
| [Spatial IO module](https://samples.azuremaps.com/spatial-io-module/) | KML/CSV/JSON import |

### Azure Maps: Popups

| Example | Description |
|---------|-------------|
| [Simple popup](https://samples.azuremaps.com/popups/simple-popup/) | Basic popup |
| [Add a popup with an image](https://samples.azuremaps.com/popups/add-a-popup-with-an-image/) | Image in popup |
| [All popup options](https://samples.azuremaps.com/popups/all-popup-options/) | Full popup options |
| [Auto open popup on hover](https://samples.azuremaps.com/popups/auto-open-popup-on-hover/) | Auto-hover popup |
| [Custom popup anchor](https://samples.azuremaps.com/popups/custom-popup-anchor/) | Custom anchor point |
| [Popup events](https://samples.azuremaps.com/popups/popup-events/) | Popup event handling |

### Azure Maps: Data Visualization

| Example | Description |
|---------|-------------|
| [Choropleth map](https://samples.azuremaps.com/demos/create-a-choropleth-map/) | Thematic area shading |
| [Car vs truck route comparison](https://samples.azuremaps.com/demos/car-vs-truck-route/) | Multi-modal routing |
| [Data-driven styling](https://samples.azuremaps.com/demos/data-driven-styling/) | Data-driven layer styling |
| [Large GeoJSON files](https://samples.azuremaps.com/demos/large-geojson-files/) | Performance with large data |
| [Search demo](https://samples.azuremaps.com/demos/search/) | Full search demo |

### Azure Maps: Traffic & Weather

| Example | Description |
|---------|-------------|
| [Display traffic tiles](https://samples.azuremaps.com/traffic/display-traffic-tiles/) | Traffic overlay |
| [Get traffic incidents](https://samples.azuremaps.com/traffic/get-traffic-incidents/) | Incident markers |
| [Get weather along a route](https://samples.azuremaps.com/weather/get-weather-along-a-route/) | Route weather data |
| [Display weather layers](https://samples.azuremaps.com/weather/display-weather-layers/) | Weather overlay |

### Azure Maps: Device Sensors

| Example | Description |
|---------|-------------|
| [Continuous user position tracking](https://samples.azuremaps.com/device-sensors/continuous-user-position-tracking/) | Live position updates |
| [Geolocation control](https://samples.azuremaps.com/device-sensors/geolocation-control/) | Custom geolocation UI |
| [Geolocation control options](https://samples.azuremaps.com/device-sensors/geolocation-control-options/) | Geolocation options |
| [Show a user's position](https://samples.azuremaps.com/device-sensors/show-a-users-position/) | Basic geolocation |
| [User position accuracy circle](https://samples.azuremaps.com/device-sensors/user-position-accuracy-circle/) | Accuracy visualization |

---

## Plugins Reference

### Leaflet

| Plugin | Purpose |
|--------|---------|
| [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) | Cluster nearby markers |
| [Leaflet.awesome-markers](https://github.com/lvoogt/Leaflet.awesome-markers) | Font Awesome / Bootstrap icons |
| [Leaflet.fullscreen](https://github.com/Leaflet/Leaflet.fullscreen) | Fullscreen control |
| [Leaflet.MiniMap](https://github.com/Norkart/Leaflet-MiniMap) | Overview minimap |
| [Leaflet.Routing.Machine](https://github.com/perliedman/leaflet-routing-machine) | Route planning |
| [Leaflet-Geoman](https://github.com/geoman-io/leaflet-geoman) | Draw & edit geometries |
| [Leaflet.Marker.SlideTo](https://github.com/tomickigrzegorz/Leaflet.Marker.SlideTo) | Animate marker movement |
| [leaflet-rotation](https://github.com/tomickigrzegorz/leaflet-rotation) | Map rotation |
| [Turf.js](https://turfjs.org/) | Geospatial analysis |
| [Autocomplete](https://github.com/tomickigrzegorz/autocomplete) | Search with suggestions |
| [Tabby](https://github.com/nicedoc/tabby) | Tabbed content |
| [RBush](https://github.com/mourner/rbush) | Spatial index for performance |

### MapLibre GL JS

| Plugin | Purpose |
|--------|---------|
| [mapbox-gl-draw](https://github.com/mapbox/mapbox-gl-draw) | Draw & edit geometries |
| [terra-draw](https://github.com/terra-draw/terra-draw) | Multi-shape drawing |
| [maplibre-gl-rtl-text](https://github.com/nickkatsios/maplibre-gl-rtl-text) | Right-to-left text |
| [Turf.js](https://turfjs.org/) | Geospatial analysis |
| [three.js](https://threejs.org/) | 3D model rendering |
| [babylon.js](https://www.babylonjs.com/) | 3D model rendering |
| [deck.gl](https://deck.gl/) | Large-scale data visualization |
| [PMTiles](https://protomaps.com/) | Single-file tile archives |

### Azure Maps

| Module | Purpose |
|--------|---------|
| [Azure Maps Drawing Tools](https://www.npmjs.com/package/@azuremaps/azuremaps-drawing-tools) | Draw & edit geometries |
| [Azure Maps Spatial IO](https://www.npmjs.com/package/@azuremaps/azuremaps-spatial-io) | Import KML, CSV, GeoJSON |
| [Azure Maps Animation](https://www.npmjs.com/package/azure-maps-control.animation) | Marker & data animation |
| [Azure Maps Control](https://www.npmjs.com/package/azure-maps-control) | Core SDK with layers, controls |
| [Azure Maps REST API](https://docs.microsoft.com/rest/api/maps/) | Geocoding, routing, search, traffic |
| [Turf.js](https://turfjs.org/) | Geospatial analysis |
| [Three.js](https://threejs.org/) | 3D model rendering |
| [Babylon.js](https://www.babylonjs.com/) | 3D model rendering |
| [Deck.gl](https://deck.gl/) | Large-scale data visualization |
| [Threebox](https://github.com/arjunrn/threebox) | Three.js + Mapbox/Azure integration |
| [Flowmap.gl](https://github.com/FlowmapBlue/flowmap.gl/) | Flow visualization |

---

## Related Projects

### Map Libraries
- [Leaflet](https://leafletjs.com/) - JavaScript library for mobile-friendly interactive maps
- [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/) - TypeScript library for WebGL map rendering
- [Azure Maps](https://azuremaps.com/) - Microsoft's enterprise mapping platform
- [OpenLayers](https://openlayers.org/) - High-performance library for interactive maps
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) - WebGL-powered vector maps
- [CesiumJS](https://cesium.com/cesiumjs/) - 3D globes and maps

### Data & Services
- [OpenStreetMap](https://www.openstreetmap.org/) - Free map data source
- [Azure Maps REST API](https://docs.microsoft.com/rest/api/maps/) - Geocoding, routing, search, traffic, weather
- [Turf.js](https://turfjs.org/) - Geospatial analysis for the browser
- [geojson.io](https://geojson.io/) - Quick GeoJSON editor
- [PMTiles](https://protomaps.com/) - Single-file tile archives
- [Protomaps](https://protomaps.com/) - Open-source tile hosting

### React & Frameworks
- [react-leaflet](https://react-leaflet.js.org/) - React components for Leaflet
- [react-map-gl](https://visgl.github.io/react-map-gl/) - React components for MapLibre/Mapbox
- [azure-maps-react](https://github.com/Azure-Samples/azure-maps-react) - React components for Azure Maps
- [vue-maplibre-gl](https://github.com/razorness/vue-maplibre-gl) - Vue 3 components for MapLibre

### Example Collections
- [tomickigrzegorz/leaflet-examples](https://github.com/tomickigrzegorz/leaflet-examples) - 82 Leaflet examples
- [react-leaflet-examples](https://github.com/tomickigrzegorz/react-leaflet-examples) - React Leaflet examples
- [MapLibre GL JS examples](https://maplibre.org/maplibre-gl-js/docs/examples/) - Official MapLibre examples
- [Azure Maps Code Samples](https://github.com/Azure-Samples/AzureMapsCodeSamples) - 284 Azure Maps examples

---

## Contributing

Contributions welcome! Feel free to open an issue or submit a pull request.

## License

[MIT](LICENSE)
