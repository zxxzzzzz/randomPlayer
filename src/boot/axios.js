import axios from 'axios';

const request = axios.create({
  baseURL: 'http://129.28.171.18:3000/api',
  timeout: 10000,
  withCredentials: true,
});
request.interceptors.response.use(response => response.data,
  error => Promise.reject(error));

export default request;
