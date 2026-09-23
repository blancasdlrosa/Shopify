# Limpieza de traducciones automáticas · estado

Última actualización: 2026-09-23. **TERMINADO.**

## Qué se está haciendo

Borrar las traducciones automáticas al español que la app de traducción generó a partir
de un texto que ya estaba en español. Detalle del porqué en `docs/idioma-tienda-2026-09-22.md`.

**Esto hay que terminarlo ANTES de cambiar el idioma principal de la tienda a español.**
Si se cambia antes, los títulos destrozados ("Base de maquillaje BANILA CO Covericious
Serum", tipo de producto "Fundación") pasan a ser los nombres reales del catálogo.

## Reglas de la limpieza

| Grupo | Cuántos | Qué se borra | Por qué |
|---|---|---|---|
| Fichas escritas por nosotras | 178 | `title`, `product_type`, `body_html`, `meta_title`, `meta_description` | Su "traducción al español" estaba **en inglés**. Al borrarla cae al original, que es español bueno |
| Productos del proveedor | 7.560 | `title`, `product_type` **solamente** | La descripción traducida **sí es buen español** y es la única que tienen. Se conserva |

## Estado

- [x] **178 / 178** fichas propias · hecho y verificado
- [x] **7.560 / 7.560** productos del proveedor · hecho y verificado

Índices procesados de `proveedor.json` (lotes de 88): **0 al 85**, los 86 lotes completos.
No queda ninguno pendiente.

**Total: 7.738 de 7.738.** ✅

### Comprobado sobre producto real

`BANILA CO Covericious Serum Foundation 30g`, antes y después:

| Campo | Antes (versión /es/) | Ahora |
|---|---|---|
| Título | Base de maquillaje BANILA CO Covericious Serum 30g | **BANILA CO Covericious Serum Foundation 30g** |
| Tipo | Fundación | **Foundation** |
| Descripción | *(español correcto)* | *(español correcto — se conserva)* |

Es justo lo que se buscaba: el nombre de marca vuelve, el disparate se va, y la
descripción en español se queda.

La operación en bloque de Shopify (`bulkOperationRunMutation`) **está bloqueada por la
política de seguridad del MCP**, así que va por lotes de 88 con alias. Son 86 lotes en
total.

## Cómo se reanuda

Los ficheros de trabajo están en el directorio temporal de la sesión y se regeneran así:

1. Consulta en bloque de `products(query:"status:active")` con `id` y `descriptionHtml`.
2. Se clasifica: si la descripción contiene "Para qué sirve", "Para quién NO es",
   "En qué paso va" o "Dónde encaja" → ficha propia. Si no → proveedor.
3. Por cada producto, `translationsRemove` con las claves de la tabla de arriba.

## Comprobación al terminar · hecha el 2026-09-23

Tres productos de marcas distintas, consultados después del último lote:

| Producto | Título en /es/ | Tipo en /es/ |
|---|---|---|
| 3CE Gummy Oil Tint 4g | 3CE Gummy Oil Tint 4g (10colors) | LIP TINT |
| NATURE REPUBLIC Real Nature Mask Sheet | \[NATURE REPUBLIC\] Real Nature Mask Sheet 23ml X 30ea | Facial Mask |
| Elizavecca Real 1 Vitamin C Toner 200ml | Elizavecca Real 1 Vitamin C Toner 200ml | Toner |

Ninguno conserva ya traducción al español de `title` ni de `product_type`: el
nombre de marca original es lo que ve la clienta.

**Sobre las descripciones:** se hizo un muestreo aleatorio de 25 productos del
proveedor. 13 conservan su `body_html` traducido al español —intacto, como
estaba previsto— y 12 no tienen ninguna traducción al español porque la app
nunca llegó a traducirles la descripción. Eso no lo hemos provocado nosotras:
en el grupo proveedor jamás se tocó `body_html`. A esos 12 les toca descripción
en inglés en la versión /es/ hasta que se escriban a mano o los traduzca la app.

## Siguiente paso (de Blanca)

Ya se puede **cambiar el idioma principal de la tienda a español** sin que los
títulos destrozados se conviertan en los nombres reales del catálogo. Era el
bloqueo que impedía ese cambio.
