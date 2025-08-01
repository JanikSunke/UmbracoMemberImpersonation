import {UmbControllerHostElement} from "@umbraco-cms/backoffice/controller-api";
import {UmbEntityActionArgs, UmbEntityActionBase} from "@umbraco-cms/backoffice/entity-action";
import {UMB_MODAL_MANAGER_CONTEXT, UmbModalManagerContext} from "@umbraco-cms/backoffice/modal";
import {UmbMemberDetailRepository} from '@umbraco-cms/backoffice/member';
import {MEMBER_IMPERSONATION_MODAL} from "../modals/modal-token.ts";
import {client} from "../api/client.gen.ts";

export class ImpersonateMember extends UmbEntityActionBase<UmbMemberDetailRepository> {
  #token: () => Promise<string>;
  #modalManagerContext?: UmbModalManagerContext;

  constructor(host: UmbControllerHostElement, args: UmbEntityActionArgs<UmbMemberDetailRepository>) {
    super(host, args)
    this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (instance) => {
      this.#modalManagerContext = instance;
    });
    var config = client.getConfig();
    this.#token = config.auth as () => Promise<string>
  }

  async execute() {
    const modal = this.#modalManagerContext?.open(this, MEMBER_IMPERSONATION_MODAL, {
      data: {
        headline: 'Impersonate',
        content: 'Do you want to impersonate this user?',
      }
    });

    await modal?.onSubmit().then(async () => {
      return client.get({
        url: '/umbraco/backoffice/impersonation/v1/impersonate/' + this.args.unique?.toString(),
        headers: {
          Authorization: 'Bearer ' + await this.#token()
        },
      })
        .then(({response}) => {
          if (response.ok) {
            window.location.href = '/';
          }
        })
    }).catch(() => {
      return;
    });
  }
}
