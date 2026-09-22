# Bitácora de traspasos

Entradas nuevas arriba. Formato: fecha · agente · qué pasó.

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

**Siguiente:** añadir "Combina bien con" a las fichas buenas que no lo tienen. Ahora
mismo lo llevan 9 de 178. Es lo que más sube el ticket medio sin tocar precios ni
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
