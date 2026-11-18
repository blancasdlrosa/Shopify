# Auditoría web mireaskin.es · 22-10-2026 (solo lectura, sin cambios)

## Datos de partida
- Tráfico 30 días (Shopify): ~600 sesiones; Google orgánico 19, Bing 6, Instagram 42, directo 538 (mucho EEUU/bots). 8 pedidos desde el 21-09.
- Google Merchant (feed es/EUR aprobado en ES): 866 impresiones en 2 semanas, 0 clics.
- Catálogo activo: >10.000 productos (7.780 "Envío: Corea", 2.641 "Envío: España").
- Muestra de 40 productos activos recientes: 38/40 sin título SEO ni meta descripción propios; 40/40 sin texto alternativo (alt) en la foto principal.
- Productos de Corea: títulos en inglés ("3CE Blur Water Tint 4.6g #SEPIA", "12GRABS Vegan Comforting Sun 50ml"…), y cada tono como producto aparte.
- Ficha de producto (Medicube Collagen Jelly): descripción en español, Judge.me visible pero 0 reseñas ("Aún sin opiniones"), confianza OK (Pago seguro, 14 días devolución, envío gratis desde 69 €), aviso de plazo "Directo desde Corea · 2–4 semanas".
- La Política de envíos dice "3-7 días laborables en España y UE" → contradice el plazo de 2–4 semanas de la ficha.
- Lighthouse (PageSpeed de Google) NO pudo cargar ni la home ni una ficha (ERRORED_DOCUMENT_REQUEST), aunque la web responde 200 a un navegador normal. El rastreador externo marcó robots "none" en ambas páginas; el tema NO tiene ninguna meta robots, así que hay que confirmarlo en Search Console (Inspeccionar URL).
- Search Console: no accesible desde aquí (HYPD sin conexión GSC; Windsor bloqueado por plan gratis con 4 cuentas). Sin datos de consultas ni sitemap.
- Títulos de colecciones filtradas generan texto en inglés ("– tagged …", "– Page 2") en snippets/meta-tags.liquid.

## Top 10 acciones (impacto / esfuerzo)

| # | Qué | Por qué (dato) | Quién | Riesgo |
|---|---|---|---|---|
| 1 | Confirmar que Google puede rastrear e indexar (Search Console → Inspeccionar URL de home y una ficha; revisar Configuración > Preferencias que la tienda no tenga contraseña y que ninguna app/bot-protection bloquee a Google). Reconectar GSC en HYPD para poder vigilarlo. | Lighthouse de Google no puede cargar la web y un rastreador marca robots "none"; solo 19 visitas de Google en 30 días. Si Google no entra, nada de SEO funciona. | Blanca (admin + GSC) / yo verifico después | Ninguno |
| 2 | Coherencia de plazos de entrega: Política de envíos dice 3-7 días; fichas de Corea dicen 2–4 semanas. Ajustar la política (España/Collective 3-7 días, Corea 2-4 semanas). | Contradicción = desconfianza y riesgo legal/Merchant (Google penaliza datos de envío inexactos). | Yo (shopPolicyUpdate) con OK de Blanca | Bajo |
| 3 | Conseguir las primeras reseñas: activar en Judge.me el email de petición de reseña tras la entrega y reseñas con foto; pedir reseña a los 8 clientes. | 0 reseñas en todas las fichas; las estrellas aumentan conversión y CTR en Google. | Blanca (app Judge.me) / yo redacto emails | Bajo |
| 4 | Títulos y meta descripción SEO en español para los ~300 productos con más stock/margen (plantilla: "Marca + producto + beneficio + tamaño | Mirea Skin"). | 95 % sin SEO propio; Google enseña títulos en inglés en España. | Yo vía API (por lotes, reversible) | Bajo |
| 5 | Traducir títulos de productos de Corea al español manteniendo marca y tamaño (empezar por los 500 más vistos/con stock). Mejora feed Merchant y buscador interno. | 7.780 productos con título en inglés; feed es con títulos en inglés. | Yo vía API (guardar original en metacampo) | Medio (Korealy podría sobrescribir al sincronizar) |
| 6 | Texto alternativo (alt) en fotos principales: "Marca Producto tamaño". | 40/40 sin alt → pierde Google Imágenes y accesibilidad. | Yo vía API | Muy bajo |
| 7 | Agrupar tonos en un solo producto con variantes (3CE, rom&nd, Clio…) u ocultar duplicados del buscador/colecciones. | Cada tono es un producto: colecciones llenas de repetidos, contenido duplicado para Google. | Yo (fase 1: ocultar duplicados vía etiqueta/colección); fusionar requiere Korealy | Medio |
| 8 | Quitar textos en inglés del título de colecciones filtradas ("tagged", "Page") en meta-tags.liquid → "– filtrado: …", "– Página 2". | Snippets mixtos ES/EN. | Yo en tema borrador → Blanca publica | Muy bajo |
| 9 | Reducir catálogo visible para Google: noindex o sacar del sitemap productos sin stock y duplicados; priorizar colecciones/blog en enlazado interno. | >10.000 fichas, muchas agotadas o repetidas, diluyen el rastreo de una web nueva. | Yo (tema borrador) + Blanca publica | Medio (no tocar sin revisar) |
| 10 | Medición: conectar GA4 + Search Console (HYPD o Windsor con 1 cuenta) y revisar semanalmente consultas, CTR y conversiones; seguir campaña Google Ads 3 €/día. | Hoy no hay datos de búsqueda orgánica para decidir. | Blanca conecta / yo informo | Ninguno |

Nota: la web carga bien para clientes (200, título y descripción de home correctos en español, señales de confianza presentes). El freno principal es visibilidad (indexación, reseñas, títulos en inglés), no el diseño.

## Corrección 22-10 (comprobado después)
- Punto 1 era una FALSA ALARMA: el `<meta name="robots" content="none">` que vio el rastreador está dentro del iframe de inicio de sesión de Shop Pay ("Iniciar sesión en Shop"), no en la cabecera de la tienda. El tema (layout/theme.liquid y snippets/meta-tags.liquid) no pone ningún robots, y robots.txt permite todo lo público y declara el sitemap. Google SÍ puede indexar la web.
