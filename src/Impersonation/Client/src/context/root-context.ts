import {UmbContextBase} from '@umbraco-cms/backoffice/class-api';
import {UmbContextToken} from "@umbraco-cms/backoffice/context-api";
import {UmbBasicState} from "@umbraco-cms/backoffice/observable-api";
import {RootDomains} from "../types/types.ts";
import {DocumentService} from "../management-api";
import {UmbControllerHost} from "@umbraco-cms/backoffice/controller-api";
import {client} from "../impersonation-api/client.gen.ts";


export class RootContext extends UmbContextBase<RootContext> {
  token: () => Promise<string>
  #rootItems = new UmbBasicState({} as RootDomains[]);
  readonly rootItems = this.#rootItems.asObservable();

  constructor(host: UmbControllerHost) {
    super(host, ROOT_CONTEXT);
    const config = client.getConfig();
    this.token = config.auth as () => Promise<string>
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
    const {response, data, error} = await DocumentService.getDocumentByIdDomains({
      path: {
        id: rootId
      },
      headers: {
        Authorization: 'Bearer ' + await this.token()
      }
    });

    if (response.ok) {
      if (data?.domains) {
        return data
      }
    } else {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  private async fetchRoot(): Promise<RootDomains[]> {
    const {response, data, error} = await DocumentService.getTreeDocumentRoot({
      headers: {
        Authorization: 'Bearer ' + await this.token()
      }
    });

    if (response.ok) {
      if (data?.total && data.total > 0) {
        return data.items
      }
    } else {
      console.error('There was a problem with the fetch operation:', error);
    }

    return [];
  }
}

export const ROOT_CONTEXT = new UmbContextToken<RootContext>(
  "UmbWorkspaceContext",
  'RootContext',
);

