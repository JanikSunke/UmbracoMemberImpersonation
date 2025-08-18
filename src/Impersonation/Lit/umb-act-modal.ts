import {customElement} from 'lit/decorators.js';
import {UUIModalElement} from "@umbraco-ui/uui";
import {css, html} from "lit";
import {UmbSearchResultItemModel, UserAuthToken} from "./types";

@customElement('umb-act-modal')
export class UmbActModal extends UUIModalElement {
  static styles = [
    css`
      .umb-impersonation-modal-container {
        height: max(600px, 80dvh);
        width: min(610px, 100vw);
        max-height: 100dvh;
      }

      .umb-impersonation-search-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        height: 100%;
      }

      .search-providers {
        display: flex;
        flex-wrap: wrap;
        gap: var(--uui-size-space-2);
        padding: 0 var(--uui-size-space-5);
        padding-bottom: var(--uui-size-space-2);
      }

      .search-provider {
        padding: var(--uui-size-space-3) var(--uui-size-space-4);
        background: var(--uui-color-surface-alt);
        line-height: 1;
        white-space: nowrap;
        border-radius: var(--uui-border-radius);
        color: var(--uui-color-interactive);
        cursor: pointer;
        border: 2px solid transparent;
      }

      .search-provider.active {
        background: var(--uui-color-focus);
        color: var(--uui-color-selected-contrast);
        border-color: transparent;
      }
    `
  ]

  items: UmbSearchResultItemModel[] = [];

  userAuth: UserAuthToken;

  private inputTimeout?: number;

  constructor() {
    super();
    this.getMemberItems = this.getMemberItems.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.userAuth = JSON.parse(localStorage.getItem('umb:userAuthTokenResponse'));
  }

  render() {
    return html`
      <uui-modal-container>
        <uui-modal-dialog>
          <uui-dialog class="umb-impersonation-modal-container">
            <div style="display: flex; flex-direction: column; height: 100%;">
              <div>
                <uui-input style="width: 100%; height: 48px; border: none; font-size: var(--uui-type-default-size);"
                           type="search" pristine="" label="Label"
                           placeholder="Type to search..." .onInput="${this.onInputChange}">
                  <uui-icon-registry-essential class="umb-impersonation-search-icon" slot="prepend">
                    <uui-icon name="search"/>
                  </uui-icon-registry-essential>
                </uui-input>
              </div>
              <div class="search-providers">
                <button class="search-provider active">
                  Latest logged in
                </button>
                <button class="search-provider">
                  Members
                </button>
              </div>
              <uui-scroll-container style="flex: 1;">
                ${this.items.map(item => html`
                  <umb-act-member-item-actions .item=${item}>
                    <umb-act-search-result-item
                      .item="${item}"/>
                  </umb-act-member-item-actions>`)}
              </uui-scroll-container>
              <div
                style="display: flex; justify-content: end; padding: 0 var(--uui-size-space-5); padding-bottom: var(--uui-size-space-2);">
                <uui-button class="umb-act-logout" label="impersonate" look="primary" color="danger">
                  Stop impersonating
                </uui-button>
              </div>
            </div>
          </uui-dialog>
        </uui-modal-dialog>
      </uui-modal-container>
    `;
  }

  async getMemberItems(value) {
    if (value === '') {
      this.items = [];
      this.requestUpdate('items');
      return;
    }

    const response = await fetch('umbraco/management/api/v1/item/member/search?query=' + encodeURIComponent(value), {
      headers: {
        Authorization: 'Bearer ' + this.userAuth.access_token
      }
    });

    if (!response.ok) {
      console.error('There was a problem with the fetch operation:', await response.text());
    } else {
      const data = await response.json();
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);
      data.items.push(data.items[0]);

      this.items = data.items;
      this.requestUpdate('items');
    }
  }

  onInputChange(event: InputEvent) {
    clearTimeout(this.inputTimeout);
    let value = '';
    const target = event.target as HTMLInputElement | null;
    if (target && typeof target.value === 'string') {
      value = target.value;
    } else if (event.composedPath) {
      const pathValue = (event.composedPath()[0] as any).value;
      if (typeof pathValue === 'string') {
        value = pathValue;
      }
    }
    this.inputTimeout = window.setTimeout(() => {
      this.getMemberItems(value);
    }, 200);
  }
}
