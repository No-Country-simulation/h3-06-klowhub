'use server';
import { getTranslations, getLocale } from 'next-intl/server';
//import { BACKEND_URL } from '@/_lib/constants';
import { TFormState, TSignInUser, TSignUpUser } from '@shared/types/formState';
import { SignInSchema, SignUpSchema } from '@shared/validation';
import { redirect } from '@/i18n/routing';
import { createSession } from '../modules/session';

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
      error: validationFields.error?.flatten().fieldErrors as TSignUpUser,
    };
  }

  // const response = await fetch(`${BACKEND_URL}/auth/signup`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     fullname: formData.get('fullname') as string,
  //     username: formData.get('username') as string,
  //     email: formData.get('email') as string,
  //     password: formData.get('password') as string,
  //   }),
  // });
  const t = await getTranslations('UserServerResponses');
  const locale = await getLocale();
  const response = {
    ok: true,
    status: 200,
    statusText: 'userCreated',
  };

  if (response.ok) {
    redirect({ href: '/auth/signin', locale });
  } else {
    return {
      message:
        response.status === 409 ? t('userAlreadyExists') : response.statusText,
    };
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
      error: validationFields.error?.flatten().fieldErrors as TSignInUser,
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
        id: 'id',
        username: 'maria123',
        fullname: 'Maria Martinez',
        email: 'mariamartinez@klowhub.com',
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
        id: result.user.id,
        username: result.user.username,
        fullname: result.user.fullname,
        email: result.user.email,
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

export async funtion signout() {
  
}