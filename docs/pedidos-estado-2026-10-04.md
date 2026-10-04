# Estado de los pedidos · 04-10-2026

## Corrección de lo que dije el 03-10

Dije que Korealy mentía al afirmar «we sent you the tracking information by email
earlier», porque no había tal correo. **Me equivoqué, y el error era mío.**

Korealy lo aclaró el 03-10 a las 23:26: *«We send all tracking information to
my.mireaskin@gmail.com»*. Yo busqué en `blancasdlr@gmail.com`, que es la cuenta
conectada aquí. El correo existía: estaba en la cuenta de negocio, que desde esta
sesión no puedo ver.

Lo que sí era cierto: el tracking **no entra solo en Shopify**. Korealy lo dice
explícitamente: *«we do not automatically enter it into your store»*.

## Los cinco pedidos

| Pedido | Destino | Cobrado | Estado en Korealy | Estado en Shopify |
|---|---|---|---|---|
| #1004 | Barcelona | 86,33 € | Enviado · Korea Post → Correos · `LI086596199KR` | **FULFILLED**, cliente avisado |
| #1005 | Portugal | 61,91 € | — | Reembolsado, cerrado |
| #1006 | Málaga | 43,17 € | `SMP-9062460` · preparando envío | Sin enviar |
| #1007 | Copenhague | 84,80 € | **EN ESPERA: falta el teléfono** | Sin enviar |
| #1008 | Bélgica | 34,19 € | Preparando envío | Sin enviar |

### #1004 · cerrado correctamente

Cumplimiento creado el 04-10 a las 11:59:42 con los **3 artículos** del pedido, lo
que cumple la condición de 3/3 SKUs y cantidades:

- AESTURA REGEDERM 365 Intensive Lifting Capsule Cream 50 ml · `9126388712` × 1
- AESTURA REGEDERM 365 Retinoid Eye Serum 15 ml · `10739524582` × 1
- AESTURA Atobarrier 365 Capsule Toner 300 ml · `13516780955` × 1

El registro del pedido confirma el correo: *«envió un correo electrónico de
confirmación de envío a Mireia Torremocha Alonso (comprasxshop@gmail.com)»*, a la
misma hora. El pedido quedó archivado automáticamente un segundo después.

Pago a Blanca: **84,22 € el 6 de octubre** (lo dice el propio registro del pedido).

Detalle a vigilar: el transportista es Korea Post pero la URL de seguimiento apunta
al localizador de Correos. Para un envío Corea → España es lo normal, porque Correos
hace la última milla, pero conviene abrir el enlace una vez y confirmar que el número
responde ahí.

### #1007 · el único atascado, y no por stock

Korealy: *«Shipment on hold because the recipient's phone number is missing»*.
En Shopify ese pedido no tiene teléfono: ni en el cliente ni en la dirección.

Se le ha pedido al cliente **dos veces** (02-10 y 03-10) y no ha contestado. Hasta
que llegue ese dato el paquete no sale. Korealy confirma que lo mantiene en espera,
no cancelado.

### #1006 · desbloqueado

Queda contestada la duda que dejé abierta: Korealy tiene el pedido con su referencia
`SMP-9062460` y está **preparando el envío**. El pago de 23,00 $ del 30-09 sí cubría
el artículo que faltaba.

## La causa de fondo del problema de seguimiento

No es un fallo de Shopify ni de la configuración de notificaciones. Es un hueco de
proceso, y tiene dos mitades:

1. **El tracking llega a `my.mireaskin@gmail.com`**, no a la cuenta personal.
2. **Korealy no lo mete en Shopify.** Y Shopify solo envía el correo de seguimiento
   cuando se crea un cumplimiento con número de tracking.

Así que cada pedido necesita un paso a mano: leer el tracking → crear el cumplimiento
en Shopify → Shopify avisa al cliente. Sin ese paso, el cliente no recibe nada,
aunque el paquete esté en camino. Es exactamente lo que pasó con el #1004 durante
nueve días.

### Dos arreglos que valen la pena

**a) Que el tracking sea visible.** En `my.mireaskin@gmail.com`, un reenvío
automático o un filtro hacia `blancasdlr@gmail.com` para lo que venga de
`korealy.co`. Un minuto de trabajo, y evita volver a buscar un correo en la cuenta
equivocada.

**b) El paso de cumplimiento, en cuanto haya número.** Para el #1006 y el #1008 va a
tocar esta misma semana. Con el número y el transportista yo lo hago en una sola
operación y el correo al cliente sale solo.

## Los costes de producto: hay un camino

Korealy se niega por cuarta vez a dar una lista, pero esta vez dio una ruta concreta:
importar los productos a la tienda con **«set nothing»** seleccionado y después
exportar los datos a CSV. De ahí saldrían los costes de los 9.803 variantes sin
coste, que es lo que bloquea la revisión de márgenes.

No lo he hecho: una importación masiva toca el catálogo entero y eso se pregunta
antes.

## HECHO
- Confirmado con el registro del pedido que el #1004 está cumplido con sus 3/3 SKUs
  y que el correo de seguimiento salió al cliente.
- Recuperados de Korealy los estados reales de los cuatro pedidos abiertos.
- Localizada la causa del problema de seguimiento, y corregido mi propio error.

## BLOQUEADO
- #1007: el cliente no da su teléfono. Dos avisos enviados.
- #1006 y #1008: esperando número de seguimiento de Korealy.
- Costes de producto: existe la ruta del CSV, falta decidir si se hace.

## SIGUIENTE
- Reenvío o filtro de `korealy.co` desde la cuenta de negocio a la personal.
- En cuanto haya tracking del #1006 y del #1008, crear el cumplimiento.
