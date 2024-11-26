'use client';
import { signUp } from '@/_lib/actions/auth.actions';
import Input from '@/components/ui/fields/Input/Input';
import SubmitButton from '@/components/ui/submitButton/SubmitButton';
import { useFormState } from 'react-dom';
import { useTranslations } from 'next-intl';

const SingUpForm = () => {
  const [state, action] = useFormState(signUp, undefined);
  const t = useTranslations('ValidationMessages.user');
  return (
    <form action={action}>
      <div className="flex flex-col gap-4 pb-6">
        {state?.message && <p className="text-red-500">{state.message}</p>}
        <div>
          <label htmlFor="fullname">Full Name</label>
          <Input
            className="border rounded-md w-full p-2"
            type="text"
            name="fullname"
            id="fullname"
          />
        </div>
        {state?.error?.fullName && (
          <p className="text-red-500">{t(`${state.error.fullName}`)}</p>
        )}
        <div>
          <label htmlFor="username">User Name</label>
          <Input type="text" name="username" id="username" />
        </div>
        {state?.error?.userName && (
          <p className="text-red-500">{t(`${state.error.userName}`)}</p>
        )}
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
        <SubmitButton>Sign Up</SubmitButton>
      </div>
    </form>
  );
};

export default SingUpForm;
