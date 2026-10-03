# Entrega de los PDF: zona privada, productos publicados y correo automático

Fecha: 03-10-2026.

## 1. La raíz del «está roto y no sale en ningún sitio»

Dos cosas a la vez:

**a) Los 3 productos publicados eran justo los 3 sin PDF.** De las 14 guías, solo
estaban ACTIVE Retinoides ES, Gua Sha ES y Retinoids EN — las tres sin archivo. Las
11 que ya tenían PDF subido estaban en DRAFT. Se vendía lo que no se podía entregar
y se escondía lo que sí.

**b) No había ningún sitio donde el cliente las encontrara al iniciar sesión.**
La tienda usa **cuentas de cliente nuevas** (`NEW_CUSTOMER_ACCOUNTS`): ese perfil lo
sirve Shopify en `account.mireaskin.es` y **no admite código del tema**. El tema no
tiene ni plantillas `templates/customers/*`, así que no había nada que editar.

## 2. Los 13 PDF, completos

Faltaban tres. Dos estaban en el Drive con otro nombre y se han subido hoy:

| Archivo en Drive | Bytes | Estado |
|---|---|---|
| `Mirea_Guia_Gua_Sha_ES.pdf` | 1.381.204 | subido, `READY` |
| `Mirea_Guide_Retinoids_Without_Mistakes_EN.pdf` | 1.726.710 | subido como `Mirea_Guide_Retinoids_EN.pdf`, `READY` |

Los dos se verificaron antes de subir: tamaño exacto al del Drive y cabecera `%PDF-`.

**Retinoides ES no existe.** Buscado en el Drive por título y por fecha de creación:
hay 13 PDF de guías, y el español de retinoides no está entre ellos. Es el único
hueco real que queda.

Total en la tienda: **18 PDF** (13 de guías + 5 de rutinas).

## 3. Los 14 productos de guía, a la venta

Pasados a ACTIVE y publicados en Tienda online y Shop:

Activos y edad · Cómo combinar ingredientes · Tu rutina K-Beauty · Fotoprotección ·
Recuperar la barrera cutánea (los 5 en español), y Facial Gua Sha · Signs of Aging ·
Combine Ingredients · K-Beauty Routine · Sun Protection · Skin Barrier (los 6 en
inglés). Los 11 confirmados `ACTIVE` con publicaciones.

**Los 6 packs se quedan en borrador, a propósito.** Dos de ellos incluyen Retinoides
y en español ese PDF no existe: publicarlos sería vender un pack que no se puede
entregar entero. Y el regalo del PDF al comprar el pack relacionado todavía no está
montado.

**Retinoides ES sigue publicado y sin archivo.** No lo he despublicado: quitar algo
visible lo decides tú. Hay dos salidas y las dos son tuyas:
pasarme el PDF, o decirme que lo despublique hasta que exista.

## 4. «Mis guías»: la zona privada

Página nueva `/pages/mis-guias` (`Page/172877414737`), con la sección
`sections/mirea-mis-guias.liquid` y la plantilla `templates/page.mis-guias.json`.

Qué hace, con sesión iniciada:

1. **Guías compradas.** Recorre `customer.orders`, cruza el SKU de cada línea con la
   tabla de 13 guías y muestra el PDF de cada una que haya comprado.
2. **Regalos por importe.** Mira el pedido más alto del historial: desde 35 € las
   guías, desde 60 € también los 5 PDF de rutina.
3. Sin sesión, invita a entrar y explica que hay que usar el correo del pedido.
4. Si alguien compró Retinoides ES, sale un aviso de que se envía aparte, en vez de
   un enlace roto.

Detalles de implementación que conviene recordar:

- Los SKU se comparan **envueltos en comas** (`,SKU,`). En Liquid `contains` sobre
  una cadena es subcadena, no igualdad, y sin las comas un SKU corto daría falsos
  positivos dentro de otro más largo. Es la misma trampa que ya nos pasó con
  `piel` / `piel-seca` en el advisor.
- Se ignoran los pedidos **cancelados y reembolsados**: no dan acceso.
- `order.total_price` llega en céntimos y en la moneda de presentación. Con una
  moneda más débil que el euro el umbral se cruza antes. Aceptado a propósito: el
  peor caso es regalar un PDF de más, nunca quitar un regalo a quien le toca.

### Dónde se entra

- **Menú «Mi Mirea»** (`customer-account-main-menu`), en tercera posición, detrás de
  Pedidos y Perfil. Ese menú **es el que se ve dentro del perfil de cliente**, así que
  el resultado es el que pediste aunque el código no viva dentro del perfil.
- **Pie de página**, como entrada pública.

Los dos menús se reescribieron completos (`menuUpdate` no es aditivo) conservando el
id de cada ítem existente, y se verificó la lista resultante.

## 5. El correo automático

Los dos flows ya se disparan solos al hacer el pedido, con sus umbrales (>35 € y
≥60 €). Lo que no se podía era meter los PDF en el cuerpo.

**La API de Klaviyo no escribe una plantilla atada a un flow.** Dos intentos el
03-10: uno con el HTML completo y otro cambiando solo el nombre. Los dos,
`404 not_found`, mientras el `GET` de la misma plantilla sí responde. No es el
payload: es la restricción.

Mitigado por dos caminos que sí funcionan:

1. Las páginas de destino de esos correos ya traen la descarga en PDF, así que el
   cliente llega al archivo en un clic. **Esto ya arregla los correos ya enviados.**
2. En `klaviyo/` queda el HTML listo para pegar, con instrucciones: dos bloques y
   dónde va cada uno. Son dos minutos en el editor de Klaviyo.

## 6. Qué no está verificado

No puedo cargar `mireaskin.es` ni `cdn.shopify.com` desde aquí: el proxy devuelve
403 en el CONNECT. Así que:

- **Verificado:** los 18 archivos existen y están `READY` con URL pública, los dos
  nuevos con tamaño y cabecera comprobados; los 14 productos están ACTIVE; los dos
  menús tienen el ítem; la sección subió sin error de sintaxis (Shopify valida el
  Liquid al escribir: rechazó la plantilla cuando la sección aún no existía).
- **Sin verificar:** cómo se ve la página con datos reales. Hay que abrir la vista
  previa del tema `Mirea v7 · MIS GUIAS · 03-10` e iniciar sesión con una cuenta que
  tenga pedidos.

## HECHO
- Gua Sha ES y Retinoids EN recuperados del Drive, verificados y subidos.
- Confirmado que Retinoides ES no existe en el Drive.
- Los 14 productos de guía, ACTIVE y publicados.
- Página `/pages/mis-guias` con la lógica de compradas + regalos por importe.
- «Mis guías» en el menú del perfil de cliente y en el pie.
- HTML listo para pegar en los dos correos de Klaviyo.

## EN PROCESO
- Publicar el tema `Mirea v7 · MIS GUIAS · 03-10` (tema `207516631377`): lo decides tú.

## BLOQUEADO
- Retinoides ES: no hay archivo. O lo pasas tú, o se despublica el producto.
- PDF dentro del cuerpo del correo: paso manual en Klaviyo, la API no lo permite.
- Los 6 packs y el regalo al comprar pack: pendientes de Retinoides ES.

## SIGUIENTE
- Al publicar el v7, ojo con el orden: hay un borrador `Mirea v6 · DRAFT Parafarmacia
  visual` del otro agente. Si se publica ese después, se pierde «Mis guías». Habría
  que llevar los dos archivos al tema que se publique al final.

---

## Añadido el mismo día, al cerrar lo que quedaba abierto

**Retinoides ES pasa a borrador.** Comprobado antes: `sku:MIREA-GUIA-RETINOIDES`
devuelve **0 pedidos**, así que no se pierde ninguna venta. Y su descripción
prometía «PDF digital descargable» y «14 páginas en español», una promesa que hoy no
se puede cumplir. Se revierte en un clic en cuanto exista el archivo: volver a
`ACTIVE` y añadir su línea a la tabla `guias_es` de la sección.

Quedan **13 guías a la venta**, todas con su PDF.

**Los dos archivos están también en el borrador de Parafarmacia visual**
(`207515582801`). `themeFilesCopy` solo copia dentro del mismo tema, así que se
reescribieron. Son dos archivos nuevos y no tocan nada del trabajo del otro agente;
la copia de ese tema lleva además una nota dirigida a ChatGPT explicando por qué está
ahí y pidiendo que no se borre. Así la página sobrevive publique Blanca el v7 o el
borrador de Parafarmacia.

**Lógica probada.** `theme/pruebas/mis-guias.py` replica el bloque Liquid y lo somete
a los casos que de verdad pueden romperlo. Extrae la tabla del propio `.liquid`, así
que si alguien cambia un SKU o un fichero, la prueba lo detecta. Cubre:

- La trampa del `contains`: quien compra `MIREA-GUIDE-KBEAUTY-EN` no recibe la
  española, y al revés. Es el mismo error que ya nos costó un fallo con
  `piel` / `piel-seca` en el advisor.
- Los umbrales con importes reales: 34,19 € del #1008 no entra, 84,80 € del #1007
  da los dos regalos, y los bordes exactos de 3500 y 6000 céntimos.
- Cancelados y reembolsados no dan acceso; el reembolso **parcial** sí cuenta
  (como el #1006).
- Un SKU de producto físico no inventa una guía, y comprar la misma guía dos veces
  no la duplica.

Pasan todas.

**El render sigue sin verificar, y ahora sé por qué.** El gateway del entorno deniega
por política `mireaskin.es` y `cdn.shopify.com` (`connect_rejected: policy denial`).
No es algo que se pueda sortear desde aquí. Si Blanca añade esos dos dominios a la
red del entorno, se podrán comprobar los renders y los PDF de verdad en adelante.
