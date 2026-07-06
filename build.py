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

/* Left Panel - Navigation */
.left-panel { width: 300px; min-width: 300px; background: var(--panel-bg); border-right: 1px solid var(--border-color); display: flex; flex-direction: column; z-index: 10; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
.panel-header { padding: 1.5rem; border-bottom: 1px solid var(--border-color); }
.panel-header h1 { font-size: 1.25rem; font-weight: 700; background: linear-gradient(to right, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.25rem; }
.panel-header p { font-size: 0.8rem; color: var(--text-muted); }
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
.map-panel { flex: 1; position: relative; background: #111; }
.map-panel iframe { width: 100%; height: 100%; border: none; }
.map-placeholder { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; }
.map-placeholder .icon { font-size: 3rem; opacity: 0.3; }
.map-placeholder h2 { color: var(--text-muted); font-weight: 400; font-size: 1.25rem; }
.map-placeholder p { color: var(--text-muted); font-size: 0.85rem; opacity: 0.7; }

/* Right Panel - Controls */
.right-panel { width: 320px; min-width: 320px; background: var(--panel-bg); border-left: 1px solid var(--border-color); display: flex; flex-direction: column; z-index: 10; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
.controls-header { padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border-color); }
.controls-header h2 { font-size: 1rem; font-weight: 600; }
.controls-header .example-name { font-size: 0.8rem; color: var(--text-muted); margin-top: 0.15rem; }
.controls-content { padding: 1.5rem; flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 1.25rem; }
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

    html = ""
    for lib_key in ["leaflet", "maplibre", "openlayers"]:
        if lib_key not in libs:
            continue
        lib_info = {
            "leaflet": ("🍃 Leaflet", "leaflet"),
            "maplibre": ("🚀 MapLibre GL JS", "maplibre"),
            "openlayers": ("🟠 OpenLayers", "openlayers"),
        }
        label, css_class = lib_info[lib_key]
        html += f'<div class="category"><span class="lib-badge {css_class}">{label}</span><ul>'
        for ex in sorted(libs[lib_key], key=lambda x: x["name"]):
            active = "active" if ex["id"] == current_id else ""
            html += f'<li><a href="#{ex["id"]}" class="{active}" data-id="{ex["id"]}" onclick="loadExample(\'{ex["id"]}\');return false;"><span class="dot {css_class}"></span>{ex["name"]}</a></li>'
        html += '</ul></div>'
    return html


# ─── Index HTML generator ───────────────────────────────────────────────────
def build_index(examples):
    """Generate the main index.html."""
    navigation = build_navigation(examples)
    
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
        <!-- Left Panel: Navigation -->
        <aside class="left-panel">
            <div class="panel-header">
                <h1>Maps Explorer</h1>
                <p>{len(examples)} interactive examples</p>
            </div>
            <div class="search-box">
                <input type="text" class="search-input" id="searchInput" placeholder="🔍 Search examples..." oninput="filterNav(this.value)">
            </div>
            <div class="nav-content" id="navContent">
                {navigation}
            </div>
        </aside>

        <!-- Center: Map -->
        <main class="map-panel" id="mapPanel">
            <div class="map-placeholder" id="mapPlaceholder">
                <div class="icon">🗺️</div>
                <h2>Select an example</h2>
                <p>Choose an example from the left panel to get started</p>
            </div>
            <iframe id="mapFrame" style="display:none" name="map-frame" onload="onMapLoad()"></iframe>
        </main>

        <!-- Right Panel: Controls -->
        <aside class="right-panel" id="rightPanel">
            <div class="controls-header">
                <h2>Controls & Info</h2>
                <div class="example-name" id="exampleName">No example selected</div>
            </div>
            <div class="controls-content" id="controlsContent">
                <div class="empty-controls">
                    <div class="icon">🎛️</div>
                    <p>Select an example to see its controls</p>
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

        // Update right panel
        document.getElementById('exampleName').textContent = ex.name + ' — ' + ex.description;
        renderControls(ex);
    }}

    function renderControls(ex) {{
        const container = document.getElementById('controlsContent');
        const controls = ex.controls || [];
        if (controls.length === 0) {{
            container.innerHTML = '<div class="empty-controls"><div class="icon">🎛️</div><p>No controls for this example</p></div>';
            return;
        }}
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

    function onMapLoad() {{
        // Map loaded
    }}

    // ── Search / Filter ──
    function filterNav(query) {{
        const q = query.toLowerCase();
        document.querySelectorAll('.nav-content .category').forEach(cat => {{
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
            document.getElementById('searchInput').focus();
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

    return f'''{{% block head %}}
{defaults["css"]}
{{% endblock %}}

{{% block map_div %}}
{defaults["map_div"]}
{{% endblock %}}

{{% block controls %}}
<p><strong>{name}</strong></p>
<p>{example.get("description", "")}</p>
{{% endblock %}}

{{% block script %}}
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
{{% endblock %}}'''


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
    print(f"📂 Total examples in sidebar: {len(examples)}")
    print()
    print("🚀 Run 'python3 serve.py' to start the server")
    print("=" * 50)


if __name__ == "__main__":
    main()
