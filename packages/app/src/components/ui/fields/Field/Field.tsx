import { cn } from '@/_lib';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, Ref } from 'react';
import { LuCircleAlert, LuCircleCheck } from 'react-icons/lu';
import Input, { TBaseInputProps } from '../Input/Input';

const fieldProps = cva(
  'flex flex-row justify-between items-center border bg-gray-50 font-inter text-base rounded-md disabled:bg-gray-100 text-black focus-within:border-secondary-400 ',
  {
    variants: {
      colorState: {
        default:
          'border-gray-300 disabled:border-gray-100 hover:border-secondary-600 focus-within:border-2',
        error:
          'border-invalid disabled:border-gray-100 hover:border-invalid focus-within:border-2 focus-within:border-invalid',
        success:
          'border-success disabled:border-gray-100 hover:border-success focus-within:border-2 focus-within:border-success',
      },
      fluid: {
        true: 'w-full',
        false: 'w-[320px] md:w-[400px]',
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
    withIconState?: boolean;
    ref?: Ref<HTMLInputElement>;
  };

const Field: FC<TFieldProps> = ({
  colorState,
  children,
  fluid,
  reverse,
  ref,
  className,
  ...rest
}: TFieldProps) => {
  return (
    <div className={cn(fieldProps({ colorState, fluid, reverse }), className)}>
      <Input
        ref={ref}
        fluid={true}
        padding={reverse ? false : true}
        {...rest}
      />
      {!children &&
        (colorState === 'error' ? (
          <LuCircleAlert className="text-invalid-dark h-4 w-4 mx-3" />
        ) : colorState === 'success' ? (
          <LuCircleCheck className="text-success-dark  h-4 w-4 mx-3" />
        ) : null)}
      {children && children}
    </div>
  );
};

export default Field;
