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

---

# EJECUTADO · misma tarde

Blanca: *"haz lo que tengas que hacer, pero que siempre tenga beneficio y ESTANDO
SEGURO 100 %, y mejorando la psicología de ventas."*

## La regla que seguí

No tengo la tabla de Korealy, así que **no puedo afirmar que ninguna tarifa cubra el
coste**. Lo que sí puedo garantizar al 100 % es algo más modesto y suficiente: que
**ningún cambio cobre menos de lo que cobrabas antes**. Todo lo que hice sube o deja
igual. Es imposible que te deje peor de lo que estabas.

Lo que exigía inventarme un número lo dejé sin tocar y está abajo, en "lo que falta".

## 1 · Escalera de peso real en `Perfil general` · España

| Peso | Antes | Ahora |
|---|---|---|
| 0 – 1,0 kg | 3,99 € | **3,99 €** (sin cambio) |
| 1,0 – 2,0 kg | 3,99 € | **6,99 €** |
| 2,0 – 3,0 kg | 3,99 € | **11,99 €** |
| más de 3,0 kg | 3,99 € | **16,99 €** |

Los cortes se eligieron con los datos del catálogo, no a ojo: el artículo mediano pesa
0,2 kg, así que **hasta 5 artículos siguen pagando 3,99 €**. El pedido corriente no nota
nada. Solo paga más quien compra mucho peso, que es exactamente quien te costaba dinero.

Las cuatro tarifas siguen llamándose "Envío estándar" en el checkout: el cliente nunca ve
"banda 3", solo un precio.

**Verificado con pedidos simulados** (`draftOrderCalculate`, sin crear nada real):

| Carrito | Peso | Envío devuelto |
|---|---|---|
| 2 uds · 14,40 € | 0,4 kg | 3,99 € |
| 5 uds · 36,00 € | 1,0 kg | 3,99 € |
| 8 uds · 57,60 € | 1,6 kg | 6,99 € |
| 16 uds · 115,20 € | 3,2 kg | 16,99 € |

## 2 · Tope al envío gratis

`Envío gratis España desde 35 €` tenía `maximumShippingPrice: null`. Ahora **3,99 €**.

El umbral de 35 € no se ha tocado: sigue siendo el mismo gancho. Lo que cambia es que el
regalo está acotado. En un pedido de 1,6 kg y 57 €, antes el cliente pagaba 0 € y tú
asumías el envío entero; ahora el descuento cubre 3,99 € y el cliente pone 3,00 €.

## 3 · La página de envíos mentía

`/pages/envios-y-devoluciones` decía **"desde 6,99 €"** para España cuando cobrabas 3,99 €.
Y **no mencionaba el envío gratis por ningún sitio** — tu mejor argumento de venta no
estaba escrito en la página que lo explica.

Corregido en **las dos copias**, el original en inglés y la traducción española
(`translationsRegister` con el digest nuevo), porque son dos textos independientes y
tocar solo uno habría dejado al cliente español leyendo lo viejo.

Ahora dice "desde 3,99 €" y añade:

> **Envío gratis en pedidos de más de 35 €** a España peninsular y Baleares. En pedidos
> especialmente pesados cubrimos 3,99 € del envío y el resto se te muestra en el
> checkout, antes de pagar, para que no haya sorpresas después.

## 4 · Barra de progreso hacia el envío gratis (carrito)

El carrito no decía nada del umbral. Nuevo `snippets/mirea-envio-gratis.liquid`, llamado
desde `blocks/_cart-summary.liquid`:

- *"Te faltan 12,40 € para el envío gratis"* con barra de progreso, o
- *"Ya tienes el envío gratis"* al cruzarlo.

**Solo se muestra en España**, porque es el único sitio donde el umbral existe. Enseñarle
esa barra a alguien de Francia sería mentirle.

Sube el importe medio del pedido, que es la palanca que de verdad arregla el margen del
envío: un paquete de 60 € cuesta enviar casi lo mismo que uno de 30 €.

Está en el borrador **"PUBLICAR ESTA · Mirea · regalos protegidos"**, junto con el
candado del Journal.

---

## Lo que NO hice, y por qué

**No unifiqué los dos perfiles de envío.** `Mirea · Korealy margen protegido` sigue
cobrando 6,99 € por un paquete de 0,2 kg cuando el perfil general cobra 3,99 € por el
mismo peso al mismo país. Es mala psicología y el cliente no lo entiende.

Pero bajarlo a 3,99 € **reduce ingresos** en esos productos, y eso incumple el "100 %
seguro". No es un error que corregir, es una decisión con coste. **Mi recomendación:
alinearlo con el perfil general.** El riesgo no sería nuevo — es el mismo que ya corres
en el resto del catálogo — y quitaría una incoherencia que cuesta ventas. Pero lo decides
tú.

**No toqué los precios de producto.** 1.040 productos siguen con precio mal puesto y sin
coste por artículo. Mientras eso siga así, "beneficio garantizado" no se puede afirmar de
ninguna venta, por muy bien que esté el envío.

## Lo que falta para cerrar la pregunta de verdad

1. **La tabla de Korealy por peso.** Pégamela y calculo, banda a banda, cuánto ganas o
   pierdes. Es lo único que convierte esto en aritmética.
2. **Pesos reales**, al menos de los 200–300 que más se venden. Ahora 8.206 de 12.475
   variantes pesan "0,2 kg" por defecto. La escalera nueva funciona, pero calcula sobre
   datos inventados: un pedido de 6 botes de 500 ml no pesa 1,2 kg en la realidad.
3. **Coste por artículo (CSV).** Sin él no hay margen, solo criterio.
