import {UmbControllerHostElement} from "@umbraco-cms/backoffice/controller-api";
import {UmbEntityActionArgs, UmbEntityActionBase} from "@umbraco-cms/backoffice/entity-action";
import {UMB_MODAL_MANAGER_CONTEXT, UmbModalManagerContext} from "@umbraco-cms/backoffice/modal";
import {UmbMemberDetailRepository} from '@umbraco-cms/backoffice/member';
import {MEMBER_IMPERSONATION_MODAL} from "../modals/modal-token.ts";
import {ImpersonationService} from "../api";

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

    await modal?.onSubmit().then(async (data) => {
      return ImpersonationService.impersonate({
        path: {memberKey: this.args.unique?.toString() ?? ''}
      }).then(({response}) => {
        if (response.ok) {
          window.location.href = data.page ? data.page : '/';
        }
      }).catch(() => {
        return;
      });
    });
  }
}
