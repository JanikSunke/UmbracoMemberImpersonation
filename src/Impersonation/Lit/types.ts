export type UmbSearchResultItemModel = {
  id: string;
  kind: string;
  memberType: {
    collection: string;
    icon: string;
    id: string;
  }
  variants: {
    name: string;
    culture: string;
  }[]
};


export type UserAuthToken = {
  access_token: string,
  expires_in: string,
  issued_at: number,
  refresh_token: string,
  scope: string,
  token_type: string
}
