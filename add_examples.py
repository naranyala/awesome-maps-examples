import json

new_examples = [
  # OpenLayers
  {
    "id": "openlayers-custom-projection",
    "library": "openlayers",
    "file": "openlayers-implementation/custom-projection.html",
    "name": "Custom Projection",
    "description": "Render map in a non-Web-Mercator projection using proj4js.",
    "category": "Advanced Mapping",
    "controls": []
  },
  {
    "id": "openlayers-webgl-points",
    "library": "openlayers",
    "file": "openlayers-implementation/webgl-points.html",
    "name": "WebGL Million Points",
    "description": "Render massive datasets at 60FPS using WebGLPointsLayer.",
    "category": "Advanced Mapping",
    "controls": []
  },
  {
    "id": "openlayers-map-export",
    "library": "openlayers",
    "file": "openlayers-implementation/map-export.html",
    "name": "High-Res Map Exporter",
    "description": "Export the map canvas to a high-resolution image or PDF.",
    "category": "Advanced Mapping",
    "controls": []
  },
  {
    "id": "openlayers-graticule",
    "library": "openlayers",
    "file": "openlayers-implementation/graticule.html",
    "name": "Graticule Overlay",
    "description": "Dynamic coordinate grid overlay for latitude and longitude.",
    "category": "Advanced Mapping",
    "controls": []
  },

  # Leaflet
  {
    "id": "leaflet-routing-machine",
    "library": "leaflet",
    "file": "leaflet-implementation/routing-machine.html",
    "name": "Routing Machine",
    "description": "Point-to-point GPS navigation interface with turn-by-turn instructions.",
    "category": "Advanced Mapping",
    "controls": []
  },
  {
    "id": "leaflet-d3-integration",
    "library": "leaflet",
    "file": "leaflet-implementation/d3-integration.html",
    "name": "D3.js SVG Integration",
    "description": "Bind Leaflet zoom/pan events to raw D3.js animated overlays.",
    "category": "Advanced Mapping",
    "controls": []
  },
  {
    "id": "leaflet-marker-clustering",
    "library": "leaflet",
    "file": "leaflet-implementation/marker-clustering.html",
    "name": "Marker Clustering",
    "description": "Handle massive amounts of overlapping pins using Leaflet.markercluster.",
    "category": "Advanced Mapping",
    "controls": []
  },
  {
    "id": "leaflet-time-dimension",
    "library": "leaflet",
    "file": "leaflet-implementation/time-dimension.html",
    "name": "Time-Dimension Player",
    "description": "Timeline scrubber to play back historical spatial data over time.",
    "category": "Advanced Mapping",
    "controls": []
  },

  # MapLibre
  {
    "id": "maplibre-3d-terrain",
    "library": "maplibre",
    "file": "maplibre-implementation/3d-terrain.html",
    "name": "3D Terrain & Hillshading",
    "description": "Interactive 3D mountains using an RGB DEM tile source.",
    "category": "Advanced Mapping",
    "controls": []
  },
  {
    "id": "maplibre-indoor-mapping",
    "library": "maplibre",
    "file": "maplibre-implementation/indoor-mapping.html",
    "name": "Indoor 3D Mapping",
    "description": "Interactive multi-level building floor plans using fill-extrusion.",
    "category": "Advanced Mapping",
    "controls": []
  },
  {
    "id": "maplibre-realtime-3d",
    "library": "maplibre",
    "file": "maplibre-implementation/realtime-3d.html",
    "name": "Real-time 3D Object Tracking",
    "description": "Smoothly animate a 3D glTF model moving along a path at 60FPS.",
    "category": "Advanced Mapping",
    "controls": []
  },
  {
    "id": "maplibre-data-driven",
    "library": "maplibre",
    "file": "maplibre-implementation/data-driven.html",
    "name": "Data-Driven Traffic Styling",
    "description": "Dynamically color-code and style roads based on live-traffic property expressions.",
    "category": "Advanced Mapping",
    "controls": []
  }
]

with open('examples.json', 'r') as f:
    data = json.load(f)

# If it's a list, just append
if isinstance(data, list):
    data.extend(new_examples)
else:
    data['examples'].extend(new_examples)

with open('examples.json', 'w') as f:
    json.dump(data, f, indent=2)

print(f"Added {len(new_examples)} new advanced examples!")
