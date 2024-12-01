import { cn } from '@/_lib';
import { InputHTMLAttributes } from 'react';

export type TCheckInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const CheckInput = ({ className, ...rest }: TCheckInputProps) => {
  return (
    <input
      type="checkbox"
      className={cn(
        'shrink-0 grow-0shadow-check relative appearance-none border-none bg-white rounded-full h-4 w-4 checked:before:absolute checked:before:top-1/4 checked:before:left-1/4 checked:before:bg-primary-violet checked:before:w-1/2 checked:before:h-1/2 checked:before:rounded-full disabled:opacity-5',
        className,
      )}
      {...rest}
    />
  );
};

export default CheckInput;
