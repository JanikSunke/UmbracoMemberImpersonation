import {customElement, html, state} from "@umbraco-cms/backoffice/external/lit";
import {UmbModalBaseElement} from "@umbraco-cms/backoffice/modal";
import {MemberImpersonationModalData, MemberImpersonationModalValue} from "./modal-token";
import {ROOT_CONTEXT} from "../context/root-context.ts";

@customElement('member-custom-modal')
export class MemberCustomModalElement extends UmbModalBaseElement<MemberImpersonationModalData, MemberImpersonationModalValue> {
  @state()
  content: string = '';
  #rootContext?: typeof ROOT_CONTEXT.TYPE;

  constructor() {
    super();
    this.consumeContext(ROOT_CONTEXT, (context) => {
      this.#rootContext = context;
    })
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  render() {
    return html`
      <umb-body-layout headline=${this.data?.headline ?? 'Custom dialog'}>
        <uui-box>
          <h3>${this.#rootContext?.name}</h3>
          <h3>${this.data?.content}</h3>
        </uui-box>
        <uui-box>
          <uui-button
            id="submit"
            color='positive'
            look="primary"
            label="Impersonate"
            @click=${this.#handleConfirm}></uui-button>
        </uui-box>
        <div slot="actions">
          <uui-button id="cancel" label="Cancel" @click="${this.#handleCancel}">Cancel</uui-button>
        </div>
      </umb-body-layout>
    `;
  }

  #handleConfirm() {
    this.modalContext?.submit();
  }

  #handleCancel() {
    this.modalContext?.reject();
  }
}

export default MemberCustomModalElement;
