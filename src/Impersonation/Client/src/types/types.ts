import {DocumentTreeItemResponseModel, DomainsResponseModel} from "@umbraco-cms/backoffice/external/backend-api";

export type RootDomains = DocumentTreeItemResponseModel & { domains?: DomainsResponseModel };

export type UUISelectOption = {
  name: string;
  value: string;
  group?: string;
  selected?: boolean;
  disabled?: boolean;
};
