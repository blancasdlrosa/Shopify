# Auditoría GTIN sobre el catálogo completo

**Fecha:** 28-09-2026 · **Autor:** Claude
**Alcance:** las **12.477 variantes activas**, no una muestra.
**Método:** `bulkOperationRunQuery` + validación local del dígito de control GS1.

---

## CORRECCIÓN de un dato que di antes

El 27-09 informé de una cobertura de GTIN del **6,5%**, a partir de una muestra
de 1.000 productos tomada con cuatro ordenaciones distintas. **Esa cifra era
errónea**: la muestra no era representativa.

**La cifra real sobre el catálogo completo es 0,6%.** Diez veces peor.

## Resultado

| | Variantes | % |
|---|---|---|
| **Sin código de barras** | **12.402** | **99,4%** |
| Con código de barras | 75 | 0,6% |
| — de ellos, GTIN **válido** | **75** | 0,6% |
| — inválido o no es un GTIN | 0 | 0% |
| GTIN duplicados | 0 | — |

Lo poco que hay **está bien**: los 75 códigos pasan la validación del dígito de
control GS1 y ninguno está repetido. No hay que limpiar nada; hay que rellenar.

## Cobertura por marca

Cero en todas las marcas principales:

| Marca | Variantes activas | Con GTIN |
|---|---|---|
| TIRTIR | 568 | 0,0% |
| 3CE | 296 | 0,0% |
| TONYMOLY | 265 | 0,0% |
| BBIA | 258 | 0,0% |
| ETUDE | 218 | 0,0% |
| rom&nd | 212 | 0,0% |
| lilybyred | 210 | 0,0% |
| CLIO | 209 | 0,0% |
| peripera | 203 | 0,0% |

## Qué significa

Google Merchant exige GTIN para los productos que tienen uno asignado por el
fabricante, y la cosmética de marca lo tiene. Sin él, Google desaprueba o limita
la ficha. Esto explica lo que ya medí en la auditoría de canales: **Google tiene
379 productos de 8.212**, pese a estar en publicación automática.

Es decir: **el 95% del catálogo no aparece en Google Shopping**, y la causa
principal está aquí.

## Lo que NO se debe hacer

- **No inventar GTIN.** Regla de Blanca y, además, correcta: un GTIN falso es
  motivo de suspensión de la cuenta de Merchant.
- **No usar el SKU como código de barras.** Los SKU de Korealy (`8390872165`,
  `9126388712`…) tienen 10 dígitos y no son EAN.
- **No marcar `identifier_exists: false` en masa.** Para cosmética de marca que
  sí tiene EAN, declarar que no existe es incumplimiento de política y no
  arregla las desaprobaciones.

## El único camino

**Pedir los EAN al proveedor.** Ya hay un borrador preparado en Gmail
(`r-5827688799193718216`) dirigido a KOREALY. Es la petición de mayor impacto
económico pendiente: desbloquea ~12.400 variantes de golpe.

Conviene pedirlos **en la misma petición que las tarifas y los costes por SKU**,
que son las otras dos cosas que faltan del proveedor. Tres datos, un correo.

## Lección de método

Esto es la segunda vez en esta sesión que una muestra me engaña. Con
`bulkOperationRunQuery` medir el catálogo entero cuesta dos consultas y una
descarga. **No hay excusa para volver a muestrear.**
