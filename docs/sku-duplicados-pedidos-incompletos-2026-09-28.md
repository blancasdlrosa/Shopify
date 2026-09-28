# Por qué llegan pedidos incompletos a Korealy · 28-09-2026

Dos pedidos de tres han salido con un producto de menos. No es mala suerte ni un
fallo puntual de Korealy: es un defecto del catálogo, está medido y tiene nombre.

## La prueba

Los cinco artículos de los dos pedidos que fallaron, uno por uno:

| Pedido | Artículo | SKU | ¿Llegó a Korealy? | ¿SKU duplicado en Shopify? |
|---|---|---|---|---|
| #1004 | AESTURA REGEDERM 365 Intensive Lifting Capsule Cream 50ml | 9126388712 | Sí | No |
| #1004 | AESTURA REGEDERM 365 Retinoid Eye Serum 15ml | 10739524582 | Sí | No |
| #1004 | AESTURA Atobarrier 365 Capsule Toner 300ml | 13516780955 | **No** | **Sí** — ficha ACTIVA + gemela BORRADOR |
| #1006 | whamisa Organic Seeds Hair Treatment 200ml | 12679362713 | Sí | No |
| #1006 | whamisa Organic Pear Blossom Sunscreen SPF50+ 50ml | 11774774813 | **No** | **Sí** — ficha ACTIVA + gemela BORRADOR |

Cinco de cinco. Los tres que sincronizaron tienen SKU único. Los dos que se
perdieron tienen una ficha gemela en borrador con **el mismo SKU** y el mismo
título, creada por duplicado en la importación (el `handle` de la gemela acaba
en `-1`).

Es correlación perfecta sobre los dos pedidos, no una teoría. Lo que todavía no
puedo probar sin Korealy es el mecanismo exacto dentro de su app —por qué un SKU
ambiguo hace que la línea desaparezca en vez de duplicarse. Eso está preguntado.

## El alcance, medido sobre el catálogo entero

No he muestreado. Export completo por `bulkOperationRunQuery`: **13.096 variantes**.

- **8.181** SKUs distintos.
- **1.164** SKUs aparecen en más de una ficha — **6.028 variantes** implicadas.
- **51** variantes no tienen SKU.

Dentro de eso hay **dos problemas distintos** que conviene no mezclar:

**A · La gemela en borrador — 77 SKUs.** Una ficha ACTIVA y una ficha BORRADOR con
el mismo SKU. En 72 de los 77 el título es idéntico carácter por carácter: son
duplicados puros de importación. **Este es el patrón que rompió #1004 y #1006.**
Lista completa en `docs/respaldos/sku-duplicados-activo-borrador-2026-09-28.csv`.

**B · El SKU compartido entre fichas activas — 1.033 SKUs.** Aquí varias fichas
ACTIVAS comparten un mismo SKU. El caso extremo es `1000000715`, el TIRTIR Mask
Fit Red Cushion: **50 fichas activas con el mismo SKU**, una por tono. Korealy
recibe el SKU y no puede saber qué tono pidió la clienta.

En total **1.310 productos activos de 7.740 — el 16,9 % del catálogo vendible —
comparten SKU con otro producto activo.** Inventario completo en
`docs/respaldos/sku-duplicados-catalogo-2026-09-28.csv`.

El problema B es potencialmente peor que el A: el A hace desaparecer una línea y
se nota; el B puede mandar el tono equivocado y no se nota hasta que la clienta
abre la caja.

## Lo que he hecho

**Pedido #1006 puesto en ON_HOLD** (`FulfillmentOrder/9403425685841`, motivo
anotado en el propio pedido). Verificado releyéndolo: `displayFulfillmentStatus:
ON_HOLD`. Es exactamente lo que ya habías pedido por correo a Korealy a las 19:39
—"do not ship as an incomplete order"—, pero ahora también está bloqueado del
lado de Shopify, no solo pedido por email. Se suelta en un segundo cuando Korealy
confirme los dos artículos.

No he borrado, archivado ni despublicado ninguna ficha.

## Lo que hace falta que decidas

**1 · Las 72 gemelas en borrador.** Propongo **vaciarles el SKU** (no borrarlas,
no archivarlas: solo dejar el campo SKU en blanco). Son fichas en borrador: no se
ven, no se venden, no están en ninguna colección. Vaciar el SKU elimina la
ambigüedad para Korealy sin tocar nada visible, y el CSV de respaldo guarda el
valor exacto de cada una, así que se revierte entero si me equivoco.

Necesito tu sí porque tu regla 1 dice que no toque fichas de producto sin
preguntar, y la respeto aunque sea reversible. Son quince minutos.

**2 · Los 1.033 SKU compartidos entre fichas activas.** Esto no lo arreglo yo con
un cambio masivo: hay que decidir producto por producto si son tonos del mismo
artículo (y entonces deberían ser variantes de una sola ficha, no 50 fichas) o
productos distintos mal importados. Es trabajo de catálogo, largo, y quiero
plantearlo cuando Korealy conteste: si su app resuelve por SKU, la reestructura
tiene que hacerse de forma que ellos la entiendan.

Mientras tanto, y esto sí es urgente: **cualquier pedido que incluya uno de esos
1.310 productos puede salir mal.** Hasta que esté resuelto, merece la pena
revisar a mano cada pedido contra Korealy antes de soltarlo.

## Lo que sigue pendiente de Korealy

Preguntado el 28-09 a las 19:39, sin respuesta todavía:
por qué el SKU duplicado rompe la sincronización, qué ficha debe quedar
conectada, cómo añadir el artículo que falta a #1006 sin otro cargo manual, y
cómo evitar que vuelva a pasar.
