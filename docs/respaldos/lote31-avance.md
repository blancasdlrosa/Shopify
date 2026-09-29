# Lote 31 · precios ×1,80 · CERRADO Y VERIFICADO

**Archivo:** `docs/respaldos/precios-x180-lote31-2026-09-28.csv`
**Total:** 2.411 variantes en **2.161 productos**

## Estado final

| | |
|---|---|
| Productos aplicados | **2.161 de 2.161** (índices 0–2160) |
| Variantes aplicadas | **2.411 de 2.411** |
| Productos pendientes | **0** |
| `userErrors` en todo el lote | **0** |

## Verificación (29-09-2026)

No se da por bueno porque las mutaciones devolvieran `userErrors: []`. Se hizo
la comprobación independiente prometida:

1. `bulkOperationRunQuery` sobre `productVariants { id price }` de toda la
   tienda → **13.096 variantes** exportadas (operación
   `gid://shopify/BulkOperation/10582804070737`, `status: COMPLETED`).
2. Cruce de ese export contra la columna `precio_objetivo_eur` del CSV.

Resultado del cruce:

```
variantes en CSV : 2411
coinciden        : 2411
NO coinciden     : 0
no encontradas   : 0
```

**2.411 de 2.411.** No se ha escapado ninguna.

## Regla aplicada

`precio = coste × 1,80`, redondeado **hacia arriba** al siguiente valor
terminado en `,95`, con guarda `max(precio_actual, objetivo)`: el lote nunca
baja un precio, solo sube los que estaban por debajo del margen.

## Reversión

El mismo CSV lleva `precio_original_eur` de cada variante. Volver atrás es el
mismo procedimiento usando esa columna en vez de `precio_objetivo_eur`, con
`docs/respaldos/lote-precios.py` y `productVariantsBulkUpdate`.

## Pendiente de decisión (Blanca)

Artículos que han quedado en 3,95 / 5,95 / 7,95 €: el porcentaje de margen es
correcto, pero en euros absolutos son 2-3 € por unidad. Un pedido de una sola
de estas piezas con envío nacional a 4,99 € no cubre ni la comisión de Shopify.
Tienen sentido dentro de una cesta, no como pedido suelto. Opciones: mínimo de
pedido, o dejarlos solo como regalo/añadido. Sin tocar hasta que lo decidas.
