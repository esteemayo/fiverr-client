import http from './httpService';

const apiEndpoint = '/gigs';

export const getGigs = (search, min, max) =>
  http.get(`${apiEndpoint}${search}&min=${min}&max=${max}`);
