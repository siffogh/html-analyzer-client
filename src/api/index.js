import axios from 'axios';
import cookie from 'react-cookie';
import { apiServer } from '../../config';

const client = axios.create({
  baseURL: `${apiServer}/api/`,
});

client.interceptors.request.use((config) => {
  const token = cookie.load('token');
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
export const getAnalysis = link => client.post('analyze', { link });

export const signup = user => client.post('signup', user);

export const login = user => client.post('login', user);
