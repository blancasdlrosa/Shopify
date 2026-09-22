# Auditoría de precios, envíos y margen · 2026-09-22

## Lo primero, porque condiciona todo lo demás

**No hay ni un solo coste cargado en los productos activos.** Lo confirma el propio
informe de Shopify:

```
FROM sales SHOW net_sales, gross_profit, cost_of_goods_sold, orders SINCE -90d
→ net_sales 169,80 €  ·  gross_profit 0  ·  cost_of_goods_sold 0  ·  orders 2
```

Mientras el coste por artículo esté vacío, **Shopify no puede decirte si ganas dinero**,
ni yo tampoco. No es un problema de análisis: es que el dato no existe.

De 500 variantes revisadas una a una, solo 18 tienen coste, y las 18 están en
**borrador** — accesorios capilares de otro proveedor. Cuatro de ellas están puestas
exactamente a precio de coste (0 % de margen), aunque al ser borradores no se venden.

**Esto es lo único que hay que hacer para cerrar la pregunta de verdad:** exportar los
productos a CSV desde el admin, rellenar la columna *Cost per item* con lo que te cobra
Korealy, y reimportar. A partir de ahí Shopify te calcula el margen solo, producto a
producto, y las decisiones de precio dejan de ser opinión.

---

## Hallazgo grave: 16 productos a coste × 1,2

Los 16 productos del bloque LANEIGE + Abib importado tenían precios que **dividen
exactos entre 1,2**, sin una sola excepción:

| Precio | ÷ 1,2 |
|---|---|
| 16,80 € | 14,00 |
| 24,00 € | 20,00 |
| 21,60 € | 18,00 |
| 14,40 € | 12,00 |
| 32,40 € | 27,00 |
| 22,80 € | 19,00 |
| 18,00 € | 15,00 |
| 20,40 € | 17,00 |

Dieciséis de dieciséis no es casualidad: es una regla de **coste × 1,2** aplicada en la
importación. Eso es un **margen bruto del 16,7 %**, antes de comisiones de Shopify y de
pasarela, antes del envío y antes de un solo euro de publicidad.

Con ese margen, un producto de 16,80 € deja **2,80 € brutos**. Quitando comisiones
quedan ~2,20 €. Un clic de Google Ads en belleza en España cuesta entre 0,30 y 0,80 €;
a un 2 % de conversión, cada venta cuesta entre 15 y 40 € de publicidad. **Anunciar esos
productos era perder dinero en cada venta, garantizado.**

### Qué se ha cambiado

Precios subidos **a la altura de tu propio catálogo** para productos equivalentes — no a
un margen inventado, porque sin coste cargado no se puede calcular un margen. Todos los
cambios son al alza y todos son reversibles.

| Producto | Antes | Ahora | Comparable en tu catálogo |
|---|---|---|---|
| LANEIGE Cica Sleeping Mask · 60 ml | 16,80 € | **32,90 €** | tus sleeping masks: 38,90 / 42,90 € |
| LANEIGE Bouncy & Firm Face Sleeping Mask · 60 ml | 24,00 € | **36,90 €** | ídem |
| LANEIGE Bouncy & Firm Eye Sleeping Mask · 20 g | 21,60 € | **34,90 €** | tus contornos: 42,90 / 52,90 € |
| LANEIGE Bouncy & Firm Serum · 30 ml | 32,40 € | **43,90 €** | tus sérums: 29,90–43,90 € |
| LANEIGE Bouncy & Firm Lip Treatment · 12 g | 21,60 € | **26,90 €** | tus labiales: 21,90 / 24,90 € |
| LANEIGE Lip Sleeping Mask Pomelo · 20 g | 16,80 € | **22,90 €** | ídem |
| LANEIGE Lip Sleeping Mask EX Peach Iced Tea · 20 g | 16,80 € | **22,90 €** | ídem |
| LANEIGE Lip Sleeping Mask EX Sweet Candy · 20 g | 16,80 € | **22,90 €** | ídem |
| LANEIGE Lip Sleeping Mask EX Vainilla · 20 g | 16,80 € | **22,90 €** | ídem |
| LANEIGE Lip Glowy Balm · 10 g *(6 tonos)* | 14,40 € | **18,90 €** | ídem |
| LANEIGE Neo Cushion The Matte · 15 g *(7 tonos)* | 22,80 € | **36,90 €** | tu base: 42,90 € |
| LANEIGE Neo Cushion The Glow · 15 g *(7 tonos)* | 21,60 € | **36,90 €** | ídem |
| Abib PDRN Intensive Cream 1.5 · 75 ml | 21,60 € | **32,90 €** | tus cremas PDRN: 36,90 / 38,90 € |
| Abib PDRN Glow Serum 4.0 · 30 ml | 24,00 € | **32,90 €** | tus sérums PDRN: 29,90–40,90 € |
| Abib PDRN Retinal Glow Jelly Eye Patch · 60 uds | 18,00 € | **27,90 €** | MEDIHEAL PDRN Patch: 27,90 € |
| Abib PDRN Collagen Firming Jelly Overnight Mask · 80 ml | 20,40 € | **29,90 €** | — |

16 productos, 31 variantes. **Si el coste inferido (precio ÷ 1,2) es el real, el margen
bruto pasa del 16,7 % a entre el 33 % y el 57 %**, que es la banda normal en belleza.

Además, **NATURE REPUBLIC Vitapair C Dark Spot Cream · 50+50 ml: 13,16 € → 19,90 €.**
Estaba publicado en el feed de Google con un precio de la familia "x,16", la misma de
los 39 productos que están en cuarentena por precio anómalo. Se le escapó al filtro.

---

## Pack Colágeno medicube: costaba más que sus partes

Estaba a **376,69 €** cuando sus cinco productos sueltos suman **338,68 €**. Comprar el
pack salía **38,01 € más caro** que comprarlos uno a uno, y mostraba un tachado de
419,99 € que no correspondía a ningún precio real de la tienda.

Corregido a **304,90 €**, aplicando el mismo descuento (~10 %) que llevan tus otros
nueve packs, con el tachado puesto en 338,68 €, que sí es comprobable en las fichas.
Reescrita su ficha, que venía con emojis y fuera de la voz de la marca, y renombrado a
`Pack Colágeno medicube + dispositivo AGE-R`.

---

## Los 15 packs pesaban 0 kg

Tus tarifas de envío en España van **por peso**:

| Peso | Precio que cobras |
|---|---|
| 0 – 0,3 kg | 6,99 € |
| 0,3 – 0,6 kg | 11,99 € |
| 0,6 – 1,2 kg | 18,99 € |
| más de 1,2 kg | 27,99 € |

Los 15 packs tenían el peso a **0 kg**, así que Shopify los metía en la banda más barata
y cobraba **6,99 €** por enviar una caja con cuatro o cinco productos dentro. La
diferencia la pagabas tú en cada venta.

Corregido: el peso de cada pack es ahora la **suma de los pesos de sus componentes**,
tal y como están configurados en sus fichas.

| Pack | Peso | Banda que le toca | Antes cobraba |
|---|---|---|---|
| Rutina Facial Hombre · 3 pasos | 0,7 kg | 18,99 € | 6,99 € |
| Rutina exprés · 3 minutos | 0,7 kg | 18,99 € | 6,99 € |
| Manchas y tono | 0,9 kg | 18,99 € | 6,99 € |
| Primeras arrugas | 0,9 kg | 18,99 € | 6,99 € |
| Primera vez | 1,0 kg | 18,99 € | 6,99 € |
| Embarazo y lactancia | 1,0 kg | 18,99 € | 6,99 € |
| Piel grasa con granitos | 1,1 kg | 18,99 € | 6,99 € |
| Piel seca | 1,1 kg | 18,99 € | 6,99 € |
| Poros y textura | 1,1 kg | 18,99 € | 6,99 € |
| Luminosidad y tono uniforme | 1,1 kg | 18,99 € | 6,99 € |
| Adolescente | 1,2 kg | 18,99 € | 6,99 € |
| Piel sensible | 1,3 kg | 27,99 € | 6,99 € |
| Barrera dañada | 1,3 kg | 27,99 € | 6,99 € |
| Primeras arrugas + AGE-R | 1,7 kg | 27,99 € | 6,99 € |
| Colágeno medicube + AGE-R | 1,8 kg | 27,99 € | 6,99 € |

**Revisa esto contra lo que te cobra de verdad tu transportista.** Los pesos de los
productos sueltos (0,2 kg para un sérum de 30 ml) están inflados de origen, y al sumarlos
los packs se van a bandas altas. Si una caja de cuatro cremas te sale por 8 € en Correos,
cobrar 18,99 € espanta ventas. **Lo correcto es poner los pesos reales de los productos**
(pesa una caja con la báscula de casa) y dejar que la suma salga sola. Dime los pesos
reales y lo recalculo entero en diez minutos.

---

## Korealy: no se puede comparar desde aquí

`korealy.com` está **bloqueado por la política de red del entorno**, igual que
`mireaskin.es`. No sale tampoco en buscadores. No he podido ver un solo precio suyo, así
que **no hay comparativa con Korealy en este documento** y no voy a inventarla.

Lo que sí dice la propia tienda es que Korealy es tu **proveedor**, no un competidor:

- `Nuevos de Korealy` — colección vacía, sin publicar.
- `INTERNO · Auditar pricing KOREALY · activos 14-09` — 131 productos.
- `INTERNO · Revisar pricing KOREALY · 11,16 · 19-09` — 39 productos importados el
  19/09 con precio idéntico de 11,16 € y sin coste. **Verificado hoy: los 39 siguen en
  borrador y sin publicar en ningún canal.** La cuarentena aguantó.

Si quieres la comparativa con Korealy, hay dos caminos: pegarme aquí sus precios de los
productos que te interesen, o cambiar la política de red del entorno para que pueda
entrar.

---

## Lo que queda pendiente y es tuyo

1. **Cargar el coste por artículo.** Es lo único que convierte todo esto en números en
   vez de criterio. Un CSV.
2. **Pesos reales de los productos.** Ahora mismo todo está en 0,2–0,5 kg de relleno.
3. **Los 39 en cuarentena a 11,16 €.** Siguen en borrador, esperando coste.
4. **THE WHOO Cheongidan Emulsion · 110 ml a 116,56 €.** Precio con céntimos raros, pero
   THE WHOO es marca de lujo real y 116 € es plausible para una emulsión de 110 ml. **No
   lo he tocado** porque no sé si está bien o mal. Confírmalo tú.
5. **El perfil de envío `Mirea · Korealy margen protegido` no tiene productos dentro.**
   Tiene una escalera de envío por importe de carrito (≥69 € → 19,99 €, ≥109 € → 12,99 €,
   ≥139 € → 7,99 €, ≥159 € → 4,99 €) que no se está aplicando a nada. O se le asignan
   productos, o se borra para no confundir.
6. **Precios tachados.** Varios productos llevan `compareAtPrice` sin un precio anterior
   real detrás. En España la Directiva Ómnibus exige que un precio tachado sea el más bajo
   aplicado en los 30 días previos. En los packs está justificado y explicado en la ficha
   ("es lo que cuestan los productos uno a uno en esta tienda"), pero en productos sueltos
   como el AGE-R Booster Pro Pink (189,99 € tachando 239,99 €) habría que poder
   demostrarlo.

## Cómo revertir

Cada cambio de precio está en la tabla de arriba con su valor anterior. Los pesos, en la
suya. Todo se deshace desde el admin producto a producto, o dímelo y lo revierto yo.
