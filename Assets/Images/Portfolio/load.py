import json
import os
from pathlib import Path

def get_image_files(directory="."):
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp'}
    image_files = []
    
    for file_path in Path(directory).rglob('*'):
        if file_path.suffix.lower() in image_extensions:
            image_files.append(file_path.name)
    
    return image_files

# Main execution
list_files = get_image_files()
print(f"Found {len(list_files)} image files")

total_arr = [
    {
        "url": f"/Assets/Images/Portfolio/{filename}",
        "alt": f"Portfolio image: {filename}"
    }
    for filename in list_files
]

with open("../../JS/JSON/Portfolio_gallery.json", "w") as file:
    json.dump(total_arr, file, indent=2)

print("JSON file created successfully!")