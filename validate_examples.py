import json
import os
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'const EXAMPLES = ({.*});'
match = re.search(pattern, content)
if not match:
    print("Could not find EXAMPLES in index.html")
    exit(1)

examples = json.loads(match.group(1))

directories = ['leaflet-examples', 'maplibre-examples', 'openlayers-examples']

# Get all actual HTML files in these directories
actual_files = set()
for d in directories:
    for f in os.listdir(d):
        if f.endswith('.html'):
            actual_files.add(os.path.join(d, f))

# Validate registered examples
registered_files = set()
missing_files = []
for key, ex in examples.items():
    filepath = ex['file']
    registered_files.add(filepath)
    if not os.path.exists(filepath):
        missing_files.append((key, filepath))

# Find files that exist but are not registered
unregistered_files = actual_files - registered_files

print(f"Total Registered: {len(examples)}")
print(f"Total Actual Files: {len(actual_files)}")
print("\n--- Missing Files (Registered but don't exist) ---")
for key, f in missing_files:
    print(f"- {key}: {f}")

print("\n--- Unregistered Files (Exist but not in index.html) ---")
for f in sorted(unregistered_files):
    print(f"- {f}")

