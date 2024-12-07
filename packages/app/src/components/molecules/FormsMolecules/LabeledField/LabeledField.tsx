import { cn } from '@/_lib';
import { FC } from 'react';

export type TLabeledFieldProps = {
  label: string;
  optionalInfo?: string;
  children?: React.ReactNode;
  className?: string;
};

const LabeledField: FC<TLabeledFieldProps> = ({
  label,
  optionalInfo,
  children,
  className,
}) => {
  return (
    <div className={cn('flex flex-col text-sm text-gray-50 gap-3', className)}>
      <label className="font-semibold">{label}</label>
      {optionalInfo && (
        <p className="font-normal text-gray-200 text-xs">{optionalInfo}</p>
      )}
      {children}
    </div>
  );
};

export default LabeledField;
