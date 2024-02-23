import http from './httpService';

const apiEndpoint = '/auth';

export const login = (credentials) =>
  http.post(`${apiEndpoint}/login`, credentials);

export const register = (credentials) =>
  http.post(`${apiEndpoint}/register`, credentials);
