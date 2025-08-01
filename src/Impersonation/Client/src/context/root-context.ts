import {UmbContextBase} from '@umbraco-cms/backoffice/class-api';
import {UmbContextToken} from "@umbraco-cms/backoffice/context-api";
import {UmbControllerHost} from "@umbraco-cms/backoffice/controller-api";
import {tryExecute} from '@umbraco-cms/backoffice/resources';
import {client} from "../api/client.gen.ts";

export class RootContext extends UmbContextBase<RootContext> {
  readonly name = 'Janik';

  constructor(host: UmbControllerHost) {
    super(host, ROOT_CONTEXT);

  }

  async fetch() {
    const {data, error} = await tryExecute(client.get({
      url: '/umbraco/management/api/v1/tree/document/root',
    }));

    if (error) {
      console.error('There was a problem with the fetch operation:', error);
    } else {
      console.log(data); // Do something with the data
    }
  }
}

export const ROOT_CONTEXT = new UmbContextToken<RootContext>(
  "UmbWorkspaceContext",
  'RootContext',
);

