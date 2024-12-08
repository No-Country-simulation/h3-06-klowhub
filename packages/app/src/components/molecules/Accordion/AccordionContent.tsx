import { cn } from '@/_lib';
import { HTMLAttributes } from 'react';

const AccordionContent = ({
  children,
  className,
}: HTMLAttributes<HTMLElement>) => {
  return <div className={cn('bg-white p-3', className)}>{children}</div>;
};

export default AccordionContent;
