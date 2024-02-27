import http from './httpService';

const apiEndpoint = '/messages';

export const getMessages = (conversationId) =>
  http.get(`${apiEndpoint}/${conversationId}`);

export const createMessage = (message) => http.post(apiEndpoint, message);
