# Las descripciones de producto: cuántas están en español y cuántas no

*23-09-2026 · Claude. Medido sobre los 7.738 productos activos, uno por uno, no por muestra.*

## El número

| Situación | Productos | Qué ve la clienta |
|---|---|---|
| Tienen traducción al español del `body_html` | **3.369** | Descripción en español ✅ |
| No tienen traducción, pero el texto base ya está en español (tus fichas) | **175** | Descripción en español ✅ |
| No tienen traducción y el texto base está en inglés | **4.145** | **Descripción en inglés** ❌ |
| Texto indeterminado (listas de ingredientes, casi sin frases) | 41 | Medio inglés ❌ |
| Sin descripción ninguna | 7 | Ficha vacía ❌ |
| Coreano | 1 | Coreano ❌ |

**4.194 de 7.738 fichas (54 %) enseñan hoy una descripción que no está en español.**

## Por qué pasa esto

La tienda tiene instalada **Translate & Adapt** (la app de traducción de Shopify).
Tradujo 3.369 productos y se quedó ahí: los 7.560 que entraron después desde Korealy
llegaron con la descripción en inglés y nadie la tradujo.

Esto **no** tiene nada que ver con la limpieza de traducciones automáticas de estos días.
Esa limpieza borró títulos y tipos de producto mal traducidos (`Serum` → `Suero`,
nombres de marca destrozados). Las descripciones no se tocaron en ningún momento.

## Cómo se arregla

### Opción rápida y gratuita (recomendada)

En **Apps → Translate & Adapt → Español → Traducir automáticamente**. Es un clic, es
gratis (Shopify incluye la traducción automática hasta 2 idiomas) y cubre los 4.194 de
golpe.

El único inconveniente: la app traduce *todos* los campos, incluidos los títulos, y ahí
vuelve a hacer el destrozo que acabamos de limpiar (`Serum` → `Suero`, marcas
traducidas). **Eso lo vuelvo a limpiar yo**: la herramienta ya está montada y hecha, son
86 tandas de `translationsRemove` y borra solo `title` y `product_type`, dejando las
descripciones intactas. Ya lo hice una vez con los 7.738.

Orden correcto: primero ella traduce, después yo limpio títulos. No al revés.

### Opción lenta

Que las escriba yo a mano, traduciendo el texto inglés original producto a producto.
Son 4.194 fichas; da para varias sesiones largas. Mejor redacción, muchísimo más tiempo.

## Sobre cambiar el idioma principal a español

Hoy el idioma principal de la tienda es **inglés** y el español va como traducción.
El contenido bueno (tus 175 fichas en español) está escrito en la capa base, no en la
traducción, así que el cambio de idioma principal es correcto y no pierde tu trabajo.

Pero **hazlo después de traducir las descripciones**, no antes: si cambias ahora, esas
4.145 descripciones en inglés pasan a llamarse "español" sin dejar de estar en inglés, y
se queda así.
