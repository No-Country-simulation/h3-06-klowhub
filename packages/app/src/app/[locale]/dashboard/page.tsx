import { getSession } from '@/_lib/modules/session';
import { redirect } from '@/i18n/routing';
import { getLocale } from 'next-intl/server';

const Dashboard = async () => {
  const session = await getSession();
  const locale = await getLocale();

  //  if (!session || !session.user) redirect({ href: '/auth/signin', locale });
  if (!session || !session.user || !(session.user.role !== 'admin'))
    redirect({ href: '/auth/signin', locale });

  return <div>Dashboard</div>;
};

export default Dashboard;
