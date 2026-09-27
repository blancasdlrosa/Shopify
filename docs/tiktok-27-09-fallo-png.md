# TikTok 27-09 18:00 · por qué no se publicó

Comprobado a las 18:20 (Madrid) del 27-09, cuando saltó el aviso programado.

## No se publicó. Falló.

Post `381157649`, brandId `6949847`. Estado devuelto por Metricool:

```
network: tiktok
status: ERROR
detailedStatus: "The content format of the Tiktok photo is incorrect.
                 The 'image/png' type is not allowed,
                 use 'image/jpeg' or 'image/webp' instead."
```

## La causa, exacta

El carrusel lleva tres imágenes y **la tercera es un PNG**:

| # | Archivo | Formato | TikTok |
|---|---|---|---|
| 1 | `...9628928015229397385.jpeg` | JPEG | OK |
| 2 | `...13746094498388475624.jpeg` | JPEG | OK |
| 3 | `...9187243132471897340.png` | **PNG** | **rechazado** |

TikTok solo acepta JPEG o WEBP en publicaciones de fotos. Basta un PNG para que
rechace el post entero, no solo esa imagen.

No es un fallo de Metricool ni de programación: el post salió a la hora, TikTok
lo devolvió.

## Por qué no lo he arreglado yo

Hace falta convertir esa imagen a JPEG y volver a subirla. El proxy de red de mi
entorno **deniega `static.metricool.com`** (`connect_rejected`), así que no puedo
descargar el PNG para convertirlo.

La tercera imagen es, según su propio texto alternativo, *"medicube PDRN Pink
Peptide Serum, fotografía real del producto"*. Si es la foto de producto sin
más, hay un JPEG ya disponible en el CDN de Shopify, servido como JPEG de verdad:

```
https://cdn.shopify.com/s/files/1/1079/5814/1265/files/product_images_1733237030.5b3cff075a406fc6dba202b6a4e9aa7e1789405094_1440x.png.jpg?v=1789405348
```

No la he sustituido por mi cuenta: si la tercera diapositiva es un diseño y no la
foto suelta, cambiarla alteraría el carrusel. Eso lo decide Blanca.

## AVISO · el post de mañana va a fallar igual

El post `382452882`, **Instagram, 28-09 a las 10:00**, está PENDING y lleva
**dos PNG** de tres:

| # | Archivo | Formato |
|---|---|---|
| 1 | `...8341177994110251311.jpeg` | JPEG |
| 2 | `...9067136572603353524.png` | **PNG** |
| 3 | `...4612223838571807193.png` | **PNG** |

La API de publicación de Instagram pide JPEG para imágenes. Con dos PNG hay
riesgo alto de que mañana pase lo mismo.

**Conviene convertirlas antes de las 10:00.** Es el mismo arreglo: exportar en
JPEG y reemplazar en el planificador.

## Regla para no repetirlo

Exportar **siempre en JPEG** lo que vaya a Metricool. PNG solo sirve para la web
de Shopify, donde sí se acepta. Si el diseño se hace en Canva, es un desplegable
en el momento de descargar.
