# Inserta la sección de aparatos en templates/index.json (borrador 208304472401).
# Uso: python3 index.patch.py index.original.json > index.json
import json, sys, re
raw = open(sys.argv[1]).read()
raw = re.sub(r'^/\*.*?\*/\s*', '', raw, flags=re.S)
d = json.loads(raw)
d['sections']['mirea_home_aparatos'] = {
    'type': 'mirea-home-aparatos',
    'name': 'Mirea · Aparatos (home)',
    'settings': {
        'antetitulo': 'Tecnología de cabina, en casa',
        'titulo': 'Aparatos LED y <em>radiofrecuencia</em>',
        'texto': 'Mascarillas LED, varitas con oro de 24K y aparatos faciales de Eternas y Natcare para cuidar tu piel en casa como en cabina.',
        'boton': 'Ver todos los aparatos',
        'coleccion': 'aparatos-de-belleza',
        'cuantos': 12,
    },
}
o = d['order']
if 'mirea_home_aparatos' not in o:
    o.insert(o.index('mirea_hero_lux_proto') + 1, 'mirea_home_aparatos')
print(json.dumps(d, ensure_ascii=False, separators=(',', ':')))
