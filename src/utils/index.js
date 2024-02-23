export const tokenKey = 'accessToken';

export const excerpts = (str, count) => {
  if (str.length > count) {
    str = str.substring(0, count).concat('...');
  }
  return str;
};

export const setToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
