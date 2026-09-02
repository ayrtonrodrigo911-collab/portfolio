import os
import re

directory = 'src/components/'

replacements = [
    (r'emerald', 'cyan'),
    (r'rose', 'blue'),
    (r'red', 'blue'),
    (r'green', 'cyan')
]

for filename in os.listdir(directory):
    if filename.endswith(".tsx"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r') as file:
            content = file.read()
        
        new_content = content
        for old, new in replacements:
            new_content = re.sub(old, new, new_content)
            
        if content != new_content:
            with open(filepath, 'w') as file:
                file.write(new_content)
            print(f"Updated {filename}")
