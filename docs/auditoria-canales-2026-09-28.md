# Auditoría de canales de venta · 28-09-2026

Punto D de la lista (Meta Shop), medido con `productsCount` filtrado por
publicación. Esta vez el filtro **sí** discrimina: devuelve `precision: EXACT`,
no el tope de 10.000 que estropeaba la cuenta de variantes.

## Dónde está el catálogo, y dónde no

| Canal | Productos | % de 8.212 | `autoPublish` |
|---|---|---|---|
| Tienda online | 7.739 | 94 % | **false** |
| Pinterest | 6.860 | 84 % | false |
| TikTok | 4.444 | 54 % | false |
| **Facebook & Instagram** | **748** | **9 %** | **false** |
| **Google & YouTube** | **379** | **5 %** | true |
| Shop | 147 | 2 % | false |

## Meta Shop: conectado, pero con el 9 % del catálogo

El canal **está instalado** (`Publication/361025700177`). No hay que conectarlo.
El problema es otro: **7.464 de los 8.212 productos no están publicados en él**.

Comprobado producto a producto, y es inconsistente, no una selección:

| Producto | Meta | Google | Tienda |
|---|---|---|---|
| medicube PDRN Pink Peptide Serum | sí | sí | sí |
| LANEIGE Lip Sleeping Mask EX Peach | **no** | sí | sí |
| Guía Mirea · Retinoides | no | sí | sí |

Que la guía digital no esté en Meta es correcto: Meta Shops no admite bienes
digitales. Que el LANEIGE no esté, no tiene explicación: es un producto físico,
publicado, con stock y con foto.

## La causa de fondo: `autoPublish` está en false casi en todo

**Incluida la Tienda online.** Eso significa que cada producto que KOREALY importa
**no aparece solo en la tienda**: hay que publicarlo a mano. Ahí están los **473
productos del catálogo que no se ven en mireaskin.es**.

No es un problema de una vez: es un goteo permanente. Cada importación futura
entra invisible.

## Google: 379 productos, y encaja con el problema del EAN

Google es el único con `autoPublish: true`, y aun así solo tiene **379 productos**.
Si la publicación es automática y solo entran 379, es que **Google está rechazando
el resto**.

Eso encaja exactamente con lo medido el 27-09 en
`docs/auditoria-gtin-2026-09-27.md`: solo el **6,5 %** de las variantes tiene EAN.
Sin GTIN, Google descarta la oferta en la mayoría de categorías de cosmética.

Dicho en claro: **el EAN que falta no es un detalle de datos, es lo que mantiene
el 95 % del catálogo fuera de Google Shopping.** Es el mismo bloqueo, visto desde
el otro lado.

## Lo que NO he hecho, y por qué

**No he publicado nada en masa.** Tres razones, y ninguna es pereza:

1. **Google rechazaría casi todo igual.** Publicar 7.800 productos sin GTIN llena
   el Merchant Center de errores y perjudica la reputación de la cuenta. Primero
   el EAN, después el volumen.
2. **Meta revisa los catálogos.** Meter 7.464 productos de golpe en una tienda con
   cero ventas es la clase de movimiento que dispara una revisión. Conviene hacerlo
   por tandas.
3. Publicar es hacer visible algo que no lo está, y eso lo decides tú.

## Lo que propongo, por orden de impacto

1. **Activar `autoPublish` en Tienda online.** Es el arreglo estructural: deja de
   perder productos en cada importación. Solo afecta a los productos nuevos, no
   toca los que ya hay. Reversible.
2. **Publicar en Meta los productos físicos con stock**, por tandas, empezando por
   las colecciones que ya usas en la portada (Novedades, Ofertas, las de necesidad).
   Sin bienes digitales: Meta no los admite.
3. **Google, después del EAN.** Antes no merece la pena.
4. **Revisar los 473 que no están ni en la tienda.** Puede que haya motivo
   (agotados, borradores), pero 473 es demasiado para que sea intencionado.

Dime por cuál empiezo y lo hago.
