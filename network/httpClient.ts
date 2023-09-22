import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL;

const HttpClient = axios.create({
  baseURL: baseURL,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
});

// interceptors
HttpClient.interceptors.request.use(async (config) => {
  try {
  } catch (error) {}
  return config;
});

HttpClient.interceptors.response.use();

export default HttpClient;
