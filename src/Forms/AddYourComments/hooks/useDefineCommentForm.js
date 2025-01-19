// src/hooks/useCommentForm.js
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "../constants/addYourCommentSchema";

export const useDefineCommentForm = () => {
  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      profession: "",
      comment: "",
      image: "",
    },
  });

  const {
    formState: { isSubmitting, isDirty },
  } = form;

  return { form, isSubmitting, isDirty };
};
