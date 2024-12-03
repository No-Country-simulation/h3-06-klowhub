import { getSession } from '@/_lib/actions/session';
import { redirect } from '@/i18n/routing';
import { getLocale } from 'next-intl/server';
import { getSales } from "@/_lib/actions/dashboard/index";
import { Dashboard } from '@/components/dashboard/Dashboard';

export default async function Page() {
    const session = await getSession();
    const locale = await getLocale();

    const res: any = await getSales();

    if (!session || !session.user) redirect({ href: '/auth/signin', locale });
    if (!session || !session.user || !(session.user.role !== 'admin'))
        redirect({ href: '/auth/signin', locale });

    return (
        <Dashboard data={res.data} />
    );
};
