import { getSession } from '@/_lib/actions/session';
import SwitcherButtonWrapper from '@/components/molecules/SwitcherButtonWrapper/SwitcherButtonWrapper';
import { Link, redirect } from '@/i18n/routing';

import { getTranslations } from 'next-intl/server';
import { LuBell, LuMail, LuShoppingCart } from 'react-icons/lu';
import ButtonLink from '../../ui/links/buttonLink/ButtonLink';

const SignInButton = async () => {
  const t = await getTranslations('Appbar');
  const session = await getSession();
  console.log('SESSION', session);

  const handleLogGoogle = () => {
    redirect({ href: '/auth/google/callback', locale: 'es' });
  };

  return (
    <>
      <div className="flex items-center gap-2 m-auto ">
        {!session || !session.user ? (
          <>
            <ButtonLink size="xs" variant="quaternary" href="/auth/login">
              {t('login')}
            </ButtonLink>
            <ButtonLink size="xs" variant="secondary" href="/auth/register">
              {t('register')}
            </ButtonLink>
          </>
        ) : (
          <>
            <div className="flex flex-row items-center gap-2 p-2">
              <Link
                href="user/cart"
                className="flex justify-center items-center h-11 w-10"
              >
                <LuShoppingCart className="h-6 w-6" />
              </Link>
              <Link
                href="user/notifications"
                className=" flex justify-center items-center  h-11 w-10"
              >
                <LuBell className="h-6 w-6" />
              </Link>
              <Link
                href="user/messages"
                className="flex justify-center items-center h-11 w-10"
              >
                <LuMail className="h-6 w-6" />
              </Link>
            </div>
            <p>{session.user.userName}</p>

            <SwitcherButtonWrapper
              className="mx-7 justify-center items-center hidden lg:flex"
              leftComponent="Explorador"
              rightComponent="Vendedor"
              variant="secondary"
              isActive={true}
            />
            <button
              className="mx-2 px-2 py-1 rounded-2xl text-inter text-base border font-medium cursor-pointer transition-colors duration-300 ease-in-out inline-flex items-center justify-center gap-[10px] 'text-gray-50  border-gray-50 bg-transparent hover:text-primary-lavander-100  hover:border-primary-lavander-100 active:text-primary-lavander-200 active:border-primary-lavander-200 disabled:bg-transparent disabled:border-gray-400 disabled:text-gray-400  "
              onClick={handleLogGoogle}
            >
              Desconectar
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default SignInButton;
