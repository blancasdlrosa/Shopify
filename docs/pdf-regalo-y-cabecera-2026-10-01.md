# Por qué los correos de regalo no llevaban PDF, y cómo queda arreglado

Fecha: 01-10-2026.

## 1. La causa, sin rodeos

Los dos correos de regalo se construyeron el 28-09 con un **botón a una página de la
tienda**, no con un archivo adjunto:

| Correo | Flow | Enlace que llevaba |
|---|---|---|
| Guía PRO Premium (>35 €) | `SMvtLa` / plantilla `VKkcav` | `/pages/la-guia` |
| Journal 4 semanas (≥60 €) | `VtbF3p` / plantilla `SqHGhE` | `/pages/mirea-checklist-4-semanas` |

No era un fallo técnico: era cómo se dejaron hechos. El contenido existía y las
páginas estaban publicadas, así que la clienta recibía algo real. Lo que **no**
recibía era un PDF, porque en ese momento los PDF de las guías no estaban en
Shopify: estaban en el Drive de Blanca.

Dos cosas que se parecen en el nombre y no son lo mismo:

- **Los PDF de las 14 guías** («Guía Mirea …», los productos que se venden). Estaban
  solo en el Drive.
- **El contenido de regalo**, que vivía como página web.

## 2. Qué se ha hecho

**a) Los 11 PDF de las guías ya están en los archivos de Shopify.**

Se subieron por la API (`stagedUploadsCreate` → POST a `storage.googleapis.com` →
`fileCreate`). Los 11 dieron HTTP 201 y los 11 están en estado `READY` con URL
pública de `cdn.shopify.com`. Suman unos 15 MB.

| Guía | ES | EN |
|---|---|---|
| Barrera cutánea | sí | sí |
| Activos y edad | sí | sí |
| Combinar activos | sí | sí |
| Fotoprotección | sí | sí |
| K-Beauty | sí | sí |
| Gua Sha | **falta** | sí |
| Retinoides | **falta** | **falta** |

Las tres que faltan no estaban en la carpeta descargada del Drive. Hacen falta para
completar el juego.

Además ya había 5 PDF de rutinas en la tienda desde el 14-09 (primera vez, piel
grasa, piel seca, piel sensible, hombre). En total hay **16 PDF**.

**b) Las dos páginas de regalo ahora tienen descarga directa en PDF.**

- `/pages/la-guia`: bloque nuevo «Descarga tus guías en PDF», con los 5 PDF en
  español y los 6 en inglés, en dos columnas y con el estilo de la propia página.
- `/pages/mirea-checklist-4-semanas`: bloque «Descarga tu rutina en PDF» con los 5
  PDF de rutinas, más un enlace a la página de la guía. El bloque se oculta al
  imprimir, para que no salga en el checklist impreso.

**Esto arregla también los correos ya enviados**, incluido el del pedido #1007: el
botón de esos correos lleva a estas páginas, así que el cliente que pulse ahora
encuentra los PDF. No hace falta reenviar nada.

**c) Lo que NO se ha podido hacer por API.**

Meter los enlaces dentro del cuerpo del correo de Klaviyo. La API devuelve
`404 not_found` al intentar un `PATCH` sobre la plantilla `VKkcav`: Klaviyo no deja
editar por API una plantilla que está atada a un flow, aunque sí deja leerla. Hay
que hacerlo desde el editor de Klaviyo a mano, o no hacerlo: con el arreglo de las
páginas el cliente ya llega al PDF en un clic.

## 3. El selector de idioma duplicado

Había **dos controles** en la cabecera, y ninguno era un duplicado del otro:

1. **El selector nativo de Shopify**, en la cabecera: un único botón que mostraba
   `bandera + EUR + / + ES`. Es el que funciona, porque usa los idiomas publicados
   de la tienda (`/es`, `/en`).
2. **El switcher de Transtore**, un app embed (`switcher_embed_block`) activo en
   `config/settings_data.json`. Es el segundo control, el de más a la derecha, y es
   también el responsable del «Piel de novia» que aparecía sin estar en ningún sitio
   de Shopify (se documentó el 30-09 en `piel-de-novia-diagnostico-2026-09-30.md`:
   4.589 traducciones del tema revisadas, 0 coincidencias).

Cambios, hechos sobre un tema **duplicado**, no sobre el publicado:

- `config/settings_data.json`: el app embed de Transtore pasa a `"disabled": true`.
  Los otros cinco app embeds (Judge.me, Klaviyo, Google, Consentmo) quedan como
  estaban. Se revierte cambiando esa palabra.
- `snippets/mirea-selector-idioma.liquid` (nuevo) + su render en
  `layout/theme.liquid`: oculta la bandera, el código de divisa y la barra **solo en
  la etiqueta del botón**, que queda en `ES` / `EN`. El panel que se abre sigue
  teniendo país, divisa e idioma: no se pierde el cambio de moneda. Se revierte
  borrando el render.

No se tocó `sections/header.liquid`: queda con su MD5 original
`a8aea6545ae7fe5effad6f5a6fa99069`.

### Riesgo que hay que decir

Si Transtore estaba traduciendo algún texto por su cuenta, al apagar su switcher ese
texto dejará de traducirse y volverá al idioma original. La traducción de verdad
—la nativa de Shopify, con `es.json` y el idioma publicado— no se toca. Es una
palabra para volver atrás si hiciera falta.

## 4. La IA ya está en vivo

Blanca publicó el tema ADVISOR v3. Comprobado contra el tema MAIN:

- `sections/mirea-ai.liquid` — 34.239 B, MD5 `ef393bdcc089a41393ebc27f0c1e0454`
- `templates/collection.advisor.liquid` — 2.170 B, MD5 `fcc563a09165f221dd57c6d30928031d`

Coinciden byte a byte con la versión que pasó las 1.650 combinaciones de prueba de
`theme/pruebas/`. Desde aquí no se puede cargar `mireaskin.es` (salida bloqueada),
así que lo que está verificado es que los archivos son los correctos, no el render.

## HECHO
- 11 PDF de guías subidos a Shopify, los 11 `READY` con URL pública.
- Descarga directa en PDF en las dos páginas de regalo. Arregla los correos ya enviados.
- Mensaje para el cliente del #1007 en `correos/1007-regalo-pdf-cliente.md` (ES y EN).
- Switcher de Transtore desactivado y botón de idioma acortado a `ES`, en tema duplicado.
- Confirmado que la IA v3 está en vivo e íntegra.

## EN PROCESO
- Adjuntar los PDF a los 14 productos «Guía Mirea» y ponerlos en venta.
- Regalo del PDF al comprar un pack relacionado.

## BLOQUEADO
- Gua Sha ES y Retinoides ES/EN: no estaban en el Drive. Hacen falta los archivos.
- Enlaces PDF dentro del cuerpo del correo de Klaviyo: la API no deja editar una
  plantilla atada a un flow. Es un paso manual en Klaviyo.
- Publicar el tema v6: lo decide Blanca.

## SIGUIENTE
- Publicar `Mirea v6 · SELECTOR ES · SIN SWITCHER TRANSTORE` (tema `207341814097`)
  y mirar la cabecera: debe quedar un solo control, con `ES`.
