import http from './httpService';

const apiEndpoint = '/conversations';

export const getConversations = () => http.get(apiEndpoint);

export const getConversation = (conversationId) =>
  http.get(`${apiEndpoint}/${conversationId}`);

export const updateConversation = (conversationId) =>
  http.patch(`${apiEndpoint}/${conversationId}`);
