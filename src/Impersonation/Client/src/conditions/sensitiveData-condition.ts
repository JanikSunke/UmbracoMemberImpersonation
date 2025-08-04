import {
  UmbConditionConfigBase,
  UmbConditionControllerArguments,
  UmbExtensionCondition
} from '@umbraco-cms/backoffice/extension-api';
import {UmbConditionBase} from '@umbraco-cms/backoffice/extension-registry';
import {UmbControllerHost} from '@umbraco-cms/backoffice/controller-api';
import {UMB_CURRENT_USER_CONTEXT} from "@umbraco-cms/backoffice/current-user";

export type SensitiveDataConfig = UmbConditionConfigBase<'Umb.Condition.CurrentUser.HasAccessToSensitiveData'> & {
  match?: string;
};

export class SensitiveDataCondition extends UmbConditionBase<SensitiveDataConfig> implements UmbExtensionCondition {
  constructor(host: UmbControllerHost, args: UmbConditionControllerArguments<SensitiveDataConfig>) {
    super(host, args);

    this.consumeContext(UMB_CURRENT_USER_CONTEXT, (collectionContext) => {
      const hasAccessToSensitiveData = collectionContext?.getHasAccessToSensitiveData()
      if (hasAccessToSensitiveData) {
        this.permitted = true;
        args.onChange();
      }
    });
  }
}

// Declare the Condition Configuration Type in the global UmbExtensionConditionConfigMap interface:
declare global {
  interface UmbExtensionConditionConfigMap {
    SensitiveDataConfig: SensitiveDataConfig;
  }
}
