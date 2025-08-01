var W = Object.defineProperty;
var O = (t) => {
  throw TypeError(t);
};
var B = (t, r, e) => r in t ? W(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var E = (t, r, e) => B(t, typeof r != "symbol" ? r + "" : r, e), U = (t, r, e) => r.has(t) || O("Cannot " + e);
var h = (t, r, e) => (U(t, r, "read from private field"), e ? e.call(t) : r.get(t)), b = (t, r, e) => r.has(t) ? O("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, e), y = (t, r, e, n) => (U(t, r, "write to private field"), n ? n.call(t, e) : r.set(t, e), e);
import { UMB_MEMBER_ENTITY_TYPE as D } from "@umbraco-cms/backoffice/member";
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
    js: () => import("./entrypoint-VQNnzgr1.js")
  }
], Y = [
  {
    type: "modal",
    alias: "member.impersonation.modal",
    name: "Member custom modal",
    js: () => import("./modal-element-BTfD9iY2.js")
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
}, S = ({ allowReserved: t, explode: r, name: e, style: n, value: a }) => {
  if (!r) {
    let o = (t ? a : a.map((l) => encodeURIComponent(l))).join(te(n));
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
  let i = ee(n), s = a.map((o) => n === "label" || n === "simple" ? t ? o : encodeURIComponent(o) : R({ allowReserved: t, name: e, value: o })).join(i);
  return n === "label" || n === "matrix" ? i + s : s;
}, R = ({ allowReserved: t, name: r, value: e }) => {
  if (e == null) return "";
  if (typeof e == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${r}=${t ? e : encodeURIComponent(e)}`;
}, A = ({ allowReserved: t, explode: r, name: e, style: n, value: a }) => {
  if (a instanceof Date) return `${e}=${a.toISOString()}`;
  if (n !== "deepObject" && !r) {
    let o = [];
    Object.entries(a).forEach(([p, m]) => {
      o = [...o, p, t ? m : encodeURIComponent(m)];
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
  let i = re(n), s = Object.entries(a).map(([o, l]) => R({ allowReserved: t, name: n === "deepObject" ? `${e}[${o}]` : o, value: l })).join(i);
  return n === "label" || n === "matrix" ? i + s : s;
}, oe = /\{[^{}]+\}/g, se = ({ path: t, url: r }) => {
  let e = r, n = r.match(oe);
  if (n) for (let a of n) {
    let i = !1, s = a.substring(1, a.length - 1), o = "simple";
    s.endsWith("*") && (i = !0, s = s.substring(0, s.length - 1)), s.startsWith(".") ? (s = s.substring(1), o = "label") : s.startsWith(";") && (s = s.substring(1), o = "matrix");
    let l = t[s];
    if (l == null) continue;
    if (Array.isArray(l)) {
      e = e.replace(a, S({ explode: i, name: s, style: o, value: l }));
      continue;
    }
    if (typeof l == "object") {
      e = e.replace(a, A({ explode: i, name: s, style: o, value: l }));
      continue;
    }
    if (o === "matrix") {
      e = e.replace(a, `;${R({ name: s, value: l })}`);
      continue;
    }
    let p = encodeURIComponent(o === "label" ? `.${l}` : l);
    e = e.replace(a, p);
  }
  return e;
}, q = ({ allowReserved: t, array: r, object: e } = {}) => (n) => {
  let a = [];
  if (n && typeof n == "object") for (let i in n) {
    let s = n[i];
    if (s != null) if (Array.isArray(s)) {
      let o = S({ allowReserved: t, explode: !0, name: i, style: "form", value: s, ...r });
      o && a.push(o);
    } else if (typeof s == "object") {
      let o = A({ allowReserved: t, explode: !0, name: i, style: "deepObject", value: s, ...e });
      o && a.push(o);
    } else {
      let o = R({ allowReserved: t, name: i, value: s });
      o && a.push(o);
    }
  }
  return a.join("&");
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
}, ae = async ({ security: t, ...r }) => {
  for (let e of t) {
    let n = await K(e, r.auth);
    if (!n) continue;
    let a = e.name ?? "Authorization";
    switch (e.in) {
      case "query":
        r.query || (r.query = {}), r.query[a] = n;
        break;
      case "cookie":
        r.headers.append("Cookie", `${a}=${n}`);
        break;
      case "header":
      default:
        r.headers.set(a, n);
        break;
    }
    return;
  }
}, _ = (t) => ie({ baseUrl: t.baseUrl, path: t.path, query: t.query, querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : q(t.querySerializer), url: t.url }), ie = ({ baseUrl: t, path: r, query: e, querySerializer: n, url: a }) => {
  let i = a.startsWith("/") ? a : `/${a}`, s = (t ?? "") + i;
  r && (s = se({ path: r, url: s }));
  let o = e ? n(e) : "";
  return o.startsWith("?") && (o = o.substring(1)), o && (s += `?${o}`), s;
}, I = (t, r) => {
  var n;
  let e = { ...t, ...r };
  return (n = e.baseUrl) != null && n.endsWith("/") && (e.baseUrl = e.baseUrl.substring(0, e.baseUrl.length - 1)), e.headers = M(t.headers, r.headers), e;
}, M = (...t) => {
  let r = new Headers();
  for (let e of t) {
    if (!e || typeof e != "object") continue;
    let n = e instanceof Headers ? e.entries() : Object.entries(e);
    for (let [a, i] of n) if (i === null) r.delete(a);
    else if (Array.isArray(i)) for (let s of i) r.append(a, s);
    else i !== void 0 && r.set(a, typeof i == "object" ? JSON.stringify(i) : i);
  }
  return r;
}, T = class {
  constructor() {
    E(this, "_fns");
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
}, le = () => ({ error: new T(), request: new T(), response: new T() }), ce = q({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), ue = { "Content-Type": "application/json" }, k = (t = {}) => ({ ...Z, headers: ue, parseAs: "auto", querySerializer: ce, ...t }), me = (t = {}) => {
  let r = I(k(), t), e = () => ({ ...r }), n = (s) => (r = I(r, s), e()), a = le(), i = async (s) => {
    let o = { ...r, ...s, fetch: s.fetch ?? r.fetch ?? globalThis.fetch, headers: M(r.headers, s.headers) };
    o.security && await ae({ ...o, security: o.security }), o.body && o.bodySerializer && (o.body = o.bodySerializer(o.body)), (o.body === void 0 || o.body === "") && o.headers.delete("Content-Type");
    let l = _(o), p = { redirect: "follow", ...o }, m = new Request(l, p);
    for (let c of a.request._fns) c && (m = await c(m, o));
    let N = o.fetch, u = await N(m);
    for (let c of a.response._fns) c && (u = await c(u, m, o));
    let g = { request: m, response: u };
    if (u.ok) {
      if (u.status === 204 || u.headers.get("Content-Length") === "0") return { data: {}, ...g };
      let c = (o.parseAs === "auto" ? ne(u.headers.get("Content-Type")) : o.parseAs) ?? "json";
      if (c === "stream") return { data: u.body, ...g };
      let C = await u[c]();
      return c === "json" && (o.responseValidator && await o.responseValidator(C), o.responseTransformer && (C = await o.responseTransformer(C))), { data: C, ...g };
    }
    let v = await u.text();
    try {
      v = JSON.parse(v);
    } catch {
    }
    let d = v;
    for (let c of a.error._fns) c && (d = await c(v, u, m, o));
    if (d = d || {}, o.throwOnError) throw d;
    return { error: d, ...g };
  };
  return { buildUrl: _, connect: (s) => i({ ...s, method: "CONNECT" }), delete: (s) => i({ ...s, method: "DELETE" }), get: (s) => i({ ...s, method: "GET" }), getConfig: e, head: (s) => i({ ...s, method: "HEAD" }), interceptors: a, options: (s) => i({ ...s, method: "OPTIONS" }), patch: (s) => i({ ...s, method: "PATCH" }), post: (s) => i({ ...s, method: "POST" }), put: (s) => i({ ...s, method: "PUT" }), request: i, setConfig: n, trace: (s) => i({ ...s, method: "TRACE" }) };
};
const $ = me(k({
  baseUrl: "https://localhost:44389"
}));
var j, w;
class fe extends P {
  constructor(e, n) {
    super(e, n);
    b(this, j);
    b(this, w);
    this.consumeContext(J, (i) => {
      y(this, w, i);
    });
    var a = $.getConfig();
    y(this, j, a.auth);
  }
  async execute() {
    var n;
    const e = (n = h(this, w)) == null ? void 0 : n.open(this, F, {
      data: {
        headline: "Impersonate",
        content: "Do you want to impersonate this user?"
      }
    });
    await (e == null ? void 0 : e.onSubmit().then(async () => {
    }));
  }
}
j = new WeakMap(), w = new WeakMap();
const z = {
  alias: "Umb.Condition.SectionAlias",
  match: "Umb.Section.Members"
}, pe = {
  type: "entityAction",
  kind: "default",
  alias: "member.entity.action",
  name: "member action",
  weight: 1,
  forEntityTypes: [
    D
  ],
  api: fe,
  meta: {
    icon: "icon-operator",
    label: "Impersonate..."
  },
  conditions: [
    z
  ]
}, de = [pe];
var f, x;
class he extends L {
  constructor(e) {
    super(e, be);
    b(this, f);
    b(this, x);
    y(this, f, new G({})), this.rootItems = h(this, f).asObservable();
    var n = $.getConfig();
    y(this, x, n.auth), this.fetch();
  }
  async fetch() {
    const { data: e, error: n } = await $.get({
      url: "/umbraco/management/api/v1/tree/document/root",
      headers: {
        Authorization: "Bearer " + await h(this, x).call(this)
      }
    });
    n ? console.error("There was a problem with the fetch operation:", n) : e != null && e.total && e.total > 0 && h(this, f).setValue(e.items);
  }
}
f = new WeakMap(), x = new WeakMap();
const be = new V(
  "UmbWorkspaceContext",
  "RootContext"
), ye = {
  type: "workspaceContext",
  alias: "Root.Context",
  name: "Root Context",
  api: he,
  conditions: [
    z
  ]
}, we = [ye], $e = [
  ...Q,
  ...de,
  ...we,
  ...X
];
export {
  be as R,
  $ as c,
  $e as m
};
//# sourceMappingURL=bundle.manifests-ibVyGFMt.js.map
