# La cuenta real de los 5 primeros pedidos

Fecha: 04-10-2026. Primera cuenta de la tienda hecha con datos verificados, no estimados.

## De dónde sale cada número

- **Cobrado e ingresado**: `netPaymentSet` de cada pedido en la Admin API, que ya
  descuenta los reembolsos.
- **Comisión de Shopify**: el campo `fees` de la transacción de venta. Son reales y
  distintas en cada pedido porque el método de pago cambia: tarjeta nacional, tarjeta
  EEE, Klarna, Bancontact.
- **Pagado a Korealy**: los recibos de PayPal del correo de Blanca. Son los cinco
  pagos que existen, no una estimación.
- **Cambio**: 1 EUR = 1,0911 USD, el tipo que figura en su propio recibo de PayPal.

## Los pagos a Korealy que hay, todos

| Fecha | USD | A qué pedido |
|---|---|---|
| 26-09 | 55,00 | #1004 |
| 27-09 | 25,00 | #1004 · factura `KOREALY-260927-#1004`, el artículo que faltaba |
| 30-09 | 23,00 | #1006 · ref. `SMP-9062460` |
| 01-10 | 71,00 | #1007 |
| 02-10 | 28,00 | #1008 |
| **Total** | **202,00** | |

Del #1005 **no hay ningún pago**. Korealy pedía 70,00 $ y Blanca no pagó: reembolsó a
la clienta en lugar de surtir un pedido que salía a pérdida. Fue la decisión correcta
y se ve en esta cuenta.

Una inferencia, marcada como tal: los 55,00 $ del 26-09 no llevan número de pedido en
el recibo. Se asignan al #1004 porque encajan en el hueco exacto — pedido del 25-09,
pago al día siguiente, y el 27-09 la factura del artículo que faltaba con el asunto
«Order #1004 missing item after KOREALY payment». Si quieres el dato exacto, está en
el detalle de esa transacción en PayPal.

## La cuenta

| Pedido | Recibido | Comisión | A Korealy | Queda |
|---|---|---|---|---|
| #1004 · Barcelona | 86,33 € | −2,11 € | −73,32 € (80 $) | **+10,90 €** |
| #1005 · Portugal | 0,00 € | −1,60 € | 0,00 € | **−1,60 €** |
| #1006 · Málaga | 23,97 € | −2,50 € | −21,08 € (23 $) | **+0,39 €** |
| #1007 · Copenhague | 84,81 € | −3,74 € | −65,07 € (71 $) | **+16,00 €** |
| #1008 · Bélgica | 34,19 € | −1,07 € | −25,66 € (28 $) | **+7,46 €** |
| | | | | |
| **Total** | **229,30 €** | **−11,02 €** | **−185,13 €** | **+33,15 €** |

Facturado antes de reembolsos: 310,41 €. Entró de verdad: 229,30 €.
**Queda: 33,15 €.** Un 14,5 % de lo recibido.

## Lo que hay que mirar de esto

**1. El #1006 ganó 39 céntimos.** Cuarenta y tres euros de pedido, un reembolso
parcial por una rotura de stock del proveedor, y el resultado es cero. La comisión de
Klarna (2,50 €) se cobra sobre el total **antes** del reembolso, así que un reembolso
parcial se come el margen entero.

**2. El #1005 costó 1,60 €**, la comisión de un pedido que se reembolsó completo.
Shopify no suele devolver la comisión de proceso en un reembolso. Conviene confirmarlo
en el detalle del pago, pero da lo mismo para la conclusión: no pagar a Korealy evitó
una pérdida de unos 64 € en ese pedido.

**3. Ninguno de los 5 pedidos lleva IVA.** `totalTax` es 0,00 en todos. Si hay que
declarar IVA de destino en estas ventas B2C a la UE:

| Pedido | IVA destino | Importe |
|---|---|---|
| #1004 | España 21 % | 14,98 € |
| #1006 | España 21 % | 4,16 € |
| #1007 | Dinamarca 25 % | 16,96 € |
| #1008 | Bélgica 21 % | 5,93 € |
| **Total** | | **42,04 €** |

**42,04 € contra 33,15 € ganados. El resultado sería −8,89 €.**

No afirmo que se deba: depende del registro de IVA, del umbral y de si está en OSS, y
eso lo tiene que decir la gestoría. Pero es la cifra que convierte un mes con
beneficio en un mes con pérdida, y es la pregunta más caras que hay abierta.

**4. Los 33,15 € no son beneficio.** No descuentan el tiempo de Blanca, la cuota de
Shopify, las apps, el dominio, ni el riesgo de que un envío DDU sea rechazado en
aduana. Son lo que queda entre el cobro y el proveedor, nada más.

## Costes de producto: lo que se sabe de verdad

| SKU | Coste | Calidad del dato |
|---|---|---|
| `medicube2720` | 22,91 €/unidad (25,00 $) | **Limpio.** Producto solo, el flete iba aparte en la factura |
| #1004 (3 × AESTURA) | 73,32 € el pedido | Incluye flete, no se puede repartir por artículo |
| #1006 (WHAMISA SPF) | 21,08 € el pedido | Incluye flete |
| #1008 (Anua máscara ×10) | 25,66 € el pedido | Incluye flete |

Solo hay **un** coste de producto limpio, de 9.803 variantes. Los otros tres son
totales de pedido con el flete dentro y no sirven para fijar precio. No los reparto
por artículo porque sería inventarme el flete.

## HECHO
- Localizados los 5 pagos a Korealy que existen y asignados a sus pedidos.
- Comisiones reales leídas de la API, una a una.
- Primera cuenta real de la tienda, con la exposición de IVA calculada aparte.

## BLOQUEADO
- El IVA. Es la cifra que decide si estos cinco pedidos dan beneficio o pérdida.
- La lista de costes de Korealy. La ruta que dieron (importar con «set nothing» y
  exportar CSV) se hace **dentro de su app**, que no es accesible desde aquí.

## SIGUIENTE
- Llevar esta tabla a la gestoría. Es la pregunta concreta: con estos cuatro países y
  estos importes, ¿hay que declarar IVA de destino y desde cuándo?
- El #1006 enseña algo aplicable ya: un reembolso parcial deja el pedido a cero. Si el
  proveedor rompe stock, conviene reembolsar el pedido completo antes que medio.
