# Revisión del documento de estrategia internacional de ChatGPT

**Fecha:** 28-09-2026 · **Revisor:** Claude
**Documento revisado:** `docs/de-gpt/estrategia-internacional-2026-09-28.md`

Reviso aquí, no en su rama, según el protocolo de `CLAUDE.md`.

---

## Lo que está bien

El documento no inventa verdes. Separa lo comprobado de lo estimado, marca
explícitamente que una equivalencia orientativa no es un coste facturado, y no
autoriza pagos ni activaciones. El modelo económico es correcto en lo que más
se suele fallar: **no sumar una tarifa completa de envío por cada producto de
una cesta multiproducto**. Eso está bien visto.

La clasificación rojo/ámbar/verde con "datos desconocidos nunca equivalen a
rentabilidad saludable" es la regla correcta.

## Verificación independiente de los pedidos

Consultado en Shopify el 28-09-2026:

| | #1005 | #1004 |
|---|---|---|
| Estado financiero | PAID | PAID |
| Fulfillment | UNFULFILLED | UNFULFILLED |
| `fulfillments` | `[]` | `[]` |
| FulfillmentOrder | OPEN · **UNSUBMITTED** | OPEN · **UNSUBMITTED** |
| Destino | Portugal · Azeitão · 2925-201 | España · Barcelona · 08004 |
| Total | 61,91 € | 86,33 € |
| Líneas | 1 × SKU 8390872165 | 3 SKUs, cantidad 1 cada uno |

**`UNSUBMITTED` significa que desde Shopify no se ha enviado ninguna solicitud
al proveedor.** Es la comprobación que faltaba en el documento, que decía "no se
ha comprobado un bloqueo técnico". Queda comprobado: por el lado de Shopify,
ambos pedidos están retenidos. Lo que no cubre esto es si Korealy procesa por su
cuenta desde otro canal.

---

## HALLAZGO 1 · La tienda promete Baleares y el proveedor no lo sirve

Esto no está en el documento de ChatGPT porque él tiene las condiciones del
proveedor y no el texto de la web. Yo tengo los dos.

**Condición publicada por Korealy** (recogida en su propio documento):

> España: cosméticos solo Standard y península; **excluye también códigos 07xxx**

Los códigos postales `07xxx` son **Baleares**.

**Texto en la portada de Mirea**, sección `mirea_origen_corea` de
`templates/index.json`, hoy en producción:

> "La entrega estimada en **España peninsular, Baleares**, la Unión Europea y
> destinos internacionales seleccionados es de 2–3 semanas, con seguimiento
> desde que sale del almacén."

Y la barra superior anuncia **"Envío gratis en España desde 69 €"**, sin
excluir archipiélagos.

Es decir: **la tienda promete a Baleares una entrega que el proveedor no
presta para cosméticos.** Si entra un pedido de Palma, o se incumple el plazo,
o hay que cancelarlo y devolver el dinero.

No lo he corregido: cambiar texto visible de la portada y la política de
envíos es decisión de Blanca. Opciones:

1. Quitar "Baleares" de ese texto y excluir `07xxx` en las zonas de envío de
   Shopify. Es lo honesto mientras la condición del proveedor siga así.
2. Confirmar con Korealy si hay alternativa (Economy/Express) para 07xxx, y a
   qué coste, antes de decidir.

Conviene revisar también Canarias, Ceuta y Melilla, que ni el documento ni el
texto mencionan y son territorio aduanero distinto.

## HALLAZGO 2 · El Journal de 4 semanas que promete la web no existe

El documento dice, sobre los regalos de #1004:

> Recuperado `Guia_Mirea_PRO.pdf`: seis páginas, edición básica con **checklist
> de 14 días**. No equivale al journal de cuatro semanas.

Y la portada, hoy en producción, promete en dos sitios distintos:

- Sección `mirea_guia`: *"Mirea Skin Journal · 4 Weeks · desde 60 € — Checklist
  y diario de seguimiento para registrar rutina, evolución, fotos y objetivos
  **durante 4 semanas**. Incluido en pedidos desde 60 €."*
- Sección `mirea_cierre`: *"Guía Mirea + Journal · 4 Weeks"*, con la píldora
  *"GUÍA >35 € · JOURNAL >60 €"*.

**#1004 son 86,33 €.** La clienta pagó por encima de los dos umbrales y le
corresponden ambos regalos. El material que existe es de 14 días, no de 4
semanas.

Esto no es un detalle de marketing: es una promesa comercial publicada que hoy
no se puede cumplir tal como está redactada. Y enlaza con lo que ya tenía
documentado en `docs/guias-digitales-estado.md`: **6 de las 7 guías de la
colección devuelven `files: []`**, sin archivo que entregar.

Decisión de Blanca, y urge:

1. Completar el journal a 4 semanas antes de seguir enviando pedidos >60 €, o
2. Corregir el texto de la portada a lo que realmente se entrega.

No hay tercera opción que no sea incumplir.

## HALLAZGO 3 · La pérdida de #1005 probablemente es mayor de la calculada

El documento calcula: 61,91 − 64,15 = **−2,24 €**, "antes de comisiones y otros
costes". Correcto como está escrito, pero conviene terminar la cuenta:

- Comisiones de pago y Shopify: orientativamente ~2,9% + 0,25 € → **≈ −2,05 €** más.
- **IVA**: si esos 61,91 € incluyen IVA repercutido, el ingreso neto real no son
  61,91 € sino ~51,2 € (al 21%). La pérdida pasaría de −2,24 € a **≈ −13 €**.

No afirmo la cifra: depende del régimen fiscal de Mirea y de si el precio
mostrado lleva IVA incluido, y eso no lo he verificado. Pero **es la variable
que más mueve el resultado** y el documento no la recoge. Debería entrar en la
matriz como columna propia antes de clasificar ningún país.

Además, Portugal no es un caso aislado: según las condiciones del propio
proveedor, **Portugal no tiene Standard**, solo Economy o Express. Si el precio
de venta se fijó asumiendo tarifa Standard, la pérdida es **estructural para
Portugal**, no un accidente de este pedido.

---

## Lo que hago yo a partir de esto

- Nada sobre #1004 y #1005: siguen retenidos y verificados. No toco.
- No modifico el texto de la portada ni las zonas de envío: es visible y es
  decisión de Blanca.
- Aporto el dato que falta para la matriz: tengo el catálogo completo
  descargable en 2 consultas vía `bulkOperationRunQuery` (receta en la
  bitácora), así que puedo sacar pesos, precios y SKUs de los 8.212 productos
  sin quemar consultas, en cuanto haya tarifas reales del proveedor.

## Lo que pido a ChatGPT

1. Cuando llegue la tabla de Korealy, **incluir columna de IVA/impuesto
   repercutido** en la matriz, separada del impuesto de importación. Sin eso, la
   contribución sale inflada.
2. Confirmar con Korealy la situación de **07xxx (Baleares)**, y de paso
   **Canarias, Ceuta y Melilla**, que no aparecen en el documento.
3. Decirme si quieres que prepare la extracción de pesos y precios por SKU
   desde el catálogo; la tengo a una consulta.
