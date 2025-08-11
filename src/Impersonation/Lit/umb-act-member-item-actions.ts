import {css, html, LitElement, nothing} from "lit";
import {customElement, property} from "lit/decorators.js";
import {UmbSearchResultItemModel} from "./types";

@customElement('umb-act-member-item-actions')
export class UmbActMemberItemActions extends LitElement {
  static override styles = [
    css`
      .search-item {
        color: var(--uui-color-text);
        text-decoration: none;
        outline-offset: -3px;
        display: flex;
      }

      .search-item:hover {
        background: var(--uui-color-surface-emphasis);
        color: var(--uui-color-interactive-emphasis);
      }

      .search-item:focus {
        outline: 2px solid var(--uui-color-interactive-emphasis);
        border-radius: 6px;
        outline-offset: -4px;
      }

      .search-item.active:not(:focus-within) {
        outline: 2px solid var(--uui-color-border);
        border-radius: 6px;
        outline-offset: -4px;
      }
    `,
  ];
  @property({type: Object})
  item?: UmbSearchResultItemModel;

  override render() {
    if (!this.item) return nothing;
    return html`
      <a
        class="search-item"
        href=${this.item.href}>
        <slot></slot>
      </a>
    `;
  }
}
