import { cn } from '@/_lib/utils/cn-utility-function';
import { HTMLAttributes } from 'react';

const AccordionBar = ({ children, className }: HTMLAttributes<HTMLElement>) => {
  return <div className={cn('w-full text-lg', className)}>{children}</div>;
};

export default AccordionBar;
