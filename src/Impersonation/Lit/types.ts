export type UserAuthToken = {
  access_token: string,
  expires_in: string,
  issued_at: number,
  refresh_token: string,
  scope: string,
  token_type: string
}

export enum MemberOrderByModel {
  USERNAME = 'Username',
  NAME = 'Name',
  EMAIL = 'Email',
}
