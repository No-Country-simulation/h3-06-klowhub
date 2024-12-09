import { cn } from '@/_lib';
import { FC } from 'react';
import { LuPlus } from 'react-icons/lu';
import ButtonLink from '../../../links/buttonLink/ButtonLink';

export type TWrapper = {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
};

const Wrapper: FC<TWrapper> = async ({ children, title, href, className }) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col text-white bg-gray-950 rounded-lg p-6 shadow-md',
        className,
      )}
    >
      {title && <p className=" font-bold text-xl leading-10">{title}</p>}
      <div className="flex flex-row gap-6 py-6">{children}</div>
      {href && (
        <div className={'flex justify-center'}>
          <ButtonLink size="sm" variant="outline" href={href}>
            <LuPlus />
            <span>Ver mas</span>
          </ButtonLink>
        </div>
      )}
    </div>
  );
};

export default Wrapper;
