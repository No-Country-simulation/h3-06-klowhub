'use client';
import { signUp } from '@/_lib/actions/auth.actions';
import SubmitButton from '@/components/ui/submitButton/SubmitButton';
import { useFormState } from 'react-dom';
import { useTranslations } from 'next-intl';
import { Field } from '../../ui';
import TextLink from '../../ui/links/textLink/TextLink';
import MessageField from '../../ui/fields/MessageField/MessageField';
import PassField from '@/components/molecules/PassField/PassField';
import CheckField from '@/components/ui/fields/CheckField/CheckField';

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
            colorState={state?.error?.fullName ? 'error' : 'default'}
          />{' '}
          {state?.error?.fullName && (
            <MessageField variant="error">
              {tValidation(`${state.error.fullName}`)}
            </MessageField>
          )}
        </div>

        <div>
          <Field
            type="text"
            name="userName"
            id="userName"
            placeholder={tAuth('userName')}
            colorState={state?.error?.email ? 'error' : 'default'}
          />
          {state?.error?.userName && (
            <MessageField variant="error">
              {tValidation(`${state.error.userName}`)}
            </MessageField>
          )}
        </div>

        <div>
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

        <div>
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

        <div>
          <PassField
            name="confirmPassword"
            id="confirmPassword"
            placeholder={tAuth('confirmPassword')}
          />
          {state?.error?.confirmPassword && (
            <MessageField variant="error">
              {tValidation(`${state.error.confirmPassword}`)}
            </MessageField>
          )}
        </div>

        <div className="flex flex-row gap-4 pt-5 pb-12 items-center">
          <CheckField name="acceptSubscription" id="acceptSubscription" />
          <p>{tAuth('receiveSubscription')}</p>
        </div>
        <SubmitButton>{tAuth('register')}</SubmitButton>
        <div className="text-sm w-[350px] text-center">
          {tAuth('conditions.accept')}{' '}
          <TextLink variant="secondary" href="#">
            {tAuth('conditions.terms')}
          </TextLink>{' '}
          {tAuth('conditions.and')}{' '}
          <TextLink variant="secondary" href="#">
            {tAuth('conditions.privacy')}
          </TextLink>
        </div>
      </div>
    </form>
  );
};

export default SingUpForm;
