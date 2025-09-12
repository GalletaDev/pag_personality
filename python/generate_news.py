import os
import json

source_folder = "application/notice_source"
notice_data = []

for file_name in os.listdir(source_folder):
    if file_name.lower().endswith((".txt", ".md")):
        with open(os.path.join(source_folder, file_name), "r", encoding="utf-8") as f:
            lines = [line.strip() for line in f.readlines() if line.strip()]

        notice = {}
        info_list = []

        for line in lines:
            if line.startswith("Título:"):
                notice["title"] = line.replace("Título:", "").strip()
            elif line.startswith("Fecha:"):
                notice["day"] = line.replace("Fecha:", "").strip()
            elif line.startswith("-"):
                info_list.append(line[1:].strip())

        notice["info"] = info_list
        notice_data.append(notice)

# Ordenar por fecha descendente
notice_data.sort(key=lambda x: x["day"], reverse=True)

# Guardar JSON
with open("application/notice_data.json", "w", encoding="utf-8") as f:
    json.dump(notice_data, f, indent=4, ensure_ascii=False)

print(f"notice_data.json generado con {len(notice_data)} noticias.")
