# Hero: pasos para Blanca (2 cambios, ~3 minutos)

**Fecha:** 28-09-2026 · **Escrito por:** Claude

El arreglo del corte lateral ya está hecho en el tema
**`Mirea v5 · HERO SIN CORTE · borrador`** (`207099167057`, sin publicar).

Faltan dos cosas que yo no puedo hacer: el MCP me bloquea escribir archivos de
tema (bloqueó `templates/index.json` y después también los `.liquid`, aunque
minutos antes me hubiese dejado escribir el mismo archivo en el mismo tema).

Trabaja sobre **v5**, no sobre el publicado: v5 ya lleva el arreglo del corte.

---

## Paso 1 — Poner la foto de 4K

Tienda online → Temas → buscar `Mirea v5 · HERO SIN CORTE · borrador`
→ **Personalizar**

1. Clic en la sección del hero (la primera, "Mirea · Hero LUXE (prototipo)").
2. Campo **Imagen de fondo (o póster del vídeo)**.
3. Cambiar el archivo actual por **`mirea-portada-editorial-4k.png`**.
4. Guardar.

| | Ancho | |
|---|---|---|
| Archivo actual | 1 649 px | se estira hasta ~4 000 px en retina → borroso |
| Archivo nuevo | **4 096 px** | cubre la pantalla sin estirarse |

Misma proporción (1,726:1 vs 1,729:1), así que el encuadre no cambia.

---

## Paso 2 — Ampliar la escalera de tamaños

Sin esto, el navegador nunca pedirá más de 2400 px y **la foto de 4K no se
aprovecha**.

Tienda online → Temas → v5 → **⋯ → Editar código**
→ `sections/` → `mirea-hero-lux.liquid`

Buscar esta línea (está sobre la mitad del archivo, dentro de `hx-media`):

```liquid
{{ section.settings.imagen | image_url: width: 2400 | image_tag: loading: 'eager', fetchpriority: 'high', widths: '600, 900, 1200, 1600, 2000, 2400', sizes: '100vw', alt: section.settings.imagen.alt | default: 'Mirea Skin' }}
```

Sustituirla por esta (cambian dos cosas: `2400` → `4096`, y la lista de
`widths` se alarga):

```liquid
{{ section.settings.imagen | image_url: width: 4096 | image_tag: loading: 'eager', fetchpriority: 'high', widths: '600, 900, 1200, 1600, 2000, 2400, 3000, 3600, 4096', sizes: '100vw', alt: section.settings.imagen.alt | default: 'Mirea Skin' }}
```

Guardar.

> Pedir hasta 4096 no rompe nada con archivos pequeños: **Shopify nunca amplía
> una imagen**. Si el archivo mide menos, devuelve el archivo tal cual.

---

## Paso 3 — Mirar y decidir

Vista previa: https://heh7ct-ib.myshopify.com/?preview_theme_id=207099167057

Qué deberías ver:
- Las personas de los extremos **enteras**, no partidas.
- La foto **nítida**, no blanda.
- El telón sigue abriendo al bajar, pero de arriba abajo.

Si te gusta: publicar v5 desde el admin (publicar un tema es manual, yo no
puedo).

---

## Si después del paso 1 sigue viéndose blando

Significaría que `mirea-portada-editorial-4k.png` no es un original de 4K sino
un reescalado del pequeño. **No he podido comprobarlo**: el proxy me bloquea
`cdn.shopify.com` y no he podido descargar el archivo para mirarlo por dentro.

En ese caso hacen falta píxeles de verdad, y las opciones son:

- **A** — subir una foto original de 3000 px o más, en JPG. Coste 0.
- **B** — generar una imagen editorial en alta resolución (consume créditos de
  Higgsfield; te diría el saldo antes de gastar nada).
- **C** — vídeo en bucle en vez de foto. La sección ya lo soporta (campos
  `video` y `video_url`). El movimiento disimula la resolución y queda más
  luxury.

---

## Ajustes nuevos que tienes en el editor

En la sección del hero, bajo **Encuadre del telón**:

- **Franja de apertura** (0–22%, por defecto 12) — cuánto se recorta arriba y
  abajo al empezar. Con **0** no hay telón y la foto se ve entera desde el
  principio. Los lados no se recortan nunca.
- **Zoom al bajar** (0–10%, por defecto 3) — antes era 6 fijo. Cuanto más alto,
  más se amplía la foto y más se nota si el archivo es corto de resolución.
  Si quieres la máxima nitidez posible, ponlo a **0**.
