import { UMB_AUTH_CONTEXT as i } from "@umbraco-cms/backoffice/auth";
import { c as r } from "./bundle.manifests-DlNR041n.js";
const m = (n, o) => {
  n.consumeContext(i, async (s) => {
    const e = s == null ? void 0 : s.getOpenApiConfiguration();
    r.setConfig({
      auth: (e == null ? void 0 : e.token) ?? void 0,
      baseUrl: (e == null ? void 0 : e.base) ?? "",
      credentials: (e == null ? void 0 : e.credentials) ?? "same-origin"
    });
  });
}, l = (n, o) => {
};
export {
  m as onInit,
  l as onUnload
};
//# sourceMappingURL=entrypoint-DwfsL20Q.js.map
