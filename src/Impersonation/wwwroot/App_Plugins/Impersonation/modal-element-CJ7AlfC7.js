import { html as C, state as f, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as x } from "@umbraco-cms/backoffice/modal";
import { R as M } from "./bundle.manifests-BdGxC8fX.js";
var y = Object.defineProperty, E = Object.getOwnPropertyDescriptor, h = (t) => {
  throw TypeError(t);
}, p = (t, e, a, n) => {
  for (var o = n > 1 ? void 0 : n ? E(e, a) : e, l = t.length - 1, c; l >= 0; l--)
    (c = t[l]) && (o = (n ? c(e, a, o) : c(o)) || o);
  return n && o && y(e, a, o), o;
}, u = (t, e, a) => e.has(t) || h("Cannot " + a), O = (t, e, a) => (u(t, e, "read from private field"), a ? a.call(t) : e.get(t)), d = (t, e, a) => e.has(t) ? h("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), w = (t, e, a, n) => (u(t, e, "write to private field"), e.set(t, a), a), m = (t, e, a) => (u(t, e, "access private method"), a), r, i, _, v;
let s = class extends x {
  constructor() {
    super(), d(this, i), this.content = "", d(this, r), this.consumeContext(M, (t) => {
      w(this, r, t);
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    var t, e, a;
    return C`
      <umb-body-layout headline=${((t = this.data) == null ? void 0 : t.headline) ?? "Custom dialog"}>
        <uui-box>
          <h3>${(e = O(this, r)) == null ? void 0 : e.name}</h3>
          <h3>${(a = this.data) == null ? void 0 : a.content}</h3>
        </uui-box>
        <uui-box>
          <uui-button
            id="submit"
            color='positive'
            look="primary"
            label="Impersonate"
            @click=${m(this, i, _)}></uui-button>
        </uui-box>
        <div slot="actions">
          <uui-button id="cancel" label="Cancel" @click="${m(this, i, v)}">Cancel</uui-button>
        </div>
      </umb-body-layout>
    `;
  }
};
r = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
_ = function() {
  var t;
  (t = this.modalContext) == null || t.submit();
};
v = function() {
  var t;
  (t = this.modalContext) == null || t.reject();
};
p([
  f()
], s.prototype, "content", 2);
s = p([
  b("member-custom-modal")
], s);
const T = s;
export {
  s as MemberCustomModalElement,
  T as default
};
//# sourceMappingURL=modal-element-CJ7AlfC7.js.map
