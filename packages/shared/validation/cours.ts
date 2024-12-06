import { z } from 'zod';

// Validation for register (request)
export const PublishCoursSchema = z.object({
  /*prettier-ignore*/
  fullName: z.string() 
    .min(3, { message: 'fullname.minLength' }),
});
