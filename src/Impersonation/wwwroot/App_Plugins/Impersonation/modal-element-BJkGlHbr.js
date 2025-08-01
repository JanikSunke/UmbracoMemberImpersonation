import { html as f, state as p, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as x } from "@umbraco-cms/backoffice/modal";
import { R as y } from "./bundle.manifests-BRT5nLAM.js";
var M = Object.defineProperty, E = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, c = (t, e, o, s) => {
  for (var a = s > 1 ? void 0 : s ? E(e, o) : e, l = t.length - 1, u; l >= 0; l--)
    (u = t[l]) && (a = (s ? u(e, o, a) : u(a)) || a);
  return s && a && M(e, o, a), a;
}, d = (t, e, o) => e.has(t) || v("Cannot " + o), O = (t, e, o) => (d(t, e, "read from private field"), o ? o.call(t) : e.get(t)), m = (t, e, o) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), w = (t, e, o, s) => (d(t, e, "write to private field"), e.set(t, o), o), h = (t, e, o) => (d(t, e, "access private method"), o), n, r, _, b;
let i = class extends x {
  constructor() {
    super(), m(this, r), this.content = "", m(this, n), this.rootItems = [], this.consumeContext(y, (t) => {
      w(this, n, t), this.observe(O(this, n).rootItems, (e) => {
        this.rootItems = e;
      });
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    var e, o;
    const t = this.rootItems.map((s) => {
      var a;
      return { name: (a = s.variants[0]) == null ? void 0 : a.name, value: s.id, selected: !1 };
    });
    return t[0] != null && (t[0].selected = !0), f`
      <umb-body-layout headline=${((e = this.data) == null ? void 0 : e.headline) ?? "Custom dialog"}>
        <uui-box>
          <h3>${(o = this.data) == null ? void 0 : o.content}</h3>
        </uui-box>
        <uui-box>
          <uui-select
            label="Select destination"
            .options=${t}>
          </uui-select>
        </uui-box>
        <uui-box>
          <uui-button
            id="submit"
            color='positive'
            look="primary"
            label="Impersonate"
            @click=${h(this, r, _)}></uui-button>
        </uui-box>
        <div slot="actions">
          <uui-button id="cancel" label="Cancel" @click="${h(this, r, b)}">Cancel</uui-button>
        </div>
      </umb-body-layout>
    `;
  }
};
n = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
_ = function() {
  var t;
  (t = this.modalContext) == null || t.submit();
};
b = function() {
  var t;
  (t = this.modalContext) == null || t.reject();
};
c([
  p()
], i.prototype, "content", 2);
c([
  p()
], i.prototype, "rootItems", 2);
i = c([
  C("member-custom-modal")
], i);
const P = i;
export {
  i as MemberCustomModalElement,
  P as default
};
//# sourceMappingURL=modal-element-BJkGlHbr.js.map
