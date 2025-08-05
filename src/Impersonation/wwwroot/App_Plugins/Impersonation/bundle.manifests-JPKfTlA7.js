var N = Object.defineProperty;
var A = (t) => {
  throw TypeError(t);
};
var W = (t, r, e) => r in t ? N(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var j = (t, r, e) => W(t, typeof r != "symbol" ? r + "" : r, e), $ = (t, r, e) => r.has(t) || A("Cannot " + e);
var f = (t, r, e) => ($(t, r, "read from private field"), e ? e.call(t) : r.get(t)), y = (t, r, e) => r.has(t) ? A("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, e), w = (t, r, e, s) => ($(t, r, "write to private field"), s ? s.call(t, e) : r.set(t, e), e);
import { UMB_MEMBER_ENTITY_TYPE as P } from "@umbraco-cms/backoffice/member";
import { UmbEntityActionBase as H } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as J, UMB_MODAL_MANAGER_CONTEXT as L } from "@umbraco-cms/backoffice/modal";
import { UmbContextBase as V } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as X } from "@umbraco-cms/backoffice/context-api";
import { UmbBasicState as G } from "@umbraco-cms/backoffice/observable-api";
import { UmbConditionBase as Y } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_CURRENT_USER_CONTEXT as Q } from "@umbraco-cms/backoffice/current-user";
const F = {
  name: "Impersonation Entrypoint",
  alias: "Impersonation.Entrypoint",
  type: "backofficeEntryPoint",
  js: () => import("./entrypoint-C6fXpL_s.js")
}, K = [F], Z = [
  {
    type: "modal",
    alias: "member.impersonation.modal",
    name: "Member custom modal",
    js: () => import("./modal-element-DUWoxTtj.js")
  }
], ee = [...Z], te = new J(
  "member.impersonation.modal",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var re = async (t, r) => {
  let e = typeof r == "function" ? await r(t) : r;
  if (e) return t.scheme === "bearer" ? `Bearer ${e}` : t.scheme === "basic" ? `Basic ${btoa(e)}` : e;
}, se = { bodySerializer: (t) => JSON.stringify(t, (r, e) => typeof e == "bigint" ? e.toString() : e) }, oe = (t) => {
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
}, ae = (t) => {
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
}, ne = (t) => {
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
}, O = ({ allowReserved: t, explode: r, name: e, style: s, value: n }) => {
  if (!r) {
    let o = (t ? n : n.map((l) => encodeURIComponent(l))).join(ae(s));
    switch (s) {
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
  let i = oe(s), a = n.map((o) => s === "label" || s === "simple" ? t ? o : encodeURIComponent(o) : U({ allowReserved: t, name: e, value: o })).join(i);
  return s === "label" || s === "matrix" ? i + a : a;
}, U = ({ allowReserved: t, name: r, value: e }) => {
  if (e == null) return "";
  if (typeof e == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${r}=${t ? e : encodeURIComponent(e)}`;
}, I = ({ allowReserved: t, explode: r, name: e, style: s, value: n }) => {
  if (n instanceof Date) return `${e}=${n.toISOString()}`;
  if (s !== "deepObject" && !r) {
    let o = [];
    Object.entries(n).forEach(([d, m]) => {
      o = [...o, d, t ? m : encodeURIComponent(m)];
    });
    let l = o.join(",");
    switch (s) {
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
  let i = ne(s), a = Object.entries(n).map(([o, l]) => U({ allowReserved: t, name: s === "deepObject" ? `${e}[${o}]` : o, value: l })).join(i);
  return s === "label" || s === "matrix" ? i + a : a;
}, ie = /\{[^{}]+\}/g, le = ({ path: t, url: r }) => {
  let e = r, s = r.match(ie);
  if (s) for (let n of s) {
    let i = !1, a = n.substring(1, n.length - 1), o = "simple";
    a.endsWith("*") && (i = !0, a = a.substring(0, a.length - 1)), a.startsWith(".") ? (a = a.substring(1), o = "label") : a.startsWith(";") && (a = a.substring(1), o = "matrix");
    let l = t[a];
    if (l == null) continue;
    if (Array.isArray(l)) {
      e = e.replace(n, O({ explode: i, name: a, style: o, value: l }));
      continue;
    }
    if (typeof l == "object") {
      e = e.replace(n, I({ explode: i, name: a, style: o, value: l }));
      continue;
    }
    if (o === "matrix") {
      e = e.replace(n, `;${U({ name: a, value: l })}`);
      continue;
    }
    let d = encodeURIComponent(o === "label" ? `.${l}` : l);
    e = e.replace(n, d);
  }
  return e;
}, q = ({ allowReserved: t, array: r, object: e } = {}) => (s) => {
  let n = [];
  if (s && typeof s == "object") for (let i in s) {
    let a = s[i];
    if (a != null) if (Array.isArray(a)) {
      let o = O({ allowReserved: t, explode: !0, name: i, style: "form", value: a, ...r });
      o && n.push(o);
    } else if (typeof a == "object") {
      let o = I({ allowReserved: t, explode: !0, name: i, style: "deepObject", value: a, ...e });
      o && n.push(o);
    } else {
      let o = U({ allowReserved: t, name: i, value: a });
      o && n.push(o);
    }
  }
  return n.join("&");
}, ce = (t) => {
  var e;
  if (!t) return "stream";
  let r = (e = t.split(";")[0]) == null ? void 0 : e.trim();
  if (r) {
    if (r.startsWith("application/json") || r.endsWith("+json")) return "json";
    if (r === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((s) => r.startsWith(s))) return "blob";
    if (r.startsWith("text/")) return "text";
  }
}, ue = async ({ security: t, ...r }) => {
  for (let e of t) {
    let s = await re(e, r.auth);
    if (!s) continue;
    let n = e.name ?? "Authorization";
    switch (e.in) {
      case "query":
        r.query || (r.query = {}), r.query[n] = s;
        break;
      case "cookie":
        r.headers.append("Cookie", `${n}=${s}`);
        break;
      case "header":
      default:
        r.headers.set(n, s);
        break;
    }
    return;
  }
}, E = (t) => me({ baseUrl: t.baseUrl, path: t.path, query: t.query, querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : q(t.querySerializer), url: t.url }), me = ({ baseUrl: t, path: r, query: e, querySerializer: s, url: n }) => {
  let i = n.startsWith("/") ? n : `/${n}`, a = (t ?? "") + i;
  r && (a = le({ path: r, url: a }));
  let o = e ? s(e) : "";
  return o.startsWith("?") && (o = o.substring(1)), o && (a += `?${o}`), a;
}, _ = (t, r) => {
  var s;
  let e = { ...t, ...r };
  return (s = e.baseUrl) != null && s.endsWith("/") && (e.baseUrl = e.baseUrl.substring(0, e.baseUrl.length - 1)), e.headers = D(t.headers, r.headers), e;
}, D = (...t) => {
  let r = new Headers();
  for (let e of t) {
    if (!e || typeof e != "object") continue;
    let s = e instanceof Headers ? e.entries() : Object.entries(e);
    for (let [n, i] of s) if (i === null) r.delete(n);
    else if (Array.isArray(i)) for (let a of i) r.append(n, a);
    else i !== void 0 && r.set(n, typeof i == "object" ? JSON.stringify(i) : i);
  }
  return r;
}, R = class {
  constructor() {
    j(this, "_fns");
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
}, fe = () => ({ error: new R(), request: new R(), response: new R() }), he = q({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), pe = { "Content-Type": "application/json" }, M = (t = {}) => ({ ...se, headers: pe, parseAs: "auto", querySerializer: he, ...t }), de = (t = {}) => {
  let r = _(M(), t), e = () => ({ ...r }), s = (a) => (r = _(r, a), e()), n = fe(), i = async (a) => {
    let o = { ...r, ...a, fetch: a.fetch ?? r.fetch ?? globalThis.fetch, headers: D(r.headers, a.headers) };
    o.security && await ue({ ...o, security: o.security }), o.body && o.bodySerializer && (o.body = o.bodySerializer(o.body)), (o.body === void 0 || o.body === "") && o.headers.delete("Content-Type");
    let l = E(o), d = { redirect: "follow", ...o }, m = new Request(l, d);
    for (let c of n.request._fns) c && (m = await c(m, o));
    let B = o.fetch, u = await B(m);
    for (let c of n.response._fns) c && (u = await c(u, m, o));
    let C = { request: m, response: u };
    if (u.ok) {
      if (u.status === 204 || u.headers.get("Content-Length") === "0") return { data: {}, ...C };
      let c = (o.parseAs === "auto" ? ce(u.headers.get("Content-Type")) : o.parseAs) ?? "json";
      if (c === "stream") return { data: u.body, ...C };
      let S = await u[c]();
      return c === "json" && (o.responseValidator && await o.responseValidator(S), o.responseTransformer && (S = await o.responseTransformer(S))), { data: S, ...C };
    }
    let T = await u.text();
    try {
      T = JSON.parse(T);
    } catch {
    }
    let b = T;
    for (let c of n.error._fns) c && (b = await c(T, u, m, o));
    if (b = b || {}, o.throwOnError) throw b;
    return { error: b, ...C };
  };
  return { buildUrl: E, connect: (a) => i({ ...a, method: "CONNECT" }), delete: (a) => i({ ...a, method: "DELETE" }), get: (a) => i({ ...a, method: "GET" }), getConfig: e, head: (a) => i({ ...a, method: "HEAD" }), interceptors: n, options: (a) => i({ ...a, method: "OPTIONS" }), patch: (a) => i({ ...a, method: "PATCH" }), post: (a) => i({ ...a, method: "POST" }), put: (a) => i({ ...a, method: "PUT" }), request: i, setConfig: s, trace: (a) => i({ ...a, method: "TRACE" }) };
};
const g = de(M({
  baseUrl: "https://localhost:44389"
}));
var v, x;
class be extends H {
  constructor(e, s) {
    super(e, s);
    y(this, v);
    y(this, x);
    this.consumeContext(L, (i) => {
      w(this, x, i);
    });
    var n = g.getConfig();
    w(this, v, n.auth);
  }
  async execute() {
    var s;
    const e = (s = f(this, x)) == null ? void 0 : s.open(this, te, {
      data: {
        headline: "Impersonate",
        content: "Do you want to impersonate this user?"
      }
    });
    await (e == null ? void 0 : e.onSubmit().then(async (n) => {
      var i;
      return g.get({
        url: "/umbraco/backoffice/impersonation/v1/impersonate/" + ((i = this.args.unique) == null ? void 0 : i.toString()),
        headers: {
          Authorization: "Bearer " + await f(this, v).call(this)
        }
      }).then(({ response: a }) => {
        a.ok && (window.location.href = n.page ? n.page : "/");
      });
    }).catch(() => {
    }));
  }
}
v = new WeakMap(), x = new WeakMap();
const k = {
  alias: "Umb.Condition.SectionAlias",
  match: "Umb.Section.Members"
}, z = {
  alias: "Umb.Condition.CurrentUser.HasAccessToSensitiveData"
}, ye = {
  type: "entityAction",
  kind: "default",
  alias: "member.entity.action",
  name: "member action",
  weight: 1,
  forEntityTypes: [
    P
  ],
  api: be,
  meta: {
    icon: "icon-operator",
    label: "Impersonate..."
  },
  conditions: [
    k,
    z
  ]
}, we = [ye];
var h, p;
class ge extends V {
  constructor(e) {
    super(e, ve);
    y(this, h);
    y(this, p);
    w(this, h, new G({})), this.rootItems = f(this, h).asObservable();
    var s = g.getConfig();
    w(this, p, s.auth), this.fetch();
  }
  async fetch() {
    const e = await this.fetchRoot();
    for (const s of e)
      s.domains = await this.fetchDomains(s.id);
    f(this, h).setValue(e);
  }
  async fetchDomains(e) {
    const { data: s, error: n } = await g.get({
      url: "/umbraco/management/api/v1/document/" + e + "/domains",
      headers: {
        Authorization: "Bearer " + await f(this, p).call(this)
      }
    });
    if (n)
      console.error("There was a problem with the fetch operation:", n);
    else if (s != null && s.domains)
      return s;
  }
  async fetchRoot() {
    const { data: e, error: s } = await g.get({
      url: "/umbraco/management/api/v1/tree/document/root",
      headers: {
        Authorization: "Bearer " + await f(this, p).call(this)
      }
    });
    if (s)
      console.error("There was a problem with the fetch operation:", s);
    else if (e != null && e.total && e.total > 0)
      return e.items;
    return [];
  }
}
h = new WeakMap(), p = new WeakMap();
const ve = new X(
  "UmbWorkspaceContext",
  "RootContext"
), xe = {
  type: "workspaceContext",
  alias: "Root.Context",
  name: "Root Context",
  api: ge,
  conditions: [
    k,
    z
  ]
}, Ce = [xe];
class Te extends Y {
  constructor(r, e) {
    super(r, e), this.consumeContext(Q, (s) => {
      (s == null ? void 0 : s.getHasAccessToSensitiveData()) && (this.permitted = !0, e.onChange());
    });
  }
}
const Se = {
  type: "condition",
  name: "Sensitive Data Condition",
  alias: "Umb.Condition.CurrentUser.HasAccessToSensitiveData",
  api: Te
}, Ue = [Se], De = [
  ...ee,
  ...we,
  ...Ce,
  ...K,
  ...Ue
];
export {
  ve as R,
  g as c,
  De as m
};
//# sourceMappingURL=bundle.manifests-JPKfTlA7.js.map
