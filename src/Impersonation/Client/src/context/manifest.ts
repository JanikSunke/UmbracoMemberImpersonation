import {RootContext} from "./root-context.ts";
import {AccessToSensitiveDataCondition, MemberSectionCondition} from "../constants/member-section-condition.ts";

const context: UmbExtensionManifest = {
  type: 'workspaceContext',
  alias: 'Root.Context',
  name: 'Root Context',
  api: RootContext,
  conditions: [
    MemberSectionCondition,
    AccessToSensitiveDataCondition
  ]
}

export const manifests = [context];
