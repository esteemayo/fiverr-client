import http from './httpService';

const apiEndpoint = '/conversations';

const conversationUrl = (conversationId) => `${apiEndpoint}/${conversationId}`;

export const getConversations = () => http.get(apiEndpoint);

export const getConversation = (conversationId) =>
  http.get(conversationUrl(conversationId));

export const createConversation = (conversation) =>
  http.post(apiEndpoint, conversation);

export const updateConversation = (conversationId) =>
  http.patch(conversationUrl(conversationId));
