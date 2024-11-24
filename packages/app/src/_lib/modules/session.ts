'use server';
import { TLoggedUser as TSession } from '@shared/types/user';
import { jwtVerify, SignJWT } from 'jose';
import { SESSION_SECRET_KEY } from '../config/constants';
//import { redirect } from '@/i18n/routing';
// import { getLocale, getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';

const encodedKey = new TextEncoder().encode(SESSION_SECRET_KEY!);

export async function createSession(payload: TSession) {
  const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); //7 days
  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiredAt)
    .sign(encodedKey);

  cookies().set('session', session, {
    httpOnly: true,
    // secure: true,
    expires: expiredAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function getSession() {
  const cookie = cookies().get('session')?.value;
  if (!cookie) {
    return null;
  }
  try {
    const { payload } = await jwtVerify(cookie, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    // const t = await getTranslations('UserServerResponses');
    console.error('sessionVerifyError', error);
    // const locale = await getLocale();
    // redirect({ href: '/auth/signin', locale });
  }
}

export async function deleteSession() {
  await cookies().delete('session');
}
