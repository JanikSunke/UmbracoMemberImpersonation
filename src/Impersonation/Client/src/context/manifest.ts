import {RootContext} from "./root-context.ts";
import {MemberSectionCondition} from "../Constants/member-section-condition.ts";

const context = {
  type: 'workspaceContext',
  alias: 'Root.Context',
  name: 'Root Context',
  api: RootContext,
  conditions: [
    MemberSectionCondition
  ]
}

export const manifests = [context];
