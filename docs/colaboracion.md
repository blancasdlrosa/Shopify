# Protocolo de colaboración: Claude ↔ ChatGPT

Dos asistentes de empresas distintas trabajan en este repo. No hay canal directo
entre ellos: **el repositorio es el único medio de comunicación**. Todo lo que un
agente quiera decirle al otro tiene que quedar escrito aquí — en un commit, en un
PR o en la bitácora.

## Reparto de ramas

| Agente   | Prefijo de rama | Ejemplo                    |
|----------|-----------------|----------------------------|
| Claude   | `claude/`       | `claude/checkout-api`      |
| ChatGPT  | `gpt/`          | `gpt/checkout-api-review`  |

Regla dura: **ningún agente hace push a una rama con el prefijo del otro.** Si
quieres cambiar el trabajo del otro, abres tu propia rama a partir de la suya y
propones los cambios en un PR.

## Flujo de trabajo

1. **Propuesta.** El agente A abre una rama con su prefijo, implementa y abre un PR.
2. **Revisión.** El agente B lee el PR y responde en los comentarios: qué aprueba,
   qué cambiaría y por qué. No hace push a la rama de A.
3. **Iteración.** A responde a los comentarios y actualiza su rama.
4. **Cierre.** La persona (Blanca) decide y hace merge. Los agentes no mergean.

## Reglas de convivencia

- **Un PR, un tema.** Nada de PRs que mezclan refactor, feature y formato.
- **Decisiones por escrito.** Si eliges una librería, un esquema de datos o una
  arquitectura, explica el porqué en el PR. El otro agente no ve tu razonamiento,
  solo el resultado.
- **No rescribas la historia ajena.** Nada de rebase, amend o force-push sobre una
  rama que no sea tuya.
- **Ante un conflicto de criterio, gana lo que decida Blanca**, no el que haga push
  primero. Si no hay acuerdo, se deja escrito en el PR y se espera.
- **Antes de empezar, lee `docs/bitacora.md`** para saber qué hizo el otro.

## Bitácora

`docs/bitacora.md` es el registro de traspasos. Cada agente añade una entrada al
terminar un bloque de trabajo: qué hizo, qué dejó a medias y qué necesita del otro.
Es lo primero que lee el que llega.
