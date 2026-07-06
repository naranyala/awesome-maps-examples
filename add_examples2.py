import json

new_examples = [
  # OpenLayers
  {
    "id": "openlayers-spyglass",
    "library": "openlayers",
    "file": "openlayers-implementation/spyglass.html",
    "name": "The Spyglass (Canvas Clip)",
    "description": "Use Canvas postrender events to create a magnifying glass revealing a secondary layer.",
    "category": "Controls & UI",
    "controls": []
  },
  {
    "id": "openlayers-geotiff",
    "library": "openlayers",
    "file": "openlayers-implementation/geotiff.html",
    "name": "GeoTIFF WebGL Rendering",
    "description": "Render and color-ramp raw scientific GeoTIFF files natively on the GPU.",
    "category": "Layers & Sources",
    "controls": []
  },
  {
    "id": "openlayers-geofencing",
    "library": "openlayers",
    "file": "openlayers-implementation/geofencing-turf.html",
    "name": "Turf.js Real-time Geofencing",
    "description": "Simulate a vehicle and trigger alerts when it breaches a Turf.js polygon boundary.",
    "category": "Turf.js Spatial",
    "controls": []
  },

  # Leaflet
  {
    "id": "leaflet-hexbin",
    "library": "leaflet",
    "file": "leaflet-implementation/hexbin-turf.html",
    "name": "Turf.js Dynamic Hexbins",
    "description": "Real-time hexagonal binning and density calculation of 5000 points using Turf.js.",
    "category": "Turf.js Spatial",
    "controls": []
  },
  {
    "id": "leaflet-voronoi-interactive",
    "library": "leaflet",
    "file": "leaflet-implementation/voronoi-interactive.html",
    "name": "Interactive Voronoi Generator",
    "description": "Click to add points and instantly recalculate territorial boundaries using Turf.js.",
    "category": "Turf.js Spatial",
    "controls": []
  },
  {
    "id": "leaflet-video-overlay",
    "library": "leaflet",
    "file": "leaflet-implementation/video-overlay.html",
    "name": "Live Video Radar Overlay",
    "description": "Map an MP4 video (like a hurricane radar loop) to exact geographical bounds.",
    "category": "Layers & Sources",
    "controls": []
  },
  {
    "id": "leaflet-svg-dom",
    "library": "leaflet",
    "file": "leaflet-implementation/svg-dom.html",
    "name": "Interactive SVG DOM",
    "description": "Apply advanced CSS animations (pulsating, glowing) directly to SVG map elements.",
    "category": "Animation & Camera",
    "controls": []
  },

  # MapLibre
  {
    "id": "maplibre-bezier-splines",
    "library": "maplibre",
    "file": "maplibre-implementation/bezier-splines.html",
    "name": "Turf.js Bezier Flight Paths",
    "description": "Smooth straight-line flight paths into beautiful curved arcs using Turf.js.",
    "category": "Turf.js Spatial",
    "controls": []
  },
  {
    "id": "maplibre-dynamic-sun",
    "library": "maplibre",
    "file": "maplibre-implementation/dynamic-sun.html",
    "name": "Dynamic Sun & Atmosphere",
    "description": "Simulate a 24-hour day/night cycle with moving shadows across 3D terrain.",
    "category": "3D & Visualization",
    "controls": []
  },
  {
    "id": "maplibre-animated-extrusion",
    "library": "maplibre",
    "file": "maplibre-implementation/animated-extrusion.html",
    "name": "Animated 3D Route",
    "description": "Use fill-extrusion and line-progress to create a glowing trail growing over a city.",
    "category": "Animation & Camera",
    "controls": []
  }
]

with open('examples.json', 'r') as f:
    data = json.load(f)

if isinstance(data, list):
    data.extend(new_examples)
else:
    data['examples'].extend(new_examples)

with open('examples.json', 'w') as f:
    json.dump(data, f, indent=2)

print(f"Added {len(new_examples)} advanced API and Turf.js examples!")
