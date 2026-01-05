import api from '../userAuthentication/utils/api';

const apiService = {
  createAccount: async (data) => {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  login: async (data) => {
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  submitComment: async (data) => {
    const response = await api.post('/add-your-comment', data);
    return response.data;
  },

  submitTalkWithUs: async (data) => {
    const response = await api.post('/talk-with-us', data);
    return response.data;
  },

  getAllComments: async () => {
    const response = await api.get('/get-elmech-comments');
    return response.data;
  },

  getAllQueries: async () => {
    const response = await api.get('/get-user-queries');
    return response.data;
  },
};

export const { createAccount } = apiService;
export const { login } = apiService;
export const { logout } = apiService;
export const { getAllComments } = apiService;
export const { getAllQueries } = apiService;
export const { submitTalkWithUs } = apiService;
export const { submitComment } = apiService;

export default apiService;
