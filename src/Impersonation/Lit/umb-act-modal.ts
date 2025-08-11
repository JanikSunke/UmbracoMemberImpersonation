import {customElement, state} from 'lit/decorators.js';
import {UUIModalElement} from "@umbraco-ui/uui";
import {css, html} from "lit";
import {UmbSearchResultItemModel} from "./types";

@customElement('umb-act-modal')
export class UmbActModal extends UUIModalElement {
  static styles = [
    css`
      .umb-impersonation-modal-container {
        width: min(610px, 100vw);
        height: max(600px, 80dvh);
        max-height: 100dvh;
      }

      .umb-impersonation-search-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        height: 100%;
      }
    `
  ]

  @state()
  items: UmbSearchResultItemModel[] = [{
    entityType: 'test',
    name: 'Janik Sunke',
    unique: 'test',
    href: 'test'
  }];

  constructor() {
    super();
  }

  render() {
    return html`
      <uui-modal-container>
        <uui-modal-dialog>
          <uui-dialog class="umb-impersonation-modal-container">
            <div style="display: contents;">
              <div>
                <uui-input style="width: 100%; height: 48px; border: none"
                           type="search" pristine="" label="Label"
                           placeholder="Type to search...">
                  <uui-icon-registry-essential class="umb-impersonation-search-icon" slot="prepend">
                    <uui-icon name="search"/>
                  </uui-icon-registry-essential>
                </uui-input>
              </div>
              <uui-scroll-container style="height: calc(100% - 48px);">
                <umb-act-member-item-actions .item=${this.items[0]}>
                  <umb-act-search-result-item
                    .item="${this.items[0]}" />
                </umb-act-member-item-actions>
              </uui-scroll-container>
            </div>
          </uui-dialog>
        </uui-modal-dialog>
      </uui-modal-container>
    `;
  }
}
