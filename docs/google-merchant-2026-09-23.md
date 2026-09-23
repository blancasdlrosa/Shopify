# Google Merchant Center: qué pasa con los 440 productos "pendientes"

*23-09-2026 · Claude. Datos leídos de la cuenta 5857344812 (Mirea Skin), últimos 7 días.*

## España

| Destino | Activos | Pendientes | Rechazados |
|---|---|---|---|
| Anuncios de Shopping | **440** | 0 | **0** |
| Fichas gratuitas (free listings) | 218 | **222** | **0** |
| Display | 438 | 0 | 2 |

**Cero rechazados en España.** Los 222 "pendientes" no son un error ni una sanción: son
productos esperando la revisión de Google para las fichas gratuitas, que va por detrás de
la de Shopping y tarda días o semanas. No hay nada que arreglar ahí; se resuelven solos.

## El problema real es otro

En Shopify hay **8.191 productos publicados**. En Merchant Center hay **440**.
Solo llega el 5 % del catálogo.

Eso no es cosa de Google: es la configuración del canal **Google & YouTube** dentro de
Shopify, que está sincronizando un subconjunto. No puedo leerla por API (Shopify exige
el permiso `read_product_listings`, que esta conexión no tiene).

**Hay que mirarlo a mano**: Apps → Google & YouTube → Configuración → qué productos se
sincronizan. Si está limitado a una colección o a un grupo, ampliarlo es lo que más
tráfico gratis puede traer de todo lo que hay pendiente.

## Países donde está todo rechazado

Bulgaria, Croacia, Malta, Liechtenstein y Corea del Sur tienen los 220 productos
rechazados, y Estados Unidos, México, Chile, Colombia, Argentina y Panamá tienen 112-113
rechazados cada uno. Son mercados a los que Mirea no vende. Si se cierran los mercados
"Unión Europea" e "Internacional" en Shopify (o se deja solo España), esos rechazos
desaparecen y la cuenta queda limpia.
