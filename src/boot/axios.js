import axios from 'axios';

const request = axios.create({
  baseURL: 'https://129.28.171.18',
  timeout: 10000,
  withCredentials: true,
});
request.interceptors.response.use(response => response.data,
  error => Promise.reject(error));

export default request;
