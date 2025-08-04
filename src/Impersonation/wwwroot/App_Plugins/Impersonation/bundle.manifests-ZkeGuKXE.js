var D = Object.defineProperty;
var O = (t) => {
  throw TypeError(t);
};
var N = (t, r, e) => r in t ? D(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var A = (t, r, e) => N(t, typeof r != "symbol" ? r + "" : r, e), E = (t, r, e) => r.has(t) || O("Cannot " + e);
var f = (t, r, e) => (E(t, r, "read from private field"), e ? e.call(t) : r.get(t)), y = (t, r, e) => r.has(t) ? O("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, e), w = (t, r, e, n) => (E(t, r, "write to private field"), n ? n.call(t, e) : r.set(t, e), e);
import { UMB_MEMBER_ENTITY_TYPE as W } from "@umbraco-cms/backoffice/member";
import { UmbEntityActionBase as P } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as H, UMB_MODAL_MANAGER_CONTEXT as J } from "@umbraco-cms/backoffice/modal";
import { UmbContextBase as L } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as V } from "@umbraco-cms/backoffice/context-api";
import { UmbBasicState as G } from "@umbraco-cms/backoffice/observable-api";
const X = [
  {
    name: "Impersonation Entrypoint",
    alias: "Impersonation.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint--hVicx6v.js")
  }
], Y = [
  {
    type: "modal",
    alias: "member.impersonation.modal",
    name: "Member custom modal",
    js: () => import("./modal-element-GxYxWSCJ.js")
  }
], Q = [...Y], F = new H(
  "member.impersonation.modal",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var K = async (t, r) => {
  let e = typeof r == "function" ? await r(t) : r;
  if (e) return t.scheme === "bearer" ? `Bearer ${e}` : t.scheme === "basic" ? `Basic ${btoa(e)}` : e;
}, Z = { bodySerializer: (t) => JSON.stringify(t, (r, e) => typeof e == "bigint" ? e.toString() : e) }, ee = (t) => {
  switch (t) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, te = (t) => {
  switch (t) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, re = (t) => {
  switch (t) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, U = ({ allowReserved: t, explode: r, name: e, style: n, value: s }) => {
  if (!r) {
    let o = (t ? s : s.map((l) => encodeURIComponent(l))).join(te(n));
    switch (n) {
      case "label":
        return `.${o}`;
      case "matrix":
        return `;${e}=${o}`;
      case "simple":
        return o;
      default:
        return `${e}=${o}`;
    }
  }
  let i = ee(n), a = s.map((o) => n === "label" || n === "simple" ? t ? o : encodeURIComponent(o) : T({ allowReserved: t, name: e, value: o })).join(i);
  return n === "label" || n === "matrix" ? i + a : a;
}, T = ({ allowReserved: t, name: r, value: e }) => {
  if (e == null) return "";
  if (typeof e == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${r}=${t ? e : encodeURIComponent(e)}`;
}, _ = ({ allowReserved: t, explode: r, name: e, style: n, value: s }) => {
  if (s instanceof Date) return `${e}=${s.toISOString()}`;
  if (n !== "deepObject" && !r) {
    let o = [];
    Object.entries(s).forEach(([d, m]) => {
      o = [...o, d, t ? m : encodeURIComponent(m)];
    });
    let l = o.join(",");
    switch (n) {
      case "form":
        return `${e}=${l}`;
      case "label":
        return `.${l}`;
      case "matrix":
        return `;${e}=${l}`;
      default:
        return l;
    }
  }
  let i = re(n), a = Object.entries(s).map(([o, l]) => T({ allowReserved: t, name: n === "deepObject" ? `${e}[${o}]` : o, value: l })).join(i);
  return n === "label" || n === "matrix" ? i + a : a;
}, oe = /\{[^{}]+\}/g, ae = ({ path: t, url: r }) => {
  let e = r, n = r.match(oe);
  if (n) for (let s of n) {
    let i = !1, a = s.substring(1, s.length - 1), o = "simple";
    a.endsWith("*") && (i = !0, a = a.substring(0, a.length - 1)), a.startsWith(".") ? (a = a.substring(1), o = "label") : a.startsWith(";") && (a = a.substring(1), o = "matrix");
    let l = t[a];
    if (l == null) continue;
    if (Array.isArray(l)) {
      e = e.replace(s, U({ explode: i, name: a, style: o, value: l }));
      continue;
    }
    if (typeof l == "object") {
      e = e.replace(s, _({ explode: i, name: a, style: o, value: l }));
      continue;
    }
    if (o === "matrix") {
      e = e.replace(s, `;${T({ name: a, value: l })}`);
      continue;
    }
    let d = encodeURIComponent(o === "label" ? `.${l}` : l);
    e = e.replace(s, d);
  }
  return e;
}, q = ({ allowReserved: t, array: r, object: e } = {}) => (n) => {
  let s = [];
  if (n && typeof n == "object") for (let i in n) {
    let a = n[i];
    if (a != null) if (Array.isArray(a)) {
      let o = U({ allowReserved: t, explode: !0, name: i, style: "form", value: a, ...r });
      o && s.push(o);
    } else if (typeof a == "object") {
      let o = _({ allowReserved: t, explode: !0, name: i, style: "deepObject", value: a, ...e });
      o && s.push(o);
    } else {
      let o = T({ allowReserved: t, name: i, value: a });
      o && s.push(o);
    }
  }
  return s.join("&");
}, ne = (t) => {
  var e;
  if (!t) return "stream";
  let r = (e = t.split(";")[0]) == null ? void 0 : e.trim();
  if (r) {
    if (r.startsWith("application/json") || r.endsWith("+json")) return "json";
    if (r === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((n) => r.startsWith(n))) return "blob";
    if (r.startsWith("text/")) return "text";
  }
}, se = async ({ security: t, ...r }) => {
  for (let e of t) {
    let n = await K(e, r.auth);
    if (!n) continue;
    let s = e.name ?? "Authorization";
    switch (e.in) {
      case "query":
        r.query || (r.query = {}), r.query[s] = n;
        break;
      case "cookie":
        r.headers.append("Cookie", `${s}=${n}`);
        break;
      case "header":
      default:
        r.headers.set(s, n);
        break;
    }
    return;
  }
}, I = (t) => ie({ baseUrl: t.baseUrl, path: t.path, query: t.query, querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : q(t.querySerializer), url: t.url }), ie = ({ baseUrl: t, path: r, query: e, querySerializer: n, url: s }) => {
  let i = s.startsWith("/") ? s : `/${s}`, a = (t ?? "") + i;
  r && (a = ae({ path: r, url: a }));
  let o = e ? n(e) : "";
  return o.startsWith("?") && (o = o.substring(1)), o && (a += `?${o}`), a;
}, S = (t, r) => {
  var n;
  let e = { ...t, ...r };
  return (n = e.baseUrl) != null && n.endsWith("/") && (e.baseUrl = e.baseUrl.substring(0, e.baseUrl.length - 1)), e.headers = k(t.headers, r.headers), e;
}, k = (...t) => {
  let r = new Headers();
  for (let e of t) {
    if (!e || typeof e != "object") continue;
    let n = e instanceof Headers ? e.entries() : Object.entries(e);
    for (let [s, i] of n) if (i === null) r.delete(s);
    else if (Array.isArray(i)) for (let a of i) r.append(s, a);
    else i !== void 0 && r.set(s, typeof i == "object" ? JSON.stringify(i) : i);
  }
  return r;
}, $ = class {
  constructor() {
    A(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  getInterceptorIndex(t) {
    return typeof t == "number" ? this._fns[t] ? t : -1 : this._fns.indexOf(t);
  }
  exists(t) {
    let r = this.getInterceptorIndex(t);
    return !!this._fns[r];
  }
  eject(t) {
    let r = this.getInterceptorIndex(t);
    this._fns[r] && (this._fns[r] = null);
  }
  update(t, r) {
    let e = this.getInterceptorIndex(t);
    return this._fns[e] ? (this._fns[e] = r, t) : !1;
  }
  use(t) {
    return this._fns = [...this._fns, t], this._fns.length - 1;
  }
}, le = () => ({ error: new $(), request: new $(), response: new $() }), ce = q({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), ue = { "Content-Type": "application/json" }, M = (t = {}) => ({ ...Z, headers: ue, parseAs: "auto", querySerializer: ce, ...t }), me = (t = {}) => {
  let r = S(M(), t), e = () => ({ ...r }), n = (a) => (r = S(r, a), e()), s = le(), i = async (a) => {
    let o = { ...r, ...a, fetch: a.fetch ?? r.fetch ?? globalThis.fetch, headers: k(r.headers, a.headers) };
    o.security && await se({ ...o, security: o.security }), o.body && o.bodySerializer && (o.body = o.bodySerializer(o.body)), (o.body === void 0 || o.body === "") && o.headers.delete("Content-Type");
    let l = I(o), d = { redirect: "follow", ...o }, m = new Request(l, d);
    for (let c of s.request._fns) c && (m = await c(m, o));
    let B = o.fetch, u = await B(m);
    for (let c of s.response._fns) c && (u = await c(u, m, o));
    let C = { request: m, response: u };
    if (u.ok) {
      if (u.status === 204 || u.headers.get("Content-Length") === "0") return { data: {}, ...C };
      let c = (o.parseAs === "auto" ? ne(u.headers.get("Content-Type")) : o.parseAs) ?? "json";
      if (c === "stream") return { data: u.body, ...C };
      let R = await u[c]();
      return c === "json" && (o.responseValidator && await o.responseValidator(R), o.responseTransformer && (R = await o.responseTransformer(R))), { data: R, ...C };
    }
    let j = await u.text();
    try {
      j = JSON.parse(j);
    } catch {
    }
    let b = j;
    for (let c of s.error._fns) c && (b = await c(j, u, m, o));
    if (b = b || {}, o.throwOnError) throw b;
    return { error: b, ...C };
  };
  return { buildUrl: I, connect: (a) => i({ ...a, method: "CONNECT" }), delete: (a) => i({ ...a, method: "DELETE" }), get: (a) => i({ ...a, method: "GET" }), getConfig: e, head: (a) => i({ ...a, method: "HEAD" }), interceptors: s, options: (a) => i({ ...a, method: "OPTIONS" }), patch: (a) => i({ ...a, method: "PATCH" }), post: (a) => i({ ...a, method: "POST" }), put: (a) => i({ ...a, method: "PUT" }), request: i, setConfig: n, trace: (a) => i({ ...a, method: "TRACE" }) };
};
const g = me(M({
  baseUrl: "https://localhost:44389"
}));
var x, v;
class fe extends P {
  constructor(e, n) {
    super(e, n);
    y(this, x);
    y(this, v);
    this.consumeContext(J, (i) => {
      w(this, v, i);
    });
    var s = g.getConfig();
    w(this, x, s.auth);
  }
  async execute() {
    var n;
    const e = (n = f(this, v)) == null ? void 0 : n.open(this, F, {
      data: {
        headline: "Impersonate",
        content: "Do you want to impersonate this user?"
      }
    });
    await (e == null ? void 0 : e.onSubmit().then(async (s) => {
      var i;
      return g.get({
        url: "/umbraco/backoffice/impersonation/v1/impersonate/" + ((i = this.args.unique) == null ? void 0 : i.toString()),
        headers: {
          Authorization: "Bearer " + await f(this, x).call(this)
        }
      }).then(({ response: a }) => {
        a.ok && (window.location.href = s.page ? s.page : "/");
      });
    }).catch(() => {
    }));
  }
}
x = new WeakMap(), v = new WeakMap();
const z = {
  alias: "Umb.Condition.SectionAlias",
  match: "Umb.Section.Members"
}, he = {
  type: "entityAction",
  kind: "default",
  alias: "member.entity.action",
  name: "member action",
  weight: 1,
  forEntityTypes: [
    W
  ],
  api: fe,
  meta: {
    icon: "icon-operator",
    label: "Impersonate..."
  },
  conditions: [
    z
  ]
}, pe = [he];
var h, p;
class de extends L {
  constructor(e) {
    super(e, be);
    y(this, h);
    y(this, p);
    w(this, h, new G({})), this.rootItems = f(this, h).asObservable();
    var n = g.getConfig();
    w(this, p, n.auth), this.fetch();
  }
  async fetch() {
    const e = await this.fetchRoot();
    for (const n of e)
      n.domains = await this.fetchDomains(n.id);
    f(this, h).setValue(e);
  }
  async fetchDomains(e) {
    const { data: n, error: s } = await g.get({
      url: "/umbraco/management/api/v1/document/" + e + "/domains",
      headers: {
        Authorization: "Bearer " + await f(this, p).call(this)
      }
    });
    if (s)
      console.error("There was a problem with the fetch operation:", s);
    else if (n != null && n.domains)
      return n;
  }
  async fetchRoot() {
    const { data: e, error: n } = await g.get({
      url: "/umbraco/management/api/v1/tree/document/root",
      headers: {
        Authorization: "Bearer " + await f(this, p).call(this)
      }
    });
    if (n)
      console.error("There was a problem with the fetch operation:", n);
    else if (e != null && e.total && e.total > 0)
      return e.items;
    return [];
  }
}
h = new WeakMap(), p = new WeakMap();
const be = new V(
  "UmbWorkspaceContext",
  "RootContext"
), ye = {
  type: "workspaceContext",
  alias: "Root.Context",
  name: "Root Context",
  api: de,
  conditions: [
    z
  ]
}, we = [ye], $e = [
  ...Q,
  ...pe,
  ...we,
  ...X
];
export {
  be as R,
  g as c,
  $e as m
};
//# sourceMappingURL=bundle.manifests-ZkeGuKXE.js.map
