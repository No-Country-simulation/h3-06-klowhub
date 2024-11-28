import { z } from 'zod';

// Validation for register (request)
export const SignUpSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'fullname.minLength' }) //"Full name must be at least 3 characters long"
    .max(50, { message: 'fullname.maxLength' }), //"Full name must be at least 3 characters long"

  userName: z
    .string()
    .min(3, { message: 'username.minLength' }) //"User name must be at least 3 characters"
    .max(50, { message: 'username.maxLength' }) //"User name must be at least 3 characters"
    .trim(),

  email: z.string().email({ message: 'email.invalid' }).trim(),

  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
      {
        message: 'password.invalid',
      },
    ) //"Password must contain at least 8 character, no more than 50 characters, at least one uppercase letter, at least one lowercase letter, at least one number and at least one special character"
    .trim(),

  confirmPassword: z
    .string()
    .trim()
    .refine((data) => data.password === data.confirmPassword, {
      message: 'confirmPassword.noMatch',
    }),

  termAccepted: z.boolean({ required_error: 'acceptTerms.required' }),
});

// Validation for login (request)
export const SignInSchema = z.object({
  email: z.string().email({ message: 'email.invalid' }).trim(),
  password: z.string().min(1, { message: 'password.required' }).trim(),
});
