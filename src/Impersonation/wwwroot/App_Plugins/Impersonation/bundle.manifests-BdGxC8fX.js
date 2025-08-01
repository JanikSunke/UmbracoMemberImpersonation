var z = Object.defineProperty;
var j = (e) => {
  throw TypeError(e);
};
var M = (e, r, t) => r in e ? z(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var v = (e, r, t) => M(e, typeof r != "symbol" ? r + "" : r, t), C = (e, r, t) => r.has(e) || j("Cannot " + t);
var R = (e, r, t) => (C(e, r, "read from private field"), t ? t.call(e) : r.get(e)), E = (e, r, t) => r.has(e) ? j("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), T = (e, r, t, a) => (C(e, r, "write to private field"), a ? a.call(e, t) : r.set(e, t), t);
import { UMB_MEMBER_ENTITY_TYPE as N } from "@umbraco-cms/backoffice/member";
import { UmbEntityActionBase as B } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as D, UMB_MODAL_MANAGER_CONTEXT as W } from "@umbraco-cms/backoffice/modal";
import { UmbContextBase as H } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as P } from "@umbraco-cms/backoffice/context-api";
const G = [
  {
    name: "Impersonation Entrypoint",
    alias: "Impersonation.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-_1PbN7RZ.js")
  }
], J = [
  {
    type: "modal",
    alias: "member.impersonation.modal",
    name: "Member custom modal",
    js: () => import("./modal-element-CJ7AlfC7.js")
  }
], L = [...J], V = new D(
  "member.impersonation.modal",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var F = async (e, r) => {
  let t = typeof r == "function" ? await r(e) : r;
  if (t) return e.scheme === "bearer" ? `Bearer ${t}` : e.scheme === "basic" ? `Basic ${btoa(t)}` : t;
}, X = { bodySerializer: (e) => JSON.stringify(e, (r, t) => typeof t == "bigint" ? t.toString() : t) }, Y = (e) => {
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
}, K = (e) => {
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
}, Q = (e) => {
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
}, A = ({ allowReserved: e, explode: r, name: t, style: a, value: s }) => {
  if (!r) {
    let n = (e ? s : s.map((l) => encodeURIComponent(l))).join(K(a));
    switch (a) {
      case "label":
        return `.${n}`;
      case "matrix":
        return `;${t}=${n}`;
      case "simple":
        return n;
      default:
        return `${t}=${n}`;
    }
  }
  let i = Y(a), o = s.map((n) => a === "label" || a === "simple" ? e ? n : encodeURIComponent(n) : w({ allowReserved: e, name: t, value: n })).join(i);
  return a === "label" || a === "matrix" ? i + o : o;
}, w = ({ allowReserved: e, name: r, value: t }) => {
  if (t == null) return "";
  if (typeof t == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${r}=${e ? t : encodeURIComponent(t)}`;
}, O = ({ allowReserved: e, explode: r, name: t, style: a, value: s }) => {
  if (s instanceof Date) return `${t}=${s.toISOString()}`;
  if (a !== "deepObject" && !r) {
    let n = [];
    Object.entries(s).forEach(([p, m]) => {
      n = [...n, p, e ? m : encodeURIComponent(m)];
    });
    let l = n.join(",");
    switch (a) {
      case "form":
        return `${t}=${l}`;
      case "label":
        return `.${l}`;
      case "matrix":
        return `;${t}=${l}`;
      default:
        return l;
    }
  }
  let i = Q(a), o = Object.entries(s).map(([n, l]) => w({ allowReserved: e, name: a === "deepObject" ? `${t}[${n}]` : n, value: l })).join(i);
  return a === "label" || a === "matrix" ? i + o : o;
}, Z = /\{[^{}]+\}/g, ee = ({ path: e, url: r }) => {
  let t = r, a = r.match(Z);
  if (a) for (let s of a) {
    let i = !1, o = s.substring(1, s.length - 1), n = "simple";
    o.endsWith("*") && (i = !0, o = o.substring(0, o.length - 1)), o.startsWith(".") ? (o = o.substring(1), n = "label") : o.startsWith(";") && (o = o.substring(1), n = "matrix");
    let l = e[o];
    if (l == null) continue;
    if (Array.isArray(l)) {
      t = t.replace(s, A({ explode: i, name: o, style: n, value: l }));
      continue;
    }
    if (typeof l == "object") {
      t = t.replace(s, O({ explode: i, name: o, style: n, value: l }));
      continue;
    }
    if (n === "matrix") {
      t = t.replace(s, `;${w({ name: o, value: l })}`);
      continue;
    }
    let p = encodeURIComponent(n === "label" ? `.${l}` : l);
    t = t.replace(s, p);
  }
  return t;
}, U = ({ allowReserved: e, array: r, object: t } = {}) => (a) => {
  let s = [];
  if (a && typeof a == "object") for (let i in a) {
    let o = a[i];
    if (o != null) if (Array.isArray(o)) {
      let n = A({ allowReserved: e, explode: !0, name: i, style: "form", value: o, ...r });
      n && s.push(n);
    } else if (typeof o == "object") {
      let n = O({ allowReserved: e, explode: !0, name: i, style: "deepObject", value: o, ...t });
      n && s.push(n);
    } else {
      let n = w({ allowReserved: e, name: i, value: o });
      n && s.push(n);
    }
  }
  return s.join("&");
}, te = (e) => {
  var t;
  if (!e) return "stream";
  let r = (t = e.split(";")[0]) == null ? void 0 : t.trim();
  if (r) {
    if (r.startsWith("application/json") || r.endsWith("+json")) return "json";
    if (r === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((a) => r.startsWith(a))) return "blob";
    if (r.startsWith("text/")) return "text";
  }
}, re = async ({ security: e, ...r }) => {
  for (let t of e) {
    let a = await F(t, r.auth);
    if (!a) continue;
    let s = t.name ?? "Authorization";
    switch (t.in) {
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
}, $ = (e) => ne({ baseUrl: e.baseUrl, path: e.path, query: e.query, querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : U(e.querySerializer), url: e.url }), ne = ({ baseUrl: e, path: r, query: t, querySerializer: a, url: s }) => {
  let i = s.startsWith("/") ? s : `/${s}`, o = (e ?? "") + i;
  r && (o = ee({ path: r, url: o }));
  let n = t ? a(t) : "";
  return n.startsWith("?") && (n = n.substring(1)), n && (o += `?${n}`), o;
}, _ = (e, r) => {
  var a;
  let t = { ...e, ...r };
  return (a = t.baseUrl) != null && a.endsWith("/") && (t.baseUrl = t.baseUrl.substring(0, t.baseUrl.length - 1)), t.headers = S(e.headers, r.headers), t;
}, S = (...e) => {
  let r = new Headers();
  for (let t of e) {
    if (!t || typeof t != "object") continue;
    let a = t instanceof Headers ? t.entries() : Object.entries(t);
    for (let [s, i] of a) if (i === null) r.delete(s);
    else if (Array.isArray(i)) for (let o of i) r.append(s, o);
    else i !== void 0 && r.set(s, typeof i == "object" ? JSON.stringify(i) : i);
  }
  return r;
}, g = class {
  constructor() {
    v(this, "_fns");
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
}, oe = () => ({ error: new g(), request: new g(), response: new g() }), ae = U({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), se = { "Content-Type": "application/json" }, q = (e = {}) => ({ ...X, headers: se, parseAs: "auto", querySerializer: ae, ...e }), ie = (e = {}) => {
  let r = _(q(), e), t = () => ({ ...r }), a = (o) => (r = _(r, o), t()), s = oe(), i = async (o) => {
    let n = { ...r, ...o, fetch: o.fetch ?? r.fetch ?? globalThis.fetch, headers: S(r.headers, o.headers) };
    n.security && await re({ ...n, security: n.security }), n.body && n.bodySerializer && (n.body = n.bodySerializer(n.body)), (n.body === void 0 || n.body === "") && n.headers.delete("Content-Type");
    let l = $(n), p = { redirect: "follow", ...n }, m = new Request(l, p);
    for (let c of s.request._fns) c && (m = await c(m, n));
    let k = n.fetch, u = await k(m);
    for (let c of s.response._fns) c && (u = await c(u, m, n));
    let h = { request: m, response: u };
    if (u.ok) {
      if (u.status === 204 || u.headers.get("Content-Length") === "0") return { data: {}, ...h };
      let c = (n.parseAs === "auto" ? te(u.headers.get("Content-Type")) : n.parseAs) ?? "json";
      if (c === "stream") return { data: u.body, ...h };
      let b = await u[c]();
      return c === "json" && (n.responseValidator && await n.responseValidator(b), n.responseTransformer && (b = await n.responseTransformer(b))), { data: b, ...h };
    }
    let y = await u.text();
    try {
      y = JSON.parse(y);
    } catch {
    }
    let f = y;
    for (let c of s.error._fns) c && (f = await c(y, u, m, n));
    if (f = f || {}, n.throwOnError) throw f;
    return { error: f, ...h };
  };
  return { buildUrl: $, connect: (o) => i({ ...o, method: "CONNECT" }), delete: (o) => i({ ...o, method: "DELETE" }), get: (o) => i({ ...o, method: "GET" }), getConfig: t, head: (o) => i({ ...o, method: "HEAD" }), interceptors: s, options: (o) => i({ ...o, method: "OPTIONS" }), patch: (o) => i({ ...o, method: "PATCH" }), post: (o) => i({ ...o, method: "POST" }), put: (o) => i({ ...o, method: "PUT" }), request: i, setConfig: a, trace: (o) => i({ ...o, method: "TRACE" }) };
};
const x = ie(q({
  baseUrl: "https://localhost:44389"
}));
var d;
class le extends B {
  constructor(t, a) {
    super(t, a);
    E(this, d);
    this.consumeContext(W, (s) => {
      T(this, d, s);
    });
  }
  async execute() {
    var a;
    const t = (a = R(this, d)) == null ? void 0 : a.open(this, V, {
      data: {
        headline: "Impersonate",
        content: "Do you want to impersonate this user?"
      }
    });
    await (t == null ? void 0 : t.onSubmit().then(async () => {
      var o;
      var s = x.getConfig(), i = s.auth;
      return x.get({
        url: "/umbraco/backoffice/impersonation/v1/impersonate/" + ((o = this.args.unique) == null ? void 0 : o.toString()),
        headers: {
          Authorization: "Bearer " + await i()
        }
      }).then(({ response: n }) => {
        n.ok && (window.location.href = "/");
      });
    }).catch(() => {
    }));
  }
}
d = new WeakMap();
const I = {
  alias: "Umb.Condition.SectionAlias",
  match: "Umb.Section.Members"
}, ce = {
  type: "entityAction",
  kind: "default",
  alias: "member.entity.action",
  name: "member action",
  weight: 1,
  forEntityTypes: [
    N
  ],
  api: le,
  meta: {
    icon: "icon-operator",
    label: "Impersonate..."
  },
  conditions: [
    I
  ]
}, ue = [ce];
class me extends H {
  constructor(r) {
    super(r, pe), this.name = "Janik";
  }
  async fetch() {
    console.log("Fetching root node");
    const r = new Headers();
    return r.set("Content-Type", "application/json"), r.set("Accept", "application/json"), r.set("Authorization", "Bearer zGDEnJKpRUbGVo_NHHNGhZVIG4zBDfckh6dFanqHBEk"), x.get({ url: "/umbraco/management/api/v1/tree/document/root", headers: r }).then((a) => {
      console.log(a);
    }).catch(() => {
    });
  }
}
const pe = new P(
  "UmbWorkspaceContext",
  "RootContext"
), fe = {
  type: "workspaceContext",
  alias: "Root.Context",
  name: "Root Context",
  api: me,
  conditions: [
    I
  ]
}, de = [fe], je = [
  ...L,
  ...ue,
  ...de,
  ...G
];
export {
  pe as R,
  x as c,
  je as m
};
//# sourceMappingURL=bundle.manifests-BdGxC8fX.js.map
