import fs from 'node:fs';
const src = fs.readFileSync('./theme/pruebas/advisor-logica.js', 'utf8');
const maxAlts = 4;
const api = new Function('maxAlts', src + '\n return {tokens, esFuerte, momento, razon, score, elegir};')(maxAlts);
const { esFuerte, momento, razon } = api;

let fallos = 0;
function comprobar(cond, texto) { if (!cond) { console.log('  X ' + texto); fallos++; } }

// 1. momento de uso
comprobar(momento({ s: 'proteger', t: 'Sunscreen SPF50' }) === 'Solo por la mañana', 'el solar debe ser solo de mañana');
comprobar(momento({ s: 'tratar', t: 'Retinol 0.3 Serum' }) === 'Solo por la noche', 'un retinol debe ser solo de noche');
comprobar(momento({ s: 'tratar', t: 'Niacinamide Serum' }) === 'Mañana y noche', 'un sérum suave va mañana y noche');
comprobar(momento({ s: 'limpiar', t: 'Gentle Foam' }) === 'Mañana y noche', 'el limpiador va mañana y noche');
comprobar(momento({ s: 'hidratar', t: 'Ceramide Cream' }) === 'Mañana y noche', 'la hidratante va mañana y noche');

// 2. deteccion de activos fuertes
const fuertesEsperados = ['Retinol Serum','Retinal 0.1','AHA BHA PHA Toner','Glycolic Peeling','Salicylic Acid','Vitamin C 20%'];
fuertesEsperados.forEach(t => comprobar(esFuerte({ t }), 'deberia detectar como fuerte: ' + t));
const suavesEsperados = ['Ceramide Cream','Heartleaf Toner','Hyaluronic Serum','Rice Foam Cleanser','Centella Ampoule'];
suavesEsperados.forEach(t => comprobar(!esFuerte({ t }), 'no deberia marcar como fuerte: ' + t));

// 3. la razon nunca sale vacia y termina en punto
const casos = [
  [{ s:'limpiar', t:'X', o:'granitos poros', k:'piel-grasa' }, 'granitos', 'grasa'],
  [{ s:'proteger', t:'Y', o:'', k:'' }, 'edad', 'normal'],
  [{ s:'hidratar', t:'Z', o:'antiedad', k:'piel-sensible' }, 'edad', 'sensible']
];
casos.forEach(([p, g, sk]) => {
  const r = razon(p, g, sk);
  comprobar(typeof r === 'string' && r.length > 5, 'razon vacia para ' + p.t);
  comprobar(r.endsWith('.'), 'la razon debe terminar en punto: ' + r);
  comprobar(r[0] === r[0].toUpperCase(), 'la razon debe empezar en mayuscula: ' + r);
  console.log('    ' + p.t + ' -> ' + r);
});

// 4. no se inventa: la razon solo nombra colecciones que el producto tiene
const p4 = { s:'tratar', t:'W', o:'antiedad', k:'piel-seca' };
const r4 = razon(p4, 'edad', 'seca');
comprobar(!/granitos|manchas|poros/.test(r4), 'la razon no debe nombrar objetivos que el producto no tiene');
comprobar(/antiedad/.test(r4), 'la razon debe nombrar el objetivo real');

console.log(`\nfallos: ${fallos}`);
process.exit(fallos ? 1 : 0);
