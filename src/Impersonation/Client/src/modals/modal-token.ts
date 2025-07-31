import { UmbModalToken } from "@umbraco-cms/backoffice/modal";

export interface MemberImpersonationModalData {
  headline: string;
  content: string;
}

export interface MemberImpersonationModalValue {
  content: string
}

export const MEMBER_IMPERSONATION_MODAL = new UmbModalToken<MemberImpersonationModalData, MemberImpersonationModalValue>(
  "member.impersonation.modal",
  {
    modal: {
      type: 'sidebar',
      size: 'medium'
    }
  }
);
