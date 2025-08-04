import {customElement, html, state} from "@umbraco-cms/backoffice/external/lit";
import {UmbModalBaseElement} from "@umbraco-cms/backoffice/modal";
import {MemberImpersonationModalData, MemberImpersonationModalValue} from "./modal-token";
import {ROOT_CONTEXT} from "../context/root-context.ts";
import {DocumentTreeItemResponseModel} from "@umbraco-cms/backoffice/external/backend-api";
import {UmbChangeEvent} from "@umbraco-cms/backoffice/event";

@customElement('member-custom-modal')
export class MemberCustomModalElement extends UmbModalBaseElement<MemberImpersonationModalData, MemberImpersonationModalValue> {
  @state()
  content: string = '';
  @state()
  selected: string = '';
  #rootContext?: typeof ROOT_CONTEXT.TYPE;
  private rootItems: DocumentTreeItemResponseModel[] = [];

  constructor() {
    super();
    this.consumeContext(ROOT_CONTEXT, (context) => {
      this.#rootContext = context;
      this.observe(this.#rootContext.rootItems, (items) => {
        this.rootItems = items;
        this.selected = items[0]?.id ?? '';
      })
    })
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  render() {
    const selectOptions = this.rootItems.map(item => ({name: item.variants[0]?.name, value: item.id, selected: false}));

    if (selectOptions[0] != undefined) {
      selectOptions[0].selected = true;
    }

    return html`
      <umb-body-layout headline=${this.data?.headline ?? 'Custom dialog'}>
        <uui-box>
          <h3>${this.data?.content}</h3>
        </uui-box>
        <uui-box>
          <uui-select
            @change=${this.#selectChange}
            id="select"
            label="Select destination"
            .options=${selectOptions}
          >
          </uui-select>
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

  #selectChange(event: UmbChangeEvent & { target: HTMLSelectElement }) {
    this.selected = event.target?.value;
  }

  #handleConfirm() {
    this.modalContext?.setValue({content: this.content, page: this.selected});
    this.modalContext?.submit();
  }

  #handleCancel() {
    this.modalContext?.reject();
  }
}

export default MemberCustomModalElement;
