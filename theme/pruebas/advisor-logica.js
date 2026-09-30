      const goalCollections = {
        granitos: ['granitos', 'poros'],
        manchas: ['manchas'],
        barrera: ['barrera-cutanea', 'calma-y-rojeces'],
        hidratacion: ['piel-seca', 'barrera-cutanea'],
        edad: ['antiedad']
      };

      const skinCollection = {
        seca: 'piel-seca',
        grasa: 'piel-grasa',
        mixta: 'piel-mixta',
        sensible: 'piel-sensible',
        normal: ''
      };

      const stepLabels = {
        limpiar: 'Limpiar',
        tratar: 'Tratar',
        hidratar: 'Hidratar',
        proteger: 'Proteger'
      };

      const stepOrder = ['limpiar', 'tratar', 'hidratar', 'proteger'];

      const fuertes = /retinol|retinal|retinoid|\baha\b|\bbha\b|\bpha\b|peeling|peel\b|exfolia|glycolic|glicolic|salicyl|salicil|vitamin c|vitamina c/i;

      function tokens(value) {
        return String(value || '').split(/\s+/).filter(Boolean);
      }

      function score(p, goal, skin) {
        const objetivos = tokens(p.o);
        const pieles = tokens(p.k);
        let s = 0;

        const buscados = goalCollections[goal] || [];
        buscados.forEach(h => { if (objetivos.includes(h)) s += 40; });

        const handlePiel = skinCollection[skin];
        if (handlePiel) {
          if (pieles.includes(handlePiel)) s += 18;
          else if (pieles.length) s -= 25;
        }

        if (skin === 'sensible') {
          if (!pieles.includes('piel-sensible')) s -= 30;
          if (fuertes.test(p.t)) s -= 100;
        }

        if (p.s === 'proteger') s += 16;
        if (p.s === 'tratar') s += 14;
        if (p.s === 'hidratar') s += 10;
        if (p.s === 'limpiar') s += 9;

        return s;
      }

      function elegir(productos, goal, skin, stepLimit, budget) {
        const ordenados = productos
          .map(p => ({ p: p, score: score(p, goal, skin), precio: Number(p.p || 0) / 100 }))
          .filter(x => x.score > 0 && x.precio > 0)
          .sort((a, b) => b.score - a.score || a.precio - b.precio);

        const rutina = [];
        const usados = new Set();
        let total = 0;

        // Un producto por paso, en el orden de la rutina.
        stepOrder.forEach(paso => {
          if (rutina.length >= stepLimit) return;
          const elegido = ordenados.find(x => x.p.s === paso && !usados.has(x.p.u) && total + x.precio <= budget);
          if (elegido) {
            rutina.push(elegido);
            usados.add(elegido.p.u);
            total += elegido.precio;
          }
        });

        // Si pidió rutina completa, un segundo producto en tratar e hidratar.
        if (stepLimit > 4) {
          ['tratar', 'hidratar'].forEach(paso => {
            if (rutina.length >= stepLimit) return;
            const elegido = ordenados.find(x => x.p.s === paso && !usados.has(x.p.u) && total + x.precio <= budget);
            if (elegido) {
              rutina.push(elegido);
              usados.add(elegido.p.u);
              total += elegido.precio;
            }
          });
        }

        rutina.sort((a, b) => stepOrder.indexOf(a.p.s) - stepOrder.indexOf(b.p.s));

        // Alternativas por paso, sin repetir lo ya propuesto.
        const alternativas = {};
        stepOrder.forEach(paso => {
          const lista = ordenados
            .filter(x => x.p.s === paso && !usados.has(x.p.u))
            .slice(0, maxAlts);
          if (lista.length) alternativas[paso] = lista;
        });

        return { rutina: rutina, total: total, alternativas: alternativas, candidatos: ordenados.length };
      }
