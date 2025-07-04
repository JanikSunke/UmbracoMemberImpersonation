export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Package Starter Entrypoint",
    alias: "PackageStarter.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint.js"),
  },
];
