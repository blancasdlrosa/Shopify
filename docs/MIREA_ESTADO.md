# Mirea Skin · Documento de estado y tablero maestro

**Última auditoría:** 11-10-2026 (sesión Claude Code)
**Regla:** solo se marca VERIFICADO / CERRADO lo comprobado con lectura posterior. Sin contraseñas, tokens ni datos personales de clientes en este archivo.

---

## 1. Cuentas verificadas

| Sistema | Valor comprobado | Cómo |
|---|---|---|
| Shopify | Mirea Skin · heh7ct-ib.myshopify.com · mireaskin.es · plan **Basic** · EUR · España | `get-shop-info` |
| Merchant Center | **5857344812 "Mirea Skin"** (única cuenta conectada en Windsor) | Windsor `get_connectors` |
| Search Console | `https://mireaskin.es/` | Windsor |
| Google Ads | 186-526-7943 (solo lectura, sin gasto autorizado) | Windsor |
| Instagram | mireaskin_ (17841461866570478) | Windsor |
| Klaviyo | conectado (flows y métricas legibles) | Klaviyo MCP |
| Plaza Clara / Merchant 5847806959 | **EXCLUIDO. No tocar.** | — |

Pendiente: confirmar en Shopify › Google & YouTube que la cuenta seleccionada en la integración es 5857344812 (la API no expone ese dato).

## 2. Temas (Shopify)

| Rol | Nombre | ID |
|---|---|---|
| **MAIN** | Mirea · Regalos PDF corregidos · 09-10 | 207960965457 |
| Unpublished | Copia actualizada de Mirea · Regalos PDF correg… (10-10, 12:00) | 208068411729 |
| Unpublished | Mirea · RESTAURAR CATEGORÍAS VISIBLES · 08-10 | 207939699025 |
| Unpublished | Mirea · Navegación y productos por necesidad · 08-10 | 207906832721 |
| Unpublished | Rutina PRO / 18 necesidades / Rutina multiselección (08-10), v9–v12 | varios |

Los temas "PUBLICAR ESTA…" (206499447121, 206501052753) **ya no existen**.

**Comparación por checksum MD5 (11-10):**
- MAIN = Navegación 08-10 en `templates/index.json`, `collection.json`, `product.json`, `page.marcas.json`, `layout/theme.liquid`, `snippets/header-drawer.liquid`, `mirea-klaviyo-cart-tracking.liquid`, `mirea-cart-goal.liquid`, `mirea-brands-directory.liquid`, `settings_data.json`.
- Única diferencia: `sections/header-group.json` → MAIN usa la versión de "RESTAURAR CATEGORÍAS VISIBLES" (sustitución intencionada).
- **Conclusión:** el trabajo de navegación del 08-10 y el de regalos/guías **ya están en MAIN**. No hay que publicar esos borradores.
- "Copia actualizada" (10-10) difiere en theme.liquid, settings_data, header-group, index, collection, product y page.marcas. El patrón (todos los archivos reescritos en 2 min) sugiere una copia generada por actualización de versión del tema. **No publicar sin diff visual escritorio + móvil.**

## 3. Baseline 11-10-2026

### Catálogo (exacto, Admin API)
| Métrica | Valor |
|---|---:|
| Productos totales | 8.523 |
| Activos | 7.793 |
| Borradores | 673 |
| Archivados | 57 |
| Variantes | 13.556 |

### Publicación por canal (productos activos)
| Canal | Publicados | Hueco vs activos |
|---|---:|---:|
| Tienda online | 7.793 | 0 |
| Pinterest | 6.857 | 936 |
| TikTok | 4.443 | 3.350 |
| Facebook & Instagram | 746 | 7.047 |
| Google & YouTube | 471 (+6 hoy, el contador agregado aún no se ha refrescado) | ~7.316 |
| **Shop** | **158** | **7.635** |

### Pedidos (histórico completo: 7 pedidos)
| Pedido | Fecha | País | Total € | Envío € | Estado pago | Fulfillment | Origen |
|---|---|---|---:|---:|---|---|---|
| #1004 | 25-09 | ES | 86,33 | 15,98 | Pagado | Enviado (LI086596199KR) | — |
| #1005 | 28-09 | PT | 8,99 (61,91 reembolsado) | 8,99 | Reembolsado | — | directo |
| #1006 | 28-09 | ES | 23,97 (19,20 reemb.) | 7,99 | Parcial reemb. | **SIN ENVIAR (13 días)** | — |
| #1007 | 30-09 | DK | 84,80 | 23,54 | Pagado | Enviado (EG053262224KR) | — |
| #1008 | 01-10 | BE | 34,19 | 14,99 | Pagado | Enviado (LI086804475KR) | **ChatGPT** |
| #1009 | 06-10 | RO | 107,14 | 15,33 | Pagado | **SIN ENVIAR** | **ChatGPT** |
| #1010 | 11-10 | BG | 176,84 | 22,99 | Pagado | Sin enviar (hoy) | sin datos |

Ventas 30 días (ShopifyQL): 7 pedidos · bruto 519,92 € · descuentos −19,37 € · devoluciones −131,03 € · **netas 369,52 €** · envío 90,83 € · total 460,35 €.

### Ventas ChatGPT — trazadas (MIREA-021 VERIFICADO)
Los **141,33 €** atribuidos a ChatGPT = #1008 (34,19 €) + #1009 (107,14 €). Ambos con `utm_source=chatgpt.com`, aterrizando en **/en/products/**:
- `anua-vita-c-porestrix-brightening-serum-mask-22ml-x-10ea` (Bélgica)
- `medicube-deoxyribose-scalp-serum-20ml` (Rumanía; compró también medicube Deep Lifting Peptide Eye Cream)

Patrón: comprador internacional en inglés, K-beauty de marca conocida, ticket medio-alto. Ninguno de los dos productos estaba publicado en Google & YouTube → **publicados hoy**.

### Merchant Center 5857344812 (Windsor, 11-10)
| País | Activos | Desaprobados | Nota |
|---|---:|---:|---|
| ES | 1.333 | 16 | coincide con baseline |
| US | 459 | 131 | coincide con baseline |
| AR, CL, CO, MX, PA | 459 | 131 | mismo patrón que US |
| BR, NO, KW | 194 | 50 | |
| **BG, HR, MT** | **0** | **675** | sin envío configurado en Merchant (Shopify sí vende a BG: pedido #1010) |
| **LI** | **0** | **685** | idem |
| KR (Shopping ads) | 0 | 680 | BRN; en free listings KR sí activa (666) |
| Resto UE / intl. | ~650–670 | 6–18 | |

Valores negativos de `pending` = artefacto del conector, ignorar.

**Causa probable del price mismatch:** los 9 países afectados (US, AR, BR, CL, CO, KW, MX, NO, PA) pertenecen todos al mercado Shopify **International** (base USD + `localCurrencies: true`). La conversión automática de moneda/redondeo hace que el precio de la landing difiera del feed. Hipótesis; validar en Merchant › Diagnóstico con 3 ofertas antes de actuar.

### Search Console
- **959 impresiones / 26 clics = periodo 19-09 → 08-10-2026** (confirmado sumando datos diarios; GSC tiene ~3 días de retraso).
- Sitemap índice `sitemap.xml`: **29.625 URLs enviadas** (antes 31.439), 0 errores, 0 advertencias, descargado 10-10.
- Consultas en top 10 (oportunidad CTR): OBgE Natural Cover Foundation (pos 3,6 · 14 imp · 1 clic), Isntree GIM PDRN cream (5), Abib heartleaf pad (6,3), OBgE Natural Cover Lotion (6,25), Labo-H colección (8,2), COSRX Blue Peptide Bakuchiol (9,6), Jung Kwan Jang (10).
- Marcas (medicube, Beauty of Joseon, COSRX, SKIN1004, Isntree, Missha…) con impresiones pero posición 60–90: colecciones de marca sin autoridad todavía.

### Klaviyo
- Evento Shopify **Added to Cart (VBBMXM) recibe datos**: 2 eventos semana 28-09, 9 eventos (5 perfiles) semana 05-10. → el tracking del tema MAIN funciona.
- Checkout Started: 7 / 5 / 7 por semana.
- Flows **live**: Welcome 10% · Welcome PRO Nurture · Checkout abandonado definitivo · **Carrito abandonado Shopify Added to Cart estable** · Postcompra Cuida tu rutina · Cross-sell Completa tu rutina · Cross-sell post-entrega · Primera compra Mi Mirea · Reposición 45 días · Win-back 60 días · VIP 3ª compra · Regalo primer pedido >35 guías PDF · Regalo pedido ≥60 rutinas+journal · Guías compradas ES/EN ("BORRADOR 08-10" en el nombre pero **status live**).
- 11 flows en borrador duplicados de versiones anteriores (no borrar; candidatos a archivar).

### Costes y márgenes (muestra)
| Producto | PVP € | Coste € | Margen bruto s/ envío |
|---|---:|---:|---:|
| medicube Deoxyribose Scalp Serum | 36,95 | 23,00 | 37,8 % |
| Anua Vita C Porestrix Mask x10 | 22,95 | 14,86 | 35,3 % |
| OBgE Natural Cover Lotion | 34,95 | 19,00 | 45,6 % |
| OBgE Natural Cover Foundation | 43,95 | 24,00 | 45,4 % |
| Abib Heartleaf Pad / COSRX Blue Peptide | 19,95 / 27,95 | sin coste | — |

Pedido #1009: venta 107,14 € − Korealy 83 USD (≈ 77 €) ≈ 30 € antes de comisiones de pago, IVA y apps. #1010: 176,84 € − ≈116,39 € = 60,45 € provisional.

## 4. Tablero maestro

Estados: SIN AUDITAR · VERIFICADO · PENDIENTE · EN CURSO · IMPLEMENTADO · VALIDANDO · MONITORIZANDO · BLOQUEADO · CERRADO

| ID | Área | Problema | Prio | Estado | Acción / Evidencia | Próximo paso |
|---|---|---|---|---|---|---|
| MIREA-001 | Shopify | Tienda, MAIN, permisos | Crítica | VERIFICADO | Tienda y MAIN identificados (§2) | Confirmar cuenta Merchant elegida en canal Google |
| MIREA-002 | Merchant | Cuenta 5857344812 | Crítica | VERIFICADO (lectura) | Única cuenta en Windsor; cifras ES/US cuadran | Confirmar vinculación en Shopify admin |
| MIREA-003 | Merchant | Errores ES/US | Crítica | EN CURSO | Recuento por país (§3) | Exportar diagnóstico de los 16 ES desde Merchant UI |
| MIREA-004 | Merchant | Price mismatch US + 8 países | Crítica | EN CURSO | Hipótesis: mercado International USD + moneda local | Validar 3 ofertas; propuesta de cambio en Markets (requiere aprobación) |
| MIREA-005 | Catálogo | Publicado vs Shopify | Crítica | VERIFICADO | Conteos por canal (§3) | Escalado por lotes a Google con criterios |
| MIREA-006 | Korealy | Tracking manual, retrasos | Crítica | EN CURSO | Korealy confirma que NO sincroniza tracking con Shopify (03-10) | Enviar borradores creados hoy; carga manual de tracking |
| MIREA-006a | Pedido | #1006 sin enviar 13 días | Crítica | EN CURSO | Korealy "preparing" 04-10, sin tracking | Borrador de reclamación creado |
| MIREA-006b | Pedido | #1009 retenido por teléfono | Crítica | EN CURSO | Cliente envió teléfono 08-10; **no hay envío a Korealy en este buzón** | Borrador respuesta a order@korealy.co creado |
| MIREA-006c | Pedido | #1010 Bulgaria | Alta | EN CURSO | Pagado a Korealy 125 USD (PayPal 11-10) | Anticipar teléfono; vigilar tracking |
| MIREA-007 | Finanzas | Rentabilidad real | Crítica | EN CURSO | Muestra en §3 | Tabla completa pedido→coste→envío→comisión |
| MIREA-008 | Finanzas | Coste de apps | Crítica | SIN AUDITAR | API no expone cargos de apps | Revisar Ajustes › Facturación |
| MIREA-009 | Legal | Cumplimiento importados | Crítica | SIN AUDITAR | — | Responsable UE/CPNP con proveedor |
| MIREA-010 | Proveedor | Precios K-Dropshipping | Crítica | SIN AUDITAR | — | Revisar los ~20 productos importados |
| MIREA-011 | Tema | Navegación 08-10 | Alta | CERRADO | Contenido ya en MAIN (checksums idénticos) | — |
| MIREA-012 | Tema | Guías y regalos 08-10 | Alta | VERIFICADO | MAIN = "Regalos PDF corregidos"; cart-goal y PDFs en MAIN | Prueba de compra real de umbrales |
| MIREA-013 | Klaviyo | Added to Cart | Alta | VERIFICADO | 11 eventos VBBMXM desde 28-09 | Comprobar duplicados (Shopify vs API) |
| MIREA-014 | Klaviyo | Carrito abandonado | Alta | MONITORIZANDO | Flow TX2NFZ live | Ver report de flow a 30 días |
| MIREA-015 | Digital | Entrega guías | Alta | PENDIENTE | Flows de regalo live | Compra de prueba + descarga |
| MIREA-016 | App | Creators Club v6 | Alta | BLOQUEADO | Sin acceso a Partner/CLI desde esta sesión | Revisar en Partner Dashboard |
| MIREA-017 | Datos | GTIN/EAN | Alta | EN CURSO | Korealy publicó lista GTIN: korealy.co/pages/download-gtin-list (07-10) | Descargar y cruzar por SKU; sin inventar |
| MIREA-018 | Legal | Políticas | Alta | SIN AUDITAR | — | Leer políticas publicadas |
| MIREA-019 | SEO | Indexación | Alta | VERIFICADO | Sitemap 29.625 URLs, 0 errores | Cobertura indexada en GSC UI |
| MIREA-020 | SEO | Fichas top-10 bajo CTR | Alta | IMPLEMENTADO | Abib pad: SEO title/description creados (antes vacíos) | Medir CTR 14-28 días |
| MIREA-021 | IA | Ventas ChatGPT | Alta | VERIFICADO | #1008 + #1009 = 141,33 € | Replicar patrón (EN, K-beauty top) |
| MIREA-022 | Meta | Catálogo IG | Alta | PENDIENTE | 746 publicados en FB&IG | Revisar Commerce Manager |
| MIREA-023 | Bing | Copilot | Alta | SIN AUDITAR | Sin conector Bing conectado | Conectar Bing Webmaster |
| MIREA-024 | Shop | Distribución | Alta | PENDIENTE | **Solo 158 activos en Shop** | Propuesta de publicación masiva en Shop |
| MIREA-025 | Merchant | Envío BG/HR/MT/LI | Alta | BLOQUEADO | 0 activos en esos 4 países | Añadir envío en Merchant UI (BG ya vende) |
| MIREA-041 | Catálogo | SKU duplicado en variantes | Media | PENDIENTE | OBgE Foundation: 3 variantes con SKU 6805527445 | Auditar SKUs duplicados |
| MIREA-042 | Tema | "Copia actualizada" 10-10 | Media | PENDIENTE | Difiere en 7 archivos clave | Diff + preview antes de decidir |
| MIREA-026…040 | Crecimiento | Ver handoff | — | SIN AUDITAR | — | Tras estabilización |

## 5. Cambios realizados (11-10-2026)

| Hora | Cambio | Reversión |
|---|---|---|
| sesión | Publicados en **Google & YouTube**: Abib Heartleaf Pad, Anua Vita C Mask x10, medicube Deoxyribose Scalp Serum, COSRX Blue Peptide Bakuchiol, OBgE Natural Cover Lotion, OBgE Natural Cover Foundation. Verificado `publishedOnPublication: true`. | `publishableUnpublish` en publicación 361025175889 |
| sesión | SEO Abib Heartleaf Pad (11151721464145): title + description (antes null) | Dejar ambos campos vacíos |
| sesión | Gmail: 2 **borradores** (no enviados) a Korealy: teléfono #1009; estado #1006/#1009/#1010 | Borrar borradores |

## 6. Decisiones pendientes de aprobación

1. **Enviar los 2 borradores a Korealy** (#1009 retenido desde el 07-10).
2. **Markets International**: desactivar moneda local o fijar precios USD para eliminar price mismatch (afecta precios mostrados fuera de UE).
3. **Shop**: publicar en el canal Shop el resto de activos (7.635). Sin coste; amplía visibilidad en Shop app / agentes.
4. **Merchant**: añadir servicio de envío para BG, HR, MT (y decidir LI/KR).

## 7. Restricciones vigentes

Sin publicidad de pago, sin apps/suscripciones nuevas, sin cambios masivos de precio, sin publicar tema sin revisión móvil+escritorio, sin borrar productos, sin tocar Plaza Clara, sin presentar trámites fiscales (036 no presentado).

## 8. Cambios 11-10-2026 (segunda parte)

| Cambio | Antes | Después | Reversión |
|---|---|---|---|
| Envío España peninsular (Perfil general) | 0-0,3 kg 4,99 € · 0,3-0,6 kg 7,99 € · 0,6-1 kg 10,99 € · >1 kg 18,99 € | 0-0,2 kg **5,99 €** · 0,201-0,5 kg **10,49 €** · 0,501-1 kg 10,99 € · >1,001 kg 18,99 € | Restaurar tramos y precios anteriores en Configuración › Envíos |
| Políticas (envíos, devoluciones, términos) | HTML visible y `{{ }}` sin rellenar; plazo 3-7 días | Textos corregidos en `docs/POLITICAS_MIREA.md` | **Pendiente de pegar por Blanca** (API sin permiso write_legal_policies) |

Motivo del cambio de envío: tarifas Korealy Standard España = 6 $ (≤0,2 kg) y 11 $ (≤0,5 kg). Las tarifas anteriores perdían entre 0,59 € y 5,24 € por pedido solo en el envío.
Pendiente: tarifas Korealy para >0,5 kg en España y para FR/DE/IT/PT (tramos 0,5-1 kg y >1 kg sin verificar).
Decisión de Blanca: NO subir precios de producto (mercado más barato). El margen se protege cobrando el envío real.

## 9. 12-10-2026

- Nuevo pedido **#1011** (11-10, España, direct → /en/collections/piel): Biodance Caviar PDRN Dual Gel Toner Pads 22,10 € + envío **10,49 €** (tarifa nueva aplicada) = 32,59 €. Pagado a Korealy 26 $ (≈24,18 €). Beneficio aprox. **+7,5 €** (con la tarifa antigua habría sido ~5 €). Pendiente de envío.
- Coste registrado en Shopify (coste Korealy USD × 0,93) para: isoi Cleansing Milk 13,02 €, mise en scène Treatment 1150 ml 17,67 €, mise en scène Shampoo 1150 ml 17,67 €, O HUI Pact Set 37,20 €, Biodance Caviar Toner Pads 15,81 €, ETUDE Ginger Sugar Lip Serum (9 variantes) 7,44 €. Costes verificados con capturas de la app Korealy. Resto del lote 08-10: pendiente.
- Revisión SEO colecciones de marca (medicube, COSRX, MISSHA, SKIN1004, Anua, Beauty of Joseon, MEDIHEAL, THE FACE SHOP, illiyoon): **ya tienen título y descripción SEO en español** (traducción "es"). El idioma principal de la tienda es inglés y España se sirve en español. No requieren cambio; sus posiciones 60-90 son de autoridad/enlaces, no de metadatos.
- Coste registrado en **todo el lote Korealy 08-10** (40 productos más, 117 variantes; coste = precio ÷ 1,3 × 0,93). Sin cambios de precio. Shopify ya puede calcular el margen real de estos productos.
- Tarjeta regalo: intento de crear el producto "Tarjeta regalo Mirea Skin" (10/25/50/100 €). Shopify lo rechaza: "Los productos de tarjeta de regalo solo se pueden crear después de que se hayan activado". **Pendiente de Blanca**: activar las tarjetas regalo en el admin; después se configura el producto.
- Revisión de la home: 17 secciones activas, con el mensaje Guía/Journal repetido en 4 sitios. Propuesta estética (pendiente de aprobación): reducir a ~8 secciones en un tema copia sin publicar y revisarlo en vista previa antes de publicar.

## 10. 13-10-2026 · Home limpia (borrador, sin publicar)

- Tema copia creado: **"Mirea · Home limpia · BORRADOR 13-10"** (id 208281993553, UNPUBLISHED), duplicado del tema principal 207960965457. Vista previa: https://mireaskin.es/?preview_theme_id=208281993553
- Solo se ha cambiado `templates/index.json`: secciones reordenadas y 5 secciones ocultas (`disabled`, no borradas): Guías LUXE, Método, Guía (beneficios), Marcas (tarjetas; queda la cinta de marcas) y Diario. En Cierre, `mostrar_journal` = false para no repetir la guía/journal.
- Orden nuevo: Portada → Ventajas → Imprescindibles → Necesidades → Pasos → Novedades → Ofertas → Regalos (único sitio de guía/journal) → Origen Corea → Opiniones → Cinta de marcas → Cierre.
- Pendiente de preguntar a Blanca antes de hacerlo: cambiar la tipografía (Inter), poner banners con fotos nuevas y añadir "Tarjeta regalo" al menú.
- Comprobado: el "envío gratis España desde 69 €" que anuncia la web existe (descuento automático). Riesgo: en pedidos de más de 1 kg Korealy cobra más envío y el margen del lote ×1,3 puede quedarse en ~0. Pendiente de decidir.

### 10.1 · 13-10-2026 · Listas, tipografía y banners (todo en el borrador 208281993553)

- **Mis listas** (nuevo): corazón ♡ en cada tarjeta de producto y botón "Guardar en mis listas" en la ficha. Panel para elegir lista: Favoritos, Lista de deseos, Mi armario, Rutina de mañana, Rutina de noche y listas propias (crear, renombrar, eliminar). Página `/collections/all?view=mis-listas` con pestañas y, en las rutinas, número de paso, tipo de paso (limpieza, tónico, sérum, crema, SPF…) y orden ↑↓. Corazón con contador en la cabecera.
  - Límite actual: se guarda en el navegador del cliente (localStorage), no en su cuenta. Para sincronizarlo entre dispositivos haría falta una app (p. ej. Wishlist con cuenta) → requiere aprobación (posible coste).
  - Las cuentas de cliente de Shopify (nuevas) no dejan añadir pestañas desde el tema: por eso es una página propia enlazada desde el corazón de la cabecera.
- **Tipografía**: títulos en Cormorant Garamond en toda la tienda (antes Inter), textos en Inter, nombres de producto en mayúsculas espaciadas.
- **Banners de lujo**: "El cuidado, sin prisa." (foto `mirea-portada-editorial-4k.png`) y el dúo "De la mañana a la noche" (fotos `ChatGPT_Image_20_sept_2026_15_00_31.png` y `..._15_15_32.png`). Las fotos se eligieron por nombre y tamaño, sin verlas, porque el proxy bloquea cdn.shopify.com. Se cambian en el editor con un clic.
- La sección "Pasos" queda oculta (la sustituye el dúo mañana/noche).
- Código fuente en `theme-borrador-13-10/`. Probado en jsdom: corazón, panel, listas, crear lista, pasos de rutina y página.
- Archivos tocados en el borrador: assets/mirea-listas.js, snippets/mirea-listas.liquid, snippets/mirea-tipografia-lujo.liquid, snippets/mirea-selector-idioma.liquid (+2 renders), sections/mirea-mis-listas.liquid, sections/mirea-banner-lujo.liquid, sections/mirea-duo-lujo.liquid, templates/collection.mis-listas.json, templates/index.json.
- **Tarjeta regalo**: Shopify vuelve a rechazar la creación ("solo se pueden crear después de que se hayan activado"). La activación solo se puede hacer en el admin.

### 10.2 · 13-10-2026 · Nuevo borrador sobre el tema publicado actual

- El tema publicado cambió hoy: ahora es **"Mirea · HOME ACTUAL · Collective lujo · 13-10"** (208270197073). El 207960965457 ya no está publicado.
- Por petición de Blanca ("quiero todo lo que tengo"), nuevo borrador **208284647761 "Mirea · ACTUAL + mañana/noche + listas · BORRADOR 13-10"**, copia exacta del publicado más:
  - sección "De la mañana a la noche" (foto 1, la que le gustó), después de "¿Qué necesita tu piel hoy?";
  - Novedades: antetítulo "RECIÉN LLEGADO", título "Llegado nuevo esta semana.", etiqueta "Nuevo esta semana" (la colección son los productos del 08-10; cambiar el texto cuando deje de ser cierto);
  - Mis listas (♡) y tipografía de lujo, igual que en el borrador anterior.
  - No se ha quitado ni ocultado ninguna sección. El banner "El cuidado, sin prisa" NO está (no le gustó).
- El borrador 208281993553 (home limpia) queda solo como referencia.
- Supabase: proyecto gratuito **mirea-listas** (zbpyvogfreegrkhdzsbn, París). Tabla `listas` con RLS sin políticas y función `listas` con firma HMAC (código en supabase/functions/listas). El secreto está solo en la tabla privada `ajustes`, no en el repositorio. **Falta conectar el tema** a la función; está pendiente del permiso de Blanca porque envía el ID de cliente a Supabase.

### 10.3 · 13-10-2026 · "Añadir rápido" y página no encontrada (borrador 208284647761)

- "Añadir rápido" (sección Mirea · Productos y cualquier botón `data-mp-add`): añadía con /cart/add.js sin avisar al carrito del tema Horizon (no se actualizaba el contador ni se abría el carrito, y los errores se ocultaban). Arreglo en el borrador: `snippets/mirea-quick-add-fix.liquid` usa `Shopify.actions.updateCart` + `openCart` y muestra "No disponible" si Shopify rechaza el producto. El tema publicado tiene el mismo fallo.
- "Página no encontrada": los productos Maymoo importados el 12-10 a las 22:44 están en **BORRADOR** (Maymoo 546 productos; 443 borradores creados desde el 12-10). En la vista previa de administradora se ven en las colecciones, pero al abrirlos dan 404 y no se pueden añadir. Los clientes no los ven. Ejemplo: "Heartleaf Quercetinol Pore Deep Cleansing Foam" (Maymoo, 14,99 €, DRAFT). Los de EMANAR BEAUTY (189) están activos y publicados.
- Pendiente: decidir qué productos Maymoo se activan, revisando el margen antes.

### 10.4 · 13-10-2026 · Listas en la cuenta y Maymoo

- Blanca autorizó enviar el ID de cliente a su Supabase. Borrador 208284647761: `mirea-listas.js` sincroniza con la función `listas` cuando hay sesión iniciada. El tema firma `id:timestamp` con HMAC-SHA256 en Liquid; la clave está solo en el tema y en la tabla privada de Supabase (en el repo aparece como `__MIREA_LISTAS_SECRET__`). Lo guardado como invitado se suma al entrar; al cerrar sesión se borra del equipo. Probado en jsdom. Pendiente: añadir una línea en la política de privacidad sobre el uso de Supabase (UE) para las listas.
- Maymoo (Collective): margen del 25 % en todos. Lista de 237 borradores para activar en docs/MAYMOO_ACTIVAR.md. La activación masiva la bloqueó el control de permisos (cambio masivo en recursos compartidos) → pendiente de que Blanca lo haga desde el admin o autorice el permiso.
- Tarjeta regalo: el botón "Agregar producto de tarjeta de regalo" no responde en su navegador; la función giftCards está activa en la tienda (plan Basic).
- 13-10: Blanca elige **mis listas** (no XB Wishlist). El borrador 208284647761 no tiene el bloque de XB Wishlist. Pendiente: que ella desinstale XB Wishlist.
- Envío con varios proveedores: los productos de Collective (Emanar, Maymoo) usan el "Perfil general" de Mirea. El cliente paga UNA tarifa por peso (10,49 €, o 0 € desde 69 € con el descuento), pero cada proveedor cobra a Mirea su propio envío. Riesgo de pérdida en pedidos de 3 orígenes. Las tarifas que cobra cada proveedor no se ven por la API: hay que mirarlas en la app Collective.
- 13-10: Menú "Mirea · Catálogo · Novedades v11" (el de la cabecera, cambio en directo): "Novedades K-Beauty" pasa a llamarse **"Novedades"** y ahora apunta a la colección `novedades`, que solo tiene productos coreanos. Antes apuntaba a /collections/all ordenado por fecha, por eso salían perfumes árabes. En el submenú Todo también se llama "Novedades". La colección se llama ahora "Novedades".
- 13-10 (borrador 208284647761): `mirea-collection-hero` mostraba los botones de piel (Granitos, Manchas, Poros…) en cualquier colección sin botones propios, incluido Perfumes. Ahora: los de piel solo salen en colecciones de piel, Perfumes tiene los suyos (Mujer, Hombre, Unisex, Árabes) y el resto no muestra botones.
- Hay otro borrador de otra sesión: "Mirea · Perfumes editorial + selecciones" (208285827409). Si se publica ese, el arreglo de los botones no está.

### 10.5 · 13-10-2026 · Publicado y banners deslizables

- Blanca **publicó** el tema 208284647761 ("ACTUAL + mañana/noche + listas"). Desde ahí ya están en la tienda real: listas, letra, mañana/noche, arreglo de "Añadir rápido" y botones de colección.
- Nuevo borrador **208304472401 "Mirea · PUBLICADO + banners deslizables"** (copia del publicado) con un banner grande deslizable en cada colección, entre la cabecera y la cuadrícula: "Lo más vendido en X", "En oferta ahora" (solo productos rebajados de esa colección), "Lo nuevo en X" y una diapositiva extra según la familia (Perfumes → Perfumes árabes; Cabello → Cuero cabelludo; Maquillaje → Labios). Los productos se cargan con la Section Rendering API (`?sort_by=…&section_id=mirea-slide-items` / `mirea-slide-ofertas`). Las diapositivas vacías se ocultan solas. Probado en jsdom.
- Archivos: sections/mirea-coleccion-slider.liquid, sections/mirea-slide-items.liquid, sections/mirea-slide-ofertas.liquid, snippets/mirea-slide-card.liquid, templates/collection.json (+ "mirea_slider").
