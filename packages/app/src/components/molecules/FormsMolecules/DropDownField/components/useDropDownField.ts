'use client';
import {
  //KeyboardEventHandler,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export type useDropDownProps<T> = {
  value: T | string;
  indexChamp?: string | keyof T;
  iconChamp?: string | keyof T;
  options: (T | string)[];
  onChange?: (value: string) => void;
  ref: RefObject<HTMLInputElement | null>;
  onError?: (error: string) => void;
};

function useDropDownField<T>({
  value,
  iconChamp,
  ref,
  indexChamp,
  onChange,
}: useDropDownProps<T>) {
  // This function return a value that depends of the type of value indicated:
  // If the type is icon, and there are iconChamp (the champ where the icon is included) then return the icon. If not return the text of the indexchamp or a string.

  const getValueOf = (type: string, val: T | string) => {
    if (type === 'icon' && val) {
      return iconChamp && typeof val != 'string' && val[iconChamp as keyof T];
    }
    if (type === 'text' && val) {
      return indexChamp && typeof val != 'string'
        ? val[indexChamp as keyof T]
        : val;
    }
    return '';
  };
  const [inputValue, setInputValue] = useState(getValueOf('text', value));
  const [iconValue, setIconValue] = useState(() => getValueOf('icon', value));
  const [selectedIndex, setSelectedIndex] = useState(-2);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);

  //const onLocalKeyDown: KeyboardEventHandler<HTMLInputElement> = () => {};

  const onLocalChange = () => {
    const newValue = ref.current!.value.trim();
    setInputValue(newValue);
  };

  const handleSuggestSelect = (el: SetStateAction<string | T>) => {
    const value = getValueOf('text', el as T | string);
    setInputValue(value);
    setIconValue(() => getValueOf('icon', el as T | string));
    focus();
    setSelectedIndex(-2);
    setIsSuggestionsOpen(false);
  };

  const toggleMenu = (val: boolean) => setIsSuggestionsOpen(val);

  useEffect(() => {
    if (onChange) {
      onChange(inputValue as string);
    }
  }, [inputValue, onChange]);

  return {
    inputValue,
    iconValue,
    selectedIndex,
    onLocalChange,
    //onLocalKeyDown,
    handleSuggestSelect,
    toggleMenu,
    isSuggestionsOpen,
  };
}

export default useDropDownField;
