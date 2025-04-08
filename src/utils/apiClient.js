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
    if (error.response) {
      // Return a rejected promise with the error details
      return Promise.reject({
        error: error.response.data,
        status: error.response.status,
        headers: error.response.headers
      });
    } else if (error.request) {
      // The request was made but no response was received
      return Promise.reject({
        error: 'No response received from server',
        request: error.request
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject({
        error: error.message
      });
    }
  }
);

export const nodeBaseUrl = baseURL;
export { axiosInst, getCancelToken };
export default new ApiClient(axiosInst); 