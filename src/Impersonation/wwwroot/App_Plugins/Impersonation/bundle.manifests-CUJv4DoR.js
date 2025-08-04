var B = Object.defineProperty;
var $ = (t) => {
  throw TypeError(t);
};
var W = (t, r, e) => r in t ? B(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var O = (t, r, e) => W(t, typeof r != "symbol" ? r + "" : r, e), S = (t, r, e) => r.has(t) || $("Cannot " + e);
var f = (t, r, e) => (S(t, r, "read from private field"), e ? e.call(t) : r.get(t)), b = (t, r, e) => r.has(t) ? $("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, e), y = (t, r, e, s) => (S(t, r, "write to private field"), s ? s.call(t, e) : r.set(t, e), e);
import { UMB_MEMBER_ENTITY_TYPE as D } from "@umbraco-cms/backoffice/member";
import { UmbEntityActionBase as P } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as H, UMB_MODAL_MANAGER_CONTEXT as L } from "@umbraco-cms/backoffice/modal";
import { UmbContextBase as J } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as V } from "@umbraco-cms/backoffice/context-api";
import { UmbBasicState as G } from "@umbraco-cms/backoffice/observable-api";
const X = [
  {
    name: "Impersonation Entrypoint",
    alias: "Impersonation.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-moxcRhmd.js")
  }
], Y = [
  {
    type: "modal",
    alias: "member.impersonation.modal",
    name: "Member custom modal",
    js: () => import("./modal-element-DjswBof1.js")
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
}, A = ({ allowReserved: t, explode: r, name: e, style: s, value: a }) => {
  if (!r) {
    let o = (t ? a : a.map((l) => encodeURIComponent(l))).join(te(s));
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
  let i = ee(s), n = a.map((o) => s === "label" || s === "simple" ? t ? o : encodeURIComponent(o) : T({ allowReserved: t, name: e, value: o })).join(i);
  return s === "label" || s === "matrix" ? i + n : n;
}, T = ({ allowReserved: t, name: r, value: e }) => {
  if (e == null) return "";
  if (typeof e == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${r}=${t ? e : encodeURIComponent(e)}`;
}, I = ({ allowReserved: t, explode: r, name: e, style: s, value: a }) => {
  if (a instanceof Date) return `${e}=${a.toISOString()}`;
  if (s !== "deepObject" && !r) {
    let o = [];
    Object.entries(a).forEach(([h, m]) => {
      o = [...o, h, t ? m : encodeURIComponent(m)];
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
  let i = re(s), n = Object.entries(a).map(([o, l]) => T({ allowReserved: t, name: s === "deepObject" ? `${e}[${o}]` : o, value: l })).join(i);
  return s === "label" || s === "matrix" ? i + n : n;
}, oe = /\{[^{}]+\}/g, ne = ({ path: t, url: r }) => {
  let e = r, s = r.match(oe);
  if (s) for (let a of s) {
    let i = !1, n = a.substring(1, a.length - 1), o = "simple";
    n.endsWith("*") && (i = !0, n = n.substring(0, n.length - 1)), n.startsWith(".") ? (n = n.substring(1), o = "label") : n.startsWith(";") && (n = n.substring(1), o = "matrix");
    let l = t[n];
    if (l == null) continue;
    if (Array.isArray(l)) {
      e = e.replace(a, A({ explode: i, name: n, style: o, value: l }));
      continue;
    }
    if (typeof l == "object") {
      e = e.replace(a, I({ explode: i, name: n, style: o, value: l }));
      continue;
    }
    if (o === "matrix") {
      e = e.replace(a, `;${T({ name: n, value: l })}`);
      continue;
    }
    let h = encodeURIComponent(o === "label" ? `.${l}` : l);
    e = e.replace(a, h);
  }
  return e;
}, q = ({ allowReserved: t, array: r, object: e } = {}) => (s) => {
  let a = [];
  if (s && typeof s == "object") for (let i in s) {
    let n = s[i];
    if (n != null) if (Array.isArray(n)) {
      let o = A({ allowReserved: t, explode: !0, name: i, style: "form", value: n, ...r });
      o && a.push(o);
    } else if (typeof n == "object") {
      let o = I({ allowReserved: t, explode: !0, name: i, style: "deepObject", value: n, ...e });
      o && a.push(o);
    } else {
      let o = T({ allowReserved: t, name: i, value: n });
      o && a.push(o);
    }
  }
  return a.join("&");
}, se = (t) => {
  var e;
  if (!t) return "stream";
  let r = (e = t.split(";")[0]) == null ? void 0 : e.trim();
  if (r) {
    if (r.startsWith("application/json") || r.endsWith("+json")) return "json";
    if (r === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((s) => r.startsWith(s))) return "blob";
    if (r.startsWith("text/")) return "text";
  }
}, ae = async ({ security: t, ...r }) => {
  for (let e of t) {
    let s = await K(e, r.auth);
    if (!s) continue;
    let a = e.name ?? "Authorization";
    switch (e.in) {
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
}, E = (t) => ie({ baseUrl: t.baseUrl, path: t.path, query: t.query, querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : q(t.querySerializer), url: t.url }), ie = ({ baseUrl: t, path: r, query: e, querySerializer: s, url: a }) => {
  let i = a.startsWith("/") ? a : `/${a}`, n = (t ?? "") + i;
  r && (n = ne({ path: r, url: n }));
  let o = e ? s(e) : "";
  return o.startsWith("?") && (o = o.substring(1)), o && (n += `?${o}`), n;
}, _ = (t, r) => {
  var s;
  let e = { ...t, ...r };
  return (s = e.baseUrl) != null && s.endsWith("/") && (e.baseUrl = e.baseUrl.substring(0, e.baseUrl.length - 1)), e.headers = k(t.headers, r.headers), e;
}, k = (...t) => {
  let r = new Headers();
  for (let e of t) {
    if (!e || typeof e != "object") continue;
    let s = e instanceof Headers ? e.entries() : Object.entries(e);
    for (let [a, i] of s) if (i === null) r.delete(a);
    else if (Array.isArray(i)) for (let n of i) r.append(a, n);
    else i !== void 0 && r.set(a, typeof i == "object" ? JSON.stringify(i) : i);
  }
  return r;
}, U = class {
  constructor() {
    O(this, "_fns");
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
}, le = () => ({ error: new U(), request: new U(), response: new U() }), ce = q({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), ue = { "Content-Type": "application/json" }, M = (t = {}) => ({ ...Z, headers: ue, parseAs: "auto", querySerializer: ce, ...t }), me = (t = {}) => {
  let r = _(M(), t), e = () => ({ ...r }), s = (n) => (r = _(r, n), e()), a = le(), i = async (n) => {
    let o = { ...r, ...n, fetch: n.fetch ?? r.fetch ?? globalThis.fetch, headers: k(r.headers, n.headers) };
    o.security && await ae({ ...o, security: o.security }), o.body && o.bodySerializer && (o.body = o.bodySerializer(o.body)), (o.body === void 0 || o.body === "") && o.headers.delete("Content-Type");
    let l = E(o), h = { redirect: "follow", ...o }, m = new Request(l, h);
    for (let c of a.request._fns) c && (m = await c(m, o));
    let N = o.fetch, u = await N(m);
    for (let c of a.response._fns) c && (u = await c(u, m, o));
    let v = { request: m, response: u };
    if (u.ok) {
      if (u.status === 204 || u.headers.get("Content-Length") === "0") return { data: {}, ...v };
      let c = (o.parseAs === "auto" ? se(u.headers.get("Content-Type")) : o.parseAs) ?? "json";
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
    for (let c of a.error._fns) c && (d = await c(C, u, m, o));
    if (d = d || {}, o.throwOnError) throw d;
    return { error: d, ...v };
  };
  return { buildUrl: E, connect: (n) => i({ ...n, method: "CONNECT" }), delete: (n) => i({ ...n, method: "DELETE" }), get: (n) => i({ ...n, method: "GET" }), getConfig: e, head: (n) => i({ ...n, method: "HEAD" }), interceptors: a, options: (n) => i({ ...n, method: "OPTIONS" }), patch: (n) => i({ ...n, method: "PATCH" }), post: (n) => i({ ...n, method: "POST" }), put: (n) => i({ ...n, method: "PUT" }), request: i, setConfig: s, trace: (n) => i({ ...n, method: "TRACE" }) };
};
const R = me(M({
  baseUrl: "https://localhost:44389"
}));
var w, g;
class fe extends P {
  constructor(e, s) {
    super(e, s);
    b(this, w);
    b(this, g);
    this.consumeContext(L, (i) => {
      y(this, g, i);
    });
    var a = R.getConfig();
    y(this, w, a.auth);
  }
  async execute() {
    var s;
    const e = (s = f(this, g)) == null ? void 0 : s.open(this, F, {
      data: {
        headline: "Impersonate",
        content: "Do you want to impersonate this user?"
      }
    });
    await (e == null ? void 0 : e.onSubmit().then(async (a) => {
      var n;
      console.log(a);
      const i = new URL("/umbraco/backoffice/impersonation/v1/impersonate/" + ((n = this.args.unique) == null ? void 0 : n.toString()));
      return a.page && i.searchParams.set("returnUrl", a.page), R.get({
        url: i.toString(),
        headers: {
          Authorization: "Bearer " + await f(this, w).call(this)
        }
      }).then(({ response: o }) => {
        o.ok;
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
class de extends J {
  constructor(e) {
    super(e, be);
    b(this, p);
    b(this, x);
    y(this, p, new G({})), this.rootItems = f(this, p).asObservable();
    var s = R.getConfig();
    y(this, x, s.auth), this.fetch();
  }
  async fetch() {
    const { data: e, error: s } = await R.get({
      url: "/umbraco/management/api/v1/tree/document/root",
      headers: {
        Authorization: "Bearer " + await f(this, x).call(this)
      }
    });
    s ? console.error("There was a problem with the fetch operation:", s) : e != null && e.total && e.total > 0 && f(this, p).setValue(e.items);
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
}, we = [ye], Ue = [
  ...Q,
  ...he,
  ...we,
  ...X
];
export {
  be as R,
  R as c,
  Ue as m
};
//# sourceMappingURL=bundle.manifests-CUJv4DoR.js.map
