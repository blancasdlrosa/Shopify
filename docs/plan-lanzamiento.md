# Mirea Skin · Plan de lanzamiento
2026-09-22 · catálogo héroe · medición · reseñas

## Corrección al diagnóstico anterior

`docs/diagnostico-ads.md` presenta los 178 productos en Google como un fallo
("97,8% invisible"). **No lo es.** Los 178 están curados a mano: formato de título
Mirea (`Marca Producto · 100 ml`), SEO relleno, stock alto, 0 rechazos en España.

El resto del catálogo son importaciones en crudo del proveedor, en inglés y sin SEO.
**Subirlas en bloque a Merchant Center habría sido un error.**

---

## A · Catálogo héroe · estado real

**Segunda corrección: las fichas curadas ya son excelentes.** La muestra que llevó a
proponer "reescribir 200 fichas" era del catálogo en crudo, no de los 178.

Las buenas siguen una plantilla propia y muy sólida: *Para qué sirve · Cómo se usa ·
En qué paso va · Aparece en · [sección con criterio] · La ficha en detalle ·
Combina bien con · Para quién NO es*. Con porcentajes de ingrediente, textura,
acabado, fragancia y venta cruzada a las rutinas.

### Medición de la plantilla sobre los 178

| Bloque | Cuántas lo tienen |
|---|---|
| "Para quién NO es" | 136 · 76% |
| "En qué paso va" | 101 · 57% |
| **"Combina bien con"** | **9 · 5%** |

Dos frentes, por este orden:

**1. Las 42 sin plantilla.** Reparto: 5 packs propios (buenos, solo les falta el
bloque), 5 con plantilla vieja *(Qué es / Ingredientes / Cómo se usa)*, y el resto
fichas flojas de tres párrafos (LANEIGE, Arencia, dos Anua).

**2. "Combina bien con" está en 9 de 178.** Es el bloque que sube el ticket medio y
está sin usar en el 95% del escaparate. Llevarlo a las 136 buenas es, con diferencia,
la mejora de mayor retorno por hora de trabajo del catálogo.

### Hecho el 2026-09-22

Siete fichas subidas al estándar, elegidas por estar dentro de los packs o por precio:

| Producto | Qué se añadió |
|---|---|
| COSRX Oil-Free Ultra-Moisturizing Lotion | Plantilla completa + por qué la piel grasa necesita hidratación |
| SKIN1004 Centella Light Cleansing Oil | Plantilla + por qué aceite y no gel + aviso de aromáticos |
| medicube Deep Vita C Pad | Plantilla + cómo introducir el ácido láctico sin irritarse |
| medicube Collagen Jelly Cream | Plantilla + qué hace y qué no hace el colágeno tópico |
| medicube PDRN Pink Peptide Serum | Plantilla + PDRN cosmético ≠ inyectable de clínica |
| Anua 3 Ceramide Barrier Cream | Plantilla + qué es la barrera y cómo se rompe · **etiquetas corregidas** |
| Anua Peach 77 Niacin Cream | Plantilla completa · **etiquetas corregidas** |

### Etiquetas del proveedor sin traducir

`Anua Peach 77` llevaba `["BEAUTY","Cream","FACE","Facial Cream"]` y
`Anua 3 Ceramide` llevaba `["Cream","Facial Cream"]`: sin `Paso:` ni `Piel:`, así que
**no aparecían en ninguna colección por etiqueta**. Corregidas. Hay más casos entre
las 42 (Arencia con `Scrub`, `Multi Balm`, `SERUMS`; LANEIGE con `Moisturizer`).

## A · Catálogo héroe

| | |
|---|---|
| Ya en Google, curados y aprobados | **178** |
| De ellos, medicube | 90 |
| De ellos, packs propios Mirea | 15 |
| Candidatos con stock en las 9 marcas fuertes | 726 |
| Resto del catálogo (crudo, inglés, sin SEO) | ~7.900 |

**Objetivo: ~250 fichas excelentes, no 8.000 mediocres.**

Faltan ~70 para llegar. Criterio de selección, por orden:

1. Productos que la gente ya busca por nombre: COSRX Snail 96, Anua Heartleaf 77,
   Beauty of Joseon Relief Sun, Round Lab 1025 Dokdo, SKIN1004 Centella Ampoule,
   SOME BY MI AHA-BHA-PHA, Isntree Hyaluronic Sun Gel
2. Los que ya están dentro de los 23 packs (coherencia: si lo vendes en pack, véndelo suelto)
3. Los de las 6 colecciones de necesidad con mejor margen

Cada ficha nueva necesita, antes de entrar al feed:
- Título en formato Mirea con `·` y formato/ml
- Descripción **en español**, con voz de marca
- SEO título `… | Mirea Skin` y meta descripción
- Etiquetas de necesidad y tipo de piel

**Lo que NO se hace:** subir los ~7.900 restantes. Se quedan buscables en la tienda,
fuera del escaparate y fuera del feed.

---

## B · Medición, antes de gastar un euro

No se puede leer la configuración de píxeles por API (falta el permiso
`read_pixels`), así que hay que comprobarlo a mano en el admin.

**Orden de montaje:**

1. **Google Analytics 4** → Shopify admin › Canales › Google y YouTube › Configuración.
   Vincular la propiedad GA4 y confirmar que `purchase` llega con valor y moneda.
2. **Conversiones de Google Ads** → se crean solas al vincular Ads con Merchant
   Center, pero hay que verificar que la conversión principal sea *Compra*, no
   *Añadir al carrito*.
3. **Píxel de Meta** → Canales › Facebook e Instagram. Activar la **API de
   conversiones**, no solo el píxel del navegador: con iOS el píxel solo pierde
   la mitad de los eventos.
4. **Comprobación real:** hacer un pedido de verdad, con tarjeta real, y verificar
   que el evento aparece en GA4, en Meta y en Klaviyo. **Las pruebas con
   herramientas de test no valen como confirmación** — el brief ya lo dice.

Sin los cuatro puntos, cualquier campaña gasta a ciegas.

---

## C · Las primeras reseñas

Judge.me está instalado. Reseñas: **cero**, porque clientes reales: cero.
Una tienda premium sin una sola reseña no convierte a un desconocido.

**Dos fallos de tiempos que hay que corregir antes de nada:**

1. **La entrega tarda 2-3 semanas desde Corea.** La petición de reseña estándar
   de Judge.me sale a los 14 días. **Llegaría antes que el producto.** Hay que
   ponerla a **35-45 días** desde el pedido.
2. **El flujo de reposición a 45 días** tiene el mismo problema: si el pedido tarda
   3 semanas en llegar, a los 45 días la clienta lleva 24 días usando un limpiador
   de 150 ml. Es demasiado pronto. Debería ir a 75-90 días.

**Cómo conseguir las primeras 20, de forma legítima:**

- De los 11 flujos de Klaviyo en vivo **no hay ninguno de petición de reseña**.
  Judge.me la envía por su lado, pero conviene una secuencia propia con la voz de
  Mirea y los tiempos corregidos.
- Pedir reseña con foto a cambio de un descuento en la siguiente compra es legal
  y habitual, **siempre que el descuento no dependa de que la reseña sea positiva**
  y se avise de que es un incentivo.
- Los packs son la mejor palanca: quien compra un pack de 84,90 € y recibe la guía
  tiene mucho más que contar que quien compra un limpiador suelto.

**Lo que no se hace nunca:** escribir reseñas propias, comprarlas, o publicar
testimonios inventados como si fueran de clientas. Además de ilegal en la UE
(Directiva Omnibus, sanciones de hasta el 4% de la facturación), es justo lo
contrario de lo que dice la sección "Experiencias reales" de la propia tienda.

---

## Nombres de tema

Había tres temas cuyo nombre decía lo contrario de su estado: el **publicado** se
llamaba *"COPIA — revisar y publicar"* y dos **sin publicar** se llamaban
*"PUBLICAR ESTA"*. Eso ya provocó un error de lectura. Renombrados:

| Antes | Ahora | Estado |
|---|---|---|
| COPIA — Necesidades al catálogo (revisar y publicar) | **EN VIVO · Mirea · necesidades al catálogo** | MAIN |
| PUBLICAR ESTA — Mirea · CRO + tracking + reseñas | ANTERIOR · CRO + tracking + reseñas · 21-09 | Sin publicar |

Queda `PUBLICAR ESTA — Mirea · buscador PRO` sin tocar: puede que sí esté pendiente
de publicar y esa decisión es de Blanca.

**Regla:** el nombre del tema dice su estado, no su intención.

## Orden recomendado

1. ~~Publicar la copia del tema~~ — **hecho por Blanca el 21-09**, verificado por MD5
2. Montar la medición (B) — sin esto lo demás no se puede evaluar
3. Corregir los tiempos de reseña y reposición (C) — son dos ajustes, 10 minutos
4. Primera campaña de Shopping en España con los 178 que ya están aprobados
5. Ampliar el catálogo héroe a ~250 (A)
6. Las primeras reseñas llegan solas cuando lleguen los primeros pedidos
