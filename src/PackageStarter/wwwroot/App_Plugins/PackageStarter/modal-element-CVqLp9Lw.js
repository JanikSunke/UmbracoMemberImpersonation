import { html as b, state as p, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as _ } from "@umbraco-cms/backoffice/modal";
var C = Object.defineProperty, f = Object.getOwnPropertyDescriptor, c = (t) => {
  throw TypeError(t);
}, d = (t, e, o, n) => {
  for (var a = n > 1 ? void 0 : n ? f(e, o) : e, i = t.length - 1, l; i >= 0; i--)
    (l = t[i]) && (a = (n ? l(e, o, a) : l(a)) || a);
  return n && a && C(e, o, a), a;
}, x = (t, e, o) => e.has(t) || c("Cannot " + o), y = (t, e, o) => e.has(t) ? c("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), u = (t, e, o) => (x(t, e, "access private method"), o), r, m, h;
let s = class extends _ {
  constructor() {
    super(), y(this, r), this.content = "";
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
                </uui-box>
                <uui-box>
                        <uui-button
                            id="submit"
                            color='positive'
                            look="primary"
                            label="Submit"
                            @click=${u(this, r, m)}></uui-button>
                </uui-box>
                <div slot="actions">
                        <uui-button id="cancel" label="Cancel" @click="${u(this, r, h)}">Cancel</uui-button>
            </div>
            </umb-body-layout>
        `;
  }
};
r = /* @__PURE__ */ new WeakSet();
m = function() {
  var t;
  (t = this.modalContext) == null || t.submit();
};
h = function() {
  var t;
  (t = this.modalContext) == null || t.reject();
};
d([
  p()
], s.prototype, "content", 2);
s = d([
  v("member-custom-modal")
], s);
const $ = s;
export {
  s as MemberCustomModalElement,
  $ as default
};
//# sourceMappingURL=modal-element-CVqLp9Lw.js.map
