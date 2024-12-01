import { cn } from '@/_lib';
import { Link } from '@/i18n/routing';
import { FC } from 'react';

export type THeaderLink = {
  children: React.ReactNode;
  href: string;
  className: string;
};
const HeaderLink: FC<THeaderLink> = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex h-8 p-[14px] justify-center items-center gap-[10px] text-gray-50',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
