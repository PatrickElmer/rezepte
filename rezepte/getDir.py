import os
import json

os.chdir(os.getcwd())
os.system('tree -Jo dir.json -P "*.md" --noreport')

with open("dir.json", "r") as f:
    rezepte = json.load(f)

rezepte = rezepte[0]['contents']

for i, rezept in enumerate(rezepte):
    filename = rezepte[i]['name']
    with open(filename, "r") as file:
        header = file.readline().rstrip()

    print(f"'{header[2:]}': \t '{filename}'")
