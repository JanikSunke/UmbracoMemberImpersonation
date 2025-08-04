import { html as b, state as p, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as x } from "@umbraco-cms/backoffice/modal";
import { R as y } from "./bundle.manifests-ZkeGuKXE.js";
function O(e) {
  var o, s;
  const t = [];
  for (const a of e) {
    const n = (o = a.variants[0]) == null ? void 0 : o.name;
    if (!((s = a.domains) != null && s.domains) || a.domains.domains.length == 0)
      t.push({ name: n, value: "/", selected: !1 });
    else
      for (const i of a.domains.domains)
        t.push({ name: i.domainName, value: i.domainName, selected: !1, group: n });
  }
  return t;
}
var E = Object.defineProperty, g = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, m = (e, t, o, s) => {
  for (var a = s > 1 ? void 0 : s ? g(t, o) : t, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (a = (s ? i(t, o, a) : i(a)) || a);
  return s && a && E(t, o, a), a;
}, u = (e, t, o) => t.has(e) || f("Cannot " + o), $ = (e, t, o) => (u(e, t, "read from private field"), o ? o.call(e) : t.get(e)), h = (e, t, o) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), w = (e, t, o, s) => (u(e, t, "write to private field"), t.set(e, o), o), d = (e, t, o) => (u(e, t, "access private method"), o), c, r, v, _, C;
let l = class extends x {
  constructor() {
    super(), h(this, r), this.content = "", this.selected = "", h(this, c), this.rootItems = [], this.consumeContext(y, (e) => {
      w(this, c, e), this.observe($(this, c).rootItems, (t) => {
        var o;
        this.rootItems = O(t), this.selected = ((o = t[0]) == null ? void 0 : o.id) ?? "";
      });
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    var e, t;
    return b`
      <umb-body-layout headline=${((e = this.data) == null ? void 0 : e.headline) ?? "Custom dialog"}>
        <uui-box>
          <h3>${(t = this.data) == null ? void 0 : t.content}</h3>
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
v = function(e) {
  var t;
  this.selected = (t = e.target) == null ? void 0 : t.value;
};
_ = function() {
  var e, t;
  (e = this.modalContext) == null || e.setValue({ content: this.content, page: this.selected }), (t = this.modalContext) == null || t.submit();
};
C = function() {
  var e;
  (e = this.modalContext) == null || e.reject();
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
//# sourceMappingURL=modal-element-GxYxWSCJ.js.map
