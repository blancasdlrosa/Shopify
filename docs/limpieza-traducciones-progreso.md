# Limpieza de traducciones automáticas · estado

Última actualización: 2026-09-22, en curso.

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
- [ ] **792 / 7.560** productos del proveedor

Índices ya procesados de `proveedor.json` (lotes de 88): **0 al 8**. Siguiente lote: **9**
(elemento 792 en adelante).

**Total: 970 de 7.738.**

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

## Comprobación al terminar

Mirar tres productos de marcas distintas y confirmar que:
- El título en español es el nombre de marca original, sin traducir.
- El tipo de producto ya no dice "Fundación", "Clean up", "Hydrate" ni "almohadilla".
- En los del proveedor, la descripción **sigue** en español.
