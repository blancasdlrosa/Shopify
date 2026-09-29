# Lote 31 · precios ×1,80 · punto de avance

**Archivo:** `docs/respaldos/precios-x180-lote31-2026-09-28.csv`
**Total:** 2.411 variantes en **2.161 productos**

## Estado

| | |
|---|---|
| Productos aplicados | **1.379** (índices 0–1378) |
| **Siguiente índice a aplicar** | **1379** |
| Productos pendientes | 782 |
| `userErrors` hasta ahora | **0** |

## Cómo continuar

```
python3 docs/respaldos/lote-precios.py precios-x180-lote31-2026-09-28.csv 1379 40
```

y aplicar cada línea `<product_id>|<variant_id>:<precio>` con
`productVariantsBulkUpdate`, 40 productos por llamada.

**Al terminar:** verificar con un export bulk de los 13.096 precios y cruzarlo
contra el CSV, como se hizo con el lote 30. No dar el lote por bueno sin ese
cruce.

## Reversión

El mismo CSV lleva `precio_original_eur` de cada variante. Volver atrás es el
mismo procedimiento usando esa columna.
