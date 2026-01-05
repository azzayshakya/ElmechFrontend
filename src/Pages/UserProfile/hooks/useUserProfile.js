// hooks/useUserProfile.js
import { useQuery } from '@tanstack/react-query';

// Function to fetch user data (this would normally be an API call)
const fetchUserProfile = async () => {
  const response = await fetch('/api/user'); // Replace with your actual API endpoint
  if (!response.ok) {
    throw new Error('Error fetching user data');
  }
  return response.json(); // This should return the user object
};

// Custom hook using TanStack Query to fetch user profile data
const useUserProfile = () => {
  return useQuery(['userProfile'], fetchUserProfile);
};

export default useUserProfile;
