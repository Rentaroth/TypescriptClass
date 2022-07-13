export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export type User = {
  username: string,
  roles: ROLES,
}

const antonUser: User = {
  username: 'Antoine',
  roles: ROLES.ADMIN
};