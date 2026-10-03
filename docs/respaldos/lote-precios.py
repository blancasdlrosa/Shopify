#!/usr/bin/env python3
"""Print pending price-batch rows grouped by product.

Read-only. Reads a rollback/pending CSV from docs/respaldos/ and prints one line
per product so the batch can be applied through the Shopify Admin API:

    <product_id>|<variant_id>:<price>,<variant_id>:<price>

Usage:
    python3 docs/respaldos/lote-precios.py <csv> <desde> <cuantos>

Example:
    python3 docs/respaldos/lote-precios.py precios-x180-lote31-2026-09-28.csv 20 40

The CSV must live in docs/respaldos/ and is never modified.
"""

import collections
import csv
import os
import sys

BASE = os.path.join(os.path.dirname(os.path.abspath(__file__)))


def main(argv):
    if len(argv) != 4:
        print(__doc__.strip())
        return 2

    nombre, desde, cuantos = argv[1], int(argv[2]), int(argv[3])

    # Only ever read from docs/respaldos/, never anywhere else.
    if os.path.basename(nombre) != nombre:
        print("error: pass only the file name, not a path", file=sys.stderr)
        return 2
    ruta = os.path.join(BASE, nombre)
    if not os.path.isfile(ruta):
        print(f"error: {nombre} not found in docs/respaldos/", file=sys.stderr)
        return 2

    with open(ruta, encoding="utf-8") as f:
        filas = list(csv.DictReader(f))

    columna_precio = (
        "precio_objetivo_eur" if "precio_objetivo_eur" in filas[0] else "precio_aplicado_eur"
    )

    grupos = collections.OrderedDict()
    for fila in filas:
        grupos.setdefault(fila["product_id"], []).append(
            (fila["variant_id"], fila[columna_precio])
        )

    items = list(grupos.items())
    print(f"# {nombre}: {len(filas)} variantes en {len(items)} productos")
    print(f"# mostrando productos {desde} a {min(desde + cuantos, len(items))}")
    for product_id, variantes in items[desde : desde + cuantos]:
        detalle = ",".join(f"{v}:{p}" for v, p in variantes)
        print(f"{product_id}|{detalle}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
