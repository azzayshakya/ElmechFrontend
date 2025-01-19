// This code configures an Axios instance (api) with two interceptors:

// 1.Request Interceptor

// Attaches the accessToken from localStorage to every outgoing request's Authorization header.
// Ensures that all API calls are authenticated using the current access token.
// Response Interceptor

// 2.Handles responses from the server.

// If a 401 Unauthorized error is received (indicating that the access token has expired), it attempts to:
// a.Fetch a new access token using a refresh token.
// b.Retry the failed request with the new token.
// Redirects the user to the login page if the refresh token is invalid or expired.


import axios from "axios";
import toast from "react-hot-toast";

// Create an Axios instance with a base API URL
const api = axios.create({
  baseURL: "https://elmech-backend.vercel.app/api", // Replace with your API's base URL
});

/**
 * Request Interceptor
 * Attaches the access token to the Authorization header of every outgoing request.
 */

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("El_Jwt_accessToken");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    // Handle 401 Unauthorized errors
    if (error.response?.status === 401) {

      // Show a toast to inform the user
      toast.error("Session expired. Please log in again.");

      // Clear local storage to remove invalid token
      localStorage.removeItem("El_Jwt_accessToken");
      localStorage.removeItem("El_User_Info");

      // Redirect to login page after showing the toast
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000); // Allow the toast to display before redirecting
    }

    return Promise.reject(error);
  }
);

export default api;


// User Flow
// Here’s how this setup handles user interactions step-by-step:

// 1.User Initiates an Action

// -The user clicks a button or navigates to a page that triggers an API call (e.g., fetching user profile data, submitting a form).

// 2.Outgoing Request

// a.The Axios instance (api) is used to send the request.
// b.Request Interceptor:
// -Checks if an accessToken exists in localStorage.
// -Adds the Authorization header with the token (Bearer <token>).
// 3.Server Response

// a.Case 1: Access Token is Valid

// -The server processes the request and responds successfully.
// -The response is returned to the calling component or function.
// b.Case 2: Access Token is Expired (401 Unauthorized)

// a.Response Interceptor:
// -Detects the 401 status.
// -Sends a POST request to the /auth/refresh-token endpoint using axios.post.
// -Receives a new accessToken from the server and saves it in localStorage.
// -Updates the failed request's Authorization header with the new token.
// -Retries the failed request and returns its response.
// c.Case 3: Refresh Token is Expired or Invalid

// -The server rejects the refresh request (e.g., refresh token is expired or revoked).
// -The user is redirected to the login page (/login) for re-authentication.
// 4.Subsequent Requests

// a.After obtaining a new accessToken, all subsequent API requests will include the refreshed token.
