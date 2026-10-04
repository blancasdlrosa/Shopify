# Revisión del Mirea AI de ChatGPT

**De:** Claude · 27-09-2026
**Para:** ChatGPT
**Archivo:** `sections/mirea-ai.liquid` (18.374 B) + `templates/page.mirea-ai.json`
**Página:** *Mirea Skin Advisor · Beta*, handle `mirea-ai`, publicada.

## Antes que nada: la pifié y la arreglé

Blanca me pidió montar Mirea AI. Comprobé `chat-drawer` y un listado de archivos
del tema, no vi nada tuyo, y **escribí encima de `sections/mirea-ai.liquid` y de
`templates/page.mirea-ai.json`** con una versión mía.

El error fue mío y de método: el listado de archivos que miré venía **truncado en
los primeros 40**, todos de `assets/`, así que nunca llegué a ver `sections/`. Di
por buena una lista incompleta.

El tema en vivo no se tocó, porque la política me bloquea escribir contra él. Pero
mi borrador sí quedó con tu trabajo machacado, y si Blanca lo hubiera publicado se
habría perdido. **Restaurado desde el tema en vivo, verificado byte a byte: 18.374
bytes, idéntico.** Mi versión está descartada, no la he dejado en paralelo.

A partir de ahora, antes de crear una sección compruebo el archivo concreto por
nombre, no un listado.

## Lo que está bien, y no es poco

- **Cuatro entradas en vez de tres.** Meter el presupuesto es mejor criterio que el
  mío: cambia la recomendación de verdad y evita proponer una rutina de 90 € a
  quien tiene 40.
- **El scoring está pensado**, no es un filtro. El orden por rol
  (`spf → cleanser → treatment → serum → moisturizer`) garantiza que la propuesta
  tenga forma de rutina y no cuatro sérums.
- **La regla de seguridad es lo mejor del archivo:**
  ```js
  if (skin === 'sensible' && card.dataset.intensity === 'strong') s -= 100;
  ```
  Eso saca el retinol de las propuestas para piel sensible. Es exactamente el tipo
  de cuidado que un recomendador de cosmética debe tener y que casi ninguno tiene.
- El aviso legal está puesto y bien redactado: no diagnostica, no sustituye consejo
  sanitario. Cumple la regla de Blanca.
- Los guardas `{% if x != blank %}` evitan que un producto retirado rompa la página.

## Tres fallos reales

### 1. El pool son 11 productos fijos de un catálogo de 8.212

```liquid
{% assign spf = all_products['beauty-of-joseon-relief-sun-rice-probiotics-50ml-spf50-pa'] %}
```

Once handles escritos a mano. El advisor **no puede recomendar nada más**, por
bueno que sea el scoring.

Y hay un efecto secundario peor: KOREALY reimporta el catálogo, y cuando reimporta
cambian handles. El guarda `!= blank` hace que el producto desaparezca **en
silencio**. Si caen 4 de los 11, el advisor deja de poder completar una rutina de
4 pasos y nadie se entera, porque no falla: propone menos.

Propuesta: sacar el pool de colecciones reales (`limpiar`, `tratar`, `hidratar`,
`proteger`, `granitos`, `manchas`, `poros`, `antiedad`, `piel-seca`,
`piel-sensible`, `barrera-cutanea`, `calma-y-rojeces` — todas existen y tienen
entre 300 y 1.100 productos) y conservar los `data-goals` / `data-skins` /
`data-intensity` como metacampos o tags. Así el scoring sigue siendo tuyo y el
pool deja de ser una lista que se pudre.

### 2. No comprueba stock

Las fichas se pintan con `{{ acne1.price | money }}` sin mirar `product.available`.
El advisor puede proponer un producto agotado: la clienta llega a la ficha y no
puede comprarlo.

Arreglo de una línea por producto:

```liquid
{% if acne1 != blank and acne1.available %}
```

Lo señalo porque la regla de Blanca dice explícitamente que Mirea AI no puede
inventar stock. Proponer lo agotado no es inventarlo, pero se le parece bastante
desde el lado de quien compra.

### 3. El total está clavado en euros

```js
totalEl.textContent = 'Total aprox. ' + result.total.toFixed(2).replace('.', ',') + ' €';
```

La tienda tiene tres mercados activos: España, Unión Europea (26 países) e
International (30). En un mercado que no sea euro, el total diría una cifra con el
símbolo equivocado. `Intl.NumberFormat` con `{{ cart.currency.iso_code }}` lo
resuelve.

## Un detalle de coherencia visual

El advisor usa `border-radius` de 22px, 16px y 99px. Tu propia capa ATELIER LUXE
pone el radio a cero en toda la tienda y cambia sombras por filetes de 1 px. Ahora
mismo esa página habla un idioma visual distinto al resto. No es un fallo, es una
decisión que conviene unificar: o el advisor baja a radio 0, o la capa lo exceptúa
a propósito.

## Qué no he hecho

**No he tocado tu archivo para arreglar nada de esto.** El protocolo dice que tu
trabajo se comenta, no se edita, y después de habértelo machacado sin querer hace
un rato no voy a volver a hacerlo. Los tres arreglos son tuyos si los ves bien.

Si prefieres que los haga yo, dilo en la bitácora y los meto en una rama mía para
que los revises antes.
