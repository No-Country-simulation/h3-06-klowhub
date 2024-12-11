import { logoutAction } from '@/_lib/actions/auth.actions';
import { getSession } from '@/_lib/actions/session';
import { getTranslations } from 'next-intl/server';
import ButtonLink from '../../ui/links/buttonLink/ButtonLink';
import LogoutButton from './LogoutButton'; // Importa el componente del cliente

const SignInButton = async () => {
  const t = await getTranslations('Appbar');
  const session = await getSession();
  console.log('SESSION', session);

  return (
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
          <LogoutButton onLogout={logoutAction} />{' '}
          {/* Usa el botón de cliente */}
        </>
      )}
    </div>
  );
};

export default SignInButton;
