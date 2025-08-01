import {UmbContextBase} from '@umbraco-cms/backoffice/class-api';
import {UmbContextToken} from "@umbraco-cms/backoffice/context-api";
import {UmbControllerHost} from "@umbraco-cms/backoffice/controller-api";
import {client} from "../api/client.gen.ts";
import {
  DocumentTreeItemResponseModel,
  PagedDocumentTreeItemResponseModel
} from "@umbraco-cms/backoffice/external/backend-api";
import {UmbBasicState} from "@umbraco-cms/backoffice/observable-api";

export class RootContext extends UmbContextBase<RootContext> {
  #rootItems = new UmbBasicState({} as DocumentTreeItemResponseModel[]);
  readonly rootItems = this.#rootItems.asObservable();
  #token: () => Promise<string>;

  constructor(host: UmbControllerHost) {
    super(host, ROOT_CONTEXT);
    var config = client.getConfig();
    this.#token = config.auth as () => Promise<string>
    this.fetch();
  }

  async fetch() {
    const {data, error}: { data?: PagedDocumentTreeItemResponseModel, error?: any } = await client.get({
      url: '/umbraco/management/api/v1/tree/document/root', headers: {
        Authorization: 'Bearer ' + await this.#token()
      }
    });

    if (error) {
      console.error('There was a problem with the fetch operation:', error);
    } else {
      if (data?.total && data.total > 0) {
        this.#rootItems.setValue(data.items);
      }
    }
  }
}

export const ROOT_CONTEXT = new UmbContextToken<RootContext>(
  "UmbWorkspaceContext",
  'RootContext',
);

