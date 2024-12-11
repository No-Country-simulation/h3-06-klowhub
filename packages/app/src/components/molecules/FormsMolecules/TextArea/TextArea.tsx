import { cn } from '@/_lib';
import { FC, TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export type TTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  optionalInfo: string;
  register: UseFormRegisterReturn<string>;
};
const TextArea: FC<TTextareaProps> = ({
  label,
  optionalInfo,
  children,
  className,
  register,
  ...rest
}) => {
  return (
    <div className="flex flex-col text-sm gap-3">
      <p className="font-semibold">{label}</p>
      <p className="font-normal">{optionalInfo}</p>
      <textarea
        className={cn(
          'px-4 py-3 w-full rounded-lg text-gray-950 placeholder:text-gray-700 placeholder:text-sm',
          className,
        )}
        {...register}
        {...rest}
      >
        {children}
      </textarea>
    </div>
  );
};

export default TextArea;
