// Mirea · listas de clientes (favoritos, deseos, armario, rutinas).
// GET  ?c=<customer_id>&t=<unix>&s=<firma>   -> { data, updated_at }
// POST { c, t, s, data }                     -> { ok: true, updated_at }
// La firma la genera el tema de Shopify en el servidor: hmac_sha256("c:t", secreto).
// El secreto está en la tabla privada public.ajustes (sin políticas RLS; solo service role).
import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Max-Age": "86400",
};
const MAX_AGE_S = 60 * 60 * 24 * 30; // firma válida 30 días
const MAX_BYTES = 100_000;

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
  auth: { persistSession: false },
});
let secret: string | null = null;

async function getSecret(): Promise<string> {
  if (secret) return secret;
  const { data, error } = await db.from("ajustes").select("valor").eq("clave", "hmac_secret").single();
  if (error || !data) throw new Error("sin secreto");
  secret = data.valor as string;
  return secret;
}

async function hmacHex(key: string, msg: string): Promise<string> {
  const k = await crypto.subtle.importKey("raw", new TextEncoder().encode(key), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", k, new TextEncoder().encode(msg));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

async function verify(c: unknown, t: unknown, s: unknown): Promise<string | null> {
  if (typeof c !== "string" || !/^\d{1,20}$/.test(c)) return null;
  const ts = Number(t);
  if (!Number.isFinite(ts) || Math.abs(Date.now() / 1000 - ts) > MAX_AGE_S) return null;
  if (typeof s !== "string" || !/^[0-9a-f]{64}$/.test(s)) return null;
  const expected = await hmacHex(await getSecret(), `${c}:${ts}`);
  return safeEqual(expected, s) ? c : null;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
}

function valid(data: unknown): boolean {
  if (!data || typeof data !== "object" || !Array.isArray((data as { lists?: unknown }).lists)) return false;
  const lists = (data as { lists: unknown[] }).lists;
  if (lists.length > 50) return false;
  return lists.every((l) => l && typeof l === "object" && typeof (l as { id?: unknown }).id === "string" &&
    Array.isArray((l as { items?: unknown }).items) && (l as { items: unknown[] }).items.length <= 300);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  try {
    if (req.method === "GET") {
      const u = new URL(req.url);
      const c = await verify(u.searchParams.get("c"), u.searchParams.get("t"), u.searchParams.get("s"));
      if (!c) return json({ error: "firma no válida" }, 401);
      const { data, error } = await db.from("listas").select("data, updated_at").eq("customer_id", c).maybeSingle();
      if (error) return json({ error: "error de lectura" }, 500);
      return json(data ?? { data: null, updated_at: null });
    }
    if (req.method === "POST") {
      const raw = await req.text();
      if (raw.length > MAX_BYTES) return json({ error: "demasiado grande" }, 413);
      let body: { c?: unknown; t?: unknown; s?: unknown; data?: unknown };
      try { body = JSON.parse(raw); } catch { return json({ error: "json no válido" }, 400); }
      const c = await verify(body.c, body.t, body.s);
      if (!c) return json({ error: "firma no válida" }, 401);
      if (!valid(body.data)) return json({ error: "datos no válidos" }, 400);
      const updated_at = new Date().toISOString();
      const { error } = await db.from("listas").upsert({ customer_id: c, data: body.data, updated_at });
      if (error) return json({ error: "error de escritura" }, 500);
      return json({ ok: true, updated_at });
    }
    return json({ error: "método no permitido" }, 405);
  } catch (_e) {
    return json({ error: "error interno" }, 500);
  }
});
