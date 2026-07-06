#!/usr/bin/env python3
"""
Dynamic template server for Awesome Maps Examples.
Serves index.html and example HTML files.
"""

import os
import json
import http.server
import socketserver
import urllib.parse

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def load_examples_config():
    """Load example metadata from examples.json."""
    config_path = os.path.join(BASE_DIR, "examples.json")
    if os.path.exists(config_path):
        with open(config_path, "r") as f:
            return json.load(f)["examples"]
    return []


class MapExplorerHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urllib.parse.urlparse(self.path)
        parsed = parsed_path.path
        params = urllib.parse.parse_qs(parsed_path.query)
        azure_key = params.get('azure_key', [None])[0]

        # Serve index.html
        if parsed == "/" or parsed == "/index.html":
            index_path = os.path.join(BASE_DIR, "index.html")
            if os.path.exists(index_path):
                with open(index_path, "r") as f:
                    content = f.read()
                self.send_response(200)
                self.send_header("Content-type", "text/html")
                self.end_headers()
                self.wfile.write(content.encode("utf-8"))
                return

        # Serve example HTML files as plain HTML (iframe content, no layout wrapping)
        if parsed.endswith(".html") and any(f in parsed for f in ["azure-examples", "leaflet-implementation", "maplibre-implementation", "openlayers-implementation"]):
            filepath = os.path.join(BASE_DIR, "." + parsed)
            if os.path.exists(filepath):
                with open(filepath, "r") as f:
                    content = f.read()

                # Inject Azure Maps key if provided
                if azure_key and "azure-examples" in parsed:
                    content = content.replace("'YOUR_AZURE_MAPS_KEY'", f"'{azure_key}'")

                # Map control injection script
                injection_script = '''
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
'''
                content = content.replace("</body>", injection_script + "</body>")


                self.send_response(200)
                self.send_header("Content-type", "text/html")
                self.end_headers()
                self.wfile.write(content.encode("utf-8"))
                return

        # Fallback to default static serving
        super().do_GET()


if __name__ == "__main__":
    PORT = 8000
    print("=" * 50)
    print("🚀 Awesome Maps Explorer Server")
    print(f"📡 http://localhost:{PORT}")
    print("=" * 50)
    try:
        socketserver.TCPServer.allow_reuse_address = True
        with socketserver.TCPServer(("", PORT), MapExplorerHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
