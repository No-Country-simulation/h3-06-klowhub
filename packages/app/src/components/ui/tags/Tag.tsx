import { cn } from '@/_lib';
import { FC, HTMLAttributes, ReactNode } from 'react';

export type TTagsProps = HTMLAttributes<HTMLSpanElement> & {
  icon?: ReactNode;
  withHash?: boolean;
};

const Tag: FC<TTagsProps> = ({
  children,
  icon,
  className,
  withHash = false,
}) => {
  return (
    <div
      className={cn(
        'bg-black text-white text-xs leading-5 px-2 py-1 inline-flex flex-shrink-0 gap-1 justify-center items-center flex-row flex-nowrap rounded-2xl',
        className,
      )}
    >
      {icon && <span>{icon}</span>}
      {withHash && '#'}
      <span>{children}</span>
    </div>
  );
};

export default Tag;
