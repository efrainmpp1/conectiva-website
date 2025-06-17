import axios from 'axios';

export const apiNode = axios.create({
  baseURL: import.meta.env.VITE_API_NODE_URL,
  timeout: 10000,
});
