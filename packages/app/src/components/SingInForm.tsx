'use client';
import { Link } from '@/i18n/routing';
import { signIn } from '@/_lib/services/auth';
import Input from '@/ui/input/Input';
import SubmitButton from '@/ui/submitButton/SubmitButton';
import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';

const SingInForm = () => {
  const [state, action] = useFormState(signIn, undefined);
  const t = useTranslations('ValidationMessages.user');
  return (
    <form action={action}>
      <div className="flex flex-col gap-4 pb-6">
        {state?.message && <p className="text-red-500">{state.message}</p>}
        <div>
          <label htmlFor="email">Email</label>
          <Input type="text" name="email" id="email" />
        </div>
        {state?.error?.email && (
          <p className="text-red-500">{t(`${state.error.email}`)}</p>
        )}
        <div>
          <label htmlFor="password">Password</label>
          <Input type="password" name="password" id="password" />
        </div>
        {state?.error?.password && (
          <p className="text-red-500">{t(`${state.error.password}`)}</p>
        )}
        <Link className="text-sm underline" href="/auth/signup">
          Forgot your password?
        </Link>
        <SubmitButton>Sign In</SubmitButton>
      </div>
    </form>
  );
};

export default SingInForm;
