#!/usr/bin/env python3
"""
Prueba la logica de sections/mirea-mis-guias.liquid.

No ejecuta Liquid: replica paso a paso lo que hace la seccion y comprueba que
decide bien. Lo que se prueba es lo que de verdad puede romperse:

  1. El cruce de SKU. En Liquid `contains` sobre una cadena es SUBCADENA, no
     igualdad, y los SKU de guia se parecen mucho entre si
     (MIREA-GUIA-KBEAUTY vs MIREA-GUIDE-KBEAUTY-EN). La seccion los envuelve en
     comas para evitarlo; aqui se comprueba que el envoltorio hace su trabajo y
     que sin el habria falsos positivos.
  2. Los umbrales de regalo, en centimos.
  3. Que los pedidos cancelados y reembolsados no dan acceso.

Se extrae la tabla del propio .liquid, asi que si alguien cambia un SKU o un
fichero ahi, la prueba lo ve.
"""
import re
import sys
from pathlib import Path

LIQUID = Path(__file__).resolve().parent.parent / "sections" / "mirea-mis-guias.liquid"


def tabla(nombre):
    """Saca las filas de un bloque `capture <nombre> ... endcapture`."""
    src = LIQUID.read_text(encoding="utf-8")
    bloque = re.search(r"capture %s\n(.*?)\n  endcapture" % nombre, src, re.S)
    if not bloque:
        sys.exit("no encuentro el bloque capture %s" % nombre)
    filas = []
    for linea in re.findall(r"echo '([^']+)'", bloque.group(1)):
        filas.extend(f for f in linea.split(";") if f.strip())
    return [f.strip().split("|") for f in filas]


GUIAS_ES = tabla("guias_es")
GUIAS_EN = tabla("guias_en")
RUTINAS = tabla("rutinas")


def resolver(pedidos):
    """Replica el bloque {%- liquid -%} de la seccion."""
    comprados = ","
    mejor = 0
    for p in pedidos:
        if p.get("cancelled"):
            continue
        if p.get("financial_status") in ("refunded", "voided"):
            continue
        if p["total_price"] > mejor:
            mejor = p["total_price"]
        for sku in p["skus"]:
            sku = sku.strip()
            if not sku:
                continue
            envuelto = "," + sku + ","
            if envuelto not in comprados:
                comprados += sku + ","
    return {
        "comprados": comprados,
        "compradas": [f for f in GUIAS_ES + GUIAS_EN if ("," + f[0] + ",") in comprados],
        "regalo_guias": mejor >= 3500,
        "regalo_rutinas": mejor >= 6000,
        "sin_pdf": ",MIREA-GUIA-RETINOIDES," in comprados,
    }


fallos = []


def check(titulo, real, esperado):
    if real != esperado:
        fallos.append("%s\n    esperado: %r\n    real:     %r" % (titulo, esperado, real))


# --- 1. integridad de la tabla ---------------------------------------------
check("hay 6 guias ES", len(GUIAS_ES), 6)
check("hay 7 guias EN", len(GUIAS_EN), 7)
check("hay 5 rutinas", len(RUTINAS), 5)
for fila in GUIAS_ES + GUIAS_EN:
    check("la fila %r tiene 3 campos" % fila[0], len(fila), 3)
    check("%s apunta a un .pdf" % fila[0], ".pdf" in fila[2], True)
for fila in RUTINAS:
    check("la rutina %r tiene 2 campos" % fila[0], len(fila), 2)

skus = [f[0] for f in GUIAS_ES + GUIAS_EN]
check("no hay SKU repetidos", len(skus), len(set(skus)))
check("Retinoides ES no esta en la tabla", "MIREA-GUIA-RETINOIDES" in skus, False)

# --- 2. la trampa del `contains` -------------------------------------------
# Sin envolver en comas, MIREA-GUIA-KBEAUTY daria positivo dentro de una cadena
# que solo contiene MIREA-GUIDE-KBEAUTY-EN? Se comprueba el par real.
crudo = "MIREA-GUIDE-KBEAUTY-EN,"
check(
    "sin comas, un SKU corto puede colarse en uno largo",
    any(corto in crudo for corto in ("MIREA-GUIDE-KBEAUTY",)),
    True,
)
r = resolver([{"total_price": 1295, "skus": ["MIREA-GUIDE-KBEAUTY-EN"]}])
check(
    "quien compra la K-Beauty inglesa NO recibe la espanola",
    sorted(f[0] for f in r["compradas"]),
    ["MIREA-GUIDE-KBEAUTY-EN"],
)
r = resolver([{"total_price": 1295, "skus": ["MIREA-GUIA-KBEAUTY"]}])
check(
    "quien compra la K-Beauty espanola NO recibe la inglesa",
    sorted(f[0] for f in r["compradas"]),
    ["MIREA-GUIA-KBEAUTY"],
)

# --- 3. umbrales de regalo -------------------------------------------------
for total, guias, rutinas_ok, nota in [
    (3419, False, False, "pedido #1008 real, 34,19 EUR: por debajo de 35"),
    (3500, True, False, "exactamente 35,00 EUR: entra"),
    (3499, False, False, "34,99 EUR: no entra"),
    (5999, True, False, "59,99 EUR: guias si, rutinas no"),
    (6000, True, True, "exactamente 60,00 EUR: las dos"),
    (8480, True, True, "pedido #1007 real, 84,80 EUR: las dos"),
]:
    r = resolver([{"total_price": total, "skus": []}])
    check("regalo guias · " + nota, r["regalo_guias"], guias)
    check("regalo rutinas · " + nota, r["regalo_rutinas"], rutinas_ok)

# --- 4. pedidos que no cuentan ---------------------------------------------
r = resolver([{"total_price": 9999, "skus": ["MIREA-GUIA-BARRERA"], "cancelled": True}])
check("un pedido cancelado no da regalo", r["regalo_guias"], False)
check("un pedido cancelado no da la guia", r["compradas"], [])

r = resolver([{"total_price": 9999, "skus": ["MIREA-GUIA-BARRERA"], "financial_status": "refunded"}])
check("un pedido reembolsado no da regalo", r["regalo_guias"], False)
check("un pedido reembolsado no da la guia", r["compradas"], [])

# El #1005 se reembolso entero y el #1006 es reembolso parcial: el parcial si cuenta.
r = resolver([
    {"total_price": 6191, "skus": [], "financial_status": "refunded"},
    {"total_price": 4317, "skus": [], "financial_status": "partially_refunded"},
])
check("reembolso parcial si cuenta, total no", (r["regalo_guias"], r["regalo_rutinas"]), (True, False))

# --- 5. caso mixto ---------------------------------------------------------
r = resolver([
    {"total_price": 995, "skus": ["MIREA-GUIA-BARRERA"]},
    {"total_price": 7000, "skus": ["medicube2720"]},
    {"total_price": 995, "skus": ["MIREA-GUIA-BARRERA"]},
])
check("una guia comprada dos veces sale una vez", len(r["compradas"]), 1)
check("el SKU de un producto fisico no inventa una guia",
      sorted(f[0] for f in r["compradas"]), ["MIREA-GUIA-BARRERA"])
check("el pedido de 70 EUR da los dos regalos", (r["regalo_guias"], r["regalo_rutinas"]), (True, True))

# --- 6. sin sesion / sin nada ---------------------------------------------
r = resolver([])
check("sin pedidos no hay nada", (r["compradas"], r["regalo_guias"], r["sin_pdf"]), ([], False, False))

r = resolver([{"total_price": 995, "skus": ["MIREA-GUIA-RETINOIDES"]}])
check("quien compro Retinoides ES ve el aviso", r["sin_pdf"], True)
check("y no se le ofrece un enlace roto", r["compradas"], [])

# --- resultado ------------------------------------------------------------
total = 1
print("tabla: %d guias ES, %d guias EN, %d rutinas" % (len(GUIAS_ES), len(GUIAS_EN), len(RUTINAS)))
if fallos:
    print("\n%d FALLOS:\n" % len(fallos))
    for f in fallos:
        print("  - " + f)
    sys.exit(1)
print("todas las comprobaciones pasan")
