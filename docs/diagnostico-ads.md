# Mirea Skin · Diagnóstico para publicidad
2026-09-21 · datos de Shopify, Google Merchant Center y Search Console

## Lo que ya está bien

| | |
|---|---|
| Tienda pública | Sí. `passwordProtection: false`. No hace falta "publicarla" |
| Dominio | mireaskin.es (myshopify: heh7ct-ib) |
| Catálogo | 8.084 activos · 50 borradores · 8 sin stock · 0 sin tipo · 0 sin marca |
| Envíos | España 6,99–27,99 € · UE 8,99–32,99 € · Intl 12,99–39,99 € · 59 países |
| Mercados | España (principal), UE, Internacional (USD) |
| Merchant Center | Conectado · cuenta 5857344812 |
| Gasto en ads | **0 €. No hay cuentas de Google Ads ni Meta Ads conectadas** |

## El cuello de botella

| Canal | Productos |
|---|---|
| Tienda online | 8.084 |
| **Google y YouTube** | **178** |

**97,8% del catálogo no llega a Google.** De ahí que el feed de Merchant tenga
~441 artículos para España en vez de varios miles.

## Merchant Center · estado por destino (España)

| Destino | Activos | Rechazados | Pendientes |
|---|---|---|---|
| Shopping Ads | 432 | 0 | 9 |
| Display Ads | 439 | 2 | 0 |
| **Free Listings** | **0** | 0 | **441** |

Shopping Ads en España está limpio. Pero **Free Listings tiene 0 activos**: las fichas
gratuitas de Google (tráfico sin coste) no están saliendo en ningún país.

### Países 100% rechazados

Corea del Sur, Malta, Croacia, Bulgaria y Liechtenstein tienen **todos** sus
productos rechazados en Shopping Ads (218-222 cada uno). Canadá tiene 8 rechazados.

## Search Console

**Cero impresiones y cero clics en 6 meses.** Sin un solo dato.

Dos lecturas posibles y no se pueden distinguir desde la API:
1. El sitio no está indexado en Google.
2. La propiedad de Search Console se verificó hace poco y aún no ha recogido datos.

Comprobación de 30 segundos: buscar `site:mireaskin.es` en Google. Si no sale nada,
es la primera.

## Orden de trabajo propuesto

**Fase 1 · Que Google venda por ti, gratis.** Ampliar el feed (178 → miles, por lotes),
desbloquear Free Listings, arreglar los 5 países rechazados, confirmar indexación.
Todo esto es tráfico sin coste. Va antes de pagar un euro.

**Fase 2 · Medir antes de gastar.** GA4, conversiones de Google Ads, píxel de Meta.
Sin esto los anuncios van a ciegas y no se puede saber qué funciona.

**Fase 3 · Primeros anuncios.** Google Shopping en España, catálogo reducido y de
buen margen. La colección `INTERNO · Google Ads · candidatos lanzamiento` ya tiene 6
productos elegidos; `INTERNO · NO anunciar hasta revisar margen` tiene 2.

**Fase 4 · Retención.** Klaviyo: bienvenida, carrito abandonado, postcompra, reseña.
Sale más barato que captar.

**Fase 5 · Contenido.** Instagram y Metricool están conectados.

## Riesgo a respetar

La sección 25 del brief dice: *evitar cambios masivos que puedan desencadenar nuevas
incidencias*. Publicar 8.084 productos de golpe en Merchant Center puede provocar una
oleada de rechazos y, en el peor caso, la suspensión de la cuenta.

**Por lotes, comprobando rechazos entre uno y otro.**
