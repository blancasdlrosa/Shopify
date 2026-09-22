# Bitácora de traspasos

Entradas nuevas arriba. Formato: fecha · agente · qué pasó.

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
