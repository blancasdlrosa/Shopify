# Programa de influencers · Mirea Skin

Creado el 2026-09-22. Descuento fijado por Blanca: **10 %**.

## Los 5 códigos, ya creados y activos

| Código | Estado | Caduca | Tope | Mínimo |
|---|---|---|---|---|
| `MIREAINF01` | Activo · sin asignar | 22-12-2026 | 200 usos | 35 € |
| `MIREAINF02` | Activo · sin asignar | 22-12-2026 | 200 usos | 35 € |
| `MIREAINF03` | Activo · sin asignar | 22-12-2026 | 200 usos | 35 € |
| `MIREAINF04` | Activo · sin asignar | 22-12-2026 | 200 usos | 35 € |
| `MIREAINF05` | Activo · sin asignar | 22-12-2026 | 200 usos | 35 € |

## Por qué cada guardarraíl

**10 % sobre todo el catálogo.** Incluye los packs. Sí, los packs ya llevan ~10 %
incorporado sobre la suma de sus partes, así que con el código salen a ~19 % de
descuento real. Es asumible en los packs (que son de marca propia y precio Mirea), pero
tenlo en cuenta antes de subir el porcentaje: **un 20 % sobre el catálogo importado sería
vender por debajo de coste**, porque ese bloque está al 16,7 % de margen bruto. Hasta que
no cargues los costes, 10 % es el único número que sabemos que no te hace perder dinero
en el catálogo curado.

**Mínimo 35 €.** Sin él, alguien usa el código en un bálsamo de labios de 18 € y entre el
descuento y el envío la venta te cuesta dinero. 35 € es el escalón donde el pedido ya
aguanta el envío.

**No acumula con nada.** `combinesWith` en false para descuentos de pedido, de producto y
de envío. Esto es lo que impide que alguien encadene `MIREAINF01` con `BIENVENIDA10` y se
lleve un 20 % que tú no has autorizado.

**Un uso por cliente.** Evita que una sola persona vacíe el código.

**200 usos y caducidad a 3 meses.** Límite de exposición. Si una influencer funciona, se
amplía; si no funciona, caduca sola y no se queda un código vivo para siempre.

## Cómo asignar un código a una influencer

1. Shopify admin → **Descuentos**
2. Busca `MIREAINF01` (o el siguiente libre) y ábrelo
3. Cambia el **código** por el nombre de ella: `LUCIA`, `MARTAK`, lo que uséis
4. Cambia el **título** a `Influencer · Lucía · 10%` para saber de quién es de un vistazo
5. Guardar

**Solo renómbralo si nadie lo ha usado todavía.** Si ya tiene pedidos, cambiar el código
rompe el enlace de los pedidos antiguos: en ese caso crea uno nuevo.

O me lo dices y lo renombro yo en un minuto.

## Qué mandarle a la influencer

> Hola [nombre], te paso tu código: **[CÓDIGO]**.
>
> Es un 10 % para tu comunidad, válido hasta el 22 de diciembre, en pedidos desde 35 €.
> No se puede acumular con otras promos.
>
> Dos cosas importantes:
>
> **Marca el contenido como publicidad.** En España es obligatorio: `#publi` o `#ad`
> visible en el propio post o vídeo, no escondido entre hashtags al final.
>
> **No digas que cura nada.** Puedes hablar de hidratación, textura, luminosidad y
> aspecto. No de acné, rosácea, dermatitis, eczema ni de "eliminar" manchas o arrugas.
> Eso es publicidad sanitaria y nos multan a las dos. Si tienes dudas con una frase,
> mándamela antes y te digo.

## Cómo saber si funcionan

Shopify admin → **Analíticas → Informes → Ventas por código de descuento**. Ahí ves por
cada código: pedidos, ventas, descuento aplicado. Eso es lo que usas para pagar comisión
si acordáis una.

**Shopify Basic no tiene seguimiento de afiliados nativo.** Si en algún momento quieres
comisión automática por venta en vez de mirar el informe a mano, hace falta una app
(UpPromote, Refersion y similares). No lo he instalado: es gasto mensual y es decisión
tuya.

## Antes de escalar esto

El programa está montado, pero **no lo escales hasta que los costes estén cargados**. Con
el margen a ciegas, cada código nuevo es una apuesta. Con los costes dentro, en diez
minutos se sabe qué productos aguantan un 15 % o un 20 % y cuáles no, y se pueden hacer
códigos por colección en vez de sobre todo el catálogo.

## Pendiente de limpieza

`BIENVENIDA10` y `MIREA10` son **el mismo descuento duplicado**: los dos al 10 %, sobre
todo, sin caducidad y sin tope de usos. Habría que quedarse con uno. `MIREA10` además sí
acumula con descuentos de envío, cosa que `BIENVENIDA10` no hace. No los he tocado porque
puede que uno esté impreso en algún sitio o metido en el flow de bienvenida de Klaviyo.

---

# Seguimiento · qué ve cada influencer

Añadido el 2026-09-22.

## La página

**`mireaskin.es/pages/mirea-influencer`** — creada y publicada. Explica qué se da, qué se
pide, cómo funciona el seguimiento y qué datos tiene que mandar quien quiera entrar
(alcance medio y país principal de su audiencia, sacados de sus propias estadísticas).

Aún **no está enlazada desde el menú**. Lo suyo es ponerla en el pie de página, junto a
"Hablamos". Dime y la enlazo.

## Los dos números de cada influencer

Cada una recibe **un código** y **un enlace**. Hacen cosas distintas y por eso van los dos:

- **El código** cuenta los *pedidos*. Solo ve a quien lo escribe al pagar.
- **El enlace** cuenta las *visitas*. Ve también a quien entra por curiosidad y compra
  tres semanas después sin acordarse del código.

### Convención del enlace

```
https://mireaskin.es/?utm_source=instagram&utm_medium=influencer&utm_campaign=ALIAS
```

`ALIAS` en minúsculas y sin acentos ni espacios: `lucia`, `martak`, `anabeauty`.
Tiene que coincidir con el nombre del código para que los dos números cuadren.

Si quieres mandarla a una rutina concreta en vez de a la home, se cambia solo la parte de
delante:

```
https://mireaskin.es/products/pack-primera-vez?utm_source=instagram&utm_medium=influencer&utm_campaign=lucia
```

### De dónde salen los números

Verificado hoy: la consulta funciona y devuelve datos reales.

| Dato | Dónde |
|---|---|
| Visitas por influencer | Analíticas → Informes → Sesiones, agrupado por `utm_campaign` |
| Pedidos por influencer | Analíticas → Informes → **Ventas por código de descuento** |
| Clientes que trajo | Clientes → segmento **Mirea · Traídas por influencer** |

## Lo que hay que decirle claro a cada una

**No pueden entrar a ver sus números en tiempo real.** Shopify Basic no tiene panel de
afiliados: para eso hace falta una app de pago (UpPromote, Refersion). Lo que sí hay, y
lo que promete la página, es un **informe mensual** que se les manda.

Prometer un panel que no existe es la forma más rápida de quemar una colaboración.

### Plantilla del informe mensual

> **[Mes] · [Nombre]**
>
> Visitas desde tu enlace: **[n]**
> Pedidos con tu código `[CÓDIGO]`: **[n]**
> Facturación generada: **[n] €**
>
> [Una línea honesta: qué funcionó, qué no, y qué probamos el mes que viene.]

## Un aviso sobre los datos de tráfico actuales

En los últimos 90 días la tienda tuvo **1.754 sesiones** y **2 pedidos**. Pero el 89 % de
ese tráfico entra como "directo" (1.567 sesiones), que en una tienda nueva sin presencia
offline suele ser tráfico propio, bots o enlaces sin etiquetar. Del resto: Facebook 115,
Google 38, Instagram 33.

Con ese ruido dentro **no se puede calcular una conversión real**. Si el tráfico bueno
son solo las 187 sesiones no directas, la conversión sería del 1,07 %, que es normal. Si
las 1.754 fueran reales, sería del 0,11 %, que sería un desastre. No lo sabemos.

Etiquetar con UTM todo lo que se publique a partir de ahora es lo que va a hacer que ese
número signifique algo. Empieza por los enlaces de influencer.
