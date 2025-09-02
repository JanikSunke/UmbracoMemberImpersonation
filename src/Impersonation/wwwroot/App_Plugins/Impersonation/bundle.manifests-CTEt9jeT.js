var z = Object.defineProperty;
var j = (r) => {
  throw TypeError(r);
};
var W = (r, e, t) => e in r ? z(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var x = (r, e, t) => W(r, typeof e != "symbol" ? e + "" : e, t), S = (r, e, t) => e.has(r) || j("Cannot " + t);
var D = (r, e, t) => (S(r, e, "read from private field"), t ? t.call(r) : e.get(r)), w = (r, e, t) => e.has(r) ? j("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), C = (r, e, t, a) => (S(r, e, "write to private field"), a ? a.call(r, t) : e.set(r, t), t);
import { UMB_MEMBER_ENTITY_TYPE as H } from "@umbraco-cms/backoffice/member";
import { UmbEntityActionBase as V } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as L, UMB_MODAL_MANAGER_CONTEXT as J } from "@umbraco-cms/backoffice/modal";
import { UmbContextBase as X } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as G } from "@umbraco-cms/backoffice/context-api";
import { UmbBasicState as K } from "@umbraco-cms/backoffice/observable-api";
import { UmbConditionBase as Y } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_CURRENT_USER_CONTEXT as Q } from "@umbraco-cms/backoffice/current-user";
const F = {
  name: "Impersonation Entrypoint",
  alias: "Impersonation.Entrypoint",
  type: "backofficeEntryPoint",
  js: () => import("./entrypoint-eolAW448.js")
}, Z = [F], ee = [
  {
    type: "modal",
    alias: "member.impersonation.modal",
    name: "Member custom modal",
    js: () => import("./modal-element-DfgdmAAT.js")
  }
], te = [...ee], re = new L(
  "member.impersonation.modal",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var ae = async (r, e) => {
  let t = typeof e == "function" ? await e(r) : e;
  if (t) return r.scheme === "bearer" ? `Bearer ${t}` : r.scheme === "basic" ? `Basic ${btoa(t)}` : t;
}, ce = { bodySerializer: (r) => JSON.stringify(r, (e, t) => typeof t == "bigint" ? t.toString() : t) }, ne = (r) => {
  switch (r) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, ue = (r) => {
  switch (r) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, ie = (r) => {
  switch (r) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, E = ({ allowReserved: r, explode: e, name: t, style: a, value: u }) => {
  if (!e) {
    let c = (r ? u : u.map((m) => encodeURIComponent(m))).join(ue(a));
    switch (a) {
      case "label":
        return `.${c}`;
      case "matrix":
        return `;${t}=${c}`;
      case "simple":
        return c;
      default:
        return `${t}=${c}`;
    }
  }
  let s = ne(a), n = u.map((c) => a === "label" || a === "simple" ? r ? c : encodeURIComponent(c) : I({ allowReserved: r, name: t, value: c })).join(s);
  return a === "label" || a === "matrix" ? s + n : n;
}, I = ({ allowReserved: r, name: e, value: t }) => {
  if (t == null) return "";
  if (typeof t == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${e}=${r ? t : encodeURIComponent(t)}`;
}, O = ({ allowReserved: r, explode: e, name: t, style: a, value: u }) => {
  if (u instanceof Date) return `${t}=${u.toISOString()}`;
  if (a !== "deepObject" && !e) {
    let c = [];
    Object.entries(u).forEach(([y, h]) => {
      c = [...c, y, r ? h : encodeURIComponent(h)];
    });
    let m = c.join(",");
    switch (a) {
      case "form":
        return `${t}=${m}`;
      case "label":
        return `.${m}`;
      case "matrix":
        return `;${t}=${m}`;
      default:
        return m;
    }
  }
  let s = ie(a), n = Object.entries(u).map(([c, m]) => I({ allowReserved: r, name: a === "deepObject" ? `${t}[${c}]` : c, value: m })).join(s);
  return a === "label" || a === "matrix" ? s + n : n;
}, se = /\{[^{}]+\}/g, me = ({ path: r, url: e }) => {
  let t = e, a = e.match(se);
  if (a) for (let u of a) {
    let s = !1, n = u.substring(1, u.length - 1), c = "simple";
    n.endsWith("*") && (s = !0, n = n.substring(0, n.length - 1)), n.startsWith(".") ? (n = n.substring(1), c = "label") : n.startsWith(";") && (n = n.substring(1), c = "matrix");
    let m = r[n];
    if (m == null) continue;
    if (Array.isArray(m)) {
      t = t.replace(u, E({ explode: s, name: n, style: c, value: m }));
      continue;
    }
    if (typeof m == "object") {
      t = t.replace(u, O({ explode: s, name: n, style: c, value: m }));
      continue;
    }
    if (c === "matrix") {
      t = t.replace(u, `;${I({ name: n, value: m })}`);
      continue;
    }
    let y = encodeURIComponent(c === "label" ? `.${m}` : m);
    t = t.replace(u, y);
  }
  return t;
}, _ = ({ allowReserved: r, array: e, object: t } = {}) => (a) => {
  let u = [];
  if (a && typeof a == "object") for (let s in a) {
    let n = a[s];
    if (n != null) if (Array.isArray(n)) {
      let c = E({ allowReserved: r, explode: !0, name: s, style: "form", value: n, ...e });
      c && u.push(c);
    } else if (typeof n == "object") {
      let c = O({ allowReserved: r, explode: !0, name: s, style: "deepObject", value: n, ...t });
      c && u.push(c);
    } else {
      let c = I({ allowReserved: r, name: s, value: n });
      c && u.push(c);
    }
  }
  return u.join("&");
}, le = (r) => {
  var t;
  if (!r) return "stream";
  let e = (t = r.split(";")[0]) == null ? void 0 : t.trim();
  if (e) {
    if (e.startsWith("application/json") || e.endsWith("+json")) return "json";
    if (e === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((a) => e.startsWith(a))) return "blob";
    if (e.startsWith("text/")) return "text";
  }
}, de = async ({ security: r, ...e }) => {
  for (let t of r) {
    let a = await ae(t, e.auth);
    if (!a) continue;
    let u = t.name ?? "Authorization";
    switch (t.in) {
      case "query":
        e.query || (e.query = {}), e.query[u] = a;
        break;
      case "cookie":
        e.headers.append("Cookie", `${u}=${a}`);
        break;
      case "header":
      default:
        e.headers.set(u, a);
        break;
    }
    return;
  }
}, A = (r) => he({ baseUrl: r.baseUrl, path: r.path, query: r.query, querySerializer: typeof r.querySerializer == "function" ? r.querySerializer : _(r.querySerializer), url: r.url }), he = ({ baseUrl: r, path: e, query: t, querySerializer: a, url: u }) => {
  let s = u.startsWith("/") ? u : `/${u}`, n = (r ?? "") + s;
  e && (n = me({ path: e, url: n }));
  let c = t ? a(t) : "";
  return c.startsWith("?") && (c = c.substring(1)), c && (n += `?${c}`), n;
}, U = (r, e) => {
  var a;
  let t = { ...r, ...e };
  return (a = t.baseUrl) != null && a.endsWith("/") && (t.baseUrl = t.baseUrl.substring(0, t.baseUrl.length - 1)), t.headers = k(r.headers, e.headers), t;
}, k = (...r) => {
  let e = new Headers();
  for (let t of r) {
    if (!t || typeof t != "object") continue;
    let a = t instanceof Headers ? t.entries() : Object.entries(t);
    for (let [u, s] of a) if (s === null) e.delete(u);
    else if (Array.isArray(s)) for (let n of s) e.append(u, n);
    else s !== void 0 && e.set(u, typeof s == "object" ? JSON.stringify(s) : s);
  }
  return e;
}, T = class {
  constructor() {
    x(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  getInterceptorIndex(r) {
    return typeof r == "number" ? this._fns[r] ? r : -1 : this._fns.indexOf(r);
  }
  exists(r) {
    let e = this.getInterceptorIndex(r);
    return !!this._fns[e];
  }
  eject(r) {
    let e = this.getInterceptorIndex(r);
    this._fns[e] && (this._fns[e] = null);
  }
  update(r, e) {
    let t = this.getInterceptorIndex(r);
    return this._fns[t] ? (this._fns[t] = e, r) : !1;
  }
  use(r) {
    return this._fns = [...this._fns, r], this._fns.length - 1;
  }
}, oe = () => ({ error: new T(), request: new T(), response: new T() }), ye = _({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), be = { "Content-Type": "application/json" }, R = (r = {}) => ({ ...ce, headers: be, parseAs: "auto", querySerializer: ye, ...r }), q = (r = {}) => {
  let e = U(R(), r), t = () => ({ ...e }), a = (n) => (e = U(e, n), t()), u = oe(), s = async (n) => {
    let c = { ...e, ...n, fetch: n.fetch ?? e.fetch ?? globalThis.fetch, headers: k(e.headers, n.headers) };
    c.security && await de({ ...c, security: c.security }), c.body && c.bodySerializer && (c.body = c.bodySerializer(c.body)), (c.body === void 0 || c.body === "") && c.headers.delete("Content-Type");
    let m = A(c), y = { redirect: "follow", ...c }, h = new Request(m, y);
    for (let l of u.request._fns) l && (h = await l(h, c));
    let N = c.fetch, d = await N(h);
    for (let l of u.response._fns) l && (d = await l(d, h, c));
    let f = { request: h, response: d };
    if (d.ok) {
      if (d.status === 204 || d.headers.get("Content-Length") === "0") return { data: {}, ...f };
      let l = (c.parseAs === "auto" ? le(d.headers.get("Content-Type")) : c.parseAs) ?? "json";
      if (l === "stream") return { data: d.body, ...f };
      let v = await d[l]();
      return l === "json" && (c.responseValidator && await c.responseValidator(v), c.responseTransformer && (v = await c.responseTransformer(v))), { data: v, ...f };
    }
    let g = await d.text();
    try {
      g = JSON.parse(g);
    } catch {
    }
    let b = g;
    for (let l of u.error._fns) l && (b = await l(g, d, h, c));
    if (b = b || {}, c.throwOnError) throw b;
    return { error: b, ...f };
  };
  return { buildUrl: A, connect: (n) => s({ ...n, method: "CONNECT" }), delete: (n) => s({ ...n, method: "DELETE" }), get: (n) => s({ ...n, method: "GET" }), getConfig: t, head: (n) => s({ ...n, method: "HEAD" }), interceptors: u, options: (n) => s({ ...n, method: "OPTIONS" }), patch: (n) => s({ ...n, method: "PATCH" }), post: (n) => s({ ...n, method: "POST" }), put: (n) => s({ ...n, method: "PUT" }), request: s, setConfig: a, trace: (n) => s({ ...n, method: "TRACE" }) };
};
const B = q(R({
  baseUrl: "https://localhost:44312"
}));
class pe {
  static impersonation(e) {
    return (e.client ?? B).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/backoffice/impersonation/v1/Impersonation/{memberKey}",
      ...e
    });
  }
  static stopImpersonation(e) {
    return ((e == null ? void 0 : e.client) ?? B).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/backoffice/impersonation/v1/StopImpersonation",
      ...e
    });
  }
}
var p;
class fe extends V {
  constructor(t, a) {
    super(t, a);
    w(this, p);
    this.consumeContext(J, (u) => {
      C(this, p, u);
    });
  }
  async execute() {
    var a;
    const t = (a = D(this, p)) == null ? void 0 : a.open(this, re, {
      data: {
        headline: "Impersonate",
        content: "Do you want to impersonate this user?"
      }
    });
    await (t == null ? void 0 : t.onSubmit().then(async (u) => {
      var s;
      return pe.impersonation({
        path: { memberKey: ((s = this.args.unique) == null ? void 0 : s.toString()) ?? "" }
      }).then(({ response: n }) => {
        n.ok && (window.location.href = u.page ? u.page : "/");
      }).catch(() => {
      });
    }));
  }
}
p = new WeakMap();
const M = {
  alias: "Umb.Condition.SectionAlias",
  match: "Umb.Section.Members"
}, P = {
  alias: "Umb.Condition.CurrentUser.HasAccessToSensitiveData"
}, ge = {
  type: "entityAction",
  kind: "default",
  alias: "member.entity.action",
  name: "member action",
  weight: 1,
  forEntityTypes: [
    H
  ],
  api: fe,
  meta: {
    icon: "icon-operator",
    label: "Impersonate..."
  },
  conditions: [
    M,
    P
  ]
}, ve = [ge], i = q(R({
  baseUrl: "https://localhost:44312"
}));
class $ {
  static getCollectionDocumentById(e) {
    return (e.client ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/collection/document/{id}",
      ...e
    });
  }
  static postDocument(e) {
    return ((e == null ? void 0 : e.client) ?? i).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static deleteDocumentById(e) {
    return (e.client ?? i).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}",
      ...e
    });
  }
  static getDocumentById(e) {
    return (e.client ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}",
      ...e
    });
  }
  static putDocumentById(e) {
    return (e.client ?? i).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getDocumentByIdAuditLog(e) {
    return (e.client ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/audit-log",
      ...e
    });
  }
  static postDocumentByIdCopy(e) {
    return (e.client ?? i).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/copy",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getDocumentByIdDomains(e) {
    return (e.client ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/domains",
      ...e
    });
  }
  static putDocumentByIdDomains(e) {
    return (e.client ?? i).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/domains",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static putDocumentByIdMove(e) {
    return (e.client ?? i).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/move",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static putDocumentByIdMoveToRecycleBin(e) {
    return (e.client ?? i).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/move-to-recycle-bin",
      ...e
    });
  }
  static getDocumentByIdNotifications(e) {
    return (e.client ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/notifications",
      ...e
    });
  }
  static putDocumentByIdNotifications(e) {
    return (e.client ?? i).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/notifications",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static deleteDocumentByIdPublicAccess(e) {
    return (e.client ?? i).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/public-access",
      ...e
    });
  }
  static getDocumentByIdPublicAccess(e) {
    return (e.client ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/public-access",
      ...e
    });
  }
  static postDocumentByIdPublicAccess(e) {
    return (e.client ?? i).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/public-access",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static putDocumentByIdPublicAccess(e) {
    return (e.client ?? i).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/public-access",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static putDocumentByIdPublish(e) {
    return (e.client ?? i).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/publish",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static putDocumentByIdPublishWithDescendants(e) {
    return (e.client ?? i).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/publish-with-descendants",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getDocumentByIdPublishWithDescendantsResultByTaskId(e) {
    return (e.client ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/publish-with-descendants/result/{taskId}",
      ...e
    });
  }
  static getDocumentByIdPublished(e) {
    return (e.client ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/published",
      ...e
    });
  }
  static getDocumentByIdReferencedBy(e) {
    return (e.client ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/referenced-by",
      ...e
    });
  }
  static getDocumentByIdReferencedDescendants(e) {
    return (e.client ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/referenced-descendants",
      ...e
    });
  }
  static putDocumentByIdUnpublish(e) {
    return (e.client ?? i).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/unpublish",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static putUmbracoManagementApiV11DocumentByIdValidate11(e) {
    return (e.client ?? i).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1.1/document/{id}/validate",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getDocumentAreReferenced(e) {
    return ((e == null ? void 0 : e.client) ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/are-referenced",
      ...e
    });
  }
  static getDocumentConfiguration(e) {
    return ((e == null ? void 0 : e.client) ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/configuration",
      ...e
    });
  }
  static putDocumentSort(e) {
    return ((e == null ? void 0 : e.client) ?? i).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/sort",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getDocumentUrls(e) {
    return ((e == null ? void 0 : e.client) ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/urls",
      ...e
    });
  }
  static postDocumentValidate(e) {
    return ((e == null ? void 0 : e.client) ?? i).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/validate",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getItemDocument(e) {
    return ((e == null ? void 0 : e.client) ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/document",
      ...e
    });
  }
  static getItemDocumentSearch(e) {
    return ((e == null ? void 0 : e.client) ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/document/search",
      ...e
    });
  }
  static deleteRecycleBinDocument(e) {
    return ((e == null ? void 0 : e.client) ?? i).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document",
      ...e
    });
  }
  static deleteRecycleBinDocumentById(e) {
    return (e.client ?? i).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/{id}",
      ...e
    });
  }
  static getRecycleBinDocumentByIdOriginalParent(e) {
    return (e.client ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/{id}/original-parent",
      ...e
    });
  }
  static putRecycleBinDocumentByIdRestore(e) {
    return (e.client ?? i).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/{id}/restore",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getRecycleBinDocumentChildren(e) {
    return ((e == null ? void 0 : e.client) ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/children",
      ...e
    });
  }
  static getRecycleBinDocumentReferencedBy(e) {
    return ((e == null ? void 0 : e.client) ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/referenced-by",
      ...e
    });
  }
  static getRecycleBinDocumentRoot(e) {
    return ((e == null ? void 0 : e.client) ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/root",
      ...e
    });
  }
  static getTreeDocumentAncestors(e) {
    return ((e == null ? void 0 : e.client) ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document/ancestors",
      ...e
    });
  }
  static getTreeDocumentChildren(e) {
    return ((e == null ? void 0 : e.client) ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document/children",
      ...e
    });
  }
  static getTreeDocumentRoot(e) {
    return ((e == null ? void 0 : e.client) ?? i).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document/root",
      ...e
    });
  }
}
var o;
class De extends X {
  constructor(t) {
    super(t, Ie);
    w(this, o);
    C(this, o, new K({})), this.rootItems = D(this, o).asObservable();
    const a = B.getConfig();
    this.token = a.auth, this.fetch();
  }
  async fetch() {
    const t = await this.fetchRoot();
    for (const a of t)
      a.domains = await this.fetchDomains(a.id);
    D(this, o).setValue(t);
  }
  async fetchDomains(t) {
    const { response: a, data: u, error: s } = await $.getDocumentByIdDomains({
      path: {
        id: t
      },
      headers: {
        Authorization: "Bearer " + await this.token()
      }
    });
    if (a.ok) {
      if (u != null && u.domains)
        return u;
    } else
      console.error("There was a problem with the fetch operation:", s);
  }
  async fetchRoot() {
    const { response: t, data: a, error: u } = await $.getTreeDocumentRoot({
      headers: {
        Authorization: "Bearer " + await this.token()
      }
    });
    if (t.ok) {
      if (a != null && a.total && a.total > 0)
        return a.items;
    } else
      console.error("There was a problem with the fetch operation:", u);
    return [];
  }
}
o = new WeakMap();
const Ie = new G(
  "UmbWorkspaceContext",
  "RootContext"
), we = {
  type: "workspaceContext",
  alias: "Root.Context",
  name: "Root Context",
  api: De,
  conditions: [
    M,
    P
  ]
}, Ce = [we];
class Te extends Y {
  constructor(e, t) {
    super(e, t), this.consumeContext(Q, (a) => {
      (a == null ? void 0 : a.getHasAccessToSensitiveData()) && (this.permitted = !0, t.onChange());
    });
  }
}
const Be = {
  type: "condition",
  name: "Sensitive Data Condition",
  alias: "Umb.Condition.CurrentUser.HasAccessToSensitiveData",
  api: Te
}, Re = [Be], ke = [
  ...te,
  ...ve,
  ...Ce,
  ...Z,
  ...Re
];
export {
  Ie as R,
  B as c,
  ke as m
};
//# sourceMappingURL=bundle.manifests-CTEt9jeT.js.map
