export const excerpts = (str, count) => {
  if (str.length > count) {
    str = str.substring(0, count).concat('...');
  }
  return str;
};
