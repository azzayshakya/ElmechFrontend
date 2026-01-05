// src/hooks/useGetAllQueries.js
import { useMutation } from '@tanstack/react-query';
import { getAllQueriesApi } from '../apis/getAllQueriesApi'; // Your API function
import { useState } from 'react';
import { getAllQueries } from '../../../apis/apiService'; // Import the API call
import toast from 'react-hot-toast';
/**
 * Custom hook for fetching all queries.
 * - Uses react-query's `useMutation` to fetch data.
 * - Manages the loading, success, and error states of the fetch operation.
 */
export const useGetAllQueries = () => {
  const [queries, setQueries] = useState([]); // State to store fetched queries

  const {
    mutate: fetchQueries,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: getAllQueries, // Function to fetch the queries
    onSuccess: (data) => {
      toast.success('Queries fetched successfully! 🎉');

      setQueries(data); // Store the fetched data in state
      // toast.success('Queries fetched successfully! 🎉');
    },
    onError: (error) => {
      // Handle error gracefully
      const errorMessage = error?.response?.data?.message || 'Failed to fetch queries.';
      toast.error(errorMessage);
    },
    onSettled: () => {
      // console.log('Fetch queries mutation has settled.');
    },
  });

  return {
    fetchQueries, // Expose the mutate function to trigger the mutation
    queries, // Return the fetched queries
    isLoading,
    isSuccess,
    isError,
    error,
  };
};
