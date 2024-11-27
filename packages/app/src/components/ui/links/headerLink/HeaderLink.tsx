import { Link } from '@/i18n/routing';
import { FC } from 'react';

export type THeaderLink = { children: React.ReactNode; href: string };
const HeaderLink: FC<THeaderLink> = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="flex h-8 p-[14px] justify-center items-center gap-[10px] text-gray-50"
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
