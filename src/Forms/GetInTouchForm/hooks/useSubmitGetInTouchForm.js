import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { submitTalkWithUs } from '../../../apis/apiService';
export default function useSubmitGetInTouchForm(reset) {
  const navigate = useNavigate();
  const {
    mutate: SubmitGetInTouchFormMutation,
    isLoading: isSubmissionPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: submitTalkWithUs,
    onSuccess: () => {
      toast.success("Thank you for contacting us! We’ve received your message and will get back to you shortly. 😊", {
        duration: 5000,
      });
      navigate("/");

    },
    onError: (error) => {
      toast.error('Oops! Something went wrong. Please try again later.')

    },
    onSettled: () => {
    },
  });

  return {
    SubmitGetInTouchFormMutation,
    isSubmissionPending,
    isSuccess,
    isError,
    error,
  };
}
