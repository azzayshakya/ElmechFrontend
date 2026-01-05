import axios from 'axios';
import toast from 'react-hot-toast';
import { getBaseUrl, getApiTimeout, STORAGE_KEYS, isDevelopment, isProduction } from './apiConfig';

// --------------------
// Token Helpers
// --------------------
const getAccessToken = () => localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
const getRefreshToken = () => localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

const setAccessToken = (token) => {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
};

const clearAuthData = () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.USER_INFO);
};

const generateRequestId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
// --------------------
// Axios Instance
// --------------------
const api = axios.create({
  baseURL: getBaseUrl(),
  timeout: getApiTimeout(),
  headers: {
    'Content-Type': 'application/json',
  },
});

// --------------------
// Token Refresh Queue
// --------------------
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => (error ? prom.reject(error) : prom.resolve(token)));
  failedQueue = [];
};

// --------------------
// Request Interceptor
// --------------------
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.metadata = { startTime: new Date() };
    config.headers['X-Request-ID'] = generateRequestId();

    if (isDevelopment) {
      console.group(`🚀 [API Request] ${config.method?.toUpperCase()} ${config.url}`);
      console.log('Headers:', config.headers);
      console.log('Params:', config.params);
      console.log('Data:', config.data);
      console.groupEnd();
    }

    return config;
  },
  (error) => {
    if (isDevelopment) {
      console.error('❌ [Request Error]', error);
    }
    return Promise.reject(error);
  }
);

// --------------------
// Response Interceptor
// --------------------
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Network error
    if (!error.response) {
      toast.error('Network error. Please check your internet connection.');
      return Promise.reject(error);
    }

    // 401 - Token expired
    if (error.response.status === 401 && !originalRequest._retry) {
      if (originalRequest.url.includes('/auth/refresh')) {
        handleAuthFailure();
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        handleAuthFailure();
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(`${getBaseUrl()}/auth/refresh`, { refreshToken });

        const { accessToken } = response.data;
        setAccessToken(accessToken);
        processQueue(null, accessToken);

        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        handleAuthFailure();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    // Other errors
    if (error.response?.status === 403) {
      toast.error('You do not have permission to perform this action.');
    }

    if (error.response?.status === 404) {
      toast.error('Resource not found.');
      if (isDevelopment) {
        console.warn('[404 Not Found]', originalRequest?.url);
      }
    }

    if (error.response?.status >= 500) {
      toast.error(
        isProduction
          ? 'Server error. Please try again later.'
          : error.response.data?.message || 'Server error'
      );
    }

    return Promise.reject(error);
  }
);

// --------------------
// Auth Failure
// --------------------
const handleAuthFailure = () => {
  clearAuthData();
  toast.error('Session expired. Please log in again.');
  setTimeout(() => (window.location.href = '/login'), 1500);
};

// --------------------
// Exports
// --------------------
export const apiUtils = {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  clearAuthData,
};

export default api;
