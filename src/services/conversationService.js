import http from './httpService';

const apiEndpoint = '/conversations';

export const getConversations = () => http.get(apiEndpoint);

export const updateConversation = (conversationId, conversation) =>
  http.patch(`${apiEndpoint}/${conversationId}`, conversation);
