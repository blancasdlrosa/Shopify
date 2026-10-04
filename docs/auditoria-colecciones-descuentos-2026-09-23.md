# Auditoría de colecciones y descuentos · 23-09-2026

Revisión completa de las **113 colecciones** de la tienda y de los **7 códigos de
descuento** activos. Aquí está lo que se ha arreglado, lo que está bloqueado por la
API y lo que tiene que decidir Blanca.

---

## 1. Colecciones duplicadas que nadie enlaza

Comprobado una por una contra **los menús, la portada, las 20 páginas y los 14
artículos del blog**. Estas siete están publicadas, no las enlaza nada, y duplican a
otra colección mucho mejor:

| Colección vieja | Productos | Duplica a | Productos |
|---|---|---|---|
| Tónicos y esencias · `tonicos-y-esencias` | 16 | `tonicos-y-esencias-1` | 814 |
| Champús · `champus` | 7 | `champus-1` | 234 |
| Mascarillas y tratamientos capilares | 14 | `mascarillas-1` | 128 |
| Cuidados sin aclarado | 7 | `serums` | 145 |
| Mascarillas y exfoliantes | 34 | `mascarillas` | 1.047 |
| Labios · `labios` | 17 | `cuidado-de-labios` | 195 |
| Rutina luminosidad · `rutina-luminosidad-1` | 4 | `manchas` | 457 |

El problema no es que estorben: es que Google las indexa como contenido duplicado y
compiten con la colección buena por la misma búsqueda.

### Hecho: las siete redirecciones 301 ya están creadas

Para que ninguna URL antigua acabe en un 404 el día que se despubliquen:

```
/collections/tonicos-y-esencias                 → /collections/tonicos-y-esencias-1
/collections/champus                            → /collections/champus-1
/collections/mascarillas-y-tratamientos-capilares → /collections/mascarillas-1
/collections/cuidados-sin-aclarado              → /collections/serums
/collections/mascarillas-y-exfoliantes          → /collections/mascarillas
/collections/labios                             → /collections/cuidado-de-labios
/collections/rutina-luminosidad-1               → /collections/manchas
```

Mientras la colección siga publicada, la redirección **no hace nada** (Shopify solo
redirige cuando la URL da 404). No rompe nada ahora y entra sola cuando se despublique.

### Pendiente de Blanca: despublicarlas a mano

`publishableUnpublish` **está bloqueado por la política de seguridad del MCP**
("Unpublishing is blocked to prevent accidental storefront catalog removal"), igual que
el borrado de archivos de tema. Hay que hacerlo desde el admin:

> Productos → Colecciones → abrir la colección → en **Publicación**, quitar los cuatro
> canales (Tienda online, Shop, TikTok, Pinterest) → Guardar.

No hay prisa y no es urgente. Cuando se haga, las redirecciones ya están puestas.

---

## 2. Colecciones de la estructura antigua · esto lo decides tú

Estas seis tampoco las enlaza nada, pero **no las he tocado** porque son parte del
relato de marca y puede que quieras recuperarlas en vez de enterrarlas:

| Colección | Productos | Se solapa con |
|---|---|---|
| Limpiar | 44 | Limpiadores (966) |
| Tratar | 160 | Sérums y ampollas (806) |
| Hidratar | 70 | Hidratantes (857) |
| Proteger | 20 | Protección solar (578) |
| Todo para la cara · `skincare-coreano` | 466 | Piel (5.037) |
| Packs y rutinas | 19 | Rutinas (19) |

Limpiar · Tratar · Hidratar · Proteger son los cuatro pasos del método Mirea y salen en
la portada como sección. Tiene sentido **o** enlazarlas desde la portada (y entonces se
quedan), **o** despublicarlas y redirigir a las grandes. Las dos cosas están bien; la
que no vale es dejarlas como están, publicadas y sin que nadie llegue a ellas.

---

## 3. Descuentos

### Arreglado: BIENVENIDA10 se podía usar infinitas veces

`BIENVENIDA10` (10 %, sin mínimo de compra) estaba configurado con **"una vez por
cliente" desactivado**. Cualquier cliente podía meterlo en todos sus pedidos, siempre,
sin límite. Un código que se anuncia como *"10 % en tu primer pedido"* y que en realidad
es un 10 % de por vida es una fuga de margen directa, y con el envío gratis desde 69 €
se junta con el coste de envío.

**Corregido: ahora es un uso por cliente.** Llevaba 1 uso, así que no ha habido daño.

### Pendiente de decisión: hay dos códigos de bienvenida vivos

| Código | Título | Descuento | Mínimo | Usos | Una vez por cliente |
|---|---|---|---|---|---|
| `BIENVENIDA10` | Bienvenida 10% | 10 % | — | 1 | sí (recién puesto) |
| `MIREA10` | Bienvenida Mirea 10% | 10 % | — | 0 | sí |

Hacen exactamente lo mismo. No he desactivado ninguno porque **uno de los dos puede
estar dentro de un correo de Klaviyo ya enviado**, y desactivarlo sería incumplir algo
prometido a una clienta. Hay que mirar en Klaviyo cuál entrega el formulario del pie de
página ("10 % en tu primer pedido") y desactivar el otro.

Lo que sí conviene plantearse, y es decisión comercial tuya: **ninguno de los dos tiene
mínimo de compra**. Un pedido de 20 € con −10 % deja 18 €, y con 4,99 € de envío
cobrados contra 6 $ de coste el margen se queda muy fino. Los cinco códigos de
influencer (`MIREAINF01`–`05`) sí llevan mínimo de 35 €, que es el criterio correcto.

---

## 4. Un aviso para cuando cambies el idioma principal

La barra de anuncios del tema en vivo tiene el texto base **en inglés**:
*"More than 5,000 beauty & care products ✦ Find your routine at Mirea"*. Lo que ven las
clientas españolas es la traducción que registré
(*"Envío gratis en España desde 69 € ✦ Todos los packs Mirea lo llevan incluido"*).

Cuando cambies el idioma principal a español, **revisa que la barra siga diciendo lo del
envío gratis** y no vuelva al inglés. Es de las cosas que se ven en la primera pantalla.
Lo mismo con la página `envios-y-devoluciones`, cuyo título base es *"Shipping &
returns"*.
