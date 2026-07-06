import re

with open('README.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to replace the old Leaflet section (Inspired by OpenLayers)
old_section_pattern = r'## Missing Leaflet Examples \(Inspired by OpenLayers\).*?---\s*\n\s*## Missing OpenLayers Examples \(Inspired by MapLibre\)'

new_section = """## Missing Leaflet Examples (Inspired by OpenLayers)

The following Leaflet examples are inspired by powerful features found in [OpenLayers](https://openlayers.org/en/latest/examples/). These represent advanced GIS use-cases that would make excellent additions to the Leaflet collection!

### 🌍 Advanced UI & Controls
- 🔴 **Custom Controls** (`custom-controls.html`) — Build external HTML UI elements (like floating toolbars) that programmatically drive the map view and interact with map features.
- 🔴 **Mini Map** (`minimap.html`) — Create a small overview map in the corner that perfectly tracks the viewport bounds of the main map to help with orientation.

### 📍 Applied Spatial Analysis
- 🟡 **Geofence** (`geofence.html`) — Implement an interactive geofencing system that detects and alerts when a movable marker crosses a predefined polygon boundary.
- 🟡 **Store Locator** (`store-locator.html`) — Build a classic store locator layout featuring a scrolling sidebar list of locations that dynamically interact with markers on the map.

### 🌧️ Data & Overlays
- 🟡 **Weather Mapping** (`weather.html`) — Overlay real-time weather or radar tile layers over the base map to visualize meteorological data.
- 🟢 **Image Overlay** (`image-overlay.html`) — Perfectly stretch and lock a static image (like a historical map or floor plan) over a specific set of geographical coordinate bounds.
- 🟢 **Polygon Extrusion (3D)** (`polygon-extrusion.html`) — While Leaflet is strictly 2D, this challenges you to use faux-3D plugins (like `leaflet-polygon-fillPattern`) or CSS tricks to simulate 3D building height data.

---

## Missing OpenLayers Examples (Inspired by MapLibre)"""

content = re.sub(old_section_pattern, new_section, content, flags=re.DOTALL)

with open('README.md', 'w', encoding='utf-8') as f:
    f.write(content)

print("README.md successfully updated with refined OpenLayers inspiration!")
