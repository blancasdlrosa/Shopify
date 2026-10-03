# Colecciones sin enlazar · auditoría 2026-09-22

> ## CORRECCIÓN · segunda pasada, 22-09
>
> La primera versión de este documento **estaba mal en dos filas**, y el error era mío.
> Crucé las colecciones contra el menú y contra las plantillas del tema, pero **no contra
> el cuerpo de las páginas ni contra los artículos del blog**. Ahí había enlaces.
>
> Si Blanca hubiera despublicado la lista tal y como estaba, habría creado **tres 404**:
>
> | Colección | La enlazaba | Qué he hecho |
> |---|---|---|
> | `cuidado-capilar` | `/pages/rutinas` y `/pages/marcas` | **Sacada de la lista.** Además la he llenado: 33 → 533 productos |
> | `cuerpo` | `/pages/rutinas` y `/pages/marcas` | **Sacada de la lista.** Llenada: 9 → 369 productos |
> | `proteger` | artículo del blog sobre protector solar | He cambiado ese enlace a `/collections/proteccion-solar`. **Ya se puede despublicar** |
>
> Y de paso encontré **un 404 que ya estaba en vivo**: el artículo *"Por qué cuanto más
> limpias la piel grasa, más grasa produce"* enlazaba a
> `/collections/rutina-piel-grasa-con-granitos`, que **no existe** — el handle real lleva
> un `-1` al final. Corregido.
>
> Cruzado ahora contra: menú principal, menú del pie, plantillas del tema, **las 19
> páginas** y **los 12 artículos del blog**. Las 10 colecciones que quedan en la lista de
> abajo no las enlaza nada.

Cruce de las 113 colecciones contra el menú principal completo y contra las
plantillas del tema en vivo (`index`, `404`, `cart`, `collection`,
`list-collections`, `search`, `footer-group`, `settings_data`).

## Resueltas · ya están en el menú

| Colección | Productos | Dónde |
|---|---|---|
| Accesorios de belleza | 42 | Tecnología y accesorios |
| Higiene | 68 | Cuidado corporal |
| **Cuidado de manos** (creada) | 87 | Cuidado corporal |
| **Cuidado de pies** (creada) | 12 | Cuidado corporal |
| Piel seca | 492 | Piel › Por tipo de piel |
| Piel sensible | 533 | Piel › Por tipo de piel |
| Piel grasa | 148 | Piel › Por tipo de piel |
| Piel mixta | 144 | Piel › Por tipo de piel |

## Para despublicar · verificadas, el tema NO las usa

Restos de una taxonomía vieja por etiquetas `Paso:` y duplicados pequeños de
colecciones grandes que sí están en el menú. Publicadas, sin un solo enlace
entrante. Google las indexa como páginas pobres que compiten contra las buenas.

| Colección | Handle | Productos | La buena equivalente |
|---|---|---|---|
| Tratar | `tratar` | 153 | — (etiqueta `Paso:`) |
| Hidratar | `hidratar` | 61 | Hidratantes · 658 |
| Limpiar | `limpiar` | 43 | Limpiadores · 905 |
| Proteger | `proteger` | 20 | Protección solar · 578 — *enlace del blog ya redirigido* |
| Mascarillas y exfoliantes | `mascarillas-y-exfoliantes` | 34 | Mascarillas · 977 |
| Tónicos y esencias | `tonicos-y-esencias` | 15 | Tónicos y esencias · 562 |
| Mascarillas y tratamientos capilares | `mascarillas-y-tratamientos-capilares` | 14 | Mascarillas (pelo) · 7 |
| Labios | `labios` | 11 | Labios · 325 |
| Champús | `champus` | 7 | Champús · 229 |
| Cuidados sin aclarado | `cuidados-sin-aclarado` | 7 | Sérums, aceites y mists · 104 |

**El MCP de Shopify bloquea `publishableUnpublish`** por política de seguridad, así
que esto se hace a mano: Productos → Colecciones → abrir cada una → sección
Publicación → desmarcar Tienda online. No borrar: despublicar es reversible.

## No tocar

| Colección | Productos | Por qué |
|---|---|---|
| `rutinas` | 19 | **El botón "Ver todas las rutinas" del hero de la home apunta a `/collections/rutinas`.** Si se despublica, ese botón da 404 |
| `frontpage` (Home page) | 7.694 | Técnica de Shopify |
| `novedades-automaticas-mirea` | 8.187 | Técnica |
| `menos-de-20` | 5.103 | Técnica |
| Las 23 `rutina-*` | 4-37 | Accesibles desde `/pages/rutinas`, a propósito |
| `INTERNO ·` (5) | — | Ya sin publicar |

## Decisión pendiente

**`skincare-coreano` · "Todo para la cara" · 439 productos.** Huérfana y no la usa el
tema, pero son 439 productos: demasiados para despublicarla sin que Blanca lo decida.
Solapa con `piel` (3.737).

## Mejora pendiente en el tema

El hero de la home lleva a `/collections/rutinas` (19 productos) cuando debería ir a
`/pages/rutinas`, que es la página con las 23 rutinas. Cambiarlo liberaría además la
colección `rutinas` para poder despublicarla.
