const context: UmbExtensionManifest =
  {
    name: "Impersonation Entrypoint",
    alias: "Impersonation.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint.js"),
  };

export const manifests = [context];
