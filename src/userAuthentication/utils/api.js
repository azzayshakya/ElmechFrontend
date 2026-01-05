import axios from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({
  // baseURL: 'https://elmech-backend.vercel.app/api', // Replace with your API's base URL
  baseURL: 'http://localhost:5000/api', // Replace with your API's base URL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('El_Jwt_accessToken');

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (error.response?.status === 401) {
      toast.error('Session expired. Please log in again.');

      localStorage.removeItem('El_Jwt_accessToken');
      localStorage.removeItem('El_User_Info');

      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    }

    return Promise.reject(error);
  }
);

export default api;
