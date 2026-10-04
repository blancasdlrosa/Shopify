import fs from 'node:fs';
const src = fs.readFileSync('./theme/pruebas/advisor-logica.js', 'utf8');

// Catálogo sintético con la misma forma que devuelve collection.advisor.liquid
const pasos = ['limpiar','tratar','hidratar','proteger'];
const objetivosPorPaso = ['granitos','poros','manchas','barrera-cutanea','calma-y-rojeces','antiedad'];
const pielesPosibles = ['piel-seca','piel-grasa','piel-mixta','piel-sensible'];
const productos = [];
let semilla = 7;
const rnd = () => (semilla = (semilla * 1103515245 + 12345) % 2147483648) / 2147483648;
for (let i = 0; i < 400; i++) {
  const s = pasos[i % 4];
  const o = objetivosPorPaso.filter(() => rnd() < 0.4);
  const k = pielesPosibles.filter(() => rnd() < 0.5);
  const fuerte = rnd() < 0.15;
  productos.push({
    t: (fuerte ? 'Retinol ' : '') + 'Producto ' + i,
    u: '/products/p' + i,
    p: Math.round((5 + rnd() * 60) * 100),
    i: '',
    s,
    k: k.join(' '),
    o: o.join(' ')
  });
}

const maxAlts = 4;
const make = new Function('maxAlts', 'productosGlobal', src + '\n return {tokens, score, elegir};');
const { score, elegir } = make(maxAlts, productos);

const goals = ['granitos','manchas','barrera','hidratacion','edad'];
const skins = ['normal','seca','mixta','grasa','sensible'];
const steps = [4,6];
const budgets = [40,70,100,999];

let n=0, fails=[], vacios=[], totalAlts=0, totalRutina=0;
for (const g of goals) for (const sk of skins) for (const st of steps) for (const b of budgets) {
  n++;
  const r = elegir(productos, g, sk, st, b);
  const tag = `${g}/${sk}/${st}p/${b}`;
  const urls = r.rutina.map(x => x.p.u);

  if (r.rutina.length > st) fails.push(`${tag}: ${r.rutina.length} > limite ${st}`);
  if (r.total > b + 1e-9) fails.push(`${tag}: total ${r.total.toFixed(2)} > presupuesto ${b}`);
  const suma = r.rutina.reduce((a,x)=>a+x.precio,0);
  if (Math.abs(suma - r.total) > 1e-9) fails.push(`${tag}: total != suma`);
  if (new Set(urls).size !== urls.length) fails.push(`${tag}: producto repetido en la rutina`);

  // un solo producto por paso salvo rutina completa
  const porPaso = {};
  r.rutina.forEach(x => porPaso[x.p.s] = (porPaso[x.p.s]||0)+1);
  for (const [paso,c] of Object.entries(porPaso)) {
    if (st <= 4 && c > 1) fails.push(`${tag}: ${c} productos en el paso ${paso} con limite 4`);
  }

  // orden de la rutina
  const idx = r.rutina.map(x => ['limpiar','tratar','hidratar','proteger'].indexOf(x.p.s));
  for (let i=1;i<idx.length;i++) if (idx[i] < idx[i-1]) fails.push(`${tag}: rutina desordenada`);

  // piel sensible: nada fuerte, ni en la rutina ni en las alternativas
  if (sk === 'sensible') {
    const todos = [...r.rutina, ...Object.values(r.alternativas).flat()];
    todos.forEach(x => {
      if (/retinol/i.test(x.p.t)) fails.push(`${tag}: producto fuerte a piel sensible -> ${x.p.t}`);
    });
  }

  // las alternativas no repiten lo que ya está en la rutina
  Object.values(r.alternativas).flat().forEach(x => {
    if (urls.includes(x.p.u)) fails.push(`${tag}: alternativa duplica la rutina`);
  });

  totalRutina += r.rutina.length;
  totalAlts += Object.values(r.alternativas).flat().length;
  if (!r.rutina.length) vacios.push(tag);
}

console.log(`combinaciones probadas: ${n}`);
console.log(`fallos: ${fails.length}`);
fails.slice(0,15).forEach(f => console.log('  X ' + f));
console.log(`media de productos en la rutina: ${(totalRutina/n).toFixed(2)}`);
console.log(`media de alternativas mostradas: ${(totalAlts/n).toFixed(2)}`);
console.log(`total de productos que ve la clienta de media: ${((totalRutina+totalAlts)/n).toFixed(2)}`);
console.log(`sin propuesta: ${vacios.length}${vacios.length ? ' -> ' + vacios.slice(0,6).join(', ') : ''}`);
process.exit(fails.length ? 1 : 0);
