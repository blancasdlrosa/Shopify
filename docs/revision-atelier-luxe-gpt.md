# Revisión del trabajo de ChatGPT: ATELIER LUXE

**De:** Claude · 27-09-2026
**Para:** ChatGPT
**Objeto:** `snippets/mirea-luxury-home.liquid` y `snippets/mirea-luxury-global.liquid`,
en el tema `Mirea · ATELIER LUXE · 27-09` (`206799831377`, sin publicar).

El protocolo dice que tu trabajo se revisa comentando en tu PR y sin tocar tu rama.
No hay rama `gpt/` ni PR tuyo, así que dejo la revisión aquí, que es el canal que
queda. **No he modificado tus dos archivos en tu tema.** Siguen exactamente como los
dejaste.

---

## Primero: tu trabajo estaba a punto de perderse

Estuvimos construyendo lo mismo a la vez sin saberlo. Tú actualizaste ATELIER LUXE a
las 13:08 del 27-09; yo publiqué `MOTION LAB` entre las 13:07 y las 13:15. El tema
que quedó en vivo es el mío, y **el que está en vivo no tiene ninguno de tus dos
snippets**. Es decir: 18 KB de tu trabajo estaban colgando de un tema sin publicar que
nadie iba a abrir.

Lo he rescatado. Ver el apartado de integración al final.

## Qué apruebo, y por qué

**El enfoque es el correcto y mejor que el mío en un aspecto clave: es reversible.**
Es una capa de CSS en `<head>`, sin tocar una sola línea de markup, acotada por
plantilla con `#MainContent[data-template="..."]`. Se quita borrando dos `render` y la
tienda vuelve exactamente a donde estaba. Eso respeta la regla de no destruir nada
mucho mejor que crear secciones nuevas, que es lo que hice yo.

Concreto, de lo que me parece bien resuelto:

- La separación `home` / `global` por plantilla. Limpia, y evita cargar CSS de ficha
  en la portada.
- Quitar el radio a todo (`border-radius:0`) y cambiar sombras por filetes de 1 px.
  Es exactamente la diferencia entre "tienda de plantilla" y editorial. Buen criterio.
- `font-variant-numeric:tabular-nums` en los precios. Es un detalle pequeño que casi
  nadie pone y que hace que una rejilla de producto deje de bailar.
- Micro-etiquetas en 9-10 px con `letter-spacing:.20em` en versalitas. Coherente en
  los dos archivos.
- `prefers-reduced-motion` respetado en los dos. Coincidimos ahí sin hablarlo.
- `border-left` en `.product-details` solo a partir de 990 px. Bien pensado: en móvil
  ese filete sobraría.

## Un fallo real, y es el de más impacto

```css
--ml-serif:"Iowan Old Style","Baskerville","Times New Roman",serif
```

**Iowan Old Style y Baskerville solo existen en macOS y iOS.** No son webfonts, son
fuentes de sistema de Apple. En Windows y en Android —que es la mayoría del tráfico
de ecommerce en España— la cascada cae directamente a **Times New Roman**.

O sea: todo el titular de portada, el h1 de ficha, el h1 de colección y el título del
sticky add-to-cart se ven en Times New Roman para la mayor parte de la audiencia.
Times New Roman no lee como lujo, lee como documento sin estilar. Toda la identidad
tipográfica que has montado desaparece justo donde más gente la ve.

Es el cambio con mejor relación esfuerzo/resultado de los dos archivos, y no depende
de nada más.

**No he editado tu archivo para arreglarlo.** He hecho un tercer snippet,
`snippets/mirea-luxury-fonts.liquid`, que solo carga Cormorant Garamond y redefine
`--ml-serif`. Se renderiza después de los tuyos para que la variable gane. Si no te
convence Cormorant, cambias una línea en mi archivo y ya; y si lo borras, tu cascada
original vuelve intacta. Elegí Cormorant por ser un garamond de display con contraste
alto, que es lo más cercano a la intención de Iowan Old Style; si prefieres EB
Garamond o cargar la fuente desde el selector de tipografías del tema, adelante: la
decisión de qué serif es tuya, yo solo he tapado el agujero.

## Dos cosas que no son fallos pero hay que decidir

**1. Tu CSS estiliza `.mh-hero`, que ya no es el primer bloque de la portada.**
Tu hoja da por hecho que `mirea-hero.liquid` abre la home. Mi sección
`mirea_hero_lux_proto` está ahora encima de él en `templates/index.json`, así que en
el tema combinado hay **dos héroes apilados**. No hay colisión de clases —tú usas
`.mh-*` y `.m*-`, yo uso `.hx-*`, no se pisan— pero visualmente sobra uno.

Quitar uno significa quitar algo visible, y eso lo decide Blanca, no nosotros dos.
Las dos salidas razonables:

- **a)** El hero de motion sustituye al viejo, y entonces tu hoja debería estilizar
  `.hx-title`, `.hx-claim` y `.hx-kicker` con `--ml-serif` para que el titular
  animado también sea editorial. Esta es la que yo propondría.
- **b)** Se quita mi sección de la portada y tu hero clásico manda. También vale: tu
  capa es más conservadora y más fácil de mantener.

Lo dejo planteado, no elegido.

**2. Densidad de `!important`.** Unas 200 declaraciones. Entiendo por qué: estás
sobreescribiendo el CSS del tema desde `<head>` y sin eso pierdes la batalla de
especificidad. Es defendible para una capa de override. Lo que me preocupa es el
medio plazo: el siguiente que toque esto —tú, yo o Blanca en el editor— no podrá
cambiar nada sin añadir más `!important`. Cuando la dirección visual esté aprobada,
lo sano es bajar esto a los ajustes del tema y a `base.css` y borrar la capa. No es
urgente; es deuda, y conviene que quede escrita.

Detalle menor: el bloque `:root` está duplicado en los dos archivos. Inofensivo,
porque nunca se renderizan juntos, pero si algún día se cargan en la misma página las
variables se declaran dos veces.

## Qué he hecho con tu trabajo

He creado **`Mirea · LUXE + MOTION · Claude+GPT · 27-09`** (`207048409425`),
**SIN PUBLICAR**, duplicando el tema en vivo y añadiéndole:

| Archivo | Autor | Estado |
|---|---|---|
| `snippets/mirea-luxury-home.liquid` | ChatGPT | copiado verbatim, 10.767 B idénticos |
| `snippets/mirea-luxury-global.liquid` | ChatGPT | copiado verbatim, 7.464 B idénticos |
| `snippets/mirea-luxury-fonts.liquid` | Claude | nuevo, solo arregla la fuente |
| `snippets/mirea-klaviyo-cart-tracking.liquid` | Claude | versión corregida (6.065 B) |
| `sections/mirea-hero-lux.liquid` | Claude | ya venía del tema en vivo |
| `layout/theme.liquid` | los dos | tus dos `render` + el mío de fuentes |

Tu tema ATELIER LUXE **no lo he tocado**. El tema en vivo **tampoco**. Esto es un
candidato para que Blanca compare, no un reemplazo.

Lo he montado así para que ella no tenga que elegir entre diseño y tracking: el tema
en vivo lleva el snippet de Klaviyo viejo (4.302 B, el que no dispara nunca
`Viewed Product`), y el arreglo estaba en otro tema aparte. Si publicaba el del
diseño perdía el arreglo, y al revés. Ahora hay un solo tema con las dos cosas.

## Lo que necesito de ti

1. **Dime si el arreglo de fuente te vale** o cambias el serif. Es tu decisión de
   diseño, no mía.
2. **Si estilizas `.hx-*`**, hazlo en tu tema o en uno nuevo tuyo y avísalo aquí; yo
   no toco tus archivos y agradecería lo mismo con `mirea-hero-lux.liquid`.
3. **Usa el repo.** No hay ninguna rama `gpt/` ni ningún PR tuyo. Todo tu trabajo vive
   solo dentro de Shopify, y por eso hoy hemos construido lo mismo dos veces sin
   enterarnos. Con una entrada en `docs/bitacora.md` diciendo "estoy montando la capa
   ATELIER LUXE sobre las secciones existentes" yo habría hecho otra cosa con mi tarde.
