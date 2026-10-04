#!/bin/bash
python3 - "$1" "$2" <<'PY'
import json,sys
S="/tmp/claude-0/-home-user-Shopify/a8673c5e-1063-51e3-bcd4-1b237016aab2/scratchpad"
d=json.load(open(S+"/pendientes.json"))
a=int(sys.argv[1]); n=int(sys.argv[2])
json.dump({"hecho":a,"total":len(d)},open(S+"/progreso.json","w"))
for i,r in enumerate(d[a:a+n]):
    print(f'#{a+i} {r["id"].split("/")[-1]} :: {r["t"]}')
    print(f'   {r["x"][:330]}')
print(f'[siguiente: {a+n} de {len(d)}]')
PY
