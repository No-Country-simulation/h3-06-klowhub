import { cn } from '@/_lib';
import { FC, ReactNode } from 'react';

export type THeroCard = {
  title: string;
  children: ReactNode;
  className?: string;
};

const HeroCard: FC<THeroCard> = ({ title, children, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-primary-lavander-900 p-5 gap-3',
        className,
      )}
    >
      <p className="font-semibold text-[54px] text-shadow-[0px_0px_20px_rgba(0, 0, 0, 0.40)]">
        {title}
      </p>
      <p className="text-xl">{children}</p>
    </div>
  );
};

export default HeroCard;
