import {css, html, LitElement, nothing} from "lit";
import {customElement, property} from "lit/decorators.js";
import {UserAuthToken} from "./types";
import {ImpersonationService} from "../Client/src/impersonation-api";
import {MemberItemResponseModel} from "../Client/src/management-api";

@customElement('umb-act-member-item-actions')
export class UmbActMemberItemActions extends LitElement {
  static override styles = [
    css`
      .search-item {
        color: var(--uui-color-text);
        text-decoration: none;
        outline-offset: -3px;
        display: flex;
        cursor: pointer;
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
  item?: MemberItemResponseModel;

  userAuth: UserAuthToken;

  constructor() {
    super();
    this.userAuth = JSON.parse(localStorage.getItem('umb:userAuthTokenResponse'));
  }

  async impersonate() {
    ImpersonationService.impersonation({
      path: {
        memberKey: encodeURIComponent(this.item.id)
      },
      headers: {
        Authorization: `Bearer ${this.userAuth.access_token}`
      }
    }).then(({response}) => {
      if (response.ok) {
        window.location.reload();
      }
    });
  }

  override render() {
    if (!this.item) return nothing;
    return html`
      <a
        class="search-item"
        @click="${this.impersonate}">
        <slot></slot>
      </a>
    `;
  }
}
