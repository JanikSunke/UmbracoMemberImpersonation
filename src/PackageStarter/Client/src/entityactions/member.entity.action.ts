import { UmbControllerHostElement } from "@umbraco-cms/backoffice/controller-api";
import { UmbEntityActionArgs, UmbEntityActionBase } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT, UmbModalManagerContext } from "@umbraco-cms/backoffice/modal";
import { MEMBER_CUSTOM_MODAL } from "../modals/modal-token.ts";
import { UmbMemberDetailRepository  } from '@umbraco-cms/backoffice/member';

export class ImpersonateMember extends UmbEntityActionBase<UmbMemberDetailRepository> {
  #modalManagerContext?: UmbModalManagerContext;
  constructor(host: UmbControllerHostElement, args: UmbEntityActionArgs<UmbMemberDetailRepository>)
  {
    super(host, args)
    // Fetch/consume the contexts & assign to the private fields
    this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (instance) => {
      this.#modalManagerContext = instance;
    });
  }

  async execute() {
    console.log("ImpersonateMember.execute", this.args);
    //The modal does NOT return any data when closed (it does not submit)
    const modal = this.#modalManagerContext?.open(this, MEMBER_CUSTOM_MODAL, {
      data: {
        headline:'Impersonate',
        content: 'Do you want to impersonate this user?' + this.args.unique,
      }
    });

    await modal?.onSubmit().then(() => {
      const headers: Headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Accept', 'application/json')
      const request: RequestInfo = new Request('/sendvalidation/' + this.args.unique?.toString(), {
        method: 'GET',
        headers: headers,
      })
      // Send the request and print the response
      return fetch(request)
        .then(res => {
          console.log("got response:", res)
        })
    }).catch(() => {
      return;
    });
  }
}
