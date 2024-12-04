import { Field } from '@/components/ui';
import { TFieldProps } from '@/components/ui/fields/Field/Field';
import { FC } from 'react';

export type TLabeledFieldProps = TFieldProps & {
  label: string;
  optionalInfo: string;
};

const LabeledField: FC<TLabeledFieldProps> = ({
  label,
  optionalInfo,
  ...rest
}) => {
  return (
    <div className="flex flex-col text-sm  text-gray-50 gap-3">
      <p className="font-semibold">{label}</p>
      <p className="font-normal">{optionalInfo}</p>
      <Field fluid {...rest} />
    </div>
  );
};

export default LabeledField;
