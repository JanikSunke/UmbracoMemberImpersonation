import { html as b, state as p, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as y } from "@umbraco-cms/backoffice/modal";
import { R as M } from "./bundle.manifests-CUJv4DoR.js";
var E = Object.defineProperty, O = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, d = (t, e, o, a) => {
  for (var s = a > 1 ? void 0 : a ? O(e, o) : e, l = t.length - 1, c; l >= 0; l--)
    (c = t[l]) && (s = (a ? c(e, o, s) : c(s)) || s);
  return a && s && E(e, o, s), s;
}, h = (t, e, o) => e.has(t) || v("Cannot " + o), $ = (t, e, o) => (h(t, e, "read from private field"), o ? o.call(t) : e.get(t)), m = (t, e, o) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), w = (t, e, o, a) => (h(t, e, "write to private field"), e.set(t, o), o), u = (t, e, o) => (h(t, e, "access private method"), o), r, i, _, f, C;
let n = class extends y {
  constructor() {
    super(), m(this, i), this.content = "", this.selected = "", m(this, r), this.rootItems = [], this.consumeContext(M, (t) => {
      w(this, r, t), this.observe($(this, r).rootItems, (e) => {
        var o;
        this.rootItems = e, this.selected = ((o = e[0]) == null ? void 0 : o.id) ?? "";
      });
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    var e, o;
    const t = this.rootItems.map((a) => {
      var s;
      return { name: (s = a.variants[0]) == null ? void 0 : s.name, value: a.id, selected: !1 };
    });
    return t[0] != null && (t[0].selected = !0), b`
      <umb-body-layout headline=${((e = this.data) == null ? void 0 : e.headline) ?? "Custom dialog"}>
        <uui-box>
          <h3>${(o = this.data) == null ? void 0 : o.content}</h3>
        </uui-box>
        <uui-box>
          <uui-select
            @change=${u(this, i, _)}
            id="select"
            label="Select destination"
            .options=${t}
          >
          </uui-select>
        </uui-box>
        <uui-box>
          <uui-button
            id="submit"
            color='positive'
            look="primary"
            label="Impersonate"
            @click=${u(this, i, f)}></uui-button>
        </uui-box>
        <div slot="actions">
          <uui-button id="cancel" label="Cancel" @click="${u(this, i, C)}">Cancel</uui-button>
        </div>
      </umb-body-layout>
    `;
  }
};
r = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  var e;
  this.selected = (e = t.target) == null ? void 0 : e.value;
};
f = function() {
  var t, e;
  (t = this.modalContext) == null || t.setValue({ content: this.content, page: this.selected }), (e = this.modalContext) == null || e.submit();
};
C = function() {
  var t;
  (t = this.modalContext) == null || t.reject();
};
d([
  p()
], n.prototype, "content", 2);
d([
  p()
], n.prototype, "selected", 2);
n = d([
  x("member-custom-modal")
], n);
const P = n;
export {
  n as MemberCustomModalElement,
  P as default
};
//# sourceMappingURL=modal-element-DjswBof1.js.map
