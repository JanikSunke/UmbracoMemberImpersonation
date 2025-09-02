import type {UmbEntryPointOnInit, UmbEntryPointOnUnload,} from "@umbraco-cms/backoffice/extension-api";
import {UMB_AUTH_CONTEXT} from "@umbraco-cms/backoffice/auth";
import {client} from "../impersonation-api/client.gen.ts";

export const onInit: UmbEntryPointOnInit = (_host, _extensionRegistry) => {
  // Backoffice Authentication
  _host.consumeContext(UMB_AUTH_CONTEXT, async (authContext) => {
    const config = authContext?.getOpenApiConfiguration();

    client.setConfig({
      auth: config?.token ?? undefined,
      baseUrl: config?.base ?? "",
      credentials: config?.credentials ?? "same-origin",
    });
  });
};

export const onUnload: UmbEntryPointOnUnload = (_host, _extensionRegistry) => {
};
