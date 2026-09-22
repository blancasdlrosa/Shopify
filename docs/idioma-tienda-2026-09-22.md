# El idioma de la tienda está mal configurado

22 de septiembre de 2026.

## Lo que he encontrado

**El idioma principal de la tienda es el inglés.** El español está como idioma
secundario, en `/es/`.

```
Inglés   · primario  · publicado
Español  · secundario · publicado
```

Eso no es un detalle técnico. Tiene tres consecuencias, y una de ellas puede ser la
razón por la que los 440 productos llevan semanas parados en Google.

## Consecuencia 1 · todos los enlaces del menú van a /es/

Todos los enlaces del menú principal apuntan a `/es/collections/...`. Es decir:
**cualquiera que navegue por la tienda acaba en la versión traducida**, no en la
original.

Y la versión traducida está mal.

## Consecuencia 2 · la traducción automática ha destrozado los nombres

Alguien (o la app de traducción automática) tradujo el catálogo. El problema es que el
texto original **ya estaba en español**, así que la máquina tradujo español a español —
y por el camino tradujo cosas que nunca se traducen.

Esto es lo que ve un cliente español ahora mismo:

| Lo que pusimos | Lo que ve el cliente en /es/ |
|---|---|
| medicube Triple Collagen Cream · 50 ml | **Crema de triple colágeno medicube · 50 ml** |
| Anua Heartleaf Quercetinol Pore Deep Cleansing Foam | **Espuma de limpieza profunda de poros Anua Heartleaf Quercetinol** |
| **Pack Primera vez** | **Paquete Primera vez** |
| Tipo de producto: `Hidratar` | **Hydrate** |
| Tipo de producto: `Limpiar` | **Clean up** |
| Tipo de producto: `Proteger` | **Protect** |

Dos cosas mal, las dos graves:

1. **Los nombres de producto no se traducen nunca.** Nadie busca "Espuma de limpieza
   profunda de poros Anua". Buscan "Anua Heartleaf Quercetinol". Traducir el nombre
   rompe la búsqueda interna, la de Google y la comparación con otras tiendas.
2. **Los tipos de producto se han traducido del español AL INGLÉS.** En la versión
   española. "Hidratar" aparece como "Hydrate". Eso no tiene ninguna explicación
   razonable: es la traducción automática funcionando al revés porque cree que el idioma
   de origen es inglés.

Y lo peor de todo para el negocio: **"Pack Primera vez" se muestra como "Paquete Primera
vez"**. El test, el blog y todas las fichas dicen "Pack Primera vez". El cliente ve un
nombre distinto del que le acabamos de dar.

## Consecuencia 3 · Google

El sitio se declara en inglés. La URL canónica es la inglesa. Para una tienda `.es` que
vende a España, eso es malo para el posicionamiento, y es un candidato serio a explicar
por qué los **440 productos aprobados llevan semanas en PENDING para España**: Merchant
Center compara el idioma declarado del sitio con el país de destino.

No lo puedo afirmar al 100% desde aquí. Pero es la primera cosa que yo miraría.

## Lo que ya he arreglado

He borrado las traducciones automáticas de **título** y **tipo de producto** de los **15
packs activos**. Son los productos que aparecen en el test, en el blog y en el menú, y
los que tienen nombre propio. Comprobado: ya no hay "Paquete Primera vez".

No he tocado las descripciones traducidas, porque en los ~7.560 productos que vinieron
del proveedor **la descripción original sí está en inglés**, y ahí la traducción sí
suma. Borrarlas dejaría el catálogo en inglés, que es peor.

## Lo que NO he hecho, y por qué

**Cambiar el idioma principal de la tienda a español.** Es el arreglo de raíz y es lo que
hay que hacer, pero cambia todas las URLs de la tienda, la canónica y el hreflang de
golpe. Eso es exactamente el tipo de cambio que puede hacer daño en producción si se hace
en mal orden, y no lo hago sin que Blanca lo decida.

**Borrar las traducciones de título de los otros 7.700 productos.** Es lo correcto, pero
son 7.700 escrituras. Antes de hacer una operación de ese tamaño quiero que esté decidido
el orden.

## El orden correcto, si Blanca da el visto bueno

1. **Borrar las traducciones automáticas de `title` y `product_type` de todo el
   catálogo.** Los nombres de marca vuelven a ser los nombres de marca.
2. **Cambiar el idioma principal a español** en Configuración → Idiomas de la tienda.
   A partir de ahí, `mireaskin.es` sirve español y el `/es/` sobra.
3. **Revisar Merchant Center** a los pocos días, a ver si los 440 se mueven de PENDING.
4. Dejar el inglés como idioma secundario si se quiere vender fuera, pero traducido
   *desde* el español, que es como debe ser.

El paso 2 lo tiene que hacer Blanca desde el panel: Configuración → Idiomas → junto al
español, "Cambiar idioma predeterminado".

## Nota aparte · las descripciones en inglés

Al margen de todo esto, **unos 7.560 productos tienen la descripción en inglés**, tal y
como vino del proveedor. Cosas como *"Provides moisturizing skin with lowered temperature
for better makeup adhesion"*. Solo los 178 del feed de Google tienen ficha escrita.

Eso no es un fallo de configuración, es trabajo pendiente, y es mucho. Pero conviene
saberlo antes de montar un chat con IA: un asistente que lea esas fichas va a contestar
en inglés y sin saber para qué sirve el producto.
