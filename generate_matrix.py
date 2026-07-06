import json
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'const EXAMPLES = ({.*});'
match = re.search(pattern, content)
examples = json.loads(match.group(1))

matrix = {}
for key, ex in examples.items():
    lib = ex['library']
    name = ex['name']
    file_base = ex['file'].split('/')[-1]
    
    if file_base not in matrix:
        matrix[file_base] = {'name': name, 'leaflet': False, 'maplibre': False, 'openlayers': False}
    matrix[file_base][lib] = True

print(f"{'Feature / Example File':<35} | {'Leaflet':<10} | {'MapLibre':<10} | {'OpenLayers':<10}")
print("-" * 75)
for file_base, info in sorted(matrix.items()):
    l = '✅' if info['leaflet'] else '❌'
    m = '✅' if info['maplibre'] else '❌'
    o = '✅' if info['openlayers'] else '❌'
    print(f"{file_base:<35} | {l:<10} | {m:<10} | {o:<10}")

