var M = Object.defineProperty;
var E = (e) => {
  throw TypeError(e);
};
var N = (e, r, t) => r in e ? M(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var T = (e, r, t) => N(e, typeof r != "symbol" ? r + "" : r, t), $ = (e, r, t) => r.has(e) || E("Cannot " + t);
var x = (e, r, t) => ($(e, r, "read from private field"), t ? t.call(e) : r.get(e)), j = (e, r, t) => r.has(e) ? E("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), C = (e, r, t, a) => ($(e, r, "write to private field"), a ? a.call(e, t) : r.set(e, t), t);
import { UMB_MEMBER_ENTITY_TYPE as B } from "@umbraco-cms/backoffice/member";
import { UmbEntityActionBase as D } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as W, UMB_MODAL_MANAGER_CONTEXT as H } from "@umbraco-cms/backoffice/modal";
import { UmbContextBase as P } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as G } from "@umbraco-cms/backoffice/context-api";
const J = [
  {
    name: "Impersonation Entrypoint",
    alias: "Impersonation.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-BCKsyUOp.js")
  }
], L = [
  {
    type: "modal",
    alias: "member.impersonation.modal",
    name: "Member custom modal",
    js: () => import("./modal-element-DbEkR0_Z.js")
  }
], V = [...L], F = new W(
  "member.impersonation.modal",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var X = async (e, r) => {
  let t = typeof r == "function" ? await r(e) : r;
  if (t) return e.scheme === "bearer" ? `Bearer ${t}` : e.scheme === "basic" ? `Basic ${btoa(t)}` : t;
}, Y = { bodySerializer: (e) => JSON.stringify(e, (r, t) => typeof t == "bigint" ? t.toString() : t) }, K = (e) => {
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
}, Q = (e) => {
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
}, Z = (e) => {
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
}, O = ({ allowReserved: e, explode: r, name: t, style: a, value: s }) => {
  if (!r) {
    let n = (e ? s : s.map((l) => encodeURIComponent(l))).join(Q(a));
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
  let i = K(a), o = s.map((n) => a === "label" || a === "simple" ? e ? n : encodeURIComponent(n) : g({ allowReserved: e, name: t, value: n })).join(i);
  return a === "label" || a === "matrix" ? i + o : o;
}, g = ({ allowReserved: e, name: r, value: t }) => {
  if (t == null) return "";
  if (typeof t == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${r}=${e ? t : encodeURIComponent(t)}`;
}, U = ({ allowReserved: e, explode: r, name: t, style: a, value: s }) => {
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
  let i = Z(a), o = Object.entries(s).map(([n, l]) => g({ allowReserved: e, name: a === "deepObject" ? `${t}[${n}]` : n, value: l })).join(i);
  return a === "label" || a === "matrix" ? i + o : o;
}, ee = /\{[^{}]+\}/g, te = ({ path: e, url: r }) => {
  let t = r, a = r.match(ee);
  if (a) for (let s of a) {
    let i = !1, o = s.substring(1, s.length - 1), n = "simple";
    o.endsWith("*") && (i = !0, o = o.substring(0, o.length - 1)), o.startsWith(".") ? (o = o.substring(1), n = "label") : o.startsWith(";") && (o = o.substring(1), n = "matrix");
    let l = e[o];
    if (l == null) continue;
    if (Array.isArray(l)) {
      t = t.replace(s, O({ explode: i, name: o, style: n, value: l }));
      continue;
    }
    if (typeof l == "object") {
      t = t.replace(s, U({ explode: i, name: o, style: n, value: l }));
      continue;
    }
    if (n === "matrix") {
      t = t.replace(s, `;${g({ name: o, value: l })}`);
      continue;
    }
    let p = encodeURIComponent(n === "label" ? `.${l}` : l);
    t = t.replace(s, p);
  }
  return t;
}, S = ({ allowReserved: e, array: r, object: t } = {}) => (a) => {
  let s = [];
  if (a && typeof a == "object") for (let i in a) {
    let o = a[i];
    if (o != null) if (Array.isArray(o)) {
      let n = O({ allowReserved: e, explode: !0, name: i, style: "form", value: o, ...r });
      n && s.push(n);
    } else if (typeof o == "object") {
      let n = U({ allowReserved: e, explode: !0, name: i, style: "deepObject", value: o, ...t });
      n && s.push(n);
    } else {
      let n = g({ allowReserved: e, name: i, value: o });
      n && s.push(n);
    }
  }
  return s.join("&");
}, re = (e) => {
  var t;
  if (!e) return "stream";
  let r = (t = e.split(";")[0]) == null ? void 0 : t.trim();
  if (r) {
    if (r.startsWith("application/json") || r.endsWith("+json")) return "json";
    if (r === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((a) => r.startsWith(a))) return "blob";
    if (r.startsWith("text/")) return "text";
  }
}, ne = async ({ security: e, ...r }) => {
  for (let t of e) {
    let a = await X(t, r.auth);
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
}, _ = (e) => oe({ baseUrl: e.baseUrl, path: e.path, query: e.query, querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : S(e.querySerializer), url: e.url }), oe = ({ baseUrl: e, path: r, query: t, querySerializer: a, url: s }) => {
  let i = s.startsWith("/") ? s : `/${s}`, o = (e ?? "") + i;
  r && (o = te({ path: r, url: o }));
  let n = t ? a(t) : "";
  return n.startsWith("?") && (n = n.substring(1)), n && (o += `?${n}`), o;
}, A = (e, r) => {
  var a;
  let t = { ...e, ...r };
  return (a = t.baseUrl) != null && a.endsWith("/") && (t.baseUrl = t.baseUrl.substring(0, t.baseUrl.length - 1)), t.headers = q(e.headers, r.headers), t;
}, q = (...e) => {
  let r = new Headers();
  for (let t of e) {
    if (!t || typeof t != "object") continue;
    let a = t instanceof Headers ? t.entries() : Object.entries(t);
    for (let [s, i] of a) if (i === null) r.delete(s);
    else if (Array.isArray(i)) for (let o of i) r.append(s, o);
    else i !== void 0 && r.set(s, typeof i == "object" ? JSON.stringify(i) : i);
  }
  return r;
}, v = class {
  constructor() {
    T(this, "_fns");
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
}, ae = () => ({ error: new v(), request: new v(), response: new v() }), se = S({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), ie = { "Content-Type": "application/json" }, I = (e = {}) => ({ ...Y, headers: ie, parseAs: "auto", querySerializer: se, ...e }), le = (e = {}) => {
  let r = A(I(), e), t = () => ({ ...r }), a = (o) => (r = A(r, o), t()), s = ae(), i = async (o) => {
    let n = { ...r, ...o, fetch: o.fetch ?? r.fetch ?? globalThis.fetch, headers: q(r.headers, o.headers) };
    n.security && await ne({ ...n, security: n.security }), n.body && n.bodySerializer && (n.body = n.bodySerializer(n.body)), (n.body === void 0 || n.body === "") && n.headers.delete("Content-Type");
    let l = _(n), p = { redirect: "follow", ...n }, m = new Request(l, p);
    for (let c of s.request._fns) c && (m = await c(m, n));
    let z = n.fetch, u = await z(m);
    for (let c of s.response._fns) c && (u = await c(u, m, n));
    let y = { request: m, response: u };
    if (u.ok) {
      if (u.status === 204 || u.headers.get("Content-Length") === "0") return { data: {}, ...y };
      let c = (n.parseAs === "auto" ? re(u.headers.get("Content-Type")) : n.parseAs) ?? "json";
      if (c === "stream") return { data: u.body, ...y };
      let w = await u[c]();
      return c === "json" && (n.responseValidator && await n.responseValidator(w), n.responseTransformer && (w = await n.responseTransformer(w))), { data: w, ...y };
    }
    let b = await u.text();
    try {
      b = JSON.parse(b);
    } catch {
    }
    let f = b;
    for (let c of s.error._fns) c && (f = await c(b, u, m, n));
    if (f = f || {}, n.throwOnError) throw f;
    return { error: f, ...y };
  };
  return { buildUrl: _, connect: (o) => i({ ...o, method: "CONNECT" }), delete: (o) => i({ ...o, method: "DELETE" }), get: (o) => i({ ...o, method: "GET" }), getConfig: t, head: (o) => i({ ...o, method: "HEAD" }), interceptors: s, options: (o) => i({ ...o, method: "OPTIONS" }), patch: (o) => i({ ...o, method: "PATCH" }), post: (o) => i({ ...o, method: "POST" }), put: (o) => i({ ...o, method: "PUT" }), request: i, setConfig: a, trace: (o) => i({ ...o, method: "TRACE" }) };
};
const R = le(I({
  baseUrl: "https://localhost:44389"
}));
var d, h;
class ce extends D {
  constructor(t, a) {
    super(t, a);
    j(this, d);
    j(this, h);
    this.consumeContext(H, (i) => {
      C(this, h, i);
    });
    var s = R.getConfig();
    C(this, d, s.auth);
  }
  async execute() {
    var a;
    const t = (a = x(this, h)) == null ? void 0 : a.open(this, F, {
      data: {
        headline: "Impersonate",
        content: "Do you want to impersonate this user?"
      }
    });
    await (t == null ? void 0 : t.onSubmit().then(async () => {
      var s;
      return R.get({
        url: "/umbraco/backoffice/impersonation/v1/impersonate/" + ((s = this.args.unique) == null ? void 0 : s.toString()),
        headers: {
          Authorization: "Bearer " + await x(this, d).call(this)
        }
      }).then(({ response: i }) => {
        i.ok && (window.location.href = "/");
      });
    }).catch(() => {
    }));
  }
}
d = new WeakMap(), h = new WeakMap();
const k = {
  alias: "Umb.Condition.SectionAlias",
  match: "Umb.Section.Members"
}, ue = {
  type: "entityAction",
  kind: "default",
  alias: "member.entity.action",
  name: "member action",
  weight: 1,
  forEntityTypes: [
    B
  ],
  api: ce,
  meta: {
    icon: "icon-operator",
    label: "Impersonate..."
  },
  conditions: [
    k
  ]
}, me = [ue];
class pe extends P {
  constructor(r) {
    super(r, fe), this.name = "Janik";
  }
  async fetch() {
    console.log("Fetching root node");
    const r = new Headers();
    return r.set("Content-Type", "application/json"), r.set("Accept", "application/json"), r.set("Authorization", "Bearer zGDEnJKpRUbGVo_NHHNGhZVIG4zBDfckh6dFanqHBEk"), R.get({ url: "/umbraco/management/api/v1/tree/document/root", headers: r }).then((a) => {
      console.log(a);
    }).catch(() => {
    });
  }
}
const fe = new G(
  "UmbWorkspaceContext",
  "RootContext"
), de = {
  type: "workspaceContext",
  alias: "Root.Context",
  name: "Root Context",
  api: pe,
  conditions: [
    k
  ]
}, he = [de], Ce = [
  ...V,
  ...me,
  ...he,
  ...J
];
export {
  fe as R,
  R as c,
  Ce as m
};
//# sourceMappingURL=bundle.manifests-CwSL4Bt2.js.map
