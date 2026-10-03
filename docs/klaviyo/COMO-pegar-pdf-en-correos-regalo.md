# Meter los PDF dentro del cuerpo de los correos de regalo

**Por qué esto es manual.** La API de Klaviyo **no deja escribir una plantilla que
está atada a un flow**. Comprobado el 03-10-2026 con dos intentos: un `PATCH` con
el HTML completo y otro cambiando solo el nombre. Los dos devuelven
`404 not_found: Template with id 'VKkcav' does not exist`, aunque el `GET` de la
misma plantilla funciona. No es un problema del payload: es la restricción.

**Esto NO es urgente.** Las páginas de destino de los dos correos ya tienen la
descarga en PDF, así que el cliente llega al archivo en un clic con los correos
tal y como están. Esto solo quita ese clic.

## Qué hacer

1. Klaviyo → Flows → **Guía PRO Premium · primer pedido >35** (flow `SMvtLa`).
2. Abre el email y entra en el editor de código de la plantilla `VKkcav`.
3. Busca este bloque, que es el botón actual:

```html
<tr><td align="center" style="padding:26px 34px;"><a href="https://mireaskin.es/pages/la-guia" ...>Abrir mi Guía PRO Premium</a></td></tr>
```

4. Cambia `padding:26px 34px;` por `padding:26px 34px 10px;` y **pega justo debajo
   de ese `</tr>`** el bloque de `bloque-guia-pro.html`.
5. Guarda y manda un envío de prueba a `my.mireaskin@gmail.com` para verlo.

Para el Journal (flow `VtbF3p`, plantilla `SqHGhE`) el bloque es
`bloque-journal.html` y va igual: justo debajo del `</tr>` de su botón.

## Comprobación después

Klaviyo → Flows → el flow → pestaña Analytics. Cuando entre un pedido que pase el
umbral, debe aparecer un `Received Email`. Y el enlace del PDF debe abrir el
archivo, no una página.
