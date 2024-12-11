'use client';

import { redirect } from '@/i18n/routing';
import { useLocale } from 'next-intl';

const LogoutButton = ({ onLogout }: { onLogout: () => Promise<void> }) => {
  const locale = useLocale();

  const logout = async () => {
    await onLogout();
    redirect({ href: '/auth/login', locale });
  };

  return (
    <button
      onClick={logout}
      className="mx-2 px-2 py-1 rounded-2xl text-inter text-base border font-medium cursor-pointer transition-colors duration-300 ease-in-out inline-flex items-center justify-center gap-[10px] text-gray-50 border-gray-50 bg-transparent hover:text-primary-lavander-100 hover:border-primary-lavander-100 active:text-primary-lavander-200 active:border-primary-lavander-200 disabled:bg-transparent disabled:border-gray-400 disabled:text-gray-400"
    >
      Desconectar
    </button>
  );
};

export default LogoutButton;
