import { cn } from '@/_lib';
import { FC, TextareaHTMLAttributes } from 'react';

export type TTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  optionalInfo: string;
};
const TextArea: FC<TTextareaProps> = ({
  label,
  optionalInfo,
  children,
  className,
  ...rest
}) => {
  return (
    <div className="flex flex-col text-sm text-gray-50 gap-3">
      <p className="font-semibold">{label}</p>
      <p className="font-normal">{optionalInfo}</p>
      <textarea
        className={cn('px-4 py-3 w-full rounded-lg', className)}
        {...rest}
      >
        {children}
      </textarea>
    </div>
  );
};

export default TextArea;
