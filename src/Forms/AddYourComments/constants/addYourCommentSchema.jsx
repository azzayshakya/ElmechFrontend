import { z } from "zod";

export const commentSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  phone: z
    .string()
    .regex(/^\d{10,15}$/, "Invalid phone number")
    .nonempty("Phone number is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  profession: z.string().nonempty("Profession is required"),
  comment: z.string().min(10, "Comment must be at least 10 characters long"),
  gender: z.enum(["Male", "Female"], "Gender is required"),
});
