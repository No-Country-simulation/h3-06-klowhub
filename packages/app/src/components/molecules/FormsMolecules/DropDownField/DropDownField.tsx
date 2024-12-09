'use client';
import { cn } from '@/_lib/utils/cn-utility-function';
import { default as SlipButton } from '@/components/molecules/FormsMolecules/SlipButton/SlipButton';
import {
  InputHTMLAttributes,
  MutableRefObject,
  ReactElement,
  ReactNode,
  Ref,
  forwardRef,
} from 'react';
import { SuggestDropDown, useDropDownField } from './index';

export type dropdownFieldProps<T> = InputHTMLAttributes<HTMLInputElement> & {
  options: (T | string | number | readonly string[] | undefined)[];
  component?: ((el: T) => ReactNode | ReactElement) | undefined;
  indexChamp?: string | keyof T;
  iconChamp?: string | keyof T;
  onChange?: (val: string) => void;
  readOnly?: boolean;
};

const DropdownFieldForwarded = forwardRef(
  (props: dropdownFieldProps<unknown>, ref) => {
    const {
      options,
      value,
      indexChamp,
      iconChamp,
      component: Component,
      onChange,
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
      value: value as any,
      indexChamp,
      iconChamp,
      ref: dropDownRef as MutableRefObject<HTMLInputElement>,
      options: options as any[],
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
  },
);

export default DropdownFieldForwarded;
