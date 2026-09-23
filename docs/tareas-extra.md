# Tareas extra · pedidas por Blanca

## 1. Portada con movimiento al hacer scroll (23-09-2026)

**Lo que pide:** que la portada se mueva al bajar. Que las letras se agranden, que las
chicas de la foto se unten la crema, movimiento moderno.

**Se puede, y en tres niveles distintos de esfuerzo:**

### Nivel 1 · Solo CSS, sin librerías, sin peso (lo haría ya)
- **Titular que crece al bajar**: "Tu rutina de cuidado. / A tu manera." pasa de 56 px a
  ~88 px conforme entra en pantalla, usando `animation-timeline: view()`. Es CSS nativo,
  no carga ni un kilobyte de JavaScript y en navegadores viejos simplemente no se mueve
  (no rompe nada).
- **Las cuatro fotos entran escalonadas** desde abajo con un pequeño desenfoque que se
  va: una tras otra, no todas a la vez.
- **Parallax suave**: las fotos se mueven un poco más despacio que el texto al bajar.
- **Los productos del "Pack Rutina exprés" aparecen uno a uno** al llegar a esa altura.
- **Contador de pasos 01 · 02 · 03** que se ilumina según pasas.

### Nivel 2 · Vídeo en bucle en lugar de las fotos fijas
Para que "las chicas se unten la crema" hace falta vídeo real: eso no se consigue con
CSS. Dos caminos:
- **Metraje de stock** (Pexels/Artgrid): gratis o barato, pero son las mismas caras que
  usa todo el mundo.
- **Vídeo generado**: se pueden animar las fotos que ya tienes (la mano que sube a la
  mejilla, la crema que se extiende). Sale un clip de 3-5 segundos en bucle. Coste: unos
  pocos euros por clip. **Habría que decir en algún sitio que es una recreación**, no
  presentar como real algo que no lo es.

Técnicamente, el bloque sería un `<video autoplay muted loop playsinline>` con la foto
actual como `poster`, para que en móvil y con datos lentos se vea la imagen de siempre.

### Nivel 3 · Scroll cinematográfico (GSAP ScrollTrigger)
Secuencia tipo Apple: la foto se queda fija mientras el texto pasa por encima, la crema
se extiende conforme bajas, los productos vuelan a su sitio. Queda espectacular y
**penaliza la velocidad**, que es justo lo que ahora mismo no sobra: la tienda necesita
cargar rápido para los anuncios.

**Mi recomendación:** nivel 1 ya (es gratis, rápido y no toca la velocidad), nivel 2 solo
para el bloque de la portada, y nivel 3 no, al menos hasta que haya ventas.

**Cómo lo haría:** la API me bloquea escribir en el tema publicado, pero **sí me deja
escribir en un tema borrador**. Haría una copia del tema en vivo, meto ahí el bloque con
movimiento, lo miras en vista previa y si te gusta lo publicas tú. Cero riesgo para la
tienda que está funcionando.

**Pendiente de:** terminar las 4.194 descripciones, que es lo que está bloqueando las
ventas de verdad. Esto es maquillaje encima; primero que las fichas se entiendan.
