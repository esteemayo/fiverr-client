import http from './httpService';

const apiEndpoint = '/users';

export const getUser = (userId) => http.get(`${apiEndpoint}/${userId}`);
