import { getSession } from '@/_lib';
import HeaderLink from '@/components/ui/links/headerLink/HeaderLink';
import { getTranslations } from 'next-intl/server';
import { LuBell, LuMail, LuShoppingCart } from 'react-icons/lu';
import SignInButton from '../SignInButton/SignInButton';
import SwitcherButtonWrapper from '../SwitcherButtonWrapper/SwitcherButtonWrapper';
import ToolsUserIcon from './ToolsUserIcon';

const MenuBar = async () => {
  const t = await getTranslations('Appbar');
  const session = await getSession();
  const isSeller = session?.user?.roles?.includes('VENDEDOR');

  return (
    <div className="w-full h-full md:flex md:grow md:justify-between">
      <div className="flex flex-col gap-3 pt-6 text-black md:pt-0 md:justify-start md:items-center md:flex-row md:text-white ">
        <HeaderLink
          seller={isSeller ? true : false}
          href={'/courses'}
          linkSeller={'/courses/publish'}
        >
          {t('courses')}
        </HeaderLink>
        <HeaderLink seller={isSeller ? true : false} href="/applications">
          {t('applications')}
        </HeaderLink>
        <HeaderLink seller={isSeller ? true : false} href="/projects">
          {t('projects')}
        </HeaderLink>
        <HeaderLink seller={isSeller ? true : false} href="/mentorships">
          {t('mentorships')}
        </HeaderLink>
        {isSeller && (
          <HeaderLink seller={isSeller ? true : false} href="/dashboard">
            {t('dashboard')}{' '}
          </HeaderLink>
        )}
      </div>

      <div className="flex w-full justify-center items-center self-center gap-3 pt-8 md:w-auto md:pt-0">
        {session && (
          <div className="flex w-full justify-center items-center gap-3">
            <div className="flex gap-3">
              <ToolsUserIcon isSeller={isSeller ? true : false}>
                <LuShoppingCart className="w-6 h-6" />
              </ToolsUserIcon>
              <LuBell className="w-6 h-6" />
              <LuMail className="w-6 h-6" />
            </div>
            <div>
              <p>{session.user.userName}</p>
            </div>
          </div>
        )}
        {isSeller && (
          <SwitcherButtonWrapper
            leftComponent="Explorador"
            rightComponent="Vendedor"
            variant="secondary"
          />
        )}
        <SignInButton />
      </div>
    </div>
  );
};

export default MenuBar;
