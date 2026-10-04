# Todo lo que está bloqueado, y cómo se desbloquea · 30-09-2026

Lista completa. Para cada cosa: **quién** la desbloquea, **qué hay que hacer
exactamente**, y **qué hago yo después**. Ordenado por lo que más cuesta si se
queda sin hacer.

Resumen: **15 bloqueos**. 7 dependen de ti, 5 dependen de Korealy, 2 son datos
que faltan y 1 se desbloqueó hoy.

---

# A · DEPENDEN DE TI

## A1 · Publicar la IA · 2 minutos

**Por qué está bloqueado:** este contenedor no tiene salida a `mireaskin.es` ni
al dominio `.myshopify.com`. No puedo abrir la vista previa ni publicar temas
(publicar un tema completo es de las cosas que me prohibiste hacer sola, y me
parece bien).

**Qué haces:**
1. Shopify → **Tienda online → Temas**.
2. Busca `Mirea v5 · ADVISOR v2 · BASE MAIN 30-09`.
3. **Vista previa** → ve a `/pages/mirea-ai`.
4. Rellena el formulario dos o tres veces con respuestas distintas. Mira que
   salgan fichas con foto, nombre, precio, y un total que cuadre con la suma.
5. Si te vale: **Publicar**.

**Qué hago yo después:** nada, queda cerrado. Si algo se ve raro, me mandas una
captura y lo arreglo en el mismo tema.

## A2 · Los 6 PDF de las guías · lo estás haciendo

**Por qué está bloqueado:** las 6 guías en borrador devuelven `files: []`. No es
que el archivo esté mal subido: no existe. Publicarlas sería cobrar 8,95 € por
un PDF que no está.

**Qué haces:** redactarlas con el prompt que te pasé
(`docs/guias/PROMPT-redaccion-guias.md`) y mandarme los textos.

**Qué hago yo después:** maquetar los 6 PDF con el diseño de la tienda, rellenar
los huecos `[PRODUCTO: ...]` con productos reales del catálogo (foto, precio y
enlace de verdad), subirlos a Digital Products, publicar las 6 guías y
comprobar una compra de prueba de principio a fin. Medio día de trabajo mío.

## A3 · Los regalos por producto · decisión tuya, 5 minutos

**Por qué está bloqueado:** hay dos cosas mezcladas y una de ellas no es de
contenido, es de negocio.

Lo que he comprobado hoy: los dos flujos de regalo de Klaviyo están en marcha y
llegan (100 % de entrega, 0 rebotes), pero **no mandan ningún PDF**. Mandan un
enlace a una página de la tienda. Las páginas existen y están bien. Los 5 PDF
que hay subidos desde el 14-09 **no los enlaza nadie**.

**Las dos decisiones:**

1. **¿El regalo es un PDF de verdad o se queda como página web?** Si en algún
   sitio de la tienda dice "PDF descargable", tiene que ser un PDF. Si dice
   "guía", la página vale.
2. **¿Se regala la guía de Retinoides?** Ahora mismo está **a la venta por
   9,95 €**. Si la regalamos con el retinol, dejamos de venderla. Puede
   compensar (vende más retinol) o no. Es tuya la decisión, pero no se puede
   hacer sin darse cuenta.

**Qué hago yo después:** monto la regla producto → guía en Klaviyo (comprar
gua sha dispara la guía de gua sha, etc.) en cuanto existan los PDF y me digas
las dos respuestas. Es media hora.

## A4 · Enviar los correos desde `my.mireaskin@gmail.com` · 5 minutos

**Por qué está bloqueado:** el conector de Gmail admite **una sola cuenta** y
está conectado a `blancasdlr@gmail.com`. La herramienta de enviar no tiene
selector de remitente: manda siempre desde la cuenta conectada. Ya has puesto el
reenvío, que era el paso delicado.

**Qué haces:**
1. Cambia el correo de la cuenta de **Korealy** a `my.mireaskin@gmail.com`, para
   que sus respuestas lleguen ahí directamente.
2. claude.ai → **Configuración → Conectores → Gmail** → desconectar.
3. Volver a conectar entrando con `my.mireaskin@gmail.com`.

**Antes de que lo hagas, dime y te reenvío los tres hilos abiertos** (Korealy
#1004, Korealy #1006, Yolanda) a la cuenta de negocio, para que el histórico
esté ahí y no solo en el personal.

**Qué hago yo después:** todos los correos salen ya desde el correo de negocio.

## A5 · El IVA · esto es lo más serio de la lista

**Por qué está bloqueado:** no tienes gestor, y yo no puedo hacer de gestor.
Pero sí puedo decirte lo que he medido en la tienda, que es un hecho:

- La tienda tiene `taxesIncluded: true`. **El IVA va dentro del precio**, no se
  suma aparte.
- Los pedidos que han entrado han cobrado **0,00 € de impuestos**, incluido el
  pedido a España y el de Portugal.

Esas dos cosas juntas significan una de dos, y solo una es buena:

| Escenario | Qué implica |
|---|---|
| No estás dada de alta a efectos de IVA | El 0,00 € es correcto **hoy**, pero hay un umbral a partir del cual sí hay que repercutirlo, y vender a otros países de la UE tiene reglas propias |
| Sí lo estás | El 21 % **está dentro** de cada precio y lo debes, aunque la factura diga 0,00 € |

Y hay un tercer asunto encima: los envíos vienen de Corea en **DDU**. El IVA de
importación lo paga la clienta al recibir, no tú. Eso cambia quién importa y
quién declara.

**Qué haces:** esto necesita una persona con título, no una IA. Lo más barato
que resuelve:
1. Una **gestoría online** (Declarando, TaxDown Autónomos, Quipu, Getquipu y
   similares). Están entre 40 y 60 € al mes y llevan altas, trimestrales y
   modelos.
2. O una **consulta puntual** con una gestoría de tu zona: llevar los tres
   pedidos, el modelo de dropshipping desde Corea y la pregunta concreta de qué
   IVA repercutir y en qué modelo se declara.
3. Mientras tanto, **no tocar la configuración de impuestos de la tienda**. Si
   está mal, cambiarla sin saber puede dejarla peor.

**Qué hago yo después:** cuando me digas el criterio, configuro los impuestos de
la tienda y los mercados y te lo dejo comprobado con un pedido de prueba.

**Lo digo claro: de todo lo que hay en esta lista, esto es lo único que puede
acabar en una multa.** Lo demás es dinero o tiempo.

## A6 · Avisar de las aduanas en la web · decisión tuya

**Por qué está bloqueado:** es un cambio visible en fichas y checkout. No lo hago
sin tu OK.

**El dato:** Korealy dice por escrito que todos los envíos fuera de EEUU son
**DDU**: los aranceles y el IVA de importación los paga la clienta al recibir.
Ahora mismo la tienda **no avisa de eso en ningún sitio**. Una clienta puede
llevarse una factura sorpresa del transportista.

**Qué haces:** decirme sí o no. Yo propongo: sí, y con una frase corta y neutra
en la ficha y en el checkout. Avisar reduce ventas, pero no avisar produce
reclamaciones y devoluciones, que cuestan más.

**Qué hago yo después:** lo redacto, lo monto en el tema sin publicar y lo ves
antes de que salga.

## A7 · Si se sigue vendiendo a España con el 50 % de devoluciones · decisión

**Por qué está bloqueado:** no es un ajuste, es la estrategia del negocio.

**El dato, confirmado dos veces por escrito:** Korealy dice que **la mitad de
los envíos de cosmética a España vuelven** por aduanas, que no se hacen
responsables, y que si vuelve te reembolsan el producto menos el envío
internacional y 2 $. El número de este negocio, con el pedido #1004 como
ejemplo real: **≈ −0,50 € de media por pedido**. Es decir, vender a España con
este proveedor, de media, **no gana dinero**.

Las salidas están en `docs/ALERTA-devoluciones-50-por-ciento-2026-09-30.md`,
ordenadas. La primera es conseguir DDP a España (A8/K3). La segunda es EEUU,
donde Korealy sí envía DDP.

**Qué haces:** leer ese documento y decidir. Es la decisión más grande que hay
encima de la mesa.

---

# B · DEPENDEN DE KOREALY

En todas estas ya hay correo enviado. Lo que falta es que contesten. Propongo
una fecha límite y una escalada, porque llevan cinco días dando largas.

## B1 · Seguimiento del #1004 y confirmación de los 3 artículos

**Estado:** dicen *"Order 1004 was shipped yesterday"* (29-09). **No dan
seguimiento** y **no confirman que vayan los tres artículos**. Reclamado el
30-09 a las 08:37.

**Por qué importa:** hasta que no confirmen los 3 SKUs, el pedido no se da por
bueno, no se marca fulfillment y no se le escribe a la clienta diciendo que ha
salido. Si va incompleto, ese correo habría que desdecirlo.

**Escalada que propongo si no contestan hoy:** el pago del artículo que falta se
hizo por **factura de PayPal** (KOREALY-260927-#1004, 25 USD). PayPal admite
abrir una incidencia por "artículo no recibido". Abrirla no rompe la relación:
es el mecanismo normal y les obliga a dar seguimiento. **Dime si quieres que
prepare el texto.**

## B2 · Seguimiento del protector solar de Yolanda

**Estado:** pagado el 30-09 (23 USD, Payment Success). Sin aviso de envío
todavía. Es pronto.

**Qué hago yo:** lo reclamo junto con lo del #1004 si mañana no hay nada.

## B3 · DDP a España y qué países de la UE despachan bien

**Estado:** preguntado el 30-09 a las 08:37. Sin respuesta.

**Por qué importa:** es la salida número 1 del problema del 50 %. Si pueden
enviar DDP a España, el riesgo de aduanas casi desaparece. Y si nos dicen qué
países de la UE despachan sin problema, se puede vender ahí mientras tanto.

## B4 · Fichero de stock por SKU

**Estado:** preguntado dos veces. **No contestan a la pregunta.** Lo que sí han
hecho es admitir por escrito que *"inventory synchronization is not always
real-time... we may need to inform you that an item is out of stock after we
have received your order"*.

**Traducción:** podemos cobrar un pedido y enterarnos después de que no hay
producto. No es mala suerte, es cómo funciona.

**Lo que se puede hacer sin ellos:** abrir la app de Korealy y ver si tiene
exportación o un listado de disponibilidad. Necesita tu pantalla: la app no es
accesible desde aquí. **Si me mandas capturas de la pantalla de productos, te
digo si hay algo aprovechable.**

## B5 · SKU por tono y SKU duplicados

**Estado:** preguntado tres veces. Repiten que el SKU es "un identificador
interno" y no dan los SKU individuales.

**El problema medido:** 859 productos activos comparten un solo SKU entre todos
sus tonos y tamaños. El cushion TIRTIR Mask Fit tiene **45 tonos con el mismo
SKU 1000000715**, y el formato de 4,5 g lleva ese mismo SKU. Cuando una clienta
pide un tono concreto, el SKU que les mandamos **no dice cuál**.

**Consecuencia real:** cada venta de un producto con tonos es una tirada de
dados sobre qué tono llega.

**Lo que propongo mientras no contesten:** poner esos 859 productos en borrador
hasta tener SKU por tono. **Es quitar productos de la venta, así que no lo hago
sin que me lo digas.** Pero vender un tono que no podemos garantizar es cómo se
generan devoluciones.

---

# C · DATOS QUE FALTAN

## C1 · Coste real de un envío nacional pequeño

**Por qué importa:** es la única cifra que falta para cerrar si los productos
baratos dan beneficio. Un artículo de 3,95 € deja **1,26 € de margen** (el IVA
va dentro del precio, por eso no son 1,95 €) y la clienta paga 4,99 € de envío.
Todos los tramos salen bien **si un paquete pequeño nacional cuesta menos de
unos 5,85 €**. Ese número no está en ningún sitio.

**Qué haces:** pedir una tarifa real a un transportista (Correos Express, SEUR,
GLS, Packlink) para un paquete de hasta 500 g a península, o mirar una factura
que ya tengas.

**Qué hago yo después:** cierro el cálculo de márgenes por tramo de precio con
datos reales y te digo qué tramos hay que subir y cuáles no.

## C2 · Los costes de 9.803 variantes

**Por qué importa:** sin coste no hay margen, y sin margen no se sabe qué es
rentable. Habíamos dado por perdido recuperarlos.

**Lo que encontré:** la app de Korealy muestra **"Product price"** por línea de
pedido — su coste. En el #1006 se vio: 15,00 USD el hair treatment, 17,00 USD el
protector. Los dos están entre los 9.803 sin coste. Si ese dato está en la app
para todos los productos, se pueden recuperar.

**Qué haces:** abrir la app de Korealy, entrar en la pantalla de productos y
mandarme **una captura**. Con verla te digo si hay forma de sacarlo en bloque o
si hay que ir producto a producto (y entonces no compensa).

---

# D · YA DESBLOQUEADO HOY

## D1 · El fichero de GTIN / EAN · desbloqueado y ya en marcha

**Estaba bloqueado porque** `docs.google.com` está cortado para mí y Korealy se
negaba a mandar el fichero: se limitaban a reenviar el enlace.

**Resuelto.** La hoja está compartida con tu cuenta de Google desde el 30-09 a
las 06:58, y el **conector de Google Drive sí la lee**. Descargada:
`Korealy-Download GTIN List`, **5.699 productos con su código de barras**.

### Lo que da de sí, medido

La hoja está indexada por **nombre de producto en el formato de Korealy**
(`[Abib] Heartleaf Calming Toner 200ml`), no por SKU. Nuestros títulos se
limpiaron y renombraron en su día, así que hay que cruzarlos por nombre. Cruzado
el catálogo completo (8.212 productos, 13.096 variantes) contra la hoja:

| | |
|---|---|
| Productos activos cuyo título aparece **exacto** en la hoja | **545** de 7.738 |
| Nombres de la hoja que no corresponden a ningún producto nuestro | 4.978 de 5.523 |
| Asignaciones seguras (activo, sin código, coincidencia exacta y única) | **496** |
| Coincidencias ambiguas (mismo nombre, varios EAN) — descartadas | 33 |
| Códigos con formato inválido | 0 |
| EAN que aparecía en dos productos distintos | 0 |

**El techo de este método son 545 productos, no 12.402.** Los dos catálogos casi
no se solapan por nombre: la hoja es el catálogo de Korealy con sus nombres, y
el nuestro está renombrado. No hay columna de SKU en la hoja, así que no hay
forma limpia de cruzar el resto.

**No he forzado más coincidencias a propósito.** Un EAN mal puesto es peor que
ninguno: en Google Merchant tu producto se asocia al producto de otro. Solo se
escriben coincidencias exactas y únicas.

### Estado

- **496 asignaciones verificadas**, en
  `docs/respaldos/gtin/asignaciones-2026-09-30.csv` con el título de cada
  producto al lado, para que se pueda revisar a mano.
- **40 escritas y comprobadas** en la tienda.
- **456 pendientes de escribir**, ya generadas en lotes de 40. Es mecánico.
- Copia para deshacer en `docs/respaldos/gtin/rollback-2026-09-30.csv`: las 496
  variantes tenían el código **vacío**, así que revertir es dejarlo vacío otra
  vez.

### Y lo que de verdad desbloquea Google Merchant

496 de 12.402 no arregla el feed. Lo que lo arregla es otra cosa: Google Merchant
**acepta productos sin GTIN** si el feed declara `identifier_exists = no`. Es un
ajuste del feed, no 12.000 códigos de barras. Eso sí se puede dejar cerrado sin
depender de Korealy, y lo tengo como siguiente paso.

# E · NO BLOQUEADO, SOLO LARGO

| Qué | Dónde va | Quién |
|---|---|---|
| Traducciones de fichas | 880 de 4.194 | yo, en lotes verificados |
| Catálogo para EEUU y etiquetado | en el otro chat | el chat de catálogo |

---

# Lo más corto para desbloquear más

Si solo tienes diez minutos hoy, en este orden:

1. **Vista previa de la IA y publicar** (A1) — cierra una tarea entera.
2. **Decirme sí o no al aviso de aduanas** (A6) — una palabra.
3. **Las dos respuestas de los regalos** (A3) — dos palabras.
4. **Mandarme la captura de la app de Korealy** (C2) — puede recuperar 9.803
   costes.

Y esta semana, sin falta: **la gestoría** (A5).
