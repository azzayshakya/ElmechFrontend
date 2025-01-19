import { useMutation } from "@tanstack/react-query";
import { getAllComments } from "../../../apis/apiService"; // Import the API call
import { useState } from "react";
import toast from "react-hot-toast";

/**
 * Custom hook for fetching all comments.
 * - Calls the getAllComments API using react-query's `useMutation`.
 * - Manages the loading, success, and error states of the fetch operation.
 */
export const useGetAllComments = () => {
  const [comments, setComments] = useState([]); // State to store fetched comments

  const {
    mutate: fetchComments,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: getAllComments, // Function to fetch comments
    onSuccess: (data) => {
      toast.success("Comments fetched successfully! 🎉");
      setComments(data);
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message || "Failed to fetch comments.";
      toast.error(errorMessage);
    },
  });

  return {
    fetchComments,
    comments,
    isLoading,
    isError,
    error,
  };
};

