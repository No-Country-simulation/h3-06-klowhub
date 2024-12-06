import { FC } from 'react';

export type TLabeledFieldProps = {
  label: string;
  optionalInfo?: string;
  children?: React.ReactNode;
};

const LabeledField: FC<TLabeledFieldProps> = ({
  label,
  optionalInfo,
  children,
}) => {
  return (
    <div className="flex flex-col text-sm  text-gray-50 gap-3">
      <p className="font-semibold">{label}</p>
      {optionalInfo && (
        <p className="font-normal text-gray-200 text-xs">{optionalInfo}</p>
      )}
      {children}
    </div>
  );
};

export default LabeledField;
