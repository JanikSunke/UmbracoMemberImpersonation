var c = (t) => {
  throw TypeError(t);
};
var p = (t, o, e) => o.has(t) || c("Cannot " + e);
var u = (t, o, e) => (p(t, o, "read from private field"), e ? e.call(t) : o.get(t)), d = (t, o, e) => o.has(t) ? c("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(t) : o.set(t, e), h = (t, o, e, n) => (p(t, o, "write to private field"), n ? n.call(t, e) : o.set(t, e), e);
import { UMB_MEMBER_ENTITY_TYPE as M } from "@umbraco-cms/backoffice/member";
import { UmbEntityActionBase as f } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as A, UMB_MODAL_MANAGER_CONTEXT as T } from "@umbraco-cms/backoffice/modal";
import { UMB_AUTH_CONTEXT as y } from "@umbraco-cms/backoffice/auth";
const E = [
  {
    type: "modal",
    alias: "member.custom.modal",
    name: "Member custom modal",
    js: () => import("./modal-element-CpF34dsT.js")
  }
], _ = [...E], k = new A(
  "member.custom.modal",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var s;
class w extends f {
  constructor(e, n) {
    super(e, n);
    d(this, s);
    this.consumeContext(T, (i) => {
      h(this, s, i);
    }), this.consumeContext(y, (i) => {
      const m = i.getOpenApiConfiguration();
      this.OpenAPIToken = m.token;
    });
  }
  async execute() {
    var n;
    const e = (n = u(this, s)) == null ? void 0 : n.open(this, k, {
      data: {
        headline: "Impersonate",
        content: "Do you want to impersonate this user?"
      }
    });
    await (e == null ? void 0 : e.onSubmit().then(async () => {
      var r;
      const i = this.OpenAPIToken, m = await i(), a = new Headers();
      a.set("Content-Type", "application/json"), a.set("Accept", "application/json"), a.set("Authorization", "Bearer " + m);
      const l = new Request("/umbraco/backoffice/impersonation/v1/impersonate/" + ((r = this.args.unique) == null ? void 0 : r.toString()), {
        method: "GET",
        headers: a
      });
      return fetch(l).then((b) => {
        b.ok && (window.location.href = "/");
      });
    }).catch(() => {
    }));
  }
}
s = new WeakMap();
const C = {
  type: "entityAction",
  kind: "default",
  alias: "member.entity.action",
  name: "member action",
  weight: -1,
  forEntityTypes: [
    M
  ],
  api: w,
  meta: {
    icon: "icon-operator",
    label: "Impersonate Member"
  },
  conditions: [{
    alias: "Umb.Condition.SectionAlias",
    match: "Umb.Section.Members"
  }]
}, O = [C], S = [
  ..._,
  ...O
];
export {
  S as manifests
};
//# sourceMappingURL=package-starter.js.map
