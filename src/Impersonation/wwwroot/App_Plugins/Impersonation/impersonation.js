var M = Object.defineProperty;
var g = (e) => {
  throw TypeError(e);
};
var k = (e, r, t) => r in e ? M(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var j = (e, r, t) => k(e, typeof r != "symbol" ? r + "" : r, t), C = (e, r, t) => r.has(e) || g("Cannot " + t);
var v = (e, r, t) => (C(e, r, "read from private field"), t ? t.call(e) : r.get(e)), T = (e, r, t) => r.has(e) ? g("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), R = (e, r, t, s) => (C(e, r, "write to private field"), s ? s.call(e, t) : r.set(e, t), t);
import { UMB_MEMBER_ENTITY_TYPE as N } from "@umbraco-cms/backoffice/member";
import { UmbEntityActionBase as z } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as W, UMB_MODAL_MANAGER_CONTEXT as D } from "@umbraco-cms/backoffice/modal";
import { UmbContextBase as B } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as P } from "@umbraco-cms/backoffice/context-api";
import { tryExecute as H } from "@umbraco-cms/backoffice/resources";
const J = [
  {
    type: "modal",
    alias: "member.impersonation.modal",
    name: "Member custom modal",
    js: () => import("./modal-element-CpF34dsT.js")
  }
], L = [...J], G = new W(
  "member.impersonation.modal",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var d;
class V extends z {
  constructor(t, s) {
    super(t, s);
    T(this, d);
    this.consumeContext(D, (a) => {
      R(this, d, a);
    });
  }
  async execute() {
    var s;
    const t = (s = v(this, d)) == null ? void 0 : s.open(this, G, {
      data: {
        headline: "Impersonate",
        content: "Do you want to impersonate this user?"
      }
    });
    await (t == null ? void 0 : t.onSubmit().then(async () => {
      var o;
      const a = new Headers();
      a.set("Content-Type", "application/json"), a.set("Accept", "application/json");
      const i = new Request("/umbraco/backoffice/impersonation/v1/impersonate/" + ((o = this.args.unique) == null ? void 0 : o.toString()), {
        method: "GET",
        headers: a
      });
      return fetch(i).then((n) => {
        n.ok && (window.location.href = "/");
      });
    }).catch(() => {
    }));
  }
}
d = new WeakMap();
const _ = {
  alias: "Umb.Condition.SectionAlias",
  match: "Umb.Section.Members"
}, X = {
  type: "entityAction",
  kind: "default",
  alias: "member.entity.action",
  name: "member action",
  weight: 1,
  forEntityTypes: [
    N
  ],
  api: V,
  meta: {
    icon: "icon-operator",
    label: "Impersonate..."
  },
  conditions: [
    _
  ]
}, Y = [X];
var Q = async (e, r) => {
  let t = typeof r == "function" ? await r(e) : r;
  if (t) return e.scheme === "bearer" ? `Bearer ${t}` : e.scheme === "basic" ? `Basic ${btoa(t)}` : t;
}, F = { bodySerializer: (e) => JSON.stringify(e, (r, t) => typeof t == "bigint" ? t.toString() : t) }, K = (e) => {
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
}, Z = (e) => {
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
}, ee = (e) => {
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
}, E = ({ allowReserved: e, explode: r, name: t, style: s, value: a }) => {
  if (!r) {
    let n = (e ? a : a.map((l) => encodeURIComponent(l))).join(Z(s));
    switch (s) {
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
  let i = K(s), o = a.map((n) => s === "label" || s === "simple" ? e ? n : encodeURIComponent(n) : w({ allowReserved: e, name: t, value: n })).join(i);
  return s === "label" || s === "matrix" ? i + o : o;
}, w = ({ allowReserved: e, name: r, value: t }) => {
  if (t == null) return "";
  if (typeof t == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${r}=${e ? t : encodeURIComponent(t)}`;
}, S = ({ allowReserved: e, explode: r, name: t, style: s, value: a }) => {
  if (a instanceof Date) return `${t}=${a.toISOString()}`;
  if (s !== "deepObject" && !r) {
    let n = [];
    Object.entries(a).forEach(([p, m]) => {
      n = [...n, p, e ? m : encodeURIComponent(m)];
    });
    let l = n.join(",");
    switch (s) {
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
  let i = ee(s), o = Object.entries(a).map(([n, l]) => w({ allowReserved: e, name: s === "deepObject" ? `${t}[${n}]` : n, value: l })).join(i);
  return s === "label" || s === "matrix" ? i + o : o;
}, te = /\{[^{}]+\}/g, re = ({ path: e, url: r }) => {
  let t = r, s = r.match(te);
  if (s) for (let a of s) {
    let i = !1, o = a.substring(1, a.length - 1), n = "simple";
    o.endsWith("*") && (i = !0, o = o.substring(0, o.length - 1)), o.startsWith(".") ? (o = o.substring(1), n = "label") : o.startsWith(";") && (o = o.substring(1), n = "matrix");
    let l = e[o];
    if (l == null) continue;
    if (Array.isArray(l)) {
      t = t.replace(a, E({ explode: i, name: o, style: n, value: l }));
      continue;
    }
    if (typeof l == "object") {
      t = t.replace(a, S({ explode: i, name: o, style: n, value: l }));
      continue;
    }
    if (n === "matrix") {
      t = t.replace(a, `;${w({ name: o, value: l })}`);
      continue;
    }
    let p = encodeURIComponent(n === "label" ? `.${l}` : l);
    t = t.replace(a, p);
  }
  return t;
}, U = ({ allowReserved: e, array: r, object: t } = {}) => (s) => {
  let a = [];
  if (s && typeof s == "object") for (let i in s) {
    let o = s[i];
    if (o != null) if (Array.isArray(o)) {
      let n = E({ allowReserved: e, explode: !0, name: i, style: "form", value: o, ...r });
      n && a.push(n);
    } else if (typeof o == "object") {
      let n = S({ allowReserved: e, explode: !0, name: i, style: "deepObject", value: o, ...t });
      n && a.push(n);
    } else {
      let n = w({ allowReserved: e, name: i, value: o });
      n && a.push(n);
    }
  }
  return a.join("&");
}, ne = (e) => {
  var t;
  if (!e) return "stream";
  let r = (t = e.split(";")[0]) == null ? void 0 : t.trim();
  if (r) {
    if (r.startsWith("application/json") || r.endsWith("+json")) return "json";
    if (r === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((s) => r.startsWith(s))) return "blob";
    if (r.startsWith("text/")) return "text";
  }
}, oe = async ({ security: e, ...r }) => {
  for (let t of e) {
    let s = await Q(t, r.auth);
    if (!s) continue;
    let a = t.name ?? "Authorization";
    switch (t.in) {
      case "query":
        r.query || (r.query = {}), r.query[a] = s;
        break;
      case "cookie":
        r.headers.append("Cookie", `${a}=${s}`);
        break;
      case "header":
      default:
        r.headers.set(a, s);
        break;
    }
    return;
  }
}, $ = (e) => se({ baseUrl: e.baseUrl, path: e.path, query: e.query, querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : U(e.querySerializer), url: e.url }), se = ({ baseUrl: e, path: r, query: t, querySerializer: s, url: a }) => {
  let i = a.startsWith("/") ? a : `/${a}`, o = (e ?? "") + i;
  r && (o = re({ path: r, url: o }));
  let n = t ? s(t) : "";
  return n.startsWith("?") && (n = n.substring(1)), n && (o += `?${n}`), o;
}, O = (e, r) => {
  var s;
  let t = { ...e, ...r };
  return (s = t.baseUrl) != null && s.endsWith("/") && (t.baseUrl = t.baseUrl.substring(0, t.baseUrl.length - 1)), t.headers = A(e.headers, r.headers), t;
}, A = (...e) => {
  let r = new Headers();
  for (let t of e) {
    if (!t || typeof t != "object") continue;
    let s = t instanceof Headers ? t.entries() : Object.entries(t);
    for (let [a, i] of s) if (i === null) r.delete(a);
    else if (Array.isArray(i)) for (let o of i) r.append(a, o);
    else i !== void 0 && r.set(a, typeof i == "object" ? JSON.stringify(i) : i);
  }
  return r;
}, x = class {
  constructor() {
    j(this, "_fns");
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
}, ae = () => ({ error: new x(), request: new x(), response: new x() }), ie = U({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), le = { "Content-Type": "application/json" }, q = (e = {}) => ({ ...F, headers: le, parseAs: "auto", querySerializer: ie, ...e }), ce = (e = {}) => {
  let r = O(q(), e), t = () => ({ ...r }), s = (o) => (r = O(r, o), t()), a = ae(), i = async (o) => {
    let n = { ...r, ...o, fetch: o.fetch ?? r.fetch ?? globalThis.fetch, headers: A(r.headers, o.headers) };
    n.security && await oe({ ...n, security: n.security }), n.body && n.bodySerializer && (n.body = n.bodySerializer(n.body)), (n.body === void 0 || n.body === "") && n.headers.delete("Content-Type");
    let l = $(n), p = { redirect: "follow", ...n }, m = new Request(l, p);
    for (let c of a.request._fns) c && (m = await c(m, n));
    let I = n.fetch, u = await I(m);
    for (let c of a.response._fns) c && (u = await c(u, m, n));
    let h = { request: m, response: u };
    if (u.ok) {
      if (u.status === 204 || u.headers.get("Content-Length") === "0") return { data: {}, ...h };
      let c = (n.parseAs === "auto" ? ne(u.headers.get("Content-Type")) : n.parseAs) ?? "json";
      if (c === "stream") return { data: u.body, ...h };
      let y = await u[c]();
      return c === "json" && (n.responseValidator && await n.responseValidator(y), n.responseTransformer && (y = await n.responseTransformer(y))), { data: y, ...h };
    }
    let b = await u.text();
    try {
      b = JSON.parse(b);
    } catch {
    }
    let f = b;
    for (let c of a.error._fns) c && (f = await c(b, u, m, n));
    if (f = f || {}, n.throwOnError) throw f;
    return { error: f, ...h };
  };
  return { buildUrl: $, connect: (o) => i({ ...o, method: "CONNECT" }), delete: (o) => i({ ...o, method: "DELETE" }), get: (o) => i({ ...o, method: "GET" }), getConfig: t, head: (o) => i({ ...o, method: "HEAD" }), interceptors: a, options: (o) => i({ ...o, method: "OPTIONS" }), patch: (o) => i({ ...o, method: "PATCH" }), post: (o) => i({ ...o, method: "POST" }), put: (o) => i({ ...o, method: "PUT" }), request: i, setConfig: s, trace: (o) => i({ ...o, method: "TRACE" }) };
};
const ue = ce(q({
  baseUrl: "https://localhost:44389"
}));
class me extends B {
  constructor(r) {
    super(r, pe), this.name = "Janik";
  }
  async fetch() {
    const { data: r, error: t } = await H(ue.get({
      url: "/umbraco/management/api/v1/tree/document/root"
    }));
    t ? console.error("There was a problem with the fetch operation:", t) : console.log(r);
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
    _
  ]
}, de = [fe], Ce = [
  ...de,
  ...L,
  ...Y
];
export {
  Ce as manifests
};
//# sourceMappingURL=impersonation.js.map
