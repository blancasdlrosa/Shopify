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

## Artículos baratos: comprobado, NO son una pérdida

**Corrección de una afirmación anterior mía.** Escribí que un pedido de una
sola pieza de 3,95 € "no cubre ni la comisión de Shopify". **Era falso.** Lo
razoné como si el envío fuera gratis, y no lo es: en esta tienda el envío se
cobra **por peso, no por importe del pedido** (verificado en el perfil de
envíos `147793248593`), y el único envío gratis es el automático de España
desde 69 €. Quien compra una sola pieza barata paga sus 4,99 € de envío.

Lo que sí apareció al comprobarlo: **la tienda tiene `taxesIncluded: true`**,
los precios llevan IVA dentro. El margen real es menor del que yo citaba.

Pedido de **una sola unidad**, España peninsular, tramo 0–0,3 kg (envío 4,99 €):

| PVP | IVA (21%) | Coste | Cobras | Margen neto | Queda para envío real + comisión |
|---|---|---|---|---|---|
| 3,95 € | 0,69 | 2,00 | 8,94 € | 1,26 € | **6,25 €** |
| 5,95 € | 1,03 | 3,00 | 10,94 € | 1,92 € | **6,91 €** |
| 7,95 € | 1,38 | 4,00 | 12,94 € | 2,57 € | **7,56 €** |
| 8,95 € | 1,55 | 4,50 | 13,94 € | 2,90 € | **7,89 €** |
| 9,95 € | 1,73 | 5,00 | 14,94 € | 3,22 € | **8,21 €** |

Son 153 variantes del lote por debajo de 10 €.

**Conclusión: sale ganando en todos los tramos**, siempre que el coste real de
un paquete pequeño nacional se quede por debajo de ~5,85 €.

**El dato que falta:** cuánto cuesta de verdad un envío nacional pequeño. No
consta en ningún sitio del repo y **no se inventa**. Con ese número el cálculo
queda cerrado.

Decisión de Blanca (29-09): los precios se quedan como están. Sin mínimo de
pedido, sin despublicar nada.
