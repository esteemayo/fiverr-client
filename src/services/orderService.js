import http from './httpService';

const apiEndpoint = '/orders';

export const getUserOrders = () => http.get(`${apiEndpoint}/user`);

export const createOrder = (gigId) =>
  http.post(`${apiEndpoint}/create-payment-intent/${gigId}`);

export const updateOrder = (gigId, paymentIntent) =>
  http.patch(`${apiEndpoint}/${gigId}`, paymentIntent);
