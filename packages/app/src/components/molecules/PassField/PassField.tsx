'use client';
import { Field, ToggleButton } from '@/components/ui';
import { TFieldProps } from '@/components/ui/fields/Field/Field';
import { FC, MouseEvent, useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';

export type TPassFieldProps = TFieldProps;
const PassField: FC<TPassFieldProps> = ({ ...rest }) => {
  const [isEyeOpen, setIsEyeOpen] = useState(true);

  const onClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsEyeOpen(!isEyeOpen);
  };

  return (
    <Field {...rest} type={isEyeOpen ? 'text' : 'password'} withIconState>
      <ToggleButton
        isActive={isEyeOpen}
        onClick={(e) => onClick(e)}
        className="bg-transparent text-gray-800"
      >
        <LuEye />
        <LuEyeOff />
      </ToggleButton>
    </Field>
  );
};

export default PassField;
