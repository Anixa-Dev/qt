import axios from 'axios';
import configEnv from '@/utils/config';

const baseURL = configEnv.NODE_BASE_URL;

const { CancelToken } = axios;
const getCancelToken = () => CancelToken.source();

class ApiClient {
  constructor(axiosInst) {
    this.axios = axiosInst;
  }

  makeRequest = (url, method, data = {}, params, cancelToken) => this.axios({
    url,
    method,
    data,
    params,
    cancelToken,
  });

  getRequest = async (url, config, params, cancelToken) => 
    this.makeRequest(url, 'GET', config, params, cancelToken);

  putRequest = (url, config) => 
    this.makeRequest(url, 'PUT', config);

  postRequest = async (url, config) => 
    this.makeRequest(url, 'POST', config);

  deleteRequest = (url, config) => 
    this.makeRequest(url, 'DELETE', config);
}

const axiosInst = axios.create({
  baseURL,
});

// Enable credentials for cross-origin requests
axiosInst.defaults.withCredentials = true;

// Add request interceptor for common headers
axiosInst.interceptors.request.use(
  (config) => {
    // You can add common headers here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
axiosInst.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors here
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response Error:', error.response.data);
      console.error('Response Status:', error.response.status);
      console.error('Response Headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request Error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export const nodeBaseUrl = baseURL;
export { axiosInst, getCancelToken };
export default new ApiClient(axiosInst); 