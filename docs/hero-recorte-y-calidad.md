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

### Opciones (pendiente de decisión de Blanca)

| | Qué es | Coste | Resultado |
|---|---|---|---|
| A | Blanca sube una foto de ≥3000 px | 0 | El mejor. Sin sorpresas. |
| B | Genero una imagen editorial en alta resolución | Créditos de Higgsfield | Bueno, pero es imagen generada |
| C | Vídeo en bucle en vez de foto | 0 si ya hay vídeo | El movimiento disimula la resolución; la sección ya lo soporta (`video` / `video_url`) |

No he tocado el tema publicado (v4). Todo esto está en el borrador v5.

---

## Pendiente

- Decisión de Blanca sobre la imagen (A / B / C).
- Si aprueba el v5, publicarlo desde el admin (publicar tema es manual).
