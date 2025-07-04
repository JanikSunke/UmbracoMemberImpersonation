var U = Object.defineProperty;
var S = (e, r, t) => r in e ? U(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var g = (e, r, t) => S(e, typeof r != "symbol" ? r + "" : r, t);
import { UMB_AUTH_CONTEXT as T } from "@umbraco-cms/backoffice/auth";
var C = async (e, r) => {
  let t = typeof r == "function" ? await r(e) : r;
  if (t) return e.scheme === "bearer" ? `Bearer ${t}` : e.scheme === "basic" ? `Basic ${btoa(t)}` : t;
}, A = { bodySerializer: (e) => JSON.stringify(e, (r, t) => typeof t == "bigint" ? t.toString() : t) }, I = (e) => {
  switch (e) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, E = (e) => {
  switch (e) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, z = (e) => {
  switch (e) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, x = ({ allowReserved: e, explode: r, name: t, style: n, value: o }) => {
  if (!r) {
    let s = (e ? o : o.map((i) => encodeURIComponent(i))).join(E(n));
    switch (n) {
      case "label":
        return `.${s}`;
      case "matrix":
        return `;${t}=${s}`;
      case "simple":
        return s;
      default:
        return `${t}=${s}`;
    }
  }
  let l = I(n), a = o.map((s) => n === "label" || n === "simple" ? e ? s : encodeURIComponent(s) : b({ allowReserved: e, name: t, value: s })).join(l);
  return n === "label" || n === "matrix" ? l + a : a;
}, b = ({ allowReserved: e, name: r, value: t }) => {
  if (t == null) return "";
  if (typeof t == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${r}=${e ? t : encodeURIComponent(t)}`;
}, $ = ({ allowReserved: e, explode: r, name: t, style: n, value: o }) => {
  if (o instanceof Date) return `${t}=${o.toISOString()}`;
  if (n !== "deepObject" && !r) {
    let s = [];
    Object.entries(o).forEach(([d, f]) => {
      s = [...s, d, e ? f : encodeURIComponent(f)];
    });
    let i = s.join(",");
    switch (n) {
      case "form":
        return `${t}=${i}`;
      case "label":
        return `.${i}`;
      case "matrix":
        return `;${t}=${i}`;
      default:
        return i;
    }
  }
  let l = z(n), a = Object.entries(o).map(([s, i]) => b({ allowReserved: e, name: n === "deepObject" ? `${t}[${s}]` : s, value: i })).join(l);
  return n === "label" || n === "matrix" ? l + a : a;
}, W = /\{[^{}]+\}/g, D = ({ path: e, url: r }) => {
  let t = r, n = r.match(W);
  if (n) for (let o of n) {
    let l = !1, a = o.substring(1, o.length - 1), s = "simple";
    a.endsWith("*") && (l = !0, a = a.substring(0, a.length - 1)), a.startsWith(".") ? (a = a.substring(1), s = "label") : a.startsWith(";") && (a = a.substring(1), s = "matrix");
    let i = e[a];
    if (i == null) continue;
    if (Array.isArray(i)) {
      t = t.replace(o, x({ explode: l, name: a, style: s, value: i }));
      continue;
    }
    if (typeof i == "object") {
      t = t.replace(o, $({ explode: l, name: a, style: s, value: i }));
      continue;
    }
    if (s === "matrix") {
      t = t.replace(o, `;${b({ name: a, value: i })}`);
      continue;
    }
    let d = encodeURIComponent(s === "label" ? `.${i}` : i);
    t = t.replace(o, d);
  }
  return t;
}, _ = ({ allowReserved: e, array: r, object: t } = {}) => (n) => {
  let o = [];
  if (n && typeof n == "object") for (let l in n) {
    let a = n[l];
    if (a != null) if (Array.isArray(a)) {
      let s = x({ allowReserved: e, explode: !0, name: l, style: "form", value: a, ...r });
      s && o.push(s);
    } else if (typeof a == "object") {
      let s = $({ allowReserved: e, explode: !0, name: l, style: "deepObject", value: a, ...t });
      s && o.push(s);
    } else {
      let s = b({ allowReserved: e, name: l, value: a });
      s && o.push(s);
    }
  }
  return o.join("&");
}, N = (e) => {
  var t;
  if (!e) return "stream";
  let r = (t = e.split(";")[0]) == null ? void 0 : t.trim();
  if (r) {
    if (r.startsWith("application/json") || r.endsWith("+json")) return "json";
    if (r === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((n) => r.startsWith(n))) return "blob";
    if (r.startsWith("text/")) return "text";
  }
}, k = async ({ security: e, ...r }) => {
  for (let t of e) {
    let n = await C(t, r.auth);
    if (!n) continue;
    let o = t.name ?? "Authorization";
    switch (t.in) {
      case "query":
        r.query || (r.query = {}), r.query[o] = n;
        break;
      case "cookie":
        r.headers.append("Cookie", `${o}=${n}`);
        break;
      case "header":
      default:
        r.headers.set(o, n);
        break;
    }
    return;
  }
}, v = (e) => H({ baseUrl: e.baseUrl, path: e.path, query: e.query, querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : _(e.querySerializer), url: e.url }), H = ({ baseUrl: e, path: r, query: t, querySerializer: n, url: o }) => {
  let l = o.startsWith("/") ? o : `/${o}`, a = (e ?? "") + l;
  r && (a = D({ path: r, url: a }));
  let s = t ? n(t) : "";
  return s.startsWith("?") && (s = s.substring(1)), s && (a += `?${s}`), a;
}, j = (e, r) => {
  var n;
  let t = { ...e, ...r };
  return (n = t.baseUrl) != null && n.endsWith("/") && (t.baseUrl = t.baseUrl.substring(0, t.baseUrl.length - 1)), t.headers = q(e.headers, r.headers), t;
}, q = (...e) => {
  let r = new Headers();
  for (let t of e) {
    if (!t || typeof t != "object") continue;
    let n = t instanceof Headers ? t.entries() : Object.entries(t);
    for (let [o, l] of n) if (l === null) r.delete(o);
    else if (Array.isArray(l)) for (let a of l) r.append(o, a);
    else l !== void 0 && r.set(o, typeof l == "object" ? JSON.stringify(l) : l);
  }
  return r;
}, w = class {
  constructor() {
    g(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  getInterceptorIndex(e) {
    return typeof e == "number" ? this._fns[e] ? e : -1 : this._fns.indexOf(e);
  }
  exists(e) {
    let r = this.getInterceptorIndex(e);
    return !!this._fns[r];
  }
  eject(e) {
    let r = this.getInterceptorIndex(e);
    this._fns[r] && (this._fns[r] = null);
  }
  update(e, r) {
    let t = this.getInterceptorIndex(e);
    return this._fns[t] ? (this._fns[t] = r, e) : !1;
  }
  use(e) {
    return this._fns = [...this._fns, e], this._fns.length - 1;
  }
}, P = () => ({ error: new w(), request: new w(), response: new w() }), B = _({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), J = { "Content-Type": "application/json" }, O = (e = {}) => ({ ...A, headers: J, parseAs: "auto", querySerializer: B, ...e }), G = (e = {}) => {
  let r = j(O(), e), t = () => ({ ...r }), n = (a) => (r = j(r, a), t()), o = P(), l = async (a) => {
    let s = { ...r, ...a, fetch: a.fetch ?? r.fetch ?? globalThis.fetch, headers: q(r.headers, a.headers) };
    s.security && await k({ ...s, security: s.security }), s.body && s.bodySerializer && (s.body = s.bodySerializer(s.body)), (s.body === void 0 || s.body === "") && s.headers.delete("Content-Type");
    let i = v(s), d = { redirect: "follow", ...s }, f = new Request(i, d);
    for (let u of o.request._fns) u && (f = await u(f, s));
    let R = s.fetch, c = await R(f);
    for (let u of o.response._fns) u && (c = await u(c, f, s));
    let h = { request: f, response: c };
    if (c.ok) {
      if (c.status === 204 || c.headers.get("Content-Length") === "0") return { data: {}, ...h };
      let u = (s.parseAs === "auto" ? N(c.headers.get("Content-Type")) : s.parseAs) ?? "json";
      if (u === "stream") return { data: c.body, ...h };
      let m = await c[u]();
      return u === "json" && (s.responseValidator && await s.responseValidator(m), s.responseTransformer && (m = await s.responseTransformer(m))), { data: m, ...h };
    }
    let y = await c.text();
    try {
      y = JSON.parse(y);
    } catch {
    }
    let p = y;
    for (let u of o.error._fns) u && (p = await u(y, c, f, s));
    if (p = p || {}, s.throwOnError) throw p;
    return { error: p, ...h };
  };
  return { buildUrl: v, connect: (a) => l({ ...a, method: "CONNECT" }), delete: (a) => l({ ...a, method: "DELETE" }), get: (a) => l({ ...a, method: "GET" }), getConfig: t, head: (a) => l({ ...a, method: "HEAD" }), interceptors: o, options: (a) => l({ ...a, method: "OPTIONS" }), patch: (a) => l({ ...a, method: "PATCH" }), post: (a) => l({ ...a, method: "POST" }), put: (a) => l({ ...a, method: "PUT" }), request: l, setConfig: n, trace: (a) => l({ ...a, method: "TRACE" }) };
};
const L = G(O({
  baseUrl: "https://localhost:44389"
})), Q = (e, r) => {
  console.log("Hello from my extension 🎉"), e.consumeContext(T, async (t) => {
    const n = t == null ? void 0 : t.getOpenApiConfiguration();
    L.setConfig({
      auth: (n == null ? void 0 : n.token) ?? void 0,
      baseUrl: (n == null ? void 0 : n.base) ?? "",
      credentials: (n == null ? void 0 : n.credentials) ?? "same-origin"
    });
  });
}, X = (e, r) => {
  console.log("Goodbye from my extension 👋");
};
export {
  Q as onInit,
  X as onUnload
};
//# sourceMappingURL=entrypoint-CPJS93LN.js.map
