import { createContext, useState, useEffect } from "react";
import apiService from "../../apis/apiService";
/**
 * AuthContext to manage the user's authentication state.
 * Provides access to user details and authentication utility functions.
 */
export const AuthContext = createContext();

/**
 * AuthProvider Component
 * Provides authentication state and utility functions to manage user sessions.
 *
 * @param {object} children - React components wrapped by the provider.
 */

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user state from localStorage (if available)
    const savedUser = localStorage.getItem("El_User_Info");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  /**
   * Logs in the user.
   *
   * @param {object} userDetails - Details of the authenticated user.
   * @param {string} accessToken - Access token for API requests.
   */

  const login = (userDetails, accessToken) => {
    // console.log(userDetails,accessToken)
    setUser(userDetails);
    localStorage.setItem("El_User_Info", JSON.stringify(userDetails));
    localStorage.setItem("El_Jwt_accessToken", accessToken);
  };

  /**
   * Logs out the user.
   */

  const logout = async () => {
    try {

      // you can do this too :
      // Call the backend logout route to invalidate the refresh token
      // await apiService.logout();
      // Clear user data from localStorage
      setUser(null);
      localStorage.removeItem("El_User_Info");
      localStorage.removeItem("El_Jwt_accessToken");

    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  
   // Monitor localStorage for changes (useful for multi-tab applications)
  useEffect(() => {
    const handleStorageChange = () => {
      const savedUser = localStorage.getItem("El_User_Info");
      setUser(savedUser ? JSON.parse(savedUser) : null);
    };

    // Listen for changes in localStorage across different tabs/windows
    window.addEventListener("storage", handleStorageChange);

    // Call handleStorageChange once on initial load to update the state
    handleStorageChange(); // This ensures the state is set properly on initial load

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
