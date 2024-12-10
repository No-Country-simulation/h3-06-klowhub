'use client';
import { cn } from '@/_lib/utils/cn-utility-function';
import { default as SlipButton } from '@/components/molecules/FormsMolecules/SlipButton/SlipButton';
import {
  FC,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  Ref,
  RefObject,
} from 'react';
import { SuggestDropDown, useDropDownField } from './index';

export type dropdownFieldProps<T> = InputHTMLAttributes<HTMLInputElement> & {
  options: (T | string | number | readonly string[] | undefined)[];
  component?: ((el: T) => ReactNode | ReactElement) | undefined;
  indexChamp?: string | keyof T;
  iconChamp?: string | keyof T;
  onChange?: (val: string) => void;
  readOnly?: boolean;
  ref: Ref<HTMLInputElement>;
};

const DropdownFieldForwarded: FC<dropdownFieldProps<unknown>> = (props) => {
  const {
    options,
    value,
    indexChamp,
    iconChamp,
    component: Component,
    onChange,
    ref,
    ...rest
  } = props;

  const dropDownRef = ref;

  const {
    selectedIndex,
    inputValue,
    iconValue,
    handleSuggestSelect,
    isSuggestionsOpen,
    toggleMenu,
    onLocalChange,
  } = useDropDownField({
    value: value,
    indexChamp,
    iconChamp,
    ref: dropDownRef as RefObject<HTMLInputElement>,
    options: options,
    onChange,
    onError: (error) => console.log(error),
  });

  return (
    <div>
      <SlipButton
        className={cn(
          'w-36 shadow-md rounded-t-lg mobile:w-80 ',
          isSuggestionsOpen &&
            ' border-x border-t border-secondary-500- rounded-b-[0px] shadow-md',
        )}
        ref={dropDownRef as Ref<HTMLInputElement>}
        {...rest}
        icon={iconValue as ReactNode}
        value={inputValue as string}
        isOpened={isSuggestionsOpen}
        toggle={toggleMenu}
        onChange={onLocalChange}
        readOnly
      />
      {isSuggestionsOpen && (
        <SuggestDropDown
          className=" overflow-hidden absolute bg-white w-36 rounded-b-lg mobile:w-80 border-x border-b border-secondary-500 text-black"
          options={options}
          nameList={'categories'}
          selectedItem={selectedIndex}
          setComponent={Component}
          onSelect={handleSuggestSelect}
        />
      )}
    </div>
  );
};

export default DropdownFieldForwarded;
