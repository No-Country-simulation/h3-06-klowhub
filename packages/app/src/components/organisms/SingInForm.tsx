'use client';

import { signIn } from '@/_lib/actions/auth.actions';
import SubmitButton from '@/components/ui/submitButton/SubmitButton';
import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';
import { Field } from '../ui';
import TextLink from '../ui/links/textLink/TextLink';

const SingInForm = () => {
  const [state, action] = useFormState(signIn, undefined);
  const tValidation = useTranslations('Auth.ValidationMessages.user');
  const tAuth = useTranslations('Auth.form');
  return (
    <form action={action}>
      <div className="flex flex-col gap-3  pb-10">
        {state?.message && <p className="text-red-500">{state.message}</p>}
        <div>
          {/* <label htmlFor="email">Email</label> */}
          <Field
            type="text"
            name="email"
            id="email"
            placeholder={tAuth('placeholder.login.identifier')}
            colorState={state?.error?.email ? 'error' : 'default'}
          />
        </div>
        {state?.error?.email && (
          <p className="text-red-500">{tValidation(`${state.error.email}`)}</p>
        )}
        <div>
          {/* <label htmlFor="password">Contraseña</label> */}
          <Field
            type="password"
            name="password"
            id="password"
            placeholder={tAuth('password')}
          />
        </div>
        {state?.error?.password && (
          <p className="text-red-500">
            {tValidation(`${state.error.password}`)}
          </p>
        )}
        <TextLink
          variant="primary"
          size="sm"
          href="/auth/signup"
          className="text-center pb-[50px] "
        >
          Olvidé mi contraseña
        </TextLink>

        <SubmitButton>{tAuth('login')}</SubmitButton>
      </div>
    </form>
  );
};

export default SingInForm;
