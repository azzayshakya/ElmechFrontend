import { z } from 'zod';

export const createAccountSchema = z
  .object({
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z
      .string()
      .regex(/^\d{10}$/, 'Phone number must be 10 digits')
      .optional(),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string(),
    gender: z.enum(['Male', 'Female'], 'Please select a gender'),
    terms: z.boolean().refine((val) => val === true, {
      message: 'You must accept the Terms and Conditions',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
