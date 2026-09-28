# Envíos por país: diseño propuesto

**Fecha:** 28-09-2026 · **Autor:** Claude
**Decisión de Blanca:** seguir siendo internacional, configurando el envío según
el país. Nada de cerrar mercados.

**No se ha modificado ninguna tarifa.** Esto es una propuesta.

---

## Punto de partida: lo que ya está bien

Las tarifas actuales **ya son por peso**, no por importe del pedido. Eso es lo
correcto y no hay que rehacerlo:

| Tramo | España | UE | Internacional |
|---|---|---|---|
| 0 – 0,3 kg | 4,99 € | 8,99 € | 12,99 € |
| 0,3 – 0,6 kg | 7,99 € | 14,99 € | 19,99 € |
| 0,6 – 1,2 kg | 10,99 € | 22,99 € | 28,99 € |
| > 1,2 kg | 18,99 € | 32,99 € | 39,99 € |

*(En España el tercer tramo va de 0,6 a 1 kg.)*

El problema no es la arquitectura: son **tres zonas para 59 países** y unos
valores que no cubren el coste.

También está bien configurado el descuento **«Envío gratis España desde 69 €»**:
activo, y correctamente limitado **solo a España**.

## El único dato real de coste que tenemos

Del #1005, cuadrado al céntimo contra Shopify:

| | |
|---|---|
| Subtotal tras descuento | 52,92 € |
| Envío cobrado | 8,99 € |
| Descuento `MIREA10` (10%) | −5,88 € |
| Impuestos | 0,00 € |
| Total cobrado | 61,91 € |
| Korealy pide | ≈ 64,15 € |
| **Resultado antes de comisiones** | **−2,24 €** |
| **Resultado con comisiones (~2,9% + 0,25 €)** | **≈ −4,29 €** |

De ahí, coste de envío implícito de Korealy a Portugal para 0,2 kg: **≈ 16,73 €**
(estimado: asume que el IOPE sigue la regla del ×1,24, ya que ese SKU no tiene
coste registrado).

**Cobramos 8,99 €. Cuesta ~16,73 €.** Ese es el agujero.

## Los dos agujeros, por tamaño

1. **El envío**: −7,74 € por pedido en UE tramo 1.
2. **El descuento `MIREA10`**: se llevó 5,88 € de los 11,38 € de margen bruto
   del producto. **Un 10% de descuento sobre un margen del 19,4% es la mitad
   del margen.** Sin ese código, el #1005 habría cerrado en **+1,59 €**.

Conviene decidir sobre `MIREA10` antes que sobre cualquier otra cosa: es el
cambio que más margen recupera y el más fácil de revertir.

---

## Propuesta: de 3 zonas a 6

Agrupadas por **lo que Korealy realmente ofrece**, no por geografía sentimental.

| # | Zona | Países | Por qué van juntos |
|---|---|---|---|
| 1 | **España peninsular** | ES (excl. 07xxx, 35xxx, 38xxx, 51xxx, 52xxx) | Korealy solo sirve cosméticos a península |
| 2 | **UE con Standard DDP** | DE, NL, SE, FR, IT, BE, AT, IE, LU, y resto UE con Standard | DDP publicado: sin sorpresas de aduana para el cliente |
| 3 | **UE sin Standard** | **PT, DK** | Korealy no ofrece Standard: solo Economy o Express, más caros |
| 4 | **Europa no UE** | UK, CH, NO, IS, LI | Fuera de la unión aduanera: aranceles e IVA de importación |
| 5 | **Norteamérica** | US, CA | EE. UU. tiene DDP publicado; Express suma 25 USD + 2 USD/kg |
| 6 | **Resto del mundo** | AU, NZ, JP, KR, SG, HK, TW, MY, TH, PH, AE, SA, QA, KW, IL, MX, BR, AR, CL, CO, PE, UY, CR, PA, DO | Distancia máxima, aduanas dispares, restricciones cosméticas sin verificar |

Excluir los códigos postales **07xxx (Baleares)**, y revisar **35xxx/38xxx
(Canarias)**, **51xxx/52xxx (Ceuta y Melilla)**: territorio aduanero distinto.
Hoy la zona se llama literalmente *"España (península y Baleares)"* y la portada
promete Baleares, que Korealy no sirve para cosméticos.

## Las tarifas: lo que falta

**No voy a inventar los números.** Lo único que tenemos es un punto: 16,73 €
estimados para 0,2 kg a Portugal. Con un solo punto no se construye una tabla
de seis zonas y cuatro tramos.

Lo que hace falta de Korealy, y ya está pedido:

> tabla fechada en USD, por país × peso (0,2 / 0,5 / 0,8 / 1 / 1,5 / 2 kg) ×
> servicio (Standard / Economy / Express), con mínimos, recargos, DDP/DDU,
> aranceles y restricciones cosméticas.

En cuanto llegue, la tabla de tarifas sale de un cruce automático: **los pesos
de los 8.212 productos ya están extraídos** (99,98% de cobertura).

## Fórmula para rellenarla

```
tarifa_zona_tramo  =  coste_Korealy(zona, tramo)  +  colchón
umbral_envío_gratis(zona)  =  (coste_Korealy + colchón + 0,25) / (margen_bruto − 0,029)
```

Con el margen actual del **19,4%**, el umbral de envío gratis para UE tramo 1
saldría en **~105 €**. Hoy está en 69 € y solo para España, que es lo que
salva a España de perder dinero en ese descuento.

## La decisión de fondo

Hay dos palancas y **no se puede evitar elegir**:

**A · Subir el envío cobrado.** Honesto y directo, pero pasar de 8,99 € a ~18 €
en UE hunde la conversión. El envío caro es el primer motivo de carrito
abandonado.

**B · Subir el margen del producto.** El ×1,24 actual (19,4% bruto) no sostiene
envío transfronterizo desde Corea. La referencia del sector está en 55–65%
bruto. Con un 55%, un producto de 30 € deja 16,50 € brutos, que **sí** paga un
envío de 16,73 € con el cliente aportando 8,99 €.

**Mi recomendación: B con algo de A.** Subir el múltiplo es lo que hace viable
todo lo demás — mercados, envío gratis, y publicidad, que hoy es imposible
porque no hay margen del que pagar un CAC. Y de paso retirar o restringir
`MIREA10` mientras el margen siga en 19,4%.

Ninguna de las dos la puedo tomar yo: son precios y son dinero.

---

## Qué se puede hacer ya, sin esperar a Korealy

1. **Decidir sobre `MIREA10`.** Recupera 5,88 € por pedido de 59 €. Reversible.
2. **Separar Portugal y Dinamarca** de la zona UE. No cambia precios todavía,
   pero deja la estructura lista y permite tarifar distinto en cuanto haya datos.
3. **Excluir 07xxx de la zona de España** y corregir el texto de la portada.
   Hoy se promete algo que el proveedor no sirve.
4. **Completar los costes del 78,6% del catálogo.** Sin eso, ninguna zona se
   puede validar producto a producto.
