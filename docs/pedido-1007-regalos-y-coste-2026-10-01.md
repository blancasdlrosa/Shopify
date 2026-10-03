# Pedido #1007 · verificación de los regalos digitales y primer coste real de Korealy

Fecha: 01-10-2026. Comprobado con datos reales de Klaviyo y de la Admin API, no de memoria.

## 1. ¿Recibió la clienta los correos de regalo? Sí, los dos

Perfil en Klaviyo: `01M3TADVGBHJS8CZBTXS99BGKS` · `agron_iljaz@hotmail.com` · Dinamarca.
Pedido recibido por Klaviyo a las 23:29:40 UTC (84,80 €, 1 artículo × 2 unidades).

| Hora (UTC) | Flow | Mensaje | Asunto | Métrica |
|---|---|---|---|---|
| 30-09 23:51:16 | `VtbF3p` Journal pedido ≥60 | `WCAvVf` | Tu Journal Mirea de 4 semanas ✦ | Received Email |
| 30-09 23:52:50 | `SMvtLa` Guía PRO Premium · primer pedido >35 | `TWUiE2` | Tu Guía Mirea PRO Premium está desbloqueada ✦ | Received Email |

Ambos salieron por `send.mireaskin.es` hacia Hotmail/Outlook, remitente visible
`Mirea Skin <my.mireaskin@gmail.com>`. Retraso de 21 y 23 minutos sobre el pedido:
es el tiempo normal del flow, no un fallo.

**Todavía no hay evento `Opened Email` ni `Clicked Email`.** Entregado a su buzón
no es lo mismo que leído. No se puede afirmar que lo haya abierto.

## 2. Lo que esos correos entregan de verdad: un enlace, no un PDF adjunto

Verificado leyendo las dos plantillas (`VKkcav` y `SqHGhE`):

- Guía PRO → botón «Abrir mi Guía PRO Premium» → `https://mireaskin.es/pages/la-guia`
- Journal → botón «Abrir mi Journal» → `https://mireaskin.es/pages/mirea-checklist-4-semanas`

Las dos páginas existen y están publicadas (`Page/171786830161` y `Page/172063424849`),
así que los enlaces funcionan y la clienta sí tiene acceso al contenido.

Pero **ninguno de los dos correos lleva un PDF adjunto ni enlaza a los PDFs de las
guías**. Esto ya se documentó el 28-09 en `regalos-digitales-entrega-real-2026-09-28.md`
y sigue igual. Los PDFs descargados del Drive son otra cosa: son los 14 productos
«Guía Mirea» que están pendientes de adjuntar y poner en venta.

## 3. Primer coste real de proveedor que conseguimos

De la factura de Korealy del pedido #1007 (pagada por Blanca):

| Concepto | USD | EUR (1 EUR = 1,0911 USD) |
|---|---|---|
| medicube Deoxyribose Scalp Serum 20ml × 2, precio unitario | 25,00 | **22,91 / unidad** |
| Subtotal producto | 50,00 | 45,83 |
| Envío a Dinamarca (Economy) | 21,00 | 19,25 |
| **Total pagado a Korealy** | **71,00** | **65,07** |

Guardado en Shopify como coste por artículo del SKU `medicube2720`
(`InventoryItem/57077223326033`, `unitCost` = 22,91 EUR). Es el primer coste
verificado de los 9.803 variantes sin coste.

Nota: 22,91 € es **solo el producto**. El flete (9,62 €/unidad en este pedido) va
aparte y cambia con cada envío, así que no se ha metido en el coste por artículo
para no falsear informes. El margen real es menor que el que muestre Shopify.

## 4. Qué sale y qué entra en el pedido #1007

| Concepto | EUR |
|---|---|
| Cobrado a la clienta (61,26 producto + 23,54 envío, 0,00 impuestos) | +84,81 |
| Comisión Shopify Payments (2,1 % + 2,24 DKK, tarjeta EEA) | −2,08 |
| Comisión de cambio de divisa (2 %) | −1,66 |
| Pagado a Korealy (producto + flete) | −65,07 |
| **Diferencia** | **+16,00** |

El envío se cubre: cobró 23,54 € y pagó 19,25 €.

**Dos riesgos sobre esos 16,00 €, y no son teóricos:**

1. **IVA.** El pedido se cobró con 0,00 € de impuestos. Si hay que declarar IVA por
   esta venta B2C a Dinamarca (25 % danés vía OSS sobre 84,80 € serían 16,96 €),
   los 16,00 € desaparecen y el pedido queda en pérdida. Falta la respuesta de la
   gestoría: sigue BLOQUEADO y es la decisión más caras de las pendientes.
2. **Aduanas.** Envío DDU desde Corea: si la clienta rechaza los cargos, se pierde
   producto y flete.

## 5. El problema que destapa este coste: el precio de venta

`medicube2720` se vende a **30,00 €** en España, con IVA incluido (`taxesIncluded: true`).

| Cálculo para España | EUR |
|---|---|
| Precio de venta (IVA incl.) | 30,00 |
| Base sin IVA (21 %) | 24,79 |
| Coste de producto real | −22,91 |
| **Margen antes de flete y comisiones** | **+1,88** |

Con el flete (≈9,62 €/unidad en este envío) y la comisión de pago, **este producto
se vende a pérdida en España**. La regla de precio ×1,80 sobre coste daba ≈41,24 €,
no 30,00 €: el coste que se asumió (~17 €) era más bajo que el real.

No se ha tocado ningún precio. Lo que haría falta:

- Conseguir de Korealy la **lista de costes completa** (sigue BLOQUEADO, pedida).
  Con un solo coste no se puede recalcular el catálogo.
- Revisar este producto concreto y los de su rango antes de que se venda más veces.
  Subir precio es un cambio que Blanca tiene que aprobar y que requiere presentar
  los números antes, así que queda propuesto, no hecho.

## HECHO
- Confirmado con eventos de Klaviyo que los dos correos de regalo salieron al pedido #1007.
- Leídas las dos plantillas y comprobado que las páginas de destino están publicadas.
- Enviada a Blanca copia real de los dos correos (preview de Klaviyo a `blancasdlr@gmail.com`).
- Registrado el coste real 22,91 €/unidad de `medicube2720` en Shopify.
- Calculada la cuenta real del pedido #1007 con comisiones leídas de la API.

## EN PROCESO
- Adjuntar los 11 PDFs a los productos «Guía Mirea» y ponerlos en venta.

## BLOQUEADO
- Lista de costes completa de Korealy (sin ella no se puede revisar el catálogo).
- Confirmación de stock del sérum para el #1007: pagado antes de que Korealy contestara.
- IVA/OSS de las ventas a la UE: pendiente de la gestoría.

## SIGUIENTE
- Que ninguno de los dos correos de regalo lleve los PDFs es una decisión a tomar:
  o se enlazan los PDFs desde esas páginas, o se deja el contenido en web. Hoy la
  clienta recibe contenido real, pero no lo que Blanca cree que recibe.
