import { getSales, TDataDashBoard } from '@/_lib/actions/dashboard/index';
import { getSession } from '@/_lib/actions/session';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { redirect } from '@/i18n/routing';
import { getLocale } from 'next-intl/server';

export default async function Page() {
  const session = await getSession();
  const locale = await getLocale();

  const res = await getSales();

  if (!session || !session.user) redirect({ href: '/auth/signin', locale });
  if (!session || !session.user || !(session.user.role !== 'admin'))
    redirect({ href: '/auth/signin', locale });

  return <Dashboard data={res.data as TDataDashBoard} />;
}
