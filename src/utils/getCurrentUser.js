import { getFromStorage, userKey } from '.';

export const getCurrentUser = () => {
  return getFromStorage(userKey);
};
