import { cn } from '@/_lib';
import { InputHTMLAttributes, Ref, forwardRef } from 'react';

export type TBaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  fluid?: boolean;
  padding?: boolean;
};

const Input = forwardRef<HTMLInputElement, TBaseInputProps>(
  (
    { className, fluid, padding, ...rest }: TBaseInputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <input
        className={cn(
          'inline-block font-inter text-base bg-transparent placeholder:text-sm placeholder:text-gray-700 placeholder:p-1 border-y-transparent rounded-md outline-none focus:outline-none py-3',
          className,
          fluid ? 'w-full flex-grow' : 'w-[250px]',
          padding ? ' px-4' : '',
        )}
        ref={ref}
        {...rest}
      />
    );
  },
);
Input.displayName = 'Input';
export default Input;
