import { html as b, state as p, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as g } from "@umbraco-cms/backoffice/modal";
import { R as x } from "./bundle.manifests-JPKfTlA7.js";
function y(t) {
  var o, a;
  const e = [];
  for (const s of t) {
    const n = (o = s.variants[0]) == null ? void 0 : o.name;
    if (!((a = s.domains) != null && a.domains) || s.domains.domains.length == 0)
      e.push({ name: n, value: "/", selected: !1 });
    else
      for (const i of s.domains.domains)
        e.push({ name: i.domainName, value: i.domainName, selected: !1, group: n });
  }
  return e[0] && (e[0].selected = !0), e;
}
var O = Object.defineProperty, E = Object.getOwnPropertyDescriptor, f = (t) => {
  throw TypeError(t);
}, m = (t, e, o, a) => {
  for (var s = a > 1 ? void 0 : a ? E(e, o) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (s = (a ? i(e, o, s) : i(s)) || s);
  return a && s && O(e, o, s), s;
}, u = (t, e, o) => e.has(t) || f("Cannot " + o), $ = (t, e, o) => (u(t, e, "read from private field"), e.get(t)), h = (t, e, o) => e.has(t) ? f("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), w = (t, e, o, a) => (u(t, e, "write to private field"), e.set(t, o), o), d = (t, e, o) => (u(t, e, "access private method"), o), c, r, v, _, C;
let l = class extends g {
  constructor() {
    super(), h(this, r), this.content = "", this.selected = "", h(this, c), this.rootItems = [], this.consumeContext(x, (t) => {
      var e;
      w(this, c, t), this.observe((e = $(this, c)) == null ? void 0 : e.rootItems, (o) => {
        var a;
        if (o) {
          const s = y(o);
          this.rootItems = s, this.selected = ((a = s.find((n) => n.selected)) == null ? void 0 : a.value) ?? "";
        }
      });
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    var t, e;
    return b`
      <umb-body-layout headline=${((t = this.data) == null ? void 0 : t.headline) ?? "Custom dialog"}>
        <uui-box>
          <h3>${(e = this.data) == null ? void 0 : e.content}</h3>
          <uui-select
            @change=${d(this, r, v)}
            id="select"
            label="Select destination"
            .options=${this.rootItems}
          >
          </uui-select>
          <uui-button
            id="submit"
            color='positive'
            look="primary"
            label="Impersonate"
            @click=${d(this, r, _)}></uui-button>
        </uui-box>
        <div slot="actions">
          <uui-button id="cancel" label="Cancel" @click="${d(this, r, C)}">Cancel</uui-button>
        </div>
      </umb-body-layout>
    `;
  }
};
c = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
v = function(t) {
  var e;
  this.selected = (e = t.target) == null ? void 0 : e.value;
};
_ = function() {
  var t, e;
  (t = this.modalContext) == null || t.setValue({ content: this.content, page: this.selected }), (e = this.modalContext) == null || e.submit();
};
C = function() {
  var t;
  (t = this.modalContext) == null || t.reject();
};
m([
  p()
], l.prototype, "content", 2);
m([
  p()
], l.prototype, "selected", 2);
l = m([
  M("member-custom-modal")
], l);
const N = l;
export {
  l as MemberCustomModalElement,
  N as default
};
//# sourceMappingURL=modal-element-DUWoxTtj.js.map
