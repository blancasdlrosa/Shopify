# Traducción de las 4.194 descripciones en inglés · progreso

*Arrancado el 23-09-2026. Este archivo es el punto de guardado: si la sesión se corta,
se retoma por el índice que aparezca aquí.*

## Qué se está haciendo

Las 4.194 fichas que enseñaban la descripción en inglés (o vacía) se están reescribiendo
en español **en el contenido base** del producto (`descriptionHtml`), no como traducción
aparte. Así se ven en español tanto ahora como el día que se cambie el idioma principal.

- Las descripciones originales en inglés están guardadas en
  `docs/respaldos/descripciones-originales-en-2026-09-23.json.gz` (4.194 fichas).
- La cola de trabajo, con el texto de origen de cada una, está en
  `docs/respaldos/cola-traduccion-descripciones.json.gz`.
- El script que saca los lotes es `docs/respaldos/t.sh` (lotes de 30).
- El GraphQL de cada lote se genera con `docs/respaldos/gen-lote.py`, que resuelve el
  ID desde la cola y **se niega a emitir nada** si el texto en español no cuadra con el
  título del producto. No escribir los lotes a mano: ver el incidente de abajo.

## Criterio de redacción

Traducción fiel de lo que dice el fabricante, en español natural, sin inventar
beneficios ni añadir promesas que no estén en el original. Entre 30 y 60 palabras,
formato, tamaño y activos por delante, porque es lo que decide la compra.

## Estado

| Fecha | Hechas | Quedan |
|---|---|---|
| 28-09-2026 | **728** | 3.466 |
| 2026-09-23 | 494 | 3.700 |
| 2026-09-27 | 644 | 3.550 |
| 2026-09-28 | 674 | 3.520 |
| 2026-09-28 | **704** | 3.490 |

Siguiente índice a procesar: **704**.

Verificado el 27-09 contra la tienda, no contra este archivo: el índice 523
(`11153921474897`, desmaquillante bifásico A'pieu) ya está en español y el 524
(`11153921573201`) sigue en inglés. El archivo decía 494 porque la sesión se cortó
después de un lote sin actualizarlo.

## Incidente 27-09: lote desplazado y reparado

Al escribir a mano los 30 alias del lote 554-583 me salté el índice 556, así que
28 productos recibieron la descripción del producto siguiente (el tónico Solep
acabó en el tratamiento Ryo, y así en cascada hasta el gel de THE FACE SHOP).

Detectado al releer el lote, no por un error de la API: los 30 `productUpdate`
devolvieron `userErrors: []`, porque escribir el texto equivocado en el producto
equivocado es una operación perfectamente válida para Shopify.

Reparado el mismo día: se regeneró el lote con `gen-lote.py`, que verifica el par
índice-título antes de emitir, y se comprobaron 14 de los 28 productos contra la
tienda uno a uno. Los otros 14 se emitieron en la misma mutación verificada.

Lección aplicada: los lotes no se escriben a mano. El generador es el único camino.

## Duplicado detectado, no tocado

`PAUL MEDISON Deep Red Fast Hair Loss Shampoo` 1077 ml White Musk aparece dos veces
en el catálogo, con dos IDs distintos (`11153922687313` y `11153928913233`) y dos
fichas independientes en la cola (índices 530 y 590). Las dos están traducidas, así
que no hay ficha en inglés colgando.

No he unido ni archivado nada: son productos existentes y visibles, y eso lo decide
Blanca. Queda anotado para revisar si hay más casos iguales cuando se audite el
catálogo entero.

## Defecto de datos encontrado el 28-09: salto de línea dentro de un título

El producto `11163758690641` se llama literalmente:

```
MEDIHEAL PDRN
Lifting Serum 100ml
```

Con un salto de línea real en mitad del título, no un espacio. Se ve raro en la
ficha y, más importante, **los feeds comerciales rechazan o truncan títulos con
saltos de línea**: Google Merchant y el catálogo de Meta los tratan como carácter
no válido.

No lo he corregido: cambiar el título de un producto es tocar algo visible y no sé
si hay más casos. Conviene buscarlos todos de una vez y arreglarlos en un lote, en
lugar de uno suelto.

---

## 28-09-2026 · lote 704-727

24 fichas traducidas y **verificadas releyendo título y descripción de la tienda**,
no por `userErrors`. Las tres cremas de manos Abib (Type G, N y S) son el caso de
riesgo de esta tanda: se comprobó una a una que cada texto conserva sus
ingredientes (G pantenol, N coco, S karité). Sin desplazamiento de índice.

**Incidente menor, corregido antes de aplicar.** La primera generación salió
casi entera **sin tildes** ("hidratacion", "formula", "rapida"). En una tienda
española eso se lee como descuido. Se regeneró con la ortografía correcta y se
añadió al generador un chequeo que **rechaza el lote** si detecta palabras
típicas sin acentuar. No llegó a la tienda ninguna versión sin tildes.

**Nota:** el producto del índice 708 ya aparece con el título corregido
(`d'Alba Waterfull Panthenol Liquid Essence Sun Serum`), sin el salto de línea
que tenía. Lo arreglé esta misma mañana en el lote de títulos defectuosos.
