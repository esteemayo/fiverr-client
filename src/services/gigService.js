import http from './httpService';

const apiEndpoint = '/gigs';

export const getGigs = (search, min, max, sort) =>
  http.get(`${apiEndpoint}${search}&min=${min}&max=${max}&sort=${sort}`);
