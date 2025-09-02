import { html as v, state as b, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as x } from "@umbraco-cms/backoffice/modal";
import { R as $ } from "./bundle.manifests-CTEt9jeT.js";
function g(e) {
  var o, s;
  const t = [];
  for (const a of e) {
    const i = (o = a.variants[0]) == null ? void 0 : o.name;
    if (!((s = a.domains) != null && s.domains) || a.domains.domains.length == 0)
      t.push({ name: i, value: "/", selected: !1 });
    else
      for (const l of a.domains.domains)
        t.push({ name: l.domainName, value: l.domainName, selected: !1, group: i });
  }
  return t[0] && (t[0].selected = !0), t;
}
var M = Object.defineProperty, O = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, h = (e, t, o, s) => {
  for (var a = s > 1 ? void 0 : s ? O(t, o) : t, i = e.length - 1, l; i >= 0; i--)
    (l = e[i]) && (a = (s ? l(t, o, a) : l(a)) || a);
  return s && a && M(t, o, a), a;
}, p = (e, t, o) => t.has(e) || _("Cannot " + o), E = (e, t, o) => (p(e, t, "read from private field"), t.get(e)), f = (e, t, o) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), k = (e, t, o, s) => (p(e, t, "write to private field"), t.set(e, o), o), r = (e, t, o) => (p(e, t, "access private method"), o), u, n, C, d, m;
let c = class extends x {
  constructor() {
    super(), f(this, n), this.content = "", this.selected = "", f(this, u), this.rootItems = [], this.consumeContext($, (e) => {
      var t;
      k(this, u, e), this.observe((t = E(this, u)) == null ? void 0 : t.rootItems, (o) => {
        var s;
        if (o) {
          const a = g(o);
          this.rootItems = a, this.selected = ((s = a.find((i) => i.selected)) == null ? void 0 : s.value) ?? "/";
        }
      });
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    var e, t, o, s;
    return this.rootItems.map((a) => a.value).find((a) => a !== "/") ? v`
        <umb-body-layout headline=${((e = this.data) == null ? void 0 : e.headline) ?? "Custom dialog"}>
          <uui-box>
            <h3>${(t = this.data) == null ? void 0 : t.content}</h3>
            <uui-select
              @change=${r(this, n, C)}
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
              @click=${r(this, n, d)}></uui-button>
          </uui-box>
          <div slot="actions">
            <uui-button id="cancel" label="Cancel" @click="${r(this, n, m)}">Cancel</uui-button>
          </div>
        </umb-body-layout>
      ` : v`
        <umb-body-layout headline=${((o = this.data) == null ? void 0 : o.headline) ?? "Custom dialog"}>
          <uui-box>
            <h3>${(s = this.data) == null ? void 0 : s.content}</h3>
            <uui-button
              id="submit"
              color='positive'
              look="primary"
              label="Impersonate"
              @click=${r(this, n, d)}></uui-button>
          </uui-box>
          <div slot="actions">
            <uui-button id="cancel" label="Cancel" @click="${r(this, n, m)}">Cancel</uui-button>
          </div>
        </umb-body-layout>
      `;
  }
};
u = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
C = function(e) {
  var t;
  this.selected = (t = e.target) == null ? void 0 : t.value;
};
d = function() {
  var e, t;
  (e = this.modalContext) == null || e.setValue({ content: this.content, page: this.selected }), (t = this.modalContext) == null || t.submit();
};
m = function() {
  var e;
  (e = this.modalContext) == null || e.reject();
};
h([
  b()
], c.prototype, "content", 2);
h([
  b()
], c.prototype, "selected", 2);
c = h([
  y("member-custom-modal")
], c);
const N = c;
export {
  c as MemberCustomModalElement,
  N as default
};
//# sourceMappingURL=modal-element-DfgdmAAT.js.map
