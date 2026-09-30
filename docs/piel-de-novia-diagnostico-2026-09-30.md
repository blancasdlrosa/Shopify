# "Piel de novia", el doble selector de idioma y dónde está la IA · 30-09-2026

Blanca abrió la vista previa del tema `Mirea v5 · ADVISOR v2 · BASE MAIN 30-09`
y vio tres cosas. Las tres están comprobadas contra la API, no supuestas.

**Lo primero, para quitar el susto:** ese tema es una **copia exacta del tema
que está EN VIVO**, hecha hoy con `themeDuplicate`. El único archivo que he
tocado es `sections/mirea-ai.liquid`. Así que **lo que se ve ahí se está viendo
igual en la tienda publicada ahora mismo.** No lo ha provocado mi cambio.

---

## 1 · "Piel de novia" no está en la tienda. Lo pone algo por encima

Lo que dice el **código del tema**, en `templates/index.json`, sección
`mirea_hero_lux_proto`:

```json
"kicker": "K-BEAUTY, BIEN ENTENDIDA",
"titulo": "Mirea Skin",
"fase_1": "Tu piel no necesita diez productos. Necesita los que le hacen falta."
```

El título del hero es **"Mirea Skin"**. En pantalla pone "Piel de novia".

Lo comprobado, una por una:

| Comprobación | Resultado |
|---|---|
| Nombre de la tienda en Shopify | **Mirea Skin** |
| ¿Hay traducción del nombre de la tienda? | **No.** `translatableResources(SHOP)` devuelve vacío |
| Título del hero en el tema | **Mirea Skin** |
| ¿Hay traducción al español del hero? | **No.** La única traducción de `index.json` es la del Journal |
| ¿Existe una colección o página "Piel de novia"? | **No.** Ninguna |
| ¿Está en el menú? | **No.** El menú principal no lo contiene |
| ¿Hay un logo puesto? | **No.** Solo favicon. Sin logo, la cabecera imprime el nombre de la tienda |

O sea: **"Piel de novia" no está escrito en ningún sitio de Shopify.** Y aparece
en dos sitios a la vez: en la cabecera (donde iría el logo, que imprime el
nombre de la tienda) y en el titular del hero. Los dos sitios donde pone
"Mirea Skin".

Eso es la firma de una **sustitución de texto en el navegador**: algo cambia
"Mirea Skin" por "Piel de novia" después de que la página se haya cargado.

**Quién lo hace.** En `config/settings_data.json` hay seis aplicaciones
incrustadas. Solo una toca los textos:

```json
"6603664506335945664": {
  "type": "shopify://apps/transtore/blocks/switcher_embed_block/...",
  "disabled": false
}
```

**Transtore**, una app de traducción y cambio de divisa. Está activada, y es la
única candidata: Judge.me son reseñas, Klaviyo es correo, Google/YouTube es el
canal de ventas y Consentmo son las cookies.

**Cómo confirmarlo en 30 segundos, sin tocar la tienda publicada:**
1. En la vista previa del tema borrador → **Editar tema**.
2. Abajo a la izquierda, el icono de **incrustaciones de aplicaciones**.
3. Apaga **Transtore**. No guardes nada más.
4. Mira la cabecera. Si pone **Mirea Skin**, es esa app.

Como es el tema borrador, no afecta a lo que ven las clientas. Se vuelve a
encender con el mismo interruptor.

**Si se confirma:** hay que entrar en el panel de Transtore y borrar esa
"traducción". Alguien metió "Mirea Skin → Piel de novia" en algún momento, o la
app lo generó sola con una traducción automática. Es **el nombre de la marca**:
no se traduce nunca.

---

## 2 · Dos selectores de idioma, porque hay dos sistemas de traducción

En la cabecera se ven dos:

| Cuál | De dónde sale |
|---|---|
| 🇪🇸 Spanish \| 🇪🇺 Euro | **De Shopify.** `sections/header-group.json` tiene `show_country: true` y `show_language: true` |
| 🇪🇸 EUR / ES | **De Transtore**, el `switcher_embed_block` de arriba |

No es un fallo del tema: **están funcionando dos sistemas de traducción y divisa
al mismo tiempo**, el nativo de Shopify (Mercados + Translate & Adapt) y el de
la app.

**Lo que recomiendo:** quedarse con el de Shopify y quitar el de la app. El
nativo está unido a los Mercados, a los precios y al dominio, y es el que
Shopify respeta para SEO (`hreflang`). El de la app va por encima y es el que
está cambiando el nombre de la marca.

**Pero no lo hago sola**, porque si Transtore guarda traducciones del catálogo,
apagarla puede dejar textos en inglés. Hay que mirar antes qué tiene dentro.
Con una captura de su panel te digo si se puede apagar sin perder nada.

---

## 3 · Hay una traducción vieja pegada: el anuncio de arriba

Otro efecto del mismo lío, este sí en Shopify y comprobado:

| | |
|---|---|
| Lo que dice el tema (inglés, idioma principal) | `Cosmética coreana, rutinas y guías ✦ Encuentra tu rutina en Mirea` |
| Lo que se ve en español | `Envío gratis en España desde 69 € ✦ Todos los packs Mirea lo llevan incluido` |
| Estado de esa traducción | **`outdated: true`** |

Se cambió el texto original y la traducción española nunca se actualizó. Como
**el idioma principal de la tienda es el inglés** y el español es un idioma
secundario publicado, quien navega en español ve la versión vieja.

**Y aquí está la raíz de casi todo:** el idioma principal de la tienda es
**inglés**, pero el contenido está escrito **en español**. Así que el español
—el idioma de tus clientas— se sirve desde la capa de traducciones, que es justo
la que está desactualizada y encima duplicada por la app.

| | |
|---|---|
| `en` | **principal**, publicado |
| `es` | secundario, publicado |

Esto merece decisión aparte: lo limpio es poner **el español como idioma
principal**. No lo toco sin que lo digas: cambiar el idioma principal mueve URLs
y hay que hacerlo con cuidado.

---

## 4 · Dónde está la IA

No está en la portada. Tiene página propia:

- Página: **Mirea Skin Advisor · Beta**, handle `mirea-ai`, publicada,
  plantilla `page.mirea-ai`.
- En la vista previa, en español: **`/es/pages/mirea-ai`**.

Pega eso al final de la dirección de la vista previa y sale el formulario de las
cuatro preguntas. En el menú principal no hay enlace a esa página, por eso no se
encuentra navegando. **Si quieres, le añado una entrada al menú** — dime dónde.

El banner rosa que pone *"Próximamente · Mirea Skin App · Descúbrela →"* es otra
cosa: apunta a la página `mirea-app`, que está **sin publicar**.

---

## Qué hago yo y qué haces tú

**Tú, ahora, dos minutos:**
1. Apagar Transtore en el tema borrador y mirar si vuelve "Mirea Skin".
2. Ir a `/es/pages/mirea-ai` y probar el advisor, que era el motivo de la vista
   previa.

**Yo, en cuanto me digas:**
- Actualizar la traducción vieja del anuncio.
- Quitar el selector duplicado, cuando sepamos cuál sobra.
- Añadir la IA al menú.
- Y, si lo decides, preparar el cambio de idioma principal a español.

**Lo que no hago sin tu OK:** apagar la app en el tema publicado, cambiar el
idioma principal y tocar el menú. Las tres son visibles.

---

# Actualización · 30-09-2026, después de revisar la capa de traducción entera

## Descartado del todo: Shopify NO traduce "Mirea Skin"

He leído **las 4.589 traducciones al español que guarda Shopify** del tema
(`ONLINE_STORE_THEME_LOCALE_CONTENT` y `ONLINE_STORE_THEME_APP_EMBED`).

| Búsqueda | Resultado |
|---|---|
| Traducciones revisadas | **4.589** |
| Contienen "novia" | **0** |
| Contienen "Mirea Skin" | **0** |

Sumado a lo de arriba (nombre de tienda, hero, menú, páginas y colecciones, todo
comprobado), queda cerrado: **"Piel de novia" no existe en ningún dato de
Shopify.** Lo mete algo en el navegador, y el único candidato activo es
Transtore.

## Hecho: "Mirea AI" ya está en el menú principal

Añadido con `menuUpdate`, justo después de "Encuentra tu rutina":

- **Mirea AI** → `/es/pages/mirea-ai` (página "Mirea Skin Advisor · Beta").

Comprobado después de escribir, nivel por nivel: el menú tenía **84 elementos** y
ahora tiene **85**. Los tres niveles siguen completos, con sus mismos
identificadores. `userErrors: []`.

Copia del menú tal y como estaba antes, por si hay que volver atrás:
`docs/respaldos/menus/main-menu-antes-2026-09-30.json`.

**Un arreglo de paso:** el elemento "Todos los productos" tenía la dirección
`/es/collections/all` escrita a mano. Ahora va como enlace de catálogo sin idioma
fijo, así que genera la dirección correcta según el idioma de quien navega. Antes
mandaba a la versión española siempre.

## Los dos selectores: cuál es cuál

Lo que sé con certeza:

- Shopify tiene el suyo activado: `show_country: true` y `show_language: true` en
  `sections/header-group.json`.
- Transtore tiene el suyo: `switcher_embed_block`, activado.

Lo que **no** puedo saber desde aquí es cuál de los dos se dibuja a la izquierda
y cuál a la derecha, porque no puedo cargar la tienda. Y quitar el que no es
dejaría a las clientas sin poder cambiar de idioma.

**La prueba que lo resuelve, en el tema borrador y sin tocar la tienda
publicada:** apagar Transtore y mirar cuál de los dos desaparece.

**Importante: apagar Transtore no apaga la traducción.** El español de la tienda
lo sirve Shopify, no la app. La prueba:

- El idioma `es` está publicado en Shopify (Mercados e Idiomas).
- Todas las direcciones del menú son `/es/...`, que es el enrutado nativo de
  Shopify.
- Shopify guarda **4.589 traducciones al español** del tema, que siguen ahí
  aunque la app se apague.

Transtore está **encima** de eso, duplicando el selector y cambiando el nombre de
la marca.
