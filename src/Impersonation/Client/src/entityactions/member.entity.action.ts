import {UmbControllerHostElement} from "@umbraco-cms/backoffice/controller-api";
import {UmbEntityActionArgs, UmbEntityActionBase} from "@umbraco-cms/backoffice/entity-action";
import {UMB_MODAL_MANAGER_CONTEXT, UmbModalManagerContext} from "@umbraco-cms/backoffice/modal";
import {UmbMemberDetailRepository} from '@umbraco-cms/backoffice/member';
import {MEMBER_IMPERSONATION_MODAL} from "../modals/modal-token.ts";

export class ImpersonateMember extends UmbEntityActionBase<UmbMemberDetailRepository> {
  #modalManagerContext?: UmbModalManagerContext;

  constructor(host: UmbControllerHostElement, args: UmbEntityActionArgs<UmbMemberDetailRepository>) {
    super(host, args)
    this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (instance) => {
      this.#modalManagerContext = instance;
    });
  }

  async execute() {
    const modal = this.#modalManagerContext?.open(this, MEMBER_IMPERSONATION_MODAL, {
      data: {
        headline: 'Impersonate',
        content: 'Do you want to impersonate this user?',
      }
    });

    await modal?.onSubmit().then(async () => {
      const headers: Headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Accept', 'application/json')
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
