import { useMutation } from '@tanstack/react-query';
import { submitComment } from '../../../apis/apiService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useSubmitComment = () => {
  const navigate = useNavigate();

  const {
    mutate: submitCommentMutation,
    isLoading: isSubmitting,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: submitComment,
    onSuccess: () => {
      toast.success(
        'Thank you for sharing your experience! Your comment has been received and will help others. 😊',
        {
          duration: 5000,
        }
      );
      navigate('/');
    },
    onError: (error) => {
      toast.error(`Oops! Something went wrong. Please try again later.`);
    },
    onSettled: () => {
      console.log('Mutation has settled');
    },
  });

  return {
    submitCommentMutation,
    isSubmitting,
    isSuccess,
    isError,
    error,
  };
};
