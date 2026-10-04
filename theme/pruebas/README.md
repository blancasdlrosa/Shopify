# Pruebas del Mirea Skin Advisor

Comprueban la lógica de recomendación de `theme/sections/mirea-ai.liquid`
sin necesidad de abrir la tienda. Las funciones `tokens`, `price`, `score` y
`choose` se extraen **del propio archivo .liquid**, así que la prueba siempre
mide el código que está publicado, no una copia.

```bash
python3 theme/pruebas/preparar.py     # extrae las funciones y las 11 tarjetas
node theme/pruebas/advisor-combinaciones.mjs
node theme/pruebas/advisor-agotados.mjs
```

- `advisor-combinaciones.mjs` — las 200 combinaciones posibles del formulario
  (5 objetivos × 5 tipos de piel × 2 niveles de pasos × 4 presupuestos).
  Comprueba: no se supera el límite de pasos, no se supera el presupuesto, el
  total coincide con la suma, nunca se propone un producto fuerte a piel
  sensible, nunca se propone un producto excluido para ese tipo de piel y no se
  repite ningún producto.
- `advisor-agotados.mjs` — repite el ejercicio quitando productos del pool, de
  uno en uno y de dos en dos (66 escenarios), para simular roturas de stock.
  Comprueba que no salta ningún error y que sigue saliendo propuesta.

Resultado del 30-09-2026: 200 + 1.650 combinaciones, 0 fallos.

Lo que estas pruebas **no** cubren: el render real de la página. El contenedor
no tiene salida hacia `mireaskin.es` ni hacia el dominio `.myshopify.com`, así
que la vista previa hay que abrirla desde el navegador de Blanca.
