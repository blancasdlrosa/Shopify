# Hero de portada: el corte lateral y la calidad de imagen

**Fecha:** 28-09-2026 · **Autor:** Claude
**Tema de trabajo:** `Mirea v5 · HERO SIN CORTE · borrador` (`207099167057`, sin publicar)
**Preview:** https://heh7ct-ib.myshopify.com/?preview_theme_id=207099167057

Blanca señaló dos cosas del hero: que se ve de mala calidad y que las personas
de los extremos salen partidas por la mitad. Son dos problemas distintos con
causas distintas. Lo dejo separado porque se arreglan de formas diferentes.

---

## 1. El corte lateral — ARREGLADO

**Causa.** En `sections/mirea-hero-lux.liquid`:

```css
clip-path: inset(var(--hx-mask, 14%) round 2px);
```

`inset()` con **un solo valor recorta los cuatro lados**. Ese 14% se comía
~282 px por la izquierda y otros ~282 por la derecha en una pantalla de
2016 px, que es justo donde caen las personas de los extremos de la foto.
La animación abre ese recorte hasta 0 al bajar, así que el efecto "telón"
estaba bien pensado, pero **en reposo rebanaba la foto por los lados**.

La foto de fondo, además, es un collage de cuatro caras en tiras verticales.
Recortar un collage por los lados siempre va a partir a alguien.

**Arreglo.** El telón ahora abre **solo en vertical**:

```css
clip-path: inset(var(--hx-mask, 12%) 0% round 2px);
```

El `0%` es el eje horizontal: los lados no se tocan nunca. El efecto
cinematográfico se mantiene, la foto no se parte.

**Trampa encontrada durante el arreglo.** En mi primer intento el JS escribía
`--hx-mask` como `"10.50% 0%"`. Al sustituirse dentro de
`inset(var(--hx-mask) 0% ...)` salían **tres** valores → el telón habría
abierto solo por arriba, dejando el borde inferior pegado. Corregido: la
variable lleva un único porcentaje y el `0%` horizontal vive en el CSS.
Subido y verificado (23.863 B, checksum `663225cf1a0eac20c9331675a7d89715`).

**Extra.** Dos ajustes nuevos en el editor, bajo *Encuadre del telón*:
- `recorte_vertical` — franja de apertura, 0–22%, por defecto 12. Con 0 no hay telón.
- `zoom_scroll` — zoom al bajar, 0–10%, por defecto 3 (antes era 6 fijo).

---

## 2. La mala calidad — NO SE ARREGLA CON CÓDIGO

**Causa.** El archivo de fondo
(`531B27F0-1C62-4B9B-81B3-04063FDEA145.png`) mide **1649 × 954 px**, 2,0 MB.

El hero ocupa el 100% del ancho de la pantalla. En un monitor de ~2000 px CSS
con retina son ~4000 px reales. La foto se estira de 1649 a 4000.
**Shopify nunca amplía una imagen**: el Liquid pide
`widths: '600, 900, 1200, 1600, 2000'` pero el servidor devuelve como mucho
1649. Encima el CSS le aplicaba un `scale()` que la ampliaba todavía más.

He bajado el zoom de 6% a 3% y he subido la escalera de `widths` a 2400 para
que aproveche el archivo el día que se sustituya, pero **el techo lo pone el
archivo**. Con 1649 px de ancho no hay forma de que se vea nítido a pantalla
completa.

**Mínimo recomendado para un hero a pantalla completa: 3000 px de ancho.**
Y mejor JPG que PNG: el PNG de 2 MB no aporta nada en una foto y penaliza la
velocidad de carga.

### SOLUCIÓN SIN COSTE: ya existe el archivo bueno

Buscando en los archivos de Shopify aparece, subido después del actual:

**`mirea-portada-editorial-4k.png` — 4096 × 2373 px**
(alt: "Mirea Skin · portada editorial (4K)")

Proporción 1,726:1, prácticamente idéntica a la del archivo en uso (1,729:1).
Es decir: **entra como sustituto directo, sin recortar nada distinto**, y
multiplica por 2,5 el ancho disponible. El hero estaba usando el archivo
pequeño teniendo el de 4K al lado.

**No se ha podido aplicar por API.** La política de seguridad del MCP bloquea
`themeFilesUpsert` sobre `templates/index.json` (lo clasifica como escritura
contra el tema publicado, aunque el destino fuese el borrador v5; el `.liquid`
del mismo tema sí lo permitió). Queda para Blanca, que además es quien debe
decidir sobre algo visible:

> Tienda online → Temas → editor → sección del hero →
> **Imagen de fondo** → elegir `mirea-portada-editorial-4k.png`

Se puede hacer sobre el tema publicado sin riesgo: cambiar una imagen es
reversible al instante y no requiere publicar nada.

**Sin verificar:** no he podido descargar el archivo para inspeccionarlo (el
proxy bloquea `cdn.shopify.com`). Si resultara ser un reescalado del pequeño
en vez de un original en 4K, se verá igual de blando. Se sabrá al ponerlo.

### Si el 4K no sirve (pendiente de decisión)

| | Qué es | Coste |
|---|---|---|
| A | Blanca sube una foto original de ≥3000 px, en JPG | 0 |
| B | Generar una imagen editorial en alta resolución | Créditos de Higgsfield |
| C | Vídeo en bucle en vez de foto (la sección ya lo soporta) | 0 si ya hay vídeo |

No he tocado el tema publicado (v4). Todo esto está en el borrador v5.

---

## Pendiente

- Blanca cambia la imagen del hero a `mirea-portada-editorial-4k.png` desde el editor.
- Si con eso no basta, decidir entre A / B / C.
- Si aprueba el v5, publicarlo desde el admin (publicar tema es manual).
