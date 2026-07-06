import re

with open('README.md', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the TOC
toc_entry = """- [Missing OpenLayers Examples (Inspired by MapLibre)](#missing-openlayers-examples-inspired-by-maplibre)
- [Missing MapLibre Examples (Inspired by OpenLayers)](#missing-maplibre-examples-inspired-by-openlayers)"""
content = re.sub(r'- \[Missing OpenLayers Examples \(Inspired by MapLibre\)\]\(#missing-openlayers-examples-inspired-by-maplibre\)', toc_entry, content)


# 2. Add the new section before Contributing
new_section = """## Missing MapLibre Examples (Inspired by OpenLayers)

The following MapLibre examples are inspired by powerful features found in [OpenLayers](https://openlayers.org/en/latest/examples/). These represent advanced GIS use-cases that would make excellent additions to the MapLibre GL JS collection!

### 🌍 Advanced UI & Controls
- 🔴 **Context Menu** (`context-menu.html`) — Implement a native right-click context menu that intercepts map interactions to display coordinates or actions.
- 🔴 **Custom Controls** (`custom-controls.html`) — Build external HTML UI elements (like floating toolbars) that programmatically drive the WebGL map view.
- 🔴 **Mini Map** (`minimap.html`) — Create a small overview map in the corner that perfectly tracks the viewport bounds of the main MapLibre canvas.
- 🔴 **Scale Bar** (`scale-bar.html`) — Add a standard map scale bar overlay reflecting the current zoom level projection.

### 📍 Applied Spatial Analysis
- 🟡 **Geofence** (`geofence.html`) — Implement an interactive geofencing system that detects and alerts when a movable marker crosses a predefined GeoJSON polygon boundary.
- 🟡 **Store Locator** (`store-locator.html`) — Build a classic store locator layout featuring a scrolling sidebar list of locations that dynamically interact with markers on the map.

### 🎮 Interactivity & Data
- 🟡 **WASD Navigation** (`wasd-navigation.html`) — Enable game-like keyboard navigation for panning the map around freely.
- 🟡 **Weather Mapping** (`weather.html`) — Overlay real-time weather or radar tile layers over the base vector map to visualize meteorological data.
- 🟢 **Image Overlay** (`image-overlay.html`) — Perfectly stretch and lock a static image (like a historical map or floor plan) over a specific set of geographical coordinate bounds.

---

## Contributing"""

content = re.sub(r'## Contributing', new_section, content)

with open('README.md', 'w', encoding='utf-8') as f:
    f.write(content)

print("README.md successfully updated with MapLibre inspiration from OpenLayers!")
