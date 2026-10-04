# ¿Llega de verdad un pedido? Auditoría de la cadena completa

22 de septiembre de 2026. Comprobado con datos reales de la tienda, no a ojo.

## El resumen

La cadena funciona **salvo un producto que estaba roto**, que ya he arreglado. Pero hay
una cosa que ninguna auditoría técnica puede comprobar por ti y que explico al final.

## Lo que he comprobado y está bien

| Qué | Estado |
|---|---|
| Dominio `mireaskin.es` con SSL | ✅ |
| Moneda EUR, zona horaria Europe/Madrid | ✅ |
| Mercado principal España, activo. UE e Internacional activos | ✅ |
| Precios con IVA incluido (correcto para venta a consumidor en España) | ✅ |
| Monederos digitales activos: Shop Pay, Apple Pay, Google Pay | ✅ |
| Configuración inicial de la tienda completada (`setupRequired: false`) | ✅ |
| **7.726 de 7.738 productos activos tienen stock** | ✅ |
| Tarifas de envío a España, UE e Internacional | ✅ existen y se devuelven |

Que Apple Pay y Google Pay estén activos indica que **Shopify Payments está funcionando**:
esos monederos no aparecen si la pasarela no está activa.

Solo **12 productos activos** están sin stock, y son de marcas secundarias. No hay ningún
producto importante bloqueado.

## Lo que estaba roto (arreglado)

### El Pack Colágeno + AGE-R no se podía comprar

El **Pack Colágeno medicube + dispositivo AGE-R (304,90 €)** estaba marcado como producto
**que no necesita envío**, como si fuera un producto digital.

Lo comprobé simulando un pedido real a Madrid: el cálculo devolvía **cero tarifas de
envío**. Eso en el checkout significa *"No hay métodos de envío disponibles para tu
dirección"* y **el pedido no se puede terminar**. Era el producto más caro del catálogo.

Arreglado: marcado como producto físico. Vuelto a simular el mismo pedido y ahora sí
devuelve tarifa. Comprobado, no supuesto.

Revisé los otros 17 packs y una muestra de 20 productos del feed de Google: todos
correctos. El fallo estaba aislado en ese producto.

## Lo que NO está roto pero te está costando dinero

### Envío gratis desde 35 €, y el 90 % de los pedidos pasa de 35 €

Está activo el descuento automático **"Envío gratis España desde 35 €"**.

Los packs cuestan entre 62,90 € y 304,90 €. Un pedido medio de dos o tres productos pasa
de 35 € sin esfuerzo. Es decir: **casi todos los envíos de España salen gratis**, y el
coste real lo pagas tú.

### Y además las bandas de peso de España están todas al mismo precio

El perfil de envío general tiene cuatro bandas para España:

| Peso | Precio configurado |
|---|---|
| 0 – 0,3 kg | 3,99 € |
| 0,3 – 0,6 kg | 3,99 € |
| 0,6 – 1,2 kg | 3,99 € |
| más de 1,2 kg | 3,99 € |

Las bandas existen pero nadie les puso precios distintos. Lo comprobé simulando un carrito
de 1,2 kg y el Pack Colágeno de 1,8 kg: los dos salen a 3,99 €.

**Esto anula el trabajo que hice con los pesos de los packs.** Les puse el peso real
precisamente para que cada uno pagara su banda, y da igual, porque las cuatro cuestan
lo mismo. Lo digo porque fue trabajo mío y no sirvió de nada.

Para comparar, las bandas de la UE **sí** están bien escalonadas: 8,99 / 14,99 / 22,99 /
32,99 €. Y existe un segundo perfil, `Mirea · Korealy margen protegido`, con bandas
correctas (6,99 / 11,99 / 18,99 / 27,99 €) que **casi no tiene productos asignados**: los
packs y los productos curados están todos en el perfil general.

**Esto no lo he tocado.** Cambiar precios de envío es una decisión comercial tuya, no un
error que corregir. Los números para decidir están abajo.

### Lo que cuesta de verdad

Con un pack de 84,90 € y 1,1 kg:

- Si tu margen bruto es del 20 % → te quedan ~17 €.
- Envío real de 1,1 kg en España con una agencia: entre 4 y 6 €.
- Comisión de Shopify Payments: ~1,50 €.
- **Te quedan entre 9 y 11 €.**

Con los productos que están a coste × 1,2 (margen bruto del 16,7 %), el mismo cálculo
deja **entre 6 y 8 €** por pedido. Y eso sin contar devoluciones ni el coste de traer la
mercancía de Corea.

Sobrevive, pero es estrecho. Tres opciones, por orden de lo que yo haría:

1. **Subir el umbral de envío gratis de 35 € a 55 o 60 €.** Es el cambio más rentable y
   además sube el pedido medio, porque la gente añade producto para llegar. Un cambio,
   treinta segundos.
2. **Escalonar las bandas de España** (por ejemplo 3,99 / 4,99 / 6,99 / 8,99) para que un
   pedido pesado no viaje al precio de uno ligero.
3. Dejarlo como está y asumirlo como coste de captación mientras no haya ventas. Es
   defendible ahora mismo, pero no cuando empiece a entrar volumen.

Dime cuál y lo hago.

## Lo que hay que mirar y no puedo comprobar yo

### El IVA sale a 0 en el cálculo

Al simular pedidos, el impuesto sale **0,00 €**. Con precios que ya llevan el IVA dentro
esto puede ser normal en este tipo de cálculo, pero conviene que entres en
**Configuración → Impuestos y derechos** y compruebes que España está dada de alta con
el 21 %. Si no lo está, estás declarando mal.

Además, **"cobrar impuestos sobre el envío" está desactivado**. En España el transporte
forma parte de la base imponible de la venta y lleva el mismo IVA que el producto. Esto
es materia fiscal y no lo toco yo: pregúntaselo a tu gestoría y que te diga qué marcar.

### Y lo más importante de toda esta auditoría

**Nunca se ha cobrado una tarjeta en esta tienda.**

Los tres pedidos que había eran tuyos, y al revisarlos antes de borrarlos vi lo siguiente:

| Pedido | Qué era |
|---|---|
| #1001 | Pedido de prueba de Shopify (`test: true`) — no mueve dinero real |
| #1002 | Manual, pago pendiente — no se cobró tarjeta |
| #1003 | Manual, pago pendiente — no se cobró tarjeta |

Ninguno pasó por la pasarela de pago. Todo lo demás lo puedo verificar con datos, pero
**que la tarjeta se cobre de verdad y que el dinero llegue a tu banco solo se comprueba
comprando**.

### Paso a paso, tardas diez minutos

1. Entra en mireaskin.es desde el móvil, en modo incógnito (para que no te trate como
   administradora).
2. Añade **un producto barato**, de menos de 35 €, para que el envío no salga gratis y se
   pruebe también el cobro del envío.
3. Ve al checkout y **paga con tu tarjeta real**. No uses el modo de prueba: el modo de
   prueba no demuestra nada sobre el cobro real.
4. Comprueba, en este orden:
   - Llega el **correo de confirmación de pedido** al comprador. Mira también la carpeta
     de spam, y fíjate en desde qué dirección llega.
   - El pedido aparece en **Shopify → Pedidos** marcado como **Pagado**, no como pendiente.
   - En **Finanzas → Pagos** aparece el cobro y una fecha prevista de transferencia a tu
     banco.
5. Cuando lo hayas comprobado, **reembólsate** el pedido desde el panel y cancélalo.

Si algo de esos cuatro puntos falla, dímelo y lo miramos. Si van los cuatro, la tienda
cobra de verdad y podemos dejar de dudar de eso para siempre.
