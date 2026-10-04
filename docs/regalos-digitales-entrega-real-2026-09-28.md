# ¿Se envían de verdad los regalos digitales? · 28-09-2026

Preguntaste si se están enviando los PDF que prometemos con el pedido. Respuesta
corta: **se envía algo y llega, pero no es un PDF.**

## Qué está montado

Dos automatizaciones de Klaviyo, las dos en `live`:

| Flujo | Se dispara | Asunto | Estado |
|---|---|---|---|
| `Mirea · Guía primer pedido >35 · definitiva` (`SMvtLa`) | primer pedido > 35 € | "Tu Guía Mirea PRO Premium está desbloqueada ✦" | live |
| `Mirea · Journal pedido ≥60 · estable` (`VtbF3p`) | pedido ≥ 60 € | "Tu Journal Mirea de 4 semanas ✦" | live |

Las dos salen desde `my.mireaskin@gmail.com`, que es el correo de negocio correcto.

## Qué entregan exactamente

Ninguno de los dos correos lleva un PDF adjunto ni un enlace de descarga.
Los dos llevan un **enlace a una página de la tienda**:

- Guía PRO → `https://mireaskin.es/pages/la-guia`
- Journal → `https://mireaskin.es/pages/mirea-checklist-4-semanas`

He comprobado las dos páginas en el Admin: **existen, están publicadas y tienen
contenido maquetado** (`La guía y el checklist`, publicada el 14-09;
`Mirea Skin Journal · Checklist 4 semanas`, publicada el 19-09). El enlace no
está roto. El correo de la guía además dice "desde la guía podrás guardarla o
imprimirla como PDF", que es honesto: la clienta se lo imprime ella.

Los 5 PDF de rutinas que hay subidos en Archivos desde el 14-09 (Primera vez,
Piel grasa, Piel seca, Piel sensible, Hombre) **no se enlazan desde ninguno de
los dos correos.** Están ahí sin usar.

## Si de verdad ha llegado a alguien

Informe de Klaviyo, últimos 30 días, métrica de conversión `Placed Order`:

| Flujo | Enviados | Entregados | Rebotados | Aperturas | Clics |
|---|---|---|---|---|---|
| Guía primer pedido >35 | 2 | 2 | 0 | 0 | 0 |
| Journal ≥60 | 1 | 1 | 0 | 0 | 0 |
| Primera compra · Mi Mirea | 1 | 1 | 0 | 0 | 0 |

Entrega del 100 %, cero rebotes: el correo sale y entra en la bandeja. Pero
**cero aperturas y cero clics**: nadie ha llegado todavía a abrir la guía. Con
tres pedidos en total el dato no dice nada malo del flujo, solo que aún no hay
volumen. Lo que sí queda descartado es que el correo se esté perdiendo.

## Lo que no cuadra, y es decisión tuya

El flujo definitivo de la guía se puso en `live` hoy a las 10:48. **El pedido
#1004 es del 25-09**: esa clienta no pudo recibir esta versión. Habría que
comprobar si le llegó la versión antigua (`Mirea · Primera compra · Mi Mirea`,
live desde el 22-09, 1 entregado) o si se quedó sin regalo. Si se quedó sin él,
lo suyo es mandárselo a mano, y más tal como ha ido ese pedido.

Y la duda de fondo: si en algún sitio de la tienda prometemos "PDF descargable"
y lo que entregamos es una página web, hay que igualar una cosa a la otra. No he
podido leer la tienda publicada desde aquí —el dominio está bloqueado para mí—,
así que dime qué promete exactamente la ficha o la portada y lo ajusto.
