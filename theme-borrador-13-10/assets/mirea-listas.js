/* Mirea · Mis listas: favoritos, lista de deseos, mi armario, rutina de mañana/noche y listas propias.
   Se guarda en este navegador (localStorage). Borrador 13-10-2026. Se quita borrando el render de
   'mirea-listas' en snippets/mirea-selector-idioma.liquid. */
(function () {
  if (window.MireaListas) return;
  var KEY = 'mirea_listas_v1';
  var PAGE = '/collections/all?view=mis-listas';
  var BASE = [
    { id: 'favoritos', name: 'Favoritos', fixed: 1 },
    { id: 'deseos', name: 'Lista de deseos', fixed: 1 },
    { id: 'armario', name: 'Mi armario', fixed: 1, hint: 'Lo que ya tienes en casa' },
    { id: 'manana', name: 'Rutina de mañana', fixed: 1, rutina: 1, hint: 'Ordénala paso a paso' },
    { id: 'noche', name: 'Rutina de noche', fixed: 1, rutina: 1, hint: 'Ordénala paso a paso' }
  ];
  var STEPS = ['Limpieza', 'Segunda limpieza', 'Tónico', 'Esencia', 'Sérum', 'Contorno', 'Crema', 'Protector solar', 'Mascarilla', 'Extra'];

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function baseIndex(id) { for (var i = 0; i < BASE.length; i++) if (BASE[i].id === id) return i; return 99; }

  function read() {
    var d = null;
    try { d = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
    if (!d || !Array.isArray(d.lists)) d = { lists: [] };
    BASE.forEach(function (b) {
      var l = d.lists.filter(function (x) { return x.id === b.id; })[0];
      if (!l) d.lists.push({ id: b.id, name: b.name, items: [] });
    });
    d.lists.forEach(function (l) {
      var b = BASE[baseIndex(l.id)];
      if (b) { l.name = b.name; l.fixed = 1; l.rutina = b.rutina || 0; l.hint = b.hint || ''; }
      if (!Array.isArray(l.items)) l.items = [];
    });
    d.lists.sort(function (a, b) { return baseIndex(a.id) - baseIndex(b.id); });
    return d;
  }
  var data = read();

  function save() { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {} refresh(); }
  function list(id) { return data.lists.filter(function (l) { return l.id === id; })[0]; }
  function has(id, h) { var l = list(id); return !!(l && l.items.some(function (i) { return i.h === h; })); }
  function inAny(h) { return data.lists.some(function (l) { return l.items.some(function (i) { return i.h === h; }); }); }
  function add(id, p) {
    var l = list(id); if (!l || !p || has(id, p.h)) return;
    l.items.push({ h: p.h, t: p.t, i: p.i, p: p.p, u: p.u, s: '' , d: Date.now() }); save();
  }
  function remove(id, h) { var l = list(id); if (!l) return; l.items = l.items.filter(function (i) { return i.h !== h; }); save(); }
  function move(id, h, dir) {
    var l = list(id); if (!l) return;
    var k = -1; l.items.forEach(function (i, n) { if (i.h === h) k = n; });
    var j = k + dir; if (k < 0 || j < 0 || j >= l.items.length) return;
    var t = l.items[k]; l.items[k] = l.items[j]; l.items[j] = t; save();
  }
  function setStep(id, h, s) { var l = list(id); if (!l) return; l.items.forEach(function (i) { if (i.h === h) i.s = s; }); save(); }
  function create(name) {
    name = String(name || '').trim().slice(0, 40); if (!name) return null;
    var id = 'l' + Date.now().toString(36); data.lists.push({ id: id, name: name, items: [] }); save(); return id;
  }
  function rename(id, name) { var l = list(id); name = String(name || '').trim().slice(0, 40); if (l && !l.fixed && name) { l.name = name; save(); } }
  function drop(id) { var l = list(id); if (l && !l.fixed) { data.lists = data.lists.filter(function (x) { return x.id !== id; }); save(); } }
  function total() { var s = {}; data.lists.forEach(function (l) { l.items.forEach(function (i) { s[i.h] = 1; }); }); return Object.keys(s).length; }

  window.addEventListener('storage', function (e) { if (e.key === KEY) { data = read(); refresh(); } });

  /* ---------- Datos de producto ---------- */
  function priceText(el) {
    if (!el) return '';
    var m = el.textContent.replace(/\s+/g, ' ').match(/(\d{1,4}(?:[.,]\d{2})?\s?€|€\s?\d{1,4}(?:[.,]\d{2})?)/);
    return m ? m[1].replace(/\s/g, '') : '';
  }
  function imgSrc(img) {
    if (!img) return '';
    var s = img.currentSrc || img.getAttribute('src') || '';
    if ((!s || s.indexOf('data:') === 0) && img.getAttribute('srcset')) s = img.getAttribute('srcset').split(',')[0].trim().split(' ')[0];
    return s;
  }
  function fromCard(card) {
    var a = card.querySelector('a.product-card__link') || card.querySelector('a[href*="/products/"]');
    if (!a) return null;
    var u = (a.getAttribute('href') || '').split('?')[0].split('#')[0];
    var m = u.match(/\/products\/([^\/]+)/); if (!m) return null;
    var t = a.getAttribute('aria-label') || '';
    if (!t) { var tt = card.querySelector('h3, [class*="title"]'); t = tt ? tt.textContent : m[1]; }
    return { h: m[1], u: '/products/' + m[1], t: t.trim(), i: imgSrc(card.querySelector('img')), p: priceText(card.querySelector('.price, [class*="price"]')) };
  }

  /* ---------- Corazón ---------- */
  var HEART = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 7.9 3.6 4.5 7 4.5c2 0 3.4 1.1 5 3 1.6-1.9 3-3 5-3 3.4 0 5.6 3.4 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z" fill="var(--mfav-fill,none)" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>';
  function heart(p, variant) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = variant === 'wide' ? 'mfav-wide' : 'mfav';
    b.setAttribute('data-mfav-h', p.h);
    b.setAttribute('aria-label', 'Guardar ' + p.t + ' en mis listas');
    b.innerHTML = variant === 'wide' ? HEART + '<span>Guardar en mis listas</span>' : HEART;
    b.addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      if (!inAny(p.h)) add('favoritos', p);
      openSheet(p);
    });
    return b;
  }
  function decorate(root) {
    headerLink();
    (root || document).querySelectorAll('product-card:not([data-mfav])').forEach(function (card) {
      card.setAttribute('data-mfav', '1');
      var p = fromCard(card); if (!p) return;
      var host = card.querySelector('.card-gallery') || card;
      if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
      host.appendChild(heart(p));
    });
    var pd = document.getElementById('mirea-product-data');
    if (pd && !pd.hasAttribute('data-done')) {
      var form = document.querySelector('#MainContent form[action*="/cart/add"]');
      if (form) {
        pd.setAttribute('data-done', '1');
        var p; try { p = JSON.parse(pd.textContent); } catch (e) { p = null; }
        if (p) { var w = heart(p, 'wide'); form.parentNode.insertBefore(w, form.nextSibling); }
      }
    }
    hearts();
  }

  /* ---------- Panel "Guardar en" ---------- */
  var sheet, cur;
  function buildSheet() {
    sheet = document.createElement('div');
    sheet.className = 'mfs'; sheet.hidden = true;
    sheet.innerHTML =
      '<div class="mfs__bg" data-close></div>' +
      '<div class="mfs__panel" role="dialog" aria-modal="true" aria-labelledby="mfs-t">' +
        '<button type="button" class="mfs__x" data-close aria-label="Cerrar">×</button>' +
        '<div class="mfs__prod"><img alt=""><div><p class="mfs__eyebrow">Guardado en tus listas</p><p class="mfs__title" id="mfs-t"></p></div></div>' +
        '<ul class="mfs__lists"></ul>' +
        '<form class="mfs__new"><input type="text" maxlength="40" placeholder="Nueva lista: viaje, regalo, verano…" aria-label="Nombre de la nueva lista"><button type="submit">Crear</button></form>' +
        '<a class="mfs__go" href="' + PAGE + '">Ver mis listas</a>' +
      '</div>';
    document.body.appendChild(sheet);
    sheet.addEventListener('click', function (e) { if (e.target.hasAttribute('data-close')) closeSheet(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && sheet && !sheet.hidden) closeSheet(); });
    sheet.querySelector('.mfs__lists').addEventListener('change', function (e) {
      var id = e.target.getAttribute('data-l'); if (!id || !cur) return;
      e.target.checked ? add(id, cur) : remove(id, cur.h);
    });
    sheet.querySelector('.mfs__new').addEventListener('submit', function (e) {
      e.preventDefault(); var inp = this.querySelector('input'); var id = create(inp.value);
      if (id && cur) add(id, cur); inp.value = ''; paintSheet();
    });
  }
  function paintSheet() {
    if (!sheet || !cur) return;
    var img = sheet.querySelector('.mfs__prod img'); img.src = cur.i || ''; img.style.visibility = cur.i ? 'visible' : 'hidden';
    sheet.querySelector('.mfs__title').textContent = cur.t;
    sheet.querySelector('.mfs__lists').innerHTML = data.lists.map(function (l) {
      return '<li><label><input type="checkbox" data-l="' + esc(l.id) + '"' + (has(l.id, cur.h) ? ' checked' : '') + '><span class="mfs__box" aria-hidden="true"></span><span class="mfs__name">' + esc(l.name) + '</span><span class="mfs__n">' + l.items.length + '</span></label></li>';
    }).join('');
  }
  function openSheet(p) { if (!sheet) buildSheet(); cur = p; paintSheet(); sheet.hidden = false; document.documentElement.classList.add('mfs-open'); var f = sheet.querySelector('input[type=checkbox]'); if (f) f.focus(); }
  function closeSheet() { sheet.hidden = true; document.documentElement.classList.remove('mfs-open'); }

  /* ---------- Página "Mis listas" ---------- */
  var app, view = 'favoritos';
  function card(l, it, n) {
    var opts = data.lists.filter(function (x) { return x.id !== l.id; }).map(function (x) {
      return '<option value="' + esc(x.id) + '"' + (has(x.id, it.h) ? ' disabled' : '') + '>' + esc(x.name) + (has(x.id, it.h) ? ' ✓' : '') + '</option>';
    }).join('');
    var step = '';
    if (l.rutina) {
      step = '<div class="mla__step"><span class="mla__num">' + String(n + 1).padStart(2, '0') + '</span>' +
        '<select data-act="step" aria-label="Paso de la rutina"><option value="">Elige el paso</option>' +
        STEPS.map(function (s) { return '<option' + (it.s === s ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select>' +
        '<span class="mla__order"><button type="button" data-act="up" aria-label="Subir">↑</button><button type="button" data-act="down" aria-label="Bajar">↓</button></span></div>';
    }
    return '<li class="mla__item" data-h="' + esc(it.h) + '">' + step +
      '<a class="mla__img" href="' + esc(it.u) + '">' + (it.i ? '<img src="' + esc(it.i) + '" alt="" loading="lazy">' : '') + '</a>' +
      '<div class="mla__info"><a class="mla__t" href="' + esc(it.u) + '">' + esc(it.t) + '</a>' + (it.p ? '<p class="mla__p">' + esc(it.p) + '</p>' : '') +
      '<div class="mla__acts"><a class="mla__btn" href="' + esc(it.u) + '">Ver producto</a>' +
      '<select data-act="copy" aria-label="Añadir también a otra lista"><option value="">Añadir a…</option>' + opts + '</select>' +
      '<button type="button" class="mla__rm" data-act="rm">Quitar</button></div></div></li>';
  }
  function paintPage() {
    if (!app) return;
    if (!list(view)) view = 'favoritos';
    var l = list(view);
    var nav = data.lists.map(function (x) {
      return '<li><button type="button" data-view="' + esc(x.id) + '" class="' + (x.id === view ? 'is-on' : '') + '"><span>' + esc(x.name) + '</span><em>' + x.items.length + '</em></button></li>';
    }).join('');
    var head = '<div class="mla__head"><div><p class="mla__eyebrow">' + (l.rutina ? 'Mi rutina' : (l.fixed ? 'Mis listas' : 'Lista personal')) + '</p><h2>' + esc(l.name) + '</h2>' +
      (l.hint ? '<p class="mla__hint">' + esc(l.hint) + '</p>' : '') + '</div>' +
      (!l.fixed ? '<div class="mla__own"><button type="button" data-act="rename">Renombrar</button><button type="button" data-act="drop">Eliminar lista</button></div>' : '') + '</div>';
    var body = l.items.length
      ? '<ol class="mla__grid' + (l.rutina ? ' mla__grid--rutina' : '') + '">' + l.items.map(function (it, n) { return card(l, it, n); }).join('') + '</ol>'
      : '<div class="mla__empty"><p>Aún no hay nada aquí.</p><p>Pulsa el ♡ de cualquier producto para guardarlo y elige en qué lista va.</p><a class="mla__btn mla__btn--dark" href="/collections/piel">Explorar productos</a></div>';
    app.innerHTML =
      '<aside class="mla__nav"><ul>' + nav + '</ul>' +
      '<form class="mla__new"><input type="text" maxlength="40" placeholder="Nueva lista" aria-label="Nombre de la nueva lista"><button type="submit">+</button></form></aside>' +
      '<section class="mla__main">' + head + body + '</section>';
  }
  function bindPage() {
    app.addEventListener('click', function (e) {
      var v = e.target.closest('[data-view]'); if (v) { view = v.getAttribute('data-view'); paintPage(); return; }
      var a = e.target.closest('[data-act]'); if (!a || a.tagName === 'SELECT') return;
      var act = a.getAttribute('data-act'); var it = a.closest('[data-h]'); var h = it && it.getAttribute('data-h');
      if (act === 'rm') remove(view, h);
      if (act === 'up') move(view, h, -1);
      if (act === 'down') move(view, h, 1);
      if (act === 'rename') { var n = prompt('Nuevo nombre de la lista', list(view).name); if (n) rename(view, n); }
      if (act === 'drop' && confirm('¿Eliminar la lista "' + list(view).name + '"? Los productos no se borran de las demás listas.')) { drop(view); view = 'favoritos'; paintPage(); }
    });
    app.addEventListener('change', function (e) {
      var s = e.target; var it = s.closest('[data-h]'); if (!it) return; var h = it.getAttribute('data-h');
      var item = list(view).items.filter(function (i) { return i.h === h; })[0];
      if (s.getAttribute('data-act') === 'copy' && s.value) add(s.value, item);
      if (s.getAttribute('data-act') === 'step') setStep(view, h, s.value);
    });
    app.addEventListener('submit', function (e) {
      if (!e.target.classList.contains('mla__new')) return;
      e.preventDefault(); var id = create(e.target.querySelector('input').value); if (id) { view = id; paintPage(); }
    });
  }

  /* Solo marca corazones y contador: no repinta la página, para no entrar en bucle con el observador. */
  function hearts() {
    var t = total();
    document.querySelectorAll('[data-mfav-count]').forEach(function (el) { el.textContent = t ? t : ''; el.hidden = !t; });
    document.querySelectorAll('[data-mfav-h]').forEach(function (b) { b.classList.toggle('is-on', inAny(b.getAttribute('data-mfav-h'))); });
  }
  function refresh() { hearts(); paintSheet(); paintPage(); }

  function headerLink() {
    var ha = document.querySelector('header-actions');
    if (!ha || ha.querySelector('.mfav-head')) return;
    var a = document.createElement('a');
    a.className = 'mfav-head header-actions__action'; a.href = PAGE; a.setAttribute('aria-label', 'Mis listas y favoritos');
    a.innerHTML = HEART.replace('width="18" height="18"', 'width="20" height="20"') + '<span class="mfav-head__n" data-mfav-count hidden></span>';
    ha.insertBefore(a, ha.firstChild);
  }

  function init() {
    headerLink();
    app = document.getElementById('mirea-listas-app');
    if (app) { var q = (location.hash || '').replace('#', ''); if (list(q)) view = q; bindPage(); paintPage(); }
    decorate(document);
    var pending = 0;
    new MutationObserver(function (rs) {
      for (var i = 0; i < rs.length; i++) {
        var t = rs[i].target;
        if (rs[i].addedNodes.length && !(app && app.contains(t)) && !(sheet && sheet.contains(t))) {
          if (!pending) pending = requestAnimationFrame(function () { pending = 0; decorate(document); });
          break;
        }
      }
    }).observe(document.body, { childList: true, subtree: true });
  }
  window.MireaListas = { add: add, remove: remove, open: openSheet, lists: function () { return data.lists; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
