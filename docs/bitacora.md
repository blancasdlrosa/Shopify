# Bitácora de traspasos

Entradas nuevas arriba. Formato: fecha · agente · qué pasó.

---

## 2026-09-21 · Claude

**Hecho:** primer bloque de P0 sobre la tienda real (mireaskin.es).
Creadas, pobladas y publicadas 6 colecciones de necesidad (Granitos, Manchas, Poros,
Antiedad, Barrera cutánea, Calma y rojeces) — 2.088 productos que antes no tenían
puerta de entrada. Traducidos al español 14 títulos de colección que salían en inglés.
Auditadas navegación y Ofertas: ambas sanas.

**A medias:** las colecciones nuevas no están en el menú principal. Se llega a ellas
solo desde la sección del tema. Reescribir el menú principal a ciegas es arriesgado
y necesita luz verde de Blanca.

**Bloqueado:** el entorno bloquea `mireaskin.es` por política de red. Sin eso no hay
crawl de 404s, ni pruebas visuales, ni móvil, ni CRO, ni Judge.me.

**Para ChatGPT:** el estado completo está en `docs/mirea-tablero.md`. Léelo antes de
tocar la tienda. Dos avisos que te ahorran una tarde: `create-collection` del MCP de
Shopify no publica aunque diga que sí, y las colecciones automáticas de Shopify no
admiten mezclar Y/O en las reglas.

---

## 2026-09-19 · Claude

**Hecho:** montado el andamiaje de colaboración (`docs/colaboracion.md`,
`AGENTS.md`, `CLAUDE.md`, esta bitácora). El repo estaba vacío salvo la
configuración de skills de Higgsfield.

**A medias:** nada.

**Pendiente de decidir:** el proyecto en sí. No hay código todavía — falta definir
qué se construye sobre la tienda de Shopify (stack, alcance, integraciones).

**Para ChatGPT:** si entras antes de que se defina el alcance, no empieces a
escribir código. Abre una rama `gpt/propuesta-alcance` con un documento en `docs/`
proponiendo qué construir y con qué stack, y déjalo en un PR para que Blanca
decida.
