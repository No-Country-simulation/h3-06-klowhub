'use server';
import { getLocale, getTranslations } from 'next-intl/server';
//import { BACKEND_URL } from '@/_lib/constants';
import { redirect } from '@/i18n/routing';
import { TFormState } from '@shared/types/formState';
import { SignInSchema, SignUpSchema } from '@shared/validation';
import axios from 'axios';
import { createSession, deleteSession } from '../actions/session';
import { BACKEND_URL } from '../config';

export async function signUp(
  state: TFormState,
  formData: FormData,
): Promise<TFormState> {
  const validationFields = SignUpSchema.safeParse({
    fullname: formData.get('fullname') as string,
    username: formData.get('username') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (!validationFields.success) {
    return {
      error: validationFields.error?.flatten().fieldErrors,
    };
  }

  const response = await axios.post(`${BACKEND_URL}/auth/signup`, {
    fullname: formData.get('fullname'),
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    termsAccepted: true,
  });

  const t = await getTranslations('UserServerResponses');
  const locale = await getLocale();

  if (response.status === 200) {
    redirect({ href: '/auth/signin', locale });
  } else {
    return {
      message:
        response.status === 409 ? t('userAlreadyExists') : response.statusText,
    };
  }
}

export async function signIn(formData: FormData): Promise<TFormState> {
  const validationFields = SignInSchema.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (!validationFields.success) {
    return {
      error: validationFields.error?.flatten().fieldErrors,
    };
  }

  // const response = await fetch(`${BACKEND_URL}/auth/signin`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     email: formData.get('email') as string,
  //     password: formData.get('password') as string,
  //   }),
  // });
  const t = await getTranslations('UserServerResponses');

  const response = {
    ok: true,
    status: 200,
    statusText: t('userLoggedIn'),
    data: {
      user: {
        _id: 'id',
        userName: 'maria123',
        role: 'ADMIN',
      },
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
    },
  };

  if (response.ok) {
    const result = response.data;
    //TODO: create a session for authenticated user
    await createSession({
      user: {
        _id: result.user._id,
        userName: result.user.userName,
        role: result.user.role,
      },
      refreshToken: result.refreshToken,
      accessToken: result.accessToken,
    });
  } else {
    return {
      message:
        response.status === 401 ? t('invalidCredentials') : response.statusText,
    };
  }
}

export async function signout() {
  // TODO: Call the api for signout
  await deleteSession();
}
