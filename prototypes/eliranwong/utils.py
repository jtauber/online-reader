from pynestle1904 import nestle_rows


def rows_by_verses_by_chapters_by_book():

    last_book = None
    books = []
    chapters = None
    verses = None
    rows = None

    for row in nestle_rows():
        b, cv = row["ref"].split()
        c, v = cv.split(":")

        if b != last_book:
            if verses:
                verses[1].append(rows)
                chapters[1].append(verses)
                books.append(chapters)

            chapters = (b, [])
            last_book = b
            last_chapter = 0
            last_verse = 0
            verses = None

        if c != last_chapter:
            if verses:
                verses[1].append(rows)
                chapters[1].append(verses)

            verses = (c, [])
            last_chapter = c
            last_verse = 0
            rows = None

        if v != last_verse:
            if rows:
                verses[1].append(rows)
            rows = (v, [])
            last_verse = v

        rows[1].append(row)

    verses[1].append(rows)
    chapters[1].append(verses)
    books.append(chapters)

    return books
