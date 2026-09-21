# Mirea Skin · Tablero operativo

Tienda: **mireaskin.es** · Shopify Basic · EUR · España
Catálogo: 7.694 productos · 108 colecciones
Última actualización: 2026-09-21

---

## NOW · afecta a venta o experiencia

| # | Problema | Sistema | Estado |
|---|---|---|---|
| 1 | Sección "Qué necesita tu piel hoy" enlaza a colecciones que no existían → 404 | Tema / colecciones | **Resuelto para 6 necesidades** |
| 2 | Resto de enlaces de esa sección sin auditar | Tema | **Bloqueado** (ver abajo) |
| 3 | Colecciones nuevas no estaban en el menú | Navegación | **Resuelto** · submenú "Por necesidad" bajo Piel |

## NEXT · conversión

| # | Problema | Impacto | Estado |
|---|---|---|---|
| 4 | Taxonomía `Necesidad:` por etiqueta, para eliminar la contaminación de las colecciones automáticas | Alto | Pendiente |
| 5 | 5 pares de colecciones duplicadas (ver más abajo) | Medio · SEO + confusión | Pendiente · **no tocar sin ver el tema** |
| 6 | "Ofertas" es 42% packs propios al ~10% — diluye la percepción de oferta | Medio | Decisión comercial |

## LATER
Klaviyo · motor de pricing · Merchant Center · SEO engine · content engine · app · agentes.
Nada iniciado.

### Menú principal · submenú "Por necesidad"

Añadido bajo **Piel**, en segunda posición (después de "Rutinas y Sets"):
Granitos · Manchas · Poros · Calma y rojeces · Barrera cutánea · Antiedad.

`menuUpdate` reemplaza el árbol entero, así que se reenviaron los 90 enlaces existentes
con su `id` para que Shopify los conservara en vez de recrearlos. Verificado: los 90
mantienen su ID original y los 6 nuevos resuelven a su handle correcto.

Respaldo del árbol completo en `docs/backup-menu-principal.json`. Para revertir:
quitar el bloque "Por necesidad" y reenviar el resto con `menuUpdate`.

### Home · "¿Qué necesita tu piel hoy?" (pendiente de publicar)

Las 9 tarjetas aterrizaban en colecciones de *rutina* (4-37 productos) en vez de en
catálogo. Corregido en una copia del tema, **sin publicar**:
`COPIA — Necesidades al catálogo (revisar y publicar)`.

| Tarjeta | Antes | Ahora |
|---|---|---|
| Granitos | rutina-piel-grasa-con-granitos-1 · 10 | `granitos` · 328 |
| Manchas | rutina-manchas-y-tono · 14 | `manchas` · 214 |
| Rojeces | rutina-rojeces · 10 | `calma-y-rojeces` · 579 |
| Poros y textura | rutina-poros-y-textura · 14 | `poros` · 322 |
| Piel seca | rutina-piel-seca · 23 | `piel-seca` · 492 |
| Barrera cutánea | rutina-barrera-danada · 15 | `barrera-cutanea` · 210 |
| Piel sensible | rutina-piel-sensible · 15 | `piel-sensible` · 533 |
| Luminosidad | rutina-luminosidad-1 · **4** | `manchas` · 214 |
| Primeras arrugas | rutina-primeras-arrugas · 37 | `antiedad` · 435 |

El MCP bloquea escribir sobre el tema publicado, así que se duplicó el tema en vivo y
se editó la copia. Solo cambian 9 líneas de `templates/index.json`; el resto del
fichero es byte a byte idéntico (MD5 del original `94b9a584…` verificado antes de
editar, MD5 del subido `e4d3c274…` verificado después).

**Lo publica Blanca**, desde Tienda online → Temas → Acciones → Publicar.

### Menú · desplegable de "Piel" reorganizado

El mega-menú de Horizon pinta siempre los tres niveles abiertos: no hay ajuste para
plegarlo, y `menu_style` solo controla si salen imágenes o productos. Las 22 rutinas
colgadas de "Rutinas y Sets" llenaban tres columnas y tapaban el resto del desplegable.

Solución sin tocar código: quitarle los hijos. Un item de segundo nivel sin hijos se
pinta como enlace simple. El desplegable de "Piel" queda:

1. **Rutinas** → `/pages/rutinas` (plegado; las 23 al pinchar)
2. **Sets de regalo** → `/collections/sets-de-regalo` (95 productos)
3. **Por necesidad** → las 6 colecciones de necesidad
4. Los 11 tipos de producto

El grupo se renombró de "Rutinas y Sets" a **Rutinas**, porque los sets ya tienen
entrada propia. El menú pasa de 97 a 76 enlaces.

Las 22 entradas retiradas están guardadas en `docs/rutinas-retiradas-del-menu.json`
por si hay que devolver alguna.

"Sets de regalo" (95 productos) colgaba de ahí y se fue con el resto. **Restaurado**
como elemento de segundo nivel bajo "Piel", donde se ve mejor que antes.

**Lección:** antes de quitarle los hijos a un grupo del menú, revisar uno por uno qué
se lleva por delante. No todos son de la misma familia.

### Colecciones ampliadas

`piel-seca` 128 → **492** y `piel-sensible` 127 → **533**, añadiendo reglas por título
a las reglas por etiqueta que ya tenían. No se crearon colecciones nuevas para no
duplicar nombres. Se mantiene el orden MANUAL para que la curación siga saliendo primero.

## AUTOMATED · ya funciona solo

- **6 colecciones de necesidad automáticas.** Se rellenan solas con cada producto nuevo que cumpla las reglas. Cero mantenimiento manual.
- Colecciones por marca (vendor), por tipo de producto y por etiqueta de rutina: ya existían.
- "Ofertas": regla `IS_PRICE_REDUCED`, se mantiene sola.

## BLOCKED

| Qué | Por qué | Desbloquea |
|---|---|---|
| Crawl de 404s, pruebas visuales, móvil, CRO, estrellas Judge.me, umbrales de envío | El entorno de ejecución bloquea `mireaskin.es` por política de red | Cambiar la política de red del entorno |

---

## Hecho y verificado · 2026-09-21

### Colecciones de necesidad creadas

Todas automáticas (reglas por título + etiqueta), orden "más vendidos", publicadas en Tienda online.

| Colección | Handle | Productos | Contaminación medida |
|---|---|---|---|
| Granitos | `granitos` | 328 | ~21 (6%) capilar/corporal/bucal |
| Manchas | `manchas` | 214 | ~4 (2%) |
| Poros | `poros` | 322 | 0 |
| Antiedad | `antiedad` | 435 | ~11 (3%) |
| Barrera cutánea | `barrera-cutanea` | 210 | ~17 (8%) |
| Calma y rojeces | `calma-y-rojeces` | 579 | ~13 (2%) |

**Descartadas a propósito**, para no agravar los duplicados:
- *Hidratación* → duplicaría "Hidratantes" (658 productos, ya en el menú)
- *Luminosidad* → solapa ~80% con Manchas
- *Textura* → ya la cubre "Exfoliantes y pads"

### Títulos traducidos al español

14 colecciones tenían handle español pero título en inglés, así que el H1 salía en inglés.
Renombradas sin tocar el handle (cero riesgo de 404):

`Cleansers`→Limpiadores · `Eye Care`→Contorno de ojos · `Hair`→Cabello · `Makeup`→Maquillaje ·
`Skin`→Piel · `Sun Protection`→Protección solar · `Offers`→Ofertas · `New Arrivals`→Novedades ·
`Health & Wellness`→Salud y bienestar · `Baby & Men`→Bebé y Hombre · `Beauty Accessories`→Accesorios de belleza ·
`Makeup Accessories`→Accesorios de maquillaje · `Beauty Devices`→Tecnología · `Body Care`→Cuerpo

---

## Incidencias detectadas, sin resolver

### Colecciones duplicadas

| Pequeña / huérfana | Grande | Nota |
|---|---|---|
| Mascarillas · 7 (pelo) | Mascarillas · 977 (cara) | Mismo nombre, categorías distintas |
| Labios · 11 | Labios · 325 | |
| Tónicos y esencias · 15 | Tónicos y esencias · 562 | |
| Champús · 7 | Champús · 229 | |
| Cuidado capilar · 33 | Cabello · 605 | Ambas en el menú |

**No se ha borrado nada.** Antes de tocarlas hay que comprobar si alguna sección del tema las referencia — y eso ahora mismo está bloqueado por la red.

### Otras

- `Novedades automáticas Mirea`: 8.187 productos con la regla "precio > 0". Es el catálogo entero ordenado por fecha, no unas novedades.
- `Menos de 20 €`: 5.103 productos. No está en el menú.
- 4 colecciones `INTERNO ·` y `Nuevos de Korealy` (0 productos): **verificadas sin publicar**. Sin riesgo de fuga.

## Trampa conocida de la herramienta

`create-collection` del MCP de Shopify **dice que publica en Tienda online y no lo hace**.
`resourcePublicationsV2` vuelve vacío. Hay que publicar siempre aparte con `publishablePublish`
y verificar. Si no, creas la colección y el 404 sigue exactamente igual.

## Limitación de las colecciones automáticas

Shopify no permite mezclar Y/O en el mismo conjunto de reglas. No se puede expresar
"que contenga acné **pero no sea** champú". Por eso queda contaminación residual.

La solución definitiva es la etiqueta `Necesidad: X` y una colección de regla única,
en línea con la taxonomía que ya existe (`Paso:`, `Piel:`, `Rutina:`).
