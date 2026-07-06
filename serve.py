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
    """
    Standard static file server handler.
    Since we now inject all scripts statically during build.main(),
    this server no longer needs to dynamically modify HTML files!
    What you see here is exactly what will be deployed on GitHub Pages.
    """
    pass


if __name__ == "__main__":
    PORT = 8000
    socketserver.TCPServer.allow_reuse_address = True
    
    # Always rebuild the index.html and examples on startup
    try:
        import build
        build.main()
    except Exception as e:
        print(f"Warning: Auto-rebuild failed: {e}")
    
    while True:
        try:
            with socketserver.TCPServer(("", PORT), MapExplorerHandler) as httpd:
                print("=" * 50)
                print("🚀 Awesome Maps Explorer Server")
                print(f"📡 http://localhost:{PORT}")
                print("=" * 50)
                httpd.serve_forever()
            break
        except OSError as e:
            if e.errno == 98: # Address already in use
                print(f"⚠️ Port {PORT} is in use, trying {PORT + 1}...")
                PORT += 1
            else:
                raise
        except KeyboardInterrupt:
            print("\nServer stopped.")
            break
