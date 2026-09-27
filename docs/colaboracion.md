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

---

## PROPUESTA (Claude, 27-09-2026) · el protocolo no cubre Shopify, y ahí está el problema

Todo lo de arriba habla de ramas y PRs. Pero el trabajo de verdad no pasa en git: pasa
dentro de Shopify, en los temas. Y ahí no hay ninguna regla. El resultado, medido hoy:

- **12 temas en la tienda**, 11 sin publicar, muchos con nombres que ya no dicen la
  verdad (`PUBLICAR ESTA · Mirea · regalos protegidos` no es la que hay que publicar).
- **Los dos construimos el rediseño premium el mismo día sin saberlo.** ChatGPT
  actualizó `ATELIER LUXE` a las 13:08; Claude publicó `MOTION LAB` a las 13:15. El
  trabajo de ChatGPT quedó huérfano en un tema que nadie iba a abrir.
- El tema publicado llevaba el arreglo de Klaviyo **viejo**, porque el bueno estaba en
  otro tema distinto.

Esto no lo arregla ninguna regla de git. Propongo añadir esto, y que decida Blanca:

### Nombre del tema: quién y cuándo

`Mirea · <QUÉ> · <DD-MM> · <AGENTE>`

Ejemplos: `Mirea · ATELIER LUXE · 27-09 · GPT`, `Mirea · MOTION LAB · 27-09 · CLAUDE`.

Así se ve de un vistazo quién lo tocó. Ahora mismo hay que abrir el tema y deducirlo
por los nombres de los archivos.

### Un agente no edita un tema del otro

Mismo principio que las ramas. Si quieres cambiar el tema del otro: lo duplicas, lo
nombras con tu agente, y lo dices en la bitácora. Nunca haces `themeFilesUpsert` sobre
un tema cuyo nombre lleva el agente del otro.

Excepción, y solo una: **copiar un archivo del otro verbatim a tu propio tema sí vale**,
siempre que digas de dónde salió y no lo modifiques. Es lo que hace falta para poder
integrar trabajo sin pisarlo.

### Antes de empezar un bloque de diseño, se anuncia

Una línea en `docs/bitacora.md` **antes**, no después: "empiezo la capa premium sobre
las secciones existentes". Cuesta treinta segundos y es exactamente lo que hoy nos
habría ahorrado construir lo mismo dos veces.

### Publicar lo decide Blanca, y solo hay un candidato a la vez

Ninguno de los dos publica un tema. Y el candidato a publicar se deja escrito en la
bitácora con su ID, uno solo. Si hay dos candidatos, Blanca tiene que elegir entre
diseño y tracking, que es una elección que no debería existir nunca: el candidato lleva
las dos cosas.

### El repositorio no tiene rama troncal

Comprobado el 27-09: `git ls-remote --heads origin` devuelve solo dos ramas, las dos
`claude/`. **No existe `main` ni `master`.** El PR #1 apunta como base a
`claude/higgsfield-setup-jnvc7a`, que es otra rama de trabajo, no un tronco.

Esto rompe el flujo de arriba: "abres una rama con tu prefijo" no tiene sentido si no
hay de dónde salir, y dos agentes ramificando de sitios distintos nunca van a poder
comparar nada. Hace falta un tronco del que salgan las dos.

No lo he creado yo. Crear una rama no borra nada, pero decidir cuál es el tronco del
repo es una decisión de Blanca y afecta a los dos agentes. Queda propuesto:
crear `main` a partir del estado actual de `claude/clever-wright-lobnu7` y repuntar el
PR #1 a `main`.
