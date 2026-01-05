import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useSubmitGetInTouchForm from '../hooks/useSubmitGetInTouchForm'; // Correct default import
import { talkWithUsSchema } from '../schema/TalkWithUsSchema'; // Adjust path if necessary
import { useDefineGetInTouchForm } from '../hooks/useDefineGetInTouchForm'; // Ensure this hook is defined and working
import '../CSS/GetInTouchForm.css';
import toast from 'react-hot-toast';
const GetInTouchForm = () => {
  // Define form state and validation from the custom hook
  const { register, handleSubmit, reset, formState } = useForm();
  const { form, isSubmitting, isDirty } = useDefineGetInTouchForm();
  const { SubmitGetInTouchFormMutation, isSubmissionPending } = useSubmitGetInTouchForm();

  // Submit handler for the form
  const onSubmit = (formData) => {
    try {
      SubmitGetInTouchFormMutation(formData);
    } catch (error) {
      toast.error('Please correct the highlighted errors.');
    }
  };

  // If the form is not ready or submitting, return loading state
  if (!form) {
    return <div>Loading...</div>; // or some other loading indicator
  }

  return (
    <>
      <span className="contactFormMainHeading">Talk with Us</span>
      <p>Building with passion, precision, and pride</p>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="inputRow">
          <div className="inputBox inputboxTop">
            <input {...form.register('name')} disabled={isSubmitting || isSubmissionPending} />
            <label>Name</label>
            <span>{form.formState.errors.name ? form.formState.errors.name.message : ''}</span>
          </div>

          <div className="inputBox inputboxTop">
            <input {...form.register('email')} disabled={isSubmitting || isSubmissionPending} />
            <label>Email</label>
            <span>{form.formState.errors.email ? form.formState.errors.email.message : ''}</span>
          </div>
        </div>

        <div className="inputRow">
          <div className="inputBox inputboxTop">
            <input {...form.register('mobile')} disabled={isSubmitting || isSubmissionPending} />
            <label>Mobile Number</label>
            <span>{form.formState.errors.mobile ? form.formState.errors.mobile.message : ''}</span>
          </div>

          <div className="inputBox inputboxTop">
            <input {...form.register('location')} disabled={isSubmitting || isSubmissionPending} />
            <label>Location</label>
            <span>
              {form.formState.errors.location ? form.formState.errors.location.message : ''}
            </span>
          </div>
        </div>

        <div className="inputBox inputBoxright">
          <textarea {...form.register('message')} disabled={isSubmitting || isSubmissionPending} />
          <label>Message</label>
          <span>{form.formState.errors.message ? form.formState.errors.message.message : ''}</span>
        </div>

        <div className="">
          <button
            className="GetInTouchFormSubmitButton"
            type="submit"
            disabled={isSubmitting || isSubmissionPending}
          >
            {isSubmitting || isSubmissionPending ? 'Submitting...' : 'Send Message'}
          </button>
        </div>
      </form>
    </>
  );
};

export default GetInTouchForm;
