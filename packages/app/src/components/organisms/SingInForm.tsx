'use client';

import { signIn } from '@/_lib/actions/auth.actions';
import SubmitButton from '@/components/ui/submitButton/SubmitButton';
import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';
import { Field } from '../ui';
import TextLink from '../ui/links/textLink/TextLink';
import PassField from '../molecules/PassField/PassField';
import MessageField from '../ui/fields/MessageField/MessageField';

const SingInForm = () => {
  const [state, action] = useFormState(signIn, undefined);
  const tValidation = useTranslations('Auth.ValidationMessages.user');
  const tAuth = useTranslations('Auth.form');
  return (
    <form action={action}>
      <div className="flex flex-col gap-3  pb-10">
        {state?.message && <p className="text-red-500">{state.message}</p>}
        <div>
          <Field
            type="text"
            name="email"
            id="email"
            placeholder={tAuth('placeholder.login.identifier')}
            colorState={state?.error?.email ? 'error' : 'default'}
          />

          {state?.error?.email && (
            <MessageField variant="error">
              {tValidation(`${state.error.email}`)}
            </MessageField>
          )}
        </div>

        <div>
          <PassField
            name="password"
            id="password"
            placeholder={tAuth('password')}
          />
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

        <SubmitButton>{tAuth('login')}</SubmitButton>
      </div>
    </form>
  );
};

export default SingInForm;
