import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import  useAuth  from "../hooks/useAuth"; 

/**
 * ProtectedRoute Component
 * Ensures that only authenticated users can access certain routes.
 *
 * @param {object} children - React components to render if the user is authenticated.
 * @returns {JSX.Element} - The child components if authenticated, or a redirection to the login page if not.
 */
const ProtectedRoute = ({ children }) => {
  // Get the current user from the authentication context
  const { user } = useAuth(); 

  useEffect(() => {
    if (!user) {
      // toast.error("You must log in to access this page!");
      // console.log("You must log in to access this page!")
    }
  }, [user]);

  // If not authenticated, redirect to login page
  return <Navigate to="/login" />;
};

// Protecting login route for authenticated users
const ProtectedLoginRoute = ({ children }) => {
  const { user } = useAuth(); 

  // If the user is already authenticated, redirect them to a different page (like home or dashboard)
  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};

export { ProtectedRoute, ProtectedLoginRoute };
