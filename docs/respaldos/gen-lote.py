#!/usr/bin/env python3
"""Build the aliased productUpdate mutation for a translation batch.

Why this exists: on 2026-09-27 a batch was written by hand and one index was
skipped, which shifted 28 products onto the wrong descriptions. This script
resolves every product ID from the queue instead of by hand, and refuses to emit
anything unless each Spanish text is paired with a title that contains its
expected keyword. Feed it a dict of {index: (title_keyword, html)}.

Usage: edit LOTE below, then `python3 docs/respaldos/gen-lote.py`.
"""
import json, os, sys

QUEUE = os.environ.get(
    "COLA",
    "/tmp/claude-0/-home-user-Shopify/a8673c5e-1063-51e3-bcd4-1b237016aab2/scratchpad/pendientes.json",
)

LOTE = {}  # {524: ("TONYMOLY", "<p>...</p>"), ...}


def build(lote, queue_path=QUEUE):
    rows = json.load(open(queue_path))
    blocks, errors = [], []
    for i in sorted(lote):
        keyword, html = lote[i]
        row = rows[i]
        if keyword.lower() not in row["t"].lower():
            errors.append(f"index {i}: expected '{keyword}' in title '{row['t']}'")
            continue
        if '"""' in html or "\\" in html:
            errors.append(f"index {i}: html is not safe inside a GraphQL block string")
            continue
        blocks.append(
            f'  m{i}: productUpdate(product: {{id: "{row["id"]}", '
            f'descriptionHtml: """{html}"""}}) {{ userErrors {{ field message }} }}'
        )
    return blocks, errors


if __name__ == "__main__":
    blocks, errors = build(LOTE)
    if errors:
        print("REFUSED — nothing emitted:", file=sys.stderr)
        for e in errors:
            print("  " + e, file=sys.stderr)
        sys.exit(1)
    print(f"# {len(blocks)} blocks verified against queue titles")
    print("mutation {")
    print("\n".join(blocks))
    print("}")
