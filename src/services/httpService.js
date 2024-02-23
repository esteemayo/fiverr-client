import Axios from 'axios';
import toast from 'react-hot-toast';

import logger from './logService';

const devEnv = import.meta.env.MODE !== 'production';
const { VITE_APP_DEV_API_URL, VITE_APP_PROD_API_URL } = import.meta.env;

const authFetch = Axios.create({
  baseURL: devEnv ? VITE_APP_DEV_API_URL : VITE_APP_PROD_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

authFetch.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response &&
    error.response.status < 500;

  if (!expectedErrors) {
    logger.log(error);
    toast.error('An unexpected error occurred');
  }

  return Promise.reject(error);
});

const http = {
  get: authFetch.get,
  post: authFetch.post,
  patch: authFetch.patch,
  delete: authFetch.delete,
};

export default http;
