import { getSession } from '@/_lib/modules/session';
import { Link } from '@/i18n/routing';

const SignInButton = async () => {
  const session = await getSession();

  return (
    <div className="flex items-center gap-2 ml-auto">
      {!session || !session.user ? (
        <>
          <Link href="/auth/signin">Sign In</Link>
          <Link href="/auth/signup">Sign Up</Link>
        </>
      ) : (
        <>
          <p>{session.user.fullName}</p>
          <a href="/api/auth/signout">Sign Out</a>
        </>
      )}
    </div>
  );
};

export default SignInButton;
