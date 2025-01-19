import api from "../userAuthentication/utils/api"; // Import the Axios instance with interceptors

const apiService = {
  // Create Account
  createAccount: async (data) => {
    const response = await api.post("/auth/signup", data);
    return response.data;
  },

  // Login
  login: async (data) => {
    const response = await api.post("/auth/login", data);
    return response.data;
  },

  logout: async () => {
    const response = await api.post("/auth/logout");  
    return response.data;
  },

  // Submit Comment
  submitComment: async (data) => {
    const response = await api.post("/add-your-comment", data);
    return response.data;
  },

  // Submit Talk With Us
  submitTalkWithUs: async (data) => {
    const response = await api.post("/talk-with-us", data);
    return response.data;
  },

  // Get All Comments
  getAllComments: async () => {
    const response = await api.get("/get-elmech-comments");
    return response.data;
  },

  // Get All Queries
  getAllQueries: async () => {
    const response = await api.get("/get-user-queries");
    return response.data;
  },
};

// Export createAccount explicitly
export const { createAccount } = apiService;
export const { login } = apiService;
export const { logout } = apiService; 
export const { getAllComments } = apiService;
export const { getAllQueries } = apiService;
export const { submitTalkWithUs } = apiService;
export const { submitComment } = apiService;





export default apiService;
