import http from './httpService';

const apiEndpoint = '/gigs';

const gigUrl = (gigId) => `${apiEndpoint}/${gigId}`;

export const getGigs = (search, min, max, sort) =>
  http.get(`${apiEndpoint}${search}&min=${min}&max=${max}&sort=${sort}`);

export const getGig = (gigId) => http.get(gigUrl(gigId));
