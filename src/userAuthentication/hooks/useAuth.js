import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

/**
 * Custom hook to access the AuthContext.
 *
 * @returns {object} - Authentication context value, including `user`, `login`, and `logout`.
 * @throws {Error} - If used outside the AuthProvider.
 */

const useAuth = () => {
  const context = useContext(AuthContext);

  // Ensure the hook is used within an AuthProvider
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default useAuth;
