import {UmbContextBase} from '@umbraco-cms/backoffice/class-api';
import {UmbContextToken} from "@umbraco-cms/backoffice/context-api";
import {UmbControllerHost} from "@umbraco-cms/backoffice/controller-api";
import {client} from "../api/client.gen.ts";

export class RootContext extends UmbContextBase<RootContext> {
  readonly name = 'Janik';

  constructor(host: UmbControllerHost) {
    super(host, ROOT_CONTEXT);
  }

  async fetch() {
    console.log("Fetching root node");
    const headers: Headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')
    headers.set('Authorization', 'Bearer ' + 'zGDEnJKpRUbGVo_NHHNGhZVIG4zBDfckh6dFanqHBEk');
    const request = client.get({url: '/umbraco/management/api/v1/tree/document/root', headers: headers});

    return request
      .then(res => {
        console.log(res);
      }).catch(() => {
        return;
      });

    // const {data, error} = await tryExecute(client.get({
    //   url: '/umbraco/management/api/v1/tree/document/root',
    // }));
    //
    // if (error) {
    //   console.error('There was a problem with the fetch operation:', error);
    // } else {
    //   console.log(data); // Do something with the data
    // }
  }
}

export const ROOT_CONTEXT = new UmbContextToken<RootContext>(
  "UmbWorkspaceContext",
  'RootContext',
);

