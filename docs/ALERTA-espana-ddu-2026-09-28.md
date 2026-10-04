# ALERTA · España es DDU y con alto riesgo de devolución en aduana

**Fecha:** 28-09-2026 · **Autor:** Claude
**Fuente:** respuesta de KOREALY el 28-09-2026 03:58 UTC, hilo
*"Mirea Skin — confirm Shopify product weights & Spain shipping rates"*.

---

## Lo que dice el proveedor, literal

> *"Please note that shipments to Spain are available on a **DDU basis only**.
> In addition, **cosmetics shipments to Spain may face customs clearance
> restrictions, which may result in a high risk of the shipment being
> returned**. We kindly recommend taking this into consideration before
> shipping orders to Spain."*

## Por qué esto es lo más grave que hay hoy sobre la mesa

**DDU significa que los impuestos de importación los paga la clienta al
recibir el paquete.** No Mirea: la clienta. Al transportista, en la puerta,
además de lo que ya pagó en la web.

Y el mercado principal de Mirea es España.

### 1 · CORRECCIÓN · la política SÍ lo dice; lo que falla es otra cosa

**Me equivoqué al escribir la primera versión de esta alerta.** Dije que "la
tienda no lo dice en ningún sitio". **Es falso.** La página
`/pages/envios-y-devoluciones`, actualizada el 23-09, ya incluye:

> **Aduanas e importación:** algunos envíos directos desde Corea se tramitan
> bajo condiciones DDU. En esos casos, los impuestos, aranceles o gastos de
> gestión que pueda exigir la aduana o el transportista no están incluidos en
> el precio del producto o del envío y corresponden al destinatario.

Y además ya recoge la exclusión de archipiélagos:

> los cosméticos gestionados por KOREALY solo disponen actualmente de envío
> Standard a **España peninsular**. Para esos productos, **Baleares, Canarias,
> Ceuta y Melilla no están disponibles**.

Esa página está bien hecha. Escribí la alerta sin leerla primero, que es
exactamente el error que me había prohibido a mí mismo esta misma mañana.

**Lo que sí falla, ya con precisión:**

| # | Problema | Dónde |
|---|---|---|
| A | La zona de envío **incluye Baleares** y permite comprar desde allí, cuando la política publicada dice que no está disponible | Shopify · zona *"España (península y Baleares)"* |
| B | La portada promete entrega a **Baleares**, contradiciendo a la propia política | `templates/index.json` · sección Origen Corea |
| C | La política dice **"algunos envíos"**; Korealy confirma que **España es DDU siempre** para sus cosméticos | página de envíos |
| D | No se menciona el **riesgo de devolución en aduana** que el proveedor advierte expresamente | página de envíos |

**A es el más grave de los cuatro**: una clienta de Palma puede completar la
compra hoy mismo de un producto que la política dice que no se le puede enviar.

### 2 · "Alto riesgo de devolución" es una advertencia del propio proveedor

No es una interpretación mía: Korealy recomienda expresamente tenerlo en cuenta
**antes de enviar pedidos a España**. Un paquete devuelto significa: producto
no entregado, reembolso a la clienta, y coste de transporte y posible
destrucción a cargo de Mirea.

### 3 · El pedido #1004 va a Barcelona y está en curso ahora mismo

Korealy confirmó hoy a las 06:46: *"your order will now proceed to
fulfillment"*. Es decir, **#1004 sale hacia Barcelona bajo estas condiciones**:
DDU y riesgo alto de devolución. La clienta pagó 86,33 € el 25-09.

## Contradicción adicional, ya documentada

La política publicada de Korealy excluye los códigos **07xxx (Baleares)** para
cosméticos, y la portada de Mirea promete entrega a Baleares. Detalle en
`docs/revision-estrategia-internacional-gpt.md`.

## Decisiones que corresponden a Blanca, por orden

1. **Informar del DDU en la web antes de que entre otro pedido español.**
   Es lo más urgente y lo más barato. Un aviso claro en la página de envíos y
   en el checkout.
2. **Decidir qué se hace con #1004**, que ya está en curso. Como mínimo,
   avisar a la clienta de que puede recibir un cargo de aduana, antes de que le
   llegue por sorpresa.
3. **Preguntar a Korealy si existe alternativa DDP para España.** Si no la hay,
   el modelo de venta a España con este proveedor tiene un problema de fondo
   que ningún ajuste de precio arregla.
4. **Quitar Baleares de la promesa** mientras el proveedor no lo sirva.

## Lo que NO he hecho

No he tocado el texto de la tienda, ni las tarifas, ni el pedido. Cambiar la
política de envíos publicada es una decisión de negocio y es visible.

## Nota sobre duplicados

**No he escrito a Korealy.** ChatGPT ya envió hoy a las 13:21 una petición
completa que cubre tarifas por país y peso, DDP/DDU, restricciones de
cosméticos, Baleares, devoluciones y costes por SKU. Añadir otro correo sería
duplicar, que es justo lo que Blanca prohibió. Lo que falta es respuesta, no
otra petición.
