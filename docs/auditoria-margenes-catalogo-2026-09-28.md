# Auditoría de márgenes del catálogo completo

**Fecha:** 28-09-2026 · **Autor:** Claude
**Alcance:** los 8.212 productos y 13.096 variantes de la tienda, no una muestra.
**Método:** `bulkOperationRunQuery` + descarga del JSONL + análisis local.
No se ha modificado ningún precio.

---

## Resumen en una frase

El #1005 no es un accidente: **es el modelo de precios funcionando como está
configurado.** El catálogo entero lleva un margen bruto fijo del 19,4%, que no
da para pagar un envío transfronterizo desde Corea.

---

## 1 · El margen es mecánico, no estratégico

De las 13.096 variantes, 2.853 tienen coste unitario registrado. De ellas:

| PVP / coste | Variantes | Margen bruto |
|---|---|---|
| **1,2400 exacto** | **2.827** | **19,4%** |
| 1,0000 | 4 | **0,0%** |
| ~2,8–3,0 | 5 | 64–66% |

**2.827 variantes tienen exactamente el mismo múltiplo.** Eso no es una
decisión de precio producto a producto: es un `× 1,24` aplicado en bloque al
importar. El 99,8% de las variantes con coste tiene menos del 20% de margen
bruto.

Y hay **4 variantes publicadas a precio de coste exacto**: margen cero antes de
comisiones y envío.

## 2 · Qué datos hay y cuáles faltan

Sobre las **12.477 variantes activas**:

| | Cantidad | % |
|---|---|---|
| Con **peso** registrado | 12.475 | **99,98%** |
| Con **coste** registrado | 2.674 | **21,4%** |
| Sin coste | **9.803** | **78,6%** |
| Con precio 0,00 € | 0 | — |

**La buena noticia:** los pesos están. El lado logístico de la matriz se puede
calcular en cuanto lleguen las tarifas de Korealy, sin trabajo adicional.

**La mala:** de **4 de cada 5 productos publicados no sabemos lo que cuestan.**
Para ese 78,6% no se puede calcular margen de ninguna forma — ni con las
tarifas de Korealy en la mano. Es el cuello de botella real del estudio, y no
depende del proveedor: depende de completar los costes en Shopify.

## 3 · Reconstrucción del #1005

| Dato | Valor | Origen |
|---|---|---|
| Total cobrado a la clienta | 61,91 € | Shopify, verificado |
| PVP del IOPE Retinol 50 ml | 58,80 € | Shopify, verificado |
| Envío cobrado (diferencia) | ≈ 3,11 € | derivado |
| Peso | 0,2 kg | Shopify, verificado |
| Coste del producto | ≈ **47,42 €** | **estimado** (58,80 / 1,24 — este SKU no tiene coste registrado) |
| Fulfillment pedido por Korealy | ≈ 64,15 € | comunicado por el proveedor |
| **Envío real implícito** | ≈ **16,73 €** | **estimado** (64,15 − 47,42) |

Si esa estimación es correcta: **cobró 3,11 € por un envío que cuesta ~16,73 €.**
El desfase es de unos **13,6 € por pedido**, y el margen bruto del producto
(11,38 €) no llega a cubrirlo. De ahí la pérdida.

Las dos cifras marcadas como estimadas dependen de que el IOPE siga la regla
del ×1,24. **Solo la factura de Korealy lo confirma.**

## 4 · Punto de equilibrio con las tarifas que cobra hoy

Fórmula: `PVP mínimo = (coste_envío_real − envío_cobrado + 0,25) / (0,194 − 0,029)`

Con el coste de envío estimado en 16,73 € (0,2 kg):

| Zona · tramo | Cobra | PVP mínimo | Variantes activas por debajo |
|---|---|---|---|
| España · tramo 1 | 4,99 € | **72,67 €** | 12.268 · **98%** |
| España · tramo 2 | 7,99 € | 54,48 € | 12.116 · 97% |
| UE · tramo 1 | 8,99 € | 48,42 € | 12.010 · 96% |
| UE · tramo 2 | 14,99 € | 12,06 € | 3.755 · 30% |
| Internacional · tramo 1 | 12,99 € | 24,18 € | 9.820 · 79% |
| Internacional · tramo 2 | 19,99 € | — | 0 · 0% |

Dicho de otra forma: **con el envío del tramo 1, casi todo el catálogo pierde
dinero.** Solo los tramos altos —los que casi nadie elige— cubren el coste.

El precio mediano del catálogo es **15,60 €**. El 47% de las variantes está por
debajo de 15 € y el 23% por debajo de 10 €. Un producto de 15 € con 19,4% de
margen deja **2,91 € brutos**: no paga ni el tramo más barato de envío nacional.

## 5 · Exposición internacional no validada

Shopify Markets tiene activos **tres mercados**: España, Unión Europea (26
países) y **International (32 países)**, incluidos Brasil, Argentina, Perú,
Colombia, Filipinas, Tailandia, Arabia Saudí, Catar y Kuwait.

Para todos ellos hay **tarifa plana** de 12,99 / 19,99 / 28,99 / 39,99 €. Ninguna
de esas tarifas se ha contrastado nunca con el coste real de Korealy a esos
destinos, ni con sus restricciones de cosméticos, ni con aduanas.

**Hoy mismo se puede comprar desde Brasil.** Si el patrón del #1005 se repite
—y no hay motivo para pensar que no—, cada uno de esos pedidos sería una pérdida
mayor, no menor.

## 6 · Dos contradicciones con la política publicada

1. **Baleares.** La zona de envío se llama literalmente
   `"España (península y Baleares)"`, y la portada promete entrega a Baleares.
   Korealy **excluye los códigos 07xxx** para cosméticos. Detalle en
   `docs/revision-estrategia-internacional-gpt.md`.
2. **Envío gratis desde 69 €.** La barra superior lo anuncia, pero entre las
   tarifas configuradas **no aparece ningún método a 0,00 €**. O está
   implementado como descuento automático, o la promesa no está implementada.
   Queda por verificar.

---

## Lo que NO he hecho

No he tocado un solo precio, ni una tarifa, ni un mercado, ni he despublicado
nada. Todo lo anterior es medición.

## Lo que propongo, por orden

1. **Congelar los mercados de riesgo** hasta tener tarifas: desactivar el
   mercado *International* o reducirlo a los destinos que Korealy sirve con
   condiciones conocidas. Es reversible en un clic y corta la exposición.
2. **Completar los costes del 78,6%.** Sin eso no hay estudio posible. Se pide a
   Korealy junto con las tarifas, en la misma petición.
3. **Revisar el múltiplo.** Un 19,4% de margen bruto no sostiene envío
   transfronterizo desde Corea. La referencia del sector para dropshipping
   internacional está en 55–65% bruto. Esto es decisión de Blanca y afecta a
   todo el catálogo: no lo toco.
4. **Umbral de envío gratis por peso, no por importe.** Un umbral de 69 € con
   productos de 0,5 kg pierde dinero; con 0,2 kg puede no perderlo. La variable
   correcta es el peso, y los pesos ya los tenemos.

## Lo que queda bloqueado en Korealy

Tarifa fechada por país, peso y servicio; coste por SKU; DDP/DDU; aranceles;
restricciones cosméticas por destino. Sin eso, la matriz país × producto no se
puede cerrar con datos reales, y no la voy a rellenar con supuestos.
