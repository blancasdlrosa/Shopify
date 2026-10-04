# Respuestas a lo que preguntaste · 23-09-2026

## «El 3, borrar a mano, dime cómo lo hago»

Es el archivo `assets/guia-mirea-pro.pdf`. Está subido dentro del tema y la API me
bloquea el borrado de archivos de tema. Se hace así, tema por tema:

1. Entra en **Tienda online → Temas**.
2. En el tema que quieras limpiar, pulsa los **tres puntos (⋯) → Editar código**.
3. En la columna de la izquierda, abre la carpeta **Assets**.
4. Busca `guia-mirea-pro.pdf` en la lista.
5. Pulsa los **tres puntos** a la derecha del nombre → **Eliminar archivo** → confirmar.

Hay que repetirlo en **cada tema** donde aparezca, no solo en el publicado: mientras el
archivo esté en un tema, su URL pública sigue funcionando y cualquiera puede descargarse
la guía sin registrarse.

Para comprobar que ha desaparecido de verdad, abre en una ventana de incógnito:
`https://mireaskin.es/cdn/shop/files/guia-mirea-pro.pdf` (o la ruta que te dé el enlace
de la guía). Si da error 404, está bien borrado.

## «El 14 no entiendo» · lo de elegir Standard en Korealy

Cuando Korealy procesa un pedido tuyo, te deja elegir el método de envío. Son tres y los
precios salen de su propia calculadora (país España, por pedido):

| Peso | **Standard** (7-14 días) | Economy (5-7 días) | Express (3-5 días) |
|---|---|---|---|
| 1,0 kg | **17 $** | 18 $ | 36 $ |
| 1,5 kg | **22 $** | 22 $ | 41 $ |
| 2,0 kg | **25 $** | 25 $ | 47 $ |

**Express cuesta el doble.** Como en la tienda le prometes a la clienta 2-3 semanas de
plazo, pagar el doble por que llegue en 3-5 días no te compra nada: llega antes de lo
prometido y tú pierdes entre 14 y 20 $ más en ese pedido.

Por eso: **cada vez que proceses un pedido en Korealy, elige Standard**. Es lo único que
tienes que mirar en esa pantalla. Economy cuesta casi lo mismo que Standard y a veces
más, así que tampoco compensa.

## «El 16, ¿qué problema hay con Judge.me?»

Ninguno técnico: el problema es que **Judge.me no tiene conexión con esta herramienta**.
Puedo entrar en Shopify, en Klaviyo y en Google, pero no en el panel de Judge.me, porque
no hay un conector instalado ni tengo sus credenciales (y no debo pedírtelas).

El cambio en sí son tres clics:

1. **Apps → Judge.me Reviews**.
2. **Settings → Review requests** (o "Email settings" según la versión).
3. Donde pone *"Send review request … days after fulfillment/delivery"*, cambia **14**
   por **40** y guarda.

**Por qué 40 y no 14:** el pedido tarda 2-3 semanas en llegar desde Corea. A los 14 días
la clienta aún no tiene el producto en casa, así que le pides una reseña de algo que no
ha abierto. A los 40 lleva dos o tres semanas usándolo y ya puede decir algo de verdad.

Si prefieres no tocar Judge.me, la alternativa es que monte yo el aviso de reseña en
Klaviyo al día 40 — pero entonces hay que **apagar** el de Judge.me, o la clienta recibe
dos correos pidiendo lo mismo.

## «No quiero vender solo a España» · qué dicen los datos

Miré tu Search Console de los últimos 30 días para ver de dónde viene la gente. Esto es
todo lo que hay:

| País | Impresiones | Clics |
|---|---|---|
| España | 9 | 2 |
| Reino Unido, EE. UU. | 2 cada uno | 0 |
| Argentina, Brasil, Canadá, India, Portugal, Venezuela, Sri Lanka, Azerbaiyán | 1 cada uno | 0 |

**Nueve impresiones en un mes.** Con esto no se puede hacer un análisis de mercados:
no hay datos, hay ruido. Cualquiera que te diga "vende en Alemania porque los datos lo
dicen" se lo está inventando.

Lo que sí se puede decir con fundamento:

**Lo que ya tienes abierto.** Google Merchant Center ya aprueba tus productos sin ningún
rechazo en Francia, Italia, Alemania, Portugal, Países Bajos, Bélgica, Austria, Irlanda,
Grecia y los nórdicos. Ahí no hay barrera técnica.

**Dónde está todo rechazado** (220 de 220 productos): Bulgaria, Croacia, Malta,
Liechtenstein y Corea. Y con 112 rechazos cada uno: EE. UU., México, Chile, Colombia,
Argentina y Panamá. Fuera de la UE el envío desde Corea entra como importación con
aduana propia de cada país, y ahí el cliente se lleva sorpresas en la puerta.

**Mi recomendación, por orden:**

1. **Portugal.** Mismo huso, mismo transporte, mercado pequeño pero cercano, y el idioma
   se resuelve con un clic en Translate & Adapt.
2. **Francia e Italia.** Los dos mercados de K-beauty más grandes de la UE después de
   Alemania, ya aprobados en Merchant Center.
3. **Alemania.** El mayor, pero también el más competido y el más exigente con los plazos
   de entrega. Con 2-3 semanas desde Corea vas a sufrir en las reseñas.
4. **Nunca todavía: América.** Aduanas, plazos larguísimos y ya tienes 112 productos
   rechazados por país.

**Pero antes que cualquiera de esos cuatro:** el problema no es qué país, es que **hoy
pierdes entre 12 € y 20 € en transporte en cada pedido a España**. Vender en Francia
perdiendo dinero es perder dinero más deprisa. Primero la tarifa de Korealy por tramos
de peso, después los mercados nuevos.

**Y antes que nada:** lo fiscal. Vender a otros países de la UE te mete en la ventanilla
única (OSS) desde el primer euro si superas los 10.000 € anuales, y con envío desde
Corea hay además IVA de importación. Está en `docs/iva-alta-autonoma-2026-09-23.md`.
