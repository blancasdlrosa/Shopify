# Perfil del cliente · estado y qué se ha añadido

Revisado el 2026-09-22.

## Lo que ya estaba, y está bien

Las cuentas de cliente están en la **versión nueva de Shopify** (`NEW_CUSTOMER_ACCOUNTS`),
opcionales y sin obligar a registrarse para pagar. Esa es la configuración correcta:
obligar a crear cuenta antes de pagar es de los mayores destructores de conversión que
hay.

Y el perfil ya tenía **16 campos** definidos, que es más de lo que tiene la mayoría de
tiendas pequeñas:

Tipo de piel · Necesidades de piel · Sensibilidad · Nivel de rutina · Objetivos ·
Tipo de cabello · Necesidades capilares · Ingredientes a evitar · Rutina actual ·
Journal y objetivos · Productos favoritos · Productos usados · Notas de progreso ·
Fotos de progreso · Consentimiento de fotos · Consentimiento de personalización

Los dos consentimientos separados están bien planteados: fotos y personalización no son
lo mismo y el RGPD pide permisos distintos.

## Los tres que faltaban

| Campo | Para qué |
|---|---|
| **Mirea · Cómo nos conoció** | Atribución en primera persona. Lo que diga la clienta al registrarse vale más que cualquier píxel, sobre todo con el tráfico "directo" que tienes ahora. |
| **Mirea · Influencer que la trajo** | Saber qué colaboración trae clientas que **repiten**, no solo el primer pedido. Es la diferencia entre una influencer cara y una rentable. |
| **Mirea · Fecha de nacimiento** | Flow de cumpleaños en Klaviyo. Es de los correos con mejor tasa de apertura que existen y ahora mismo no lo puedes montar porque no tienes el dato. |

## El problema de verdad: nadie rellena nada

Los 16 campos existen. **Ningún cliente tiene ninguno relleno**, porque no hay ningún
sitio donde puedan rellenarlos.

Hay 6 clientes registrados y 2 pedidos, así que hoy no duele. Pero el día que entren
clientas de verdad, cada una que pase sin perfil es una clienta a la que no se le puede
recomendar nada ni segmentar nunca.

Formas de capturar el dato, de menos a más trabajo:

1. **En el correo de bienvenida de Klaviyo**, un enlace a un formulario. Es lo más rápido
   y no toca el tema.
2. **Un test de "Encuentra tu rutina"** que guarde el resultado en el perfil. La página
   `/pages/encuentra-tu-rutina` ya existe; habría que ver si guarda algo o solo recomienda.
3. **En el propio perfil de cliente.** Requiere tocar el tema y ahora mismo no puedo:
   el MCP bloquea escribir sobre el tema publicado y la red bloquea ver la tienda.

## Segmentos creados

Los campos no sirven de nada si no se pueden filtrar. Antes había 6 segmentos y todos
eran genéricos de Shopify — ninguno usaba los campos Mirea. Añadidos:

| Segmento | Filtro |
|---|---|
| Mirea · Traídas por influencer | `metafields.mirea.referring_influencer IS NOT NULL` |
| Mirea · Piel seca | `metafields.mirea.skin_type = 'Seca'` |
| Mirea · Piel grasa | `metafields.mirea.skin_type = 'Grasa'` |
| Mirea · Piel sensible | `metafields.mirea.skin_type = 'Sensible'` |
| Mirea · Permiso de personalización | `metafields.mirea.personalization_consent = true` |
| Mirea · Compró pero no tiene perfil | `number_of_orders >= 1 AND metafields.mirea.skin_type IS NULL` |

El último es el accionable desde el minuto uno: son las clientas a las que hay que
escribir para que completen su perfil.

**Ojo con el vocabulario.** Los segmentos filtran por los textos `Seca`, `Grasa`,
`Sensible`, que son los mismos que usan las etiquetas de producto (`Piel: Seca`). Si el
formulario que acabe capturando el dato guarda "piel seca" o "SECA", el segmento no
encuentra a nadie. Hay que respetar esas palabras exactas.
