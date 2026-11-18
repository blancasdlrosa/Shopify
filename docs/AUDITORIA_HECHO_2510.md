# Auditoría "qué existe ya" · 25-10-2026 (solo lectura)

Comprobado en vivo por API (Klaviyo, Shopify, Metricool, Google Ads). No se ha creado, cambiado, enviado ni borrado nada.
Leyenda: ✅ hecho · ⚠️ a medias · ❌ falta

## 1. Klaviyo · flows (27 en total: 14 live, 13 borrador)

### Live (14)
| Flow | Id | Disparador | Emails | Remitente | Diseño |
|---|---|---|---|---|---|
| Welcome 10% | Vnwwa7 | Suscripción (RAcJY9) | 1 (inmediato) | hola@mireaskin.es | ✅ Premium v2 (XqqACx) |
| Welcome PRO · Nurture | VNKYNs | Suscripción, sin compra | 2 (día 2, día 5) | hola@ | ✅ Premium v2 (VV5Ypt, REAUyZ) |
| Carrito abandonado · Shopify Added to Cart | TX2NFZ | Added to Cart (VBBMXM) | 2 (2 h, 20 h) | hola@ | ✅ Mirea v2 (SsXfLn, TsazRE) |
| Checkout abandonado · definitivo | RZzUtE | Checkout Started (Y34J6T) | 2 (1 h, 20 h) | hola@ | ✅ Mirea v2 (WYZkJ7, TafNEX) |
| Primera compra · Mi Mirea | SAjKhA | Placed Order (1.ª compra) | 1 (día 1) | hola@ | ⚠️ antiguo (RGfFju) |
| Postcompra · Cuida tu rutina | ShA32T | Placed Order | 1 (día 25) | hola@ | ⚠️ antiguo (VSrN3R) |
| Cross-sell · Completa tu rutina | XCwF2L | Placed Order | 1 (día 50) | hola@ | ⚠️ antiguo (TqDRpb) |
| Cross-sell post-entrega | RxWXvG | Fulfilled Order (QRmc4X) | 1 (día 32) | hola@ | ⚠️ antiguo (WVeC39) |
| Reposición · "45 días" | VTmbc5 | Placed Order | 1 (**día 80**) | hola@ | ⚠️ antiguo (X4L25V) |
| Win-back · 60 días | VvW277 | Placed Order | 1 (día 60) | hola@ | ⚠️ antiguo (YtLJvs) |
| VIP · 3.ª compra | WRuveC | Placed Order (3.ª) | 1 (10 min) | hola@ | ⚠️ antiguo (TP2wuT) |
| Regalo primer pedido >35 · guías PDF | RUA2Fx | Placed Order >35 € | 1 (ES/EN) | hola@ | sin revisar diseño |
| Regalo pedido ≥60 · rutinas + journal | VXcjCk | Placed Order ≥60 € | 1 (ES/EN) | hola@ | sin revisar diseño |
| Guías compradas ES/EN (nombre dice "BORRADOR 08-10") | TUtFNF | Placed Order con guía | 1 (ES/EN) | hola@ | sin revisar diseño |

Las plantillas antiguas de carrito/checkout (V8rDzR, WhQutH, XnRyZ7, YygpSX) ya **no** están asignadas en los flows. ✅

### Postcompra, reposición, win-back, VIP y cross-sell
- ✅ Existen y están live. Todos en español, marca correcta y remitente hola@mireaskin.es.
- ✅ Ninguno dice "envío gratis desde 35 €". (El "Regalo desde 35 €" de la bienvenida se refiere a la guía PDF, y eso es verdad.)
- ⚠️ El diseño es el **antiguo**: solo texto y un botón, sin productos ni barra de confianza v2, y sin la dirección de la organización en el pie. Correcto pero básico, no tiene el nivel de los v2.
- ⚠️ **Se solapan**: XCwF2L (pedido +50 d) y RxWXvG (enviado +32 d) tienen el mismo asunto, "Completa tu rutina ✦", y casi el mismo texto. Una clienta puede recibir los dos.
- ⚠️ El nombre de VTmbc5 dice "45 días" y la plantilla "Día 45", pero la espera real es de **80 días**.
- ⚠️ Datos desfasados: XCwF2L dice "Más de 4.600 referencias" (hoy hay unos 8.400 productos activos). La bienvenida XqqACx y Primera compra RGfFju dicen "Corea 2–3 semanas", pero la política de envíos dice **2–4 semanas**.
- ⚠️ VIP TP2wuT promete "acceso prioritario a novedades y ventajas especiales", pero no existe ningún programa VIP detrás. Es vago, aunque no llega a ser falso.

### Borradores (13), sin enviar
- S6M6wD "Pide tu reseña": ✅ en borrador, 35 días después del envío, plantilla v2 V4BNUY.
- 12 duplicados antiguos, candidatos a archivar: RHJmGu, SMkJ8Q, SMvtLa, T3fk9r, TG3hUH, TRLNzm, Tt899Q, VPtcLC, VtbF3p, WJ3NCF, WftekN y WG9Nr7 (Browse Abandonment, que sí estaría bien activar algún día).
- ❌ **No hay ningún flow live de navegación abandonada** (WG9Nr7 está en borrador).

### Campañas programadas
✅ Las 6 newsletters siguen en estado **Scheduled** (09:00 UTC):
28-10 (01M5HM5ESGC8VVYN45ZE74S2YY), 06-11 (01M5HMG55CRWXQZVX4BHMXC2VH), 11-11 (01M5HMJVR2SWCKJ5JNYKK00J55), 20-11 (01M5HMN4VEE9CMKPKDA37KP7WX), 25-11 (01M5HMQK513B5Z6DE6XA9QD9WM) y 04-12 (01M5HMSYRXHDE4717345XMZC5W).

## 2. Blog de Shopify
- Blogs: "Consejos de skincare" (/blogs/consejos, **28 artículos, todos publicados y en español**) y "News" (vacío, el de Shopify por defecto).
- Artículos (fecha de publicación):
  - 12-09: Por dónde empezar una rutina · Piel grasa: más limpias, más grasa · Protector solar todos los días.
  - 20-09: Orden de la rutina · Niacinamida · Centella asiática · PDRN · Doble limpieza · Barrera cutánea dañada · Rutina para manchas · Retinol y retinal · Rutina coreana sencilla.
  - 27-09: Medicube PDRN Pink Peptide Serum · Medicube Zero Pore Pad 2.0.
  - 08-10 (temas del antiguo foro): ¿Qué te cuesta más de tu rutina? · Retinol, tu experiencia · Productos que te gustaría comparar.
  - 20-10: Protector coreano para piel grasa · Vitamina C coreana · Cosmética coreana original en España · Ingredientes que no mezclar · AHA/BHA/PHA · Ácido hialurónico · Rutina piel grasa y poros · Rutina piel seca otoño-invierno · Granitos: 8 errores · Contorno de ojos · Mascarillas coreanas.
- ✅ No hay duplicados reales ni artículos en inglés. Se parecen bastante (sin ser copias) "Por dónde empezar", "Orden de la rutina" y "Rutina coreana sencilla".
- ✅ Ya están cubiertos: barrera, orden de la rutina, protector solar, PDRN e invierno (piel seca).
- ❌ Huecos: parches para granitos · protector solar en invierno · ceramidas · mucina de caracol · piel sensible/rojeces · exfoliar en invierno · péptidos/bakuchiol · guía de regalos de Navidad / Black Friday · cabello (caída, cuero cabelludo: catálogo muy grande y ningún artículo) · maquillaje coreano (cushion) · hombre · perfumes árabes.

## 3. Metricool (marca 6949847), del 25-10 al 31-12
| Red | Publicaciones | Última fecha | Estado |
|---|---|---|---|
| Instagram | 21 (1 publicada hoy y 20 pendientes) | 15-11 | sin errores |
| TikTok | 21 (1 publicada hoy y 20 pendientes) + 1 borrador de prueba (401835172, 30-12, privado, no se publica) | 15-11 | sin errores |
| Pinterest | 10 (1 publicada hoy y 9 pendientes) | 03-11 | sin errores |
| Facebook | 0 (la página está conectada, pero no hay nada programado) | — | — |

- ✅ Ninguna publicación con error ni fallida.
- ⚠️ 404444089 (02-11, TikTok) y 404444120 (04-11, IG + TikTok) llevan imágenes **PNG**. TikTok ya rechazó PNG el 20-10 (regla: solo JPG). En TikTok, 404444089 no tiene la marca de contenido IA (en IG sí).
- ❌ Hueco: nada programado en Pinterest después del 03-11, ni en IG/TikTok después del 15-11.

## 4. Lo que tenía que hacer Blanca
| | Tarea | Estado |
|---|---|---|
| a | Publicar el tema 209154441553 "títulos ES" | ❌ No está publicado (UNPUBLISHED). El tema en vivo ahora es **209155588433 "Mirea · España necesidades · 23-10 · PRUEBA"**, que no aparece en el registro, y sigue con `tagged` / `Page N` en meta-tags.liquid. Ojo: publicar 209154441553 tal cual quitaría lo que tenga el tema en vivo. Es mejor pasar el cambio de meta-tags a una copia del tema en vivo. |
| b | Política de envíos con el texto nuevo | ⚠️ El texto nuevo está (3-7 días laborables desde España, 2-4 semanas desde Corea; actualizada el 22-10), **pero se pegó también el encabezado interno**: "Política de envíos (texto nuevo 22-10) — pegar en Shopify > Configuración > Políticas > Política de envío". Ese encabezado es visible para las clientas y hay que borrarlo. (Aparte: la política de privacidad sigue casi entera en inglés.) |
| c | Pausar la campaña de Google Ads 24377406933 | ✅ PAUSED. La antigua 24286732474 también está PAUSED. |

## Resumen de lo que falta de verdad
1. Quitar el encabezado "pegar en Shopify…" de la política de envíos.
2. Llevar el arreglo de títulos ES al tema en vivo 209155588433.
3. Rediseñar en v2 los 7 flows antiguos y quitar el solape entre XCwF2L y RxWXvG. Corregir "2–3 semanas" → "2–4 semanas", "4.600 referencias" y el nombre de Reposición (45 → 80 días).
4. Navegación abandonada (WG9Nr7) sin activar. Reseñas S6M6wD en borrador, pendiente de revisar con Judge.me.
5. Blog: artículos de cabello, parches para granitos, ceramidas, protector en invierno y regalos de Navidad.
6. Redes: Pinterest después del 03-11, IG/TikTok después del 15-11, y cambiar a JPG los PNG de TikTok del 02-11 y del 04-11.
