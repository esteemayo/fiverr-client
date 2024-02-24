import http from './httpService';

const apiEndpoint = '/gigs';

export const getGigs = (search) => http.get(`${apiEndpoint}${search}`);
