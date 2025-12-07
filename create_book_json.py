import os
import json

# Folder containing Markdown files
docs_folder = "docs"

# Output JSON file
output_file = os.path.join(docs_folder, "book_texts.json")

book_data = []

# Loop through all .md files
for filename in os.listdir(docs_folder):
    if filename.endswith(".md"):
        filepath = os.path.join(docs_folder, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        book_data.append({
            "filename": filename,
            "content": content
        })

# Save to book_texts.json
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(book_data, f, indent=2, ensure_ascii=False)

print(f"Saved {len(book_data)} Markdown files to {output_file}")
