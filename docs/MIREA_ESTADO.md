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

### 10.6 Colecciones: cabecera quitada, chips bajo el banner (13-10-2026, borrador 208304472401)
- Nueva sección `sections/mirea-coleccion-chips.liquid`: los mismos accesos rápidos por familia (Perfumes: Mujer/Hombre/Unisex/Árabes; Piel: Granitos/Manchas…), con el título H1 oculto para Google.
- `templates/collection.json`: orden `mirea_slider` → `mirea_chips` → `main`. La cabecera `mirea_hero` NO se ha borrado: queda desactivada (`"disabled": true`), se recupera quitando esa línea.
- Afecta a todas las colecciones (comparten plantilla). Sin verificación visual desde aquí; la dueña revisa y publica.

### 10.7 Banner deslizable en todas las secciones (13-10-2026, borrador 208304472401)
- `mirea-coleccion-slider`: diapositivas extra propias de cada familia (Perfumes: árabes/ella/él · Piel: solar/sérums/hidratantes · Cabello: cuero cabelludo/mascarillas · Maquillaje: labios/rostro · Cuerpo: manos/higiene · Tecnología: dispositivos/accesorios · Bebé y hombre: hombre/bebé · Salud: piel).
- La 1ª diapositiva trae productos ya pintados desde el servidor, así el banner no desaparece si falla la carga.

### 10.8 Repaso de pendientes (13-10-2026)
- Política de privacidad (/pages/privacidad) actualizada: fila "Guardar tus listas" + Supabase (UE, París) como encargado. Fecha 13-10-2026.
- XB Wishlist: ya desinstalada (no aparece en appInstallations).
- Tarjeta regalo: aún no existe ningún producto tarjeta regalo.
- Pedido #1010 (11-10, 176,84 €, IOPE x2) pagado y SIN preparar, asignado a "Rinconada 12". Avisar a la dueña.
- Maymoo: 171 activos / 375 borradores. Activación de los 237 de MAYMOO_ACTIVAR.md sigue pendiente de la dueña.

### 10.9 Maymoo activados + tarjeta regalo (13-10-2026)
- Activados los 237 de MAYMOO_ACTIVAR.md (autorizado por la dueña: "publícalo"). Ningún pedido durante el proceso.
- Vueltos a BORRADOR al momento: 8 productos internos de Maymoo que no son para vender (Tarjeta regalo 50 €/100 €, Bolsa Maymoo, 3 "Maymoo Bonus | Recarga", Pago de señal 5 €, Vale de devolución) y 9 sin foto (Regena Foaming Wash, Elevate Shampoo, Regena Enriched Cream, Essential oil Rosa mosqueta, Body Oil Harmony/Revitalizing/Sculpture, Organic Aloe Vera Gel, Pippala Blemish Corrector).
- Resultado: 220 nuevos activos. Siguen activos de antes, sin foto: Conditioner Elevate, Regena Toner, Body wash nurture, Conditioner Nurture (no los toqué).
- Imagen tarjeta regalo: docs/imagenes/tarjeta-regalo-mirea.png (logotipo escrito, el archivo del logo no se pudo descargar desde aquí).
- Envíos Collective: no se pueden ver desde aquí (están en la app Collective de cada proveedor). Webs de Maymoo/Emanar no accesibles y en Gmail solo hay avisos automáticos de Shopify, sin correo del proveedor. Mirea cobra al cliente su "Perfil general" (5,99/10,49/10,99/18,99 €); envío gratis ≥69 € lo absorbe Mirea.
- EMANAR bajó su margen de 38 % a 30 % en algunos productos (correo 13-10 10:54). Siguen dejando beneficio, pero menos.
- 13-10: enviado correo a Maymoo (admin@jessjoie.com, cc barcelona@jessjoie.com) preguntando tarifa de envío Collective. Su web: 3,95 € península, gratis ≥35 €.
- Emanar: su web anuncia envío gratis España/Portugal ≥40 €. No hay email público; contactar por la app Collective.
- 13-10: a borrador los 4 Maymoo sin foto que ya estaban activos (Conditioner Elevate, Regena Toner, Body wash nurture, Conditioner Nurture). Maymoo: 374 activos / 172 borrador (155 sin stock + internos/sin foto/sin beneficio). Emanar: 225 activos / 211 borrador, todos sin stock.
- 13-10 · ERROR MÍO CORREGIDO: el menuUpdate de "Novedades" (menú mirea-catalogo-novedades-v11) se envió sin el 3er nivel y borró los hijos de "Por necesidad" (Granitos, Manchas, Poros, Calma, Barrera, Antiedad) y "Por tipo de piel" (seca, grasa, mixta, sensible). Restaurados con los mismos enlaces que main-menu. Lección: en menuUpdate enviar SIEMPRE el árbol completo de 3 niveles.
- 13-10: Tarjeta regalo creada por Blanca (producto 11241470493009, 10/25/50/100/150 €, con foto y descripción). Añadida al menú de cabecera (Todo › Tarjeta regalo, árbol completo de 3 niveles conservado) y al pie (tras "Envíos y devoluciones").

### 10.10 Proveedores nuevos y canales (13-10-2026, solo lectura)
- Eternas: 21 en borrador, coste ≈39 % (margen ≈60 %). Con stock: Eye Glow Mask, 24K Gold Eye Perfector, MultiRelief band, LED Mask DNIR (3 ud), Knee Massager, 24K RF Lifting, Pro PDT Lamp (2.247 €), Multi-RF Wand, 4-in-1 Eye & Face Wand. Títulos en inglés y con promesas médicas ("pain therapy", "photodynamic therapy") → traducir y suavizar antes de publicar; no publicar PDT ni el masajeador de rodilla.
- Natcare: 8 en borrador con stock, margen 20 % (≈17 % neto). Rentable.
- hello-mims (6) y &GLOW (3): ya activos, margen 40 % y 35 %.
- MOOD Earplugs (9): margen 15 % (≈2 € neto) y fuera de marca → dejar en borrador. Beauty-Privée (10): margen 10 % → no. Salluna: 0 importados.
- Canales (productos incluidos): Tienda online 9.603, TikTok 5.957, Facebook/IG 2.062, Google 1.865, Shop 1.527. Activos totales 8.427.
- 13-10 (aprobado por Blanca): Eternas → 7 publicados (Eye Glow, 24K Eye Perfector, MultiRelief, DNIR, 24K RF Lifting, Multi-RF Wand, 4 en 1). Títulos y descripciones traducidos al español, sin promesas médicas ("dolor", "terapia fotodinámica"), sin "FDA certified" ni la garantía de 365 días del proveedor (no es la política de Mirea). NO publicados: Pro PDT Lamp y Knee Massager (promesas médicas) ni los que no tienen stock.
- Natcare → 8 publicados con títulos descriptivos en español (las descripciones ya estaban en español).
- Los 15 con tipo "Dispositivo de belleza" para que entren en la colección automática dispositivos-faciales. Publicados en Tienda online + Shop.
- Canal Shop: bulkOperationRunMutation bloqueado por la política de seguridad del conector. Publicar 8.442 productos uno a uno serían ~170 llamadas → se le pide a Blanca hacerlo desde el admin (Productos › seleccionar todos › Incluir en canales de ventas › Shop).
- 13-10 (aprobado por Blanca): publicados también con texto solo cosmético/bienestar: "Eternas Pro · Panel LED profesional" (antes PDT Lamp, 2.247 €, tipo Dispositivo de belleza) y "Eternas · Masajeador de calor y vibración" (antes Knee Massager, 175 €, tipo Cuerpo). Sin menciones a dolor, enfermedades ni terapia; aviso de que no es producto sanitario.
- 13-10: colecciones nuevas (automáticas por proveedor, publicadas en Tienda online + Shop): aparatos-de-belleza (Eternas + Natcare), eternas, natcare. Menú de cabecera: "Tecnología" pasa a "Aparatos y tecnología" (enlaza a aparatos-de-belleza) con submenú Aparatos LED y radiofrecuencia · Eternas · Natcare · Dispositivos faciales · Accesorios de belleza · Toda la tecnología; también en Todo › Aparatos LED y radiofrecuencia. Árbol completo de 3 niveles conservado.
- Borrador 208304472401: chips y banner deslizable incluyen las colecciones nuevas (diapositivas extra Eternas / Natcare / Dispositivos faciales).
- 13-10: Home del borrador 208304472401: nueva sección `mirea-home-aparatos` (banner oscuro con productos de la colección aparatos-de-belleza + enlaces Eternas/Natcare), colocada justo después del hero. El resto de la home sin cambios (index.original.json guardado para volver atrás).
- 13-10: Blanca PUBLICÓ 208304472401 ("PUBLICADO + banners deslizables"). Fallo visto en la home: descripción y enlace de las secciones "Mirea · Colección" salían con letras montadas (mirea-luxury-home aplica serif + letter-spacing -.035em !important a todo .mirea-collection__heading). Arreglo en snippets/mirea-tipografia-lujo.liquid → nuevo borrador 208357687633 "PUBLICADO 13-10 + arreglo textos".
- 13-10: "Ahora en oferta" mostraba productos sin descuento. Causa: EMANAR BEAUTY manda un "precio anterior" (compareAtPrice) MENOR que el precio de venta y la colección automática `ofertas` (regla "precio rebajado") los cuenta igual. Quitado el compareAtPrice a las 10 variantes activas afectadas (valores antiguos guardados; p. ej. Tiramisu 35,50 / 16,92). Revisión completa de 14.724 variantes: activos con descuento real = 95; con "precio anterior" ≤ precio quedan 345, todos en BORRADOR (no se ven en la tienda, no se tocan). Riesgo: Collective puede volver a sincronizarlo → revisar en la revisión semanal.
- 14-10: Auditoría SKU (docs/AUDITORIA_SKU.md): SKUs repetidos son por tonos/tamaños del proveedor, no se tocan. 57 grupos de posibles productos repetidos para revisar; sin cambios.
- 14-10: Google Merchant 5857344812 (cuenta correcta). España casi sin rechazos: los "precio no coincide / fuera de rango" son de variantes antiguas que ya no existen en Shopify (Google las quita solas). Rechazos reales solo en países de fuera (Canadá, Australia, Suiza, Emiratos, Costa Rica, Rep. Dominicana) por políticas de salud automáticas de Google y páginas de esos mercados. Sin cambios.
- 14-10 (pedido por Blanca): 35 productos repetidos entre Maymoo y Korealy → se deja la copia más barata y la otra pasa a BORRADOR (lista en docs/AUDITORIA_SKU.md). SKUs Korealy compartidos entre productos distintos → se añade sufijo "-últimas 5 cifras del id" (780 variantes; códigos antiguos guardados). Tonos del mismo producto sin tocar. Canal Shop: Blanca incluyó todos los productos desde el admin.
- 14/15-10: Merchant 5857344812: faltaba envío para BG, HR, MT y LI. Blanca creó la política "Shipping Policy 0 14" (BG, HR, MT · EUR · por peso, mismos tramos que Shopify · 6-15 días). LI se deja sin envío (país diminuto). Número de registro coreano: se deja vacío (no aplica). Aviso de "moneda no coincidente" en el 100 % visto justo después de guardar → revisar en 24-72 h. Pendiente de Blanca: política de devoluciones en Merchant (14 días, cliente paga, sin abrir).
- 15-10: Hero home con foto nítida → borrador 208468246865 (snippet mirea-tipografia-lujo). Email novedades octubre en Klaviyo: campaña BORRADOR 01M4Z69PKGYS6TPK6BJ809VC31 (lista "Lista de email"), plantilla RavAM9; pruebas enviadas a Blanca; NO enviada a clientas.
- 15-10: Nuevo borrador 208469131601 "ideas MiiN" (copia del anterior). Fase 1: etiquetas "-X %" (descuento real) y "Nuevo" (<30 días) en tarjetas (blocks/_product-card-gallery), barra de anuncios con 5 mensajes (aparatos y tarjeta regalo), añadir rápido activado con botón oscuro, pie con más enlaces, "Pago seguro" y frase grande "Tu piel, con criterio.".

### 15-10 · Ideas MiiN · fase 2 (inicio) — borrador 208469131601
- templates/index.json: "¿Qué necesita tu piel hoy?" (mirea_necesidades_yRix6d) sube justo debajo del hero. Ninguna sección borrada; Selección K-Beauty sigue oculta como estaba. Subido y comprobado (MD5 62523eb7…, 20889 bytes). Tema NO publicado.
- Prueba del email de novedades: llegó a blancasdlr@gmail.com el 15-10 a las 07:24 UTC, en la pestaña Promociones. La campaña 01M4Z69PKGYS6TPK6BJ809VC31 sigue en borrador hasta que Blanca diga "envíalo".

### 15-10 · Ideas MiiN · fase 2 (secciones nuevas) — borrador 208469131601
- blocks/_product-card-gallery.liquid: etiquetas "-X %" / "Nuevo" pasan arriba a la IZQUIERDA (antes chocaban con el corazón). Subido.
- Subidas al borrador y colocadas en la portada: sections/mirea-portada-partida.liquid (foto grande + carrusel de packs de /collections/rutinas), mirea-rutina-banner.liquid (banner "Encuentra tu rutina"), mirea-por-que.liquid (3 tarjetas con icono), y mirea-marcas-home.liquid ahora con foto del primer producto de cada marca.
- Colocar las 3 nuevas en la portada choca con el límite de Shopify de 25 secciones por página (hay 24). La subida que quitaba 2 secciones ocultas (hero antiguo y "Novedades seleccionadas") primero se rechazó; Blanca eligió después "Quitar 2 ocultas" → subido. Las 2 siguen guardadas en el tema publicado y en git (commit 0934814).

### 15-10 · Arreglos y Virales — borrador 208469131601
- Mirea AI: la plantilla templates/page.mirea-ai.json había vuelto a la de Horizon (en TODOS los temas, también el publicado) y ya no cargaba la sección del asistente (sections/mirea-ai.liquid, test de 6 preguntas, sin servicios externos). En el borrador ya vuelve a cargarse. En la tienda publicada seguirá sin salir hasta que se publique el borrador.
- Guías: /pages/la-guia nunca listaba las guías; tenía solo 2 tarjetas con enlaces. Creada templates/page.la-guia.json (texto de la página + guías ES de guias-mirea + guías EN de mirea-guides-english, con la sección mirea-guias-luxe). La página la-guia ahora usa la plantilla "la-guia" (templateSuffix). El tema publicado no tiene esa plantilla, así que allí se ve igual que antes.
- Portada: "Imprescindibles" pasa a "Virales en TikTok 🔥", con etiqueta "🔥 Viral" en las fotos: COSRX Snail, BoJ Relief Sun Aqua-fresh, Anua 77, medicube PDRN cream, SKIN1004 Centella, BoJ Glow Serum, medicube Zero Pore Pad, LANEIGE Lip Mask. Antes salía pegado al borde porque faltaba el ancho; corregido.
- Nueva colección "Virales en TikTok" (/collections/virales-en-tiktok, id 694143385937) con 9 productos, publicada en Tienda online.
- Fondos de producto en blanco y sin marco: "Ahora en oferta" (fondo #fff, CSS en mirea-tipografia-lujo) y las tarjetas del carrusel de novedades.

### 15-10 · Packs, foto y menú — borrador 208469131601
- Portada partida: los packs muestran en la foto todos sus productos (snippet mirea-pack-stage, fondo blanco y sin marco). La foto grande cambia a Mirea_Minimal_Editorial.png porque a Blanca no le convencía la calidad de la anterior.
- Menú nuevo SOLO para el borrador: "Mirea · Catálogo · MiiN borrador" (handle mirea-catalogo-miin, id 348021490001). Es copia exacta del menú v11 con todos sus submenús, más:
  - "Rutinas y packs" en la cabecera: packs, test, Mirea AI, guías y todas las rutinas.
  - "Novedades" con un desplegable: Recién llegado y Virales en TikTok 🔥.
  - El menú v11 de la tienda publicada no se ha tocado.
- header-group.json del borrador apunta a mirea-catalogo-miin. Se mantiene menu_style featured_products, así los desplegables enseñan fotos de producto.

### 15-10 · Fondo blanco, marcas sin marco, fotos de guías y Dúos
- Fondo blanco en el borrador 208469131601. El beige venía de snippets/mirea-luxury-home.liquid, que fuerza #MainContent #fbf8f5, .mp-section #f2ece8 y fotos #f8f4f1 con !important. Se anula con un bloque al final de mirea-tipografia-lujo.liquid; para deshacerlo basta borrar ese bloque. En index.json pasan a #ffffff el carrusel de novedades, las marcas y necesidades; en la portada partida, el CSS. settings_data ya tenía fondo #ffffff y no se tocó. Copias originales en scratchpad/bg/.
- Marcas de la portada: sin marcos ni bordes, fondo blanco, solo foto + nombre.
- Fotos nuevas de las 7 guías ES (Canva, estilo editorial hiperrealista; Higgsfield tenía 0 créditos). Subidas a cada producto y puestas como foto PRINCIPAL; la portada minimalista antigua sigue como 2.ª foto. Esto ya se ve en la tienda publicada. Diseño de Canva: DAHYEIludc4.
- 6 Dúos creados en BORRADOR (no se venden hasta activarlos) como bundles nativos, igual que los packs (requiresComponents, 1+1 componentes):
  - duo-labios: 32,95 €; margen ~39 %.
  - duo-solar-limpiador: 28,95 €; margen ~35 %.
  - duo-granitos: 33,90 €; margen ~33,5 %.
  - duo-contorno-ojos: 32,95 €; margen ~35 %.
  - duo-barrera: 72,95 €; margen ~37 %.
  - duo-solar-doble-limpieza: 43,95 €; margen ~29 %.
  - Descuento de un 8-9 % frente a comprarlos sueltos. Los márgenes ya descuentan IVA y comisión de pago.
- Colección automática "Dúos y packs" (/collections/duos-y-packs, tipo = Pack), publicada. Añadida al menú del borrador, en "Rutinas y packs".
- Los virales (BoJ Relief Sun, LANEIGE, SKIN1004, Anua, medicube…) no tienen coste en Shopify, así que no se han usado en los dúos.

### 15-10 · Dúos activos y email enviado (Blanca: "si")
- Los 6 dúos pasan a ACTIVO y se publican en Tienda online y en Shop. La colección "Dúos y packs" ya los muestra.
- La campaña de Klaviyo 01M4Z69PKGYS6TPK6BJ809VC31 ("Novedades octubre") se lanza a la lista VU7PcQ. El envío quedó en cola (status queued); no se ha comprobado que se completara.

### 15-10 · Tema MiiN publicado por Blanca; borrador nuevo "sin marcos"
- El tema publicado ahora es 208469131601 ("ideas MiiN"). Lo publicó Blanca.
- Nuevo borrador 208503996753 "Mirea · 15-10 sin marcos · BORRADOR", copia del publicado. Única diferencia: CSS en mirea-tipografia-lujo.liquid que quita bordes y sombras y pone fondo blanco en las fotos de producto de toda la tienda (perfumes árabes, colecciones, ofertas, packs, virales, portada partida).
- Para verlo: https://mireaskin.es/?preview_theme_id=208503996753. Hay que publicarlo para que se vea en la tienda.

## 15-10 · Borrador "ideas Sephora" (tema 208505340241, SIN publicar)
- Duplicado del tema publicado "sin marcos". Secciones nuevas subidas: mirea-promo-tramos ("Tramos regalo": +35 € guía, +60 € guía+journal, +69 € envío gratis*), mirea-dos-tarjetas (Aparatos LED / Dúos que ahorran), mirea-experiencias-cards ("Mucho más que productos": Mirea AI, Test, Guías, Tarjeta regalo) y mirea-spa-casa (disponible en el editor, no añadida para no repetir los aparatos).
- Portada (index.json): quitadas 7 secciones ocultas o del fondo (Desde España, Guía, Ventajas, Marquee, Pasos, Origen Corea, Regalos). Las secciones siguen existiendo en el tema, así que se pueden volver a añadir. Total: 21 secciones.
- Vista previa: https://mireaskin.es/?preview_theme_id=208505340241
- Colección "Desde España" (en el borrador): el banner negro "Lo más vendido" deja de salir en esa colección (nuevo ajuste ocultar_en del banner deslizable). En su lugar va una sección nueva, "Mirea · Categorías" (mirea-categorias-portada), con 8 portadas: Perfumes, Cabello, Piel, Cuerpo, Maquillaje, Salud, Aparatos y Sets de regalo. La foto sale de la colección o, si no tiene, de su primer producto. Las portadas llevan a la colección general de cada categoría: "Desde España" no tiene subcategorías propias y los productos de Padilla no tienen tipo de producto.
- Banner deslizable de las colecciones (en el borrador): deja de ser negro. Ahora usa degradados claros en rosa, melocotón y verde salvia, con botón oscuro, tarjetas redondeadas y etiquetas rosas.
- Colección nueva "Todos los packs" (todos-los-packs), automática y publicada en la tienda online. Incluye los títulos con pack, dúo, kit o estuche y los productos de tipo Pack.
- Portada partida (borrador): foto al 30 % y carrusel grande (3 tarjetas visibles) con TODOS los packs, flechas, marca y descuento. Ajuste nuevo "todos_los_packs", activado por defecto.
- Banner de colecciones (borrador): cada diapositiva lleva un tono pastel distinto (rosa, celeste, amarillo, menta, lila y melocotón).
- Categorías de Desde España (borrador): ahora compactas, 8 en fila, cuadradas y con la etiqueta "🚚 Envío rápido desde España".
- Carrito (borrador): el aviso de envío depende ahora del origen real de cada producto (snippet mirea-cart-envio, que se pinta desde mirea-cart-goal). Los productos de la colección Desde España muestran 🇪🇸 'Sale desde España'. Los de Collective que no son de España, 📦 'Lo envía su proveedor'. El resto, 🇰🇷 'Directo desde Corea del Sur'. Las guías PDF, 'Descarga digital'. En carritos mixtos sale una línea por origen con el número de productos y el aviso de paquetes separados. El texto fijo antiguo de Corea queda oculto con CSS (no se ha borrado).
- 15-10 tarde (borrador + catálogo):
  - Colecciones nuevas, publicadas en la tienda online:
    - perfumes-arabes-elixir: automática; etiqueta EMANAR BEAUTY y "elixir" en el título.
    - perfumes-arabes-cofres: manual, con 2 sets árabes.
    - desde-espana-cofres-perfume: automática; Perfumerias Padilla y "cofre" en el título.
  - Colección Desde España: se quita la regla EMANAR BEAUTY para que no salgan los perfumes árabes. A los 40 productos capilares de EMANAR (Salerm/Lendan) se les añade la etiqueta "Envío: España" para que sigan dentro.
  - Carrito: el origen se detecta ahora por etiquetas de proveedor (EMANAR cuenta como España).
  - Menú del borrador (mirea-catalogo-desde-espana-1510):
    - "Perfumes" pasa a "Perfumes árabes", con Para mujer / Para hombre / Unisex / Elixir e intensos / Cofres y sets.
    - "Novedades" y "Ofertas" se juntan en "Novedades y ofertas" (Novedades, Ofertas, Virales, Todos los packs).
    - Desde España: Ver todo + Cofres de perfume.
  - collection.json: portadas de perfumes árabes y de novedades/ofertas. En Desde España se recuperan las imágenes de antes y se quitan las fotos de Canva, a petición de Blanca.
- 17 perfumes árabes de Lattafa vendidos por Perfumerías Padilla (Yara, Khamrah, Asad, Bade'e Al Oud…):
  - Etiquetas: se quita "Perfumerias Padilla" y se añaden "Proveedor: Perfumerías Padilla" y "Perfume árabe". Así salen de Desde España.
  - Se añaden a las colecciones Perfumes y Perfumes árabes.
  - El carrito sigue contándolos como envío desde España (la etiqueta Proveedor está en la lista).
- Menú del borrador: se quita "Novedades y ofertas" de la barra porque no cabía. Dentro de "Todo" van por separado Novedades, Ofertas, Virales y Todos los packs; se quita el duplicado "Perfumes".

## 16-10 · Menú visual (Todo, Desde España y resto)
- Blanca publicó "15-10 ideas Sephora" (208505340241, ahora MAIN). Desde aquí se trabaja en la copia "16-10 España y fichas · BORRADOR" (208546693457), idéntica a la web.
- Subidos a 208546693457: snippets/mirea-mega-sephora.liquid (nuevos kind 'visual' y 'espana') y snippets/mega-menu-list.liquid.
  - Todo y demás desplegables: tarjetas redondas con foto de la colección/producto o emoji si no hay foto, más tarjetas "Encuentra tu rutina" y "Ofertas".
  - Desde España: secciones desde-espana-{perfumes,cofres-perfume,piel,cabello,cuerpo,maquillaje,salud,aparatos,sets} (se ocultan si están vacías), sello "🚚 Envío rápido desde España" y chips con todas las marcas de la colección desde-espana (sin Padilla/EMANAR/Mirea).
- Subcolecciones DE: perfumes 1132, piel 956, maquillaje 246, cuerpo 170, sets 143, cabello 105, aparatos 19, salud 7 (desde-espana total 2771). Ningún perfume árabe en "DE · Perfumes". El etiquetado se cortó en el lote 10 de 12 por límite de uso: puede faltar algún producto.

## 16-10 (2) · Menú por grupos, Corea / España separados, título en colecciones
- Borrador 208546693457 · menú "mirea-espana-sets-1610-borrador" (solo lo usa este borrador; la web usa mirea-catalogo-desde-espana-1510, sin tocar).
  - Todo: + "Desde Corea" (/collections/desde-corea), + Encuentra tu rutina, Mirea AI, Guías Mirea (quitados de Rutinas y packs).
- snippets/mirea-mega-tile.liquid (nuevo): tarjeta redonda siempre con foto (sin emojis).
- snippets/mirea-mega-sephora.liquid: Todo agrupado (Comprar por / Por origen / Especial Mirea / Te ayudamos); categorías con fila "Desde Corea" (enlaces …/envio-corea) y fila "Desde España" (…/envio-espana + Ver todo desde España); Desde España igual.
- sections/mirea-categorias-portada.liquid: dentro de una sección (p. ej. desde-espana-sets) sale su título grande, "← Ver todas las secciones" y la tarjeta marcada.
- En marcha (subagentes): etiqueta "Envío: Corea" (~7.400 productos) + colección desde-corea; terminar etiquetas DE · *.
- Pendiente de Blanca: ¿Eternas (Shopify Collective, incl. Pro PDT LED Lamp 1.460 €) envía desde España?
- 16-10: subcolecciones DE terminadas (perfumes ~1.167, piel 946, maquillaje 253, cuerpo 177, cabello 100, sets 82→71, aparatos 19, salud 7). 20 perfumes árabes de Padilla (17 Lattafa + 3 Armaf Club de Nuit) sin "Envío: España"/"Perfumerias Padilla", con "Perfume árabe" y "Proveedor: Perfumerías Padilla" (carrito sigue diciendo España); Armaf añadidos a perfumes y perfumes-arabes. Quitado "DE · Sets" de 11 borradores Maymoo que no son productos (bonos, vales, bolsas, tarjetas).

## 17-10 · Publicado 16-10; nuevo borrador 208579199313 "17-10 siguiente"
- Blanca publicó 208546693457 (16-10 España y fichas). El menú del borrador nuevo sigue siendo mirea-espana-sets-1610-borrador = menú en vivo: no tocarlo sin copiarlo antes.
- Creada y publicada colección desde-corea (694310961489, regla etiqueta "Envío: Corea"). 5 agentes etiquetando por rangos de id.
- sections/mirea-origen-tienda.liquid (nuevo) + index.json del borrador: "Desde Corea" y "Desde España" tras Necesidades, con pestañas por sección y 10 productos disponibles por pestaña.
- 17-10: etiquetado "Envío: Corea" terminado: 8.482 productos (desde-corea = 8.482). 0 con Envío: España, 0 sin clasificar. Excluidos los 22 "Origen: No coreano" (Symphonya: Wella, Goldwell, American Crew…).

## 17-10 (2) · Origen y fecha de llegada (borrador de ChatGPT 208635494737 "17-10 perfumes doble + cremas")
- Blanca publicó 208579199313. Trabajo en el borrador donde edita ChatGPT, por petición suya. (Creé 208678355281 "17-10 origen y fecha" antes de saberlo: está sin usar, se puede borrar desde el admin).
- snippets/mirea-origen.liquid (nuevo): pastilla "🇪🇸 Envío rápido" / "🇰🇷 Desde Corea" y caja de llegada en la ficha (Corea: fecha aprox. hoy+14 a hoy+21 días; España: sin días, "plazo exacto en el pago"). Misma regla de origen que el carrito.
- templates/product.json: bloque "Mirea · Origen y llegada" bajo el botón de compra + pastilla en "También te puede gustar".
- templates/collection.json: pastilla en las tarjetas de producto de las colecciones.
- Pendiente: agotados al final (ajuste de la app Search & Discovery, lo hace Blanca o lo reviso).
- 17-10: collection.json (borrador 208635494737): sección "mirea_corea_cat" solo en desde-corea con 8 tarjetas (Piel, Protección solar, Maquillaje, Cabello, Cuerpo, Aparatos, Suplementos, Hombre) que enlazan a cada colección filtrada por etiqueta (/collections/x/envio-corea). Slider oscuro oculto también en desde-corea.

## 17-10 · Borrador 208635494737 (compartido con ChatGPT) — portada, menú, carrito, rutina
- Nueva sección `mirea-portada-tienda` arriba del todo: franja de confianza, titular, 2 botones (Corea / España), buscador grande y accesos rápidos.
- Hero más bajo (120 → 100). Productos Corea y España justo después.
- Quitada la sección desactivada "Método" (límite de 25). Copia en docs/respaldos/index_mirea_metodo_desactivada.json.
- Menú corto nuevo `mirea-menu-corto-1710-borrador` (8 opciones: Todo, Piel, Maquillaje, Cabello, Cuerpo, Desde España, Perfumes árabes, Más). Ya puesto en la cabecera del borrador. El menú del tema publicado NO se ha tocado.
- Carrito: si es de España y vale menos de 69 €, se sugieren 3 productos de España con botón "Añadir" (snippet `mirea-cart-sugerencias`).
- "Completa tu rutina" en ficha (`mirea-rutina-pro`): pasos según etiquetas "Paso:"; botón "Añadir la rutina completa".
- Nada publicado. Vista previa: https://mireaskin.es/?preview_theme_id=208635494737
- 17-10 (tarde) · Menú escritorio: "Más" ahora es una rejilla simple (sin separar Corea/España). Fotos de las tarjetas: se usa un producto CON STOCK, recorte cuadrado centrado y algo de zoom para quitar el blanco. "Sets de regalo" usa la foto de "Cofre Boss Bottled" (lista `fotos_fijas` en mirea-mega-tile para fijar más a mano).
- 17-10 · Menú móvil con fotos (agente): snippets/mirea-drawer-thumb.liquid + header-drawer.liquid (solo < 750 px).
- 17-10 · Fotos fijas de "Desde España" (menú): Perfumes = Good Girl · Cofres = Black Opium · Piel = Clinique Moisture Surge 100H · Cabello = Aromatica Rosemary · Cuerpo = Elizabeth Arden Eight Hour · Maquillaje = Clinique Almost Lipstick Black Honey · Salud = Mims Beauty · Aparatos = Medicube AGE-R Booster Pro rosa · Sets = Cofre Hydra Zen Lancôme. Se cambian en `fotos_es` (mirea-mega-sephora) y `fotos_fijas` (mirea-mega-tile).
- 18-10 · Menú Todo: fotos distintas para Todos los productos (BoJ Glow Serum), Más vendidos (Laneige Neo Cushion), Desde Corea (Medicube AGE-R Pro X2), Virales (BoJ Glow Deep Serum). Lista `fotos_titulo` en mirea-mega-tile.
- 18-10 · Borrador 208635494737 · parte de arriba más limpia (como Primor):
  - Quitada la barra beige (header-menu `navigation_bar: false`). Marcas pasa al menú principal; Foro a Todo › Te ayudamos; Ayuda y Seguimiento ya estaban en el pie.
  - Quitada la franja rosa de la app (render comentado en layout/theme.liquid); ahora es un aviso más de la barra negra.
  - Portada: sin franja negra de confianza (ahora línea gris bajo los botones), botones con banderas (negro + borde), fila de 13 iconos redondos tipo Primor (bloques editables: colección + producto para la foto).
  - Desplegables: cada producto sale solo una vez por menú (antes se repetían fotos, p. ej. Higiene / Higiene bucal).
  - Copias de lo anterior en docs/respaldos/*_antes_1810.*
- 18-10 · Iconos portada: Desde Corea y Desde España primero, Bebé al final; Novedades (medicube Red Erasing), Virales (COSRX Snail) y Sérums (SKIN1004 Centella) con fotos distintas; fila ya no se corta por la izquierda (se desliza).
