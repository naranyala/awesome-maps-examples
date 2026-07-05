# 🗺️ Awesome Maps Examples [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **The ultimate playbook for building stunning, interactive 2D-focused geospatial applications.**

Welcome to **Awesome Maps Examples**! Whether you are building a data-rich visualization dashboard, a real-time fleet tracking platform, or a lightning-fast store locator, you will find the inspiration and implementation details you need right here.

This repository is a meticulously curated collection of **over 500 interactive, 2D-focused map examples**, highlighting the industry's leading rendering engines:
- 🍃 **[Leaflet.js](https://leafletjs.com/)** - The legendary, mobile-friendly interactive mapping library.
- 🚀 **[MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/)** - High-performance WebGL vector maps for dynamic 2D rendering.
- ☁️ **[Azure Maps](https://azuremaps.com/)** - Microsoft's enterprise-grade mapping and spatial analytics APIs.

### 🧭 How to use this list
Unlike traditional lists grouped simply by library, this collection is **categorized entirely by feature and topic** (e.g., *Routing*, *Controls & UI*, *Spatial Analysis*). This structure empowers you to directly mix, match, and compare how different libraries solve the exact same problems!

We've also included advanced integration ideas, Turf.js architectures, and a complete overview of the global geospatial ecosystem to help you architect your next great map.

---

## Table of Contents

- [Animation & Camera](#animation-camera)
- [Controls & UI](#controls-ui)
- [Data Visualization](#data-visualization)
- [Geometry, Drawing & Data](#geometry-drawing-data)
- [Getting Started & Basic Maps](#getting-started-basic-maps)
- [Layers, Tiles & Sources](#layers-tiles-sources)
- [Markers, Icons & Clusters](#markers-icons-clusters)
- [Popups & Tooltips](#popups-tooltips)
- [Routing & Directions](#routing-directions)
- [Search & Geocoding](#search-geocoding)
- [Spatial Analysis & Math](#spatial-analysis-math)
- [Traffic & Navigation](#traffic-navigation)
- [Weather & Sensors](#weather-sensors)
- [Potential Turf.js Examples](#potential-turfjs-examples-advanced-spatial-analysis)
- [Core Geospatial Algorithms & Math](#core-geospatial-algorithms--math)
- [Advanced Cross-Library Integrations](#advanced-cross-library-integrations-interactive-apps--editors)
- [Global Geospatial Ecosystem](#global-geospatial-ecosystem-across-languages)
- [Plugins Reference](#plugins-reference)
- [Turf.js Examples (Cross-Library)](#turfjs-examples-cross-library)
  - [Measurement & Distance](#measurement--distance)
  - [Buffer & Zone Analysis](#buffer--zone-analysis)
  - [Spatial Queries & Boolean Operations](#spatial-queries--boolean-operations)
  - [Voronoi, Hex Grids & Tessellation](#voronoi-hex-grids--tessellation)
  - [Interpolation & Surface Analysis](#interpolation--surface-analysis)
  - [Clustering & Classification](#clustering--classification)
  - [Route & Path Analysis](#route--path-analysis)
  - [Geofencing & Proximity](#geofencing--proximity)
  - [Geometry Generation & Manipulation](#geometry-generation--manipulation)
  - [Line & Edge Analysis](#line--edge-analysis)
  - [Complex Multi-Module Workflows](#complex-multi-module-workflows)
  - [Standalone (No Map Renderer)](#standalone-no-map-renderer)
- [Multi-Library Combinations](#multi-library-combinations)
  - [Interactive Geometry Editor](#interactive-geometry-editor)
  - [Data Visualization Dashboard](#data-visualization-dashboard)
  - [Story Map & Narrative](#story-map--narrative)
  - [Geospatial Analysis Tool](#geospatial-analysis-tool)
  - [Real-Time & Live Tracking](#real-time--live-tracking)
  - [Offline & Progressive Web App](#offline--progressive-web-app)
  - [Print & Export](#print--export)
  - [Geo Calculation & Algorithms](#geo-calculation--algorithms)
  - [Data Pipeline & ETL](#data-pipeline--etl)
  - [Creative & Experimental](#creative--experimental)
  - [Multi-Library Quick Reference](#multi-library-quick-reference)
- [Libraries by Language](#libraries-by-language)
  - [JavaScript / TypeScript](#javascript--typescript)
  - [Python](#python)
  - [Java / Kotlin](#java--kotlin)
  - [Swift / Objective-C](#swift--objective-c)
  - [C# / .NET](#c--net)
  - [C / C++](#c--c)
  - [Rust](#rust)
  - [Go](#go)
  - [Ruby](#ruby)
  - [PHP](#php)
  - [R](#r)
  - [Scala](#scala)
  - [Other Languages](#other-languages)
  - [Data & Service APIs](#data--service-apis)
  - [Spatial Databases & Backend Tools](#spatial-databases--backend-tools)
  - [Relational Spatial Databases](#relational-spatial-databases)
  - [PostgreSQL Extensions & Plugins](#postgresql-extensions--plugins)
  - [SQLite Extensions & Plugins](#sqlite-extensions--plugins)
  - [SpatiaLite Spatial Functions](#spatialite-spatial-functions-key-operations)
  - [PostGIS Extension Comparison](#postgis-extension-comparison)
  - [NoSQL & Document Spatial Databases](#nosql--document-spatial-databases)
  - [Vector Tile Databases & Servers](#vector-tile-databases--servers)
  - [Spatial Indexing Structures](#spatial-indexing-structures)
  - [PostGIS Spatial Functions](#postgis-spatial-functions-key-operations)
  - [Django GIS (GeoDjango)](#django-gis-geodjango)
  - [MySQL Spatial Functions](#mysql-spatial-functions-key-operations)
  - [MongoDB Geospatial Queries](#mongodb-geospatial-queries)
  - [Elasticsearch Spatial Queries](#elasticsearch-spatial-queries)
  - [Redis Geospatial Commands](#redis-geospatial-commands)
  - [Tile Pipeline Tools](#tile-pipeline-tools)
  - [Geocoding & Routing Backends](#geocoding--routing-backends)
- [Core GIS Libraries](#core-gis-libraries-language-agnostic)
- [Contributing](#contributing)

> **Legend:** Rows marked with are **potential examples** that could be contributed to fill cross-library gaps.

---

## Animation & Camera

- **Azure Maps**: [Animate a choropleth map](https://samples.azuremaps.com/animations/animate-a-choropleth-map) - Animated choropleth over time
- **Azure Maps**: [Animate a GPS trace](https://samples.azuremaps.com/animations/animate-a-gps-trace) - Smooth GPS trace animation
- **Azure Maps**: [Animation easings](https://samples.azuremaps.com/animations/animation-easings) - Built-in easing functions
- **Azure Maps**: [Get map camera details](https://samples.azuremaps.com/map/get-map-camera-details) - Camera state access
- **Leaflet**: [Fly to with easing](https://leafletjs.com/reference.html#map-flyto) - Animated flyTo with custom easing options
- **Leaflet**: [Pan animation with hooks](https://leafletjs.com/reference.html#map-panes) - Custom pan/zoom animations via map events
- **Leaflet**: [Scroll-driven fly-to](https://leafletjs.com/examples/scroll-driven-map/) - Fly map position based on scroll position
- **MapLibre**: [Customize camera animations](https://maplibre.org/maplibre-gl-js/docs/examples/customize-camera-animations) - Custom easing curves
- **MapLibre**: [Disable map rotation](https://maplibre.org/maplibre-gl-js/docs/examples/disable-map-rotation) - Lock bearing
- **MapLibre**: [Fly to a location](https://maplibre.org/maplibre-gl-js/docs/examples/fly-to-a-location) - Animated fly-to
- **MapLibre**: [Fly to a location based on scroll position](https://maplibre.org/maplibre-gl-js/docs/examples/fly-to-a-location-based-on-scroll-position) - Scroll-driven fly-to
- **MapLibre**: [Jump to a series of locations](https://maplibre.org/maplibre-gl-js/docs/examples/jump-to-a-series-of-location) - Sequential location jumps
- **MapLibre**: [Set pitch and bearing](https://maplibre.org/maplibre-gl-js/docs/examples/set-pitch-and-bearing) - Tilt and rotate
- **MapLibre**: [Slowly fly to a location](https://maplibre.org/maplibre-gl-js/docs/examples/slowly-fly-to-a-location) - Slow fly-to

---

## Controls & UI

- **Azure Maps**: [Bring data into view control](https://samples.azuremaps.com/controls/bring-data-into-view-control) - Auto-fit to data bounds
- **Azure Maps**: [Category legend options](https://samples.azuremaps.com/controls/category-legend-options) - Legend type options
- **Azure Maps**: [Create a legend control](https://samples.azuremaps.com/controls/create-a-legend-control) - Custom legend
- **Azure Maps**: [Create HTML legend](https://samples.azuremaps.com/controls/create-html-legend) - HTML-based legend
- **Azure Maps**: [Custom navigation controls](https://samples.azuremaps.com/controls/custom-navigation-controls) - External nav controls
- **Azure Maps**: [Custom styled legend](https://samples.azuremaps.com/controls/custom-styled-legend) - CSS-styled legend
- **Azure Maps**: [Fullscreen control](https://samples.azuremaps.com/controls/fullscreen-control) - Fullscreen toggle
- **Azure Maps**: [Fullscreen control options](https://samples.azuremaps.com/controls/fullscreen-control-options) - Fullscreen options
- **Azure Maps**: [Geolocation control](https://samples.azuremaps.com/device-sensors/geolocation-control) - Custom geolocation UI
- **Azure Maps**: [Geolocation control options](https://samples.azuremaps.com/device-sensors/geolocation-control-options) - Geolocation options
- **Azure Maps**: [Gradient legend options](https://samples.azuremaps.com/controls/gradient-legend-options) - Gradient legend type
- **Azure Maps**: [Legend control options](https://samples.azuremaps.com/controls/legend-control-options) - Legend control options
- **Azure Maps**: [Map navigation control options](https://samples.azuremaps.com/controls/map-navigation-control-options) - Navigation options
- **Azure Maps**: [Map style picker](https://samples.azuremaps.com/controls/map-style-picker) - Style picker control
- **Azure Maps**: [Map user interaction options](https://samples.azuremaps.com/map/map-user-interaction-options) - User interaction options
- **Azure Maps**: [Mini overview map](https://samples.azuremaps.com/map/mini-overview-map) - Overview minimap
- **Azure Maps**: [Mini overview map options](https://samples.azuremaps.com/map/mini-overview-map-options) - Overview minimap options
- **Azure Maps**: [Simple scale bar control](https://samples.azuremaps.com/controls/simple-scale-bar-control) - Custom scale bar
- **Azure Maps**: [Spyglass map visualization](https://samples.azuremaps.com/controls/spyglass-map-visualization) - Spyglass data viewer
- **Azure Maps**: [Spyglass module options](https://samples.azuremaps.com/controls/spyglass-module-options) - Spyglass options
- **Azure Maps**: [Swipe map with fullscreen support](https://samples.azuremaps.com/map/swipe-map-with-fullscreen-support) - Swipe with fullscreen
- **Leaflet**: [Changing locate zoom control](https://tomickigrzegorz.github.io/leaflet-examples/#02.changing-locate-zoom-control) - Custom zoom control positioning
- **Leaflet**: [Controlling the map from outside](https://tomickigrzegorz.github.io/leaflet-examples/#11.controlling-the-map-from-outside-the-map) - External map controls
- **Leaflet**: [Create additional control placeholders](https://tomickigrzegorz.github.io/leaflet-examples/#57.create-additional-control-placeholders) - Custom control positions
- **Leaflet**: [Fullscreen](https://tomickigrzegorz.github.io/leaflet-examples/#27.fullscreen) - Fullscreen toggle
- **Leaflet**: [Scale](https://tomickigrzegorz.github.io/leaflet-examples/#42.scale) - Map scale bar
- **Leaflet**: [Custom legend control](https://leafletjs.com/examples/zoom-levels/) - HTML legend overlay with data classes
- **Leaflet**: [Swipe comparison control](https://leafletjs.com/examples/layers-control/) - Side-by-side map swipe
- **MapLibre**: [Change building color based on zoom level](https://maplibre.org/maplibre-gl-js/docs/examples/change-building-color-based-on-zoom-level) - Zoom-driven styling
- **MapLibre**: [Display map navigation controls](https://maplibre.org/maplibre-gl-js/docs/examples/display-map-navigation-controls) - Standard zoom/rotate controls
- **MapLibre**: [Level of Detail Control](https://maplibre.org/maplibre-gl-js/docs/examples/level-of-detail-control) - LOD management
- **MapLibre**: [Navigate the map with game-like controls](https://maplibre.org/maplibre-gl-js/docs/examples/navigate-the-map-with-game-like-controls) - WASD navigation
- **MapLibre**: [Toggle interactions](https://maplibre.org/maplibre-gl-js/docs/examples/toggle-interactions) - Enable/disable controls
- **MapLibre**: [View a fullscreen map](https://maplibre.org/maplibre-gl-js/docs/examples/view-a-fullscreen-map) - Fullscreen toggle
- **MapLibre**: [Scale bar control](https://maplibre.org/maplibre-gl-js/docs/examples/) - Scale bar with units
- **MapLibre**: [Mini overview map](https://maplibre.org/maplibre-gl-js/docs/examples/) - Overview minimap synced to main map

---

## Data Visualization

- **Azure Maps**: [Bubble layer data viz](https://samples.azuremaps.com/bubble-layer/bubble-layer-options) - Bubble layer for point magnitude
- **Azure Maps**: [Heat map data viz](https://samples.azuremaps.com/heat-map-layer/simple-heat-map-layer) - Heat map for density visualization
- **Azure Maps**: [Choropleth map](https://samples.azuremaps.com/demos/create-a-choropleth-map) - Thematic area shading
- **Leaflet**: [Leaflet.heat for density maps](https://github.com/Leaflet/Leaflet.heat) - Heatmap plugin for point density
- **Leaflet**: [Choropleth with GeoJSON](https://leafletjs.com/examples/choropleth/) - Data-driven polygon coloring
- **Leaflet**: [Marker clustering density](https://github.com/Leaflet/Leaflet.markercluster) - Cluster-based density visualization
- **MapLibre**: [Visualize population density](https://maplibre.org/maplibre-gl-js/docs/examples/visualize-population-density) - Choropleth visualization
- **MapLibre**: [Create a heatmap layer](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-heatmap-layer) - Heatmap density visualization
- **MapLibre**: [Choropleth with data joins](https://maplibre.org/maplibre-gl-js/docs/examples/) - Join external CSV data to polygon features

---

## Geometry, Drawing & Data

- **Azure Maps**: [Add a GeoJSON LineString](https://samples.azuremaps.com/line-layer/add-a-geojson-linestring) - Basic line rendering
- **Azure Maps**: [Add a GeoJSON polygon](https://samples.azuremaps.com/polygon-and-polygon-extrusion-layers/add-a-geojson-polygon) - Basic polygon fill
- **Azure Maps**: [Add drawing toolbar to map](https://samples.azuremaps.com/drawing-tools-module/add-drawing-toolbar-to-map) - Basic drawing toolbar
- **Azure Maps**: [Allow map panning with drawing tools](https://samples.azuremaps.com/drawing-tools-module/allow-map-panning-with-drawing-tools) - Pan while drawing
- **Azure Maps**: [Animate a line](https://samples.azuremaps.com/animations/animate-a-line) - Line position animation
- **Azure Maps**: [Animate a snakeline](https://samples.azuremaps.com/animations/animate-a-snakeline) - Snake-like line drawing
- **Azure Maps**: [Calculate a convex hull](https://samples.azuremaps.com/spatial-math/calculate-a-convex-hull) - Convex hull from array of shapes
- **Azure Maps**: [Cardinal Spline Options](https://samples.azuremaps.com/spatial-math/cardinal-spline-options) - Cardinal spline controls
- **Azure Maps**: [Change drawing rendering style](https://samples.azuremaps.com/drawing-tools-module/change-drawing-rendering-style) - Custom draw styles
- **Azure Maps**: [Choropleth map](https://samples.azuremaps.com/demos/create-a-choropleth-map) - Thematic area shading
- **Azure Maps**: [Create isobands from isolines](https://samples.azuremaps.com/spatial-math/create-isobands-from-isolines) - Isobands from isoline data
- **Azure Maps**: [Curved lines](https://samples.azuremaps.com/spatial-math/curved-lines) - Three ways to create curved lines
- **Azure Maps**: [Data-driven line layer styling](https://samples.azuremaps.com/line-layer/data-driven-line-layer-styling) - Property-based styling
- **Azure Maps**: [Data-driven polygon extrusion styling](https://samples.azuremaps.com/polygon-and-polygon-extrusion-layers/data-driven-polygon-extrusion-styling) - Extrusion styling
- **Azure Maps**: [DataSource and Shape events](https://samples.azuremaps.com/map/datasource-and-shape-events) - DataSource and Shape events
- **Azure Maps**: [Display isoline data](https://samples.azuremaps.com/line-layer/display-isoline-data) - Contour lines with data-driven styling
- **Azure Maps**: [Drag and drop GeoJSON file](https://samples.azuremaps.com/geospatial-files/drag-and-drop-geojson-file-onto-map) - GeoJSON drag & drop
- **Azure Maps**: [Drag and drop shapefiles](https://samples.azuremaps.com/geospatial-files/drag-and-drop-shapefiles-onto-the-map) - Shapefile drag & drop
- **Azure Maps**: [Draw gridded polygon](https://samples.azuremaps.com/drawing-tools-module/draw-gridded-polygon) - Grid pattern in polygon
- **Azure Maps**: [Drawing manager options](https://samples.azuremaps.com/drawing-tools-module/drawing-manager-options) - Manager options
- **Azure Maps**: [Drawing toolbar options](https://samples.azuremaps.com/drawing-tools-module/drawing-toolbar-options) - Toolbar options
- **Azure Maps**: [Drawing tools events](https://samples.azuremaps.com/drawing-tools-module/drawing-tools-events) - Drawing events
- **Azure Maps**: [GeoJSON file optimizer](https://samples.azuremaps.com/geospatial-files/geojson-file-optimizer) - Optimize GeoJSON files
- **Azure Maps**: [Geospatially Accurate Circle](https://samples.azuremaps.com/polygons/geospatially-accurate-circle) - Geospatially accurate circle
- **Azure Maps**: [Get drawn shapes from drawing manager](https://samples.azuremaps.com/drawing-tools-module/get-drawn-shapes-from-drawing-manager) - Export drawn shapes
- **Azure Maps**: [Large GeoJSON files](https://samples.azuremaps.com/demos/large-geojson-files) - Performance with large data
- **Azure Maps**: [Line layer options](https://samples.azuremaps.com/line-layer/line-layer-options) - All line options
- **Azure Maps**: [Line with Stroke Gradient](https://samples.azuremaps.com/line-layer/line-with-stroke-gradient) - Stroke gradient on a line
- **Azure Maps**: [Load data into drawing manager](https://samples.azuremaps.com/drawing-tools-module/load-data-into-drawing-manager) - Programmatic loading
- **Azure Maps**: [Load large shapefiles with Web Worker](https://samples.azuremaps.com/geospatial-files/load-large-shapefiles-using-a-web-worker) - Worker-based shapefile loading
- **Azure Maps**: [Load shapefiles onto the map](https://samples.azuremaps.com/geospatial-files/load-shapefiles-onto-the-map) - Basic shapefile loading
- **Azure Maps**: [Merge two polygons together](https://samples.azuremaps.com/spatial-math/merge-two-polygons-together) - Polygon union
- **Azure Maps**: [Morph shape animation](https://samples.azuremaps.com/animations/morph-shape-animation) - Geometry morphing
- **Azure Maps**: [Moving dashed line](https://samples.azuremaps.com/animations/moving-dashed-line) - Flowing dash animation
- **Azure Maps**: [Polygon extrusion layer options](https://samples.azuremaps.com/polygon-and-polygon-extrusion-layers/polygon-extrusion-layer-options) - Extrusion options
- **Azure Maps**: [Polygon Fill Pattern](https://samples.azuremaps.com/polygons/polygon-fill-pattern) - Pattern fill for polygons
- **Azure Maps**: [Polygon Hover Style](https://samples.azuremaps.com/polygons/polygon-hover-style) - Polygon hover effect
- **Azure Maps**: [Polygon layer options](https://samples.azuremaps.com/polygon-and-polygon-extrusion-layers/polygon-layer-options) - Polygon options
- **Azure Maps**: [Polygon masks](https://samples.azuremaps.com/polygons/polygon-masks) - Polygon masks for MultiPolygon
- **Azure Maps**: [Read and write Well Known Text](https://samples.azuremaps.com/spatial-io-module/read-and-write-well-known-text) - WKT as GeoJSON
- **Azure Maps**: [Select data in drawn polygon area](https://samples.azuremaps.com/drawing-tools-module/select-data-in-drawn-polygon-area) - Area selection
- **Azure Maps**: [Simple Cardinal Spline](https://samples.azuremaps.com/spatial-math/simple-cardinal-spline) - Simple cardinal spline
- **Azure Maps**: [Simple MultiPolygon](https://samples.azuremaps.com/polygons/simple-multipolygon) - Render a MultiPolygon
- **Azure Maps**: [Simplify polygon](https://samples.azuremaps.com/spatial-math/simplify-polygon) - Polygon simplification
- **Azure Maps**: [Snap drawn line to roads](https://samples.azuremaps.com/drawing-tools-module/snap-drawn-line-to-roads) - Road snapping
- **Azure Maps**: [Use a snapping grid](https://samples.azuremaps.com/drawing-tools-module/use-a-snapping-grid) - Grid snapping
- **Leaflet**: [Add rectangle over click tiles](https://tomickigrzegorz.github.io/leaflet-examples/#72.add-rectangle-over-click-tiles) - Draw on tile click
- **Leaflet**: [Calculate area](https://tomickigrzegorz.github.io/leaflet-examples/#78.calculate-area) - Area calculation on polygon
- **Leaflet**: [Controlling polygons](https://tomickigrzegorz.github.io/leaflet-examples/#12.controling-polygons) - Create and manage polygons
- **Leaflet**: [Create and save GeoJSON](https://tomickigrzegorz.github.io/leaflet-examples/#53.create-and-save-geojson) - Draw and export GeoJSON
- **Leaflet**: [Enlarge a polygon box by 5%](https://tomickigrzegorz.github.io/leaflet-examples/#37.enlarge-a-polygon-box-by-5-percent) - Buffer polygon with Turf.js
- **Leaflet**: [GeoJSON extended action](https://tomickigrzegorz.github.io/leaflet-examples/#16.geoJson-extended-action) - Interactive GeoJSON features
- **Leaflet**: [GeoJSON simple](https://tomickigrzegorz.github.io/leaflet-examples/#15.geoJson-simple) - Basic GeoJSON rendering
- **Leaflet**: [Great circle](https://tomickigrzegorz.github.io/leaflet-examples/#60.great-circle) - Great circle arcs with Turf.js
- **Leaflet**: [Leaflet-Geoman](https://tomickigrzegorz.github.io/leaflet-examples/#66.leaflet-geoman) - Full geometry editing toolkit
- **Leaflet**: [Part of the common](https://tomickigrzegorz.github.io/leaflet-examples/#38.part-of-the-common) - Polygon intersection with Turf.js
- **Leaflet**: [Polygon with gradient](https://tomickigrzegorz.github.io/leaflet-examples/#70.polygon-with-gradien) - Gradient-filled polygons
- **Leaflet**: [Polyline](https://tomickigrzegorz.github.io/leaflet-examples/#24.polyline) - Draw polylines
- **MapLibre**: [Add a GeoJSON line](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-geojson-line) - GeoJSON LineString
- **MapLibre**: [Add a GeoJSON polygon](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-geojson-polygon) - GeoJSON polygon fill
- **MapLibre**: [Add a pattern to a polygon](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-pattern-to-a-polygon) - Repeating fill pattern
- **MapLibre**: [Add Contour Lines](https://maplibre.org/maplibre-gl-js/docs/examples/add-contour-lines) - Contour lines from raster-dem
- **MapLibre**: [Add live realtime data](https://maplibre.org/maplibre-gl-js/docs/examples/add-live-realtime-data) - Realtime GeoJSON streams
- **MapLibre**: [Add multiple geometries from one GeoJSON source](https://maplibre.org/maplibre-gl-js/docs/examples/add-multiple-geometries-from-one-geojson-source) - Multi-geometry source
- **MapLibre**: [Animate a line](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-line) - Line drawing animation
- **MapLibre**: [Create a gradient line using an expression](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-gradient-line-using-an-expression) - Gradient line styling
- **MapLibre**: [Create a gradient line with dasharray using an expression](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-gradient-dashed-line-using-an-expression) - Gradient dashed line
- **MapLibre**: [Display line that crosses 180th meridian](https://maplibre.org/maplibre-gl-js/docs/examples/display-line-that-crosses-180th-meridian) - Antimeridian handling
- **MapLibre**: [Draw a Circle](https://maplibre.org/maplibre-gl-js/docs/examples/draw-a-circle) - Circle drawing
- **MapLibre**: [Draw geometries with terra-draw](https://maplibre.org/maplibre-gl-js/docs/examples/draw-geometries-with-terra-draw) - Geometry drawing with terra-draw
- **MapLibre**: [Draw polygon with mapbox-gl-draw](https://maplibre.org/maplibre-gl-js/docs/examples/draw-polygon-with-mapbox-gl-draw) - Polygon drawing with draw plugin
- **MapLibre**: [Fit to the bounds of a LineString](https://maplibre.org/maplibre-gl-js/docs/examples/fit-to-the-bounds-of-a-linestring) - Fit to line geometry
- **MapLibre**: [Restrict map panning to an area](https://maplibre.org/maplibre-gl-js/docs/examples/restrict-map-panning-to-an-area) - Bounds constraint
- **MapLibre**: [Style lines with a data-driven property](https://maplibre.org/maplibre-gl-js/docs/examples/style-lines-with-a-data-driven-property) - Data-driven line styling
- **MapLibre**: [Update GeoJSON polygons](https://maplibre.org/maplibre-gl-js/docs/examples/update-geojson-polygons) - Dynamic polygon updates
- **MapLibre**: [View local GeoJSON](https://maplibre.org/maplibre-gl-js/docs/examples/view-local-geojson) - Load local GeoJSON file

---

## Getting Started & Basic Maps

- **Azure Maps**: [Add a Context Menu to the Map](https://samples.azuremaps.com/map/add-a-context-menu-to-the-map) - Right-click context menu
- **Azure Maps**: [Create a basic map](https://samples.azuremaps.com/map/create-a-basic-map) - Minimal map setup
- **Azure Maps**: [Detect if browser is supported](https://samples.azuremaps.com/map/detect-if-browser-is-supported) - Browser support detection
- **Azure Maps**: [Display map with different language](https://samples.azuremaps.com/map/display-map-with-different-language) - Language options
- **Azure Maps**: [Display map with different projections](https://samples.azuremaps.com/map/display-map-with-different-projections) - Map projections
- **Azure Maps**: [Enable map events](https://samples.azuremaps.com/map/enable-map-events) - Event handling
- **Azure Maps**: [Lazy Load the Map](https://samples.azuremaps.com/map/lazy-load-the-map) - Delay SDK loading
- **Azure Maps**: [Limit Map to Two Finger Panning](https://samples.azuremaps.com/map/limit-map-to-two-finger-panning) - Mobile-friendly panning
- **Azure Maps**: [Limit map view with maxBounds](https://samples.azuremaps.com/map/limit-map-view-with-maxbounds) - Restrict map view
- **Azure Maps**: [Multiple Maps](https://samples.azuremaps.com/map/multiple-maps) - Multiple maps on one page
- **Azure Maps**: [Show a user's position](https://samples.azuremaps.com/device-sensors/show-a-users-position) - Basic geolocation
- **Azure Maps**: [Simple Store Locator](https://samples.azuremaps.com/tutorials/simple-store-locator) - Store locator tutorial
- **Azure Maps**: [Swipe between two maps](https://samples.azuremaps.com/map/swipe-between-two-maps) - Side-by-side map comparison
- **Azure Maps**: [Synchronize map views](https://samples.azuremaps.com/map/synchronize-map-views) - Synced map views
- **Leaflet**: [Back to home button](https://tomickigrzegorz.github.io/leaflet-examples/#41.back-to-home-button) - Reset view button
- **Leaflet**: [Contextmenu](https://tomickigrzegorz.github.io/leaflet-examples/#54.contextmenu) - Right-click context menu
- **Leaflet**: [Coordinates after clicking on the map](https://tomickigrzegorz.github.io/leaflet-examples/#05.coordinates-after-clicking-on-the-map) - Capture click coordinates
- **Leaflet**: [Coordinates of the center of the visible map](https://tomickigrzegorz.github.io/leaflet-examples/#39.coordinates-of-the-center-of-the-visible-map) - Track map center in real-time
- **Leaflet**: [Coordinates of the visible map](https://tomickigrzegorz.github.io/leaflet-examples/#06.coordinates-of-the-visible-map) - Get current viewport bounds
- **Leaflet**: [Custom button](https://tomickigrzegorz.github.io/leaflet-examples/#19.custom-button) - Add custom map buttons
- **Leaflet**: [FitBounds with padding](https://tomickigrzegorz.github.io/leaflet-examples/#25.fitBounds-with-padding) - Responsive bounds fitting
- **Leaflet**: [Linked view](https://tomickigrzegorz.github.io/leaflet-examples/#29.linked-view) - Synchronized map views
- **Leaflet**: [Location button](https://tomickigrzegorz.github.io/leaflet-examples/#49.location-button) - Geolocation button
- **Leaflet**: [Map rotation](https://tomickigrzegorz.github.io/leaflet-examples/#82.map-rotation) - Rotate with right-click drag or pinch
- **Leaflet**: [MaxBound map restricts the view](https://tomickigrzegorz.github.io/leaflet-examples/#20.maxBound-map-restricts-the-view) - Restrict panning to a region
- **Leaflet**: [MiniMap plugin](https://tomickigrzegorz.github.io/leaflet-examples/#30.mini-map) - Overview minimap
- **Leaflet**: [Simple map](https://tomickigrzegorz.github.io/leaflet-examples/#01.simple-map) - Minimal map setup
- **MapLibre**: [Add a video](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-video) - Video overlay on satellite
- **MapLibre**: [Add support for right-to-left scripts](https://maplibre.org/maplibre-gl-js/docs/examples/add-support-for-right-to-left-scripts) - RTL text rendering
- **MapLibre**: [Change a map's language](https://maplibre.org/maplibre-gl-js/docs/examples/change-a-maps-language) - Dynamic language switch
- **MapLibre**: [Change the default position for attribution](https://maplibre.org/maplibre-gl-js/docs/examples/change-the-default-position-for-attribution) - Attribution positioning
- **MapLibre**: [Check if WebGL is supported](https://maplibre.org/maplibre-gl-js/docs/examples/check-if-webgl-is-supported) - Feature detection
- **MapLibre**: [Cooperative gestures](https://maplibre.org/maplibre-gl-js/docs/examples/cooperative-gestures) - Multi-finger scroll zoom
- **MapLibre**: [Create a hover effect](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect) - Hover state styling
- **MapLibre**: [Create a time slider](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-time-slider) - Temporal data slider
- **MapLibre**: [Disable scroll zoom](https://maplibre.org/maplibre-gl-js/docs/examples/disable-scroll-zoom) - Disable wheel zoom
- **MapLibre**: [Display a map](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-map) - Basic map initialization
- **MapLibre**: [Display a non-interactive map](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-non-interactive-map) - Static, non-interactive map
- **MapLibre**: [Display and style rich text labels](https://maplibre.org/maplibre-gl-js/docs/examples/display-and-style-rich-text-labels) - Rich text formatting
- **MapLibre**: [Fit a map to a bounding box](https://maplibre.org/maplibre-gl-js/docs/examples/fit-a-map-to-a-bounding-box) - Fit to bounds
- **MapLibre**: [Locate the user](https://maplibre.org/maplibre-gl-js/docs/examples/locate-the-user) - Geolocation
- **MapLibre**: [Render world copies](https://maplibre.org/maplibre-gl-js/docs/examples/render-world-copies) - Infinite horizontal wrap
- **MapLibre**: [Sync movement of multiple maps](https://maplibre.org/maplibre-gl-js/docs/examples/sync-movement-of-multiple-maps) - Multi-map sync
- **MapLibre**: [Update a feature in realtime](https://maplibre.org/maplibre-gl-js/docs/examples/update-a-feature-in-realtime) - Realtime feature updates
- **MapLibre**: [Variable label placement](https://maplibre.org/maplibre-gl-js/docs/examples/variable-label-placement) - Smart label positioning

---

## Layers, Tiles & Sources

- **Azure Maps**: [Add a raster tile source](https://samples.azuremaps.com/tile-layers/add-a-raster-tile-source) - Raster tiles
- **Azure Maps**: [Add a vector tile source](https://samples.azuremaps.com/tile-layers/add-a-vector-tile-source) - Vector tiles
- **Azure Maps**: [Add a WMS source](https://samples.azuremaps.com/tile-layers/add-a-wms-source) - Web Map Service
- **Azure Maps**: [Add an image layer](https://samples.azuremaps.com/image-layer/add-an-image-layer) - Basic image overlay
- **Azure Maps**: [Add Bing Maps tile layer](https://samples.azuremaps.com/tile-layers/add-bing-maps-tile-layer) - Bing Maps tiles
- **Azure Maps**: [Animated tile layer](https://samples.azuremaps.com/animations/animated-tile-layer) - Tile layer sequence
- **Azure Maps**: [Bubble layer options](https://samples.azuremaps.com/bubble-layer/bubble-layer-options) - All bubble layer options
- **Azure Maps**: [Consistent zoomable heat map](https://samples.azuremaps.com/heat-map-layer/consistent-zoomable-heat-map) - Zoom-consistent radius
- **Azure Maps**: [Create a layer control](https://samples.azuremaps.com/controls/create-a-layer-control) - Layer toggle control
- **Azure Maps**: [Data-driven bubble layer styling](https://samples.azuremaps.com/bubble-layer/data-driven-bubble-layer-styling) - Magnitude-based styling
- **Azure Maps**: [Dynamic legend and layer controls](https://samples.azuremaps.com/controls/dynamic-legend-and-layer-controls) - Dynamic controls
- **Azure Maps**: [Export Map as Image](https://samples.azuremaps.com/map/export-map-as-image) - Export map canvas as image
- **Azure Maps**: [Heat map layer options](https://samples.azuremaps.com/heat-map-layer/heat-map-layer-options) - All heat map options
- **Azure Maps**: [OGC map layer example](https://samples.azuremaps.com/spatial-io-module/ogc-map-layer-example) - OGC WMS/WMTS overlay
- **Azure Maps**: [PMTiles Buildings](https://samples.azuremaps.com/pmtiles/overture-building-theme) - PMTiles with Overture buildings
- **Azure Maps**: [PMTiles layer](https://samples.azuremaps.com/pmtiles-layer) - PMTiles single-file
- **Azure Maps**: [PMTiles Places](https://samples.azuremaps.com/pmtiles/overture-place-theme) - PMTiles with Overture places
- **Azure Maps**: [PMTiles Transportation](https://samples.azuremaps.com/pmtiles/overture-transportation-theme) - PMTiles with Overture transport
- **Azure Maps**: [Pulse animation with bubble layer](https://samples.azuremaps.com/animations/pulse-animation-with-bubble-layer) - Bubble layer pulse
- **Azure Maps**: [Simple heat map layer](https://samples.azuremaps.com/heat-map-layer/simple-heat-map-layer) - Basic heat map
- **Azure Maps**: [Tile Layer Options](https://samples.azuremaps.com/tile-layers/tile-layer-options) - Tile layer options
- **Azure Maps**: [Update layer based on map style](https://samples.azuremaps.com/map/update-layer-based-on-map-style) - Style-driven layer updates
- **Azure Maps**: [Video layer](https://samples.azuremaps.com/image-layer/video-layer) - Video on satellite basemap
- **Azure Maps**: [Weighted heat map layer](https://samples.azuremaps.com/heat-map-layer/weighted-heat-map-layer) - Property-weighted intensity
- **Leaflet**: [Azure Maps Leaflet options](https://samples.azuremaps.com/third-party-map-controls/azure-maps-leaflet-options) - Azure Maps tiles in Leaflet
- **Leaflet**: [Change tile style when click](https://tomickigrzegorz.github.io/leaflet-examples/#73.change-tile-style-when-click) - Dynamic tile style switching
- **Leaflet**: [Control layers outside the map](https://tomickigrzegorz.github.io/leaflet-examples/#58.control-layers-outside-the-map) - External layer controls
- **Leaflet**: [Image instead of map](https://tomickigrzegorz.github.io/leaflet-examples/#07.image-instead-of-map) - Image overlay as base layer
- **Leaflet**: [Image on map](https://tomickigrzegorz.github.io/leaflet-examples/#43.image-on-map) - Overlay images on the map
- **Leaflet**: [Multiple tile layers](https://tomickigrzegorz.github.io/leaflet-examples/#34.multiple-tile-layers) - Switch between tile providers
- **Leaflet**: [Render Azure Maps in Leaflet](https://samples.azuremaps.com/third-party-map-controls/render-azure-maps-in-leaflet) - Azure Maps raster in Leaflet
- **Leaflet**: [Store plan - full project](https://tomickigrzegorz.github.io/leaflet-examples/#52.full-project) - OSM + image overlay combination
- **Leaflet**: [TileLayer](https://tomickigrzegorz.github.io/leaflet-examples/#17.TileLayer) - Custom tile layer configuration
- **Leaflet**: [Tiles gray](https://tomickigrzegorz.github.io/leaflet-examples/#48.tiles-gray) - Grayscale tile style
- **Leaflet**: [PMTiles protocol in Leaflet](https://protomaps.com/) - PMTiles single-file archive support
- **Leaflet**: [WMS source integration](https://leafletjs.com/reference.html#tilelayer-wms) - Web Map Service tile layer
- **MapLibre**: [Add a canvas source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-canvas-source) - HTML canvas as source
- **MapLibre**: [Add a COG raster source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-cog-raster-source) - Cloud Optimized GeoTIFF
- **MapLibre**: [Add a custom style layer](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-custom-style-layer) - Custom WebGL rendering
- **MapLibre**: [Add a hillshade layer](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-hillshade-layer) - Hillshade from DEM
- **MapLibre**: [Add a new layer below labels](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-new-layer-below-labels) - Layer ordering
- **MapLibre**: [Add a raster tile source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-raster-tile-source) - Third-party raster tiles
- **MapLibre**: [Add a stretchable image to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-stretchable-image-to-the-map) - 9-slice stretchable image
- **MapLibre**: [Add a vector tile source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-vector-tile-source) - Vector tile source
- **MapLibre**: [Add a WMS source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-wms-source) - Web Map Service
- **MapLibre**: [Animate a series of images](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-series-of-images) - Image sequence animation
- **MapLibre**: [Change a layer's color with buttons](https://maplibre.org/maplibre-gl-js/docs/examples/change-a-layers-color-with-buttons) - Button-driven color change
- **MapLibre**: [Create a heatmap layer](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-heatmap-layer) - Heatmap visualization
- **MapLibre**: [Display a map with MLT](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-map-with-mlt) - MapLibre Tiles format
- **MapLibre**: [Display a satellite map](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-satellite-map) - Satellite imagery basemap
- **MapLibre**: [Display Map Performance Metrics](https://maplibre.org/maplibre-gl-js/docs/examples/display-performance-metrics) - FPS and tile stats
- **MapLibre**: [Filter within a Layer](https://maplibre.org/maplibre-gl-js/docs/examples/filter-within-a-layer) - Layer-based filtering
- **MapLibre**: [PMTiles source and protocol](https://maplibre.org/maplibre-gl-js/docs/examples/pmtiles-source-and-protocol) - PMTiles single-file archives
- **MapLibre**: [Use a fallback image](https://maplibre.org/maplibre-gl-js/docs/examples/use-a-fallback-image) - Error handling for tiles

---

## Markers, Icons & Clusters

- **Azure Maps**: [Add a symbol layer](https://samples.azuremaps.com/symbol-layer/add-a-symbol-layer) - Basic symbol layer
- **Azure Maps**: [All built-in icon templates as HTML markers](https://samples.azuremaps.com/html-markers/all-built-in-icon-templates-as-html-markers) - Icon template gallery
- **Azure Maps**: [All built-in icon templates as symbols](https://samples.azuremaps.com/symbol-layer/all-built-in-icon-templates-as-symbols) - Built-in icon templates
- **Azure Maps**: [Animate to new position of marker](https://samples.azuremaps.com/animations/animate-to-new-position-of-marker) - Marker position transition
- **Azure Maps**: [Bouncing marker animation](https://samples.azuremaps.com/animations/bouncing-marker-animation) - CSS bouncing marker
- **Azure Maps**: [Cluster aggregate average values](https://samples.azuremaps.com/bubble-layer/cluster-aggregate-average-values) - Cluster aggregation
- **Azure Maps**: [Cluster aggregates](https://samples.azuremaps.com/bubble-layer/cluster-aggregates) - Custom cluster properties
- **Azure Maps**: [Clustered pie chart HTML markers](https://samples.azuremaps.com/html-markers/clustered-pie-chart-html-markers) - Pie chart clusters
- **Azure Maps**: [CSS styled HTML marker](https://samples.azuremaps.com/html-markers/css-styled-html-marker) - CSS-based markers
- **Azure Maps**: [Data-driven symbol icons](https://samples.azuremaps.com/symbol-layer/data-driven-symbol-icons) - Multiple custom icons
- **Azure Maps**: [Data-driven symbol layer styling](https://samples.azuremaps.com/symbol-layer/data-driven-symbol-layer-styling) - Property-based styling
- **Azure Maps**: [Draggable HTML marker](https://samples.azuremaps.com/html-markers/draggable-html-marker) - Draggable markers
- **Azure Maps**: [Draggable Symbols](https://samples.azuremaps.com/symbol-layer/draggable-symbols) - Draggable symbol layer
- **Azure Maps**: [Drop markers on interval](https://samples.azuremaps.com/animations/drop-markers-on-interval) - Interval marker drops
- **Azure Maps**: [Drop multiple markers animation](https://samples.azuremaps.com/animations/drop-multiple-markers-animation) - Batch marker drops
- **Azure Maps**: [Expanding Spider Clusters](https://samples.azuremaps.com/symbol-layer/expanding-spider-clusters) - Spider cluster layout
- **Azure Maps**: [HTML marker events](https://samples.azuremaps.com/html-markers/html-marker-events) - Marker event handling
- **Azure Maps**: [HTML marker pulse animation](https://samples.azuremaps.com/animations/html-marker-pulse-animation) - CSS pulse effect
- **Azure Maps**: [HTML marker with custom SVG template](https://samples.azuremaps.com/html-markers/html-marker-with-custom-svg-template) - SVG template markers
- **Azure Maps**: [Simple HTML Marker](https://samples.azuremaps.com/html-markers/simple-html-marker) - Basic HTML marker
- **Azure Maps**: [Simple HTML marker animation](https://samples.azuremaps.com/animations/simple-html-marker-animation) - Basic marker movement
- **Azure Maps**: [Symbol layer options](https://samples.azuremaps.com/symbol-layer/symbol-layer-options) - All symbol options
- **Leaflet**: [Add data attribute to marker](https://tomickigrzegorz.github.io/leaflet-examples/#67.add-data-attribute-to-marker) - Custom data-* attributes
- **Leaflet**: [Add, move and delete marker](https://tomickigrzegorz.github.io/leaflet-examples/#18.add-move-and-delete-marker) - Full marker CRUD operations
- **Leaflet**: [Adding one marker](https://tomickigrzegorz.github.io/leaflet-examples/#03.adding-one-marker) - Place a single marker
- **Leaflet**: [Awesome markers plugin](https://tomickigrzegorz.github.io/leaflet-examples/#31.Leaflet.awesome-markers) - Font Awesome icon markers
- **Leaflet**: [Center map when click marker](https://tomickigrzegorz.github.io/leaflet-examples/#22.center-map-when-click-marker) - Pan to marker on click
- **Leaflet**: [Checking if the marker is in viewport](https://tomickigrzegorz.github.io/leaflet-examples/#46.checking-if-the-marker-is-in-viewport) - Viewport-based filtering
- **Leaflet**: [Controlling different groups of markers](https://tomickigrzegorz.github.io/leaflet-examples/#08.controlling-different-groups-of-markers) - Toggle marker groups
- **Leaflet**: [Count markers](https://tomickigrzegorz.github.io/leaflet-examples/#62.count-markers) - Display marker count
- **Leaflet**: [Custom marker and popup](https://tomickigrzegorz.github.io/leaflet-examples/#23.custom-marker-and-popup) - Styled popups with custom content
- **Leaflet**: [Draggable markers](https://tomickigrzegorz.github.io/leaflet-examples/#14.dragable-markers) - Drag markers to reposition
- **Leaflet**: [Many markers](https://tomickigrzegorz.github.io/leaflet-examples/#04.many-markers) - Render multiple markers
- **Leaflet**: [Many markers (100K) with Web Worker](https://tomickigrzegorz.github.io/leaflet-examples/#80.many-markers-with-web-worker-1000000) - Web Worker + IndexedDB + RBush
- **Leaflet**: [Marker slide to](https://tomickigrzegorz.github.io/leaflet-examples/#65.marker-slide-to) - Smooth marker transitions
- **Leaflet**: [Markers 60K](https://tomickigrzegorz.github.io/leaflet-examples/#26.markers-60K) - 60K markers with canvas + clustering
- **Leaflet**: [Open popup markercluster from outside](https://tomickigrzegorz.github.io/leaflet-examples/#74.open-popup-markercluster-from-outside) - Trigger cluster popups externally
- **Leaflet**: [Random marker in map bounds](https://tomickigrzegorz.github.io/leaflet-examples/#47.random-marker-in-map-bounds) - Generate markers randomly
- **Leaflet**: [SVG markers with legends](https://tomickigrzegorz.github.io/leaflet-examples/#13.svg-markers-width-legends) - Custom SVG marker icons
- **Leaflet**: [Text below a marker](https://tomickigrzegorz.github.io/leaflet-examples/#71.text-below-a-marker) - Label markers with text
- **MapLibre**: [Add a default marker](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-default-marker) - Basic marker
- **MapLibre**: [Add a generated icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-generated-icon-to-the-map) - Runtime-generated icon
- **MapLibre**: [Add an animated icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-an-animated-icon-to-the-map) - Canvas API animated icon
- **MapLibre**: [Add an icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-an-icon-to-the-map) - External URL icon
- **MapLibre**: [Add custom icons with Markers](https://maplibre.org/maplibre-gl-js/docs/examples/add-custom-icons-with-markers) - Custom marker icons
- **MapLibre**: [Animate a marker](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-marker) - Marker position animation
- **MapLibre**: [Animate symbol to follow the mouse](https://maplibre.org/maplibre-gl-js/docs/examples/animate-symbol-to-follow-the-mouse) - Mouse-following symbol
- **MapLibre**: [Attach a popup to a marker instance](https://maplibre.org/maplibre-gl-js/docs/examples/attach-a-popup-to-a-marker-instance) - Popup bound to marker
- **MapLibre**: [Center the map on a clicked symbol](https://maplibre.org/maplibre-gl-js/docs/examples/center-the-map-on-a-clicked-symbol) - Click-to-center
- **MapLibre**: [Create a draggable Marker](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-marker) - Draggable marker
- **MapLibre**: [Create and style clusters](https://maplibre.org/maplibre-gl-js/docs/examples/create-and-style-clusters) - Marker clustering
- **MapLibre**: [Display a remote SVG symbol](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-remote-svg-symbol) - SVG as symbol layer
- **MapLibre**: [Display HTML clusters with custom properties](https://maplibre.org/maplibre-gl-js/docs/examples/display-html-clusters-with-custom-properties) - Custom cluster popups
- **MapLibre**: [Filter layer symbols using global state](https://maplibre.org/maplibre-gl-js/docs/examples/filter-layer-symbols-using-global-state) - Global state filtering
- **MapLibre**: [Filter symbols by text input](https://maplibre.org/maplibre-gl-js/docs/examples/filter-symbols-by-text-input) - Text-based filtering
- **MapLibre**: [Filter symbols by toggling a list](https://maplibre.org/maplibre-gl-js/docs/examples/filter-symbols-by-toggling-a-list) - List-based filtering
- **MapLibre**: [Generate and add a missing icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/generate-and-add-a-missing-icon-to-the-map) - Dynamic icon generation

---

## Popups & Tooltips

- **Azure Maps**: [Accessible popups](https://samples.azuremaps.com/popups/accessible-popups) - Keyboard-accessible popups
- **Azure Maps**: [Accessible shape selection](https://samples.azuremaps.com/popups/accessible-shape-selection) - Keyboard selection via hidden popups
- **Azure Maps**: [Add a popup with an image](https://samples.azuremaps.com/popups/add-a-popup-with-an-image) - Image in popup
- **Azure Maps**: [All popup options](https://samples.azuremaps.com/popups/all-popup-options) - Full popup options
- **Azure Maps**: [Auto open popup on hover](https://samples.azuremaps.com/popups/auto-open-popup-on-hover) - Auto-hover popup
- **Azure Maps**: [Customize a popup](https://samples.azuremaps.com/popups/customize-a-popup) - Custom popup styling
- **Azure Maps**: [Popup events](https://samples.azuremaps.com/popups/popup-events) - Popup event handling
- **Azure Maps**: [Popup templates](https://samples.azuremaps.com/popups/popup-templates) - Popup templates from properties
- **Azure Maps**: [Popup with DOM element content](https://samples.azuremaps.com/popups/popup-with-dom-element-content) - DOM-element popup content
- **Azure Maps**: [Popup with Media Content](https://samples.azuremaps.com/popups/popup-with-media-content) - Media content popups
- **Azure Maps**: [Popups on Shapes](https://samples.azuremaps.com/popups/popups-on-shapes) - Popups on any shape
- **Azure Maps**: [Popups with leader lines](https://samples.azuremaps.com/popups/popups-with-leader-lines) - Leader line popups
- **Azure Maps**: [Reuse a popup template](https://samples.azuremaps.com/popups/reuse-a-popup-template) - Reusable popup template
- **Azure Maps**: [Show popup on hover](https://samples.azuremaps.com/popups/show-popup-on-hover) - Hover-triggered popup
- **Azure Maps**: [Simple popup](https://samples.azuremaps.com/popups/simple-popup) - Basic popup
- **Leaflet**: [Data on sidebar](https://tomickigrzegorz.github.io/leaflet-examples/#44.data-on-sidebar) - Display data in sidebar
- **Leaflet**: [Dynamic data on sidebar](https://tomickigrzegorz.github.io/leaflet-examples/#75.dynamic-data-on-sidebar) - Live-updating sidebar data
- **Leaflet**: [Follow mouse](https://tomickigrzegorz.github.io/leaflet-examples/#55.follow-mouse) - Tooltip follows cursor
- **Leaflet**: [Popup in a fixed position](https://tomickigrzegorz.github.io/leaflet-examples/#68.popup-in-a-fixed-position) - Fixed-position popup overlay
- **Leaflet**: [Sidebar](https://tomickigrzegorz.github.io/leaflet-examples/#56.sidebar) - Sidebar component
- **Leaflet**: [Sidebar replacing popup](https://tomickigrzegorz.github.io/leaflet-examples/#59.sidebar-replacing-popup) - Sidebar as popup alternative
- **Leaflet**: [Tabs in popup](https://tomickigrzegorz.github.io/leaflet-examples/#51.tabs-in-popup) - Tabbed popup content
- **MapLibre**: [Display a popup](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup) - Basic popup
- **MapLibre**: [Display a popup on click](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-click) - Click-triggered popup
- **MapLibre**: [Display a popup on hover](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover) - Hover-triggered popup
- **MapLibre**: [Show polygon information on click](https://maplibre.org/maplibre-gl-js/docs/examples/show-polygon-information-on-click) - Feature info popup
- **MapLibre**: [Popup with custom HTML layout](https://maplibre.org/maplibre-gl-js/docs/examples/) - Rich HTML popup with tabs/media
- **MapLibre**: [Popup with leader line](https://maplibre.org/maplibre-gl-js/docs/examples/) - Pointer line from popup to feature
- **MapLibre**: [Sidebar panel alongside map](https://maplibre.org/maplibre-gl-js/docs/examples/) - Sidebar as info panel alternative

---

## Routing & Directions

- **Azure Maps**: [Add Arrow along a Path](https://samples.azuremaps.com/line-layer/add-arrows-along-a-path) - Arrow icons along a line
- **Azure Maps**: [Alternate routes with deviation constraints](https://samples.azuremaps.com/services-module/alternate-routes-with-deviation-constraints) - Alternative routes with constraints
- **Azure Maps**: [Animate along a path](https://samples.azuremaps.com/animations/animate-along-a-path) - Symbol along path with controls
- **Azure Maps**: [Animate along a route path](https://samples.azuremaps.com/animations/animate-along-a-route-path) - Timestamp-aware route animation
- **Azure Maps**: [Animate marker along path](https://samples.azuremaps.com/animations/animate-marker-along-path) - HTML marker path animation
- **Azure Maps**: [Calculate a Simple Isochrone](https://samples.azuremaps.com/rest-services/calculate-a-simple-isochrone) - Drive time polygon
- **Azure Maps**: [Calculate a simple route](https://samples.azuremaps.com/services-module/calculate-a-simple-route) - Basic route calculation
- **Azure Maps**: [Calculate concentric isochrones](https://samples.azuremaps.com/spatial-math/calculate-concentric-isochrones) - Concentric isochrone rings
- **Azure Maps**: [Calculate distance](https://samples.azuremaps.com/spatial-math/calculate-distance) - Point-to-point distance
- **Azure Maps**: [Calculate spaced positions along route](https://samples.azuremaps.com/services-module/calculate-spaced-positions-along-route) - Evenly spaced route positions
- **Azure Maps**: [Car vs truck route comparison](https://samples.azuremaps.com/demos/car-vs-truck-route) - Multi-modal routing
- **Azure Maps**: [Create a measuring tool](https://samples.azuremaps.com/drawing-tools-module/create-a-measuring-tool) - Distance/area measurement
- **Azure Maps**: [Draggable route lines](https://samples.azuremaps.com/services-module/draggable-route-lines) - Interactive route editing
- **Azure Maps**: [Filter Data Along Route](https://samples.azuremaps.com/spatial-math/filter-data-along-route) - Buffer-based route filtering
- **Azure Maps**: [Get directions](https://samples.azuremaps.com/rest-services/get-directions) - Route directions
- **Azure Maps**: [Get route range](https://samples.azuremaps.com/rest-services/get-route-range) - Isochrone polygon
- **Azure Maps**: [Multiple routes by mode of travel](https://samples.azuremaps.com/tutorials/truck-route) - Multi-modal route tutorial
- **Azure Maps**: [Route along GeoJSON network](https://samples.azuremaps.com/spatial-analysis/geojson-routing) - Shortest path on GeoJSON network
- **Azure Maps**: [Route Waypoint Optimization](https://samples.azuremaps.com/rest-services/route-waypoint-optimization) - Waypoint optimization
- **Azure Maps**: [Search along route](https://samples.azuremaps.com/rest-services/search-along-route) - Route-based POI search
- **Azure Maps**: [Search for POIs along route](https://samples.azuremaps.com/services-module/search-for-pois-along-route) - POIs along a route
- **Azure Maps**: [Simple REST Directions](https://samples.azuremaps.com/rest-services/simple-rest-directions) - Basic directions between two points
- **Azure Maps**: [Snap points to logical route path](https://samples.azuremaps.com/services-module/snap-points-to-logical-route-path) - Snap to road network
- **Leaflet**: [Arrow marked lines](https://tomickigrzegorz.github.io/leaflet-examples/#77.arrow-marked-lines) - Directional polyline arrows
- **Leaflet**: [Distance between cities](https://tomickigrzegorz.github.io/leaflet-examples/#40.distance-between-cities-on-map) - Distance measurement with autocomplete
- **Leaflet**: [Leaflet Routing Machine](https://tomickigrzegorz.github.io/leaflet-examples/#63.leaflet-routing-machine) - Turn-by-turn routing with OSRM
- **Leaflet**: [Marker tracking with direction indicator](https://tomickigrzegorz.github.io/leaflet-examples/#81.marker-tracking-with-direction-indicator) - Real-time marker tracking
- **Leaflet**: [Isochrone with Turf.js](https://turfjs.org/) - Drive time polygon with Turf.js
- **Leaflet**: [Multi-modal transit routing](https://www.openrouteservice.org/) - Public transit routing via ORS
- **MapLibre**: [Animate a point along a route](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-point-along-a-route) - Turf.js route animation
- **MapLibre**: [Hash routing](https://maplibre.org/maplibre-gl-js/docs/examples/hash-routing) - URL hash sync
- **MapLibre**: [Measure distances](https://maplibre.org/maplibre-gl-js/docs/examples/measure-distances) - Distance measurement
- **MapLibre**: [Turn-by-turn directions](https://www.mapbox.com/navigation) - OSRM/Mapbox Directions API
- **MapLibre**: [Isochrone visualization](https://docs.mapbox.com/isochrone-api/) - Drive time polygons with Mapbox API
- **MapLibre**: [Multi-modal routing comparison](https://openrouteservice.org/) - Car vs bike vs foot routing

---

## Search & Geocoding

- **Azure Maps**: [Address search](https://samples.azuremaps.com/rest-services/address-search) - Forward geocoding
- **Azure Maps**: [Autocomplete](https://samples.azuremaps.com/rest-services/autocomplete) - Address autocomplete
- **Azure Maps**: [Autocomplete search](https://samples.azuremaps.com/rest-services/autocomplete-search) - Search suggestions
- **Azure Maps**: [Fill Address Form with Autocomplete](https://samples.azuremaps.com/rest-services/fill-address-form-with-autocomplete) - Form-filling with autocomplete
- **Azure Maps**: [Fuzzy search](https://samples.azuremaps.com/rest-services/fuzzy-search) - Fuzzy text search
- **Azure Maps**: [Interactive Search Quickstart](https://samples.azuremaps.com/tutorials/interactive-search) - Interactive search tutorial
- **Azure Maps**: [Load POIs as the map moves](https://samples.azuremaps.com/services-module/load-poi-as-the-map-moves) - Dynamic POI loading
- **Azure Maps**: [Nearby search](https://samples.azuremaps.com/rest-services/nearby-search) - POI nearby search
- **Azure Maps**: [Page through POI results](https://samples.azuremaps.com/services-module/page-through-poi-results) - Paginated POI results
- **Azure Maps**: [Search category](https://samples.azuremaps.com/rest-services/search-category) - Category-based search
- **Azure Maps**: [Search for boundaries](https://samples.azuremaps.com/services-module/search-for-boundaries) - Administrative boundary search
- **Azure Maps**: [Search for points of interest](https://samples.azuremaps.com/tutorials/search) - POI search tutorial
- **Azure Maps**: [Simple REST Geocoding Request](https://samples.azuremaps.com/rest-services/simple-rest-geocoding-request) - Basic geocoding
- **Azure Maps**: [Voronoi diagram analysis](https://samples.azuremaps.com/spatial-analysis/voronoi-diagram-analysis) - Voronoi from point set
- **Leaflet**: [Autocomplete on map - button](https://tomickigrzegorz.github.io/leaflet-examples/#50.autocomplete-on-map-button) - Search with autocomplete
- **Leaflet**: [Autocomplete with GeoJSON](https://tomickigrzegorz.github.io/leaflet-examples/#64.autocomplete-with-geojson) - Search within GeoJSON data
- **Leaflet**: [Geocoding addresses (search engine outside map)](https://tomickigrzegorz.github.io/leaflet-examples/#21.geocoding-addresses-search-engine-outside-the-map) - Autocomplete geocoding
- **Leaflet**: [Multi layer search](https://tomickigrzegorz.github.io/leaflet-examples/#45.multi-layer-search) - Search across multiple layers
- **Leaflet**: [Nominatim geocoding](https://nominatim.org/) - OpenStreetMap geocoding
- **Leaflet**: [Pelias geocoding](https://www.elastic.co/guide/en/pelias/current/) - Open-source geocoder
- **MapLibre**: [Geocode with Nominatim](https://maplibre.org/maplibre-gl-js/docs/examples/geocode-with-nominatim) - OpenStreetMap geocoding
- **MapLibre**: [Get coordinates of the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-coordinates-of-the-mouse-pointer) - Mouse coordinate tracking
- **MapLibre**: [Get features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-features-under-the-mouse-pointer) - Feature query on hover
- **MapLibre**: [Search autocomplete with Nominatim](https://nominatim.org/) - Autocomplete search box
- **MapLibre**: [Filter points by search text](https://maplibre.org/maplibre-gl-js/docs/examples/filter-symbols-by-text-input) - Client-side search filtering

---

## Spatial Analysis & Math

- **Azure Maps**: [Add TopoJSON data to the map](https://samples.azuremaps.com/geospatial-files/add-topojson-data-to-the-map) - TopoJSON import
- **Azure Maps**: [Census block group analysis](https://samples.azuremaps.com/spatial-analysis/census-block-group-analysis) - Census data spatial join
- **Azure Maps**: [Convex hull](https://samples.azuremaps.com/spatial-math/convex-hull) - Convex hull computation
- **Azure Maps**: [Extract photo location](https://samples.azuremaps.com/geospatial-files/extract-and-display-photo-location) - EXIF GPS extraction
- **Azure Maps**: [Geofence](https://samples.azuremaps.com/spatial-analysis/geofence) - Geofence detection
- **Azure Maps**: [Introduction to Spatial Math](https://samples.azuremaps.com/spatial-math/introduction-to-spatial-math) - Built-in spatial math functions
- **Azure Maps**: [Point in circle](https://samples.azuremaps.com/spatial-analysis/point-in-circle) - Circle containment
- **Azure Maps**: [Point in polygon](https://samples.azuremaps.com/spatial-analysis/point-in-polygon) - Polygon containment
- **Azure Maps**: [Point in rectangle](https://samples.azuremaps.com/spatial-analysis/point-in-rectangle) - Rectangle containment
- **Azure Maps**: [Simple WFS example](https://samples.azuremaps.com/spatial-io-module/simple-wfs-example) - Web Feature Service query
- **Azure Maps**: [Spatial data gallery](https://samples.azuremaps.com/spatial-io-module/spatial-data-gallery) - Spatial data file types
- **Azure Maps**: [Visualize Excel data](https://samples.azuremaps.com/geospatial-files/visualize-excel-data) - Excel file visualization
- **Azure Maps**: [WFS service explorer](https://samples.azuremaps.com/spatial-io-module/wfs-service-explorer) - WFS explorer tool
- **Leaflet**: [Story map with IntersectionObserver](https://tomickigrzegorz.github.io/leaflet-examples/#36.story-maps-IntersectionObserver) - Scroll-driven story map
- **Leaflet**: [Buffer analysis with Turf.js](https://turfjs.org/) - Create buffer zones around features
- **Leaflet**: [Voronoi diagram with Turf.js](https://turfjs.org/) - Voronoi polygons from points
- **Leaflet**: [Point-in-polygon with Turf.js](https://turfjs.org/) - Spatial containment test
- **Leaflet**: [Geofencing with Turf.js](https://turfjs.org/) - Real-time geofence monitoring
- **Leaflet**: [Union/intersection with Turf.js](https://turfjs.org/) - Polygon boolean operations
- **MapLibre**: [Buffer analysis with Turf.js](https://turfjs.org/) - Create buffer zones around features
- **MapLibre**: [Voronoi diagram with Turf.js](https://turfjs.org/) - Voronoi polygons from points
- **MapLibre**: [Point-in-polygon with Turf.js](https://turfjs.org/) - Spatial containment test
- **MapLibre**: [Union/intersection with Turf.js](https://turfjs.org/) - Polygon boolean operations
- **MapLibre**: [Isoline from raster-dem](https://maplibre.org/maplibre-gl-js/docs/examples/add-contour-lines) - Contour/isoline extraction

---

## Traffic & Navigation

- **Azure Maps**: [Animated traffic flow](https://samples.azuremaps.com/animations/animated-traffic-flow) - Flowing dashed traffic lines
- **Azure Maps**: [Display traffic tiles](https://samples.azuremaps.com/traffic/display-traffic-tiles) - Traffic overlay
- **Azure Maps**: [Get traffic incidents](https://samples.azuremaps.com/traffic/get-traffic-incidents) - Incident markers
- **Azure Maps**: [Show traffic along route](https://samples.azuremaps.com/services-module/show-traffic-along-route) - Traffic info along route
- **Azure Maps**: [Traffic control options](https://samples.azuremaps.com/traffic/traffic-control-options) - Traffic toggle options
- **Azure Maps**: [Traffic controls](https://samples.azuremaps.com/traffic/traffic-controls) - Traffic toggle + legend
- **Azure Maps**: [Traffic flow](https://samples.azuremaps.com/rest-services/traffic-flow) - Live traffic data
- **Azure Maps**: [Traffic Overlay](https://samples.azuremaps.com/traffic/traffic-overlay) - Traffic overlay
- **Azure Maps**: [Traffic Overlay Options](https://samples.azuremaps.com/traffic/traffic-overlay-options) - Traffic overlay options
- **Leaflet**: [TomTom traffic tiles](https://developer.tomtom.com/) - Real-time traffic tile overlay
- **Leaflet**: [HERE traffic flow layer](https://developer.here.com/) - Traffic flow visualization
- **Leaflet**: [Traffic incident markers](https://developer.tomtom.com/) - Incident data on map
- **MapLibre**: [TomTom traffic tiles](https://developer.tomtom.com/) - Real-time traffic tile overlay
- **MapLibre**: [HERE traffic flow layer](https://developer.here.com/) - Traffic flow visualization
- **MapLibre**: [Traffic incident markers](https://developer.tomtom.com/) - Incident data on map

---

## Weather & Sensors

- **Azure Maps**: [Current Air Quality](https://samples.azuremaps.com/weather/current-air-quality) - Air Quality data via REST API
- **Azure Maps**: [Display weather layers](https://samples.azuremaps.com/weather/display-weather-layers) - Weather overlay
- **Azure Maps**: [Forecasted Air Quality](https://samples.azuremaps.com/weather/forecasted-air-quality) - Forecasted AQ data
- **Azure Maps**: [Get current weather at a location](https://samples.azuremaps.com/weather/get-current-weather-at-a-location) - Current conditions REST API
- **Azure Maps**: [Get weather along a route](https://samples.azuremaps.com/weather/get-weather-along-a-route) - Route weather data
- **Azure Maps**: [Historical Weather](https://samples.azuremaps.com/weather/historical-weather) - Historical weather REST API
- **Azure Maps**: [Show weather overlays on a map](https://samples.azuremaps.com/weather/show-weather-overlays-on-a-map) - Radar + infrared overlays
- **Azure Maps**: [Tropical Storm Locations](https://samples.azuremaps.com/weather/tropical-storm-locations) - Tropical storm tracking
- **Leaflet**: [OpenWeatherMap tile layer](https://openweathermap.org/api) - Weather radar tile overlay
- **Leaflet**: [Device orientation sensor](https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events) - Compass heading from device sensors
- **Leaflet**: [Geolocation watch position](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition) - Continuous GPS tracking
- **MapLibre**: [OpenWeatherMap tile layer](https://openweathermap.org/api) - Weather radar tile overlay
- **MapLibre**: [Device orientation sensor](https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events) - Compass heading from device sensors
- **MapLibre**: [Weather data as GeoJSON points](https://openweathermap.org/api) - Weather station markers with data

---

## Potential Turf.js Examples (Advanced Spatial Analysis)

[Turf.js](https://turfjs.org/) is the industry standard for performing advanced geospatial analysis directly in the browser (or Node.js) without needing a backend server like PostGIS. Below are some potential, high-value examples that could be built combining Turf.js with the rendering engines (Leaflet, MapLibre, or Azure Maps):

### 1. Real-Time Geofencing & Alerts
* **Concept**: Track a user's live device location and trigger visual alerts or notifications when they cross boundaries.
* **Turf.js Methods**: `turf.booleanPointInPolygon()`, `turf.booleanCrosses()`
* **Rendering**: MapLibre GL JS (for smooth 60fps tracking) or Azure Maps.

### 2. Client-Side Hexbin Aggregation
* **Concept**: Take a massive dataset of scatter points (e.g., 50,000 taxi drop-offs) and group them into a honeycomb grid to visualize density.
* **Turf.js Methods**: `turf.hexGrid()`, `turf.collect()`, `turf.pointsWithinPolygon()`
* **Rendering**: Mapbox / MapLibre GL JS using data-driven styling (`fill-color` based on count).

### 3. Interactive Route Snapping
* **Concept**: When a user is drawing a custom path or placing markers, automatically snap their cursor to the nearest point on a complex pre-existing road network line.
* **Turf.js Methods**: `turf.nearestPointOnLine()`, `turf.pointToLineDistance()`
* **Rendering**: Leaflet with `Leaflet-Geoman` or MapLibre with `mapbox-gl-draw`.

### 4. Dynamic Catchment Areas (Convex/Concave Hulls)
* **Concept**: Select a group of distributed assets (like delivery trucks or localized outbreaks) and instantly draw a boundary wrapping around them to define an active zone.
* **Turf.js Methods**: `turf.convex()`, `turf.concave()`, `turf.buffer()`
* **Rendering**: Leaflet or MapLibre GL JS for rendering the resulting polygon mask.

### 5. Cadastral Parcel Splitting & Merging
* **Concept**: A web-based land management tool where a user can select two adjacent property polygons to merge them into one, or draw a line through a property to split it into two distinct polygons, instantly recalculating the square footage.
* **Turf.js Methods**: `turf.union()`, `turf.intersect()`, `turf.area()`, and line-splitting utilities.
* **Rendering**: Any renderer, but highly dependent on good drawing controls (Azure Maps Drawing Tools or Leaflet-Geoman).

### 6. Client-Side Topographic / Isoline Generation
* **Concept**: Input a GeoJSON collection of random elevation or temperature points. Generate a topographic contour map directly in the browser.
* **Turf.js Methods**: `turf.tin()` (Triangulated Irregular Network), `turf.isobands()`, `turf.isolines()`
* **Rendering**: Rendered as a vector tile source in MapLibre, with 3D terrain extrusion applied to the resulting polygons for a beautiful 3D topographic view.

### 7. Find Nearest Store with Great Circle Paths
* **Concept**: A store locator that doesn't just list the nearest store, but draws a curved flight-path (great circle arc) from the user's location to the 3 closest stores.
* **Turf.js Methods**: `turf.nearestPoint()`, `turf.greatCircle()`, `turf.distance()`
* **Rendering**: Azure Maps or Leaflet.

## Core Geospatial Algorithms & Math

Underneath the high-level mapping libraries and spatial APIs are fundamental geometric algorithms. Understanding these algorithms is crucial for building custom spatial analysis tools or optimizing map performance:

### Distance & Earth Models
* **Haversine Formula**: The standard mathematical formula to calculate the *great-circle distance* between two points on a sphere given their longitudes and latitudes. It is fast but assumes a perfectly spherical Earth.
* **Vincenty's Formulae**: A highly accurate iterative method to calculate distance between two points on the surface of a spheroid (specifically using the WGS-84 ellipsoid model). It is more computationally expensive than Haversine but accurate to within half a millimeter.

### Point & Polygon Analysis
* **Ray-Casting Algorithm**: The foundational algorithm used to determine if a point is inside a polygon (`Point-in-Polygon`). It works by shooting an imaginary ray from the point in a single direction and counting how many times it intersects the polygon's edges. An odd number means the point is inside; an even number means it is outside.
* **Convex Hull**: An algorithm that finds the smallest convex polygon enclosing a given set of points (imagine stretching a rubber band around a set of pegs). Commonly used to define the bounding area of a clustered dataset.

### Simplification & Smoothing
* **Douglas-Peucker Algorithm**: A line simplification algorithm that reduces the number of points in a complex curve or polygon while preserving its overall shape. Essential for rendering large, complex GeoJSON borders efficiently at lower zoom levels.
* **Chaikin's Algorithm**: A corner-cutting algorithm used to generate smooth curves from a jagged polyline or polygon.

### Space Partitioning & Tessellation
* **Voronoi Diagrams**: An algorithm that partitions a plane into regions based on distance to a specific set of points. Any location within a Voronoi cell is closer to that cell's center point than to any other. Highly useful for generating catchment areas or nearest-neighbor territories.
* **Delaunay Triangulation**: The dual graph of a Voronoi diagram. It connects a set of points into a mesh of triangles such that no point is inside the circumcircle of any triangle. Used for generating 3D terrain meshes (TINs) from scatter points.

### Spatial Indexing & Tree Structures
* **R-Trees**: A tree data structure used for spatial access methods. It groups nearby objects and represents them with their minimum bounding rectangles (MBR). Crucial for quickly querying "what features are visible on the screen right now" without iterating over millions of points. (e.g., `RBush` in JavaScript).
* **K-D Trees**: A space-partitioning data structure for organizing points in a k-dimensional space. Excellent for blazing-fast *nearest-neighbor* searches.
* **Geohashing & Space-Filling Curves**: Algorithms (like Z-order curves or Hilbert curves) that reduce 2D spatial coordinates into a 1D string or integer. This allows databases to perform incredibly fast proximity searches using standard string prefix matching. Modern alternatives include Uber's **H3** (Hexagonal hierarchical spatial index) and Google's **S2** (Spherical geometry).

## Advanced Cross-Library Integrations (Interactive Apps & Editors)

While individual libraries are powerful, combining them unlocks the ability to build production-grade geographic editors, data dashboards, and storytelling experiences. Here are some potential architectures combining multiple libraries:

### 1. Full-Featured GeoJSON Editor & Validator
* **Combination**: `MapLibre GL JS` + `terra-draw` + `Turf.js`
* **Concept**: Build an interactive data creation tool similar to *geojson.io*.
  * **MapLibre** handles the high-performance basemap.
  * **terra-draw** provides uniform, cross-browser drawing tools for lines, polygons, and points.
  * **Turf.js** runs real-time topology validation (e.g., preventing self-intersecting polygons using `turf.kinks`) and live area calculations in the sidebar.

### 2. Massive Scale Vector Tile Explorer
* **Combination**: `Mapbox\/MapLibre GL JS` + `PMTiles`
* **Concept**: Visualize millions of spatial records (e.g., nationwide building footprints or live telematics) entirely in the browser.
  * **PMTiles** allows you to stream massive vector tile datasets directly from an S3 bucket (serverless architecture).
  * **MapLibre** provides the underlying styled basemap and renders the dense vector geometries rapidly using WebGL.

### 3. Scrollytelling & Interactive Data Storytelling
* **Combination**: `MapLibre GL JS` + `IntersectionObserver` (or `ScrollMagic`) + `D3.js`
* **Concept**: Create an immersive journalistic experience.
  * As the user scrolls down an article, **IntersectionObserver** triggers the map camera to smoothly fly (using `map.flyTo`) between different points of interest.
  * **D3.js** renders dynamic charts over the map that animate and update based on the features currently visible in the map's bounding box.

### 4. Real-Time Fleet Tracking & Logistics Dashboard
* **Combination**: `Azure Maps` + `Socket.io` + `Turf.js`
* **Concept**: A logistics dashboard where vehicle positions are streamed live.
  * **Socket.io** streams GPS telemetry to the frontend.
  * **Azure Maps** renders the live markers and overlays live traffic incident data.
  * **Turf.js** locally calculates distance to the nearest warehouse (`turf.distance`) or detects if a truck has entered a delivery geofence (`turf.booleanPointInPolygon`) without requiring backend spatial queries.

### 5. Multi-Modal Routing & Navigation Interface
* **Combination**: `Leaflet` + `Leaflet Routing Machine` + `GraphHopper` API
* **Concept**: Build a custom navigation app for specialized vehicles (e.g., bicycles, RVs).
  * **GraphHopper** acts as the backend routing engine, calculating the fastest path considering elevation and vehicle restrictions.
  * **Leaflet Routing Machine** provides the frontend turn-by-turn instruction UI and draggable waypoints.
  * **Leaflet** renders the UI over top of custom OpenStreetMap tiles.

### 6. Indoor Mapping & Facility Management
* **Combination**: `MapLibre GL JS` + `mapbox-gl-indoor`
* **Concept**: Build an interactive campus or mall directory.
  * Use **MapLibre** to render indoor floor plans.
  * Implement **mapbox-gl-indoor** to give users a UI widget to toggle between different floors (Level 1, Level 2, etc.).
  * Clicking on a room highlights it and opens a custom pop-up to update occupancy metadata or reserve the space.

## Global Geospatial Ecosystem (Across Languages)

Beyond the specific web examples listed above, the broader geospatial ecosystem spans almost every major programming language. Here is a comprehensive overview of the most popular mapping, spatial analysis, and geo-data processing libraries available today:

### 🌐 JavaScript / TypeScript (Web & Node.js)
* **Web Mapping**: [Leaflet](https://leafletjs.com/), [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/), [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/), [OpenLayers](https://openlayers.org/)
* **Spatial Analysis**: [Turf.js](https://turfjs.org/) (Advanced geospatial analysis for browsers and Node), [JSTS](https://github.com/bjornharrtell/jsts)

### 🐍 Python
* **Data Analysis & Processing**: [GeoPandas](https://geopandas.org/) (Extends pandas for spatial data), [Shapely](https://shapely.readthedocs.io/) (Geometry manipulation), [Fiona](https://fiona.readthedocs.io/) (Data reading/writing), [Rasterio](https://rasterio.readthedocs.io/) (Raster data)
* **Interactive Mapping**: [Folium](https://python-visualization.github.io/folium/) (Python wrapper for Leaflet)
* **Visualization**: [Cartopy](https://scitools.org.uk/cartopy/docs/latest/), [Geoplot](https://residentmario.github.io/geoplot/)
* **Advanced**: [PySAL](https://pysal.org/) (Spatial analysis library), [OSMnx](https://osmnx.readthedocs.io/) (Street network analysis), [Pyproj](https://pyproj4.github.io/pyproj/) (Projections)

### 📊 R
* **Core Spatial**: [sf](https://r-spatial.github.io/sf/) (Simple Features), [sp](https://cran.r-project.org/web/packages/sp/) (Legacy spatial classes)
* **Raster Data**: [terra](https://rspatial.github.io/terra/), [raster](https://cran.r-project.org/web/packages/raster/)
* **Mapping**: [tmap](https://github.com/r-tmap/tmap) (Thematic maps), [leaflet](https://rstudio.github.io/leaflet/) (R interface to Leaflet), [mapview](https://r-spatial.github.io/mapview/)

### ☕ Java / JVM
* **Core Libraries**: [GeoTools](https://geotools.org/) (Open source Java GIS toolkit), [JTS Topology Suite](https://github.com/locationtech/jts) (The gold standard for geometry operations)
* **Standards & Processing**: [Apache SIS](https://sis.apache.org/) (Spatial Information System)
* **Routing**: [GraphHopper](https://www.graphhopper.com/) (Fast routing engine)
* **Spatial Search**: [Spatial4j](https://github.com/locationtech/spatial4j)

### ⚙️ C / C++
* **Foundational GIS Libraries**: [GDAL/OGR](https://gdal.org/) (Geospatial Data Abstraction Library - powers almost everything), [GEOS](https://libgeos.org/) (C++ port of JTS)
* **Projections**: [PROJ](https://proj.org/) (Coordinate transformation software)
* **Rendering & Routing**: [Mapnik](https://mapnik.org/) (Map rendering toolkit), [OSRM](http://project-osrm.org/) (Open Source Routing Machine)

### 🐹 Go (Golang)
* **Geometry**: [orb](https://github.com/paulmach/orb) (2D geometry types), [go-spatial/geom](https://github.com/go-spatial/geom)
* **Databases**: [Tile38](https://tile38.com/) (In-memory geolocation data store and spatial index)

### 🦀 Rust
* **Geospatial Core**: [geo](https://github.com/georust/geo) (Geospatial primitives and algorithms), [geo-types](https://crates.io/crates/geo-types)
* **Bindings**: [gdal](https://crates.io/crates/gdal) (Rust bindings for GDAL), [proj](https://crates.io/crates/proj)
* **Indexing**: [h3-rs](https://github.com/rusty-celery/h3-rs) (Uber's H3 hierarchical indexing)

### 📱 Mobile (iOS & Android)
* **Native Maps**: Apple MapKit (iOS), Google Maps SDK (iOS/Android)
* **Open Source / Custom**: [Mapbox Maps SDK](https://docs.mapbox.com/ios/maps/guides/), [OSMDroid](https://github.com/osmdroid/osmdroid) (Android replacement for Google Maps), [CARTO Mobile SDK](https://carto.com/)

### 🗄️ Geospatial Databases & SQL Extensions

To build scalable map applications (like dynamic store locators, fleet tracking, or massive data analysis), you need a database that understands geometry. Here are the standard database plugins and tools for geospatial operations:

#### Relational Databases (SQL)
* **PostgreSQL + [PostGIS](https://postgis.net/)**: The undisputed gold standard for geospatial databases. PostGIS transforms PostgreSQL into a powerhouse spatial database, adding `geometry`/`geography` data types and hundreds of spatial functions (e.g., `ST_Intersects`, `ST_Buffer`, `ST_Distance`).
* **PostgreSQL + [pgRouting](https://pgrouting.org/)**: An extension built on top of PostGIS that provides graph-based geospatial routing algorithms (Dijkstra, A*, Isochrones) directly in the database.
* **SQLite + [SpatiaLite](https://www.gaia-gis.it/fossil/libspatialite/index)**: A robust spatial extension for SQLite. It provides PostGIS-like functionality but in a lightweight, serverless file format. Highly popular for offline mobile map apps (iOS/Android) and portable desktop GIS workflows.
* **DuckDB + [duckdb_spatial](https://duckdb.org/docs/extensions/spatial.html)**: An extremely fast extension for DuckDB designed for geospatial analytics. Perfect for querying massive datasets in Parquet, CSV, or GeoJSON formats locally without setting up a server.

#### NoSQL, Search & In-Memory
* **[MongoDB](https://www.mongodb.com/docs/manual/geospatial-queries/)**: Provides first-class, native support for storing GeoJSON objects. Out-of-the-box, you can easily create 2dsphere indexes and run `$geoIntersects` or `$near` queries for location-based apps.
* **[Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/geo-point.html)**: Excellent for spatial search at scale. Provides `geo_point` and `geo_shape` data types for lightning-fast bounding-box and polygon intersection queries alongside full-text search.
* **[Redis GEO](https://redis.io/docs/data-types/geospatial/)**: Built-in commands (`GEOADD`, `GEORADIUS`, `GEOSEARCH`) for blazing fast, in-memory location-based caching and proximity queries (e.g., finding nearby drivers).
* **[Tile38](https://tile38.com/)**: A dedicated, ultra-fast in-memory spatial database and geofencing server. Excels at live fleet tracking, delivering real-time webhooks when moving objects enter or exit complex polygons.

## Plugins Reference

### Leaflet

- [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) - Cluster nearby markers
- [Leaflet.awesome-markers](https://github.com/lvoogt/Leaflet.awesome-markers) - Font Awesome / Bootstrap icons
- [Leaflet.fullscreen](https://github.com/Leaflet/Leaflet.fullscreen) - Fullscreen control
- [Leaflet.MiniMap](https://github.com/Norkart/Leaflet-MiniMap) - Overview minimap
- [Leaflet.Routing.Machine](https://github.com/perliedman/leaflet-routing-machine) - Route planning
- [Leaflet-Geoman](https://github.com/geoman-io/leaflet-geoman) - Draw & edit geometries
- [Leaflet.Marker.SlideTo](https://github.com/tomickigrzegorz/Leaflet.Marker.SlideTo) - Animate marker movement
- [leaflet-rotation](https://github.com/tomickigrzegorz/leaflet-rotation) - Map rotation
- [Leaflet.heat](https://github.com/Leaflet/Leaflet.heat) - Heatmap layer
- [Turf.js](https://turfjs.org/) - Geospatial analysis
- [Autocomplete](https://github.com/tomickigrzegorz/autocomplete) - Search with suggestions
- [RBush](https://github.com/mourner/rbush) - Spatial index for performance

### MapLibre GL JS

- [mapbox-gl-draw](https://github.com/mapbox/mapbox-gl-draw) - Draw & edit geometries
- [terra-draw](https://github.com/terra-draw/terra-draw) - Multi-shape drawing
- [maplibre-gl-rtl-text](https://github.com/nickkatsios/maplibre-gl-rtl-text) - Right-to-left text
- [Turf.js](https://turfjs.org/) - Geospatial analysis
- [PMTiles](https://protomaps.com/) - Single-file tile archives

### Azure Maps

- [Azure Maps Drawing Tools](https://www.npmjs.com/package/@azuremaps/azuremaps-drawing-tools) - Draw & edit geometries
- [Azure Maps Spatial IO](https://www.npmjs.com/package/@azuremaps/azuremaps-spatial-io) - Import KML, CSV, GeoJSON
- [Azure Maps Animation](https://www.npmjs.com/package/azure-maps-control.animation) - Marker & data animation
- [Azure Maps Control](https://www.npmjs.com/package/azure-maps-control) - Core SDK with layers, controls
- [Azure Maps REST API](https://docs.microsoft.com/rest/api/maps/) - Geocoding, routing, search, traffic
- [Turf.js](https://turfjs.org/) - Geospatial analysis
- [Flowmap.gl](https://github.com/FlowmapBlue/flowmap.gl/) - Flow visualization

---

## Turf.js Examples (Cross-Library)

Turf.js is the standard geospatial analysis library for JavaScript. It works standalone in Node.js or in the browser with any map renderer. Below are potential examples organized by capability, showing both Turf.js alone and combined with map libraries.

### Turf.js Modules Reference

- Category - Modules
- **Measurement** - `area`, `length`, `distance`, `bearing`, `rhumb-distance`, `rhumb-bearing`
- **Transformation** - `buffer`, `bezier-spline`, `simplify`, `clean-coords`, `flip`, `rewind`, `line-offset`
- **Comparison** - `boolean-point-in-polygon`, `boolean-contains`, `boolean-crosses`, `boolean-disjoint`, `boolean-intersects`, `boolean-overlap`, `boolean-touches`, `boolean-within`, `boolean-equal`, `boolean-parallel`, `boolean-valid`
- **Combination** - `union`, `difference`, `intersect`, `dissolve`, `combine`, `collect`, `mask`
- **Aggregation** - `convex`, `concave`, `envelope`, `voronoi`, `hex-grid`, `point-grid`, `rectangle-grid`
- **Interpolation** - `interpolate`, `isobands`, `isolines`, `idw`
- **Centers** - `center`, `center-of-mass`, `centroid`, `center-mean`, `center-median`, `midpoint`
- **Clustering** - `clusters-dbscan`, `clusters-kmeans`
- **Analysis** - `turf-meta`, `quadrat-analysis`, `nearest-neighbor-analysis`, `moran-index`, `directional-mean`, `distance-weight`
- **Nearest** - `nearest-point`, `nearest-point-on-line`, `nearest-point-to-line`, `point-to-line-distance`, `point-to-polygon-distance`
- **Selection** - `points-within-polygon`, `tag`, `sample`
- **Measurement Geometry** - `along`, `line-chunk`, `line-segment`, `line-intersect`, `line-slice`, `line-slice-along`, `line-split`
- **Measurement Polygon** - `polygon-tangents`, `polygon-smooth`, `polygon-to-line`, `line-to-polygon`, `polygonize`
- **Curves** - `great-circle`, `line-arc`, `sector`, `circle`, `ellipse`
- **Generation** - `random`, `destination`, `point-on-feature`, `explode`
- **Gridding** - `hex-grid`, `point-grid`, `rectangle-grid`

---

### Measurement & Distance

| Example | Turf.js Module(s) | Renderer | Description |
|---------|-------------------|----------|-------------|
| Point-to-point distance | `distance` | Leaflet / MapLibre / Azure | Click two points, display distance in km/mi |
| Route length measurement | `length` | Leaflet / MapLibre | Click along a polyline, show cumulative length |
| Bearing calculator | `bearing`, `destination` | Leaflet | Click origin + destination, show bearing angle |
| Area calculator | `area` | Any | Draw polygon, show area in m²/km²/acres |
| Distance from point to line | `point-to-line-distance` | MapLibre | Drag point, show shortest distance to route |
| Distance from point to polygon | `point-to-polygon-distance` | MapLibre | Drag point, show distance to nearest polygon edge |
| Midpoint finder | `midpoint` | Leaflet | Click two points, place marker at midpoint |

### Buffer & Zone Analysis

| Example | Turf.js Module(s) | Renderer | Description |
|---------|-------------------|----------|-------------|
| <sup>🆕</sup> Point buffer zone | `buffer` | Leaflet / MapLibre / Azure | Click point, draw radius buffer (km/mi) |
| <sup>🆕</sup> Dynamic radius buffer | `buffer` | MapLibre | Slider to adjust buffer radius in real-time |
| <sup>🆕</sup> Multi-ring buffer | `buffer` | Leaflet / MapLibre | Concentric rings (1km, 5km, 10km) around POI |
| <sup>🆕</sup> Line buffer (corridor) | `buffer` | MapLibre | Buffer around a polyline route |
| <sup>🆕</sup> Polygon buffer (inset/outset) | `buffer` | Any | Expand or shrink polygon boundary |
| <sup>🆕</sup> Buffer intersection | `buffer`, `intersect` | MapLibre | Find area overlap between two buffered zones |
| <sup>🆕</sup> Buffer difference | `buffer`, `difference` | MapLibre | Subtract one buffer from another |

### Spatial Queries & Boolean Operations

| Example | Turf.js Module(s) | Renderer | Description |
|---------|-------------------|----------|-------------|
| Point-in-polygon test | `boolean-point-in-polygon` | Leaflet / MapLibre | Drag point, highlight containing polygon |
| Points within polygon | `points-within-polygon` | Leaflet / MapLibre | Select markers inside drawn area |
| Polygon intersection | `intersect` | MapLibre / Azure | Draw two polygons, show overlap area |
| Polygon difference | `difference` | MapLibre | Cut one polygon from another |
| Polygon union | `union` | MapLibre | Merge two overlapping polygons |
| Line-polygon intersection | `line-intersect`, `intersect` | MapLibre | Find where road crosses zone boundary |
| Boolean contains | `boolean-contains` | Any | Check if polygon fully contains another |
| Boolean overlaps | `boolean-overlap` | Any | Check if two polygons overlap |
| Boolean crosses | `boolean-crosses` | Any | Check if line crosses polygon boundary |
| Boolean disjoint | `boolean-disjoint` | Any | Check if two features don't touch |

### Voronoi, Hex Grids & Tessellation

| Example | Turf.js Module(s) | Renderer | Description |
|---------|-------------------|----------|-------------|
| Voronoi diagram from points | `voronoi` | MapLibre / Leaflet | Generate service areas from store locations |
| Point grid sampling | `point-grid`, `tag` | MapLibre | Grid of sample points, tag with polygon properties |
| Rectangle grid analysis | `rectangle-grid` | Leaflet / MapLibre | Overlay grid, aggregate data per cell |
| Concave hull from points | `concave` | MapLibre | Draw boundary around cluster of points |
| Convex hull from points | `convex` | Leaflet / MapLibre / Azure | Enclose points in smallest convex polygon |
| Envelope bounding box | `envelope` | Any | Draw bounding box around feature collection |
| Dissolve adjacent polygons | `dissolve` | MapLibre | Merge touching polygons into single feature |
| Polygon mask | `mask` | MapLibre | Invert polygon to create mask overlay |

### Interpolation & Surface Analysis

| Example | Turf.js Module(s) | Renderer | Description |
|---------|-------------------|----------|-------------|
| Isoline contours | `isolines` | MapLibre / Azure | Elevation contour lines from point data |
| Isoband filled contours | `isobands` | MapLibre / Azure | Filled elevation/temperature bands |
| Nearest neighbor analysis | `nearest-neighbor-analysis` | Any | Statistical analysis of point distribution |
| Moran's I spatial autocorrelation | `moran-index` | Any | Detect clustering patterns in data |
| Quadrat analysis | `quadrat-analysis` | MapLibre | Grid-based density analysis |

### Clustering & Classification

| Example | Turf.js Module(s) | Renderer | Description |
|---------|-------------------|----------|-------------|
| K-Means clustering | `clusters-kmeans` | Leaflet / MapLibre | Group points into k clusters |
| DBSCAN clustering | `clusters-dbscan` | Leaflet / MapLibre | Density-based spatial clustering |
| Cluster with heatmap | `clusters-kmeans` | MapLibre + heatmap layer | Cluster points, show as heatmap |
| Cluster with choropleth | `clusters-kmeans`, `convex` | MapLibre | Cluster points, draw hull per cluster |
| Weighted center median | `center-median` | MapLibre | Find optimal facility location |
| Directional mean | `directional-mean` | MapLibre | Show average direction of line features |

### Route & Path Analysis

| Example | Turf.js Module(s) | Renderer | Description |
|---------|-------------------|----------|-------------|
| Points along route | `along` | Leaflet / MapLibre | Place markers at equal intervals along path |
| Route segment extraction | `line-slice-along` | MapLibre | Extract portion of route between distances |
| Route splitting | `line-split` | MapLibre | Split route at intersection point |
| Route chunks | `line-chunk` | MapLibre | Divide route into equal-length segments |
| Nearest point on route | `nearest-point-on-line` | Leaflet / MapLibre | Snap location to nearest point on road |
| Route waypoints from polygon | `tag`, `points-within-polygon` | MapLibre | Find all waypoints inside service zone |
| <sup>NECT</sup> Route corridor | `buffer`, `line-to-polygon` | MapLibre | Create corridor polygon around route |
| Shortest path | `shortest-path` | MapLibre | Path between two points avoiding obstacles |

### Geofencing & Proximity

| Example | Turf.js Module(s) | Renderer | Description |
|---------|-------------------|----------|-------------|
| Geofence alert system | `boolean-point-in-polygon` | Leaflet / MapLibre | Monitor device location against zone |
| Nearest POI finder | `nearest-point` | Leaflet / MapLibre | Find closest marker to user location |
| Proximity alert circles | `circle`, `boolean-intersects` | MapLibre | Alert when points enter radius |
| Service area analysis | `buffer`, `intersect` | MapLibre | Overlap of multiple service radii |
| Drive time polygon | `boolean-point-in-polygon` + OSRM | MapLibre | Isochrone from routing API + Turf filter |
| Facility location optimizer | `center-median`, `distance` | MapLibre | Find optimal site using weighted median |

### Geometry Generation & Manipulation

| Example | Turf.js Module(s) | Renderer | Description |
|---------|-------------------|----------|-------------|
| Bezier spline curves | `bezier-spline` | Leaflet / MapLibre | Smooth curves through waypoints |
| Circle generation | `circle` | Leaflet / MapLibre / Azure | Generate circle polygon from center + radius |
| Ellipse generation | `ellipse` | MapLibre | Draw ellipse from center + axes + rotation |
| Sector generation | `sector` | MapLibre | Draw pie/wedge shape |
| Polygon smoothing | `polygon-smooth` | MapLibre | Smooth jagged polygon boundaries |
| Polygon simplification | `simplify` | Any | Reduce polygon vertex count |
| Coordinate cleanup | `clean-coords` | Any | Remove duplicate vertices |
| Polygon tangent lines | `polygon-tangents` | MapLibre | Tangent lines from point to polygon |
| Line offset | `line-offset` | Leaflet / MapLibre | Create parallel offset line |
| Line to polygon | `line-to-polygon` | MapLibre | Convert closed line to polygon |
| Polygon to line | `polygon-to-line` | MapLibre | Extract polygon boundary as line |
| Polygonize from lines | `polygonize` | MapLibre | Create polygons from intersecting lines |
| Explode multi-geometry | `explode` | Any | Split MultiPolygon into individual polygons |
| Random point generation | `random` | Leaflet / MapLibre | Generate random points within bounds |
| Random polygon generation | `random` | MapLibre | Generate random polygon features |
| Destination point | `destination` | Leaflet / MapLibre | Calculate point at bearing + distance |

### Line & Edge Analysis

| Example | Turf.js Module(s) | Renderer | Description |
|---------|-------------------|----------|-------------|
| Line intersection finder | `line-intersect` | Leaflet / MapLibre | Find all crossing points of two lines |
| Line segment extraction | `line-segment` | MapLibre | Extract individual segments from polyline |
| Line overlap detection | `line-overlap` | MapLibre | Find shared segments between two lines |
| Kink detection | `kinks` | MapLibre | Find self-intersections in polygon |
| Directional mean lines | `directional-mean` | MapLibre | Show average orientation of line set |
| Point on line test | `boolean-point-on-line` | Any | Check if point lies exactly on line |
| Point on feature | `point-on-feature` | Any | Snap point to nearest feature |

### Complex Multi-Module Workflows

| Example | Turf.js Modules | Renderer | Description |
|---------|-----------------|----------|-------------|
| Service area comparison | `buffer`, `intersect`, `area` | MapLibre | Compare overlapping service areas |
| Delivery zone optimizer | `voronoi`, `intersect`, `area` | MapLibre | Optimize delivery boundaries |
| Catchment area analysis | `buffer`, `dissolve`, `area` | MapLibre | Merge buffers, calculate total coverage |
| Route impact assessment | `buffer`, `intersect`, `tag` | MapLibre | Find features affected by route corridor |
| Spatial join visualization | `tag`, `collect`, `clusters-kmeans` | Leaflet / MapLibre | Join datasets, cluster, visualize |
| Isochrone from routing + Turf | `boolean-point-in-polygon`, `buffer` | MapLibre | Filter route data by time polygon |
| Heatmap from hex grid | `hex-grid`, `points-within-polygon`, `collect` | MapLibre + heatmap | Aggregate points into hex cells, show density |
| Land use classifier | `intersect`, `area`, `dissolve` | MapLibre | Classify zones by area overlap |
| Market area analysis | `voronoi`, `convex`, `nearest-point` | MapLibre | Service area per store, nearest store lookup |
| Route optimization visualization | `along`, `nearest-point-on-line`, `buffer` | MapLibre | Show stops along route with service radius |
| Flood zone analysis | `isobands`, `intersect`, `dissolve` | MapLibre / Azure | Overlay elevation bands with property zones |

### Standalone (No Map Renderer)

- Example: Turf.js Modules - Description
- GeoJSON data validator: `boolean-valid`, `kinks`, `clean-coords` - Validate and clean GeoJSON features
- Batch distance calculator: `distance`, `bearing`, `length` - Process CSV of coordinates, output distances
- Spatial statistics report: `moran-index`, `nearest-neighbor-analysis`, `quadrat-analysis` - Generate spatial analysis report
- GeoJSON optimizer: `simplify`, `clean-coords`, `rewind` - Reduce file size, fix winding order
- Coordinate converter: `projection` - Convert between projections
- Grid generator: `hex-grid`, `point-grid`, `rectangle-grid` - Generate grids for analysis or sampling
- Random test data generator: `random` - Generate random points/polygons for testing
- Polygon area calculator: `area` - Batch calculate areas of GeoJSON polygons
- Line length calculator: `length` - Batch calculate lengths of GeoJSON lines
- Point classifier: `boolean-point-in-polygon`, `tag` - Classify points by containing polygon

---

## Multi-Library Combinations

Real-world interactive map applications rarely use a single library. Below are potential examples combining multiple packages into full-featured interfaces, editors, and creation tools.

### Legend

- **Renderer**: Map rendering library (Leaflet, MapLibre, Azure Maps, OpenLayers)
- **Analysis**: Turf.js, D3-geo, deck.gl (non-3D layers)
- **Drawing**: Leaflet-Geoman, mapbox-gl-draw, terra-draw
- **Data**: PMTiles, Martin, GeoServer, PostGIS

---

### Interactive Geometry Editor

| Example | Libraries | Description |
|---------|-----------|-------------|
| <sup>🆕</sup> Full geo editor (create/edit/export) | Leaflet + Leaflet-Geoman + Turf.js + shpwrite | Draw, edit, validate, export to GeoJSON/Shapefile/KML |
| <sup>🆕</sup> Vector tile editor | MapLibre + mapbox-gl-draw + Turf.js | Edit features on vector tile basemap |
| <sup>🆕</sup> Multi-format editor | MapLibre + terra-draw + Turf.js + togeojson | Import KML/GPX, edit, export GeoJSON |
| <sup>🆕</sup> CAD-like map editor | OpenLayers + Turf.js + OpenLayers Draw | Precision drawing with coordinate input |
| <sup>🆕</sup> Collaborative geo editor | MapLibre + terra-draw + Yjs + WebSocket | Real-time collaborative editing |
| <sup>🆕</sup> Satellite imagery digitizer | MapLibre + mapbox-gl-draw + Turf.js + COG raster | Trace features on satellite imagery |
| <sup>🆕</sup> Building footprint editor | MapLibre + mapbox-gl-draw + Turf.js | Edit OSM building polygons with snap-to-grid |
| <sup>🆕</sup> Road network editor | MapLibre + mapbox-gl-draw + OSRM | Edit road network, recompute routing graph |

### Data Visualization Dashboard

| Example | Libraries | Description |
|---------|-----------|-------------|
| <sup>🆕</sup> Vector tile data viz | MapLibre + PMTiles + Martin + PostGIS | Self-hosted vector tile pipeline |

### Story Map & Narrative

| Example | Libraries | Description |
|---------|-----------|-------------|
| <sup>🆕</sup> Scroll-driven story map | MapLibre + IntersectionObserver + Turf.js | Fly-to on scroll, data updates |
| <sup>🆕</sup> Guided tour map | MapLibre + Shepherd.js + Turf.js | Step-by-step guided exploration |
| <sup>🆕</sup> Photo essay on map | Leaflet + Lightbox + Turf.js | Geo-tagged photo narrative |

### Geospatial Analysis Tool

| Example | Libraries | Description |
|---------|-----------|-------------|
| <sup>🆕</sup> Buffer/intersect tool | MapLibre + Leaflet-Geoman + Turf.js | Create buffers, find intersections |
| <sup>🆕</sup> Voronoi service area tool | MapLibre + Turf.js (voronoi, convex, area) | Generate service areas from points |
| <sup>🆕</sup> Route impact analyzer | MapLibre + Turf.js (buffer, intersect, tag) + OSRM | Find features affected by route |
| <sup>🆕</sup> Coverage gap finder | MapLibre + Turf.js (hex-grid, boolean-point-in-polygon) | Find unserved areas |
| <sup>🆕</sup> Isochrone builder | MapLibre + Valhalla/OSRM + Turf.js (boolean-point-in-polygon) | Drive-time polygons |
| <sup>🆕</sup> Spatial join tool | MapLibre + Turf.js (tag, collect, points-within-polygon) | Join datasets spatially |
| <sup>🆕</sup> Elevation profile tool | MapLibre + Turf.js (along, destination) + DEM tiles | Cross-section elevation along route |
| <sup>🆕</sup> Geofence builder | MapLibre + terra-draw + Turf.js (boolean-point-in-polygon) | Create and test geofences |

### Real-Time & Live Tracking

| Example | Libraries | Description |
|---------|-----------|-------------|
| <sup>🆕</sup> GPS trace replay | MapLibre + Leaflet.Marker.SlideTo + Turf.js (along) | Animate historical GPS trace |
| <sup>🆕</sup> Weather radar overlay | MapLibre + OpenWeatherMap tiles + Turf.js | Live weather + spatial filtering |
| <sup>🆕</sup> Traffic flow monitor | MapLibre + TomTom tiles + Turf.js (buffer) | Traffic + incident proximity alerts |
| <sup>🆕</sup> Earthquake monitor | MapLibre + USGS feed + Turf.js (buffer) | Real-time seismic activity |

### Offline & Progressive Web App

| Example | Libraries | Description |
|---------|-----------|-------------|
| <sup>🆕</sup> Offline-first map app | MapLibre + PMTiles + Service Worker + IndexedDB | Full offline vector map |
| <sup>🆕</sup> Field data collector | Leaflet + Leaflet.Offline + Turf.js + IndexedDB | Collect points offline, sync later |
| <sup>🆕</sup> Offline routing app | MapLibre + Valhalla (WASM) + PMTiles | Turn-by-turn without internet |
| <sup>🆕</sup> Offline geofencing | MapLibre + Turf.js (boolean-point-in-polygon) + Service Worker | Geofence alerts offline |
| <sup>🆕</sup> Cached tile manager | MapLibre + Cache API + PMTiles | Intelligent tile caching |
| <sup>🆕</sup> Offline survey tool | Leaflet + Leaflet-Geoman + Turf.js + IndexedDB | Survey form + geometry collection offline |

### Print & Export

| Example | Libraries | Description |
|---------|-----------|-------------|
| <sup>🆕</sup> Map PDF exporter | MapLibre + jsPDF + canvas.toBlob | Export current view as PDF |
| <sup>🆕</sup> High-res map image | MapLibre + html2canvas + Turf.js | Print-quality map export |
| <sup>🆕</sup> GeoJSON report generator | MapLibre + Turf.js + pdfmake | Generate PDF report with map + analysis |
| <sup>🆕</sup> Shapefile exporter | MapLibre + shpwrite + Turf.js | Export drawn features as Shapefile |
| <sup>🆕</sup> KML/GPX exporter | MapLibre + tokml + Turf.js | Export to Google Earth format |
| <sup>🆕</sup> Map series generator | MapLibre + Puppeteer + Turf.js | Batch generate maps for multiple regions |

### Geo Calculation & Algorithms

| Example | Libraries | Description |
|---------|-----------|-------------|
| <sup>🆕</sup> Convex hull computation | Turf.js (convex) | Smallest convex polygon enclosing points |
| <sup>🆕</sup> Concave hull computation | Turf.js (concave) | Tight-fitting boundary around point clusters |
| <sup>🆕</sup> Voronoi diagram generation | Turf.js (voronoi) | Service areas from seed points |
| <sup>🆕</sup> Delaunay triangulation | Turf.js (voronoi dual) | Triangulate point sets for mesh generation |
| <sup>🆕</sup> Hex grid tessellation | Turf.js (hex-grid) | Generate hexagonal bins for analysis |
| <sup>🆕</sup> Point grid sampling | Turf.js (point-grid) | Regular grid of sample points |
| <sup>🆕</sup> Rectangle grid overlay | Turf.js (rectangle-grid) | Grid cells for spatial aggregation |
| <sup>🆕</sup> K-Means spatial clustering | Turf.js (clusters-kmeans) | Partition points into k groups |
| <sup>🆕</sup> DBSCAN density clustering | Turf.js (clusters-dbscan) | Density-based spatial clustering |
| <sup>🆕</sup> Nearest neighbor analysis | Turf.js (nearest-neighbor-analysis) | Clark-Evans index of point pattern |
| <sup>🆕</sup> Moran's I autocorrelation | Turf.js (moran-index) | Spatial autocorrelation statistic |
| <sup>🆕</sup> Quadrat analysis | Turf.js (quadrat-analysis) | Grid-based density distribution test |
| <sup>🆕</sup> Directional mean | Turf.js (directional-mean) | Average orientation of line features |
| <sup>🆕</sup> Distance weight matrix | Turf.js (distance-weight) | Spatial weight matrix from distances |
| <sup>🆕</sup> IDW interpolation | Turf.js (interpolate) | Inverse distance weighted surface |
| <sup>🆕</sup> Isoline contour generation | Turf.js (isolines) | Contour lines from point values |
| <sup>🆕</sup> Isoband generation | Turf.js (isobands) | Filled contour bands from point values |
| <sup>🆕</sup> Buffer zone generation | Turf.js (buffer) | Proximity zones around features |
| <sup>🆕</sup> Multi-ring buffer | Turf.js (buffer x3) | Concentric proximity rings |
| <sup>🆕</sup> Polygon union | Turf.js (union) | Merge overlapping polygons |
| <sup>🆕</sup> Polygon difference | Turf.js (difference) | Subtract one polygon from another |
| <sup>🆕</sup> Polygon intersection | Turf.js (intersect) | Find overlapping area |
| <sup>🆕</sup> Polygon dissolve | Turf.js (dissolve) | Merge touching polygons |
| <sup>🆕</sup> Polygon mask | Turf.js (mask) | Invert polygon for exclusion zone |
| <sup>🆕</sup> Centroid computation | Turf.js (centroid, center-of-mass) | Geometric center of features |
| <sup>🆕</sup> Weighted center median | Turf.js (center-median) | Optimal facility location |
| <sup>🆕</sup> Center of mean position | Turf.js (center-mean) | Average coordinate position |
| <sup>🆕</sup> Midpoint calculation | Turf.js (midpoint) | Exact midpoint between two points |
| <sup>🆕</sup> Point-on-line snapping | Turf.js (nearest-point-on-line) | Snap point to nearest line position |
| <sup>🆕</sup> Line intersection detection | Turf.js (line-intersect) | Find all crossing points |
| <sup>🆕</sup> Self-intersection detection | Turf.js (kinks) | Find polygon/line self-crossings |
| <sup>🆕</sup> Polygon area calculation | Turf.js (area) | Geodesic area in square meters |
| <sup>🆕</sup> Line length calculation | Turf.js (length) | Geodesic length in meters/km |
| <sup>🆕</sup> Distance matrix | Turf.js (distance) | Pairwise distance between all points |
| <sup>🆕</sup> Bearing calculation | Turf.js (bearing) | Initial bearing between two points |
| <sup>🆕</sup> Destination point | Turf.js (destination) | Point at bearing + distance |
| <sup>🆕</sup> Great circle path | Turf.js (great-circle) | Shortest path on sphere |
| <sup>🆕</sup> Rhumb line path | Turf.js (rhumb-*) | Constant bearing path |
| <sup>🆕</sup> Polygon simplification | Turf.js (simplify) | Douglas-Peucker vertex reduction |
| <sup>🆕</sup> Coordinate cleanup | Turf.js (clean-coords) | Remove duplicate vertices |
| <sup>🆕</sup> Winding order correction | Turf.js (rewind) | Fix polygon winding for rendering |
| <sup>🆕</sup> Point-in-polygon test | Turf.js (boolean-point-in-polygon) | Ray casting containment test |
| <sup>🆕</sup> Point-on-line test | Turf.js (boolean-point-on-line) | Check if point lies on line |
| <sup>🆕</sup> Boolean contains | Turf.js (boolean-contains) | Full containment test |
| <sup>🆕</sup> Boolean overlaps | Turf.js (boolean-overlap) | Partial overlap test |
| <sup>🆕</sup> Boolean crosses | Turf.js (boolean-crosses) | Line-polygon crossing test |
| <sup>🆕</sup> Boolean disjoint | Turf.js (boolean-disjoint) | No-contact test |
| <sup>🆕</sup> Boolean touches | Turf.js (boolean-touches) | Boundary contact test |
| <sup>🆕</sup> Boolean parallel | Turf.js (boolean-parallel) | Line parallelism test |
| <sup>🆕</sup> Spatial join | Turf.js (tag, collect, points-within-polygon) | Join datasets by spatial relationship |
| <sup>🆕</sup> Nearest feature lookup | Turf.js (nearest-point) | Find closest feature to query point |
| <sup>🆕</sup> Point-to-line distance | Turf.js (point-to-line-distance) | Shortest distance to line |
| <sup>🆕</sup> Point-to-polygon distance | Turf.js (point-to-polygon-distance) | Shortest distance to polygon edge |
| <sup>🆕</sup> Route distance calculation | Turf.js (along, length) | Cumulative distance along polyline |
| <sup>🆕</sup> Route segment extraction | Turf.js (line-slice-along) | Extract portion between distances |
| <sup>🆕</sup> Route splitting at point | Turf.js (line-split) | Divide line at intersection |
| <sup>🆕</sup> Equal-interval sampling | Turf.js (line-chunk) | Divide line into equal segments |
| <sup>🆕</sup> Bezier spline smoothing | Turf.js (bezier-spline) | Smooth curve through waypoints |
| <sup>🆕</sup> Polygon smoothing | Turf.js (polygon-smooth) | Smooth jagged polygon edges |
| <sup>🆕</sup> Line offset (parallel) | Turf.js (line-offset) | Create parallel offset line |
| <sup>🆕</sup> Line-to-polygon conversion | Turf.js (line-to-polygon) | Close line into polygon |
| <sup>🆕</sup> Polygon-to-line extraction | Turf.js (polygon-to-line) | Extract boundary as line |
| <sup>🆕</sup> Polygonize from lines | Turf.js (polygonize) | Create polygons from line network |
| <sup>🆕</sup> Explode multi-geometry | Turf.js (explode) | Split MultiPolygon into parts |
| <sup>🆕</sup> Random point generation | Turf.js (random) | Random points within bounds |
| <sup>🆕</sup> Random polygon generation | Turf.js (random) | Random polygon features |
| <sup>🆕</sup> Envelope bounding box | Turf.js (envelope) | Bounding box of feature collection |
| <sup>🆕</sup> Bounding box | Turf.js (bbox) | [minX, minY, maxX, maxY] |
| <sup>🆕</sup> Sector generation | Turf.js (sector) | Pie/wedge shape from center |
| <sup>🆕</sup> Circle polygon generation | Turf.js (circle) | Circle from center + radius |
| <sup>🆕</sup> Ellipse generation | Turf.js (ellipse) | Ellipse from center + axes |
| <sup>🆕</sup> Line arc generation | Turf.js (line-arc) | Arc segment from center + angles |
| <sup>🆕</sup> Tangent lines to polygon | Turf.js (polygon-tangents) | Tangent lines from external point |
| <sup>🆕</sup> Point on surface | Turf.js (point-on-feature) | Guaranteed interior point |
| <sup>🆕</sup> Sample random subset | Turf.js (sample) | Random sample of feature collection |
| <sup>🆕</sup> Planar interpolation | Turf.js (planepoint) | Bilinear interpolation on grid |
| <sup>🆕</sup> Area-weighted interpolation | Turf.js (tobler/Python) | Transfer values between zones |
| <sup>🆕</sup> GeoJSON validation | Turf.js (boolean-valid) | Check geometry validity |
| <sup>🆕</sup> Coordinate projection | Turf.js (projection) | Convert lat/lng to flat plane |
| <sup>🆕</sup> Coordinate flip | Turf.js (flip) | Swap lat/lng coordinates |
| <sup>🆕</sup> Feature cloning | Turf.js (clone) | Deep copy GeoJSON feature |

### Data Pipeline & ETL

| Example | Libraries | Description |
|---------|-----------|-------------|
| <sup>🆕</sup> GeoJSON processor | Turf.js + Node.js + fs | Batch process/transform GeoJSON files |
| <sup>🆕</sup> OSM data extractor | osmium + Turf.js (Node) | Extract features within bounding box |
| <sup>🆕</sup> Shapefile to PMTiles | shpjoin + pmtiles + Node.js | Convert Shapefiles to cloud-native tiles |
| <sup>🆕</sup> CSV to GeoJSON mapper | Turf.js + Papa Parse + Node.js | Geocode CSV, output GeoJSON |
| <sup>🆕</sup> Spatial ETL pipeline | Node.js + Turf.js + GDAL (ogr2ogr) + Martin | Import, transform, serve tiles |
| <sup>🆕</sup> PostGIS tile generator | PostGIS + Martin + TileServer GL | Database to vector tiles |
| <sup>🆕</sup> GeoParquet processor | DuckDB + GeoParquet + Turf.js | Query large geospatial datasets |

### Creative & Experimental

| Example | Libraries | Description |
|---------|-----------|-------------|
| <sup>🆕</sup> Generative map art | MapLibre + D3-geo + Turf.js + Canvas API | Algorithmic map patterns |
| <sup>🆕</sup> Sound map | MapLibre + Tone.js + Turf.js | Audio visualization on map |
| <sup>🆕</sup> Maze generator on map | MapLibre + Terra-draw + Turf.js | Generate and solve mazes from streets |
| <sup>🆕</sup> Timezone visualizer | MapLibre + D3-geo + Turf.js | Interactive timezone boundaries |
| <sup>🆕</sup> Compass rose generator | MapLibre + Turf.js (bearing, destination) + SVG | Beautiful compass overlays |
| <sup>🆕</sup> Historical map overlay | MapLibre + Mapbox Compare + Old Maps API | Compare historical vs modern maps |
| <sup>🆕</sup> Minimap + main map sync | Leaflet + Leaflet.MiniMap + Turf.js | Synchronized dual-map views |

---

### Multi-Library Quick Reference

| Combination | Use Case |
|-------------|----------|
| **MapLibre + Turf.js + terra-draw** | Geometry editor with spatial analysis |
| **Leaflet + Leaflet-Geoman + Turf.js** | Lightweight geo editor |
| **MapLibre + Turf.js (voronoi + convex)** | Service area computation |
| **MapLibre + Turf.js (hex-grid + collect)** | Hex binning and aggregation |
| **MapLibre + Turf.js (buffer + intersect)** | Proximity and overlap analysis |
| **MapLibre + OSRM + Turf.js** | Routing + spatial analysis |
| **MapLibre + Turf.js (clusters-kmeans)** | Point clustering analysis |
| **MapLibre + Turf.js (isobands + isolines)** | Elevation/temperature contours |
| **MapLibre + PMTiles + Martin + PostGIS** | Self-hosted vector tile stack |
| **MapLibre + Yjs + WebSocket** | Collaborative real-time editing |
| **MapLibre + Service Worker + IndexedDB** | Offline-first map app |
| **MapLibre + jsPDF + canvas** | Print/export workflow |
| **MapLibre + Kepler.gl** | Exploratory data analysis |
| **Node.js + Turf.js + GDAL + Martin** | Server-side ETL pipeline |
| **PostGIS + Martin + TileServer GL** | Database to vector tiles |

---

## Libraries by Language

A comprehensive reference of maps/geo libraries across every major programming language.

### JavaScript / TypeScript

#### Interactive Map Rendering
- Library - Description
- [Leaflet](https://leafletjs.com/) - Mobile-friendly interactive maps with raster tiles
- [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/) - WebGL vector map rendering (fork of Mapbox GL JS)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) - WebGL-powered vector maps (proprietary)
- [OpenLayers](https://openlayers.org/) - High-performance maps with raster + vector support
- [Leaflet.VectorGrid](https://github.com/Leaflet/Leaflet.VectorGrid) - Efficient vector tile rendering for Leaflet
- [ESRI ArcGIS JS API](https://developers.arcgis.com/javascript/) - Enterprise GIS mapping SDK
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript) - Google Maps embedding and interaction
- [Here Maps JS API](https://developer.here.com/documentation/javascript-api) - HERE interactive map embedding

#### Map Component Frameworks
- Library - Description
---

### Python

#### Interactive Maps
- Library - Description
- [Folium](https://python-visualization.github.io/folium/) - Leaflet maps in Python (Jupyter friendly)
- [Kepler.gl](https://kepler.gl/) - Geospatial data exploration (Jupyter)
- [IPyleaflet](https://github.com/jupyter-widgets/ipyleaflet) - Leaflet for Jupyter widgets
- [Mapwidget](https://github.com/innogeo/mapwidget) - Interactive map widgets for Jupyter

#### Geospatial Analysis (Core)
- Library - Description
- [GeoPandas](https://geopandas.org/) - Spatial dataframes (Pandas + geometry)
- [Shapely](https://shapely.readthedocs.io/) - Geometric operations (buffer, union, intersection)
- [Fiona](https://fiona.readthedocs.io/) - OGR vector data I/O
- [Rasterio](https://rasterio.readthedocs.io/) - GDAL-based raster I/O
- [GDAL/Python bindings](https://gdal.org/api/python/) - Raster + vector format translation
- [pyproj](https://pyproj4.github.io/pyproj/) - Coordinate transformations (PROJ wrapper)
- [Rtree](https://rtree.readthedocs.io/) - Spatial indexing (R-tree via libspatialindex)
- [PySAL](https://pysal.org/) - Spatial analysis (hotspots, autocorrelation, regression)
- [tobler](https://pysal.org/tobler/) - Areal interpolation
- [mgwr](https://pysal.org/mgwr/) - Geographically weighted regression

#### Routing & Network
- Library - Description
- [OSRM Python bindings](https://github.com/Project-OSRM/osrm-backend) - OSRM routing engine
- [Valhalla Python](https://github.com/valhalla/valhalla) - Valhalla routing engine bindings
- [networkx](https://networkx.org/) - Graph algorithms (used with OSMnx)
- [OSMnx](https://github.com/gboeing/osmnx) - Download + model street networks from OSM
- [Pandana](https://github.com/UDST/pandana) - Urban network analysis

#### Geocoding
- Library - Description
- [geopy](https://geopy.readthedocs.io/) - Geocoding (Nominatim, Google, Bing, etc.)
- [pgeocode](https://github.com/sytelus/pgeocode) - Postal code geocoding
- [geopandas.tools.sjoin](https://geopandas.org/) - Spatial joins

#### OSM Data Processing
- Library - Description
- [PyOsmium](http://osmcode.org/pyosmium/) - PBF/XML processing toolkit
- [osm2geojson](https://github.com/aspectumapp/osm2geojson) - OSM XML/Overpass to GeoJSON
- [overpy](https://pypi.org/project/overpy/) - Overpass API client
- [osmread](https://github.com/dezhin/osmread) - XML and PBF reader
- [imposm](https://github.com/omniscale/imposm3) - OSM data into PostGIS

#### Tile Serving & Rendering
- Library - Description
- [Tileserver GL](https://github.com/mapbox/tileserver-gl) - Vector tile serving
- [Martin](https://github.com/maplibre/martin) - PostGIS/MBTiles vector tile server
- [Kartograph](https://github.com/kartograph/kartograph.py) - Map rendering framework

---

### Java / Kotlin

#### Interactive Maps
- Library - Description
- [osmdroid](https://github.com/osmdroid/osmdroid) - Android map view (OSM-based, replaces MapView v1)
- [OSMBonusPack](https://github.com/osmdroid/OSMBonusPack) - Markers, bubbles, routes, KML for osmdroid
- [JXMapViewer2](https://github.com/petr-panteleyev/jxmapviewer2) - Swing map widget
- [JMapViewer](https://wiki.openstreetmap.org/wiki/JMapViewer) - Java SE map viewer
- [OpenMap](https://openmap.org/) - Java Swing/Java2D mapping toolkit
- [Geotools](https://geotools.org/) - Java GIS toolkit (OGC compliant)
- [GeoTools MapPane](https://docs.geotools.org/) - Swing map rendering component

#### Native Map Rendering
- Library - Description
- [MapLibre Native](https://github.com/maplibre/maplibre-native) - Cross-platform vector/raster tile rendering (Android/iOS/desktop)
- [Tangram ES](https://github.com/tangrams/tangram-es) - OpenGL ES 2D/3D map renderer
- [mapsforge](https://github.com/mapsforge/mapsforge) - Android offline map rendering (OSM data)
- [CartoType](https://cartotype.github.io/cartotype/) - Offline vector map rendering + routing
- [libosmscout](https://github.com/Framstag/libosmscout) - Offline vector map rendering + routing
- [OSMSharp](https://github.com/xivk/osmsharp) - Offline vector map rendering (.NET/Java)
- [GLMap](https://github.com/nickaknudson/android-glmap) - OpenGL ES vector map (Android/iOS)

#### Routing & Navigation
- Library - Description
- [GraphHopper](https://www.graphhopper.com/) - Java routing engine (car, bike, foot)
- [OSRM Java](https://github.com/Project-OSRM/osrm-backend) - OSRM bindings
- [Valhalla](https://github.com/valhalla/valhalla) - C++ routing engine (Java JNI bindings)
- [OpenTripPlanner](https://www.opentripplanner.org/) - Multimodal transit routing
- [Mapbox Navigation Android](https://github.com/mapbox/mapbox-navigation-android) - Turn-by-turn navigation UI
- [MapLibre Navigation Android](https://github.com/maplibre/maplibre-navigation-android) - Turn-by-turn navigation UI

#### Geocoding
- Library - Description
- [Gisgraphy](http://www.gisgraphy.com/) - Java geocoding/reverse geocoding server
- [osm-common](https://github.com/kodapan/osm-common/) - Java OSM API + Nominatim client
- [osmapi](https://github.com/westnordost/osmapi/) - Complete OSM API 0.6 implementation (Java)
- [Pelias Android SDK](https://github.com/pelias/pelias-android-sdk/) - Pelias geocoder for Android

#### OSM Data Processing
- Library - Description
- [libosmium](https://github.com/osmcode/libosmium) - C++ toolkit for OSM data (Java wrappers exist)
- [osm4j](https://github.com/topobyte/osm4j) - Java PBF/XML reader
- [Osmosis](https://github.com/openstreetmap/osmosis) - Java OSM data processing pipeline
- [Atlas](https://github.com/osmlab/atlas) - OSM data integrity checks at scale (Spark)
- [GeoDesk](https://geodesk.com/) - Fast OSM data engine (Java/C++)
- [OSMonaut](https://github.com/MorbZ/OSMonaut/) - Binary OSM file parser
- [parallelpbf](https://github.com/woltapp/parallelpbf) - Multithreaded PBF reader

#### Tile Rendering
- Library - Description
- [Mapnik](https://mapnik.org/) - Server-side 2D map renderer (Python/C++ bindings)
- [TileServer GL](https://github.com/mapbox/tileserver-gl) - Vector tile server (Node.js)
- [pgmapcss](https://github.com/gravitystorm/openstreetmap-carto) - PostgreSQL/PostGIS map styling

#### GIS Libraries
- Library - Description
- [GeoTools](https://geotools.org/) - Java GIS toolkit (OGC standards)
- [JTS](https://locationtech.github.io/jts/) - Java Topology Suite (geometry operations)
- [GeoAPI](https://geoapi.org/) - Java OGC API interfaces

---

### Swift / Objective-C (iOS / macOS)

#### Interactive Maps
- Library - Description
- [Mapbox iOS SDK](https://github.com/mapbox/mapbox-gl-native-ios) - Vector tile rendering with OpenGL ES
- [MapLibre Native iOS](https://github.com/maplibre/maplibre-native) - Open-source fork of Mapbox iOS SDK
- [Apple MapKit](https://developer.apple.com/mapkit/) - Native Apple Maps embedding
- [CartoType iOS](https://cartotype.github.io/cartotype/) - Offline vector maps + routing

#### Routing & Navigation
- Library - Description
- [Mapbox Directions for Swift](https://github.com/mapbox/mapbox-directions-swift) - Directions API client
- [Mapbox Navigation iOS](https://github.com/mapbox/mapbox-navigation-ios) - Turn-by-turn navigation UI
- [MapLibre Navigation iOS](https://github.com/maplibre/maplibre-navigation-ios) - Turn-by-turn navigation UI
- [GraphHopper iOS](https://github.com/graphhopper/directions-api) - GraphHopper routing client

#### Geocoding
- Library - Description
- [Mapbox Geocoder for Swift](https://github.com/mapbox/mapboxgeocoder.swift) - Geocoding client
- [Pelias iOS SDK](https://github.com/pelias/pelias-ios-sdk/) - Pelias geocoder for iOS

#### OSM Data
- Library - Description
- [OSMKit](https://github.com/davidchiles/OSMKit) - PBF/XML parser + Spatialite storage

---

### C# / .NET

#### Interactive Maps
- Library - Description
- [Mapsui](https://github.com/Mapsui/Mapsui) - Cross-platform map control (Xamarin/MAUI/Avalonia)
- [BruTile](https://github.com/BruTile/BruTile) - Tile source abstraction
- [Carto Mobile SDK](https://github.com/CartoDB/mobile-sdk/) - Cross-platform map SDK
- [Xamarin.Forms.GoogleMaps](https://github.com/amay077/Xamarin.Forms.GoogleMaps) - Google Maps for Xamarin.Forms
- [Mapbox SDK for Xamarin](https://github.com/nickaknudson/xamarin-mapbox) - Mapbox for Xamarin

#### Geospatial Analysis
- Library - Description
- [NetTopologySuite](https://github.com/NetTopologySuite/NetTopologySuite) - JTS port (geometry operations)
- [ProjNET](https://github.com/NetTopologySuite/ProjNet) - Coordinate transformations
- [GeoAPI](https://github.com/NetTopologySuite/GeoAPI) - OGC interfaces for .NET
- [SharpMap](https://github.com/SharpMap/SharpMap) - GIS mapping engine
- [DotSpatial](https://github.com/DotSpatial/DotSpatial) - GIS library for .NET

#### Routing
- Library - Description
- [Itinero](https://github.com/itinero/routing) - Open-source .NET routing engine
- [OSRM .NET](https://github.com/pgoettler/osrm-net) - OSRM bindings

#### Geocoding
- Library - Description
- [Nominatim.API](https://github.com/f1ana/Nominatim.API) - Nominatim client for .NET
- [OsmApiClient](https://github.com/blackboxlogic/OsmApiClient) - OSM API v0.6 client

#### OSM Data
- Library - Description
- [OsmSharp](https://github.com/xivk/osmsharp) - OSM data processing + offline rendering
- [OSMJSON.Net](https://github.com/FaFre/OSMJSON.Net) - OSM JSON serialization
- [OsmTagsTranslator](https://github.com/blackboxlogic/OsmTagsTranslator) - SQLite-based tag translation
- [OsmStream](https://github.com/blackboxlogic/OsmStream) - Stream-based OSM data processing

---

### C / C++

#### Map Rendering
- Library - Description
- [Mapnik](https://mapnik.org/) - Industry-standard 2D map renderer
- [MapLibre Native](https://github.com/maplibre/maplibre-native) - Cross-platform vector/raster tile rendering
- [Tangram ES](https://github.com/tangrams/tangram-es) - OpenGL ES 2D/3D map renderer
- [libosmscout](https://github.com/Framstag/libosmscout) - Offline vector maps + routing
- [CartoType](https://cartotype.github.io/cartotype/) - Offline vector maps + routing

#### Geospatial Libraries
- Library - Description
- [GDAL](https://gdal.org/) - Raster + vector geospatial data abstraction
- [OGR](https://gdal.org/ogr/) - Vector data processing (part of GDAL)
- [GEOS](https://libgeos.org/) - Geometry engine (JTS C++ port)
- [PROJ](https://proj.org/) - Coordinate transformations
- [SpatiaLite](https://www.gaia-gis.it/gaia-sins/) - Spatial SQL extension for SQLite
- [libspatialindex](https://github.com/libspatialindex/libspatialindex) - R-tree spatial indexing
- [libosmium](https://github.com/osmcode/libosmium) - Fast OSM data processing toolkit
- [Boost.Geometry](https://www.boost.org/doc/libs/1_85_0/libs/geometry/doc/index.html) - Geometric algorithms in Boost

#### Routing
- Library - Description
- [OSRM](https://github.com/Project-OSRM/osrm-backend) - Open-source routing machine
- [Valhalla](https://github.com/valhalla/valhalla) - Open-source routing engine
- [GraphHopper](https://github.com/graphhopper/graphhopper) - Java routing engine (C++ core)
- [Routino](https://github.com/routino/routino) - Flexible OSM router

#### Tile & Data Formats
- Library - Description
- [libprotobuf](https://github.com/protocolbuffers/protobuf) - Protocol Buffers (used by vector tiles)
- [protozero](https://github.com/mapbox/protozero) - Minimal protobuf decoder (vector tiles)
- [Mapbox Vector Tile spec](https://github.com/mapbox/vector-tile-spec) - MVT format reference

---

### Rust

#### Geospatial Libraries
- Library - Description
- [geo](https://github.com/georust/geo) - Geospatial primitives + algorithms
- [geos](https://github.com/georust/geos) - GEOS bindings (geometry operations)
- [proj](https://github.com/georust/proj) - PROJ bindings (coordinate transforms)
- [geo-types](https://github.com/georust/geo-types) - Core geometry types
- [geojson](https://github.com/georust/geojson) - GeoJSON parsing/serialization
- [GDAL bindings](https://github.com/georust/gdal) - GDAL Rust bindings
- [kdtree](https://github.com/mneumark/kdtree) - K-D tree spatial indexing
- [rstar](https://github.com/georust/rstar) - R-tree spatial indexing

#### Routing
- Library - Description
- [Valhalla](https://github.com/valhalla/valhalla) - C++ routing engine (Rust bindings exist)
- [osrm-backend](https://github.com/Project-OSRM/osrm-backend) - C++ routing (Rust bindings exist)

#### OSM Data
- Library - Description
- [osm-io](https://github.com/nickaknudson/osm-io) - Fast PBF read/write
- [osm-admin](https://github.com/nickaknudson/osm-admin) - PBF import/export to PostGIS

#### Tile Serving
- Library - Description
- [Martin](https://github.com/maplibre/martin) - PostGIS/MBTiles vector tile server
- [tileserver](https://github.com/maplibre/tileserver) - Tile serving (Rust)

---

### Go

#### Geospatial Libraries
- Library - Description
- [geom](https://github.com/paulmach/geom) - Geometric types + operations
- [s2](https://github.com/golang/geo) - S2 geometry library (Google)
- [H3-go](https://github.com/uber/h3-go) - H3 hexagonal hierarchical spatial index
- [go-geoindex](https://github.com/kellydunn/golang-geo) - Geospatial indexing
- [go-proj](https://github.com/uber/go-proj-4) - PROJ.4 bindings

#### OSM Data
- Library - Description
- [gOSMonaut](https://github.com/MorbZ/gosmonaut) - PBF parser (nested entities)
- [gosmparse](https://github.com/thomersch/gosmparse) - High-speed PBF parser
- [osmpbf](https://github.com/qedus/osmpbf) - PBF format parser
- [tdewolff/geo](https://github.com/tdewolff/geo/tree/master/osm) - High-performance PBF parser + geometry extractor
- [go-osm](https://github.com/paulmach/go.osm) - OSM data structures

#### Routing
- Library - Description
- [go-osrm](https://github.com/paulmach/go-osrm) - OSRM API client
- [graphhopper](https://github.com/graphhopper/graphhopper) - Go routing engine port

---

---

### Ruby

#### Geospatial Libraries
- Library - Description
- [Rosemary](https://github.com/sozialhelden/rosemary/) - OSM API client
- [OSMLib](https://github.com/pnorman/OSMLib) - OSM to shapefile conversion
- [rgeo](https://github.com/rgeo/rgeo) - Geospatial library (GEOS bindings)
- [rgeo-geojson](https://github.com/rgeo/rgeo-geojson) - GeoJSON parsing
- [rspatial](https://github.com/rspatial) - Spatial analysis

---

### PHP

#### Geospatial Libraries
- Library - Description
- [Services_OpenStreetMap](https://github.com/pear/Services_Openstreetmap/) - OSM API client (PEAR)
- [League\Geotools](https://github.com/league/geotools) - Geocoding, distance, bounding box
- [GeoPHP](https://github.com/phayes/geoPHP) - Geometry library (WKT, GeoJSON, etc.)

---

### R

#### Geospatial Libraries
- Library - Description
- [sf](https://r-spatial.github.io/sf/) - Simple Features for R (vector data)
- [terra](https://rspatial.org/terra/) - Spatial raster data
- [stars](https://r-spatial.github.io/stars/) - Spatiotemporal arrays
- [sp](https://cran.r-project.org/package=sp) - Spatial data classes (legacy)
- [leaflet](https://rstudio.github.io/leaflet/) - Leaflet for R
- [tmap](https://r-tmap.github.io/tmap/) - Thematic map visualization
- [osmdata](https://github.com/ropensci/osmdata) - Download OSM data via Overpass API
- [osmapiR](https://github.com/mab68/osmapiR) - OSM API client
- [osmaR](http://osmar.r-forge.r-project.org/) - OSM API client
- [OpenRouteService](https://github.com/GIScience/openrouteservice-r) - ORS routing client

---

### Scala

#### Geospatial Libraries
- Library - Description
- [geotrellis](https://geotrellis.io/) - Geospatial data processing (raster + vector)
- [osm4scala](https://github.com/angelcervera/osm4scala/) - High-performance PBF parser
- [geow](https://github.com/plasmap/geow/) - Lightweight OSM data processing
- [spark-osm-datasource](https://github.com/woltapp/spark-osm-datasource) - PBF for Apache Spark

---

### Other Languages

#### Lua
- Library - Description
- [TileMan](https://github.com/osmfj/tileman/) - OSM tile serving framework

#### Objective-C++
- Library - Description
- [CartoType](https://cartotype.github.io/cartotype/) - Offline vector maps (iOS/Android/C++)

#### Haskell
- Library - Description
- [haskell-gis](https://hackage.haskell.org/package/gis) - GIS data structures

#### Julia
- Library - Description
- [ArchGDAL.jl](https://github.com/JuliaGeo/ArchGDAL.jl) - GDAL bindings
- [GeoInterface.jl](https://github.com/JuliaGeo/GeoInterface.jl) - Geometry interface
- [Meshes.jl](https://github.com/JuliaGeometry/Meshes.jl) - Geometric mesh processing

#### OCaml
- Library - Description
- [Osm.ml](https://github.com/ocaml-documented-stuff/osm.ml) - OSM file parser

---

### Data & Service APIs

#### Tile Services
- Service - Description
- [OpenStreetMap Tiles](https://www.openstreetmap.org/wiki/Tile_servers) - Free raster tile server
- [Protomaps](https://protomaps.com/) - Open-source vector tile hosting
- [MapTiler](https://www.maptiler.com/) - Cloud vector/raster tiles
- [Stadia Maps](https://stadiamaps.com/) - Vector tile hosting
- [Thunderforest](https://thunderforest.com/) - Specialty map tiles
- [Mapbox](https://www.mapbox.com/) - Vector tile platform

#### Geocoding APIs
- Service - Description
- [Nominatim](https://nominatim.org/) - OpenStreetMap forward/reverse geocoder
- [Pelias](https://github.com/pelias/pelias) - Open-source geocoder
- [Photon](https://photon.komoot.io/) - Open-source geocoder (based on OSM)
- [Google Geocoding](https://developers.google.com/maps/documentation/geocoding) - Google geocoding API
- [HERE Geocoding](https://developer.here.com/geocoding-api) - HERE geocoding API

#### Routing APIs
- Service - Description
- [OSRM](http://project-osrm.org/) - Open-source routing machine
- [Valhalla](https://valhalla.github.io/) - Open-source routing engine
- [GraphHopper](https://www.graphhopper.com/) - Routing API
- [OpenRouteService](https://openrouteservice.org/) - Multimodal routing
- [Mapbox Directions](https://docs.mapbox.com/api/navigation/directions/) - Routing API
- [HERE Routing](https://developer.here.com/routing-api) - Routing API
- [Google Directions](https://developers.google.com/maps/documentation/directions) - Routing API

#### Weather APIs
- Service - Description
- [OpenWeatherMap](https://openweathermap.org/) - Weather data + tile overlays
- [Tomorrow.io](https://www.tomorrow.io/) - Weather API
- [MET Norway](https://api.met.no/) - Free weather API

#### Traffic APIs
- Service - Description
- [TomTom Traffic](https://developer.tomtom.com/traffic-api) - Traffic flow + incidents
- [HERE Traffic](https://developer.here.com/traffic-api) - Traffic flow + incidents
- [Azure Maps Traffic](https://docs.microsoft.com/rest/api/maps/traffic) - Traffic flow + incidents

---

## Spatial Databases & Backend Tools

Databases and server-side tools that store, index, and query geospatial data.

### Relational Spatial Databases

| Database | Spatial Engine | Key Features |
|----------|---------------|--------------|
| [PostGIS](https://postgis.net/) | GEOS, PROJ, GDAL | Full-featured spatial SQL: geometry types, spatial indexes (GiST, BRIN), 700+ spatial functions, raster support, topology, vector tiles via pg_tileserv |
| [SQLite + SpatiaLite](https://www.gaia-gis.it/gaia-sins/) | GEOS, PROJ, GDAL | Embedded spatial DB: geometry types, spatial indexes, R-tree, spatial SQL, supports WKT/WKB/GeoJSON |
| [MySQL Spatial](https://dev.mysql.com/doc/refman/8.0/en/spatial.html) | Internal | Geometry types, spatial indexes (R-tree), basic spatial functions (ST_Area, ST_Contains, ST_Distance, etc.) |
| [MariaDB Spatial](https://mariadb.com/kb/en/spatial-data-maria/) | Internal | MySQL-compatible spatial extensions |
| [Oracle Spatial and Graph](https://docs.oracle.com/en/database/oracle/oracle-database/21/spatl/) | SDO_GEOMETRY | Enterprise spatial: vector/raster, topology, network, geocoding, routing |
| [SQL Server Spatial](https://learn.microsoft.com/en-us/sql/relational-databases/spatial/spatial-data-sql-server) | Internal | Geometry + Geography types, spatial indexes, spatial methods (STIntersects, STDistance, etc.) |
| [DB2 Spatial](https://www.ibm.com/docs/en/db2/11.5?topic=concepts-spatial-data) | Internal | Geometry + Geography types, spatial indexes, spatial queries |

### PostgreSQL Extensions & Plugins

| Extension | Purpose | Key Features |
|-----------|---------|--------------|
| [PostGIS](https://postgis.net/) | Spatial database engine | Geometry/Geography types, 700+ spatial functions, spatial indexes (GiST, BRIN, SP-GiST), raster support, topology, vector tiles (ST_AsMVT), 3D geometry, M support |
| [pgRouting](https://pgrouting.org/) | Network routing | Dijkstra, A*, KSP, driving distance, TSP, vehicle routing, TRSP, with-points, contraction hierarchies, pgRouting + PostGIS spatial routing |
| [H3-Pg](https://github.com/bytesandbrains/h3-pg) | Hexagonal hierarchical index | Uber H3 index in SQL, h3_to_geo, geo_to_h3, hex boundary, ring, k-ring, hex distance |
| [pg_h3](https://github.com/bytesandbrains/h3-pg) | H3 binding | H3 functions exposed as PostgreSQL functions |
| [pgpointcloud](https://github.com/pgpointcloud/pointcloud) | Point cloud storage | Point cloud data (LiDAR) in PostgreSQL, PCPoint, PCPatch types, schema-based compression |
| [pg_raster](https://postgis.net/documentation/overview/raster/) | Raster data | GeoTIFF, raster columns, raster bands, raster algebra, ST_MapAlgebra, ST_ZonalStats |
| [pg_topology](https://postgis.net/documentation/overview/topology/) | Topological data | TopoGeometry, TopoElement, CreateTopology, TopoGeo_AddLinestring, valid topology graphs |
| [pg_geohash](https://github.com/kamicase/postgresql-geohash) | Geohashing | Encode/decode geohash, distance, nearby search |
| [PostGIS SFCGAL](https://postgis.net/documentation/reference/#sfcgal) | 3D geometry operations | 3D union, intersection, difference, extrude, TIN generation, straight skeleton, minkowski sum |
| [pg_analytics](https://github.com/paradedb/paradedb) | Analytics on PostGIS | ParadeDB analytics functions for PostGIS data |
| [pg_sodium](https://github.com/michelp/pgsodium) | Encryption | Transparent column encryption (not spatial, but used with geo data for security) |
| [Citus](https://www.citusdata.com/) | Distributed PostgreSQL | Distributed spatial queries across nodes, sharding for large PostGIS datasets |
| [TimescaleDB](https://www.timescale.com/) | Time-series + PostGIS | Hypertables for spatiotemporal data, time-bucket with spatial aggregation |
| [pg_partman](https://github.com/pgpartman/pg_partman) | Partitioning | Table partitioning for large spatial tables (by region, time, etc.) |
| [PostGIS Tiger Geocoder](https://postgis.net/documentation/overview/tiger_geocoder/) | Geocoding | US address geocoding using TIGER/Line data, geocode(), reverse_geocode() |
| [pg_featureserv](https://github.com/CrunchyData/pg_featureserv) | OGC API Features | RESTful feature service from PostGIS tables, OGC API compliant |
| [pg_tileserv](https://github.com/CrunchyData/pg_tileserv) | Vector tile server | Serve MVT vector tiles directly from PostGIS |
| [pg_routing](https://pgrouting.org/) | Routing functions | Shortest path, driving distance, isochrone, TSP, VRP |
| [pg_labelmap](https://github.com/pgvector/pgvector) | Vector search | (pgvector) Vector similarity search for geospatial embeddings |

### SQLite Extensions & Plugins

| Extension | Purpose | Key Features |
|-----------|---------|--------------|
| [SpatiaLite](https://www.gaia-gis.it/gaia-sins/) | Spatial database engine | Full spatial SQL for SQLite: geometry types, 700+ spatial functions, R-tree, spatial indexes, KML/GeoJSON/WKT export, topology support |
| [mod_spatialite](https://www.gaia-gis.it/gaia-sins/) | SpatiaLite loadable module | ModSpatialite: spatial functions as loadable SQLite extension, PROJ, GEOS, GDAL integration |
| [RTree (built-in)](https://www.sqlite.org/rtree.html) | Spatial indexing | Native SQLite R-tree module, 2D bounding box indexing, fast spatial queries |
| [SQLite R*Tree](https://www.sqlite.org/rtree.html) | R-tree index | Prefix/range/constraint queries on multi-dimensional data |
| [geo_module](https://github.com/nickolay/geo_module) | GeoJSON support | GeoJSON reading/writing for SQLite |
| [sqlite-geopoly](https://www.sqlite.org/geopoly.html) | Polygon overlap | Polyfill module for polygon overlap queries, virtual table support |
| [spatialite-tools](https://www.gaia-gis.it/gaia-sins/spatialite-tools.html) | CLI tools | shp2sqlite, sqlite2shp, spatialite_sql, import/export utilities |
| [ogr_fdw](https://github.com/pramsey/pgsql-ogr-fdw) | Foreign data wrapper | (PostgreSQL) OGR-based FDW to query SQLite/SpatiaLite files as foreign tables |
| [GDAL SQLite driver](https://gdal.org/en/stable/drivers/vector/sqlite.html) | Data access | Read/write SQLite databases with OGR, supports SpatiaLite geometry |
| [SQLite Cloud](https://sqlitecloud.io/) | Cloud SQLite | Cloud-hosted SQLite with SpatiaLite support |
| [libspatialite](https://www.gaia-gis.it/gaia-sins/) | Core library | The C library powering SpatiaLite, GEOS/PROJ/GDAL integration |
| [DuckDB Spatial](https://duckdb.org/docs/extensions/spatial.html) | Embedded analytics | Spatial extension for DuckDB (SQLite-like), geometry types, spatial functions, GeoJSON/Shapefile I/O |
| [Kine](https://github.com/kinecosystem/kin-core) | Key-value store | (not spatial) Reference for embedding patterns |
| [sqlite-vss](https://github.com/asg017/sqlite-vss) | Vector search | Vector similarity search for SQLite (useful for geospatial embeddings) |
| [sqlite-vec](https://github.com/asg017/sqlite-vec) | Vector search | Pure C vector search extension for SQLite |
| [sqlite3_spatialite](https://www.gaia-gis.it/gaia-sins/) | Precompiled builds | Ready-to-use SpatiaLite binaries for multiple platforms |

### SpatiaLite Spatial Functions (Key Operations)

| Category | Functions |
|----------|-----------|
| **Measurement** | `ST_Area`, `ST_Length`, `ST_Perimeter`, `ST_Distance`, `ST_LineLength`, `ST_PolygonLength` |
| **Relationships** | `ST_Contains`, `ST_Within`, `ST_Intersects`, `ST_Crosses`, `ST_Touches`, `ST_Disjoint`, `ST_Overlaps`, `ST_Equals` |
| **Set Operations** | `ST_Union`, `ST_Intersection`, `ST_Difference`, `ST_SymDifference`, `ST_Collect` |
| **Overlay** | `ST_Buffer`, `ST_Simplify`, `ST_SimplifyPreserveTopology`, `ST_MakeValid`, `ST_Centroid` |
| **Conversion** | `ST_GeomFromText`, `ST_GeomFromGeoJSON`, `ST_AsGeoJSON`, `ST_AsKML`, `ST_AsSVG` |
| **Transformation** | `ST_Transform`, `ST_SetSRID`, `ST_CoordDim`, `ST_Z` |
| **Indexing** | `RTree` (built-in), `CreateSpatialIndex`, `ST_MakeEnvelope`, bounding box operators |
| **Validation** | `ST_IsValid`, `ST_MakeValid`, `ST_IsEmpty`, `ST_IsSimple` |
| **Topology** | `CreateTopology`, `TopoGeo_GeomFromText`, `ST_GetFaceBoundary`, `ST_ModFace` |
| **TIN** | `ST_Triangulate2DZ`, `ST_DelaunayTriangles`, `ST_TIN` |
| **Grid** | `GenerateSpatialGrid`, `GeneratePoints`, `HexagonalGrid` |

### PostGIS Extension Comparison

| Feature | PostGIS | SpatiaLite | MySQL Spatial | Oracle Spatial |
|---------|---------|------------|---------------|----------------|
| Geometry types | Yes | Yes | Yes | Yes |
| Geography (spherical) | Yes | Yes (limited) | No | Yes |
| Spatial indexes | GiST, BRIN, SP-GiST, Hash | R-tree | R-tree | R-tree |
| Raster support | Yes (raster columns) | No | No | Yes |
| Topology | Yes (topology module) | Yes | No | Yes |
| 3D geometry | Yes | Yes | No | Yes |
| M (measure) values | Yes | Yes | No | Yes |
| Vector tiles (MVT) | Yes (ST_AsMVT) | No | No | No |
| Routing | pgRouting extension | No | No | Network extension |
| Point clouds | pgpointcloud extension | No | No | Yes |
| Geocoding | Tiger Geocoder | No | No | Yes |
| OGC API | pg_featureserv | No | No | Yes |
| JSON export | ST_AsGeoJSON | ST_AsGeoJSON | ST_AsGeoJSON | SDO_UTIL.TO_GEOJSON |
| Loadable module | No (shared lib) | Yes (mod_spatialite) | No | No |
| Embedded | No | Yes (SQLite) | No | No |

### NoSQL & Document Spatial Databases

| Database | Spatial Support | Key Features |
|----------|----------------|--------------|
| [MongoDB](https://www.mongodb.com/docs/manual/geospatial-queries/) | 2dsphere index | GeoJSON storage, $geoNear, $geoWithin, $geoIntersects queries, geospatial aggregation |
| [Redis + RediSearch](https://redis.io/docs/interact/search-and-query/) | GEO commands | GEOADD, GEODIST, GEORADIUS, GESEARCH, geospatial indexing |
| [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/geo.html) | geo_shape, geo_point | Spatial queries (contains, within, intersects), bounding box, geohash, distance sorting |
| [CouchDB + GeoMesa](https://couchdb.apache.org/) | Spatial views | GeoJSON storage, spatial Mango queries |
| [DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GeoLibrary.html) | Geo library | Geohash-based spatial queries, GeoPoint data type |
| [FoundationDB](https://apple.github.io/foundationdb/) | Layer-based | Record layer with geospatial indexing support |

### Vector Tile Databases & Servers

| Tool | Description |
|------|-------------|
| [Martin](https://github.com/maplibre/martin) | PostGIS/MBTiles/PMTiles vector tile server (Rust) |
| [pg_tileserv](https://github.com/CrunchyData/pg_tileserv) | PostGIS-native vector tile server |
| [pg_featureserv](https://github.com/CrunchyData/pg_featureserv) | PostGIS-native feature service (OGC API) |
| [TileServer GL](https://github.com/mapbox/tileserver-gl) | Vector/raster tile server with GL styles |
| [Tegola](https://tegola.io/) | Go-based vector tile server for PostGIS |
| [GeoServer](https://geoserver.org/) | OGC-compliant WMS/WFS/WCS server (Java) |
| [MapProxy](https://mapproxy.org/) | WMS/WMTS proxy and tile cache |
| [Martin + Deck.gl](https://github.com/maplibre/martin) | PostGIS to deck.gl GeoJSON layer |

### Spatial Indexing Structures

| Structure | Description | Used By |
|-----------|-------------|---------|
| [R-tree](https://en.wikipedia.org/wiki/R-tree) | Bounding-box hierarchy for spatial objects | PostGIS (GiST), SQLite (R-tree), libspatialindex |
| [Quad-tree](https://en.wikipedia.org/wiki/Quadtree) | Recursive 2D space subdivision | MongoDB (2d index), Elasticsearch |
| [GeoHash](https://en.wikipedia.org/wiki/Geohash) | Hierarchical geocoding grid | Redis, MongoDB, DynamoDB, Elasticsearch |
| [S2 Geometry](https://s2geometry.io/) | Spherical geometry cells (Google) | Uber H3 (inspired by), MongoDB |
| [H3](https://h3geo.org/) | Hexagonal hierarchical index (Uber) | PostGIS (h3 extension), MongoDB, Redis |
| [GeoMesa](https://www.geomesa.org/) | Distributed spatio-temporal index | Accumulo, HBase, Cassandra, Kafka |
| [KD-tree](https://en.wikipedia.org/wiki/K-d_tree) | k-dimensional binary space partitioning | SciPy, PostGIS (KNN), Turf.js (nearest) |
| [Voronoi](https://en.wikipedia.org/wiki/Voronoi_diagram) | Proximity-based tessellation | Turf.js, PostGIS (ST_Voronoi), Shapely |
| [Delaunay](https://en.wikipedia.org/wiki/Delaunay_triangulation) | Dual of Voronoi (triangulation) | PostGIS, CGAL, Turf.js |

### PostGIS Spatial Functions (Key Operations)

| Category | Functions |
|----------|-----------|
| **Measurement** | `ST_Area`, `ST_Length`, `ST_Perimeter`, `ST_Distance`, `ST_DistanceSphere`, `ST_Azimuth` |
| **Relationships** | `ST_Contains`, `ST_Within`, `ST_Intersects`, `ST_Crosses`, `ST_Touches`, `ST_Disjoint`, `ST_Overlaps`, `ST_Equals` |
| **Set Operations** | `ST_Union`, `ST_Intersection`, `ST_Difference`, `ST_SymDifference`, `ST_Collect` |
| **Overlay** | `ST_Buffer`, `ST_Simplify`, `ST_SimplifyPreserveTopology`, `ST_MakeValid`, `ST_MakeLine` |
| **Centroids** | `ST_Centroid`, `ST_ClosestPoint`, `ST_PointOnSurface`, `ST_LineInterpolatePoint` |
| **Conversion** | `ST_GeomFromText`, `ST_GeomFromGeoJSON`, `ST_AsGeoJSON`, `ST_AsKML`, `ST_AsMVT` |
| **Transformation** | `ST_Transform`, `ST_SetSRID`, `ST_Centroid`, `ST_LineLocatePoint` |
| **Indexing** | `ST_MakeEnvelope`, `ST_Expand`, `&&` (bounding box overlap operator), GiST/BRIN indexes |
| **Clustering** | `ST_ClusterDBSCAN`, `ST_ClusterKMeans`, `ST_ClusterIntersecting` |
| **Raster** | `ST_AsRaster`, `ST_AsRaster`, `ST_MapAlgebra`, `ST_ZonalStats`, `ST_ExtractValues` |
| **TIN/Topology** | `ST_DelaunayTriangles`, `ST_VoronoiDiagrams`, `ST_BuildArea`, `ST_MakeValid` |
| **Geohash** | `ST_GeoHash`, `ST_Geohash`, `ST_PointFromGeoHash` |
| **Tile Generation** | `ST_AsMVT`, `ST_AsMVTGeom`, `ST_TileEnvelope`, `ST_AsPNG` |

### Django GIS (GeoDjango)

| Feature | Description |
|---------|-------------|
| [GeoDjango](https://docs.djangoproject.com/en/stable/ref/contrib/gis/) | ORM-level spatial field types, spatial queries, geometry operations |
| **Field Types** | `PointField`, `LineStringField`, `PolygonField`, `MultiPointField`, `MultiLineStringField`, `MultiPolygonField`, `GeometryCollectionField` |
| **Query Lookups** | `contains`, `within`, `intersects`, `touches`, `overlaps`, `crosses`, `disjoint`, `equals`, `same_as` |
| **Distance Queries** | `distance_lte`, `distance_gte`, `dwithin` (within distance) |
| **Spatial Functions** | `Area`, `Distance`, `Length`, `Perimeter`, `Centroid`, `Intersection`, `Difference`, `Union`, `Buffer`, `Simplify`, `Transform`, `MakeValid` |
| **Backends** | PostGIS, SpatiaLite, MySQL, Oracle |
| **Feeds** | `GeoRSS`, `GeoJSON`, `KML`, `KMZ` serialization |

### MySQL Spatial Functions (Key Operations)

| Category | Functions |
|----------|-----------|
| **Measurement** | `ST_Area`, `ST_Length`, `ST_Perimeter`, `ST_Distance`, `ST_Distance_Sphere` |
| **Relationships** | `ST_Contains`, `ST_Within`, `ST_Intersects`, `ST_Crosses`, `ST_Touches`, `ST_Disjoint` |
| **Set Operations** | `ST_Union`, `ST_Intersection`, `ST_Difference`, `ST_SymDifference` |
| **Overlay** | `ST_Buffer`, `ST_Envelope`, `ST_Centroid`, `ST_MakeValid` |
| **Conversion** | `ST_GeomFromText`, `ST_GeomFromGeoJSON`, `ST_AsGeoJSON`, `ST_AsKML`, `ST_GeomFromWKB` |
| **Indexing** | `SPATIAL INDEX` (R-tree), bounding box `MBR` operators |

### MongoDB Geospatial Queries

| Operation | Description |
|-----------|-------------|
| `$geoWithin` | Find documents within a geometry |
| `$geoIntersects` | Find documents that intersect a geometry |
| `$near` | Find nearest documents to a point |
| `$nearSphere` | Find nearest documents (spherical) |
| `geoNear` (aggregation) | Aggregation pipeline geospatial stage |
| `$box`, `$polygon`, `$center`, `$centerSphere` | Shape query operators |
| `2dsphere` index | Index for GeoJSON and coordinate pairs |

### Elasticsearch Spatial Queries

| Query Type | Description |
|------------|-------------|
| `geo_shape` query | Contains, within, intersects, disjoint |
| `geo_bounding_box` query | Documents within bounding box |
| `geo_distance` query | Documents within distance of point |
| `geo_polygon` query | Documents within polygon |
| `geo_sort` | Sort by distance from point |
| `geo_shape` aggregation | Spatial bucket aggregation |

### Redis Geospatial Commands

| Command | Description |
|---------|-------------|
| `GEOADD` | Add geospatial items |
| `GEODIST` | Distance between two members |
| `GEOSEARCH` | Search by radius or box |
| `GEORADIUS` | Members within radius (deprecated, use GEOSEARCH) |
| `GEOHASH` | Geohash strings for members |
| `GEOPOS` | Coordinates of members |
| `GEOSEARCHSTORE` | Store search results |

### Tile Pipeline Tools

| Tool | Role | Description |
|------|------|-------------|
| [Tippecanoe](https://github.com/felt/tippecanoe) | GeoJSON → MBTiles | Build vector tiles from GeoJSON with features like clustering, simplification, line joining |
| [ogr2ogr](https://gdal.org/programs/ogr2ogr.html) | Format converter | Convert between GeoJSON, Shapefile, KML, GML, CSV, PostGIS, etc. |
| [PMTiles](https://protomaps.com/) | Tile archive | Single-file cloud-native tile archives |
| [Martin](https://github.com/maplibre/martin) | Tile server | PostGIS/MBTiles/PMTiles → vector tiles |
| [TileServer GL](https://github.com/mapbox/tileserver-gl) | Tile server | Vector/raster tile serving with GL styles |
| [t-rex](https://t-rex.tileviewer.ch/) | Tile server | PostGIS → vector tiles (Rust) |
| [Tiles.xyz](https://github.com/mapbox/tiles.xyz) | Tile hosting | Cloud-native tile hosting |

### Geocoding & Routing Backends

| Tool | Type | Description |
|------|------|-------------|
| [Nominatim](https://nominatim.org/) | Geocoder | OpenStreetMap forward/reverse geocoder |
| [Pelias](https://github.com/pelias/pelias) | Geocoder | Open-source geocoder (geocode.earth) |
| [Photon](https://photon.komoot.io/) | Geocoder | Open-source geocoder (based on OSM) |
| [LibreTranslate](https://libretranslate.com/) | Translator | Self-hosted translation API |
| [OSRM](http://project-osrm.org/) | Router | Open-source routing machine (C++) |
| [Valhalla](https://valhalla.github.io/) | Router | Open-source routing engine (C++) |
| [GraphHopper](https://www.graphhopper.com/) | Router | Open-source routing engine (Java) |
| [OpenTripPlanner](https://www.opentripplanner.org/) | Multimodal router | Public transit + car + bike + walk routing |
| [OpenRouteService](https://openrouteservice.org/) | Router | Multimodal routing with profiles |
| [RouterOSM](https://github.com/Router-OSM) | Router | OSM-based routing service |

### Core GIS Libraries (Language-Agnostic)

These are foundational C/C++ libraries used across multiple language bindings:

- Library - Description
- [GDAL](https://gdal.org/) - Raster + vector geospatial data abstraction
- [OGR](https://gdal.org/ogr/) - Vector data processing (part of GDAL)
- [GEOS](https://libgeos.org/) - Geometry engine (JTS C++ port)
- [PROJ](https://proj.org/) - Coordinate reference system transformations
- [PostGIS](https://postgis.net/) - Spatial SQL extension for PostgreSQL
- [SpatiaLite](https://www.gaia-gis.it/gaia-sins/) - Spatial SQL extension for SQLite
- [libspatialindex](https://github.com/libspatialindex/libspatialindex) - R-tree spatial indexing
- [Mapnik](https://mapnik.org/) - Server-side 2D map rendering
- [H3](https://h3geo.org/) - Uber's hexagonal hierarchical spatial index

---

## Contributing

Contributions welcome! Feel free to open an issue or submit a pull request. When adding examples, aim to balance coverage across all three libraries within each category. Look for markers to find gaps you can fill.

## License

[MIT](LICENSE)
