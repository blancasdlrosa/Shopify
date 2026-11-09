# active-memory handoff: Mirea Skin (mireaskin.es)

**Handoff #1** · 2026-10-23 · Lineage: #1 (2026-10-23): catálogo, precios, Google Ads, Klaviyo, newsletters, auditoría web, tema borrador de títulos, revisión de reseñas

## 0. Instructions for Claude (read first)

You are continuing work from a previous chat. That chat is gone; this file is the complete context and the source of truth.

1. Read this whole file before replying.
2. Follow sections 3 (Style), 4 (Hard rules) and 5 (Corrections) in every reply, for the rest of this chat. They override your defaults.
3. Use the values in section 8 exactly. Never round, re-estimate, or "correct" them.
4. Do not suggest anything listed in section 7 (Changed / rejected) again unless the user brings it up.
5. Code word: None active. If the user types /amcodeword, start every reply with the phrase they choose (default "Yes Boss!").
6. Your first reply: at most 5 lines covering the goal, the current state, and the next step (section 11). Mention any files from section 13 that were not attached. Ask the questions in section 12 if there are any. End with "Ready to continue with <next step>?" Then wait for the user's go.

## 1. Mission
- **Goal:** que Mirea Skin venda más. Claude hace de director, COO, CTO y experto en marketing de la tienda Shopify (store heh7ct-ib): catálogo, precios, Google (Merchant y Ads), Klaviyo, redes sociales y web.
- **Done looks like:** ventas en marcha, catálogo limpio, precios con margen y web profesional en español.
- **Why it matters / context:** Blanca dijo "por qué estoy súper estancada no vendo nada". Solo hay 8 pedidos desde el 21-09.

## 2. About the user (as relevant to this work)
- **Quién es:** Blanca, dueña de Mirea Skin (mireaskin.es): cosmética coreana más productos enviados desde España (peluquería, perfumes, etc.).
- **Proveedores:** Korealy (Corea) y Shopify Collective (España).
- **Cómo delega:** "lo dejo en tus manos". Pidió "usa todas las skills necesarias, saca el máximo partido a todo: mi app, mi web, todo".
- **Mercado:** quiere vender también fuera de España ("algunas ventas q e tenido han sido internacionales").
- **Cómo trabaja:** escribe desde el móvil, mensajes cortos e informales.

## 3. Style & communication
- **Language:** español en todas las respuestas a Blanca.
- **Tone:** sencillo, cercano y directo, sin tecnicismos.
- **Reply length:** corto, con lo hecho y lo que necesito de ella.
- **Formatting:** negritas y listas cortas. Algún emoji puntual (👉) está bien.
- **Working style:** hacer acciones seguras y reversibles sin preguntar. Pedir permiso antes de lo irreversible, de lo público o de lo que cueste dinero. Trabajo pesado en agentes en segundo plano. Registrar todo en docs/MIREA_ESTADO.md, hacer commit y push.
- **Avoid:** afirmar cosas sin pruebas, jerga técnica y textos largos.

## 4. Hard rules (word for word)
1. "PLAZA CLARA ESTÁ CERRADA. No tocar Plaza Clara... No utilizar Merchant Center 5847806959..." El Merchant autorizado es 5857344812. El enlace de Google Ads con 5847806959 no se usa ni se toca.
2. "No borres, sustituyas ni dupliques una cuenta Merchant."
3. "No borrar productos. No reducir el catálogo masivamente. No alterar pedidos. No duplicar pagos. No modificar precios de forma masiva sin validar márgenes. No cambiar SKUs arbitrariamente. No inventar EAN/GTIN. No eliminar feeds. No desconectar Merchant. No publicar temas sin comprobación visual y aprobación final. No comprar stock. No contratar suscripciones sin aprobación. No lanzar publicidad de pago sin presupuesto aprobado. No divulgar datos privados de clientes. No enviar campañas públicas ni publicar en redes sociales sin autorización expresa."
4. "No presentar formularios fiscales ni declarar situaciones administrativas sin autorización y asesoramiento adecuado."
5. "Nunca incluyas contraseñas o secretos en el documento."
6. "Nunca afirmes que algo está hecho si no puedes demostrarlo."
7. Temas: no publicar nunca. Trabajar en copias sin publicar; las publica Blanca.
8. Fotos reales. No subir precios.
9. No poner envío gratis, salvo el descuento que ya existe: "envío gratis desde 69 € en España".
10. España y Corea van separadas.
11. No modificar la app iOS.
12. No copiar su NIF a ningún documento. Aparece en la política LEGAL_NOTICE.
13. Publicar automáticamente en IG/TikTok vía Metricool está autorizado.
14. Envíos: "si pierdo dinero no. Solo si gano".
15. Productos sin stock: mostrarlos como "Agotado", con inventoryPolicy DENY. Nunca vender sin stock.
16. Packs: "los packs en packs. formato grande solo los champus grandes".

## 5. Corrections log
| # | Claude did | The user wanted |
|---|---|---|
| 1 | Marqué el set SKIN1004 como sin margen (comparé el precio mínimo con el coste de otra variante) | Calcular por variante: tiene un 10 % de margen; se activó |
| 2 | Dije que el feed de Google solo estaba en inglés/AED | Corregido: existe el feed de España (es/EUR), aprobado |
| 3 | Propuse 7 €/día en Google Ads | "7 al día no eso es mucho" → 3 €/día |
| 4 | Packs mezclados en "formato grande" | Packs en su colección; formato grande solo para champús grandes |
| 5 | Precios inflados (por ejemplo, 80 €) | "corrige todos los precios que estén tan inflados pero claro cn margen para mi" y "ponlo como en oferta" |
| 6 | Alerta "meta robots none" | Falsa alarma: viene del iframe de inicio de sesión de Shop Pay |

## 6. Decisions
| Decision | Why |
|---|---|
| Google Ads: búsqueda en España, 3 €/día, activa | Presupuesto aprobado por Blanca |
| 81 precios bajados (margen mínimo 30 % sobre coste) con el precio anterior como "antes" | Petición de Blanca: oferta con margen |
| Borradores de España activados; los que no tienen stock, como Agotado | "si están sin stock.. los pones como agotado" |
| 6 newsletters a todos los suscritos | "a todos los suscritos" |
| Remitente de Klaviyo: hola@mireaskin.es | Arreglar DMARC y dar imagen profesional |
| No bajar el envío del tramo de 0,2–0,5 kg | Perdería unos 3 € por pedido |
| Aprobados A (política de envíos), B (SEO de los 300 más importantes), C (títulos de página en tema borrador) | Blanca: "si" |

## 7. Changed / rejected
- Google Ads: 7 €/día → 3 €/día (le parecía mucho gasto).
- ❌ Reactivar la campaña 24286732474: anuncia "Envío Gratis desde 35 €", que es falso.
- ❌ Bajar el envío de 0,2–0,5 kg en España: daría pérdidas.
- ❌ Shopping/PMax por la API de Windsor: la API solo permite Search y Display.
- ❌ Activar los borradores duplicados (69), los sin margen (Cofre Devotion Male), los sin foto (16), los internos (11) y los de precio 0 (2).

## 8. Data & facts (exact)
| Concepto | Valor |
|---|---|
| Tienda Shopify | heh7ct-ib · mireaskin.es |
| Publicaciones | Tienda online 359921287505 · Google & YouTube 361025175889 · Shop 359921320273 |
| Tema publicado | 209021272401 "Mirea · 21-10 fotos sin repetir · BORRADOR" |
| Tema borrador de títulos | 209154441553 "Mirea · títulos ES · BORRADOR" (sin publicar) |
| Menú principal | gid://shopify/Menu/348314370385 |
| Colección Packs | peluqueria-packs 694946627921 |
| Merchant Center autorizado | 5857344812 (feed de España es/EUR aprobado) |
| Merchant Center prohibido | 5847806959 |
| Google Ads | 1865267943 (EUR), vía Windsor "186-526-7943" |
| Campaña | "Mirea · Search · Marcas K-beauty · España" 24377406933 |
| Grupos de anuncios | Medicube 201698852815 · Anua 201561359219 · Biodance 204449022147 · Cosmética coreana 201698889495 · Beauty of Joseon 201039754763 (pausado) · SKIN1004 200099439054 (pausado) |
| Revisión de Ads programada | 25-10 09:00 UTC (trig_01Pd6uYK31nQmRSD1WRvP71y) |
| Klaviyo | dominio send.mireaskin.es · remitente hola@mireaskin.es · reply-to my.mireaskin@gmail.com |
| Flujos rediseñados | carrito TX2NFZ, checkout RZzUtE (plantillas Mirea v2: SsXfLn, TsazRE, WYZkJ7, TafNEX) |
| Listas de newsletters | VU7PcQ (22) · RtYDX3 (20) · Uf2Bws (3) |
| Metricool | brand 6949847 · IG/TikTok programados hasta el 01-11 · Pinterest hasta el 03-11 |
| Envío Korealy a España | $6 (≤0,2 kg) · $11 (≤0,5 kg) |
| Judge.me | 7 reseñas, todas de mireaskin.es (shop NgZYZoXW), media 5,00 |

**Newsletters (09:00 UTC):**

| Fecha | Campaign ID |
|---|---|
| 28-10 | 01M5HM5ESGC8VVYN45ZE74S2YY |
| 06-11 | 01M5HMG55CRWXQZVX4BHMXC2VH |
| 11-11 | 01M5HMJVR2SWCKJ5JNYKK00J55 |
| 20-11 | 01M5HMN4VEE9CMKPKDA37KP7WX |
| 25-11 | 01M5HMQK513B5Z6DE6XA9QD9WM |
| 04-12 | 01M5HMSYRXHDE4717345XMZC5W |

**Cifras:**
- Ofertas reales: 1.250 variantes.
- Precios "antes" mal puestos y corregidos: 496 variantes de 377 productos (156 activas, 340 en borrador).
- Productos de Collective que vuelven a poner el precio mal solos: MOOD Earplugs "Mood Pro" y Valquer®.

## 9. People, terms & names
- **People:** Blanca (dueña).
- **Terms & nicknames:**
  - "formato grande" = colección "Peluquería: Champú formato grande".
  - "lo de España" = productos enviados desde España (Collective), frente a "Corea" (Korealy).
- **Names in use:** docs/MIREA_ESTADO.md · docs/AUDITORIA_WEB_2210.md · docs/politicas/POLITICA_ENVIOS_2210.md · docs/precios/auditoria_precios_2210.csv · docs/precios/compare_at_invertido_2210.csv · docs/newsletters/01…06 · rama git claude/dazzling-newton-xo3fmc

## 10. Work state
| Item | Status | Version / location | Notes |
|---|---|---|---|
| Política de envíos nueva | Texto listo | docs/politicas/POLITICA_ENVIOS_2210.md | Blanca la pega en Configuración → Políticas, porque la API no tiene permiso |
| Títulos de página en español | Hecho en borrador | tema 209154441553 | Blanca lo publica |
| SEO top 300 (títulos, descripciones y alt) | En curso | agente a4adcb7d502578e61 → docs/seo/seo_top300_2210.csv | Esperar el informe |
| Precios "antes" invertidos | Hecho | commit c4f124b | Collective los revierte: revisar cada semana |
| Reseñas "de otras tiendas" | Investigado | — | Judge.me está limpio; falta la captura de Blanca |
| Emails de postcompra, reposición, win-back, VIP y cross-sell | Pendiente | Klaviyo | Siguen con las plantillas antiguas |
| Google Ads | Activa | 24377406933 | Revisar el 25-10 |

## 11. Next steps
1. **Next action:** recoger el informe del SEO top 300 (o reanudar el agente a4adcb7d502578e61 con SendMessage) y contárselo a Blanca.
2. Cuando Blanca mande la captura de las reseñas, localizar su origen: el widget de Google & YouTube, Google Shopping o la app Shop. Proponer cómo quitarlas sin borrar sus reseñas reales.
3. Revisar Google Ads el 25-10: términos de búsqueda, gasto y anuncios aprobados.
4. Revisar los precios antes del 20-11 y el stock antes del 25-11 (newsletters 4 y 5).
5. Rediseñar las plantillas de los flujos que faltan.
6. Revisar cada semana los precios "antes" de Collective.

## 12. Open questions ⚠️
- ¿Dónde ve Blanca las "reseñas de otras tiendas"? Puede ser la web (widget de Google), Google Shopping o la app Shop. Falta la captura.
- App iOS: ¿solo revisarla o también hacer cambios? Sin respuesta.
- ¿Llegó el email de prueba de la newsletter 1 y se ven las fotos?
- Blanca tiene pendiente activar las solicitudes de reseña en Judge.me y conectar Search Console/GA4 en HYPD.

## 13. Re-attach checklist
- [ ] Nada obligatorio: todo está en la rama git claude/dazzling-newton-xo3fmc (docs/MIREA_ESTADO.md tiene el histórico completo).

---
<sub>Audit: 13/13 sections · 16 rules · 6 corrections · 40+ data points · secrets removed: none found · generated by active-memory</sub>
