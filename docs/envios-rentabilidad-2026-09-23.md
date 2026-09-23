# ¿Sale rentable el envío a 3,99 €? · 23-09-2026

**Respuesta corta: no lo puedo saber todavía, y el motivo no es el precio.** Es que la
estructura de envíos de la tienda está rota de tres maneras distintas, y una de ellas te
cuesta dinero en cada pedido grande. Antes de decidir si 3,99 € o 6,99 €, hay que
arreglar eso.

Lo que falta para dar un número de beneficio: **la tabla de tarifas de Korealy por
peso.** Sin ella cualquier cálculo es inventado. Lo demás ya lo tengo.

---

## 1. La escalera por peso del perfil general es de mentira

El perfil `Perfil general` (el que se aplica por defecto) tiene cuatro bandas de peso
para España:

| Banda | Peso | Precio |
|---|---|---|
| 1 | 0 – 0,3 kg | **3,99 €** |
| 2 | 0,3 – 0,6 kg | **3,99 €** |
| 3 | 0,6 – 1,2 kg | **3,99 €** |
| 4 | más de 1,2 kg | **3,99 €** |

Las cuatro bandas cobran lo mismo. Alguien montó la estructura y luego puso el mismo
precio en todas. **Da igual que el pedido pese 100 g o 3,7 kg: cobras 3,99 €.**

Esto es exactamente lo que te preocupaba, y es literal: no hay ningún mecanismo que
proteja el margen cuando alguien compra mucho peso.

---

## 2. El envío gratis desde 35 € no tiene tope

El descuento automático `Envío gratis España desde 35 €` está activo y su campo
`maximumShippingPrice` es **`null`**. Sin tope.

Significa que cubre **cualquier** tarifa de envío, sin límite. Si un producto cae en el
otro perfil (el de margen protegido, que llega a 27,99 €), y el carrito pasa de 35 €,
ese envío de 27,99 € lo pagas tú entero.

Un tope de, por ejemplo, 3,99 € haría que el cliente pagara la diferencia en los pedidos
pesados. Ahora mismo no hay nada.

---

## 3. El umbral de 35 € cae justo donde empieza a pesar

Números reales del catálogo (12.475 variantes activas):

- Precio mediano por artículo: **16,12 €**
- Peso mediano por artículo: **0,2 kg**

| Artículos | Importe aprox. | Peso | Banda | ¿Envío gratis? |
|---|---|---|---|---|
| 1 | ~16 € | 0,2 kg | 1 | No, paga 3,99 € |
| 2 | ~32 € | 0,4 kg | 2 | No, paga 3,99 € |
| **3** | **~48 €** | **0,6 kg** | **2** | **Sí, gratis** |
| 4 | ~64 € | 0,8 kg | 3 | Sí, gratis |
| 6 | ~97 € | 1,2 kg | 3 | Sí, gratis |
| 7 | ~113 € | 1,4 kg | 4 | Sí, gratis |

**El cliente que más te cuesta enviar es exactamente el que no paga envío.** El umbral de
35 € se cruza con 2-3 artículos, que es justo cuando el peso salta de banda. A partir de
ahí, cuanto más compra, más pesa, y tú pagas el 100 %.

---

## 4. Hay dos tarifas distintas conviviendo

Existe un segundo perfil, `Mirea · Korealy margen protegido`, con una escalera que sí
sube con el peso:

| Peso | Perfil general | Margen protegido |
|---|---|---|
| 0 – 0,3 kg | 3,99 € | 6,99 € |
| 0,3 – 0,6 kg | 3,99 € | 11,99 € |
| 0,6 – 1,2 kg | 3,99 € | 18,99 € |
| más de 1,2 kg | 3,99 € | 27,99 € |

**Corrección a la auditoría del 22-09:** ahí escribí que este perfil estaba vacío.
**Estaba mal.** Hoy tiene productos dentro — verificado, salen los de línea masculina
(Dashu, Paul Medison, Sulwhasoo Men, Kundal…). Shopify tapa el contador a 500, así que no
sé cuántos son exactamente; eso se ve en el admin.

O sea: **según lo que compre el cliente paga 3,99 € o hasta 27,99 € por el mismo envío
a España.** Eso no se sostiene de cara al cliente.

Ese perfil tiene además una segunda escalera por importe de carrito (≥69 € → 19,99 €,
≥109 € → 12,99 €, ≥139 € → 7,99 €, ≥159 € → 4,99 €) que se solapa con la de peso.

---

## 5. Los pesos son inventados

De 12.475 variantes:

| Peso | Variantes |
|---|---|
| **0,2 kg** | **8.206** (66 %) |
| 0,3 kg | 1.910 |
| 0,4 kg | 960 |
| 0,5 kg | 568 |
| resto | 831 |

Dos tercios del catálogo pesan exactamente 0,2 kg. Eso no es un dato, es un valor por
defecto que se puso al importar. Una crema de 50 ml y un bote de 500 ml figuran con el
mismo peso.

**Consecuencia:** aunque la escalera por peso funcionara, estaría calculando sobre datos
falsos. El peso real de un pedido de 6 botes de 500 ml no es 1,2 kg.

---

## Qué necesito de ti para darte el número

**La tabla de Korealy.** Cuánto te cobran a ti por enviar, según peso. Pégamela aquí tal
cual. Con eso calculo, para cada banda, cuánto ganas o pierdes por pedido, y te digo si
3,99 €, 6,99 € o cualquier otra cifra se sostiene.

(No puedo mirarlo yo: `korealy.com` está bloqueado por la política de red de este
entorno. Está documentado en `auditoria-precios-2026-09-22.md`.)

Lo segundo, cuando puedas: **pesos reales**, al menos de los 200-300 productos que más
se venden. Eso sí se puede hacer por CSV.

---

## Lo que recomiendo hacer ya, sin esperar a los números

Ninguna de estas tres cosas depende de saber lo que cobra Korealy. Son errores, no
decisiones de precio:

1. **Poner tope al envío gratis.** Que el descuento de 35 € cubra como mucho 3,99 € (o lo
   que decidas). El cliente paga la diferencia en pedidos pesados. Esto solo, corta la
   sangría de los pedidos grandes.
2. **Unificar los dos perfiles.** O todos los productos en la misma escalera, o una razón
   clara para que unos cuesten 3,99 € y otros 27,99 €. Ahora mismo depende de qué
   producto toque, y el cliente no lo entiende.
3. **Decidir qué hace la escalera de peso del perfil general.** O le pones precios
   distintos por banda, o la quitas y dejas una tarifa plana honesta. Cuatro bandas con
   el mismo precio solo confunde a quien lo mire después.

**No he tocado nada de esto.** Cambiar tarifas de envío es política comercial: lo decides
tú. Dime qué hacemos y lo dejo montado.
