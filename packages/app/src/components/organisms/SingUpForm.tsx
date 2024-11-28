'use client';
import { signUp } from '@/_lib/actions/auth.actions';
import SubmitButton from '@/components/ui/submitButton/SubmitButton';
import { useFormState } from 'react-dom';
import { useTranslations } from 'next-intl';
import { Field } from '../ui';
import TextLink from '../ui/links/textLink/TextLink';

const SingUpForm = () => {
  const [state, action] = useFormState(signUp, undefined);
  const tValidation = useTranslations('Auth.ValidationMessages.user');
  const tAuth = useTranslations('Auth.form');
  return (
    <form action={action}>
      <div className="flex flex-col gap-3  pb-10">
        {state?.message && <p className="text-red-500">{state.message}</p>}
        <div>
          <Field
            type="text"
            name="fullName"
            id="fullName"
            placeholder={tAuth('fullName')}
            colorState={state?.error?.email ? 'error' : 'default'}
          />
        </div>
        {state?.error?.fullName && (
          <p className="text-red-500">
            {tValidation(`${state.error.fullName}`)}
          </p>
        )}
        <div>
          <Field
            type="text"
            name="userName"
            id="userName"
            placeholder={tAuth('userName')}
            colorState={state?.error?.email ? 'error' : 'default'}
          />
        </div>
        {state?.error?.userName && (
          <p className="text-red-500">
            {tValidation(`${state.error.userName}`)}
          </p>
        )}
        <div>
          <Field
            type="text"
            name="email"
            id="email"
            placeholder={tAuth('email')}
            colorState={state?.error?.email ? 'error' : 'default'}
          />
        </div>
        {state?.error?.email && (
          <p className="text-red-500">{tValidation(`${state.error.email}`)}</p>
        )}
        <div>
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
        <div>
          <Field
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder={tAuth('confirmPassword')}
          />
        </div>
        {state?.error?.confirmPassword && (
          <p className="text-red-500">
            {tValidation(`${state.error.confirmPassword}`)}
          </p>
        )}
        <div className="flex flex-row gap-4 pt-5 pb-12 items-center">
          <input
            type="checkbox"
            name="acceptSubscription"
            id="acceptSubscription"
          />
          <p>Quiero recibir novedades y consejos de la plataforma</p>
        </div>
        <SubmitButton>{tAuth('register')}</SubmitButton>
        <div className="text-sm w-[350px] text-center">
          Al registrarse, aceptas nuestras{' '}
          <TextLink variant="secondary" href="#">
            Condiciones de uso
          </TextLink>{' '}
          y{' '}
          <TextLink variant="secondary" href="#">
            Politicas de privacidad
          </TextLink>
          .
        </div>
      </div>
    </form>
  );
};

export default SingUpForm;
