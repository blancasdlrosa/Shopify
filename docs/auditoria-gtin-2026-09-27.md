# Auditoría GTIN/EAN y catálogo · 27-09-2026

Punto H de la lista de prioridades. Medido contra la tienda, no estimado.

## Cobertura de EAN: 6,5 % en la muestra

`productVariantsCount` no sirve para esto: topa en 10.000 y devuelve
`precision: AT_LEAST`, así que da 10.000 tanto para "todas" como para "con barcode"
como para "sin barcode". El filtro no discrimina. Hay que contar a mano.

Muestra de 1.000 variantes tomada por cuatro ordenaciones distintas, para no medir
un solo lote de importación:

| Muestra | Con EAN | Sin EAN |
|---|---|---|
| 250 más antiguas por ID | 64 | 186 |
| 250 más recientes por ID | **0** | 250 |
| 250 por título A→Z | 0 | 250 |
| 250 por título Z→A | 1 | 249 |
| **Total** | **65 (6,5 %)** | 935 (93,5 %) |

Es una muestra, no un censo: la API no permite contar el total exacto por encima de
10.000. Pero el patrón es claro y consistente en tres de las cuatro ordenaciones.

**Lo más grave: las 250 variantes más recientes por ID no traen ni un EAN.** La última
importación masiva entró sin el campo. Los EAN que existen están concentrados en los
lotes antiguos, los que se cargaron a mano con SKU del tipo `MS-<EAN>` (donde el SKU
*es* el EAN) y en un bloque de productos de marcas concretas: PURITO, SKIN1004,
Torriden, Rated Green, Isntree, Tocobo, AXIS-Y, Klairs.

## Por qué esto bloquea Google Merchant

Sin GTIN, Google puede aceptar la ficha con `brand` + `mpn`, pero:

- El rendimiento cae mucho: sin GTIN, Google no puede agrupar la oferta con las de
  otros vendedores del mismo producto ni enseñarla en las comparativas.
- En cosmética, cuando el fabricante asigna GTIN, Google espera el GTIN. Estos
  productos coreanos **tienen EAN de fábrica** (los que sí están cargados empiezan por
  8809 y 8800, prefijos de Corea del Sur). O sea: el dato existe, simplemente no está
  en la tienda.

## Lo que NO he hecho, y por qué

**No he inventado ni un solo GTIN.** Es regla tuya explícita y además es lo correcto:
un EAN inventado o derivado del SKU es un dato falso en un feed comercial, y Google lo
detecta y suspende la cuenta. Tampoco he usado el SKU como barcode.

Me planteé rellenar los que faltan copiando el EAN de un producto duplicado idéntico.
**Lo he descartado**: el emparejamiento no es seguro. Ejemplo real: el curado
`MS-HID-RL-BIRCH` "Round Lab Birch Juice Moisturizing Cream" no lleva tamaño en el
título, y el importado con EAN es "· 80 ml". Probablemente sea el mismo, pero
"probablemente" no vale para un GTIN. Un EAN mal emparejado es peor que ninguno:
manda a la ficha de otro producto.

## BLOQUEADO · qué hace falta

Esto no se desbloquea con más trabajo mío: hace falta el dato de origen.

**Lo que hay que pedir al proveedor:** el listado del catálogo con la columna EAN /
barcode junto al SKU. Casi todos los mayoristas coreanos lo tienen porque lo necesitan
para aduanas. Con ese CSV, cargar los 11.000+ EAN es un trabajo de una tarde y
verificable uno a uno contra el SKU.

Mientras no llegue: el feed puede salir con `brand` + `mpn` para no quedarse sin
Shopping, sabiendo que rendirá peor. Eso sí lo puedo preparar.

## Hallazgo aparte: los 4 Packs están ARCHIVADOS

Buscando duplicados encontré los 22 productos del catálogo curado original (SKU
`MS-LIM-*`, `MS-TRA-*`, `MS-HID-*`, `MS-PRO-*`, `MS-PACK-*`). **Todos están
ARCHIVED con stock 0**, así que no compiten con el catálogo importado en la tienda.
Me preocupaba que fueran fichas duplicadas visibles; lo comprobé y no lo son.

Pero entre ellos están los cuatro packs, archivados:

| Pack | SKU | Precio |
|---|---|---|
| Pack Primera vez | `MS-PACK-PRIMERA` | 65,00 € |
| Pack Piel grasa con granitos | `MS-PACK-GRASA` | 69,00 € |
| Pack Piel seca | `MS-PACK-SECA` | 68,00 € |
| Pack Piel sensible | `MS-PACK-SENSIBLE` | 65,00 € |

Eso es un activo de merchandising ya construido, con precio puesto, y es justo lo que
sube el ticket medio: un pack de 65 € frente a un sérum de 19,90 €. Está apagado.

**No lo he reactivado.** Desarchivar es volver a hacer visible algo que se quitó, y no
sé por qué se quitó — puede ser que el stock de los componentes no dé. Si quieres, lo
compruebo contra el inventario real de cada componente y te digo cuáles se pueden
reactivar sin prometer stock que no existe.
