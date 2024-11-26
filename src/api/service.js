import axios from 'axios';
import { BASE_URL } from 'constants/api';

export const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
});
