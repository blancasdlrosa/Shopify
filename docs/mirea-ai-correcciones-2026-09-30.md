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
