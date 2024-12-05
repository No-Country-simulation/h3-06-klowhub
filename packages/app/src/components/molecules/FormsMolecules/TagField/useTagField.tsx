import { focusNextElement } from '@/_lib/utils/domUtilities';
import { validateOnlyAlphaNumerics } from '@/_lib/utils/validations';
import { KeyboardEventHandler, useRef, useState } from 'react';

export type TtagDataProps = {
  id: string;
  label: string;
};

export type useTagFieldProps = {
  data: TtagDataProps[];
  articleTags: TtagDataProps[];
  onChange: (value: TtagDataProps[]) => void;
  onError: (error: string) => void;
};

const useTagField = ({ articleTags, onError, onChange }: useTagFieldProps) => {
  // Input for all the list of tags for one article
  const [tagsOfArticle, setTagsOfArticle] = useState(articleTags || []);
  // the value of the input entry
  const [value, setValue] = useState('');
  // The input element
  const inputRef = useRef<HTMLInputElement | null>(null);
  // Focus on the Input of TagField
  const focus = () => inputRef.current!.focus();

  // Return a new array with all tags that match with the letter of the input value */
  const deleteTag = (val: string) => {
    const newTagList = tagsOfArticle.filter(
      (el) => el.label.toLowerCase() !== val.toLowerCase(),
    );
    setTagsOfArticle(() => newTagList);
    onChange(newTagList);
    focus();
  };

  // Checks if the input text is already in the tags values array
  const isTagDuplicated = (val: string) => {
    const isRepeat = tagsOfArticle.filter((el) => el.label === val);
    return isRepeat.length > 0;
  };

  // Function: add a tag to de list of value tag array
  const AddTag = ({ id, label }: TtagDataProps) => {
    const val = label.toWellFormed().trim();
    if (validateOnlyAlphaNumerics(val)) {
      /* Add tags to the list (limit of tags 5) and reset input value */
      if (!isTagDuplicated(val) && tagsOfArticle.length < 5) {
        setTagsOfArticle((prev) => [...prev, { id, label: val }]);
        setValue('');
        onChange([...tagsOfArticle, { id, label: val }]);
      } else {
        onError('Tags Limit reached or tag duplicated');
      }
    } else {
      onError('Only alphanumerics values');
    }
  };

  /* Handler: Onkeydown - Add a tag if a space is insert */
  const onLocalKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Tab' || e.key === 'Enter') {
      let newValue;
      newValue = { id: value, label: value };
      AddTag(newValue);
      setValue('');
    } else {
      return true;
    }
    if (e.key === 'Tab') {
      focusNextElement();
    } else {
      focus();
    }
  };

  const onLocalChange = () => {
    onError('');
    if (inputRef.current !== null) {
      const val = inputRef.current.value;
      setValue(val);
    }
  };

  return {
    inputRef,
    tagsOfArticle,
    onLocalChange,
    onLocalKeyDown,
    deleteTag,
    value,
  };
};

export default useTagField;
