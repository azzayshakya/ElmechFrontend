import React from 'react';
import { useDefineCommentForm } from '../hooks/useDefineCommentForm';
import { useSubmitComment } from '../hooks/useSubmitComment';
import '../css/AddYourComment.css';

const AddYourCommentForm = () => {
  const { form, isSubmitting } = useDefineCommentForm();
  const { submitCommentMutation, isSuccess, isError, error } = useSubmitComment();
  const { register, handleSubmit, formState } = form;

  const onSubmit = async (data) => {
    try {
      await submitCommentMutation(data);
    } catch (error) {
      // Handle submission errors
    }
  };

  return (
    <div className="add-your-comment">
      <h2>Share Your Experience</h2>
      <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputRow">
          <div className="inputboxWithErrorAtAddYourComments">
            <div className="inputBox">
              <input type="text" {...register('firstName')} />
              <label>First Name</label>
            </div>
            <span>{formState.errors.firstName?.message}</span>
          </div>
          <div className="inputboxWithErrorAtAddYourComments">
            <div className="inputBox">
              <input type="text" {...register('lastName')} />
              <label>Last Name</label>
            </div>
            <span>{formState.errors.lastName?.message}</span>
          </div>
        </div>
        <div className="inputboxWithErrorAtAddYourComments">
          <div className="inputBox">
            <input type="tel" {...register('phone')} />
            <label>Phone Number</label>
          </div>
          <span>{formState.errors.phone?.message}</span>
        </div>
        <div className="inputboxWithErrorAtAddYourComments">
          <div className="inputBox">
            <input type="email" {...register('email')} />
            <label>Email</label>
          </div>
          <span>{formState.errors.email?.message}</span>
        </div>
        <div className="inputboxWithErrorAtAddYourComments">
          <div className="inputBox">
            <input type="text" {...register('profession')} />
            <label>Profession</label>
          </div>
          <span>{formState.errors.profession?.message}</span>
        </div>
        <div className="checkboxGroupWithError">
          <div className="checkboxGroup">
            <label htmlFor="gender" className="checkboxGroupLabelForGender">
              Gender
            </label>
            <div className="checkboxGroupOption">
              <label className="checkboxGroupFirstOption">
                <input type="radio" value="Male" {...register('gender')} />
                Male
              </label>
              <label className="checkboxGroupSecoundOption">
                <input type="radio" value="Female" {...register('gender')} />
                Female
              </label>
            </div>
            <br />
          </div>
          <span>{formState.errors.gender?.message}</span>
        </div>
        <div className="inputboxWithErrorAtAddYourComments">
          <div className="inputBox">
            <textarea {...register('comment')} />
            <label>Comment</label>
          </div>
          <span>{formState.errors.comment?.message}</span>
        </div>
        <button className="AddYourCommentsButtonMain" type="submit" disabled={isSubmitting}>
          {isSubmitting ? <div className="loader"></div> : 'Add Your Comment'}
        </button>
      </form>
    </div>
  );
};

export default AddYourCommentForm;
