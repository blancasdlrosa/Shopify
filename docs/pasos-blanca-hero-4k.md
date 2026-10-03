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

---

# ACTUALIZACIÓN · 28-09-2026 (tras ver el preview de v5)

Al quitar el recorte lateral aparecen **bandas oscuras verticales** en el hero.
Blanca: *"fatal mira esos cortes en negro"*.

## Qué son

El recorte del 14% que había antes **estaba tapando los bordes exteriores** de
la foto. Cortaba las caras (el problema original), pero de paso escondía los
filos. Al quitarlo, los filos quedan a la vista.

Y hay algo más de fondo: **la foto son cuatro fotos distintas pegadas**, cada
una con su propio fondo. Las costuras alternan:

| Entre | Banda |
|---|---|
| pelirroja ↔ asiática | oscura |
| asiática ↔ morena | clara |
| morena ↔ rubia | oscura |

Esas costuras están **dentro del archivo raster**, en mitad de la imagen.
Ningún `clip-path` las quita: recortar solo actúa en los bordes.

## Parche para los bordes exteriores (no para las costuras)

En `sections/mirea-hero-lux.liquid`, cambiar el `0%` por `3%`:

En el archivo la línea está escrita con la variable Liquid, **no** con el 12
ya resuelto. Es la **línea 76**, y literalmente pone:

```liquid
clip-path: inset(var(--hx-mask, {{ recorte }}%) 0% round 2px);
```

Cambiar solo el `0%` por `3%`, dejando `{{ recorte }}` intacto:

```liquid
clip-path: inset(var(--hx-mask, {{ recorte }}%) 3% round 2px);
```

`{{ recorte }}` es el control *Franja de apertura* del editor. El `3%` es un
margen lateral fijo.

3% son ~60 px por lado: se come el filo sin llegar a las caras. El 14%
original se comía 282 px, que es por lo que las partía. Margen útil: 2–5%.

Nota: con este cambio, el JS sigue animando solo el eje vertical
(`--hx-mask` lleva un único porcentaje). El 3% horizontal es fijo y no se
anima — es un margen de limpieza, no parte del telón.

## La conclusión honesta

La foto no da para un hero a pantalla completa. Dos defectos que el CSS no
arregla: **1649 px de ancho** y **costuras entre las cuatro fotos**.

Orden recomendado, todo sin coste:

1. **Poner el archivo de 4K** (`mirea-portada-editorial-4k.png`). 10 segundos.
   Si es una versión limpia, resuelto. Si es el mismo collage en grande, al
   menos deja de verse borroso.
2. **Si siguen las costuras: una sola protagonista.** Fondo continuo, ≥3000 px.
   El collage de cuatro se lee barato precisamente por las costuras.
3. **Si no hay esa foto: vídeo en bucle.** La sección ya lo soporta (`video` /
   `video_url`). Es la opción que mejor resultado da con menos material.

## Por qué no lo he hecho yo

`themeFilesUpsert` quedó bloqueado por la política del MCP a mitad de sesión:
primero para `templates/index.json`, después también para los `.liquid` del
mismo tema borrador `207099167057` — aunque minutos antes me hubiese dejado
escribir dos veces ese mismo archivo en ese mismo tema.

---

# CIERRE · 28-09-2026 · la conclusión

Tras poner el archivo de 4K, las bandas negras siguen. **El 4K es el mismo
collage**, con los bordes irregulares en negro de cada panel quemados dentro
del archivo. Más nítido, pero igual de roto.

## Error de criterio por mi parte

Ofrecí dos rondas de parches de CSS (`inset(… 0%)`, luego `inset(… 3%)`)
cuando el defecto estaba en la imagen desde el principio. Lo señalé en la
primera respuesta, pero debí insistir en cambiar la foto en vez de seguir
puliendo el recorte. Los parches del recorte lateral **sí** eran correctos y
necesarios — las caras ya no se parten — pero no resuelven lo que Blanca
estaba viendo.

## Material disponible, comprobado

| Vía | Estado |
|---|---|
| Vídeo en la tienda | **Ninguno.** `files(query: "media_type:VIDEO")` devuelve 0 |
| Higgsfield | **Plan gratuito, 0 créditos.** Generar cuesta dinero |
| Escribir en el tema por API | **Bloqueado.** `themeFilesUpsert` refusado también para el borrador |

Es decir: las tres vías que había propuesto están cerradas. Queda una.

## La salida: banco de imágenes gratuito

Unsplash y Pexels: gratis, uso comercial, sin atribución obligatoria,
originales de 4000–6000 px.

1. unsplash.com o pexels.com
2. Buscar: `korean skincare`, `beauty editorial`, `skincare routine face`,
   `glowing skin portrait`
3. Filtrar **horizontal**, descargar el tamaño máximo
4. Criterios: **una sola protagonista**, fondo continuo, zona vacía a la
   izquierda o abajo para que respire el texto blanco
5. Shopify → Contenido → Archivos → subir → seleccionarla en el hero

## Alternativa si se quieren conservar esas caras

Recortar el 4K a **un solo panel** (el de la chica aplicándose crema es el más
limpio) con Vista Previa del Mac: abrir → seleccionar → ⌘K → guardar copia.
Resultado: ~1024 × 2373 px, limpio y sin costuras, pero **vertical**. Sirve
para móvil, no para el hero de escritorio a pantalla completa.

## Lo que queda hecho y es bueno

El arreglo del recorte lateral (`inset(N% 0%)` en vez de `inset(N%)`) sigue
siendo correcto y hay que conservarlo, sea cual sea la foto: evita que el
telón parta por la mitad a quien esté en los extremos del encuadre.
