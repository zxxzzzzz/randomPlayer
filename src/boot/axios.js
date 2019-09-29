import axios from 'axios';

const request = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: true,
});
request.interceptors.response.use(response => response.data,
  error => Promise.reject(error));

export default request;
