'use server';

import { CourseSchema } from '@shared/validation/cours';
import { z } from 'zod';

type Inputs = z.infer<typeof CourseSchema>;
export async function addCours(data: Inputs) {
  const validationFields = CourseSchema.safeParse(data);

  if (validationFields.error) {
    return { success: false, error: validationFields.error.format() };
  }

  if (validationFields.success) {
    return {
      success: true,
      data: validationFields.data,
    };
  }
}
//   const t = await getTranslations('UserServerResponses');
//   let result: AxiosResponse;
//   try {
//     const response = await axios.post(`${BACKEND_URL}/auth/register`, {
//       fullName: formData.get('fullName') as string,
//       userName: formData.get('userName') as string,
//       email: formData.get('email') as string,
//       password: formData.get('password') as string,
//       // acceptSubscription: formData.get('acceptSubscription'),
//       termsAccepted: true,
//     });
//     result = response;
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error) && error.response?.status === 400) {
//       return { message: t('userAlreadyExists') };
//     }
//     return { message: `something went wrong: ${error}` };
//   }
//   console.log('SUCCESS STATUS', result?.status);
//   if (result && result?.status === 201) {
//     const locale = await getLocale();
//     redirect({ href: '/auth/register/success', locale });
//   }
// }
