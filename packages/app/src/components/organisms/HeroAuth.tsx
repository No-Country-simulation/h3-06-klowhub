import { cn } from '@/_lib';
import React from 'react';

export type THeroAuth = {
  title: string;
  children: React.ReactNode;
  className?: string;
};
const HeroAuth = ({ title, children, className }: THeroAuth) => {
  return (
    <div
      className={cn(
        'w-2/4 items-center justify-center h-full py-[30px]',
        className,
      )}
    >
      <div className="flex flex-col items-left justify-center gap-10 p-[60px] w-[420px] font-semibold text-white">
        <p className="font-semibold text-[54px] leading-3">{title}</p>
        <p className="text-left font-semibold text-base">{children}</p>
      </div>
    </div>
  );
};

export default HeroAuth;
