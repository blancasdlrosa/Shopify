import fs from 'node:fs';
const cards = JSON.parse(fs.readFileSync('./theme/pruebas/cards.json','utf8'));
const src  = fs.readFileSync('./theme/pruebas/logic.js','utf8');
const pool = cards;
const make = new Function('pool', src + '\n return {tokens, price, score, choose};');
const { choose } = make(pool);

const goals  = ['granitos','manchas','barrera','hidratacion','edad'];
const skins  = ['normal','seca','mixta','grasa','sensible'];
const steps  = [4,6];
const budgets= [40,70,100,999];

let n=0, fails=[], empties=[];
for (const g of goals) for (const s of skins) for (const st of steps) for (const b of budgets) {
  n++;
  const r = choose(g,s,st,b);
  const tag = `${g}/${s}/${st}p/${b}€`;
  const sum = r.selected.reduce((a,x)=>a+x.price,0);

  if (r.selected.length > st) fails.push(`${tag}: ${r.selected.length} productos > limite ${st}`);
  if (r.total > b + 1e-9)     fails.push(`${tag}: total ${r.total.toFixed(2)} > presupuesto ${b}`);
  if (Math.abs(sum-r.total)>1e-9) fails.push(`${tag}: total ${r.total} != suma ${sum}`);

  for (const it of r.selected) {
    const d = it.card.dataset;
    if (s === 'sensible' && d.intensity === 'strong')
      fails.push(`${tag}: producto FUERTE a piel sensible -> ${it.card.handle}`);
    if (String(d.avoid||'').split(/\s+/).filter(Boolean).includes(s))
      fails.push(`${tag}: producto excluido para ${s} -> ${it.card.handle}`);
  }
  const ids = r.selected.map(x=>x.card.handle);
  if (new Set(ids).size !== ids.length) fails.push(`${tag}: producto repetido`);
  if (r.selected.length === 0) empties.push(tag);
}

// formato de moneda, tal y como lo hace la seccion
function money(amount, locale, currency){
  let f=null; try { f = new Intl.NumberFormat(locale,{style:'currency',currency}); } catch(e){ f=null; }
  return f ? f.format(amount) : amount.toFixed(2).replace('.',',')+' '+currency;
}
const fx = [['es','EUR'],['en','USD'],['es','GBP'],['xx-BAD','EUR']].map(([l,c])=>`${l}/${c} -> ${money(57.8,l,c)}`);

console.log(`combinaciones probadas: ${n}`);
console.log(`fallos: ${fails.length}`);
fails.slice(0,20).forEach(f=>console.log('  X '+f));
console.log(`sin propuesta (muestran el aviso nuevo): ${empties.length}` + (empties.length?` -> ${empties.join(', ')}`:''));
console.log('moneda: ' + fx.join(' | '));
process.exit(fails.length?1:0);
