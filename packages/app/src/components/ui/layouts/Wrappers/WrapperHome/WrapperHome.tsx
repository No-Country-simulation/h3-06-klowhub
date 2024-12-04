import { FC } from 'react';
import { LuPlus } from 'react-icons/lu';
import ButtonLink from '../../../links/buttonLink/ButtonLink';

export type TWrapperHome = {
  children: React.ReactNode;
  title: string;
  href: string;
};

const WrapperHome: FC<TWrapperHome> = async ({ children, title, href }) => {
  return (
    <div className="flex w-full flex-col text-white bg-gray-950 rounded-lg p-6">
      <p className=" font-bold text-xl leading-10">{title}</p>
      <div className="px-6 py-9">{children}</div>
      <div className="flex justify-center">
        <ButtonLink size="sm" variant="outline" href={href}>
          <LuPlus />
          <span>Ver mas</span>
        </ButtonLink>
      </div>
    </div>
  );
};

export default WrapperHome;
