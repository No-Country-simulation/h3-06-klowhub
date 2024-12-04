import { cn } from '@/_lib/utils/cn-utility-function';
import { FC, HTMLAttributes, ReactNode } from 'react';

export type TTagProps = HTMLAttributes<HTMLDivElement> & {
  children: string | ReactNode;
  withHash?: boolean;
};

const Tag: FC<TTagProps> = ({
  children,
  className,
  withHash = true,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'flex-row flex-nowrap flex flex-grow-0 justify-center items-center h-[30px] px-4 rounded-rdxl text-text-white bg-surface-black-30 text-base font-bold border-2 border-transparent hover:border-border-grey',
        className,
      )}
      {...rest}
    >
      {withHash && '#'}
      {children}
    </div>
  );
};

export default Tag;
