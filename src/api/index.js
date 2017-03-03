import axios from 'axios';

const apiServer = 'http://localhost:8000';

const client = axios.create({
  baseURL: `${apiServer}/api/`,
});

export const getAnalysis = link => client.post('analyze', { link });
