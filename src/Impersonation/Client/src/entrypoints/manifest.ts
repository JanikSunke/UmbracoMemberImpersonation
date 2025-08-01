export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Impersonation Entrypoint",
    alias: "Impersonation.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint.js"),
  },
];
