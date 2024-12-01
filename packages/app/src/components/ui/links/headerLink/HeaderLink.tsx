import { cn } from '@/_lib';
import { Link } from '@/i18n/routing';
import { FC } from 'react';

export type THeaderLink = {
  children?: React.ReactNode;
  href: string;
  className?: string;
};
const HeaderLink: FC<THeaderLink> = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-inherit px-4 justify-start w-full hover:bg-secondary-200 md:hover:bg-transparent md:hover:text-primary-lavander-200 md:justify-center md:w-auto md:px-0 lg:px-4 flex h-8 p-[14px] items-center gap-[10px] md:text-gray-50',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
