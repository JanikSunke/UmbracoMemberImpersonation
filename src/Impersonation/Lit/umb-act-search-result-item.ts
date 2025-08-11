import {css, html, LitElement, nothing} from "lit";
import {customElement, property} from "lit/decorators.js";
import {UmbSearchResultItemModel} from "./types";

@customElement('umb-act-search-result-item')
export class UmbActSearchResultItem extends LitElement {
  static override styles = [
    css`
      :host {
        border-radius: var(--uui-border-radius);
        outline-offset: -3px;
        padding: var(--uui-size-space-3) var(--uui-size-space-5);

        display: flex;
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
  item?: UmbSearchResultItemModel;

  override render() {
    if (!this.item) return nothing;
    return html`
      <uui-icon-registry-essential>
        ${this.item.icon ? html`
          <uui-icon name=${this.item.icon}></uui-icon>` : html`
          <uui-icon name="see"></uui-icon>`}
      </uui-icon-registry-essential>
      <span>${this.item.name}</span>
      <div class="extra"></div>
    `;
  }
}
