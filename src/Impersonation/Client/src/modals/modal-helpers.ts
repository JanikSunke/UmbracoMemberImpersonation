import {RootDomains, UUISelectOption} from "../types/types.ts";

export function MapRootDomainsToOptions(items: RootDomains[]): UUISelectOption[] {
  const selectOptions: UUISelectOption[] = [];
  for (const item of items) {
    const documentName = item.variants[0]?.name;
    if (!item.domains?.domains || item.domains.domains.length == 0) {
      selectOptions.push({name: documentName, value: '/', selected: false});
    } else {
      for (const domain of item.domains.domains) {
        selectOptions.push({name: domain.domainName, value: domain.domainName, selected: false, group: documentName});
      }
    }
  }
  if (selectOptions[0]) {
    selectOptions[0].selected = true;
  }

  return selectOptions;
}
