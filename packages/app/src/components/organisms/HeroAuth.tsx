import { getTranslations } from 'next-intl/server';
import React, { FC } from 'react';

export type THeroAuth = { title: string; children: React.ReactNode };
const HeroAuth: FC<THeroAuth> = async ({ title, children }) => {
  const t = await getTranslations('Auth');
  return (
    <div className="flex-col w-2/4 items-center justify-center h-full py-[30px] ">
      <div className="flex flex-col items-left justify-center gap-10 p-[60px] w-[420px] font-semibold text-white">
        <p className="font-semibold text-[54px] leading-3">{title}</p>
        <p className="text-left font-semibold text-base">{children}</p>
      </div>
    </div>
  );
};

export default HeroAuth;
