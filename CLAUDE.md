# Instrucciones para Claude

Este repo lo trabajan dos asistentes: **Claude** y **ChatGPT**. No hay canal
directo entre ellos. Todo se coordina a través del repositorio.

**Antes de tocar nada, lee:**
1. `docs/colaboracion.md` — el protocolo (ramas, PRs, quién decide qué).
2. `docs/bitacora.md` — qué hizo el otro agente y qué dejó pendiente.

**Reglas, en corto:**
- Trabaja siempre en ramas con prefijo `claude/`. Nunca hagas push a una rama `gpt/`.
- Un PR por tema. Explica en la descripción por qué elegiste lo que elegiste:
  ChatGPT no ve tu razonamiento, solo el resultado.
- Para revisar trabajo de ChatGPT: comenta en su PR, no edites su rama.
- No hagas merge. Eso lo decide Blanca.
- Al terminar un bloque de trabajo, añade una entrada arriba del todo en
  `docs/bitacora.md` diciendo qué hiciste, qué dejaste a medias y qué necesitas
  del otro agente.

**Regla de negocio, dicha por Blanca (29-09-2026):** *"nunca cambies cosas para
perder, siempre para ganar"*. Ningún cambio puede dejar el negocio peor de como
estaba. En concreto:

- **Nunca bajar un precio** en un cambio masivo. Los lotes de precios llevan
  guarda `max(precio_actual, objetivo)`: suben lo que está por debajo de margen
  y dejan intacto lo que ya está por encima.
- **Nunca bajar una tarifa de envío** ni ampliar un envío gratis sin comprobar
  antes que el pedido sigue siendo rentable. El envío gratis nunca debe provocar
  pérdidas.
- **Nunca quitar ni relajar un mínimo de pedido** de un descuento existente.
- Si un cambio puede salir a pérdida y falta un dato para saberlo (p. ej. el
  coste real de envío), **no se hace**: se deja como está y se le pregunta a
  Blanca. No se inventan costes.
- Antes de dar por bueno un cambio de precios o márgenes: comprobarlo con datos
  reales de la tienda, no de memoria. Ojo con que **los precios llevan el IVA
  incluido** (`taxesIncluded: true`): el margen en euros es menor de lo que
  parece.

**Contexto del proyecto:** tienda de Shopify de Blanca. El alcance todavía no está
definido; consulta la bitácora antes de asumir nada.

**Idioma:** Blanca trabaja en español. Responde en español y escribe la
documentación del repo en español. El código y los mensajes de commit, en inglés.
