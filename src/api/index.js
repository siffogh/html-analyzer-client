import axios from 'axios';

const apiServer = 'http://localhost:8000';

const client = axios.create({
  baseURL: `${apiServer}/api/`,
});

export const getAnalysis = link => client.post('analyze', { link });

export const signup = user => client.post('signup', user);

export const login = user => client.post('login', user);