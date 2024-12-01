'use server';
import { BACKEND_URL } from '@/_lib/config';
import { redirect } from '@/i18n/routing';
import { TFormState } from '@shared/types/formState';
import { SignInSchema, SignUpSchema } from '@shared/validation';
import axios, { AxiosResponse } from 'axios';
import { getLocale, getTranslations } from 'next-intl/server';
import { createSession } from './session';

export async function signUp(
  state: TFormState,
  formData: FormData,
): Promise<TFormState> {
  const validationFields = SignUpSchema.safeParse({
    fullName: formData.get('fullName') as string,
    userName: formData.get('userName') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  });

  if (!validationFields.success) {
    return {
      error: validationFields.error?.flatten().fieldErrors,
    };
  }
  const t = await getTranslations('UserServerResponses');
  let result: AxiosResponse;
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/register`, {
      fullName: formData.get('fullName') as string,
      userName: formData.get('userName') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      // acceptSubscription: formData.get('acceptSubscription'),
      termsAccepted: true,
    });
    result = response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      return { message: t('userAlreadyExists') };
    }
    return { message: `something went wrong: ${error}` };
  }
  console.log('SUCCESS STATUS', result?.status);
  if (result && result?.status === 201) {
    const locale = await getLocale();
    redirect({ href: '/auth/register/success', locale });
  }
}

export async function signIn(
  state: TFormState,
  formData: FormData,
): Promise<TFormState> {
  const validationFields = SignInSchema.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (!validationFields.success) {
    return {
      error: validationFields.error?.flatten().fieldErrors,
    };
  }
  const t = await getTranslations('UserServerResponses');
  let result: AxiosResponse;
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/login`, {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    });
    result = response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      console.log('ERROR', error);
      return { message: t('invalidCredentials') };
    }
    console.log(error);
    return { message: `something went wrong: ${error}` };
  }
  console.log('SUCCESS STATUS', result?.status);

  if (result && result?.status === 201) {
    console.log(result.data);
    const data = result.data;
    // await createSession({
    //   user: {
    //     _id: data.user._id || '1',
    //     userName: data.user.userName || 'maria',
    //     role: data.user.role || 'USER_ESTANDAR',
    //   },
    //   refreshToken: data.refreshToken || 'refreshToken',
    //   accessToken: data.accessToken,
    // });

    // await createSession({
    //   user: {
    //     _id: data.user.id,
    //     userName: data.user.userName,
    //     role: data.user.role,
    //   },
    //   refreshToken: data.refreshToken,
    //   accessToken: data.accessToken,
    // });

    await createSession({
      user: {
        _id: 'uno',
        userName: 'maria',
        role: 'VENDEDOR',
      },
      refreshToken: 'refreshToken',
      accessToken: data.accessToken,
    });
    //TODO: redirect to the last page visited and not only home

    const locale = await getLocale();
    redirect({ href: '/', locale });
  }
}

export const refreshToken = async (oldRefreshToken: string) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/refresh`, {
      refreshToken: oldRefreshToken,
    });

    if (response.status >= 400) {
      throw new Error('Failed to refresh token' + response.statusText);
    }
    const { refreshToken, accessToken } = JSON.parse(response.data);

    // update session with new tokens
    const updateRes = await fetch('http://localhost:3000/api/auth/update', {
      method: 'POST',
      body: JSON.stringify({
        accessToken,
        refreshToken,
      }),
    });

    if (updateRes.status >= 400) throw new Error('Failed to update the tokens');
    return accessToken;
  } catch (error) {
    console.error('Refresh token failed:', error);
    return null;
  }
};
