var m = (t) => {
  throw TypeError(t);
};
var r = (t, n, e) => n.has(t) || m("Cannot " + e);
var c = (t, n, e) => (r(t, n, "read from private field"), e ? e.call(t) : n.get(t)), p = (t, n, e) => n.has(t) ? m("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e), l = (t, n, e, o) => (r(t, n, "write to private field"), o ? o.call(t, e) : n.set(t, e), e);
import { UMB_MEMBER_ENTITY_TYPE as b } from "@umbraco-cms/backoffice/member";
import { UmbEntityActionBase as h } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as M, UMB_MODAL_MANAGER_CONTEXT as y } from "@umbraco-cms/backoffice/modal";
const E = [
  {
    name: "Package Starter Entrypoint",
    alias: "PackageStarter.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-CPJS93LN.js")
  }
], f = [
  {
    type: "modal",
    alias: "member.custom.modal",
    name: "Member custom modal",
    js: () => import("./modal-element-CVqLp9Lw.js")
  }
], g = [...f], T = new M(
  "member.custom.modal",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var a;
class A extends h {
  constructor(e, o) {
    super(e, o);
    p(this, a);
    this.consumeContext(y, (s) => {
      l(this, a, s);
    });
  }
  async execute() {
    var o;
    console.log("ImpersonateMember.execute", this.args);
    const e = (o = c(this, a)) == null ? void 0 : o.open(this, T, {
      data: {
        headline: "Impersonate",
        content: "Do you want to impersonate this user?" + this.args.unique
      }
    });
    await (e == null ? void 0 : e.onSubmit().then(() => {
      var i;
      const s = new Headers();
      s.set("Content-Type", "application/json"), s.set("Accept", "application/json");
      const d = new Request("/sendvalidation/" + ((i = this.args.unique) == null ? void 0 : i.toString()), {
        method: "GET",
        headers: s
      });
      return fetch(d).then((u) => {
        console.log("got response:", u);
      });
    }).catch(() => {
    }));
  }
}
a = new WeakMap();
const _ = {
  type: "entityAction",
  kind: "default",
  alias: "member.entity.action",
  name: "member action",
  weight: -1,
  forEntityTypes: [
    b
  ],
  api: A,
  meta: {
    icon: "icon-operator",
    label: "Impersonate Member"
  },
  conditions: [{
    alias: "Umb.Condition.SectionAlias",
    match: "Umb.Section.Members"
  }]
}, S = [_], k = [
  ...E,
  ...g,
  ...S
];
export {
  k as manifests
};
//# sourceMappingURL=package-starter.js.map
