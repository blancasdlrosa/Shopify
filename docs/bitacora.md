# Bitácora de traspasos

Entradas nuevas arriba. Formato: fecha · agente · qué pasó.

---

## 2026-09-23 · Claude · el envío no está roto por el precio, está roto por la estructura

Blanca preguntó si 3,99 € de envío le sale rentable, porque Korealy le cobra a ella por
peso. Informe entero en `docs/envios-rentabilidad-2026-09-23.md`.

**No se puede responder todavía**: falta la tabla de tarifas de Korealy, y `korealy.com`
sigue bloqueado por la política de red del entorno. Pero al mirarlo salieron tres
errores que no dependen de ese dato:

1. **La escalera por peso del `Perfil general` cobra 3,99 € en las cuatro bandas.**
   0–0,3, 0,3–0,6, 0,6–1,2 y +1,2 kg: todas a 3,99 €. La estructura existe, los precios
   no se pusieron. Da igual que el pedido pese 100 g o 3,7 kg.
2. **El descuento `Envío gratis España desde 35 €` tiene `maximumShippingPrice: null`.**
   Sin tope. Cubre cualquier tarifa, incluidas las de 27,99 € del otro perfil.
3. **Dos perfiles con tarifas incompatibles conviviendo.** `Perfil general` 3,99 € plano
   y `Mirea · Korealy margen protegido` 6,99 / 11,99 / 18,99 / 27,99 €. Según el producto,
   el mismo envío a España cuesta 3,99 € o 27,99 €.

**Corrección a `auditoria-precios-2026-09-22.md`:** allí escribí que el perfil
`Mirea · Korealy margen protegido` estaba vacío. **Estaba mal.** Hoy tiene productos
(línea masculina: Dashu, Paul Medison, Sulwhasoo Men, Kundal…). Shopify tapa el contador
de variantes a 500, así que el número exacto se ve en el admin, no por API.

**Aritmética de la cesta** (12.475 variantes activas): precio mediano 16,12 €, peso
mediano 0,2 kg. Para cruzar los 35 € del envío gratis hacen falta 2-3 artículos, que es
justo cuando el peso salta de banda. El cliente más caro de enviar es el que no paga
envío.

**Los pesos son de relleno.** 8.206 de 12.475 variantes pesan exactamente 0,2 kg (66 %).
Otras 1.910 pesan 0,3. Nadie ha pesado nada. Aunque la escalera funcionara, calcularía
sobre datos falsos.

**No he tocado ninguna tarifa.** Es política comercial y la decide Blanca.

### Guía PRO · el PDF

Blanca autorizó borrar `assets/guia-mirea-pro.pdf`. **No se puede por API**:
`themeFilesDelete` está bloqueado por la política de seguridad del MCP ("Theme deletion
is blocked"). Está en los tres temas (10.868 bytes cada copia). Lo tiene que borrar ella
desde Temas → ⋯ → Editar código → `assets/guia-mirea-pro.pdf`.

---

## 2026-09-22 · Claude · la "Guía Mirea PRO": era la misma, pero Blanca la quiere tal cual

Blanca vio en `/pages/la-guia` la tarjeta **"REGALO EXCLUSIVO MIREA · Guía Mirea PRO
Premium"** y preguntó si era la misma guía que se regala con la compra de 35 €.

**Sí, es la misma.** Solo existe una guía. Está montada a mano dentro de
`sections/main-page.liquid`, condicionada a `page.handle == 'la-guia'`:

- cliente **sin** gasto acumulado de más de 35 € → tarjeta rosa de bloqueo con botones
  *Iniciar sesión* / *Ver tienda*;
- cliente **con** más de 35 € gastados → se despliega la guía entera (12 bloques) con
  botón de imprimir.

La tarjeta no es una segunda guía: es **el envoltorio del mismo regalo**.

**Se lo quité y me dijo que no.** Interpreté su "si es la misma quítala" como que sobraba
la tarjeta. Al verlo dijo que le gusta el tema publicado tal cual y que el borrador había
cambiado cosas que le gustaban. **Deshecho**: el borrador volvió a su estado anterior y
después se dejó clavado al tema en vivo.

**Nota importante: el tema en vivo nunca se tocó.** Shopify bloquea `themeFilesUpsert`
contra el tema publicado ("Theme file writes against the live storefront are blocked").
Todo lo que se pruebe hay que hacerlo en un borrador y publicarlo a mano.

### Comparación tema en vivo ↔ borrador "regalos protegidos"

Comparados por checksum MD5: `sections/*`, `templates/*`, `layout/*`, `config/*` y
`snippets/*` son **idénticos** salvo **un único archivo**, `sections/main-page.liquid`.

| | En vivo (206741373265) | Borrador antes de tocarlo |
|---|---|---|
| Texto de `/pages/la-guia` | se ve entero | **se ocultaba** con un `unless`, la página quedaba pelada |
| Desbloqueo de la guía | `customer.total_spent > 3500` | primer pedido (`customer.orders \| last`) > 3500 |
| `/pages/mirea-checklist-4-semanas` | **sin protección** | protegida con login + pedido > 6000 |

### Agujero real encontrado

`mirea-checklist-4-semanas` (Page/172063424849) está **publicada y abierta**. El Mirea
Skin Journal que se regala a partir de 60 € lo puede leer entero cualquiera que llegue a
esa URL, sin comprar y sin cuenta.

### Estado final del borrador "PUBLICAR ESTA · Mirea · regalos protegidos" (206747861329)

Es ahora **el tema en vivo + solo el candado del Journal**. Nada más. La tarjeta, el
texto de la página y la regla de desbloqueo de la guía se quedan exactamente como en
producción. Verificado releyendo el archivo completo (17.329 bytes).

→ **Blanca lo publica**: Tienda online → Temas → Publicar. Comprobar antes en vista
previa `/pages/mirea-checklist-4-semanas` sin sesión iniciada: debe salir la tarjeta de
bloqueo, no el Journal.

**Sigue pendiente de su decisión.** `assets/guia-mirea-pro.pdf` vive en el tema y es
descargable por cualquiera que dé con la URL, sin comprar ni iniciar sesión. Ningún
enlace apunta a él, pero mientras siga ahí el regalo de 35 € no está del todo protegido.
Borrar archivos lo decide ella.

**Nota para ChatGPT:** hay varios temas con el mismo `main-page.liquid` y contenidos
distintos. El bueno es el borrador "regalos protegidos". El tema en vivo no se puede
editar por API.

---

## 2026-09-22 · Claude · el idioma de la tienda está mal y se nota en los nombres

Buscando por qué las fichas del catálogo largo están en inglés he encontrado algo más
gordo: **el idioma principal de la tienda es el inglés.** El español es secundario y vive
en `/es/`. Informe entero en `docs/idioma-tienda-2026-09-22.md`.

Como **todos los enlaces del menú apuntan a `/es/`**, cualquiera que navegue acaba en la
versión traducida. Y la traducción automática ha hecho destrozos, porque el texto de
origen ya estaba en español y la máquina tradujo español a español:

| Lo que pusimos | Lo que ve el cliente |
|---|---|
| medicube Triple Collagen Cream | **Crema de triple colágeno medicube** |
| Anua Heartleaf Quercetinol Pore Deep Cleansing Foam | **Espuma de limpieza profunda de poros Anua Heartleaf Quercetinol** |
| **Pack Primera vez** | **Paquete Primera vez** |
| Tipo `Hidratar` | **Hydrate** |
| Tipo `Limpiar` | **Clean up** |

Los nombres de marca no se traducen nunca: nadie busca "Espuma de limpieza profunda de
poros Anua". Y los tipos de producto se han traducido **del español al inglés**, dentro
de la versión española.

**Arreglado ya:** borradas las traducciones de título y tipo de producto de los **15
packs activos** — los que tienen nombre propio y salen en el test, el blog y el menú.
Comprobado que "Paquete Primera vez" ha desaparecido.

**No he tocado las descripciones traducidas**, porque en los ~7.560 productos del
proveedor la original sí está en inglés y ahí la traducción suma.

**Decisión pendiente de Blanca**, porque es un cambio global de producción: borrar las
traducciones de título de los 7.700 restantes y **cambiar el idioma principal a español**.
Ese cambio mueve todas las URLs, la canónica y el hreflang. Además es candidato serio a
explicar por qué los **440 productos llevan semanas en PENDING en Merchant Center**: el
sitio se declara en inglés y vende a España.

**Y una cosa que hay que saber antes de montar el chat con IA que ha pedido Blanca:**
unos 7.560 productos tienen la descripción en inglés del proveedor. Un asistente que lea
eso va a contestar en inglés y sin saber para qué sirve el producto.

---

## 2026-09-22 · Claude · me equivoqué en la auditoría de colecciones huérfanas

Auditando los enlaces del test "Encuentra tu rutina" acabé destapando un error mío de
ayer. **La lista de 12 colecciones para despublicar estaba mal.**

Ayer crucé las colecciones contra el menú y contra las plantillas del tema. **No las
crucé contra el cuerpo de las páginas ni contra los artículos del blog.** Ahí había
enlaces. Si Blanca llega a despublicar esa lista tal cual, se habrían creado **tres 404**:

| Colección | Quién la enlazaba | Qué he hecho |
|---|---|---|
| `cuidado-capilar` | `/pages/rutinas`, `/pages/marcas` | Fuera de la lista, y llenada: 33 → **533** |
| `cuerpo` | `/pages/rutinas`, `/pages/marcas` | Fuera de la lista, y llenada: 9 → **369** |
| `proteger` | artículo del blog del solar | Enlace redirigido a `proteccion-solar`. Ya se puede despublicar |

**Y había un 404 que ya estaba en vivo.** El artículo *"Por qué cuanto más limpias la
piel grasa, más grasa produce"* enlazaba a `/collections/rutina-piel-grasa-con-granitos`.
Esa colección no existe: el handle real acaba en `-1`. Llevaba ahí desde que se escribió
el artículo. Corregido, y de paso le he añadido un enlace a la nueva sección de granitos,
que ahora tiene 329 productos en vez de 12.

También he cambiado el enlace del artículo del orden de la rutina: apuntaba a
`/collections/rutinas` (19 productos) y ahora va a `/pages/rutinas`, que es la página con
las 23 rutinas de verdad.

**Lo demás sí estaba bien.** Los cinco enlaces del test, sus cinco permalinks de carrito
y los precios tachados coinciden con la realidad. Los 23 enlaces de `/pages/rutinas` y
los productos enlazados desde el blog, todos existen y están activos.

Ahora el cruce está hecho contra: menú principal, menú del pie, plantillas del tema, las
19 páginas y los 12 artículos. **Quedan 10 colecciones para despublicar**, no 12.

También hecho: **la página Mirea Influencer ya está enlazada en el pie**, que estaba
pendiente desde ayer.

---

## 2026-09-22 · Claude · auditoría del pedido: un producto no se podía comprar

Blanca pidió comprobar si un pedido llega de verdad: pago, pedido y envío. Auditada la
cadena entera con datos, no a ojo. Informe completo en `docs/auditoria-pedido-2026-09-22.md`.

**El fallo gordo: el Pack Colágeno + AGE-R (304,90 €) estaba marcado como producto que no
necesita envío**, como si fuera digital. Lo detecté simulando un pedido real a Madrid: el
cálculo devolvía **cero tarifas de envío**, lo que en el checkout significa "no hay
métodos de envío disponibles" y **el pedido no se puede terminar**. Era el producto más
caro del catálogo. Arreglado y vuelto a simular: ahora sí da tarifa. Revisados los otros
17 packs y 20 productos del feed: el fallo estaba aislado en ese.

**Lo que está bien:** SSL, EUR, España como mercado principal, IVA incluido en precios,
Shop Pay / Apple Pay / Google Pay activos (señal de que Shopify Payments funciona), y
7.726 de 7.738 productos activos con stock.

**Lo que cuesta dinero y es decisión de Blanca:** está activo "Envío gratis España desde
35 €" y las cuatro bandas de peso de España cuestan **todas 3,99 €**. O sea que el trabajo
que hice poniendo el peso real a cada pack **no sirvió de nada**, porque las cuatro bandas
valen lo mismo. Lo apunto porque fue trabajo mío. Las bandas de la UE sí están bien
escalonadas.

**Lo que ninguna auditoría puede demostrar:** que la tarjeta se cobre. Los tres pedidos que
había eran de Blanca y **ninguno pasó por la pasarela**: uno era pedido de prueba de
Shopify y dos eran manuales con pago pendiente. Nunca se ha cobrado una tarjeta en esta
tienda. El paso a paso para comprobarlo en diez minutos está en el informe.

**Pendiente de mirar con la gestoría:** el IVA sale a 0 en el cálculo y "cobrar impuestos
sobre el envío" está desactivado. En España el transporte lleva el mismo IVA que el
producto. No lo toco: es materia fiscal.

---

## 2026-09-22 · Claude · fichas terminadas

**164 de 178 con "Combina bien con".** Las 14 que faltan son packs, y un pack no
necesita venta cruzada: un pack *es* la venta cruzada.

**178 de 178 con "Para quién NO es".** Eso cierra el pendiente de las 24 fichas
importadas en bruto que no lo tenían. Ya no queda ninguna ficha del feed de Google
que no diga a quién no le conviene el producto.

Última tanda: K-SECRET solar, Isntree solar corporal, MEDIHEAL árbol del té, los tres
de d'Alba y la Rutina Facial Hombre.

Dos avisos nuevos que merecen quedar por escrito:

- **El voluminizador de labios de d'Alba hincha porque la canela irrita el labio a
  propósito.** Es seguro y es temporal, pero usarlo a diario sobre labios secos mete a
  la clienta en un bucle. La ficha lo dice y recomienda usarlo cuando apetezca, no como
  bálsamo fijo.
- **El dispositivo de d'Alba no es compatible con los accesorios de medicube**, y su
  ficha ahora avisa de mirar qué consumible se va a poder reponer antes de elegir
  dispositivo. Un aparato no falla por la tecnología: falla porque se acaba el gel y
  no vuelve a salir del cajón.

---

## 2026-09-22 · Claude · secciones por necesidad, llenas

Blanca dio el visto bueno al camino del ingrediente en el título. Hecho.

Calma y rojeces 10 → **1.104**. Piel seca 32 → **832**. Poros 14 → **737**. Antiedad
39 → **639**. Piel sensible 29 → **629**. Barrera 16 → **514**. Manchas 14 → **457**.
Granitos 12 → **329**.

Las reglas suman el ingrediente en el título **a la etiqueta que ya existía**, así que
las fichas curadas siguen dentro y no se ha perdido nada.

**Me equivoqué en el primer intento y lo corregí.** Metí Cica, Centella, Heartleaf,
Mugwort y Artemisia en Granitos. Al revisar los títulos resultantes vi que la sección
se había llenado de "Heartleaf Soothing Toner" y "Calming Cream": son ingredientes
calmantes, no anti-grano. Los pasé a Calma y rojeces. Granitos bajó de 412 a 329 y es
mucho más honesto.

Dos cosas que conviene vigilar y están escritas en `docs/colecciones-2026-09-22.md`:
el título no distingue cara de cuerpo, así que se cuela algún producto corporal en
secciones faciales; y Calma y rojeces se ha quedado muy grande porque "Soothing" y
"Calming" aparecen en medio catálogo coreano.

**Menú:** el desplegable de Piel ya tiene tres niveles. "Por necesidad" y "Por tipo de
piel" se abren cada uno en sus propias secciones, en vez de llevar los dos al mismo
sitio como antes.

---

## 2026-09-22 · Claude · las secciones salían vacías: arreglado

Blanca avisó de que entraba en una sección y salían diez productos de casi ocho mil.
Tenía razón y la causa era estructural, no un fallo suyo.

**Diagnóstico:** la tienda tiene 7.738 productos activos y publicados, pero las
colecciones del menú preguntaban por **etiquetas Mirea** que solo llevan unos 180
productos. Las colecciones que preguntaban por **tipo de producto** (el que vino con
la importación del proveedor) sí estaban llenas. Dos clasificaciones en paralelo que
no se hablaban.

**Arreglado:** reescritas las reglas de **30 colecciones** para que usen el tipo de
producto. **Sin tocar ni un producto** — solo la regla de cada colección, reversible
y sin efecto sobre el feed de Google.

Lo más llamativo: **Piel 3.737 → 5.037**, mascarillas capilares **7 → 128**,
Tecnología **16 → 92**, dispositivos faciales **10 → 51**, exfoliantes **106 → 273**,
cuero cabelludo **62 → 145**, higiene **68 → 142**.

**El menú también estaba roto.** El desplegable de Piel tenía "Por necesidad", "Por
tipo de piel" y "Por producto", y los tres llevaban al mismo sitio. Sustituido por
diez entradas que sí llevan a colecciones distintas. Respaldo del menú anterior en
`docs/respaldos/menu-principal-antes-2026-09-22.json`.

**Límite que encontré:** Shopify no admite más de 60 reglas por colección. Lo intenté
con 76 en Piel y lo rechazó sin tocar nada. Con ese techo hay que priorizar, así que
elegí las 60 reglas midiendo cuántos productos tiene cada tipo. Coste honesto: unos
69 productos de tipos minoritarios salen de la sección Piel; entran ~1.300.

**Lo que sigue sin resolverse y necesita decisión de Blanca:** las secciones *por
necesidad* (manchas, granitos, poros, rojeces, barrera) siguen entre 10 y 16
productos, porque el tipo de producto dice qué es algo, no para qué sirve. Las dos
salidas y sus riesgos están en `docs/colecciones-2026-09-22.md`.

---

## 2026-09-22 · Claude · Abib, Arencia, THE FACE SHOP, MISSHA y sueltos (24 fichas)

Van **150 de 178**. Quedan **22 fichas** sin bloque (más 16 packs, que no lo necesitan).

Reescritas de cero porque seguían siendo importación en bruto: **Abib** (4), **Arencia**
(4), **mixsoon Galactomyces Toner**, **NATURE REPUBLIC Vitapair C** y **THE WHOO
Cheongidan**. Solo bloque de venta cruzada, porque ya estaban bien: **THE FACE SHOP** (7),
**MISSHA** (5) y la crema de cuello de IOPE.

Decisiones que conviene que quede por escrito:

- **La bruma de agua de arroz ahora dice que una bruma sola reseca.** El agua se evapora
  y se lleva más de lo que trajo. Se vende igual, pero acompañada de algo que la selle,
  que es como funciona de verdad.
- **El peel shot de MISSHA es un 25 % de ácidos.** La ficha dice que se cronometre con
  reloj y que la primera vez se pruebe con tres minutos en una zona pequeña. Un producto
  de venta libre no es un producto suave.
- **Los parches de ojos de Abib llevan retinal**, y eso no estaba dicho como advertencia:
  ahora avisan de no usarlos en embarazo ni la misma noche que un sérum de retinal.
- **El colágeno aplicado en la piel no se convierte en tu colágeno**, por pequeña que sea
  la molécula. Está escrito en la ficha de Abib, que era la que más lo prometía.

**Un error que cometí y corregí:** al mandar la ficha de THE WHOO se me coló un
`PLACEHOLDER` en la descripción de la **crema de cuello de IOPE**. Estuvo así menos de un
minuto. La restauré a partir de la copia que tenía guardada y además le añadí su bloque,
así que ahora está mejor que antes. Lo apunto porque si Blanca la miró justo en ese
minuto, vio algo raro.

---

## 2026-09-22 · Claude · LANEIGE reescrita entera (15 fichas)

Las 15 fichas de LANEIGE eran importación en bruto: tres párrafos genéricos, sin "Dónde
encaja", sin ficha técnica y **sin "Para quién NO es"**. Reescritas de cero al formato de
la casa, con bloque de venta cruzada incluido. Van **126 de 178**.

Balance Mode (3), Cica Sleeping Mask, Bouncy & Firm (cara, sérum, contorno, labios),
Lip Glowy Balm, las cuatro Lip Sleeping Mask y los dos Neo Cushion.

**Lo más importante que se ha corregido son los cushions.** Ponían "SPF42" y "SPF50+"
como una virtud sin más. Ahora las dos fichas dicen que **el SPF de un cushion no
sustituye al protector solar**, porque nadie se aplica la cantidad de ensayo en la cara.
Vender un cushion como si fuera tu solar del día es un problema de seguridad, no de
marketing, y además es lo que hace que la gente acabe con manchas y culpe a la crema.

Otras decisiones:

- Las cuatro Lip Sleeping Mask son el mismo producto con distinto aroma. En vez de
  inflar cada ficha, cada una dice que las otras tres existen y que **no hace falta
  comprar más de una**. Se vende menos por pedido y se devuelve mucho menos.
- La peel-off de poros dice lo que nadie dice: **una peel-off no reduce el tamaño del
  poro**. El tamaño del poro es genético.
- Las dos fichas de piel grasa (limpiador e hidratante) explican que saltarse la crema
  hace que la piel produzca más grasa. Es el error más frecuente de ese tipo de piel.

**Qué queda:** 52 fichas sin bloque, sin contar los 16 packs. Las que siguen siendo
importación en bruto y necesitan reescritura completa, no solo el bloque: Abib (4),
Arencia (4), mixsoon, NATURE REPUBLIC y THE WHOO.

---

## 2026-09-22 · Claude · "Combina bien con": pelo, dispositivos AGE-R y línea kójico

16 fichas más. Van **111 de 178** (178, no 176: al recontar el feed aparecieron dos
productos más publicados en Google).

**Pelo (4):** sérum de romero, champú de romero, acondicionador y LABO-H. El argumento
que sostiene la línea: la caída que se ve hoy viene de hace tres meses, así que hay que
darle doce semanas antes de juzgar. Se dice en la ficha para que nadie devuelva a las
tres semanas pensando que no funciona.

**Dispositivos AGE-R (8):** Ultra Tune, Booster Pro Lemon, Lavender, Pink, X2, Mini Rosa,
Mini Blanco, High Focus Shot PLUS+, V Roller y el cabezal limpiador.

Aquí hay un hallazgo comercial que no estaba documentado: **el Mini y el Booster Pro Pink
vienen sin gel conductor**, solo con el cable. Sin gel no conducen. Es decir, quien compra
esos dos modelos *necesita* el PDRN Booster Gel el primer día y hasta ahora la ficha no se
lo decía. Eso es un pedido incompleto y un cliente frustrado. Ya está escrito en las dos
fichas.

En todos los dispositivos se repite lo mismo: el gel se acaba en unas seis semanas. Es el
único consumible recurrente del catálogo de tecnología y conviene tratarlo como tal.

**Línea kójico (6):** body wash, body peel shot, peel shot facial, limpiador 500 ml,
mascarilla de gel y night wrapping mask. El eje de toda la línea es que **un peeling sin
solar al día siguiente deja la mancha peor que antes**. Va escrito en las tres fichas de
peeling, no como recomendación sino como condición.

Dos avisos que evitan devoluciones: depilación y peeling de cuerpo nunca el mismo día, y
no estrenar una mascarilla la víspera de un evento.

**Qué queda:** 67 fichas sin bloque, sin contar los 16 packs (los packs no necesitan
venta cruzada, son la venta cruzada). Las familias grandes que faltan son LANEIGE (13),
THE FACE SHOP (7), MISSHA (5), Abib (4), Arencia (4) y la línea PDRN Pink de medicube.

Recordatorio que sigue en pie: **esto mejora la tienda, no trae gente.** Los 440 productos
aprobados en Google Shopping siguen parados esperando los costes.

---

## 2026-09-22 · Claude · pedidos de prueba borrados

Blanca confirmó que los pedidos eran suyos y pidió borrarlos. Comprobado uno a uno antes
de tocar nada, porque borrar un pedido no tiene vuelta atrás:

| Pedido | Qué era | Dinero real |
|---|---|---|
| #1001 · 26,70 € | `test: true` — pedido de prueba de Shopify | No |
| #1002 · 91,89 € | Manual, pago pendiente | No |
| #1003 · 91,89 € | Manual, pago pendiente | No |

Ninguno movió dinero. **Borrados los tres.** `ordersCount` ahora es 0, así que cualquier
informe de ventas o conversión a partir de hoy es real.

Quedan **3 carritos abandonados**, también de Blanca. Shopify no tiene mutación para
borrarlos; caducan solos. No ensucian las ventas, solo el informe de carritos.

**"Combina bien con":** 8 fichas más — Triple Collagen completa (tónico, sérum, crema,
booster) y el bloque de péptidos y retinal (PDRN Pink Capsule Cream, Gel Toner Pad, Deep
Lifting Peptide Eye Cream, K-SECRET Refining Pad C-Retinal). Van **46 de 176**.

En estas hay dos avisos que evitan devoluciones además de vender: los discos de gel de
colágeno **no** son como los de ácidos (se confunden constantemente y se usan mal), y el
retinal **no se compra** si no se va a usar solar a diario.

Otras 4 después: EGF NAD Firming Serum, Ultra Light PDRN Peptide Serum, PDRN Pink
Peptide Eye Cream y Gua Sha Neck Cream. Van **50 de 176**.

**Criterio de estos bloques:** dos de ellos recomiendan explícitamente *no* comprar. La
ficha del EGF NAD dice que subas el sérum por el cuello en vez de comprar crema de cuello
aparte, y la del Gua Sha dice que si ya usas un sérum de péptidos puedes ahorrártela,
porque lo que aporta es el aplicador, no la fórmula. Se pierde alguna venta suelta y se
gana la clienta que vuelve.

Y 4 más de la familia Piel de porcelana: Deep Vita C Capsule Serum, Deep Vita C Capsule
Cream, Glutathione Glow Toner y Glutathione Glow Serum. Van **54 de 176**.

La regla de **turno mañana / turno noche** queda escrita en las fichas de vitamina C:
vitamina C por la mañana (se potencia con el solar), retinal o kójico por la noche.
Nunca los dos en la misma aplicación. Es el error de uso más común y el que más
devoluciones genera.

Cerrada la familia Piel de porcelana con 4 más: Glutathione Cleansing Foam, Glutathione
Serum Mist, PDRN Collagen Glow Jelly Serum y Deep Vita C Daily Quick Mask. Van
**58 de 176**.

Y 4 de Barrera dañada: PDRN Pink Cica Soothing Toner, PDRN Booster Gel, PDRN Pink
Niacinamide Whip Cleanser y PDRN Pink Hyaluronic Moisturizing Cream. Van **62 de 176**.

Dos apuntes de estas: el **PDRN Booster Gel** queda declarado como el gel conductor del
AGE-R, que es venta cruzada real con los dispositivos de 138-449 €. Y el tónico Cica
dice lo que casi ninguna tienda dice: *"la mayoría de las pieles sensibles son pieles
normales a las que se les está dando demasiado"*, con la recomendación de **quitar**
activos dos o tres semanas.

Cerrada Barrera dañada con 4 más: PDRN Hydrating Gel Cleanser, Hyaluronic Moisturizing
Capsule Cream, THE FACE SHOP Aloe Soothing Cream y MEDIHEAL Derma Madecassoside.
Van **66 de 176**.

Introducido el **par de temporada** como argumento de venta: crema densa en invierno,
ligera en verano, y la frase de que mucha gente tiene las dos y alterna. Es honesto y
duplica el ticket sin engañar a nadie.

**Tanda de 8** (a petición de Blanca, en vez de 4): los productos héroe que van dentro de
los packs — Green Plum Cleanser, COSRX Snail 96, BoJ Relief Sun, SOME BY MI Toner,
Isntree Watery Sun Gel, illiyoon Ceramide Ato, Anua Heartleaf 77% y MEDIHEAL PDRN Patch.
Van **74 de 176**.

Estos son los que más tráfico van a recibir cuando se lance Shopping, así que llevan los
argumentos más fuertes: la doble limpieza como pareja obligada del gel, el solar
declarado como "combina con absolutamente todo lo que vendemos" (y por qué eso no es una
frase comercial), y la alternancia ácidos/calmante escrita en las dos fichas que forman
ese par.

Segunda tanda de 8: la línea **Red** (acné) y cuerpo — Succinic Acid Peel, Peeling Pad,
SOS Invisible Patch, Red Acne Body Wash, Red Clear Cica Body Mist, Red Clear Body Lotion,
Red Concealer Tip y Hyaluronic Ceramide Jelly Cream. Van **82 de 176**.

Aquí la lógica de venta es **prevención + rescate**: los discos para que salgan menos, el
peel para el que ya está. Y dos consejos que no venden nada y generan confianza: lavarse
el pelo antes que el cuerpo (el acondicionador que resbala por la espalda es causa
frecuente de granitos ahí), y que saltarse la crema en piel grasa hace que produzcas más
grasa todavía.

**PR abierta:** https://github.com/blancasdlrosa/Shopify/pull/1 — cada push la actualiza.

---

## 2026-09-22 · Claude · influencers y fichas

**Programa de influencers montado.** Cinco códigos activos `MIREAINF01`-`05` al 10 %
(porcentaje elegido por Blanca), con guardarraíles: tope de 200 usos, uno por cliente,
mínimo de 35 €, caducidad 22-12-2026 y **sin acumular** con descuentos de pedido,
producto ni envío — eso es lo que impide encadenarlos con `BIENVENIDA10` o `MIREA10`.

Manual completo en `docs/programa-influencers.md`: cómo renombrar un código al fichar a
alguien, el texto que hay que mandarle (con el aviso de `#publi`, obligatorio en España,
y los límites de lo que puede decir sobre la piel), y dónde se miran los resultados
(Analíticas → Ventas por código de descuento).

**Detectado, sin tocar:** `BIENVENIDA10` y `MIREA10` son el mismo descuento duplicado,
los dos al 10 % sobre todo, sin caducidad ni tope. `MIREA10` además acumula con envío y
`BIENVENIDA10` no. Habría que quedarse con uno, pero puede que alguno esté impreso o
metido en el flow de bienvenida de Klaviyo, así que lo decide Blanca.

**Nota de criterio:** el 10 % es el único porcentaje que hoy sabemos que no hace perder
dinero. Con un 20 % sobre el catálogo importado se vendería por debajo de coste, porque
ese bloque sigue al 16,7 % de margen bruto. No escalar el programa hasta que los costes
estén cargados.

**"Combina bien con":** 8 fichas más de la familia Manchas y tono (Kojic y TXA
completas). Van **38 de 176**.

---

## 2026-09-22 · Claude · Klaviyo y fichas

**Klaviyo: cuatro flows disparaban antes de que llegara el paquete.** El envío desde
Corea tarda 2-3 semanas, así que todo lo que se medía "desde el pedido" llegaba al
cliente antes que el producto. Corregidos:

| Flow | Antes | Ahora |
|---|---|---|
| Postcompra · Cuida tu rutina | 5 días | **25 días** |
| Cross-sell post-entrega | 10 días | **32 días** |
| Cross-sell · Completa tu rutina | 10 días | **50 días** |
| Reposición | 45 días | **80 días** |

La escalera desde el pedido queda: 15 min checklist → 25 d cuida tu rutina → 32 d
cross-sell → 50 d completa tu rutina → 80 d reposición. Sin solapes.

**Win-back sigue en 60 días.** Propuse subirlo a 110 para que no pisara a Reposición;
Blanca lo rechazó. Se queda como está.

**Nota:** el flow de reposición sigue llamándose "Mirea · Reposición · 45 días". La API
de Klaviyo solo deja cambiar el estado, no el nombre. Hay que renombrarlo a mano en el
panel para que no engañe.

**Bloqueado, confirmado hoy otra vez:** `publishableUnpublish` sigue rechazado por la
política de seguridad del MCP ("Unpublishing is blocked to prevent accidental storefront
catalog removal"). Las 12 colecciones huérfanas las tiene que despublicar Blanca.

**"Combina bien con":** 4 fichas más de la familia Kojic (limpiador, tónico, sérum y
crema). Van 30 de 176.

---

## 2026-09-22 · Claude · auditoría de precios

Blanca pidió arreglar el precio del Pack colágeno, auditar precios contra gastos de
envío, comparar con Korealy y hacer los ajustes necesarios para tener siempre beneficio.
Informe completo en `docs/auditoria-precios-2026-09-22.md`. Resumen:

**El dato que falta.** No hay coste por artículo en ningún producto activo. El informe
de Shopify lo confirma: 90 días, 169,80 € de ventas, 2 pedidos, COGS = 0. Sin coste no
hay margen calculable. Lo arregla un CSV con la columna *Cost per item*.

**Hallazgo grave.** Precio = coste × 1,2 exacto. Primero lo conté como "16 productos"
porque solo miré el feed de Google: **mal contado**. Barrido el catálogo: 1.056 productos
activos afectados de 1.500 revisados, 56 marcas, y quedaban páginas. Es la regla con la
que entró toda la importación de Korealy de septiembre. Arreglados solo los 16 del feed
(los que se anuncian); los otros ~1.040 necesitan el coste cargado, porque a ojo serían
mil precios inventados. Margen bruto 16,7 %, antes de comisiones, envío y publicidad.
Anunciarlos era perder dinero en cada venta. Subidos a la altura del propio catálogo
para productos equivalentes (31 variantes). Tabla completa de antes/después en el
informe.

**Pack colágeno.** Costaba 376,69 € cuando sus partes suman 338,68 €. Corregido a
304,90 €, mismo descuento (~10 %) que el resto de packs, tachado en 338,68 €. Ficha
reescrita (venía con emojis) y renombrado a `Pack Colágeno medicube + dispositivo AGE-R`.

**Los 15 packs pesaban 0 kg** y Shopify les cobraba la banda de 6,99 €. Puesto el peso
como suma de componentes: ahora caen en 18,99 € o 27,99 €. **Ojo:** los pesos de los
productos sueltos están inflados de origen, así que estas bandas hay que contrastarlas
con lo que cobra el transportista de verdad.

**Korealy no se puede comparar desde aquí:** el dominio está bloqueado por la política
de red del entorno, igual que mireaskin.es. No hay comparativa y no la he inventado.
Lo que sí se ve en la tienda es que Korealy es el proveedor: hay 39 productos suyos en
cuarentena a 11,16 € fijo sin coste, y **verificado hoy que los 39 siguen en borrador y
sin publicar.** Uno de esa familia sí se había escapado al feed (NATURE REPUBLIC Vitapair
C a 13,16 €): subido a 19,90 €.

**No tocado a propósito:** THE WHOO Cheongidan Emulsion a 116,56 €. Céntimos raros, pero
THE WHOO es lujo real y el precio es plausible. Lo confirma Blanca.

**Para ChatGPT:** antes de tocar cualquier precio, mira si el producto tiene coste
cargado. Hoy ninguno activo lo tiene. Si ves precios que dividen exactos entre 1,2, es
la regla de importación rota, no una decisión comercial.

---

## 2026-09-22 · Claude

**Hecho · fichas.** Cerrado el bloque "Para quién NO es" en los cinco packs que aún no
lo tenían: Primera vez, Piel grasa con granitos, Piel seca, Piel sensible y Round Lab
For Men. Reescrito el copy genérico de **Pack Rutina exprés** a la voz del resto de
packs, conservando intactas la tabla de productos y los importes (73,70 € / 65,90 €).
Cada `productUpdate` reenvía el `descriptionHtml` completo con el bloque añadido: no se
tocó nada del texto anterior.

**Hecho · etiquetas.** 26 productos del feed de Google salían con etiquetas del
proveedor en inglés (`serum`, `Cream`, `Facial Mask`) y **ninguna** etiqueta `Paso:` ni
`Piel:`, así que eran invisibles en las colecciones por paso y por tipo de piel.
Etiquetados los 26 con `tagsAdd` (añade, no reemplaza: las del proveedor siguen ahí).
Otros 3 LANEIGE Balance Mode tenían `Paso:` pero no `Piel:`; corregidos también.

Se añadieron **solo** `Paso:`, `Piel:` y las etiquetas de categoría en español. **No** se
añadieron etiquetas `Rutina:`, porque esas colecciones son selecciones curadas y meter
productos sueltos las desvirtúa. Eso es decisión de Blanca, producto a producto.

**Hecho · seguridad.** `medicube AGE-R Booster Pro Pink` se vendía **sin bloque de
contraindicaciones**, siendo un dispositivo con EMS y electroporación. Reescrita la
ficha con el mismo aviso que llevan los demás AGE-R (marcapasos, embarazo, epilepsia,
implantes metálicos, cáncer de piel, heridas abiertas) y renombrado a la convención de
la familia: `· dispositivo facial`.

**Comprobado y descartado.** Los cuatro packs `-antiguo` (`pack-primera-vez-antiguo`
etc.) no son duplicados vivos: están archivados, despublicados y a 0 de stock. La
colección "Packs y rutinas" tiene 19 productos = 15 packs activos + esos 4 archivados,
que no salen en tienda. No hay nada que arreglar ahí.

**BLOQUEADO · decisión de Blanca.** `Pack colágeno Medicube` (376,69 €, tachado
419,99 €) sale **más caro que comprar sus 5 productos sueltos**, que suman 338,68 €:

| Producto | Precio suelto |
|---|---|
| AGE-R Booster Pro Pink | 189,99 € |
| Collagen Firming Sun Cream SPF50+ · 50 ml | 29,90 € |
| Collagen Glow Booster Serum · 15 ml | 47,90 € |
| Collagen Jelly Cream · 50 ml | 17,99 € |
| Deep Lifting Peptide Eye Cream · 30 ml | 52,90 € |
| **Suma** | **338,68 €** |
| **Precio del pack** | **376,69 €** (+38,01 €) |

Además el tachado de 419,99 € no se corresponde con ningún precio real de la tienda.
En España la Directiva Ómnibus exige que un precio tachado sea el precio más bajo
aplicado en los 30 días anteriores. No se toca el precio: es decisión comercial y legal
de Blanca. Su ficha queda sin reescribir hasta que el precio esté resuelto, porque el
texto tiene que decir la cifra correcta.

**Para ChatGPT:** las fichas de packs siguen una plantilla fija — apertura en negrita,
"Qué incluye" con tabla o lista, precio comparado, bloque de la guía en PDF y
"Para quién NO es". Ese último bloque no es adorno: es donde se descarta al cliente
equivocado y donde van los avisos médicos. Si escribes una ficha de pack, llévalo.

**Hecho · "Combina bien con".** Contado de verdad sobre la tienda, no de memoria: lo
llevaban **16 de 176** fichas del feed. Escrito el bloque para las **13 de la familia
Zero Pore** (poros y textura) — aceite, dos espumas, tónico, dos tipos de disco,
mascarilla de arcilla, ampolla de exosomas, dos sérums y dos cremas. Van **26 de 176**.

No es texto de relleno: cada bloque dice qué producto va antes, cuál va después y qué
NO se puede juntar la misma noche (discos de ácidos con sérum de BHA, mascarilla de
arcilla con discos). Eso evita devoluciones por irritación además de subir el ticket.

**Estado de los dos bloques de plantilla, medido hoy:**

| Bloque | Fichas que lo llevan |
|---|---|
| "Para quién NO es" | 152 de 176 |
| "Combina bien con" | 26 de 176 |

Las 24 que siguen sin "Para quién NO es" son las importaciones en bruto ya renombradas
(Arencia, Abib, LANEIGE, mixsoon, NATURE REPUBLIC, THE WHOO) más el Pack colágeno.

**Siguiente:** seguir con "Combina bien con" por familias — Manchas y tono (Kojic +
TXA), Primeras arrugas (Triple Collagen), Piel de porcelana (Vita C + Glutathione),
Barrera dañada (PDRN Pink). Es lo que más sube el ticket medio sin tocar precios ni
traer tráfico nuevo.

---

## 2026-09-21 · Claude

**Hecho:** primer bloque de P0 sobre la tienda real (mireaskin.es).
Creadas, pobladas y publicadas 6 colecciones de necesidad (Granitos, Manchas, Poros,
Antiedad, Barrera cutánea, Calma y rojeces) — 2.088 productos que antes no tenían
puerta de entrada. Traducidos al español 14 títulos de colección que salían en inglés.
Auditadas navegación y Ofertas: ambas sanas.

**Menú:** resuelto. Blanca dio luz verde y se añadió el submenú "Por necesidad" bajo
Piel con las 6 colecciones. Los 90 enlaces existentes conservan su ID; respaldo del
árbol en `docs/backup-menu-principal.json`.

**Home:** las 9 tarjetas de "¿Qué necesita tu piel hoy?" llevaban a colecciones de
rutina de 4-37 productos. Corregidas en la copia de tema `COPIA — Necesidades al
catálogo`, pendiente de que Blanca la publique. Ampliadas además `piel-seca`
(128→492) y `piel-sensible` (127→533).

**A medias:** las 5 colecciones duplicadas siguen sin tocar. No se pueden despublicar
a ciegas: alguna sección del tema podría referenciarlas y con la red bloqueada no hay
forma de comprobarlo.

**Bloqueado:** el entorno bloquea `mireaskin.es` por política de red. Sin eso no hay
crawl de 404s, ni pruebas visuales, ni móvil, ni CRO, ni Judge.me.

**Para ChatGPT:** el estado completo está en `docs/mirea-tablero.md`. Léelo antes de
tocar la tienda. Dos avisos que te ahorran una tarde: `create-collection` del MCP de
Shopify no publica aunque diga que sí, y las colecciones automáticas de Shopify no
admiten mezclar Y/O en las reglas.

---

## 2026-09-19 · Claude

**Hecho:** montado el andamiaje de colaboración (`docs/colaboracion.md`,
`AGENTS.md`, `CLAUDE.md`, esta bitácora). El repo estaba vacío salvo la
configuración de skills de Higgsfield.

**A medias:** nada.

**Pendiente de decidir:** el proyecto en sí. No hay código todavía — falta definir
qué se construye sobre la tienda de Shopify (stack, alcance, integraciones).

**Para ChatGPT:** si entras antes de que se defina el alcance, no empieces a
escribir código. Abre una rama `gpt/propuesta-alcance` con un documento en `docs/`
proponiendo qué construir y con qué stack, y déjalo en un PR para que Blanca
decida.
