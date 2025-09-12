import os
import json

# Carpeta donde están las imágenes
gallery_folder = "img/gallery"

# Tipos de archivos que queremos incluir
image_extensions = (".jpg", ".jpeg", ".png", ".gif", ".webp")

# Lista que vamos a guardar en JSON
images_list = []

for file_name in os.listdir(gallery_folder):
    if file_name.lower().endswith(image_extensions):
        # Guardamos la ruta relativa para que el navegador la pueda usar
        images_list.append(f"{gallery_folder}/{file_name}")

# Creamos o sobrescribimos images.json
with open("application/image_gallery.json", "w", encoding="utf-8") as f:
    json.dump(images_list, f, indent=4)

print(f"JSON generado con {len(images_list)} imágenes.")
