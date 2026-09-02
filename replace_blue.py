import os
import re

directory = 'src/'

replacements = [
    (r'#00D1FF', '#007AFF'),
    (r'cyan', 'blue')
]

for root, dirs, files in os.walk(directory):
    for filename in files:
        if filename.endswith(".tsx") or filename.endswith(".ts") or filename.endswith(".css"):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r') as file:
                content = file.read()
            
            new_content = content
            for old, new in replacements:
                new_content = re.sub(old, new, new_content)
                
            if content != new_content:
                with open(filepath, 'w') as file:
                    file.write(new_content)
                print(f"Updated {filepath}")
