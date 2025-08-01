//import the entity type for Member
import {UMB_MEMBER_ENTITY_TYPE} from "@umbraco-cms/backoffice/member";
//import our entity action definition
import {ImpersonateMember} from "./member.entity.action";
import {MemberSectionCondition} from "../Constants/member-section-condition.ts";

const entityAction = {
  type: 'entityAction',
  kind: 'default',
  alias: 'member.entity.action',
  name: 'member action',
  weight: 1,
  forEntityTypes: [
    UMB_MEMBER_ENTITY_TYPE
  ],
  api: ImpersonateMember,
  meta: {
    icon: 'icon-operator',
    label: 'Impersonate...',
  },
  conditions: [
    MemberSectionCondition
  ]
}

export const manifests = [entityAction];
