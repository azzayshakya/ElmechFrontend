import React from "react";
import '../css/CreateAccountForm.css';
import { useDefineCreateAccountForm } from "../hooks/useDefineCommentForm";
import { useSubmitAccount } from "../hooks/useSubmitCreateAccountForm";
import toast from "react-hot-toast";

export default function CreateAccountForm() {
  const { form, errors } = useDefineCreateAccountForm();
  // console.log(errors)
  const { submitAccountMutation, isSubmitting: isSubmittingMutation } = useSubmitAccount(); // using isSubmitting from the mutation hook
  const { register, handleSubmit, setError } = form;

  const onSubmit = async (data) => {
    try {
      await submitAccountMutation(data);
    } catch (error) {
      toast.error("Please correct the highlighted errors.");
    }
  };

  return (
    <div className="create-account-form">
      <h2>Create Account</h2>
      <p>Join us today and start building your future!</p>
      <form onSubmit={handleSubmit(onSubmit)} className="comment-form">
        {/* First and Last Name */}
        <div className="inputRow">
          <div className="inputboxWithError">
            <div className="inputBox">
              <input type="text" {...register("firstName")} />
              <label>First Name</label>
            </div>
            <span>{errors.firstName?.message}</span>
          </div>
          <div className="inputboxWithError">
            <div className="inputBox">
              <input type="text" {...register("lastName")} />
              <label>Last Name</label>
            </div>
            <span>{errors.lastName?.message}</span>
          </div>
        </div>

        {/* Email */}
        <div className="inputboxWithError">
          <div className="inputBox">
            <input type="email" {...register("email")} />
            <label>Email</label>
          </div>
          <span>{errors.email?.message}</span>
        </div>

        {/* Phone */}
        <div className="inputboxWithError">
          <div className="inputBox">
            <input type="tel" {...register("phone")} />
            <label>Phone Number</label>
          </div>
          <span>{errors.phone?.message}</span>
        </div>

        {/* Password and Confirm Password */}
        <div className="inputboxWithError">
          <div className="inputBox">
            <input type="password" {...register("password")} />
            <label>Password</label>
          </div>
          <span>{errors.password?.message}</span>
        </div>
        <div className="inputboxWithError">
          <div className="inputBox">
            <input type="password" {...register("confirmPassword")} />
            <label>Confirm Password</label>
          </div>
          <span>{errors.confirmPassword?.message}</span>
        </div>


        {/* Gender */}
        <div className="checkboxGroupWithError">

          <div className="checkboxGroup">
            <label htmlFor="gender" className="checkboxGroupLabelForGender">Gender</label>
            <div className="checkboxGroupOption">
              <label className="checkboxGroupFirstOption">
                <input type="radio" value="Male"  {...register("gender")} />
                Male
              </label>
              <label className="checkboxGroupSecoundOption">
                <input type="radio" value="Female"  {...register("gender")} />
                Female
              </label>
            </div>
            <br />
          </div>
          <span>{errors.gender?.message}</span>
        </div>

        {/* Terms and Conditions */}
        <div className="termsCheckboxWithErrors">
          <div className="termsCheckbox">
            <label>
              <input type="checkbox" {...register("terms")} />
              I accept the Terms and Conditions
            </label>
          </div>
          <span>{errors.terms?.message}</span>


        </div>


        {/* Submit Button with Loader */}
        <button
          type="submit"
          className="CreateAccountSubmitButton"
          disabled={isSubmittingMutation}  // Disable the button if the mutation is submitting
        >
          {isSubmittingMutation ? (
            <div className="loader"></div>  // Show a loader while submitting
          ) : (
            "Create Account"
          )}
        </button>
      </form>
    </div>
  );
}
