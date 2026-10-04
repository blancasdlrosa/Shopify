# Pedido #1007 · Dinamarca · 01-10-2026

Entró anoche a las 23:29. **No se ha pagado nada a Korealy todavía, y es a
propósito.**

| | |
|---|---|
| Cliente | Agron Ilazovski · `agron_iljaz@hotmail.com` |
| Destino | Hannemanns Allé, Copenhague 2300, **Dinamarca** |
| Producto | **2 × medicube Deoxyribose Scalp Serum 20 ml** · SKU `medicube2720` |
| Producto | 61,26 € (30,63 € × 2) |
| Envío | 23,54 € |
| **Total cobrado** | **84,80 €** · pagado |
| Impuestos | 0,00 € |
| Peso | 0,40 kg |
| Estado | Sin preparar, sin retención, intacto |
| Coste real | **Desconocido.** Es uno de los 9.803 sin coste registrado |

## Lo primero: confirmar stock antes de pagar

Korealy admitió por escrito el 30-09:

> *"Inventory synchronization is not always real-time... In some cases, we may
> need to inform you that an item is out of stock after we have received your
> order."*

Shopify dice 942 unidades de este sérum. **Ese número no significa nada**: es
uno de los valores de relleno de la importación, y el proveedor ya ha dicho que
su stock no se sincroniza en tiempo real. Con el #1006 cobramos y después
resultó que no había.

Así que el orden es: **confirmar stock → pagar → avisar al cliente.** No al
revés.

Correo enviado el 01-10 a `hello@korealy.co`, asunto *"Order #1007 (Denmark) –
confirm stock BEFORE we pay, please"*. Les pide:

1. Si tienen **2 unidades físicas** de `medicube2720`.
2. El total exacto en USD, producto y envío por separado.
3. Plazo de preparación en días hábiles.
4. Su experiencia con envíos de cosmética **a Dinamarca** en concreto, porque
   el 50 % de devoluciones lo dijeron de España.
5. Si pueden enviar **DDP** a Dinamarca o a cualquier país de la UE.
6. Y otra vez el seguimiento del #1004.

## Las tarifas de envío de ayer SÍ están funcionando

Cobró 23,54 € y las tarifas que pusimos para Dinamarca son 16,99 / 22,99 /
30,99 / 40,99. Parecía que no cuadraba. Comprobado:

- La zona **"UE · sin Standard (PT · DK)"** existe en los dos perfiles de envío
  y contiene DK y PT.
- Con 0,40 kg le toca el tramo **0,3–0,6 kg = 22,99 €**. Correcto.
- Los 0,55 € de diferencia son la **conversión de divisa**: el mercado Unión
  Europea tiene `localCurrencies: true`, así que al cliente se le cobró en
  coronas danesas y Shopify lo reconvierte a euros para el informe. Lo mismo
  explica que el producto figure a 30,63 € y no a un precio terminado en ,95.

**Conclusión: la corrección del 29-09 se está aplicando.** Sin esa corrección
este envío habría cobrado la tarifa vieja.

## Margen estimado, y por qué es una estimación

No hay coste registrado para este producto. Por la regla de precios
(`coste × 1,80`), un precio de venta de 30,63 € implica un coste de alrededor de
**17 € por unidad**, unos 34 € los dos, más el envío de Korealy.

**Eso es una deducción de la fórmula, no un dato.** El número real sale de la
respuesta de Korealy, que es justo lo que les he pedido. Hasta entonces no se
da por bueno.

## Aviso que no se ha dado todavía

Dinamarca está en la UE, pero el envío sale de **Corea en condiciones DDU**: el
IVA de importación y la gestión los paga el cliente al recibir. **No se le ha
avisado**, porque la tienda todavía no avisa de esto en ningún sitio y esa
decisión está pendiente.

Para este pedido concreto conviene decírselo antes de que le llegue una factura
sorpresa del transportista. Propuesta de texto preparada; no se envía sin el OK.

## Lo que falta, en orden

1. Respuesta de Korealy confirmando stock. **Bloqueante.**
2. Pago en la app de Korealy. Es una acción financiera y la app no es accesible
   desde aquí: lo hace Blanca, con los números delante.
3. Correo al cliente, uno solo, con información real.

## De paso: el #1005 está reembolsado

El pedido de Portugal (Gerda Nunes, IOPE Retinol Super Bounce Serum, 61,91 €)
figura como **REFUNDED** y su fulfillment order **CLOSED**. No lo hice yo y no
estaba anotado. Queda registrado aquí para que no se busque en vano.
