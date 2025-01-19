import React from "react";
import { useDefineLoginForm } from "../hooks/useDefineLoginForm";
import { useSubmitLogin } from "../hooks/useSubmitLogin";
import "../css/LoginForm.css";
import toast from "react-hot-toast";

export default function LoginPageForm() {
  const { form, errors } = useDefineLoginForm();
  const { submitLoginMutation, isSubmitting: isSubmittingMutation } = useSubmitLogin();
  const { register, handleSubmit } = form;

  const onSubmit = async (data) => {

    try {
      await submitLoginMutation(data);
    } catch (error) {
      toast.error("Please correct the highlighted errors.")
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <p>Welcome back! Your next step is just a click away.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">

        <div className="inputboxWithErrorAtLogin">
          <div className="inputBox">
            <input type="email" {...register("email")} />
            <label>Email</label>
             <span>{errors.email?.message}</span>
          </div>
        </div>

        <div className="inputboxWithErrorAtLogin">
          <div className="inputBox">
            <input type="password" {...register("password")} />
            <label>Password</label>
            <span>{errors.password?.message}</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="submit-button-login"
          disabled={isSubmittingMutation}
        >
          {isSubmittingMutation ? (
            <div className="loader"></div> // Loader shown while submitting
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}
