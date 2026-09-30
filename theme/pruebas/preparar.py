"""Extrae del .liquid las funciones de recomendacion y las 11 tarjetas de
respaldo, para que las pruebas midan el codigo real de la seccion."""
import json
import os
import re

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LIQUID = os.path.join(RAIZ, "theme", "sections", "mirea-ai.liquid")
SALIDA = os.path.join(RAIZ, "theme", "pruebas")

# Precios leidos de la Admin API el 30-09-2026. Si cambian los precios hay que
# volver a leerlos: no se inventan.
PRECIOS = {
    "beauty-of-joseon-relief-sun-rice-probiotics-50ml-spf50-pa": 18.90,
    "anua-heartleaf-quercetinol-pore-deep-cleansing-foam-150ml": 22.90,
    "medicube-zero-foam-cleanser-120g": 31.90,
    "medicube-kojic-acid-turmeric-niacinamide-serum-30ml": 40.90,
    "medicube-txa-niacinamide-capsule-cream-55g": 43.90,
    "anua-3-ceramide-panthenol-moisture-barrier-cream-100ml": 30.00,
    "beplain-cicaful-ampoule-30ml": 12.00,
    "medicube-hyaluronic-multi-peptide-serum-30ml": 40.90,
    "medicube-collagen-jelly-cream-50ml": 17.99,
    "medicube-deep-vita-a-retinol-serum-30ml": 21.59,
    "medicube-pdrn-pink-peptide-serum-30ml": 22.99,
}


def extraer_funcion(src, nombre):
    inicio = src.index("      function %s(" % nombre)
    fin = src.index("\n      }\n", inicio) + len("\n      }\n")
    return src[inicio:fin]


def main():
    src = open(LIQUID, encoding="utf-8").read()

    js = "".join(extraer_funcion(src, n) for n in ("tokens", "price", "score", "choose"))
    open(os.path.join(SALIDA, "logic.js"), "w", encoding="utf-8").write(js)

    fila = re.search(r"assign respaldo = '(.*?)' \| split: ','", src, re.S)
    tarjetas = []
    for linea in fila.group(1).split(","):
        c = linea.split("|")
        if len(c) != 7:
            raise SystemExit("fila mal formada en el pool de respaldo: %r" % linea[:60])
        tarjetas.append({
            "handle": c[0],
            "dataset": {
                "role": c[1],
                "goals": c[3],
                "skins": c[4],
                "avoid": c[5].replace("-", ""),
                "intensity": c[6],
                "price": str(PRECIOS[c[0]]),
            },
        })

    with open(os.path.join(SALIDA, "cards.json"), "w", encoding="utf-8") as f:
        json.dump(tarjetas, f, ensure_ascii=False)

    print("funciones extraidas: tokens, price, score, choose")
    print("tarjetas de respaldo: %d" % len(tarjetas))


if __name__ == "__main__":
    main()
