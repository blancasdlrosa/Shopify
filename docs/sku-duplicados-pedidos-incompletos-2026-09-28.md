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

---

## ACTUALIZACIÓN · 28-09-2026, misma noche · APLICADO

Blanca autoriza: *"si es la solución a un problema hazlo"*.

**Vaciado el SKU de las 72 fichas gemelas en borrador.** 72 mutaciones,
**cero `userErrors`**. No se ha borrado, archivado ni despublicado nada: las
fichas siguen existiendo, en borrador, con su precio, su inventario y sus
imágenes. Lo único que ha cambiado es que el campo SKU está vacío.

**Verificado releyendo de la tienda**, no fiándome de la respuesta de la
mutación. Seis SKUs comprobados uno a uno —entre ellos los dos que rompieron
#1004 y #1006— y **cada uno devuelve ahora exactamente una ficha, la ACTIVA**,
con su SKU intacto. Comprobada además una gemela entera
(`Product/11163080458577`): sigue `DRAFT`, `handle` intacto, precio 20,91 €,
1.000 unidades, `sku: null`.

Reversible al completo desde
`docs/respaldos/sku-duplicados-activo-borrador-2026-09-28.csv`, que guarda el
valor exacto de cada SKU retirado.

### Las 5 que he dejado fuera, y por qué

De los 77 pares, 5 tienen títulos distintos en las dos fichas. No las he tocado
porque no son duplicados limpios y hay que mirarlas a mano:

| SKU | Ficha ACTIVA | Ficha BORRADOR |
|---|---|---|
| 12669558556 | K-SECRET Seoul 1988 Sun Collagen Complex 7 SPF50+ · 50 ml | K-SECRET SEOUL 1988 SUN : COLLAGEN COMPLEX 7 + PLUM 50ml |
| 2398643640 | NEOGEN Dermalogy **Green Tea Moist** PHA Gauze Peeling | NEOGEN Dermalogy **Wine Lift** PHA Gauze Peeling |
| 4843151328 | Paul Madison Signature Body Wash White Musk 1077mL | PAUL MEDISON Signature Body Wash 1077ml #White Musk |
| 4947540764 | Dr.G pH Cleansing R.E.D Blemish Clear Soothing Foam 150ml | Dr.G pH Cleansing Red Blemish Clear Soothing Foam 150ml |
| 7631623401 | DEWYTREE Miracle **Vitamin C** Serum 40ml | DEWYTREE Miracle **Pore Minimizing** Serum 30ml |

Tres son el mismo producto escrito de dos maneras (K-SECRET, PAUL MEDISON,
Dr.G): se pueden limpiar igual que las 72, pero quiero que lo confirmes porque
el título no coincide y no quiero asumir.

**Las dos en negrita son peores que un duplicado: son productos distintos
compartiendo un SKU.** Un té verde y un vino; una vitamina C de 40 ml y un
minimizador de poros de 30 ml. Si una clienta pide uno, Korealy puede mandar el
otro y nadie se entera hasta que se abre la caja. Esas dos hay que corregirlas
dándole a cada producto su SKU real, y el SKU real lo tiene Korealy.

### Qué esperar ahora

El patrón que rompió #1004 y #1006 está cerrado: ningún SKU de esos 72 productos
activos apunta ya a dos fichas. Lo que **no** arregla esto son los 1.033 SKUs
compartidos entre varias fichas ACTIVAS —el caso TIRTIR de las 50 fichas—, que
siguen igual y siguen siendo el riesgo grande.

Y sigue sin confirmarse el mecanismo dentro de la app de Korealy. Si con esto
deja de fallar, queda probado. Si vuelve a fallar, el problema está en su lado y
no en el catálogo, que también es información útil.

---

## CORRECCIÓN · 28-09-2026 · me equivoqué en el reparto de los duplicados

Escribí más arriba que el TIRTIR Mask Fit Red Cushion tenía **"50 fichas activas
con el mismo SKU"**. **Es falso y lo corrijo.**

Lo comprobé abriendo el producto: son **2 fichas** (18 g y mini 4,5 g), cada una
con **45 tonos**, y **los 45 tonos comparten el mismo SKU** `1000000715`. Conté
variantes y las llamé fichas. El error es mío, no de los datos.

### El reparto real de los 1.164 SKUs duplicados

| Forma | SKUs | Qué significa |
|---|---|---|
| **Repetido DENTRO de una sola ficha** | **860** | Un producto con N tonos/sabores/tamaños donde **todas las variantes llevan el mismo SKU**. Afecta a **859 productos activos**. |
| **Repetido ENTRE fichas distintas** | **259** | Dos o más productos diferentes con el mismo SKU. Afecta a **475 productos activos**. |
| Mezcla de las dos | 45 | |

El patrón dominante **no es "fichas duplicadas"**: es **un catálogo donde el SKU
no identifica la variante**. Eso cambia el arreglo por completo.

- Lo que yo pensaba: hay que despublicar fichas repetidas. **No.**
- Lo que es: **cada tono, tamaño y sabor necesita su propio SKU**, y ese dato lo
  tiene Korealy. No se puede inventar.

### Por qué esto importa más de lo que parecía

Con 45 tonos al mismo SKU, cuando una clienta compra el tono *21N Ivory* lo que
llega a Korealy no distingue ese tono de los otros 44 — **ni distingue el bote de
18 g del mini de 4,5 g**, porque los dos formatos llevan también el mismo SKU.

Y entre fichas distintas hay casos peores, verificados:

- `11774425864` → THE FACE SHOP Vitamin Lip Mask **Blueberry**, **Watermelon**,
  **C** y **Rice**, los cuatro al mismo SKU.
- `8253490231` → MEDIAN Green-Propolis **Fresh Mint**, **Fresh Peach** y
  **Pure Mint**, los tres al mismo SKU.
- `4552518687` → cuatro dentífricos MEDIAN distintos al mismo SKU.

Esto no hace desaparecer una línea del pedido: hace que **llegue el producto
equivocado**, que es peor porque no se detecta.

### Estado

Pedido a Korealy el 28-09 por la noche, en el mismo hilo de #1006, con los
ejemplos concretos: SKU por tono/tamaño, los SKU reales de los productos que
colisionan, la lista de GTIN como archivo adjunto, y cómo completar #1006 sin
otro cargo manual. **No he inventado ningún identificador y no lo haré.**

Hasta que contesten, los 859 + 475 productos siguen sin poder identificarse con
precisión en un pedido. No hay arreglo que yo pueda aplicar desde aquí sin el
dato del proveedor.
