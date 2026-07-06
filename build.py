#!/usr/bin/env python3
"""
Build script for Awesome Maps Examples Explorer.
Reads examples.json and generates index.html + all example HTML files.
"""

import json
import os
import re
from pathlib import Path

BASE_DIR = Path(__file__).parent
EXAMPLES_JSON = BASE_DIR / "examples.json"


# ─── CSS ────────────────────────────────────────────────────────────────────
CSS_GLOBAL = """
:root {
    --bg-color: #0f172a;
    --panel-bg: rgba(15, 23, 42, 0.95);
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --primary: #3b82f6;
    --primary-hover: #60a5fa;
    --accent: #8b5cf6;
    --border-color: rgba(255, 255, 255, 0.1);
    --success: #22c55e;
    --warning: #f59e0b;
    --danger: #ef4444;
}
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background-color: var(--bg-color); color: var(--text-main); height: 100vh; overflow: hidden; }
.app-layout { display: flex; height: 100vh; width: 100vw; }

/* Right Sidebar - Navigation */
.sidebar-panel { width: 300px; min-width: 300px; background: var(--panel-bg); border-left: 1px solid var(--border-color); display: flex; flex-direction: column; z-index: 10; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
.panel-header { padding: 1.5rem; border-bottom: 1px solid var(--border-color); }
.panel-header h1 { font-size: 1.25rem; font-weight: 700; background: linear-gradient(to right, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.75rem; }
.sidebar-switcher { width: 100%; padding: 0.5rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); border-radius: 6px; color: var(--text-main); font-size: 0.85rem; outline: none; cursor: pointer; margin-bottom: 0.5rem; }
.sidebar-switcher:focus { border-color: var(--primary); }
.sidebar-switcher option { background: var(--bg-color); color: var(--text-main); }
.panel-header p { font-size: 0.8rem; color: var(--text-muted); }
.sidebar-content-panel { display: flex; flex-direction: column; flex: 1; overflow: hidden; }
.nav-content { flex: 1; overflow-y: auto; padding: 1rem 1.5rem; }
.nav-content::-webkit-scrollbar { width: 5px; }
.nav-content::-webkit-scrollbar-track { background: transparent; }
.nav-content::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 10px; }

/* Library badges */
.lib-badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; margin-bottom: 0.5rem; }
.lib-badge.leaflet { background: rgba(25, 153, 0, 0.15); color: #4ade80; }
.lib-badge.maplibre { background: rgba(59, 130, 246, 0.15); color: #60a5fa; }
.lib-badge.openlayers { background: rgba(255, 102, 0, 0.15); color: #ff8c42; }

/* Search */
.search-box { padding: 1rem 1.5rem; border-bottom: 1px solid var(--border-color); }
.search-input { width: 100%; padding: 0.5rem 0.75rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); border-radius: 6px; color: var(--text-main); font-size: 0.85rem; outline: none; }
.search-input:focus { border-color: var(--primary); }
.search-input::placeholder { color: var(--text-muted); }

/* Category */
.category { margin-bottom: 1.5rem; }
.category h2 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 600; }
.category ul { list-style: none; }
.category li { margin-bottom: 2px; }
.category a { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; color: var(--text-main); text-decoration: none; border-radius: 6px; font-size: 0.85rem; transition: all 0.15s ease; border: 1px solid transparent; }
.category a:hover { background: rgba(255, 255, 255, 0.05); }
.category a.active { background: rgba(59, 130, 246, 0.12); color: var(--primary-hover); border-color: rgba(59, 130, 246, 0.25); font-weight: 500; }
.category a .dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.category a .dot.leaflet { background: #199900; }
.category a .dot.maplibre { background: #3b82f6; }
.category a .dot.openlayers { background: #ff6600; }

/* Center Map */
.map-panel { flex: 1; position: relative; background: #111; display: flex; flex-direction: column; overflow: hidden; }
.map-panel iframe { width: 100%; flex: 1; border: none; }
.map-placeholder { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; z-index: 1; }
.map-placeholder .icon { font-size: 3rem; opacity: 0.3; }
.map-placeholder h2 { color: var(--text-muted); font-weight: 400; font-size: 1.25rem; }
.map-placeholder p { color: var(--text-muted); font-size: 0.85rem; opacity: 0.7; }

/* Top Navbar */
.top-navbar { width: 100%; background: var(--panel-bg); padding: 0.5rem 1rem; border-bottom: 1px solid var(--border-color); z-index: 20; display: none; box-shadow: 0 4px 15px rgba(0,0,0,0.3); align-items: center; justify-content: space-between; flex-shrink: 0; }
.top-navbar h2 { font-size: 0.85rem; font-weight: 600; color: var(--text-main); margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }
.nav-controls { display: flex; align-items: center; gap: 0.5rem; }
.nav-btn-group { display: flex; background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); border-radius: 6px; overflow: hidden; }
.nav-btn { background: transparent; border: none; color: var(--text-main); padding: 0.4rem 0.6rem; font-size: 0.8rem; cursor: pointer; transition: background 0.2s; border-right: 1px solid var(--border-color); }
.nav-btn:last-child { border-right: none; }
.nav-btn:hover { background: rgba(255,255,255,0.1); color: var(--primary-hover); }

/* Bottom Bar & Drawer */
.bottom-bar-container { width: 100%; z-index: 20; display: flex; flex-direction: column; flex-shrink: 0; }
.drawer-wrapper { width: 100%; background: var(--panel-bg); backdrop-filter: blur(20px); overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1); max-height: 0; border-top: 1px solid transparent; display: flex; flex-direction: column; }
.bottom-bar-container.open .drawer-wrapper { max-height: 60vh; border-top-color: var(--border-color); box-shadow: 0 -10px 30px rgba(0,0,0,0.4); }
.drawer-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-bottom: 1px solid var(--border-color); }
.drawer-header h3 { font-size: 0.95rem; font-weight: 600; margin: 0; color: var(--primary); }
.close-btn { background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); border-radius: 6px; color: var(--text-muted); cursor: pointer; padding: 0.3rem 0.6rem; font-size: 0.75rem; transition: 0.2s; }
.close-btn:hover { background: rgba(255,255,255,0.1); color: var(--text-main); }
.drawer-panel { flex: 1; padding: 1.5rem; overflow-y: auto; display: none; }
.drawer-panel.active { display: block; }
.bottom-toggles { display: flex; background: var(--panel-bg); border-top: 1px solid var(--border-color); backdrop-filter: blur(20px); padding: 0.5rem; gap: 0.5rem; justify-content: center; }
.drawer-toggle { background: transparent; border: 1px solid transparent; color: var(--text-muted); padding: 0.5rem 1.25rem; border-radius: 8px; cursor: pointer; font-size: 0.85rem; font-weight: 500; transition: all 0.2s; display: flex; align-items: center; gap: 0.5rem; }
.drawer-toggle:hover { background: rgba(255,255,255,0.05); color: var(--text-main); }
.drawer-toggle.active { background: rgba(59,130,246,0.15); color: var(--primary); border-color: rgba(59,130,246,0.3); }

/* Mockup Content Styling */
.mockup-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
.mockup-card { background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; }
.mockup-card h4 { margin-bottom: 1.25rem; font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }

/* Controls Content */
.controls-content { display: flex; flex-wrap: wrap; gap: 1.25rem; justify-content: center; }
.controls-content .ctrl-group, .controls-content .toggle-row, .controls-content .ctrl-info { width: 320px; max-width: 100%; }
.controls-content::-webkit-scrollbar { width: 5px; }
.controls-content::-webkit-scrollbar-track { background: transparent; }
.controls-content::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 10px; }

/* Control elements */
.ctrl-group { background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; }
.ctrl-group h3 { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.03em; color: var(--text-muted); margin-bottom: 0.75rem; font-weight: 600; }
.ctrl-label { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; }
.ctrl-label span { font-size: 0.85rem; color: var(--text-main); }
.ctrl-label .value { font-size: 0.8rem; color: var(--primary); font-weight: 600; font-variant-numeric: tabular-nums; }

/* Range slider */
input[type="range"] { -webkit-appearance: none; width: 100%; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; outline: none; }
input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; background: var(--primary); border-radius: 50%; cursor: pointer; border: 2px solid var(--bg-color); }
input[type="range"]::-moz-range-thumb { width: 16px; height: 16px; background: var(--primary); border-radius: 50%; cursor: pointer; border: 2px solid var(--bg-color); }

/* Select */
select { width: 100%; padding: 0.5rem 0.75rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); border-radius: 6px; color: var(--text-main); font-size: 0.85rem; outline: none; cursor: pointer; }
select:focus { border-color: var(--primary); }
option { background: var(--bg-color); color: var(--text-main); }

/* Checkbox / Toggle */
.toggle-row { display: flex; align-items: center; justify-content: space-between; padding: 0.35rem 0; }
.toggle-row span { font-size: 0.85rem; }
.toggle { position: relative; width: 36px; height: 20px; }
.toggle input { opacity: 0; width: 0; height: 0; }
.toggle .slider { position: absolute; inset: 0; background: rgba(255,255,255,0.15); border-radius: 20px; cursor: pointer; transition: 0.2s; }
.toggle .slider::before { content: ''; position: absolute; height: 14px; width: 14px; left: 3px; bottom: 3px; background: white; border-radius: 50%; transition: 0.2s; }
.toggle input:checked + .slider { background: var(--primary); }
.toggle input:checked + .slider::before { transform: translateX(16px); }

/* Text input */
input[type="text"] { width: 100%; padding: 0.5rem 0.75rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); border-radius: 6px; color: var(--text-main); font-size: 0.85rem; outline: none; }
input[type="text"]:focus { border-color: var(--primary); }
input[type="text"]::placeholder { color: var(--text-muted); }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.5rem 1rem; border: none; border-radius: 6px; font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: all 0.15s ease; }
.btn-primary { background: var(--primary); color: white; }
.btn-primary:hover { background: var(--primary-hover); }
.btn-ghost { background: rgba(255,255,255,0.05); color: var(--text-main); border: 1px solid var(--border-color); }
.btn-ghost:hover { background: rgba(255,255,255,0.1); }
.btn-danger { background: rgba(239,68,68,0.15); color: var(--danger); }
.btn-danger:hover { background: rgba(239,68,68,0.25); }

/* Info box */
.ctrl-info { padding: 0.75rem; background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.2); border-radius: 6px; }
.ctrl-info p { font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin: 0; }

/* Empty state for controls */
.empty-controls { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; color: var(--text-muted); gap: 0.75rem; }
.empty-controls .icon { font-size: 2rem; opacity: 0.3; }
.empty-controls p { font-size: 0.85rem; }

/* Keyboard shortcut hints */
.kbd { display: inline-block; padding: 2px 6px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; font-size: 0.7rem; font-family: monospace; color: var(--text-muted); }
"""

# ─── Control HTML generators ────────────────────────────────────────────────
def gen_control(ctrl):
    """Generate HTML for a single control element."""
    t = ctrl["type"]
    if t == "info":
        return f'''<div class="ctrl-info"><p>{ctrl["text"]}</p></div>'''
    elif t == "range":
        return f'''<div class="ctrl-group">
  <div class="ctrl-label"><span>{ctrl["label"]}</span><span class="value" id="val-{ctrl["id"]}">{ctrl["default"]}</span></div>
  <input type="range" id="{ctrl["id"]}" min="{ctrl["min"]}" max="{ctrl["max"]}" step="{ctrl.get("step",1)}" value="{ctrl["default"]}"
    oninput="document.getElementById('val-{ctrl["id"]}').textContent=this.value; postCtrl('{ctrl["id"]}',this.value)">
</div>'''
    elif t == "select":
        opts = "\n".join(f'  <option value="{o["value"]}">{o["label"]}</option>' for o in ctrl["options"])
        return f'''<div class="ctrl-group">
  <div class="ctrl-label"><span>{ctrl["label"]}</span></div>
  <select id="{ctrl["id"]}" onchange="postCtrl('{ctrl["id"]}',this.value)">
{opts}
  </select>
</div>'''
    elif t == "checkbox":
        checked = "checked" if ctrl.get("default", False) else ""
        return f'''<div class="toggle-row">
  <span>{ctrl["label"]}</span>
  <label class="toggle"><input type="checkbox" id="{ctrl["id"]}" {checked} onchange="postCtrl('{ctrl["id"]}',this.checked)"><span class="slider"></span></label>
</div>'''
    elif t == "text":
        return f'''<div class="ctrl-group">
  <div class="ctrl-label"><span>{ctrl["label"]}</span></div>
  <input type="text" id="{ctrl["id"]}" placeholder="{ctrl.get("placeholder","")}" oninput="postCtrl('{ctrl["id"]}',this.value)">
</div>'''
    elif t == "button":
        return f'''<button class="btn btn-ghost" onclick="postCtrl('{ctrl["id"]}',true)" style="width:100%">{ctrl["label"]}</button>'''
    return ""


def gen_controls_html(example):
    """Generate the full controls panel HTML for an example."""
    controls = example.get("controls", [])
    if not controls:
        return '''<div class="empty-controls"><div class="icon">🎛️</div><p>No controls available for this example.</p></div>'''
    return "\n".join(gen_control(c) for c in controls)


# ─── Navigation builder ─────────────────────────────────────────────────────
def build_navigation(examples, current_id=None):
    """Build left-panel navigation HTML grouped by library."""
    libs = {}
    for ex in examples:
        lib = ex["library"]
        if lib not in libs:
            libs[lib] = []
        libs[lib].append(ex)

    html_dict = {}
    for lib_key in ["leaflet", "maplibre", "openlayers"]:
        if lib_key not in libs:
            html_dict[lib_key] = ""
            continue
        
        html = '<div class="category"><ul>'
        for ex in sorted(libs[lib_key], key=lambda x: x["name"]):
            active = "active" if ex["id"] == current_id else ""
            html += f'<li><a href="#{ex["id"]}" class="{active}" data-id="{ex["id"]}" onclick="loadExample(\'{ex["id"]}\');return false;"><span class="dot {lib_key}"></span>{ex["name"]}</a></li>'
        html += '</ul></div>'
        html_dict[lib_key] = html
        
    return html_dict


# ─── Index HTML generator ───────────────────────────────────────────────────
def build_index(examples):
    """Generate the main index.html."""
    navs = build_navigation(examples)
    
    # Get unique categories for filtering
    categories = sorted(set(ex["category"] for ex in examples))
    cat_options = "\n".join(f'<option value="{c}">{c}</option>' for c in categories)

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awesome Maps Examples Explorer</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>{CSS_GLOBAL}</style>
</head>
<body>
    <div class="app-layout">
        <!-- Center: Map -->
        <main class="map-panel" id="mapPanel">
            <!-- Top Navbar -->
            <div class="top-navbar" id="topNavbar">
                <h2 id="exampleName">No example selected</h2>
                <div class="nav-controls">
                    <div class="nav-btn-group">
                        <button class="nav-btn" onclick="postMapAction('pan', {{dx: 0, dy: 100}})" title="Pan Up">↑</button>
                        <button class="nav-btn" onclick="postMapAction('pan', {{dx: 0, dy: -100}})" title="Pan Down">↓</button>
                        <button class="nav-btn" onclick="postMapAction('pan', {{dx: 100, dy: 0}})" title="Pan Left">←</button>
                        <button class="nav-btn" onclick="postMapAction('pan', {{dx: -100, dy: 0}})" title="Pan Right">→</button>
                    </div>
                    <div class="nav-btn-group">
                        <button class="nav-btn" onclick="postMapAction('zoom_in')" title="Zoom In">＋</button>
                        <button class="nav-btn" onclick="postMapAction('zoom_out')" title="Zoom Out">－</button>
                    </div>
                </div>
            </div>

            <!-- Map View -->
            <div class="map-placeholder" id="mapPlaceholder">
                <div class="icon">🗺️</div>
                <h2>Select an example</h2>
                <p>Choose an example from the left panel to get started</p>
            </div>
            <iframe id="mapFrame" style="display:none" name="map-frame" onload="onMapLoad()"></iframe>

            <!-- Bottom Drawer Multi-Tab -->
            <div class="bottom-bar-container" id="bottomBarContainer" style="display:none">
                <div class="drawer-wrapper">
                    <div class="drawer-header">
                        <h3 id="drawerTitle">Map Controls</h3>
                        <button class="close-btn" onclick="toggleDrawer(null)">✕ Close</button>
                    </div>
                    
                    <div class="drawer-panel" id="panel-controls">
                        <div class="controls-content" id="controlsContent"></div>
                    </div>
                    
                    <div class="drawer-panel" id="panel-settings">
                        <div class="mockup-grid">
                            <div class="mockup-card">
                                <h4>Map Rendering</h4>
                                <div class="toggle-row"><span>Hardware Acceleration</span> <label class="toggle"><input type="checkbox" checked><span class="slider"></span></label></div>
                                <div class="toggle-row"><span>Anti-aliasing</span> <label class="toggle"><input type="checkbox" checked><span class="slider"></span></label></div>
                                <div class="toggle-row"><span>High DPI Canvas</span> <label class="toggle"><input type="checkbox"><span class="slider"></span></label></div>
                            </div>
                            <div class="mockup-card">
                                <h4>App Preferences</h4>
                                <div class="toggle-row"><span>Dark Theme</span> <label class="toggle"><input type="checkbox" checked><span class="slider"></span></label></div>
                                <div class="toggle-row"><span>Auto-hide Navbar</span> <label class="toggle"><input type="checkbox"><span class="slider"></span></label></div>
                                <div class="toggle-row"><span>Smooth Animations</span> <label class="toggle"><input type="checkbox" checked><span class="slider"></span></label></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="drawer-panel" id="panel-info">
                        <div class="mockup-card" style="max-width: 600px; margin: 0 auto;">
                            <h4 style="color:var(--primary); margin-bottom: 0.5rem;">About this Example</h4>
                            <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.6; margin-bottom: 1.5rem;">
                                This map example demonstrates advanced rendering capabilities and interactions using the selected mapping library. It showcases real-time data handling, responsive design, and custom spatial calculations.
                            </p>
                            <div style="display:flex; gap:1rem;">
                                <div style="flex:1; background:rgba(0,0,0,0.2); padding:0.75rem; border-radius:6px; text-align:center;">
                                    <span style="font-size:0.7rem; color:var(--text-muted); display:block; margin-bottom:0.25rem;">AUTHOR</span>
                                    <span style="font-size:0.85rem; font-weight:600;">Maps Team</span>
                                </div>
                                <div style="flex:1; background:rgba(0,0,0,0.2); padding:0.75rem; border-radius:6px; text-align:center;">
                                    <span style="font-size:0.7rem; color:var(--text-muted); display:block; margin-bottom:0.25rem;">LAST UPDATED</span>
                                    <span style="font-size:0.85rem; font-weight:600;">Just now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="drawer-panel" id="panel-code">
                        <div style="background:#1e1e1e; border-radius:8px; padding:1.25rem; font-family:monospace; font-size:0.85rem; color:#d4d4d4; overflow-x:auto;">
<pre style="margin:0;"><code>// Setup Map Instance
const map = new ol.Map({{
    target: 'map-container',
    layers: [
        new ol.layer.Tile({{
            source: new ol.source.OSM()
        }})
    ],
    view: new ol.View({{
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 2
    }})
}});

map.on('rendercomplete', () => {{
    console.log('Map rendering complete.');
}});</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="bottom-toggles">
                    <button class="drawer-toggle" id="tab-controls" onclick="toggleDrawer('controls')">🎛️ Controls</button>
                    <button class="drawer-toggle" id="tab-settings" onclick="toggleDrawer('settings')">⚙️ Settings</button>
                    <button class="drawer-toggle" id="tab-info" onclick="toggleDrawer('info')">ℹ️ Info</button>
                    <button class="drawer-toggle" id="tab-code" onclick="toggleDrawer('code')">💻 Code</button>
                </div>
            </div>
        </main>

        <!-- Right Sidebar: Navigation & Context -->
        <aside class="sidebar-panel">
            <div class="panel-header">
                <h1>Maps Explorer</h1>
                <select id="sidebarSwitcher" class="sidebar-switcher" onchange="switchSidebar(this.value)">
                    <option value="openlayers">🟠 OpenLayers</option>
                    <option value="leaflet">🍃 Leaflet</option>
                    <option value="maplibre">🚀 MapLibre GL JS</option>
                </select>
                <p id="implementationCount" style="margin-top: 0.25rem;">Select a library...</p>
            </div>
            
            <!-- OpenLayers Panel -->
            <div id="sidebar-openlayers" class="sidebar-content-panel active">
                <div class="search-box">
                    <input type="text" class="search-input" placeholder="🔍 Search OpenLayers..." oninput="filterNav(this.value, 'openlayers')">
                </div>
                <div class="nav-content" id="nav-openlayers">
                    {navs.get('openlayers', '')}
                </div>
            </div>
            
            <!-- Leaflet Panel -->
            <div id="sidebar-leaflet" class="sidebar-content-panel" style="display:none;">
                <div class="search-box">
                    <input type="text" class="search-input" placeholder="🔍 Search Leaflet..." oninput="filterNav(this.value, 'leaflet')">
                </div>
                <div class="nav-content" id="nav-leaflet">
                    {navs.get('leaflet', '')}
                </div>
            </div>
            
            <!-- MapLibre Panel -->
            <div id="sidebar-maplibre" class="sidebar-content-panel" style="display:none;">
                <div class="search-box">
                    <input type="text" class="search-input" placeholder="🔍 Search MapLibre..." oninput="filterNav(this.value, 'maplibre')">
                </div>
                <div class="nav-content" id="nav-maplibre">
                    {navs.get('maplibre', '')}
                </div>
            </div>
        </aside>
    </div>

    <script>
    // ── Example data (embedded from examples.json) ──
    const EXAMPLES = {json.dumps({ex["id"]: ex for ex in examples}, indent=None)};
    let currentExample = null;

    function loadExample(id) {{
        const ex = EXAMPLES[id];
        if (!ex) return;
        currentExample = ex;

        // Update nav
        document.querySelectorAll('.nav-content a').forEach(a => a.classList.remove('active'));
        const link = document.querySelector(`a[data-id="${{id}}"]`);
        if (link) link.classList.add('active');

        // Load map
        document.getElementById('mapPlaceholder').style.display = 'none';
        const frame = document.getElementById('mapFrame');
        frame.style.display = 'block';
        frame.src = ex.file;

        // Update top bar
        document.getElementById('topNavbar').style.display = 'flex';
        document.getElementById('exampleName').textContent = ex.name + ' — ' + ex.description;
        
        // Show bottom bar
        document.getElementById('bottomBarContainer').style.display = 'flex';
        
        // Update controls panel
        renderControls(ex);
    }}

    let activeDrawer = null;

    function toggleDrawer(panelId) {{
        const container = document.getElementById('bottomBarContainer');
        const titles = {{
            'controls': 'Map Controls',
            'settings': 'Application Settings',
            'info': 'Example Information',
            'code': 'Source Code'
        }};
        
        if (activeDrawer === panelId || !panelId) {{
            container.classList.remove('open');
            document.querySelectorAll('.drawer-toggle').forEach(btn => btn.classList.remove('active'));
            activeDrawer = null;
        }} else {{
            document.querySelectorAll('.drawer-panel').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.drawer-toggle').forEach(btn => btn.classList.remove('active'));
            
            document.getElementById('panel-' + panelId).classList.add('active');
            document.getElementById('tab-' + panelId).classList.add('active');
            document.getElementById('drawerTitle').textContent = titles[panelId];
            
            container.classList.add('open');
            activeDrawer = panelId;
        }}
    }}

    function renderControls(ex) {{
        const container = document.getElementById('controlsContent');
        const tab = document.getElementById('tab-controls');
        const controls = ex.controls || [];
        
        if (controls.length === 0) {{
            tab.style.display = 'none';
            container.innerHTML = '';
            if (activeDrawer === 'controls') toggleDrawer(null);
            return;
        }}
        
        tab.style.display = 'flex';
        container.innerHTML = controls.map(genControlHTML).join('');
    }}

    function genControlHTML(ctrl) {{
        switch(ctrl.type) {{
            case 'info':
                return `<div class="ctrl-info"><p>${{ctrl.text}}</p></div>`;
            case 'range':
                return `<div class="ctrl-group">
                    <div class="ctrl-label"><span>${{ctrl.label}}</span><span class="value" id="val-${{ctrl.id}}">${{ctrl.default}}</span></div>
                    <input type="range" id="${{ctrl.id}}" min="${{ctrl.min}}" max="${{ctrl.max}}" step="${{ctrl.step||1}}" value="${{ctrl.default}}"
                        oninput="document.getElementById('val-${{ctrl.id}}').textContent=this.value;postCtrl('${{ctrl.id}}',this.value)">
                </div>`;
            case 'select':
                const opts = ctrl.options.map(o => `<option value="${{o.value}}">${{o.label}}</option>`).join('');
                return `<div class="ctrl-group">
                    <div class="ctrl-label"><span>${{ctrl.label}}</span></div>
                    <select id="${{ctrl.id}}" onchange="postCtrl('${{ctrl.id}}',this.value)">${{opts}}</select>
                </div>`;
            case 'checkbox':
                return `<div class="toggle-row">
                    <span>${{ctrl.label}}</span>
                    <label class="toggle"><input type="checkbox" id="${{ctrl.id}}" ${{ctrl.default?'checked':''}} onchange="postCtrl('${{ctrl.id}}',this.checked)"><span class="slider"></span></label>
                </div>`;
            case 'text':
                return `<div class="ctrl-group">
                    <div class="ctrl-label"><span>${{ctrl.label}}</span></div>
                    <input type="text" id="${{ctrl.id}}" placeholder="${{ctrl.placeholder||''}}" oninput="postCtrl('${{ctrl.id}}',this.value)">
                </div>`;
            case 'button':
                return `<button class="btn btn-ghost" onclick="postCtrl('${{ctrl.id}}',true)" style="width:100%">${{ctrl.label}}</button>`;
            default:
                return '';
        }}
    }}

    function postCtrl(id, value) {{
        // Send control value to iframe via postMessage
        const frame = document.getElementById('mapFrame');
        if (frame && frame.contentWindow) {{
            frame.contentWindow.postMessage({{ type: 'control', id: id, value: value }}, '*');
        }}
    }}

    function postMapAction(action, data = {{}}) {{
        const frame = document.getElementById('mapFrame');
        if (frame && frame.contentWindow && currentExample) {{
            frame.contentWindow.postMessage({{ action: action, library: currentExample.library, ...data }}, '*');
        }}
    }}

    function onMapLoad() {{
        // Map loaded
    }}

    // ── Search / Filter ──
    function filterNav(query, library) {{
        const q = query.toLowerCase();
        const panel = document.getElementById('nav-' + library);
        if (!panel) return;
        
        panel.querySelectorAll('.category').forEach(cat => {{
            let hasVisible = false;
            cat.querySelectorAll('li').forEach(li => {{
                const text = li.textContent.toLowerCase();
                const match = text.includes(q);
                li.style.display = match ? '' : 'none';
                if (match) hasVisible = true;
            }});
            cat.style.display = hasVisible ? '' : 'none';
        }});
    }}

    // ── Keyboard shortcuts ──
    document.addEventListener('keydown', (e) => {{
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
        if (e.key === 'ArrowDown' || e.key === 'j') {{
            e.preventDefault();
            navigateExample(1);
        }} else if (e.key === 'ArrowUp' || e.key === 'k') {{
            e.preventDefault();
            navigateExample(-1);
        }} else if (e.key === '/' || e.key === 'f') {{
            e.preventDefault();
            const activePanel = document.querySelector('.sidebar-content-panel.active .search-input');
            if (activePanel) activePanel.focus();
        }}
    }});

    function navigateExample(dir) {{
        const links = [...document.querySelectorAll('.nav-content a:not([style*="display: none"])')];
        if (!links.length) return;
        const idx = links.findIndex(a => a.classList.contains('active'));
        const next = idx + dir;
        if (next >= 0 && next < links.length) {{
            links[next].click();
            links[next].scrollIntoView({{ block: 'nearest' }});
        }}
    }}

    // ── Hash routing ──
    function checkHash() {{
        const hash = location.hash.slice(1);
        if (hash && EXAMPLES[hash]) loadExample(hash);
    }}
    window.addEventListener('hashchange', checkHash);
    window.addEventListener('DOMContentLoaded', checkHash);

    // ── Sidebar Switcher ──
    function switchSidebar(panelId) {{
        // Hide all sidebar panels
        document.querySelectorAll('.sidebar-content-panel').forEach(panel => {{
            panel.style.display = 'none';
            panel.classList.remove('active');
        }});
        // Show selected panel
        const target = document.getElementById('sidebar-' + panelId);
        if (target) {{
            target.style.display = 'flex';
            target.classList.add('active');
            // Count list items in the active panel
            const count = target.querySelectorAll('li').length;
            document.getElementById('implementationCount').textContent = count + ' interactive examples';
        }}
    }}
    
    // Initialize count for the default panel on page load
    window.addEventListener('DOMContentLoaded', () => {{
        const dropdown = document.getElementById('sidebarSwitcher');
        if (dropdown) switchSidebar(dropdown.value);
    }});
    </script>
</body>
</html>'''


# ─── Example file builder ────────────────────────────────────────────────────
def build_example_file(example):
    """Generate standalone HTML for an example (with blocks for the template engine)."""
    lib = example["library"]
    name = example["name"]

    # Library-specific defaults
    lib_defaults = {
        "leaflet": {
            "css": '<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />',
            "js": '<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>',
            "map_init": "const map = L.map('map').setView([51.505, -0.09], 13);\nL.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);",
            "map_div": '<div id="map" style="width:100%;height:100%"></div>',
        },
        "maplibre": {
            "css": '<link href="https://unpkg.com/maplibre-gl@3.6.2/dist/maplibre-gl.css" rel="stylesheet" />',
            "js": '<script src="https://unpkg.com/maplibre-gl@3.6.2/dist/maplibre-gl.js"></script>',
            "map_init": "const map = new maplibregl.Map({ container: 'map', style: 'https://demotiles.maplibre.org/style.json', center: [-0.09, 51.505], zoom: 12 });\nmap.addControl(new maplibregl.NavigationControl());",
            "map_div": '<div id="map" style="width:100%;height:100%"></div>',
        },
        "openlayers": {
            "css": '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.2.0/ol.css">',
            "js": '<script src="https://cdn.jsdelivr.net/npm/ol@v8.2.0/dist/ol.js"></script>',
            "map_init": "const map = new ol.Map({\n    target: 'map',\n    layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],\n    view: new ol.View({ center: ol.proj.fromLonLat([0, 0]), zoom: 2 })\n});",
            "map_div": '<div id="map" style="width:100%;height:100%"></div>',
        },
    }

    defaults = lib_defaults.get(lib, lib_defaults["leaflet"])

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>{name}</title>
    {defaults["css"]}
    <style>body, html, #map {{ margin: 0; height: 100%; width: 100%; font-family: sans-serif; }}</style>
</head>
<body>
    {defaults["map_div"]}
    {defaults["js"]}
    <script>
    {defaults["map_init"]}
    
    // Listen for control updates from parent
    window.addEventListener('message', (e) => {{
        if (e.data && e.data.type === 'control') {{
            console.log('Control:', e.data.id, '=', e.data.value);
            // Example-specific control handlers can be added here
        }}
    }});
    </script>
</body>
</html>'''


# ─── Main build ──────────────────────────────────────────────────────────────
def main():
    print("=" * 50)
    print("🔨 Awesome Maps - Build Script")
    print("=" * 50)

    # Load examples config (support both list and dict formats)
    with open(EXAMPLES_JSON, 'r') as f:
        config = json.load(f)

    if isinstance(config, list):
        examples = config
    else:
        examples = config["examples"]
    print(f"📋 Loaded {len(examples)} examples from examples.json")

    # Generate index.html
    index_html = build_index(examples)
    index_path = BASE_DIR / "index.html"
    with open(index_path, 'w') as f:
        f.write(index_html)
    print(f"✅ Generated index.html ({len(index_html):,} bytes)")

    # Ensure example directories exist
    for folder in ["openlayers-examples", "leaflet-examples", "maplibre-examples"]:
        (BASE_DIR / folder).mkdir(exist_ok=True)

    # Generate example files that don't exist yet (as stubs with template blocks)
    generated = 0
    for ex in examples:
        file_path = BASE_DIR / ex["file"]
        if not file_path.exists():
            html = build_example_file(ex)
            with open(file_path, 'w') as f:
                f.write(html)
            generated += 1
            print(f"  📝 Created stub: {ex['file']}")
        else:
            # Check if existing file has template blocks; if not, it's a standalone file
            with open(file_path, 'r') as f:
                content = f.read()
            if '{% block' not in content:
                # Wrap existing content in template blocks
                wrapped = f'''{{% block head %}}
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
{{% endblock %}}

{{% block map_div %}}
<div id="map" style="width:100%;height:100%"></div>
{{% endblock %}}

{{% block controls %}}
<p><strong>{ex["name"]}</strong></p>
<p>{ex.get("description", "")}</p>
{{% endblock %}}

{{% block script %}}
{content}
{{% endblock %}}'''
                # Only rewrite if we can safely wrap
                pass  # Keep existing files as-is; they work with serve.py fallback

    print(f"📊 Created {generated} new example stubs")
    
    # ── Inject Static Scripts for GitHub Pages ──
    print("🚀 Making site 100% static for GitHub Pages hosting...")
    injection_script = """
<!-- INJECTED MAP CONTROL SCRIPT -->
<script>
window.addEventListener('message', function(e) {
    if(!e.data || typeof map === 'undefined') return;
    try {
        const action = e.data.action;
        const lib = e.data.library; 
        
        if (action === 'zoom_in') {
            if (lib === 'leaflet' || lib === 'maplibre') map.zoomIn();
            else if (lib === 'openlayers') map.getView().animate({zoom: map.getView().getZoom() + 1, duration: 250});
        }
        else if (action === 'zoom_out') {
            if (lib === 'leaflet' || lib === 'maplibre') map.zoomOut();
            else if (lib === 'openlayers') map.getView().animate({zoom: map.getView().getZoom() - 1, duration: 250});
        }
        else if (action === 'pan') {
            const dx = e.data.dx || 0;
            const dy = e.data.dy || 0;
            if (lib === 'leaflet') map.panBy([dx, dy]);
            else if (lib === 'maplibre') map.panBy([dx, dy], {duration: 250});
            else if (lib === 'openlayers') {
                const view = map.getView();
                const center = view.getCenter();
                const res = view.getResolution();
                view.animate({center: [center[0] + dx * res, center[1] - dy * res], duration: 250});
            }
        }
    } catch(err) { console.warn('Map control injection failed:', err); }
});
</script>
"""
    injected_count = 0
    for ex in examples:
        file_path = BASE_DIR / ex["file"]
        if file_path.exists():
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            if "<!-- INJECTED MAP CONTROL SCRIPT -->" not in content and "</body>" in content:
                content = content.replace("</body>", injection_script + "\n</body>")
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                injected_count += 1
    if injected_count > 0:
        print(f"✅ Injected static map controls into {injected_count} example files")

    print(f"📂 Total examples in sidebar: {len(examples)}")
    print()
    print("🚀 You can now host this statically on GitHub Pages, or run 'python3 serve.py' locally!")
    print("=" * 50)


if __name__ == "__main__":
    main()
