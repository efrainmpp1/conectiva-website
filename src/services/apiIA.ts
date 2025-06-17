import axios from 'axios';

export const apiIA = axios.create({
  baseURL: import.meta.env.VITE_API_IA_URL,
  timeout: 20000,
});
