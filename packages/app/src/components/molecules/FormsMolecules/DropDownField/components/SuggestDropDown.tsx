'use client';
import { cn } from '@/_lib/utils/cn-utility-function';
import { ReactElement, ReactNode } from 'react';

export type suggestDropDownProps<T> = {
  /* Suggestions to list */
  options: (T | string | number | readonly string[] | undefined)[];
  /* Name of the list to add to the key index*/
  nameList: string;
  /* Number of the array of the item selected */
  selectedItem: number;
  /* Handle the moment an item is selected */
  onSelect: (el: T | string) => void;
  /* A component to render as a list of suggestions */
  setComponent?: ((el: T) => ReactNode | ReactElement) | undefined;
  className: string;
};

function SuggestDropDown<T>({
  options,
  nameList,
  selectedItem,
  setComponent,
  className,
  onSelect,
}: suggestDropDownProps<T>) {
  const handleSelect = (el: string | T) => {
    onSelect(el);
  };

  return (
    <div role="menu" tabIndex={-1} className={cn(' z-10', className)}>
      {options
        ? options?.map((el, index) => (
            <li
              key={`${nameList}-${index}`}
              className={cn(
                'flex border-t border-t-surface-black-10 w-full items-center h-10 px-4 hover:bg-surface-primary-hover hover:text-text-white',
                selectedItem === index &&
                  'bg-surface-primary-hover text-text-white',
              )}
            >
              <button
                className="flex w-full justify-start items-center"
                type="button"
                onClick={() => handleSelect(el as T | string)}
              >
                {setComponent ? (
                  setComponent(el as T)
                ) : (
                  <span>{el as string}</span>
                )}
              </button>
            </li>
          ))
        : null}
    </div>
  );
}

export default SuggestDropDown;
