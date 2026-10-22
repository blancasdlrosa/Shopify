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
- 18-10 · Icono Suplementos (colección salud, foto Mims Beauty) añadido tras Aparatos.
- 18-10 · MOOD Earplugs (Collective, 9 productos): pasados de Borrador a Activo y publicados en Tienda online (sin tocar precios). Colección automática "Tecnología" (690003804497): añadida regla Proveedor = "MOOD Earplugs". Margen Collective 15 %: de 0,89 € (almohadillas) a 4,49 € (Mood Pro) por unidad, antes de comisiones de pago.
- 18-10 · Pestañas "Te llega en pocos días" (España) no abrían: Corea y España tenían los mismos ids de bloque (s1…s8). Arreglado en mirea-origen-tienda (ids con section.id).
- 18-10 · Marcas portada sin foto: creadas colecciones automáticas por proveedor Torriden, VT y numbuzin (publicadas).
- 18-10 · MOOD Earplugs: colección "MOOD · Descanso y protección auditiva" (/collections/mood), añadido proveedor a "Aparatos de belleza" (junto a Eternas y Natcare) y enlace en menú borrador Más › Aparatos y tecnología.

## 18-10 · MOOD a Salud y bienestar + sección mitad y mitad (borrador 208635494737)
- Menú borrador `mirea-menu-corto-1710-borrador`: MOOD sale de Aparatos. Nuevo grupo Más › Salud y bienestar (Suplementos + MOOD · Tapones y descanso). menuUpdate sin errores.
- Nueva sección `sections/mirea-dos-mitades.liquid` (2 bloques "mitad": colección + 3 productos disponibles; en móvil se apilan).
- `templates/index.json`: `mirea_collective_rituales` pasa a ser mitad y mitad: Seda (rituales-de-seda-y-autocuidado) | Descanso (mood). Mismo sitio, sigue en 25 secciones.
- Antes de subir: checksum remoto 2e51a8f2… (solo cambió la cabecera automática de Shopify, contenido igual al local).
- Tema NO publicado.

## 18-10 · Blanca publicó el tema
- Comprobado por API: el tema 208635494737 ("Mirea · 17-10 perfumes doble + cremas · BORRADOR") es ahora el PRINCIPAL (MAIN). Lo publicó Blanca.
- Lleva la sección mitad y mitad (seda | MOOD) y el menú `mirea-menu-corto-1710-borrador`. Ese menú ya es el de la web en vivo: cualquier cambio en él se ve al momento.
- Desde aquí ya no se pueden escribir archivos en el tema en vivo. Para más cambios de diseño hay que duplicar el tema en Shopify (Temas → … → Duplicar) y trabajar en la copia.

## 18-10 · Descripciones MOOD reescritas (9 productos)
- Nuevas descripciones con el mismo esquema: frase clave, "Ideal para", "Por qué te va a gustar", "Qué incluye"/colores. Fuera los colores azules en línea y las etiquetas <meta> sueltas.
- Solo datos del proveedor (dB, tallas, contenido de la caja, medidas del estuche, colores de las variantes). Nada inventado.
- SEO: título y meta descripción en los 9. Tipo de producto rellenado donde faltaba (antifaz, cascos, accesorios).
- Comprobado por API: los cambios están guardados. Copia del texto original en docs/respaldos/mood_descripciones_antes_1810.md.
- Ojo: son productos de Shopify Collective. Si el proveedor vuelve a sincronizar, podría pisar el texto.

## 18-10 · Botones de portada más claros (copia 208757555537, sin publicar)
- Tema duplicado por API: "Mirea · 18-10 botones Productos coreanos · BORRADOR" (208757555537), copia exacta del tema en vivo.
- index.json de la copia: boton_1 "🇰🇷 Productos coreanos", boton_2 "🇪🇸 Envío rápido desde España", icono "Desde Corea" → "Coreanos". Los enlaces no cambian.
- Vista previa: https://mireaskin.es/?preview_theme_id=208757555537 . Para aplicarlo, Blanca publica la copia.

## 18-10 · Desde España: portadas con productos españoles (copia 208757555537)
- Sección `mirea-categorias-portada`: nuevo ajuste "Producto para la foto". Orden de la foto: foto propia > producto elegido (si hay stock) > foto de la colección > primer producto con stock.
- collection.json (copia): las tarjetas de Desde España apuntan a las colecciones desde-espana-* y usan estas fotos: Sets → Cofre Idôle (Lancôme), Perfumes → Good Girl, Cabello → Sisley Masque Soin Régénérant, Piel → Clinique Moisture Surge, Cuerpo → Elizabeth Arden Eight Hour, Maquillaje → Clinique Almost Lipstick Black Honey, Aparatos → Natcare Jade. Salud se queda con la foto de su colección (mims).
- Corea, perfumes árabes y novedades: sin cambios (no tienen producto elegido).
- Copia local anterior en docs/respaldos/collection_local_antes_1810.json.

## 19-10 · Pendientes repasados
- Tema publicado por Blanca: 208757555537 ("18-10 botones Productos coreanos") es ahora el MAIN (comprobado por API).
- Eternas: su almacén en Shopify Collective está en España → los 9 productos activos llevan ahora las etiquetas "Envío: España" y "DE · Aparatos" (salen en Desde España y en DE · Aparatos). Para quitarlo, basta con borrar esas dos etiquetas.
- Maymoo: ya hay 344 activos. De los 49 borradores con stock, la mayoría se dejaron así a propósito: son repetidos (AUDITORIA_SKU.md) o productos internos sin foto. Activados (y publicados en la tienda online) solo 2 que no tenían repetido activo: APLB Bakuchiol Propolis Cream y COSRX The Retinol 0.1 Cream.
- Política de privacidad: el conector no tiene permiso `write_legal_policies`. Blanca pegó el texto de docs/PRIVACIDAD_MIS_LISTAS.md (antes de "Third Party Websites and Links") y lo guardó; comprobado por API el 19-10 a las 15:12.
- Etiquetado Desde España: 0 productos activos sin etiqueta "DE · …" (comprobado para todas las fuentes: Envío: España, Maymoo, Padilla, mims, Natcare, Rulls, Dr.Mush, Salluna).
- Visto de paso: las políticas de reembolso, envío y términos muestran etiquetas HTML como texto (&lt;div&gt;…) y marcadores sin rellenar ({{ email }}, {{ last_updated }}). Hay que arreglarlas desde el admin (no hay permiso por API).
- No se pueden hacer por API: política de devoluciones en Merchant Center, desinstalar XB Wishlist, "agotados al final" (Search & Discovery).
- 19-10: Merchant 5857344812 ya tiene política de devoluciones: 14 días, la paga el cliente, Verificada, 108 países (visto en captura de Blanca). Hecho.
- 19-10: Blanca puso "agotados al final" en Search & Discovery. XB Wishlist ya NO está instalada (comprobado en la lista de apps por API, 52 apps, ninguna wishlist).

## 19-10 · Políticas legales limpias (comprobado por API)
- Reembolso (15:59), Envío (17:10) y Términos (17:11): Blanca pegó el texto limpio. Ya no aparece código `<div>` ni `{{ email }}` / `{{ shop_name }}` / `{{ last_updated }}`.
- Email de contacto en las tres: my.mireaskin@gmail.com. Fecha: 19 de octubre de 2026.
- Términos: los enlaces a Envíos y Devoluciones apuntan a mireaskin.es/policies/...
- Privacidad ya estaba bien (15:12).
- Información de contacto (17:15) y Aviso legal (17:20) creados y comprobados por API. El Aviso legal lleva titular y NIF que puso Blanca (no se copian aquí). Sin código raro ni textos "ESCRIBE AQUÍ".
- 19-10: Diagnóstico ventas: pocas visitas (119 en oct.), 23% añade al carrito, se van en el pago por el envío. Blanca elige solo el punto 4 (más visitas). Borrador de contenido semana 1 en docs/CONTENIDO_SEMANA_1.md (sin publicar).
- 19-10 (noche): Blanca autoriza publicar automáticamente en Instagram (mireaskin_) y TikTok (mireaskin) vía Metricool (brand 6949847). Programados con autoPublish:
  - 20-10 20:00 medicube Scalp Serum (id 400470296)
  - 21-10 20:00 Rutina retinol IOPE + AESTURA (id 400470568)
  - 22-10 20:00 Protector whamisa (id 400470735)
  - 24-10 12:00 Mascarillas Anua + Biodance (id 400470804)
  Fotos reales del producto (fondo blanco). Marcados como contenido de marca propia en TikTok. Se pueden borrar en el planificador de Metricool antes de la hora.
- 20-10: Estilo propio de Mirea para redes (crema #F8F2EE, rosa #EBDAD4, ciruela #925B6D, tinta #352B30; Cormorant Garamond + Inter; 1080x1350). Plantillas HTML en el Mac: /tmp/mirea_posts (base.css, p1..p6.html, render.sh con Chrome headless). 23 imágenes subidas a Shopify Files (mirea-ig-p*.png).
  Metricool (autoPublish, IG + TikTok):
  - 20-10 20:00 Carrusel "¿Se te cae el pelo en otoño?" (5) · id 400776022
  - 21-10 20:00 Carrusel "Retinol para principiantes" (6) · id 400776043
  - 22-10 20:00 Carrusel "Mito o realidad: protector en otoño" (4) · id 400776065
  - 23-10 20:00 Carrusel "El orden correcto de tu rutina" (4, sin producto) · id 400777977
  - 24-10 12:00 Carrusel "Plan de sábado 🍋 o 🖤" (3) · id 400777941
  - 25-10 12:00 Frase "Tu piel no necesita 12 pasos" (1) · id 400778025
- 20-10: Semana 2 programada en Metricool (IG + TikTok, autoPublish), plantillas p7-p12 en /tmp/mirea_posts del Mac:
  - 26-10 20:00 Doble limpieza (SKIN1004 + Anua) · 400798016
  - 27-10 20:00 4 señales de piel con sed (illiyoon) · 400798058
  - 28-10 20:00 3 errores con la vitamina C (Anua Vita 10) · 400798140
  - 29-10 20:00 Test tipo de piel A-E (sin producto) · 400798181
  - 31-10 19:00 Halloween: lo que da miedo a tu piel · 400798219
  - 01-11 12:00 Frase "Menos productos. Mejores hábitos." · 400798274
  Pendiente: contestar comentarios (sobre todo test A-E) recomendando producto.
- 20-10: Mensajes para creadoras preparados en docs/MENSAJE_CREADORAS.md (sin enviar; Blanca decide a quién y presupuesto).
- 20-10: Blanca NO regala producto. Mensajes cambiados a modelo solo comisión (UpPromote, ya instalada). % sin decidir.

## 2026-10-20 · Planes gratis de crecimiento ("perfecto todos")

1. **Emails Klaviyo**: ya existían y están activos (carrito TX2NFZ, checkout RZzUtE, Welcome 10% Vnwwa7, Welcome PRO VNKYNs, postcompra, cross-sell, reposición, win-back, VIP). No se ha duplicado nada.
   - Últimos 30 días: carrito 54 envíos, 15 % aperturas, 0 clics. Checkout 14 envíos, 0 clics.
   - Causa probable: el remitente es una dirección @gmail.com, y Gmail manda esos correos a spam o a Promociones. Recomendado: remitente con dominio propio (p. ej. hola@mireaskin.es) y verificar el dominio en Klaviyo. Lo tiene que decidir Blanca.
2. **Blog** (Consejos de skincare): 3 artículos nuevos en **borrador (ocultos)**, pendientes de que Blanca los apruebe:
   - protector-solar-coreano-piel-grasa (Article 645415731537)
   - vitamina-c-coreana-cual-elegir (Article 645415764305)
   - cosmetica-coreana-original-espana (Article 645415829841)
   - Todos enlazan a productos activos y con stock.
3. **Pinterest**: no está conectado en Metricool (solo Instagram y TikTok). Blanca tiene que conectarlo.
4. **Merchant 5857344812** (solo lectura):
   - No hay problemas a nivel de cuenta.
   - En España los productos aparecen como "elegible limitado". Los rechazos son de otros países (moneda/envío) o de anuncios, que no aplican.
   - 30 días: 659 impresiones gratis, 0 clics.
   - No se ha tocado nada.
5. **Judge.me**: no hay acceso por API. Hay que comprobar en la app que el email "Review request" está activado.

## 2026-10-20 (tarde) · Blog, menú "Más" y Pinterest

- **Blog publicado** (Blanca autorizó publicar directamente). 11 artículos nuevos:
  - protector-solar-coreano-piel-grasa
  - vitamina-c-coreana-cual-elegir
  - cosmetica-coreana-original-espana
  - ingredientes-que-no-mezclar-skincare
  - aha-bha-pha-diferencias
  - acido-hialuronico-como-usarlo
  - rutina-piel-grasa-poros-abiertos
  - rutina-piel-seca-otono-invierno
  - granitos-errores-que-los-empeoran
  - contorno-de-ojos-hace-falta
  - mascarillas-coreanas-cual-usar
- **Menú "Más"**: es el menú de navegación `mirea-menu-corto-1710-borrador` (348314370385), que es el que usa el tema en vivo.
  - Se han añadido 4 enlaces: Todas las rutinas, Guías Mirea, Blog · Consejos y Foro Mirea.
  - No se ha tocado el tema; el resto de enlaces se mantiene igual (115 → 119 enlaces).
- **Pinterest** (cuenta mireaskin, tablero 374713700186176077): 7 pines programados entre el 21 y el 27 de octubre a las 13:00, cada uno enlazando a un artículo.
  - Metricool IDs: 401024780, 401025062, 401025554, 401025669, 401025719, 401026939, 401035774.
- **Remitente Klaviyo**: Blanca solo tiene my.mireaskin@gmail.com, no tiene correo con dominio propio. Se queda como está.

## 2026-10-20 (noche) · Portadas, blog + foro juntos, imagen "?" en el menú

- Los 11 artículos nuevos ya tienen portada: la foto real de un producto del propio artículo.
- **Foro dentro del blog**: los 3 temas del foro se han movido al blog Consejos (con portada).
  - El blog "Foro Mirea" (vacío) se ha eliminado y la página foro-mirea está oculta.
  - Redirecciones creadas: /pages/foro-mirea y /blogs/foro-mirea → /blogs/consejos.
- **Menú en vivo** (348314370385): el enlace "Foro Mirea" se ha quitado de "Más" y de "Todo". En su lugar hay un único enlace, "Blog y foro" (/blogs/consejos).
- **Imagen "?"**: subida a Archivos como mirea-blog-pregunta.png (MediaImage 71960814616913).
  - Tema copia **"Mirea · 20-10 menú blog con ? · BORRADOR"** (208921887057): en snippets/mirea-mega-tile.liquid, los enlaces al blog usan images['mirea-blog-pregunta.png'].
  - **Pendiente de que Blanca lo revise y lo publique.**
- **Pinterest**: 7 pines más, del 28-10 al 3-11 a las 13:00.
  - Metricool IDs: 401319398, 401319836, 401319891, 401319978, 401320168, 401320449, 401320674.

## 2026-10-21 · TikTok rechazaba PNG → todo pasado a JPG

- Error de TikTok en el post del 20-10 (pelo otoño): "image/png not allowed". En Instagram sí se publicó.
- **Arreglo**: las imágenes se pasan como `https://cdn.shopify.com/.../mirea-ig-pX-N.png?format=jpg&quality=92`. Shopify las convierte y Metricool las guarda como .jpeg.
- Las 11 publicaciones programadas de Instagram + TikTok (del 21-10 al 1-11) ya tienen las imágenes en JPG. Nuevos IDs:
  - 401835861, 401835942, 401835979, 401836019, 401836104, 401836186
  - 401836350, 401836436, 401836550, 401836630, 401836680
- **Pelo otoño** reprogramado solo para TikTok: hoy 21-10 a las 14:00 (401836735).
- Queda un borrador de prueba en Metricool (30-12, solo TikTok, privado, sin publicación automática, id 401835172). No se publica; Blanca lo puede borrar.
- **Regla a partir de ahora**: para TikTok, usar siempre imágenes JPG.

## 2026-10-21 · Productos recomendados en el blog

- Las 28 entradas del blog Consejos tienen ahora al final un bloque "Productos recomendados" entre las marcas `<!-- mirea-recos:start/end -->`.
- Cada bloque muestra 4 productos, cada uno con foto, marca, nombre, precio y un botón "Ver producto".
- Todos los productos se comprobaron uno a uno: están activos y tienen stock.
- Solo se ha cambiado el texto de los artículos (body). Títulos, portadas y estado de publicación quedan igual.
- Si un producto se queda sin stock, hay que volver a generar el bloque de ese artículo.

## 2026-10-21 · Portadas del blog (tema copia 208921887057)

- **Fallo 1**: templates/article.json tenía un bloque "image" con una foto fija (crema Centellian), así que todos los artículos mostraban esa imagen.
  - Cambiado por el bloque `_blog-post-featured-image`, que muestra la portada de cada artículo: cuadrada, 42 % del ancho en ordenador, ancho completo en móvil, esquinas redondeadas.
- **Fallo 2**: en el listado del blog, las fotos de producto se recortaban y ampliaban (object-fit: cover), por eso se veían borrosas.
  - blocks/_blog-post-image.liquid: ahora object-fit: contain, fondo crema #F8F2EE y padding 12px.
- Los 3 temas que venían del foro usaban la plantilla "foro" (sin imagen). Se les ha quitado esa plantilla para que usen la normal.
- Todo está en el tema copia "Mirea · 20-10 menú blog con ? · BORRADOR". Pendiente de que Blanca lo publique.

## 2026-10-21 · "Hombre" en la barra de arriba

- Menú en vivo (348314370385): "Hombre" añadido arriba, después de Cuerpo. Enlaza a /collections/hombre, que tiene 199 productos.
- En "Más", "Bebé y hombre" pasa a ser solo "Bebé" (/collections/bebe).

## 2026-10-21 · Cabello por necesidad + "Ver todo desde Corea"

- **Etiquetas**: 592 de los 737 productos de cabello activos tienen ahora una o más etiquetas "Necesidad cabello: …" (máximo 3 por producto).
  - Solo se han añadido etiquetas; no se ha quitado ni cambiado nada de los productos.
  - Los 145 sin etiqueta son sobre todo herramientas, ceras y brumas.
- **14 colecciones automáticas** (por etiqueta), publicadas en la tienda:

| Necesidad | cabello-… | desde-espana-cabello-… |
|---|---|---|
| Caída y crecimiento | caida (187) | caida (16) |
| Decolorado y teñido | decolorado (68) | decolorado (11) |
| Seco y dañado | seco-danado (343) | seco-danado (56) |
| Graso | graso (77) | graso (3) |
| Caspa y picor | caspa (94) | caspa (4) |
| Rizado y encrespado | encrespado (68) | encrespado (13) |
| Fino y sin volumen | volumen (81) | volumen (8) |

  - Las colecciones "desde España" exigen además la etiqueta "Envío: España".
- **Cambios en el tema copia 208921887057**:
  - sections/mirea-coleccion-chips.liquid: fila "Por necesidad" con botones en Cabello, en sus subcolecciones y en Cabello desde España. El botón de la necesidad que se está viendo sale marcado.
  - snippets/mirea-mega-sephora.liquid:
    - Debajo de la fila de Corea: "Ver todo X desde Corea →" (enlaza a /collections/X/envio-corea).
    - En el desplegable "Todo", el grupo "Te ayudamos" usa ahora la palabra clave "Blog" en vez de "Foro".
- Scripts de clasificación: en la carpeta temporal de trabajo (scratchpad/hair). La clasificación es por palabras clave, así que puede haber algún producto mal colocado.

## 2026-10-21 · Desplegables de Hombre y Peluquería (Valquer + Barbería HairFluencer)

- **Menú en vivo** (348314370385). Orden de arriba: Todo, Piel, Maquillaje, Cabello, Cuerpo, Hombre, Peluquería, Desde España, Perfumes árabes, Marcas, Más.
- **Hombre** (colecciones automáticas por etiqueta "Hombre: …"):
  - cuidado-facial 136, cabello-barba 14, afeitado 23, maquillaje 16, sets 16
  - Perfumes enlaza a la colección que ya existía, perfumes-de-hombre (23).
- **Peluquería**: la colección "peluqueria" (290 productos) antes solo incluía la marca Valquer. Ahora incluye cualquier producto con una etiqueta "Peluquería: …".
  - Apartados: tintes 33, champús 95, champú formato grande 72, acondicionadores 30, tratamientos 97, styling 17, utensilios 4, barbería 17, estética facial 50, estética corporal 26, mascotas 4.
  - Los 213 productos de Valquer tienen al menos una etiqueta. Los de HairFluencer (16) están en Barbería, Styling y Utensilios.
  - No se ha creado "Aparatos" porque no había productos.
- Solo se han añadido etiquetas: no se han quitado, ni se han cambiado precios, ni se ha borrado nada.
- **Pendiente de decidir con Blanca**: si Estética facial, Estética corporal y Mascotas (de Valquer) deben salir dentro de Peluquería.

## 2026-10-21 · Estética y mascotas de Valquer fuera de Peluquería

- Colección "peluqueria": se quitan la regla de marca (Valquer®) y las reglas de estética facial, estética corporal y mascotas. Quedan 9 reglas por etiqueta y la colección pasa de 290 a 215 productos.
  - Todo el producto de pelo de Valquer sigue dentro gracias a sus etiquetas.
- Colecciones renombradas (mismo handle):
  - peluqueria-estetica-facial → "Estética profesional facial" (50)
  - peluqueria-estetica-corporal → "Estética profesional corporal" (26)
  - peluqueria-mascotas → "Mascotas" (4)
- Menú en vivo:
  - Piel ahora incluye "Estética profesional".
  - Cuerpo ahora incluye "Estética corporal".
  - Más ahora incluye "Mascotas".
  - Peluquería queda con 8 apartados: tintes, champús, formato grande, acondicionadores, tratamientos, styling, utensilios y barbería.

## 2026-10-21 · Fotos sin repetir en los desplegables (tema copia 209021272401)

- Blanca ya publicó "Mirea · 20-10 menú blog con ? · BORRADOR" (208921887057), que ahora es el tema en vivo.
- Nueva copia: **"Mirea · 21-10 fotos sin repetir · BORRADOR"** (209021272401).
  - snippets/mirea-mega-sephora.liquid: cada tarjeta del desplegable elige la foto en 3 pasos:
    1. un producto del mismo origen y de una marca que aún no se haya usado;
    2. un producto de cualquier origen y de una marca aún no usada;
    3. cualquier producto que aún no se haya usado.
  - Revisa hasta 50 productos por colección.
  - Motivo: Valquer usa la misma foto de garrafa en varios productos, y por eso salía repetida.
- Pendiente de que Blanca lo revise y lo publique.

## 2026-10-21 · Champús y Champú formato grande separados

- Los 72 champús de formato grande también tenían la etiqueta "Peluquería: Champús", así que salían en los dos apartados.
- Se ha quitado "Peluquería: Champús" de esos 72 (es una etiqueta que pusimos nosotros hoy).
- Resultado: "Champús" queda con 25 productos (formatos normales) y "Champú formato grande" con 72. Shopify tarda unos minutos en actualizar las colecciones automáticas.

## 2026-10-21 · Hombre → Cabello y barba ampliado

- Etiqueta "Hombre: Cabello y barba" añadida a 130 productos más:
  - unos 25 son de pelo o barba "for men" (BARBER501, DASHU For Men, Ryo For Men, aceites de barba…);
  - unos 105 son champús, tónicos, sérums y ampollas anticaída.
- Colección hombre-cabello-barba: pasa de 14 a 143 productos, 69 de ellos champús (antes había 1).
- A la colección "hombre" se le han añadido 5 reglas por etiqueta "Hombre: …" y se mantienen las 20 que ya tenía. Pasa de 199 a 330 productos.

## 2026-10-21 · 10 productos de Collective (Beauty-Privée) activados

- Blanca lo ha aprobado con un margen del 10 %. Los productos pasan a ACTIVO y se publican solo en la Tienda online. No se han cambiado ni precios ni stock.
- 8 productos JRL (máquinas, trimmers, afeitadora y secador) llevan ahora las etiquetas Peluquería: Aparatos + Peluquería: Barbería + Hombre: Cabello y barba. La afeitadora además lleva Hombre: Afeitado.
- Colección nueva **peluqueria-aparatos** (8 productos). En el menú, "Aparatos" va dentro de Peluquería, después de Utensilios. Barbería pasa a 25 productos.
- Colágeno Beauty Focus: etiqueta "Mirea · Salud" y regla nueva por esa etiqueta en la colección salud.
- Máscara Nu Skin: etiqueta "Mirea · Ojos" y regla nueva por esa etiqueta en la colección ojos.
- Ojo: 6 productos no tienen el inventario controlado.

## 2026-10-21 · Fotos y marca de los productos de Beauty-Privée

- Máscara Nu Skin: se ha borrado el collage de 300 px con el ojo. Queda solo la foto limpia del producto (500 px).
- Pack JRL Ghost 1: se ha borrado la foto de 202×250 px. La de 1170 px pasa a ser la principal.
- La marca que se ve en la ficha era "Beauty-Privée", que es el nombre del proveedor de Collective. Ahora es:
  - JRL para los 8 productos de máquinas y secador;
  - Nu Skin para la máscara y el colágeno.
- Aviso: si Collective vuelve a sincronizar con el proveedor, puede volver a poner la marca y las fotos originales.

## 2026-10-21 · Revisión de categorías y Barbería

- **Barbería**: pasa de 25 a 135 productos, 69 de ellos champús de hombre. Incluye ceras, pomadas, productos de barba, 24 de afeitado y herramientas. Se dejan fuera tónicos, sérums y complementos.
- **Cabello por necesidad**, se quitan productos mal clasificados:
  - caída 187→177, decolorado 68→48, seco 343→317, graso 77→72, volumen 81→77, caspa 94→93, encrespado 68→67;
  - en las de "desde España" pasa lo mismo, a menor escala.
- **Champú formato grande**: tiene 72 productos y ninguno se repite en Champús.
  - Mientras se revisaba, algo externo añadió champús coreanos a Champús (23→86) y ceras de hombre a Styling (17→35). Se ha dejado, pero hay que vigilar que no vuelvan a entrar champús de 1 L en Champús.
- Las 37 colecciones nuevas están publicadas y tienen descripción. Se ha añadido descripción a "hombre" y se ha cambiado la de "peluqueria".
- **Dudas para Blanca**:
  1. Packs de champú + mascarilla (500–720 ml) que están en "Formato grande".
  2. Keratina Pura y Kit Permanente, que están en Acondicionadores.
  3. Acondicionadores Kerasys de 1 L dentro de Peluquería.
  4. Hombre → Sets solo tiene sets coreanos.

## 21-10 · Peluquería: formato grande solo champús grandes + Packs
- 22 packs (Pack …) sacados de "Champú formato grande" → etiqueta `Peluquería: Packs`.
- Nueva colección `peluqueria-packs` (694946627921, regla TAG "Peluquería: Packs"), publicada en Tienda online y Shop. Siguen también en "Todos los packs".
- 3 champús de 500 ml (The Bey, Salerm Keratin Shot, Placenta) movidos a `Peluquería: Champús`.
- Formato grande: 72 → 47 (solo 1 L / 1,2 L / 5 L o con variante de 1 L). Packs: 22. Champús: 89.
- Menú: Peluquería → Packs añadido tras "Champú formato grande".
- Acondicionadores Kerasys 1 L se quedan en Peluquería → Acondicionadores (Blanca: "3 si").

## 22-10 · Tratamientos + borradores España + Google
- Keratina Pura y Kit Permanente Nº0: quitada etiqueta Acondicionadores (siguen en Mascarillas y tratamientos).
- Google: los 2.568 productos activos de España ya están en Google & YouTube y Tienda online (comprobado con publication_ids).
- 235 borradores de España revisados (sin tocar nada antes): activados y publicados (Tienda + Google) solo 4 aptos: Soybean Milk Pad, SALERM Ice Gel 03, Lendan Terra Curly Gel, Decorte Lift Dimension Serum.
- No activados: 142 sin stock, 34 duplicados de activos, 25 margen bajo (Salluna, coste 90% del precio; SKIN1004 set 4und pierde dinero), 16 sin foto, 11 internos (tarjetas, bonos, bolsas), 2 precio 0, 1 posible duplicado. Detalle en scratchpad/spain_drafts.json.

## 22-10 · Activación borradores España + ajuste de precios
- Aviso "SKIN1004 set pierde dinero" era un error de cálculo: variante pack 4 uds = 89 € (coste 80,10), resto 18,50–25 €; todas con ~10% margen (Collective/Salluna).
- Borradores España: 84 activados y publicados en Tienda + Google (casi todos "agotado", política DENY → sin sobreventa). No activados: 69 duplicados de activos, 13 con "vender sin stock" a 0 (riesgo de sobreventa), 1 sin margen (Cofre Devotion Male). Detalle: scratchpad/spain_activation.json.
- Precios: comparados con precio de mercado de Google Shopping (referencias UE). 81 variantes bajadas al precio de mercado, siempre con ≥30% de margen sobre coste; ninguna subida. Verificadas las 81 en Shopify. Precios antiguos en docs/precios/auditoria_precios_2210.csv (columna price) para poder deshacer.
- No tocados: 174 sin coste registrado, 27 donde bajar dejaría <30% margen, 23 con referencia sospechosa (otro tamaño).
- Las 81 bajadas marcadas como oferta: compareAtPrice = precio anterior (precio tachado). Entran solas en la colección "Ofertas" (regla IS_PRICE_REDUCED; ahora 1.020 productos).
- 13 borradores con "vender sin stock": cambiados a DENY (no se venden a 0), activados y publicados en Tienda + Google.

## 22-10 · Diagnóstico ventas
- Ventas: 8 pedidos desde el 21-09 (último pedido semana 05-10). Sesiones: ~90/semana, 26 esta semana; 30 días: direct 538, Instagram 42, Google 19, Bing 6. 50% EEUU (probables bots).
- Embudo últimas semanas: 18-20 carritos/semana → 7-9 checkouts → 0-2 pagos.
- Google Merchant 5857344812: SÍ existe feed España (es/EUR, label EUR_119540744529) y está APROBADO en ES en fichas gratuitas; feeds internacionales por mercado (AED, GBP, USD…) también. Corregido mi primer diagnóstico (había mirado solo un producto del feed AED). Impresiones 866 en 2 semanas, 0 clics. Errores "item_limit_reached" solo afectan a anuncios de pago.
- Envíos: por peso; perfiles de proveedores caros (WEYE 50 €, Lifebay, Syncee, VuVatech…) solo tienen productos en BORRADOR → no afectan. Envíos altos en carritos abandonados vienen de peso (p.ej. Kerasys 1 L x2 a PT = 40,99 €) y de Internacional.
- Redes: Metricool tiene IG+TikTok programados a diario hasta 01-11 y Pinterest hasta 03-11.

## 22-10 · Campaña Google Ads (PAUSADA, pendiente de aprobar presupuesto)
- Cuenta Google Ads 1865267943 (EUR). OJO: la cuenta también está vinculada al Merchant 5847806959 (Plaza Clara, PROHIBIDO) — no usar ni tocar ese vínculo.
- Campaña nueva: "Mirea · Search · Marcas K-beauty · España" id 24377406933 · Search · CPC manual · 7 €/día · España · español · PAUSADA.
- Grupos (CPC máx.): Medicube 0,40 · Beauty of Joseon 0,45 · Anua 0,40 · SKIN1004 0,40 · Biodance 0,35 · Cosmética coreana tienda 0,55. 41 palabras clave (frase/exacta) por volumen ES (Keyword Planner). 20 negativas (gratis, trabajo, amazon, primor…).
- 6 anuncios RSA (sin reclamos falsos: nada de envío gratis ni "original"), 4 enlaces (Ofertas, Protectores solares, Encuentra tu rutina, Más vendidos), 4 frases destacadas, fragmento de marcas.
- Conversión: "Google Shopping App Purchase" ya activa (primaria).
- Campaña antigua "Mirea · Search · Medicube · España" (24286732474) sigue PAUSADA; sus anuncios dicen "Envío Gratis desde 35 €" (falso) → no reactivar.
- Envío España: NO bajado. Sin dato del coste real por envío no se puede garantizar ganancia (Blanca: "si pierdo dinero no").
- Email carrito abandonado: Klaviyo pide reconectar la autorización.
- Blanca: 7 €/día es mucho → presupuesto bajado a 3 €/día (sigue PAUSADA). Con poco presupuesto se concentra: pausados grupos Beauty of Joseon y SKIN1004 (CPC más caro); activos Medicube, Anua, Biodance, Cosmética coreana.
- 22-10: Blanca aprueba 3 €/día ("Perfecto está así") → campaña 24377406933 ACTIVADA, estado SERVING; anuncios en revisión de Google. Revisión programada 25-10 09:00 UTC.
- 22-10 Envío España: revisado. Los 8 pedidos son de Korealy. Korealy cobra a Mirea Standard España 6 $ (≤0,2 kg) y 11 $ (≤0,5 kg ≈ 10,2 €) → el tramo 10,49 € solo cubre coste. Bajarlo a 6,99 € perdería ~3,2 € por pedido en ese tramo (en productos baratos el margen no lo cubre). NO se cambia (regla de Blanca: solo si gana). Tarifas de proveedores Collective no visibles por API (app Collective); Maymoo cobra 3,95 € península en su web.
- 22-10 Klaviyo (reconectado): flujos activos "Checkout abandonado · definitivo" (RZzUtE) y "Carrito abandonado · Shopify Added to Cart · estable" (TX2NFZ) SÍ envían (30 días: 15 y 54 emails) pero apertura ~14 % y 0 clics. Causa probable: remitente @gmail.com enviado desde Klaviyo → falla DMARC de Gmail → spam. El dominio send.mireaskin.es ya está verificado y activo en Klaviyo.
  - Cambiado remitente de los 4 emails (1 h y 20 h checkout; 2 h y 20 h carrito) a hola@mireaskin.es; respuestas siguen llegando a my.mireaskin@gmail.com (reply-to). Textos y plantillas sin tocar.
  - Pendiente: resto de flujos activos (bienvenida, postcompra, reposición, win-back, VIP…) siguen con remitente gmail.

## 22-10 · Klaviyo: remitente propio en todos los flujos + rediseño carrito/checkout
- Remitente hola@mireaskin.es en TODOS los flujos activos (nombre "Mirea Skin", respuestas a my.mireaskin@gmail.com). Asuntos, textos y estado sin tocar.
  - Cambiados ahora: Bienvenida Vnwwa7 (117738616) · Welcome PRO VNKYNs (118023470, 118023477) · Primera compra SAjKhA (118023919) · Postcompra ShA32T (117741423) · Cross-sell post-entrega RxWXvG (117747584) · Reposición VTmbc5 (117845887) · Win-back VvW277 (117747594) · VIP WRuveC (117845927) · Cross-sell XCwF2L (117747027).
  - Ya lo tenían: RUA2Fx, TUtFNF, VXcjCk; carrito/checkout cambiados antes (commit 8e08043).
- Plantillas nuevas "Mirea v2" (diseño marca: ciruela #925b6d, #4a2a36, crema #F8F2EE; barra "Pago seguro · Devolución 14 días · Envíos a toda España"; envío gratis solo "desde 69 € en España"; sin urgencia falsa). Plantillas antiguas NO borradas.

| Flujo | Acción | Plantilla antigua | Maestra v2 | Copia en el flujo |
|---|---|---|---|---|
| Carrito TX2NFZ · 2 h | 118539724 | V8rDzR | Vb2uqu | SsXfLn |
| Carrito TX2NFZ · 20 h | 118539726 | WhQutH | YxaYtY | TsazRE |
| Checkout RZzUtE · 1 h | 118540695 | XnRyZ7 | UtJbtn | WYZkJ7 |
| Checkout RZzUtE · 20 h | 118540697 | YygpSX | XkVDwj | TafNEX |

- Revertir: asignar la plantilla antigua en la acción (update_flow_action con template_id antiguo).
- Bienvenida (XqqACx, VV5Ypt, REAUyZ): ya eran diseños "Premium v2" con productos reales y MIREA10 → solo cambio de remitente.
- Primera compra, postcompra, reposición, win-back, VIP y cross-sell: plantillas sin rediseñar (pendiente si se quiere).
- Pruebas por email a my.mireaskin@gmail.com: NO enviadas; Klaviyo pide la aprobación expresa de Blanca para enviarlas.
- 22-10: enviadas a my.mireaskin@gmail.com las 5 pruebas (carrito 2h/20h, checkout 1h/20h, bienvenida). Sin cliente de muestra: los datos del carrito pueden salir vacíos en la prueba.

## 22-10 · Calendario de newsletters Klaviyo (6 campañas)
- Público: todas las listas de suscritos por email (confirmado por Blanca "a todos los suscritos"): VU7PcQ "Lista de email" (22, doble opt-in) + RtYDX3 "Shopify suscritos" (20) + Uf2Bws (3, subconjunto). Klaviyo quita duplicados y bajas. No se ha añadido ni importado a nadie.
- Remitente hola@mireaskin.es · "Mirea Skin" · respuesta a my.mireaskin@gmail.com. Smart Sending activado. Enlaces con utm_source=klaviyo&utm_medium=email&utm_campaign=<nombre>.
- Diseño: HTML propio (600 px, tablas, CSS en línea), colores ciruela #925b6d / #4a2a36 / crema #F8F2EE, cabecera MIREA SKIN, 6 tarjetas con foto real de Shopify, precio real y botón, franja "Pago seguro · Devolución 14 días · Envíos a toda España", "Envío gratis desde 69 € en España", baja {% unsubscribe %} y dirección de la organización. Copias en docs/newsletters/*.html.
- Sin "original/auténtico", sin urgencias ni stock falsos. Precio tachado solo en Ofertas (compareAtPrice real del 22-10).

| # | Fecha (10:00 Madrid = 09:00 UTC) | Asunto | Campaña | Plantilla |
|---|---|---|---|---|
| 1 | mar 28-10 | Lo nuevo de Corea ya está en Mirea ✨ | 01M5HM5ESGC8VVYN45ZE74S2YY | WZWkPT (asignada WNEPYA) |
| 2 | jue 06-11 | Los favoritos coreanos que todo el mundo repite | 01M5HMG55CRWXQZVX4BHMXC2VH | TVGRUz (UiQ9v2) |
| 3 | mar 11-11 | ¿Piel tirante con el frío? Tu rutina de invierno | 01M5HMJVR2SWCKJ5JNYKK00J55 | T4yNej (Yz5Xi3) |
| 4 | jue 20-11 | Bajamos precios en cremas y protectores coreanos | 01M5HMN4VEE9CMKPKDA37KP7WX | VQTKUr (T4UNfe) |
| 5 | mar 25-11 | Ideas de regalo para esta Navidad 🎁 | 01M5HMQK513B5Z6DE6XA9QD9WM | RN4cWb (QV9phn) |
| 6 | jue 04-12 | Ingredientes que NO debes mezclar (y cuáles sí) | 01M5HMSYRXHDE4717345XMZC5W | WA6yY5 (Xkm88X) |

- Estado: las 6 están en BORRADOR con fecha y hora ya puestas. NO están programadas: Klaviyo pide confirmación expresa para programar (send_campaign) y para la prueba a my.mireaskin@gmail.com. Falta: Blanca revisa y pulsa "Programar" en cada una (o confirma y lo hago yo).
- Más vendidos: solo 8 pedidos desde 21-09, así que la nº 2 usa "Virales en TikTok" como favoritos (sin decir "más vendidos").
- Antes de cada envío revisar precios/stock: Ofertas (20-11) y cofres de regalo (25-11; Génifique 11 uds, Boss 12) pueden cambiar.
- Aviso: en Novedades varios Beauty of Joseon/d'Alba/HATHERINE tienen compareAtPrice MENOR que el precio (sincronización de Collective). En el email no se muestra tachado.
