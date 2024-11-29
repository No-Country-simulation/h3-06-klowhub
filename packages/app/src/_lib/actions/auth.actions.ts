'use server';
import { BACKEND_URL } from '@/_lib/config';
import { redirect } from '@/i18n/routing';
import { TFormState } from '@shared/types/formState';
import { SignInSchema, SignUpSchema } from '@shared/validation';
import axios from 'axios';
import { getLocale, getTranslations } from 'next-intl/server';
import { revalidatePath } from 'next/cache';
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
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/register`, {
      fullName: formData.get('fullName') as string,
      userName: formData.get('userName') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      // acceptSubscription: formData.get('acceptSubscription'),
      termsAccepted: true,
    });
  } catch (error) {
    console.log('error ---------------->', error);
  } finally {
    const t = await getTranslations('UserServerResponses');
    const locale = await getLocale();
    revalidatePath('/auth/login');
    redirect({ href: '/auth/login', locale });
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

  const response = await axios.post(`${BACKEND_URL}/auth/signin`, {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });
  const t = await getTranslations('UserServerResponses');

  if (response.status === 200) {
    const result = response.data;

    await createSession({
      user: {
        _id: result.user.id,
        userName: result.user.userName,
        role: result.user.role,
      },
      refreshToken: result.refreshToken,
      accessToken: result.accessToken,
    });

    //TODO: redirect to the last page visited and not only home

    const locale = await getLocale();
    redirect({ href: '/', locale });
  } else {
    return {
      message:
        response.status === 401 ? t('invalidCredentials') : response.statusText,
    };
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
