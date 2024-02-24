import http from './httpService';

const apiEndpoint = '/gigs';

export const getGigs = () => http.get(apiEndpoint);
