export const userKey = 'currentUser';

export const excerpts = (str, count) => {
  if (str.length > count) {
    str = str.substring(0, count).concat('...');
  }
  return str;
};

export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setToStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromStorage = (key) => {
  return localStorage.removeItem(key);
};
