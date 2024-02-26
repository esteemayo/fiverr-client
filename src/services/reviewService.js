import http from './httpService';

const apiEndpoint = '/reviews';

export const getReviews = (gigId) => http.get(`${apiEndpoint}/gigs/${gigId}`);
