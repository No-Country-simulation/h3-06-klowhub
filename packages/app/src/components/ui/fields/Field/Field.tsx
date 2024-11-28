import { cva, VariantProps } from 'class-variance-authority';
import Input, { TBaseInputProps } from '../Input/Input';
import { forwardRef, Ref } from 'react';
import { cn } from '@/_lib'; // Suponiendo que tienes una función cn para combinar clases

const fieldProps = cva(
  'flex flex-row justify-between items-center border bg-gray-50 font-inter text-base rounded-md disabled:bg-gray-100 text-black',
  {
    variants: {
      colorState: {
        default: 'border-gray-300 disabled:border-gray-100 ',
        error: 'border-invalid disabled:border-gray-100',
        success: 'border-success disabled:border-gray-100',
      },
      fluid: {
        true: 'w-full',
        false: 'w-[250px] sm:w-[400px]',
      },
      reverse: {
        true: 'flex-row-reverse',
        false: 'flex-row',
      },
    },
    defaultVariants: {
      colorState: 'default',
      fluid: false,
      reverse: false,
    },
  },
);

export type TFieldProps = VariantProps<typeof fieldProps> &
  TBaseInputProps & {
    children?: React.ReactNode;
  };

const Field = forwardRef<HTMLInputElement, TFieldProps>(
  (
    { colorState, children, fluid, reverse, className, ...rest }: TFieldProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <div
        className={cn(fieldProps({ colorState, fluid, reverse }), className)}
      >
        <Input
          {...rest}
          ref={ref}
          fluid={true}
          padding={reverse ? false : true}
        />
        {children && children}
      </div>
    );
  },
);

export default Field;
