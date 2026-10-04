import fs from 'node:fs';
const all = JSON.parse(fs.readFileSync('./theme/pruebas/cards.json','utf8'));
const src = fs.readFileSync('./theme/pruebas/logic.js','utf8');
const build = pool => new Function('pool', src + '\n return {choose};')(pool).choose;

const goals=['granitos','manchas','barrera','hidratacion','edad'];
const skins=['normal','seca','mixta','grasa','sensible'];
let errors=0, vacios=0, probadas=0;

// 1. pool vacio (todo agotado) -> 0 productos, sin excepcion
try {
  const c = build([]);
  const r = c('edad','sensible',4,70);
  if (r.selected.length !== 0) { console.log('X pool vacio devolvio productos'); errors++; }
  else console.log('OK  pool vacio -> 0 productos, sin error (se muestra el aviso)');
} catch(e){ console.log('X pool vacio lanza excepcion: '+e.message); errors++; }

// 2. quitar cada producto por separado (simula agotado) y tambien de dos en dos
const subsets=[];
for (let i=0;i<all.length;i++) subsets.push(all.filter((_,k)=>k!==i));
for (let i=0;i<all.length;i++) for (let j=i+1;j<all.length;j++) subsets.push(all.filter((_,k)=>k!==i&&k!==j));

for (const pool of subsets) {
  const c = build(pool);
  for (const g of goals) for (const s of skins) {
    probadas++;
    try {
      const r = c(g,s,4,70);
      if (r.total > 70+1e-9) { console.log(`X presupuesto superado ${g}/${s}`); errors++; }
      for (const it of r.selected) {
        if (s==='sensible' && it.card.dataset.intensity==='strong'){ console.log(`X fuerte a sensible ${g}/${s}`); errors++; }
      }
      if (r.selected.length===0) vacios++;
    } catch(e){ console.log(`X excepcion ${g}/${s}: ${e.message}`); errors++; }
  }
}
console.log(`pools degradados probados: ${subsets.length} | combinaciones: ${probadas}`);
console.log(`errores: ${errors} | casos sin propuesta: ${vacios}`);
process.exit(errors?1:0);
