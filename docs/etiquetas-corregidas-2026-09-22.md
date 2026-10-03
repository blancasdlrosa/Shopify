# Etiquetas corregidas · 2026-09-22

26 productos publicados en el feed de Google llevaban **solo** etiquetas del proveedor
en inglés (`serum`, `Cream`, `Facial Mask`, `LIP BALM`) y ninguna etiqueta `Paso:` ni
`Piel:`. Consecuencia: no aparecían en las colecciones automáticas por paso de rutina
ni por tipo de piel, aunque estuvieran a la venta.

Se usó `tagsAdd`, que **añade sin reemplazar**: las etiquetas del proveedor siguen ahí
y no se ha perdido nada.

## Qué se añadió y qué no

Se añadieron `Paso:`, `Piel:` y las etiquetas de categoría en español.

**No se añadieron etiquetas `Rutina:`.** Las colecciones `Rutina: …` son selecciones
curadas — la rutina que Mirea recomienda para ese caso — y meter productos sueltos las
convertiría en un listado cualquiera. Decidir qué producto entra en qué rutina es de
Blanca. Las dos excepciones son el dispositivo AGE-R Booster Pro Pink y el Pack
colágeno Medicube, donde `Rutina: Con dispositivo` es literal.

## Los 26

| Producto | Etiquetas añadidas |
|---|---|
| Arencia Fresh Green Rice Mochi Cleanser · 120 g | Paso: Limpiar · Piel: Grasa · Piel: Mixta · limpieza |
| Arencia Hyssop Fume Balm · 30 g | Paso: Hidratar · Piel: Seca · hidratantes |
| Arencia Holy Hyssop Serum 30 · 50 g | Paso: Tratar · Piel: Todas · serums |
| Arencia Fresh Cloud Body Scrub · 260 g | Paso: Cuerpo · Piel: Todas · cuerpo |
| Abib PDRN Intensive Cream 1.5 · 75 ml | Paso: Hidratar · Piel: Todas · hidratantes |
| Abib PDRN Glow Serum 4.0 · 30 ml | Paso: Tratar · Piel: Todas · serums |
| Abib PDRN Retinal Glow Jelly Eye Patch | Paso: Tratar · Piel: Todas · parches · contorno de ojos · retinal |
| Abib PDRN Collagen Firming Jelly Overnight Mask · 80 ml | Paso: Hidratar · Piel: Todas · mascarilla · colágeno |
| LANEIGE Cica Sleeping Mask · 60 ml | Paso: Hidratar · Piel: Sensible · Piel: Todas · mascarilla · calmante |
| LANEIGE Bouncy & Firm Face Sleeping Mask · 60 ml | Paso: Hidratar · Piel: Todas · mascarilla |
| LANEIGE Bouncy & Firm Eye Sleeping Mask · 20 g | Paso: Tratar · Piel: Todas · contorno de ojos |
| LANEIGE Bouncy & Firm Serum · 30 ml | Paso: Tratar · Piel: Todas · serums |
| LANEIGE Bouncy & Firm Lip Treatment · 12 g | Paso: Labios · Piel: Todas · labios |
| LANEIGE Lip Glowy Balm · 10 g | Paso: Labios · Piel: Todas · labios |
| LANEIGE Lip Sleeping Mask Pomelo · 20 g | Paso: Labios · Piel: Todas · labios |
| LANEIGE Lip Sleeping Mask EX Peach Iced Tea · 20 g | Paso: Labios · Piel: Todas · labios |
| LANEIGE Lip Sleeping Mask EX Sweet Candy · 20 g | Paso: Labios · Piel: Todas · labios |
| LANEIGE Lip Sleeping Mask EX Vainilla · 20 g | Paso: Labios · Piel: Todas · labios |
| LANEIGE Neo Cushion The Matte SPF42 · 15 g | Paso: Maquillaje · Piel: Grasa · Piel: Mixta · maquillaje · base |
| LANEIGE Neo Cushion The Glow SPF50+ · 15 g | Paso: Maquillaje · Piel: Normal · Piel: Seca · maquillaje · base |
| mixsoon Galactomyces Toner · 300 ml | Paso: Tratar · Piel: Todas · tonicos-y-esencias |
| medicube Deep Vita A Retinol Serum · 30 ml | Paso: Tratar · Piel: Todas · serums · retinal |
| medicube AGE-R Booster Pro Pink · dispositivo facial | Paso: Tecnología · Piel: Todas · tecnologia · Rutina: Con dispositivo |
| Pack colágeno Medicube | Pack · Piel: Todas · Rutina: Con dispositivo · Rutina: Primeras arrugas · tecnologia |
| NATURE REPUBLIC Vitapair C Dark Spot Cream | Paso: Hidratar · Piel: Todas · hidratantes · vitamina C |
| THE WHOO Cheongidan Pro-Radiance Emulsion · 110 ml | Paso: Hidratar · Piel: Todas · hidratantes |

A todos se les añadió además `K-beauty` y `skincare`, que es lo que llevan los demás
productos curados.

## Los 3 a medias

Tenían `Paso:` pero no `Piel:`, así que salían en las colecciones por paso pero no en
las de tipo de piel. Balance Mode es la línea de control de grasa de LANEIGE:

| Producto | Añadido |
|---|---|
| LANEIGE Balance Mode Shine Control Weightless Moisturizer · 80 ml | Piel: Grasa · Piel: Mixta · hidratantes |
| LANEIGE Balance Mode Rice Foaming Deep Cleanser · 250 ml | Piel: Grasa · Piel: Mixta · limpieza |
| LANEIGE Balance Mode Pore Polishing Peel-Off Mask · 100 ml | Piel: Grasa · Piel: Mixta · mascarilla |

## Cómo revertir

`tagsRemove` con la misma lista por producto. No hace falta respaldo del estado
anterior: las etiquetas viejas nunca se borraron, así que quitar las nuevas devuelve
exactamente el estado del 2026-09-22 por la mañana.
