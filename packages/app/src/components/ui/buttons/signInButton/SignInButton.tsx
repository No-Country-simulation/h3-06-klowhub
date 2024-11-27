import { getSession } from '@/_lib/actions/session';
import ButtonLink from '../../links/buttonLink/ButtonLink';
import { getTranslations } from 'next-intl/server';

const SignInButton = async () => {
  const session = await getSession();
  const t = await getTranslations('Appbar');

  return (
    <div className="flex items-center gap-2 ml-auto">
      {!session || !session.user ? (
        <>
          <ButtonLink size="xs" variant="primary" href="/auth/signin">
            {t('login')}
          </ButtonLink>
          <ButtonLink size="xs" variant="secondary" href="/auth/signup">
            {t('register')}
          </ButtonLink>
        </>
      ) : (
        <>
          <p>{session.user.userName}</p>
          <a href="/api/auth/signout">Sign Out</a>
        </>
      )}
    </div>
  );
};

export default SignInButton;
