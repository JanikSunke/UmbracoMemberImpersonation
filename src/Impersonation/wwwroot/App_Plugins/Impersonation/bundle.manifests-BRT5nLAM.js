var B = Object.defineProperty;
var O = (t) => {
  throw TypeError(t);
};
var W = (t, r, e) => r in t ? B(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var E = (t, r, e) => W(t, typeof r != "symbol" ? r + "" : r, e), S = (t, r, e) => r.has(t) || O("Cannot " + e);
var f = (t, r, e) => (S(t, r, "read from private field"), e ? e.call(t) : r.get(t)), b = (t, r, e) => r.has(t) ? O("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, e), y = (t, r, e, a) => (S(t, r, "write to private field"), a ? a.call(t, e) : r.set(t, e), e);
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
    js: () => import("./entrypoint-CeZ2lXMb.js")
  }
], Y = [
  {
    type: "modal",
    alias: "member.impersonation.modal",
    name: "Member custom modal",
    js: () => import("./modal-element-BJkGlHbr.js")
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
}, A = ({ allowReserved: t, explode: r, name: e, style: a, value: s }) => {
  if (!r) {
    let o = (t ? s : s.map((l) => encodeURIComponent(l))).join(te(a));
    switch (a) {
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
  let i = ee(a), n = s.map((o) => a === "label" || a === "simple" ? t ? o : encodeURIComponent(o) : T({ allowReserved: t, name: e, value: o })).join(i);
  return a === "label" || a === "matrix" ? i + n : n;
}, T = ({ allowReserved: t, name: r, value: e }) => {
  if (e == null) return "";
  if (typeof e == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${r}=${t ? e : encodeURIComponent(e)}`;
}, I = ({ allowReserved: t, explode: r, name: e, style: a, value: s }) => {
  if (s instanceof Date) return `${e}=${s.toISOString()}`;
  if (a !== "deepObject" && !r) {
    let o = [];
    Object.entries(s).forEach(([h, m]) => {
      o = [...o, h, t ? m : encodeURIComponent(m)];
    });
    let l = o.join(",");
    switch (a) {
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
  let i = re(a), n = Object.entries(s).map(([o, l]) => T({ allowReserved: t, name: a === "deepObject" ? `${e}[${o}]` : o, value: l })).join(i);
  return a === "label" || a === "matrix" ? i + n : n;
}, oe = /\{[^{}]+\}/g, ne = ({ path: t, url: r }) => {
  let e = r, a = r.match(oe);
  if (a) for (let s of a) {
    let i = !1, n = s.substring(1, s.length - 1), o = "simple";
    n.endsWith("*") && (i = !0, n = n.substring(0, n.length - 1)), n.startsWith(".") ? (n = n.substring(1), o = "label") : n.startsWith(";") && (n = n.substring(1), o = "matrix");
    let l = t[n];
    if (l == null) continue;
    if (Array.isArray(l)) {
      e = e.replace(s, A({ explode: i, name: n, style: o, value: l }));
      continue;
    }
    if (typeof l == "object") {
      e = e.replace(s, I({ explode: i, name: n, style: o, value: l }));
      continue;
    }
    if (o === "matrix") {
      e = e.replace(s, `;${T({ name: n, value: l })}`);
      continue;
    }
    let h = encodeURIComponent(o === "label" ? `.${l}` : l);
    e = e.replace(s, h);
  }
  return e;
}, q = ({ allowReserved: t, array: r, object: e } = {}) => (a) => {
  let s = [];
  if (a && typeof a == "object") for (let i in a) {
    let n = a[i];
    if (n != null) if (Array.isArray(n)) {
      let o = A({ allowReserved: t, explode: !0, name: i, style: "form", value: n, ...r });
      o && s.push(o);
    } else if (typeof n == "object") {
      let o = I({ allowReserved: t, explode: !0, name: i, style: "deepObject", value: n, ...e });
      o && s.push(o);
    } else {
      let o = T({ allowReserved: t, name: i, value: n });
      o && s.push(o);
    }
  }
  return s.join("&");
}, ae = (t) => {
  var e;
  if (!t) return "stream";
  let r = (e = t.split(";")[0]) == null ? void 0 : e.trim();
  if (r) {
    if (r.startsWith("application/json") || r.endsWith("+json")) return "json";
    if (r === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((a) => r.startsWith(a))) return "blob";
    if (r.startsWith("text/")) return "text";
  }
}, se = async ({ security: t, ...r }) => {
  for (let e of t) {
    let a = await K(e, r.auth);
    if (!a) continue;
    let s = e.name ?? "Authorization";
    switch (e.in) {
      case "query":
        r.query || (r.query = {}), r.query[s] = a;
        break;
      case "cookie":
        r.headers.append("Cookie", `${s}=${a}`);
        break;
      case "header":
      default:
        r.headers.set(s, a);
        break;
    }
    return;
  }
}, U = (t) => ie({ baseUrl: t.baseUrl, path: t.path, query: t.query, querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : q(t.querySerializer), url: t.url }), ie = ({ baseUrl: t, path: r, query: e, querySerializer: a, url: s }) => {
  let i = s.startsWith("/") ? s : `/${s}`, n = (t ?? "") + i;
  r && (n = ne({ path: r, url: n }));
  let o = e ? a(e) : "";
  return o.startsWith("?") && (o = o.substring(1)), o && (n += `?${o}`), n;
}, _ = (t, r) => {
  var a;
  let e = { ...t, ...r };
  return (a = e.baseUrl) != null && a.endsWith("/") && (e.baseUrl = e.baseUrl.substring(0, e.baseUrl.length - 1)), e.headers = k(t.headers, r.headers), e;
}, k = (...t) => {
  let r = new Headers();
  for (let e of t) {
    if (!e || typeof e != "object") continue;
    let a = e instanceof Headers ? e.entries() : Object.entries(e);
    for (let [s, i] of a) if (i === null) r.delete(s);
    else if (Array.isArray(i)) for (let n of i) r.append(s, n);
    else i !== void 0 && r.set(s, typeof i == "object" ? JSON.stringify(i) : i);
  }
  return r;
}, $ = class {
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
}, le = () => ({ error: new $(), request: new $(), response: new $() }), ce = q({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), ue = { "Content-Type": "application/json" }, M = (t = {}) => ({ ...Z, headers: ue, parseAs: "auto", querySerializer: ce, ...t }), me = (t = {}) => {
  let r = _(M(), t), e = () => ({ ...r }), a = (n) => (r = _(r, n), e()), s = le(), i = async (n) => {
    let o = { ...r, ...n, fetch: n.fetch ?? r.fetch ?? globalThis.fetch, headers: k(r.headers, n.headers) };
    o.security && await se({ ...o, security: o.security }), o.body && o.bodySerializer && (o.body = o.bodySerializer(o.body)), (o.body === void 0 || o.body === "") && o.headers.delete("Content-Type");
    let l = U(o), h = { redirect: "follow", ...o }, m = new Request(l, h);
    for (let c of s.request._fns) c && (m = await c(m, o));
    let N = o.fetch, u = await N(m);
    for (let c of s.response._fns) c && (u = await c(u, m, o));
    let v = { request: m, response: u };
    if (u.ok) {
      if (u.status === 204 || u.headers.get("Content-Length") === "0") return { data: {}, ...v };
      let c = (o.parseAs === "auto" ? ae(u.headers.get("Content-Type")) : o.parseAs) ?? "json";
      if (c === "stream") return { data: u.body, ...v };
      let j = await u[c]();
      return c === "json" && (o.responseValidator && await o.responseValidator(j), o.responseTransformer && (j = await o.responseTransformer(j))), { data: j, ...v };
    }
    let C = await u.text();
    try {
      C = JSON.parse(C);
    } catch {
    }
    let d = C;
    for (let c of s.error._fns) c && (d = await c(C, u, m, o));
    if (d = d || {}, o.throwOnError) throw d;
    return { error: d, ...v };
  };
  return { buildUrl: U, connect: (n) => i({ ...n, method: "CONNECT" }), delete: (n) => i({ ...n, method: "DELETE" }), get: (n) => i({ ...n, method: "GET" }), getConfig: e, head: (n) => i({ ...n, method: "HEAD" }), interceptors: s, options: (n) => i({ ...n, method: "OPTIONS" }), patch: (n) => i({ ...n, method: "PATCH" }), post: (n) => i({ ...n, method: "POST" }), put: (n) => i({ ...n, method: "PUT" }), request: i, setConfig: a, trace: (n) => i({ ...n, method: "TRACE" }) };
};
const R = me(M({
  baseUrl: "https://localhost:44389"
}));
var w, g;
class fe extends P {
  constructor(e, a) {
    super(e, a);
    b(this, w);
    b(this, g);
    this.consumeContext(J, (i) => {
      y(this, g, i);
    });
    var s = R.getConfig();
    y(this, w, s.auth);
  }
  async execute() {
    var a;
    const e = (a = f(this, g)) == null ? void 0 : a.open(this, F, {
      data: {
        headline: "Impersonate",
        content: "Do you want to impersonate this user?"
      }
    });
    await (e == null ? void 0 : e.onSubmit().then(async () => {
      var s;
      return R.get({
        url: "/umbraco/backoffice/impersonation/v1/impersonate/" + ((s = this.args.unique) == null ? void 0 : s.toString()),
        headers: {
          Authorization: "Bearer " + await f(this, w).call(this)
        }
      }).then(({ response: i }) => {
        i.ok && (window.location.href = "/");
      });
    }).catch(() => {
    }));
  }
}
w = new WeakMap(), g = new WeakMap();
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
}, he = [pe];
var p, x;
class de extends L {
  constructor(e) {
    super(e, be);
    b(this, p);
    b(this, x);
    y(this, p, new G({})), this.rootItems = f(this, p).asObservable();
    var a = R.getConfig();
    y(this, x, a.auth), this.fetch();
  }
  async fetch() {
    const { data: e, error: a } = await R.get({
      url: "/umbraco/management/api/v1/tree/document/root",
      headers: {
        Authorization: "Bearer " + await f(this, x).call(this)
      }
    });
    a ? console.error("There was a problem with the fetch operation:", a) : e != null && e.total && e.total > 0 && f(this, p).setValue(e.items);
  }
}
p = new WeakMap(), x = new WeakMap();
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
  ...he,
  ...we,
  ...X
];
export {
  be as R,
  R as c,
  $e as m
};
//# sourceMappingURL=bundle.manifests-BRT5nLAM.js.map
