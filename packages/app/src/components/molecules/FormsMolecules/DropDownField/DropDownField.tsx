import { cn } from '@/_lib/utils/cn-utility-function';
import SlipButton from '@/components/molecules/FormsMolecules/SlipButton/SlipButton';
import { InputHTMLAttributes, ReactElement, ReactNode, useRef } from 'react';
import { SuggestDropDown } from '.';
import useDropDownField from './components/useDropDownField';

export type dropdownFieldProps<T> = InputHTMLAttributes<HTMLInputElement> & {
  options: (T | string | number | readonly string[] | undefined)[];
  component?: ((el: T) => ReactNode | ReactElement) | undefined;
  indexChamp?: string | keyof T;
  iconChamp?: string | keyof T;
  onChange?: (val: string) => void;
  readOnly?: boolean;
};

function DropdownField<T>({
  options,
  value,
  indexChamp,
  iconChamp,
  component: Component,
  onChange,
  ...rest
}: dropdownFieldProps<T>) {
  const dropDownRef = useRef<HTMLInputElement | null>(null);

  const {
    selectedIndex,
    inputValue,
    iconValue,
    handleSuggestSelect,
    isSuggestionsOpen,
    toggleMenu,
    onLocalChange,
  } = useDropDownField({
    value: value as T | string,
    indexChamp,
    iconChamp,
    ref: dropDownRef,
    options: options as (T | string)[],
    onChange,
    onError: (error) => console.log(error),
  });

  return (
    <>
      <SlipButton
        className={cn(
          'w-36 shadow-input rounded-rdlg mobile:w-80',
          isSuggestionsOpen &&
            ' border-x border-t border-border-primary rounded-b-[0px] shadow-input-side',
        )}
        ref={dropDownRef}
        {...rest}
        icon={iconValue as ReactNode}
        value={inputValue as string}
        isOpened={isSuggestionsOpen}
        onToggle={() => toggleMenu}
        onChange={onLocalChange}
      />
      {isSuggestionsOpen && (
        <SuggestDropDown
          className=" overflow-hidden absolute bg-surface-triarty-white w-36 rounded-b-rdlg mobile:w-80 border-x border-b border-border-primary"
          options={options}
          nameList={'categories'}
          selectedItem={selectedIndex}
          setComponent={Component}
          onSelect={handleSuggestSelect}
        />
      )}
    </>
  );
}

export default DropdownField;
