import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'Antonio',
  roles: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if(currentUser.roles === ROLES.ADMIN) {
    return true;
  }
  return false;
};

export const checkRole = (...roles: string[]) => {
  if(roles.includes(currentUser.roles)) {
    return true;
  }
  return false;
};

const rta = checkRole(ROLES.ADMIN, ROLES.CUSTOMER );
console.log('currentUser', rta);