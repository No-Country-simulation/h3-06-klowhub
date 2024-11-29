'use client';

import { signIn } from '@/_lib/actions/auth.actions';
import SubmitButton from '@/components/ui/submitButton/SubmitButton';
import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';
import PassField from '../molecules/PassField/PassField';
import { Field } from '../ui';
import MessageField from '../ui/fields/MessageField/MessageField';
import TextLink from '../ui/links/textLink/TextLink';

const SingInForm = () => {
  const [state, action] = useFormState(signIn, undefined);
  const tValidation = useTranslations('Auth.ValidationMessages.user');
  const tAuth = useTranslations('Auth.form');
  return (
    <form action={action}>
      <div className="flex flex-col gap-3 pb-10 py-7 w-[420px]">
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
          href="/auth/signup"
          className="text-center pb-[50px] "
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
