'use client';
import { validateOnlyAlphaNumerics } from '@/_lib/utils/validations';
import { KeyboardEventHandler, MutableRefObject, useState } from 'react';

export type TtagDataProps = string;

export type useTagFieldProps = {
  data: TtagDataProps[];
  articleTags: TtagDataProps[];
  onChange: (value: TtagDataProps[]) => void;
  onError: (error: string) => void;
  ref?: MutableRefObject<HTMLInputElement | null>;
};

const useTagField = ({
  articleTags,
  onError,
  onChange,
  ref,
}: useTagFieldProps) => {
  // Input for all the list of tags for one article
  const [tagsOfArticle, setTagsOfArticle] = useState(articleTags || []);
  // the value of the input entry
  const [value, setValue] = useState('');
  // The input element
  // Focus on the Input of TagField
  const focus = () => ref?.current?.focus();

  // Return a new array with all tags that match with the letter of the input value */
  const deleteTag = (val: string) => {
    const newTagList = tagsOfArticle.filter(
      (el) => el.toLowerCase() !== val.toLowerCase(),
    );
    setTagsOfArticle(() => newTagList);
    onChange(newTagList);
    focus();
  };

  // Checks if the input text is already in the tags values array
  const isTagDuplicated = (val: string) => {
    const isRepeat = tagsOfArticle.filter((el) => el === val);
    return isRepeat.length > 0;
  };

  // Function: add a tag to de list of value tag array
  const AddTag = (valueTag: TtagDataProps) => {
    const val = valueTag.toWellFormed().trim();
    if (validateOnlyAlphaNumerics(val)) {
      /* Add tags to the list (limit of tags 5) and reset input value */
      if (!isTagDuplicated(val) && tagsOfArticle.length < 5) {
        setTagsOfArticle((prev) => [...prev, val]);
        setValue('');
        onChange([...tagsOfArticle, val]);
      } else {
        onError('Tags Limit reached or tag duplicated');
      }
    } else {
      onError('Only alphanumerics values');
    }
  };

  /* Handler: Onkeydown - Add a tag if a space is insert */
  const onLocalKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === ',') {
      e.preventDefault();
      let newValue;
      newValue = value;
      AddTag(newValue);
      setValue('');
    } else {
      return true;
    }
  };

  const onLocalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onError('');
    const val = e.target.value;
    setValue(val);
  };

  return {
    ref,
    tagsOfArticle,
    onLocalChange,
    onLocalKeyDown,
    deleteTag,
    value,
  };
};

export default useTagField;
