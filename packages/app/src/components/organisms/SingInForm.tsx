'use client';
import { signIn } from '@/_lib/actions/auth.actions';
import { PassField } from '@/components/molecules';
import { Field, MessageField, SubmitButton, TextLink } from '@/components/ui';
import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';

const SingInForm = () => {
  const [state, action] = useFormState(signIn, undefined);
  const tValidation = useTranslations('Auth.ValidationMessages.user');
  const tAuth = useTranslations('Auth.form');
  return (
    <form action={action}>
      <div className="flex flex-col gap-3 pb-10 py-7 min-w-[320px] max-w-[420px] md:w-[420px] justify-center items-center">
        {state?.message && <p className="text-red-500">{state.message}</p>}
        <div className="flex flex-col">
          <Field
            type="text"
            name="email"
            id="email"
            placeholder={tAuth('email')}
            colorState={state?.error?.email ? 'error' : 'default'}
          />
          {state?.error?.email && (
            <MessageField variant="error">
              {tValidation(`${state.error.email}`)}
            </MessageField>
          )}
        </div>

        <div className="flex flex-col">
          <PassField
            name="password"
            id="password"
            placeholder={tAuth('password')}
          />{' '}
          {state?.error?.password && (
            <MessageField variant="error">
              {tValidation(`${state.error.password}`)}
            </MessageField>
          )}
        </div>

        <TextLink
          variant="primary"
          size="sm"
          href="/auth/register"
          className="text-center pb-8 md:pb-[50px] "
        >
          {tAuth('forgotPassword')}
        </TextLink>

        <div className="flex justify-center items-center">
          <SubmitButton>{tAuth('login')}</SubmitButton>
        </div>
      </div>
    </form>
  );
};

export default SingInForm;
