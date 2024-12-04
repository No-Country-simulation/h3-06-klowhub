import React, { ReactNode } from 'react';

interface IOptionGroupProps {
  title: string;
  options: {
    value: string | number;
    label: string | ReactNode;
  }[];
  name: string;
}
const OptionGroup: React.FC<IOptionGroupProps> = ({ title, options, name }) => {
  const [selected, setSelected] = React.useState(options[0].value);

  return (
    <div className="flex flex-col text-gray-50 text-sm font-semibold gap-3">
      <h3>{title}</h3>
      <div className="flex flex-col gap-3 font-normal">
        {options.map((option) => (
          <label key={option.value} className="flex flex-row gap-3">
            <input
              className="text-base"
              name={name}
              type="radio"
              value={option.value}
              checked={selected === option.value}
              onChange={() => setSelected(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default OptionGroup;
