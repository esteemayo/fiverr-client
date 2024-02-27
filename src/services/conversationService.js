import http from './httpService';

const apiEndpoint = '/conversations';

export const getConversations = () => http.get(apiEndpoint);

export const createConversation = (conversation) =>
  http.post(apiEndpoint, conversation);
