# Cómo publicar el tema candidato · 27-09-2026

**Tema a publicar:** `Mirea · LUXE + MOTION · Claude+GPT · 27-09`
**ID:** `207048409425`
**Estado:** UNPUBLISHED, verificado, 7 archivos en su sitio

## Por qué lo tienes que hacer tú y no yo

No es una decisión mía ni una duda: **la herramienta lo bloquea**. La mutación
`themePublish` está vetada por la política de seguridad del servidor MCP con este
motivo textual: *"Publishing a theme is blocked — making a theme live must be done
manually in Shopify admin to prevent accidental storefront changes."*

Lo intenté con tu autorización y me lo rechazó. No he buscado otra vía para saltarlo.

## Los pasos

1. Admin de Shopify → **Tienda online** → **Temas**
2. Busca `Mirea · LUXE + MOTION · Claude+GPT · 27-09` en la lista de no publicados
3. **Antes de publicar, dale a Vista previa.** Mira la portada, una ficha de producto
   y una colección. Tarda un minuto y es la única forma de verlo: yo no puedo, el
   proxy de red me bloquea el acceso a mireaskin.es
4. Si te gusta: botón **Publicar**

## Lo que vas a ver, y lo que tendrás que ajustar

**Vas a ver dos héroes apilados en la portada.** Mi sección de motion arriba y el hero
clásico de ChatGPT debajo. Los dos funcionan, no chocan, pero sobra uno.

He hecho que al menos hablen el mismo idioma visual: añadí
`snippets/mirea-luxury-hero-bridge.liquid`, que aplica la tipografía serif y el radio
a cero de la capa de ChatGPT a mi sección. Sin eso, el titular de arriba salía con la
fuente del tema y todo lo de abajo en serif: parecían dos marcas.

**Para quedarte con uno solo** (esto sí lo puedes hacer tú sin riesgo, y es reversible):
Personalizar → en la lista de secciones de la portada, el ojo 👁 de la que no quieras.
Ocultar no borra nada; se vuelve a mostrar con el mismo ojo.

Mi recomendación: oculta el hero clásico y quédate con el de motion, que es el que
pediste. Pero míralos los dos antes.

## Vuelta atrás, si no te gusta

El tema que hay ahora en vivo es `Mirea · MOTION LAB · 27-09 (Claude)`
(`207045329233`) y **no lo he tocado**. Se vuelve publicándolo otra vez desde la
misma pantalla. También sigue intacto `Mirea · FIX tracking Klaviyo · 26-09`
(`206988804433`) como punto anterior.

## Qué hay que hacer inmediatamente después de publicar

**La prueba real de Klaviyo.** Hasta que no esté publicado no se puede hacer, y hasta
que no se haga no se pueden montar los flujos de abandono:

1. Entra en una ficha de producto de la tienda
2. Añádelo al carrito
3. Avísame y compruebo en Klaviyo que han entrado `Viewed Product` y `Added to Cart`
   con los nombres estándar

Si aparecen, monto Browse Abandonment y Cart Abandonment. Si no aparecen, el
diagnóstico estaba incompleto y sigo buscando. **No daré por hecho que funciona sin
ver los eventos.**
