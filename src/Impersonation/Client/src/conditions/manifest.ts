import {SensitiveDataCondition} from "./sensitiveData-condition.ts";

const context: UmbExtensionManifest = {
  type: 'condition',
  name: 'Sensitive Data Condition',
  alias: 'Umb.Condition.CurrentUser.HasAccessToSensitiveData',
  api: SensitiveDataCondition,
};

export const manifests = [context];
