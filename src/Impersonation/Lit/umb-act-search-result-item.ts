import {css, html, LitElement, nothing} from "lit";
import {customElement, property} from "lit/decorators.js";
import {MemberItemResponseModel} from "../Client/src/management-api";

@customElement('umb-act-search-result-item')
export class UmbActSearchResultItem extends LitElement {
  static override styles = [
    css`
      :host {
        border-radius: var(--uui-border-radius);
        outline-offset: -3px;
        padding: var(--uui-size-space-3) var(--uui-size-space-5);

        display: flex;
        justify-content: space-between;
        gap: var(--uui-size-space-3);
        align-items: center;

        width: 100%;

        > span {
          flex: 1;
        }
      }
    `,
  ];
  @property({type: Object})
  item?: MemberItemResponseModel;

  override render() {
    if (!this.item) return nothing;
    return html`
      <uui-icon-registry-essential>
        <uui-icon name="see"></uui-icon>
      </uui-icon-registry-essential>
      <span>${this.item.variants.find(x => x.name)?.name}</span>
    `;
  }
}
