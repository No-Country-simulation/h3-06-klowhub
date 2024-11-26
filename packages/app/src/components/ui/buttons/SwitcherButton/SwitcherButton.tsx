import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, useState } from 'react';

const switcherButtonProps = cva('', {
  variants: {
    variant: {
      primary: '',
      secondary: '',
    },
    change: { true: '', false: '' },
  },
  defaultVariants: {
    variant: 'primary',
    change: false,
  },
});

export type TButtonProps = VariantProps<typeof switcherButtonProps> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const SwitcherButton = ({}: TButtonProps) => {
  return (
    <button className="inline-flex p-1 rounded-[50px] gap-1 align-center bg-secondary-900">
      <span className="flex px-[6px] py-[2px] rounded-[50px] bg-transparent text-sm font-semibold align-center justify-center text-white">
        Home
      </span>
      <span className="flex px-[6px] py-[2px] rounded-[50px] bg-secondary-300 text-sm font-semibold align-center justify-center">
        Plataforma
      </span>
    </button>
  );
};

export default SwitcherButton;
