import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../../userAuthentication/hooks/useAuth';
import toast from 'react-hot-toast';
import apiService from '@/apiService/apiService';

export const useSubmitLogin = () => {
  const navigate = useNavigate();
  const { login: setUser } = useAuth();

  const {
    mutate: submitLoginMutation,
    isLoading: isSubmitting,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: apiService.login(),
    onSuccess: (data) => {
      const { accessToken, ...userDetails } = data;

      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={data.data.avatar}
                    alt={`${data.data.firstName} ${data.data.lastName}`}
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Welcome back, {data.data.firstName} {data.data.lastName}! 🎉
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Ready to get started? Let’s make today productive.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Got it
              </button>
            </div>
          </div>
        ),
        {
          duration: 2000,
        }
      );

      setUser(userDetails.data, data.accessToken);
      navigate('/home');
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message || 'Failed to Login account.';
      toast.error(`Error: ${errorMessage}`);
    },
    onSettled: () => {},
  });

  return {
    submitLoginMutation,
    isSubmitting,
    isSuccess,
    isError,
    error,
  };
};
