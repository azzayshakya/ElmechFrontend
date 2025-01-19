// src/hooks/useDefineCreateAccountForm.js
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAccountSchema } from "../constants/createAccountSchema";

export const useDefineCreateAccountForm = () => {
  const form = useForm({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      gender: "",
      terms: false,
    },
  });

  const {
    formState: { errors, isSubmitting, isDirty },
  } = form;

  return { form, errors, isSubmitting, isDirty };
};
