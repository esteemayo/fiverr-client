import http from './httpService';

const apiEndpoint = '/orders';

export const getUserOrders = () => http.get(`${apiEndpoint}/user`);
