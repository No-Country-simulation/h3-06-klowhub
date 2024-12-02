import { z } from 'zod';

// Validation for register (request)
export const SignUpSchema = z.object({
  /*prettier-ignore*/
  fullName: z.string() 
    .min(3, { message: 'fullname.minLength' })
    .max(50, { message: 'fullname.maxLength' }), //"Full name must be at least 3 characters long"
  /*prettier-ignore*/
  userName: z.string()
    .min(3, { message: 'username.minLength' }) //"User name must be at least 3 characters"
    .max(50, { message: 'username.maxLength' }) //"User name must be at least 3 characters"
    .trim(),
  /*prettier-ignore*/
  email: z.string().email({ message: 'email.invalid' }).trim(),
  /*prettier-ignore*/
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{message: 'password.invalid'}).trim(), //"Password must contain at least 8 character, no more than 50 characters, at least one uppercase letter, at least one lowercase letter, at least one number and at least one special character"

  /*prettier-ignore*/
  confirmPassword: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{  message: 'password.invalid'}) .trim(), //"Password must contain at least 8 character, no more than 50 characters, at least one uppercase letter, at least one lowercase letter, at least one number and at least one special character"
});
// .superRefine(({ confirmPassword, password }, ctx) => {
//   if (confirmPassword !== password) {
//     ctx.addIssue({
//       code: 'custom',
//       message: 'confirmPassword.invalid',
//       path: ['confirmPassword'],
//     });
//   }
// });

// Validation for login (request)
export const SignInSchema = z.object({
  email: z.string().email({ message: 'email.invalid' }).trim(),
  password: z.string().min(1, { message: 'password.required' }).trim(),
});
