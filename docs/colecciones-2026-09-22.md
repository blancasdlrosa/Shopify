# Por qué las secciones salían casi vacías (y qué he cambiado)

22 de septiembre de 2026.

## El problema, dicho en una frase

La tienda tiene **7.738 productos activos y publicados**, pero las secciones se
alimentaban de **etiquetas que solo llevan unos 180 productos**. Los otros 7.500
existían, estaban publicados y se podían comprar — simplemente no entraban en
ninguna sección.

Por eso entrabas en "Dispositivos faciales" y salían 10.

## Por qué pasaba

En la tienda conviven **dos clasificaciones que no se hablan entre sí**:

1. **El "tipo de producto"**, que vino con la importación del proveedor. Lo llevan
   los 7.738. Hay 273 tipos distintos: `Toner`, `Cleansing Foam`, `Facial Mask`…
2. **Las etiquetas Mirea** (`Paso:`, `Piel:`, `Rutina:`, `tecnologia`, `cuidado-capilar`),
   que puse a mano y solo llevan las fichas curadas.

Las secciones grandes usaban la clasificación 1 y estaban llenas. Las secciones
del menú usaban la clasificación 2 y estaban vacías. No era un fallo de la tienda:
era que la regla preguntaba por algo que casi ningún producto tiene.

## Qué he hecho

He reescrito **las reglas de 30 colecciones** para que pregunten por el tipo de
producto en vez de por la etiqueta. **No he tocado ni un solo producto**: solo la
regla de cada colección. Es reversible en un minuto y no afecta al feed de Google.

| Sección | Antes | Ahora |
|---|---:|---:|
| **Piel** | 3.737 | **5.037** |
| Maquillaje | 1.347 | 1.378 |
| Mascarillas | 977 | 1.047 |
| Limpiadores | 905 | 966 |
| Hidratantes | 658 | 857 |
| Tónicos y esencias | 562 | 814 |
| Sérums y ampollas | 706 | 806 |
| Rostro | 661 | 705 |
| Cabello | 605 | 629 |
| Protección solar | 560 | 578 |
| Ojos (maquillaje) | 334 | 358 |
| Cuidado corporal | 344 | 369 |
| Desmaquillante | 295 | 309 |
| Exfoliantes y pads | 106 | 273 |
| Contorno de ojos | 222 | 243 |
| Champús | 229 | 234 |
| Preparación y acabado | 201 | 209 |
| Bebé y Hombre | 191 | 210 |
| Cuidado de labios | 164 | 195 |
| Hombre | 169 | 181 |
| **Mascarillas capilares** | **7** | **128** |
| Higiene | 68 | 142 |
| Cuero cabelludo | 62 | 145 |
| Sérums capilares | 104 | 145 |
| **Tecnología y accesorios** | **16** | **92** |
| Cuidado de manos | 87 | 88 |
| Tónicos capilares | 47 | 62 |
| Higiene bucal | 55 | 57 |
| **Dispositivos faciales** | **10** | **51** |
| Acondicionadores | 30 | 49 |
| Accesorios de belleza | 42 | 55 |
| Accesorios de maquillaje | 33 | 39 |
| Bebé | 22 | 29 |
| Cuidado íntimo | 15 | 17 |
| Cuidado de pies | 12 | 16 |

## El menú también estaba roto

El desplegable de **Piel** tenía tres entradas — "Por necesidad", "Por tipo de piel"
y "Por producto" — y **las tres llevaban exactamente al mismo sitio**, a la colección
Piel entera. Eran tres etiquetas distintas para el mismo enlace.

Lo he sustituido por un desplegable que sí lleva a algún sitio:

Limpiadores y desmaquillantes · Tónicos y esencias · Sérums y ampollas · Hidratantes ·
Protección solar · Mascarillas · Exfoliantes y pads · Contorno de ojos · Cuidado de
labios · Rutinas y sets.

El resto del menú está exactamente igual. Copia de seguridad del anterior en
`docs/respaldos/menu-principal-antes-2026-09-22.json`.

## Lo que NO he podido arreglar y por qué

**Shopify no deja más de 60 reglas por colección.** Lo comprobé intentándolo: la
colección Piel rechazó una lista de 76 y no se tocó nada. Con ese techo hay que
elegir, así que elegí las 60 reglas por volumen real de productos, no a ojo.

Consecuencia honesta: unos **69 productos de tipos muy minoritarios** (por ejemplo
`Moisturizer Cream`, con 4 productos, o `Eye Gel`, con 3) se han quedado fuera de la
sección Piel. Siguen publicados, siguen en el buscador y siguen en su sección
específica. A cambio han entrado unos 1.300. Me parece un cambio claramente bueno,
pero prefiero que lo sepas.

**Las secciones por necesidad siguen pequeñas.** "Manchas", "Granitos", "Poros",
"Rojeces", "Barrera dañada" tienen entre 10 y 16 productos, y no se pueden arreglar
con esto: el tipo de producto dice *qué es* un producto, no *para qué sirve*. Un
tónico puede ser para manchas o para rojeces y el tipo `Toner` no lo distingue.

Para llenarlas hay dos caminos, y esto sí es una decisión tuya:

- **Por ingrediente en el título.** Reglas del tipo "el título contiene Cica, Centella,
  Tea Tree, Salicylic" → Granitos. Es rápido, gratis y bastante fiable, pero mete
  algún falso positivo.
- **Etiquetar los 7.500 productos.** Es lo correcto, pero son 7.500 escrituras sobre
  productos publicados, y tocar tanto de golpe es justo lo que puede disparar una
  incidencia nueva en Merchant Center.

Yo empezaría por lo primero, en un puñado de secciones, y miraría los resultados
antes de seguir.

---

## Segunda tanda: las secciones por necesidad (hecho)

Blanca dio luz verde al camino del ingrediente en el título. Hecho, con reglas del
tipo "el título contiene X", sumadas a las etiquetas que ya había (así que las fichas
curadas siguen dentro).

| Sección | Antes | Ahora |
|---|---:|---:|
| Calma y rojeces | 10 | **1.104** |
| Piel seca | 32 | **832** |
| Poros y textura | 14 | **737** |
| Antiedad y firmeza | 39 | **639** |
| Piel sensible | 29 | **629** |
| Barrera cutánea | 16 | **514** |
| Manchas y tono | 14 | **457** |
| Granitos y marcas | 12 | **329** |

Criterio de cada una:

- **Granitos:** solo ingredientes y palabras que actúan sobre el grano — Acne, Trouble,
  Blemish, Pimple, Salicylic, BHA, Tea Tree, Azelaic, Succinic, Sebum, Sulfur, Spot Patch.
- **Manchas:** Vitamin C, Ascorbic, Niacinamide, Niacin, Tranexamic, Glutathione,
  Arbutin, Kojic, Brightening, Dark Spot, Whitening, Melasma, Yuja, Turmeric.
- **Poros:** Pore, Blackhead, BHA, PHA, AHA, Peel, Scrub, Exfoli, Clay, Charcoal, Sebum.
- **Calma y rojeces:** Cica, Centella, TECA, Madecassoside, Heartleaf, Houttuynia,
  Mugwort, Artemisia, Soothing, Calming, Relief, Panthenol, Allantoin, Aloe, Green Tea.
- **Barrera:** Ceramide, Barrier, Panthenol, Repair, Recovery, Squalane, Lipid, Atopalm.
- **Antiedad:** Retinol, Retinal, Bakuchiol, Peptide, Wrinkle, Firming, Lifting,
  Anti-Aging, Adenosine, Elasticity, EGF, PDRN, Exosome, Tension.

### Una corrección que hice sobre la marcha

En el primer intento metí Cica, Centella, Heartleaf, Mugwort y Artemisia en **Granitos**.
Al revisar los títulos que salían vi el error: son ingredientes **calmantes**, y la
sección se llenó de "Heartleaf Soothing Toner" y "Calming Cream". Se lee mal en una
sección que se llama Granitos. Los moví a Calma y rojeces, que es su sitio. Granitos
bajó de 412 a 329 y ganó en precisión.

### Lo que se cuela y hay que saber

Las reglas miran el título, y el título no distingue cara de cuerpo ni de pelo. Así que
se cuelan cosas como **"Retinol Retinal Firming Body Cream"** en Antiedad o **"Yuja
Niacin Brightening Body Serum Mist"** en Manchas. No son productos equivocados — son
productos correctos en la sección de la cara. Son pocos y no molestan, pero están.

**Calma y rojeces se ha quedado enorme (1.104)** porque "Soothing" y "Calming" aparecen
en muchísimos productos coreanos. Si te parece demasiado, se afina quitando esas dos
palabras y dejando solo los ingredientes; bajaría bastante.

La limpieza de verdad sigue siendo etiquetar los productos, y eso sigue pendiente de
decisión por lo que cuesta y por el riesgo con Merchant Center.

## El menú, segunda pasada

El desplegable de **Piel** vuelve a tener "Por necesidad" y "Por tipo de piel" — pero
esta vez cada uno se abre en sus propias secciones, en lugar de llevar los tres al
mismo sitio:

- **Por necesidad:** Granitos y marcas · Manchas y tono · Poros y textura · Calma y
  rojeces · Barrera cutánea · Antiedad y firmeza
- **Por tipo de piel:** Piel seca · Piel grasa · Piel mixta · Piel sensible
- Y debajo, las diez secciones por producto.

