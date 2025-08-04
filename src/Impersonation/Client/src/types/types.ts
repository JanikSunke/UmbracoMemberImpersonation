import {DocumentTreeItemResponseModel, DomainsResponseModel} from "@umbraco-cms/backoffice/external/backend-api";

export type RootDomains = DocumentTreeItemResponseModel & { domains?: DomainsResponseModel };
