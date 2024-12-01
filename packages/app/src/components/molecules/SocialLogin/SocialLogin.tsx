import { BACKEND_URL } from '@/_lib';
import { useTranslations } from 'next-intl';
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiGoogleFill,
} from 'react-icons/ri';
import SocialLoginIcon from './SocialLoginIcon';

const SocialLogin = () => {
  const t = useTranslations('Auth.form');

  return (
    <div className="flex justify-center flex-col items-center gap-3 md:gap-6 text-sm w-full pb-10 ">
      <p>{t('continueWith') /*Or continue with?*/}</p>
      <div className="flex justify-center items-center flex-row gap-6">
        <SocialLoginIcon href={`${BACKEND_URL}/auth/google/login`}>
          <RiGoogleFill className="h-8 w-8 text-secondary-200" />
        </SocialLoginIcon>
        <SocialLoginIcon href={`${BACKEND_URL}/auth/facebook/login`}>
          <RiFacebookCircleFill className="h-8 w-8 text-secondary-200" />
        </SocialLoginIcon>
        <SocialLoginIcon href={`${BACKEND_URL}/auth/google/login`}>
          <RiGithubFill className="h-8 w-8 text-secondary-200" />
        </SocialLoginIcon>
      </div>
    </div>
  );
};

export default SocialLogin;
