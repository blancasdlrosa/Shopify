# Mirea Skin Advisor · correcciones y auditoría · 30-09-2026

Pediste dejar la IA hecha. Esto es lo que se ha hecho, dónde está y cómo se ha
comprobado. **No se ha publicado nada**: todo vive en un tema sin publicar.

- **Tema de trabajo:** `Mirea v5 · ADVISOR v2 · BASE MAIN 30-09`
  (`gid://shopify/OnlineStoreTheme/207262613841`, UNPUBLISHED).
- Es una **copia exacta del tema EN VIVO** de hoy (`207099167057`), hecha con
  `themeDuplicate`. No se ha tocado el tema publicado.
- Archivo modificado: **solo** `sections/mirea-ai.liquid`. Ningún otro.
- Copia del archivo en este repo: `theme/sections/mirea-ai.liquid`.

La sección original la escribió ChatGPT. Los tres fallos estaban documentados en
`docs/revision-mirea-ai-gpt.md` desde el 28-09 y seguían sin corregir.

---

## 1 · Recomendaba productos agotados

**El fallo.** Las fichas se pintaban con `{% if acne1 != blank %}`, que solo
comprueba que el producto exista. Un producto agotado seguía apareciendo en la
propuesta, con su precio y su botón. La clienta contesta cuatro preguntas,
recibe una rutina, hace clic y se encuentra un "agotado".

Esto no es teórico: el 29-09 pasó exactamente eso con el pedido #1006. El hair
treatment estaba a la venta en la tienda y agotado en el proveedor.

**La corrección.** Cada ficha exige ahora `product.available`:

```liquid
{%- if p != blank and p.available -%}
```

Si un producto se agota, desaparece de la propuesta ese mismo momento, sin tocar
nada. Y se ha añadido una frase al pie del formulario: *"Solo se proponen
productos disponibles en este momento"*.

## 2 · El total salía en euros aunque el mercado fuera otro

**El fallo.** Las fichas usaban el filtro `money`, que sí se adapta al mercado
(en Estados Unidos pone `$`). Pero el total estaba escrito a mano:

```js
totalEl.textContent = 'Total aprox. ' + result.total.toFixed(2).replace('.', ',') + ' €';
```

Resultado: una clienta de un mercado en dólares veía cinco fichas en `$` y
debajo un total en `€`. Con tres mercados activos (España, Unión Europea,
Internacional) y la posibilidad de vender a Estados Unidos, esto es un error que
se ve en pantalla.

**La corrección.** El total se formatea con la divisa real del carrito:

```liquid
data-currency="{{ cart.currency.iso_code | default: shop.currency }}"
data-locale="{{ request.locale.iso_code | default: 'es' }}"
```

```js
formatter = new Intl.NumberFormat(locale, { style: 'currency', currency: currency });
```

Con respaldo si el navegador no soporta ese idioma, para que nunca se quede sin
total.

## 3 · El catálogo del advisor eran 11 productos escritos en el código

**El fallo.** Los 11 productos estaban puestos a mano por su handle dentro del
`.liquid`. Sobre un catálogo de **8.212 productos**, el advisor solo sabía
recomendar 11. Y para cambiar uno había que editar código.

**La corrección.** La sección acepta ahora **bloques desde el editor de temas**,
hasta 50 productos. Cada bloque tiene:

| Ajuste | Para qué |
|---|---|
| Producto | el producto real, elegido con el buscador de Shopify |
| Etiqueta | lo que se lee encima del nombre (Limpiar, Tratar, Sellar…) |
| Paso de la rutina | limpiar / tratar / sérum / hidratar / protección solar |
| Intensidad | suave / media / fuerte |
| Objetivos (5 casillas) | para qué objetivos encaja |
| Tipos de piel (5 casillas) | para qué pieles encaja |
| No recomendar a piel sensible | exclusión dura |

Se añaden desde **Tienda online → Temas → Personalizar → página Mirea AI →
Añadir bloque**. Sin tocar código.

**Por qué no he metido el catálogo entero automáticamente.** Porque no se puede
hacer con datos reales. Para recomendar con criterio hace falta saber de cada
producto su paso, su intensidad, para qué objetivo sirve y para qué piel. En el
catálogo solo **36 productos activos** llevan la etiqueta `Paso: Limpiar` y
**15** llevan `Piel: Sensible`. El resto no tiene esos datos. Rellenarlos a ojo
sería inventarme para qué sirve cada producto, y eso es justo lo que no se hace
aquí. Los bloques dejan que esa decisión la tome una persona, producto a
producto.

**Respaldo.** Mientras no haya bloques, la sección usa los 11 de siempre. Así la
página **no se queda vacía** en ningún momento, ni hoy ni si alguien borra un
bloque por error.

## 4 · Añadido: qué pasa si no hay propuesta

Antes, si ninguna combinación encajaba, salía la cabecera de resultados con cero
fichas y el texto "0 productos". Ahora sale un aviso claro, con enlace al
catálogo y la opción de escribirnos.

## 5 · El desajuste visual, sin tocar

`docs/revision-mirea-ai-gpt.md` señalaba que el advisor usa bordes redondeados
(22px / 16px / 99px) mientras la capa ATELIER LUXE pone radio 0 en toda la
tienda. **No lo he cambiado**: es un cambio visible y esos los decides tú.

Lo que sí he hecho es dejarlo a un clic. En los ajustes de la sección hay
**Bordes: Redondeados (como está ahora) / Rectos (para cuadrar con ATELIER
LUXE)**. Viene puesto en "como está ahora". Si lo cambias, lo ves en la vista
previa antes de publicar.

---

## Comprobaciones

| Qué | Cómo | Resultado |
|---|---|---|
| Los 11 productos siguen existiendo | Admin API, `productByIdentifier` por handle | 11/11 ACTIVE y `availableForSale: true` |
| El archivo subido es el que escribí | MD5 del tema vs MD5 local | `9b49ba6fc068b75949254a40c8bd933b` = idéntico, 23.164 B |
| Liquid y schema válidos | `themeFilesUpsert` | 0 `userErrors`; el JSON del schema parsea; 17 `if` / 17 `endif`, 2 `for` / 2 `endfor`, 3 `capture` / 3 `endcapture` |
| La lógica de recomendación | `theme/pruebas/advisor-combinaciones.mjs` | **200 combinaciones, 0 fallos** |
| Comportamiento con roturas de stock | `theme/pruebas/advisor-agotados.mjs` | **66 escenarios, 1.650 combinaciones, 0 fallos** |
| Formato de moneda | mismo test | `es/EUR → 57,80 €` · `en/USD → $57.80` · `es/GBP → 57,80 GBP` · idioma inválido → `57,80 EUR` |

Las 200 combinaciones son todas las que puede elegir una clienta: 5 objetivos ×
5 tipos de piel × 2 niveles de pasos × 4 presupuestos. En cada una se comprueba
que no se pasa del número de pasos, que no se pasa del presupuesto, que el total
coincide con la suma de las fichas, que **nunca** se propone un producto fuerte
(retinoides) a piel sensible, que nunca se propone un producto marcado como
excluido para esa piel, y que no se repite ningún producto.

Las pruebas no leen una copia del código: extraen las funciones del propio
`.liquid`, así que miden lo que está subido.

## Lo que NO he podido comprobar, y por qué

**El render real de la página.** Este contenedor no tiene salida hacia
`mireaskin.es` ni hacia `heh7ct-ib.myshopify.com` (el proxy devuelve 403), así
que no puedo abrir la vista previa. Lo que sí está comprobado es que Shopify
aceptó el archivo sin errores de Liquid y que la lógica es correcta.

**Eso lo tienes que mirar tú, y son dos minutos:**

1. Shopify → **Tienda online → Temas**.
2. En `Mirea v5 · ADVISOR v2 · BASE MAIN 30-09` → **Vista previa**.
3. Ve a `/pages/mirea-ai`.
4. Rellena el formulario un par de veces y mira que salgan fichas con foto,
   nombre, precio y un total coherente.

Si se ve bien, se publica. **La publicación la decides tú**: yo no publico temas.

---

## Estado

- **HECHO:** los tres fallos corregidos, el aviso de "sin propuesta" añadido, el
  ajuste de bordes disponible, 1.850 combinaciones probadas sin fallos, archivo
  verificado por MD5.
- **EN PROCESO:** nada.
- **BLOQUEADO:** la vista previa visual, por falta de salida de red. Necesita tu
  navegador.
- **SIGUIENTE:** que mires la vista previa. Si te vale, publicas. Y cuando
  quieras, añadir bloques para pasar de 11 productos a los que decidas.

---

# Segunda versión · 30-09-2026 · el advisor ya elige entre cientos de productos

Dijiste que recomendaba poquísimos. Tenías razón y la causa era la de siempre:
**elegía entre 11 productos escritos a mano en el código**, sobre un catálogo de
8.212.

## Lo que he encontrado: la tienda ya tiene el trabajo hecho

No hacía falta etiquetar nada. Cada producto **ya está clasificado** en las
colecciones de la tienda. Medido hoy:

| Paso de rutina | Productos | | Objetivo | Productos |
|---|---|---|---|---|
| Limpiar | 967 | | Calma y rojeces | 1.104 |
| Tratar | 857 | | Poros | 737 |
| Hidratar | 845 | | Antiedad | 660 |
| Proteger | 578 | | Barrera cutánea | 516 |
| | | | Manchas | 457 |
| | | | Granitos | 329 |

Y por tipo de piel: sensible 977 · seca 844 · grasa 175 · mixta 172.

Comprobado abriendo productos uno a uno. El limpiador de Anua, por ejemplo,
está en `limpiar`, `piel-grasa`, `piel-sensible`, `piel-mixta`, `granitos`,
`poros` y `calma-y-rojeces`. Es decir: **el paso, la piel y el objetivo de cada
producto ya existen como dato real.** Nada que inventar.

## Cómo funciona ahora

1. La clienta contesta las cuatro preguntas.
2. El advisor pide al catálogo los productos del objetivo elegido, con una
   plantilla nueva: `templates/collection.advisor.liquid`, que se sirve en
   `/collections/<handle>?view=advisor` y devuelve hasta 250 productos
   **disponibles** con su paso, sus tipos de piel y sus objetivos.
3. Puntúa, respeta el presupuesto y monta la rutina en orden: limpiar → tratar
   → hidratar → proteger.
4. Y debajo enseña **más opciones para cada paso**.

Objetivo → colecciones que consulta:

| Objetivo de la clienta | Colecciones |
|---|---|
| Granitos y poros | `granitos` + `poros` |
| Manchas y marcas | `manchas` |
| Sensibilidad y barrera | `barrera-cutanea` + `calma-y-rojeces` |
| Hidratación y luminosidad | `piel-seca` + `barrera-cutanea` |
| Primeras líneas y textura | `antiedad` |

## Seguridad para piel sensible

Además de preferir los productos de `piel-sensible`, descarta por nombre los
activos fuertes: retinol, retinal, AHA, BHA, PHA, peeling, exfoliantes, ácido
glicólico, salicílico y vitamina C. **Ni en la rutina ni en las alternativas.**

## Cuánto enseña ahora

| | Antes | Ahora |
|---|---|---|
| Productos entre los que elige | 11 | **329 a 1.104 según objetivo** |
| Productos que ve la clienta | ~4 | **20,6 de media** |

## Comprobaciones

| Qué | Resultado |
|---|---|
| Colecciones y cifras | Leídas de la Admin API, no de memoria |
| Liquid y schema de las dos plantillas | `userErrors: []`, JSON del schema válido, etiquetas balanceadas |
| Archivos subidos = archivos escritos | MD5 idénticos: `604af055…` (24.263 B) y `b2668738…` (2.027 B) |
| Lógica de recomendación | **200 combinaciones, 0 fallos** (`theme/pruebas/advisor-catalogo.mjs`) |

Las 200 combinaciones comprueban: no se pasa del número de pasos, no se pasa del
presupuesto, el total cuadra con la suma, la rutina va en orden, no se repite
ningún producto, **nunca se propone un activo fuerte a piel sensible** (ni como
alternativa) y las alternativas no repiten lo que ya está en la rutina.

## Si el catálogo no responde

La sección conserva los 11 productos de siempre como respaldo. Si la petición
falla, la clienta sigue recibiendo una propuesta. En ese caso no se enseña el
contador de "elegido entre N productos", para no decir algo que no es.

## Lo que sigue sin poder comprobar

**El render y la petición reales.** Este contenedor no tiene salida a
`mireaskin.es`. La lógica está probada y los archivos subidos son idénticos a
los escritos, pero que la llamada a `/collections/granitos?view=advisor`
devuelva lo esperado **hay que verlo en la vista previa**.

Pruébalo así, en el tema borrador:
1. `/es/pages/mirea-ai` → contesta y mira que salgan la rutina **y** el bloque
   "Más opciones para cada paso".
2. Si quieres la prueba de fuego, abre
   `/es/collections/granitos?view=advisor`: debe salir un texto que empieza por
   `{"handle":"granitos"...`.

Si eso sale, está terminado y solo falta publicar.
