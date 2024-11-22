import { destroySession } from '@/_lib/modules/session';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  await destroySession();
  revalidatePath('/');
  return NextResponse.redirect(new URL('/auth/signin', req.url));
}
