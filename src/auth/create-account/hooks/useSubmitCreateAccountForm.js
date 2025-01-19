import { useMutation } from "@tanstack/react-query";
import { createAccount } from "../../../apis/apiService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useSubmitAccount = () => {
  const navigate = useNavigate();
  const {
    mutate: submitAccountMutation,
    isLoading: isSubmitting,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: createAccount,
    onSuccess: () => {
      toast.success("Account created successfully! 🎉")
      navigate("/login"); 
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message || "Failed to create the account.";
      toast.error(`Error: ${errorMessage}`)
    },
    onSettled: () => {
    },
  });

  return {
    submitAccountMutation,
    isSubmitting,
    isSuccess,
    isError,
    error,
  };
};
