import os
import json

path = f"{os.getcwd()}"
files_in_dir = sorted(os.listdir(f"{path}/rezepte"))

files = dict()
files['rezepte'] = files_in_dir

with open(f"{path}/static/dir.json", "w") as f:
    json.dump(files, f)

with open(f"{path}/index.md", "w") as index:
    pass

with open(f"{path}/index.md", "a") as index:
    for file in files_in_dir:
        with open(f"{path}/rezepte/{file}", "r") as f:
            line = f.readline().rstrip('\n')
            index.write(
                f'- [{line.replace("# ","")}](#/{file.replace(".md","")})\n')
