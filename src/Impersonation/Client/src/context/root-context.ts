import {UmbContextBase} from '@umbraco-cms/backoffice/class-api';
import {UmbContextToken} from "@umbraco-cms/backoffice/context-api";
import {UmbControllerHost} from "@umbraco-cms/backoffice/controller-api";
import {client} from "../api/client.gen.ts";
import {DomainsResponseModel, PagedDocumentTreeItemResponseModel} from "@umbraco-cms/backoffice/external/backend-api";
import {UmbBasicState} from "@umbraco-cms/backoffice/observable-api";
import {RootDomains} from "../types/types.ts";


export class RootContext extends UmbContextBase<RootContext> {
  #rootItems = new UmbBasicState({} as RootDomains[]);
  readonly rootItems = this.#rootItems.asObservable();
  #token: () => Promise<string>;

  constructor(host: UmbControllerHost) {
    super(host, ROOT_CONTEXT);
    var config = client.getConfig();
    this.#token = config.auth as () => Promise<string>
    this.fetch();
  }

  async fetch() {
    const rootItems = await this.fetchRoot();
    for (const item of rootItems) {
      item.domains = await this.fetchDomains(item.id);
    }
    this.#rootItems.setValue(rootItems);
  }

  private async fetchDomains(rootId: string) {
    const {data, error}: { data?: DomainsResponseModel, error?: any } = await client.get({
      url: '/umbraco/management/api/v1/document/' + rootId + '/domains', headers: {
        Authorization: 'Bearer ' + await this.#token()
      }
    });

    if (error) {
      console.error('There was a problem with the fetch operation:', error);
    } else {
      if (data?.domains) {
        return data
      }
    }
  }

  private async fetchRoot(): Promise<RootDomains[]> {
    const {data, error}: { data?: PagedDocumentTreeItemResponseModel, error?: any } = await client.get({
      url: '/umbraco/management/api/v1/tree/document/root', headers: {
        Authorization: 'Bearer ' + await this.#token()
      }
    });

    if (error) {
      console.error('There was a problem with the fetch operation:', error);
    } else {
      if (data?.total && data.total > 0) {
        return data.items
      }
    }

    return [];
  }
}

export const ROOT_CONTEXT = new UmbContextToken<RootContext>(
  "UmbWorkspaceContext",
  'RootContext',
);

