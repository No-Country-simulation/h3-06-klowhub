import { createSession } from '@/_lib/actions/session';
import { redirect } from '@/i18n/routing';
import { getLocale } from 'next-intl/server';
import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new NextURL(req.url);
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');
  const userId = searchParams.get('userId');
  const userName = searchParams.get('userName');
  const role = searchParams.get('role');

  if (!accessToken || !refreshToken || !userId || !userName || !role) {
    return new Response(null, { status: 400 });
  }

  await createSession({
    user: {
      _id: userId,
      userName,
      role,
    },
    accessToken,
    refreshToken,
  });
  const locale = await getLocale();
  redirect({ href: '/', locale });
}
