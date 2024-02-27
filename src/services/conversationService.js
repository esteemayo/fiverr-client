import http from './httpService';

const apiEndpoint = '/conversations';

export const getConversations = () => http.get(apiEndpoint);

export const updateConversation = (conversationId) =>
  http.patch(`${apiEndpoint}/${conversationId}`);
