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

**Contexto del proyecto:** tienda de Shopify de Blanca. El alcance todavía no está
definido; consulta la bitácora antes de asumir nada.

**Idioma:** Blanca trabaja en español. Responde en español y escribe la
documentación del repo en español. El código y los mensajes de commit, en inglés.
