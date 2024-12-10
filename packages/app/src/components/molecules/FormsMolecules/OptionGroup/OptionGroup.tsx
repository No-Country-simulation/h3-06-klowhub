import { cn } from '@/_lib';
import React, { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IOptionGroupProps {
  title: string;
  options: {
    value: string | number;
    label: string | ReactNode;
  }[];
  register: UseFormRegisterReturn<string>;
  className?: string;
}
const OptionGroup: React.FC<IOptionGroupProps> = ({
  title,
  options,
  className,
  register,
}) => {
  // Get the register function from useForm

  return (
    <div
      className={cn(
        'flex flex-col text-gray-50 text-sm font-semibold gap-3',
        className,
      )}
    >
      <h3>{title}</h3>
      <div className="flex flex-col gap-3 font-normal">
        {options.map((option) => (
          <label key={option.value} className="flex flex-row gap-3">
            <input
              className="text-base"
              type="radio"
              value={option.value}
              {...register}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default OptionGroup;
