# ALERTA · Korealy admite un 50% de devoluciones en aduana para España

**Fecha:** 30-09-2026 · **Autor:** Claude
**Origen:** correo de Korealy del 30-09 a las 00:24 (hilo `1a0deda1a060ac44`,
mensaje `1a0efb37b4d26955`)

Esto no es una incidencia de un pedido. Es una pregunta sobre si el negocio, tal
y como está montado hoy, puede funcionar.

---

## 1 · Lo que dicen, textual

> *"Spain is one of the countries with particularly strict customs procedures
> for cosmetic products. Based on our shipping experience, **the return rate is
> approximately 50%**. Customs clearance is outside of our control and is
> therefore not considered our responsibility. If a shipment is returned to
> Korea due to customs clearance issues, we will refund the product value only,
> excluding the original international shipping cost and a $2 return handling
> fee."*

Tres cosas, y las tres importan:

1. **Uno de cada dos envíos a España vuelve.** Es su cifra, no una estimación
   nuestra.
2. **No se hacen responsables.** El riesgo es enteramente de Mirea.
3. **En una devolución no se recupera todo:** devuelven el valor del producto,
   pero **no** el envío internacional, y además cobran **2 $** de gestión.

En el mismo correo admiten otras dos cosas ya sospechadas:

> *"inventory synchronization is not always real-time... In some cases, we may
> need to inform you that an item is out of stock after we have received your
> order."*

> *"The SKU is an internal identifier used by us... Our SKUs are not
> synchronized in real time with your store."*

O sea: el stock que enseña la tienda no es fiable (confirmado), y **no van a dar
SKU por tono**. La petición de los 859 productos queda respondida con un no.

---

## 2 · Qué significa en dinero

Con una probabilidad de devolución `p`, un margen `M` si el pedido llega y una
pérdida `L` si vuelve, el resultado medio por pedido es:

```
resultado = (1 − p) × M  −  p × L
```

Con **p = 0,5**, eso se simplifica a algo brutal: **el margen de los pedidos que
llegan tiene que ser mayor que la pérdida de los que vuelven.** Si no, cada
venta pierde dinero de media, por muchos pedidos que entren.

### Caso real: pedido #1004

Datos verificados, de los recibos de PayPal y de Shopify:

| Concepto | Importe |
|---|---|
| Lo que pagó la clienta | 86,33 € |
| Pagado a Korealy (55 $ + 25 $ = 80 $ ÷ 1,0911) | 73,32 € |
| **Margen si llega** | **≈ 13,01 €** |

Si ese mismo pedido se devuelve: Korealy reembolsa el valor del producto, pero
se queda el envío internacional (9 $ en la primera factura, más el que lleve
dentro la segunda) y cobra 2 $. A eso se suma la comisión de pasarela del cobro
original, que no se recupera al reembolsar a la clienta.

**Pérdida estimada por devolución: 12-16 €.**

Metido en la fórmula, con p = 0,5:

```
resultado medio ≈ 0,5 × (+13 €) + 0,5 × (−14 €) ≈ −0,50 € por pedido
```

**Entre empatar y perder medio euro por pedido.** Y eso *antes* de contar
Shopify, Klaviyo, el dominio, cualquier euro de publicidad y el tiempo de
Blanca.

> **Aviso de honestidad:** la pérdida por devolución es una estimación, porque no
> sabemos qué parte de la segunda factura de 25 $ era envío. El 50% y los 2 $
> son suyos, por escrito. El margen de 13,01 € sale de cifras reales. La
> conclusión no cambia aunque la pérdida real sea 10 € o sea 18 €.

---

## 3 · Por qué subir precios NO lo arregla

El lote de precios ×1,80 dejó el catálogo con coste conocido al 45% de margen
bruto. Suena sano. Pero con un 50% de devoluciones, **la mitad de ese margen
nunca se cobra y además se paga un envío perdido**. Ninguna política de precios
razonable compensa que uno de cada dos paquetes no llegue.

Esto no contradice el trabajo hecho: los precios estaban mal y ahora están bien.
Pero el precio no era el problema principal. El problema principal es este.

---

## 4 · Salidas posibles, por orden de interés

### a) Conseguir DDP a España *(preguntado el 30-09, sin respuesta)*

Korealy envía **DDP a Estados Unidos** y DDU a todo lo demás. Con DDP los
aranceles e IVA van prepagados y el despacho de aduanas deja de ser una lotería.
**Si pueden hacer DDP a España, el problema desaparece.** Es la primera pregunta
que se les ha hecho.

### b) Mirar a Estados Unidos en serio

Es la salida que ya estaba medio preparada: ver `docs/eeuu-analisis-preliminar.md`.

- Korealy envía **DDP solo a EE. UU.**, o sea que es el único mercado suyo **sin
  el problema de aduanas**.
- El mercado *International* ya está activo, con 32 países y moneda USD.
- Faltan sus tarifas DDP para decidir con números.

Dicho crudamente: **puede que el mercado viable no sea España, sino EE. UU.** Es
justo lo contrario de lo que parecía.

### c) Saber qué países de la UE sí despachan bien

Preguntado también. Si el 50% es específico de España y, por ejemplo, Francia o
Alemania despachan sin problema, la tienda se reorienta a esos mercados sin
cambiar de proveedor.

### d) Aportar documentación que mejore el despacho

Preguntado: listas de ingredientes, notificación CPNP, lo que haga falta. Si hay
papeleo que suba la tasa de éxito, se hace.

### e) Buscar un distribuidor dentro de la UE

Un proveedor con stock en Europa elimina la aduana de la ecuación. Es el cambio
más grande y el más lento, pero es el único que no depende de que Korealy
quiera ayudar.

---

## 5 · Qué NO se ha hecho

- **No se ha parado la tienda.** Es una decisión de Blanca, no mía.
- **No se ha tocado ningún precio, tarifa ni configuración** a raíz de esto.
- **No se ha avisado a las clientas** del riesgo de aduanas. Decidirlo es de
  Blanca: es un aviso que reduce ventas pero evita reclamaciones.
- El pedido **#1006 se va a enviar igualmente**, con Blanca informada del riesgo.
  Es una apuesta consciente de ~10-16 € para no dejar tirada a una clienta que
  ya ha esperado y ya ha sufrido un cambio.

---

## 6 · Lo siguiente

1. Esperar la respuesta de Korealy sobre **DDP a España** y sobre qué países de
   la UE despachan bien. Es lo que decide todo lo demás.
2. Con esa respuesta, rehacer el análisis de EE. UU. con números.
3. Si dicen que no hay solución: sentarse a decidir si se sigue vendiendo a
   España con este proveedor.
