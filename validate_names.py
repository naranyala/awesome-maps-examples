import json
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'const EXAMPLES = ({.*});'
match = re.search(pattern, content)
examples = json.loads(match.group(1))

for key, ex in examples.items():
    file_base = ex['file'].split('/')[-1]
    name = ex['name']
    
    # Check for obvious mismatches
    if 'leaflet' in name.lower() and ex['library'] != 'leaflet':
        print(f"Mismatch: {key} -> {name} (Library: {ex['library']})")
    
    if file_base == 'custom-controls.html' and 'Custom Controls' not in name:
        print(f"Mismatch: {key} -> {name} (File: {file_base})")
    
    print(f"[{ex['library']}] {file_base}: {name}")

