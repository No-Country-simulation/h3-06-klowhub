'use server';
import { getTranslations, getLocale } from 'next-intl/server';
//import { BACKEND_URL } from '@/_lib/constants';
import { TFormState } from '@shared/types/formState';
import { SignInSchema, SignUpSchema } from '@shared/validation';
import { redirect } from '@/i18n/routing';
import { createSession, updateTokens } from '../modules/session';

export async function signUp(
  state: TFormState,
  formData: FormData,
): Promise<TFormState> {
  const validationFields = SignUpSchema.safeParse({
    fullName: formData.get('fullName') as string,
    userName: formData.get('userName') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (!validationFields.success) {
    return {
      error: validationFields.error?.flatten().fieldErrors,
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
      error: validationFields.error?.flatten().fieldErrors,
    };
  }

  // TODO: Call the api for singin
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
        userName: 'maria',
        role: 'admin',
      },
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
    },
  };

  if (response.ok) {
    const result = response.data;

    await createSession({
      user: {
        id: result.user.id,
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
    // const response = await fetch(`${BACKEND_URL}/auth/refresh`, {
    // method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // body: JSON.stringify({
    //   refreshToken: oldRefreshToken,
    // }),

    const response = {
      ok: true,
      status: 200,
      statusText: '',
      data: JSON.stringify({
        refreshToken: 'refreshToken',
        accessToken: 'accessToken',
      }),
    };

    if (!response.ok) {
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
    if (!updateRes.ok) throw new Error('Failed to update the tokens');

    return accessToken;
  } catch (error) {
    console.error('Refresh token failed:', error);
    return null;
  }
};
