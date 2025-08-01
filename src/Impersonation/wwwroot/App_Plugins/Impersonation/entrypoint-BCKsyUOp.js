import { UMB_AUTH_CONTEXT as i } from "@umbraco-cms/backoffice/auth";
import { c as r } from "./bundle.manifests-CwSL4Bt2.js";
const a = (o, s) => {
  console.log("Impersonation Client onInit"), o.consumeContext(i, async (n) => {
    const e = n == null ? void 0 : n.getOpenApiConfiguration();
    r.setConfig({
      auth: (e == null ? void 0 : e.token) ?? void 0,
      baseUrl: (e == null ? void 0 : e.base) ?? "",
      credentials: (e == null ? void 0 : e.credentials) ?? "same-origin"
    });
  });
}, m = (o, s) => {
};
export {
  a as onInit,
  m as onUnload
};
//# sourceMappingURL=entrypoint-BCKsyUOp.js.map
