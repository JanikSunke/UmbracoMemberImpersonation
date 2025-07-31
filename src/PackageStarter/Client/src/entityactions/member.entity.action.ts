import { UmbControllerHostElement } from "@umbraco-cms/backoffice/controller-api";
import { UmbEntityActionArgs, UmbEntityActionBase } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT, UmbModalManagerContext } from "@umbraco-cms/backoffice/modal";
import { MEMBER_CUSTOM_MODAL } from "../modals/modal-token.ts";
import { UmbMemberDetailRepository  } from '@umbraco-cms/backoffice/member';
import {UMB_AUTH_CONTEXT} from "@umbraco-cms/backoffice/auth";

export class ImpersonateMember extends UmbEntityActionBase<UmbMemberDetailRepository> {
  #modalManagerContext?: UmbModalManagerContext;
  private OpenAPIToken: any;
  constructor(host: UmbControllerHostElement, args: UmbEntityActionArgs<UmbMemberDetailRepository>)
  {
    super(host, args)
    // Fetch/consume the contexts & assign to the private fields
    this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (instance) => {
      this.#modalManagerContext = instance;
    });
    this.consumeContext(UMB_AUTH_CONTEXT, (_auth) => {
      const umbOpenApi = _auth.getOpenApiConfiguration();
      this.OpenAPIToken = umbOpenApi.token;
    });
  }

  async execute() {
    const modal = this.#modalManagerContext?.open(this, MEMBER_CUSTOM_MODAL, {
      data: {
        headline:'Impersonate',
        content: 'Do you want to impersonate this user?',
      }
    });

    await modal?.onSubmit().then(async () => {
      const tokenPromise = (this.OpenAPIToken as any as () => Promise<string>);
      const token = await tokenPromise();

      const headers: Headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Accept', 'application/json')
      headers.set('Authorization', 'Bearer ' + token)
      const request: RequestInfo = new Request('/umbraco/backoffice/impersonation/v1/impersonate/' + this.args.unique?.toString(), {
        method: 'GET',
        headers: headers,
      })
      return fetch(request)
        .then(res => {
          if (res.ok) {
            window.location.href = '/';
          }
        })
    }).catch(() => {
      return;
    });
  }
}
