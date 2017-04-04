#!/usr/bin/env python3

import os
import shutil

from jinja2 import Environment, FileSystemLoader
from utils import rows_by_verses_by_chapters_by_book


env = Environment(
    loader=FileSystemLoader("templates"),
)
template = env.get_template("base.html")


OUTPUT_DIR = "output"


if __name__ == "__main__":
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        print(f"created {OUTPUT_DIR}")

    book_name = "1 John"
    book_code = 690
    book_num = 23

    chapters = rows_by_verses_by_chapters_by_book()[book_num - 1][1]

    for chapter_num in range(1, len(chapters) + 1):
        verses = chapters[chapter_num - 1][1]
        output_filename = os.path.join(OUTPUT_DIR, f"{book_code}_{chapter_num}.html")

        with open(output_filename, "w") as output:
            print(template.render(
                verses=verses,
                chapter=chapter_num,
                chapter_count=len(chapters),
                book_code=book_code,
                book_name=book_name,
            ), file=output)
        print(f"wrote {output_filename}")

    for filename in ["nestle1904.css"]:
        input_filename = os.path.join("css", filename)
        output_filename = os.path.join(OUTPUT_DIR, filename)
        shutil.copy(input_filename, output_filename)
        print(f"copied {output_filename}")

    for filename in ["ew.js"]:
        input_filename = os.path.join("js", filename)
        output_filename = os.path.join(OUTPUT_DIR, filename)
        shutil.copy(input_filename, output_filename)
        print(f"copied {output_filename}")
