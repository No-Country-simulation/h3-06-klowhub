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
  const [tagsOfArticle, setTagsOfArticle] = useState(articleTags || []);
  const [value, setValue] = useState('');
  const focus = () => ref?.current?.focus();

  const deleteTag = (val: string) => {
    const newTagList = tagsOfArticle.filter(
      (el) => el.toLowerCase() !== val.toLowerCase(),
    );
    setTagsOfArticle(() => newTagList);
    onChange(newTagList);
    focus();
  };

  const isTagDuplicated = (val: string) => {
    const isRepeat = tagsOfArticle.filter((el) => el === val);
    return isRepeat.length > 0;
  };

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
      const newValue = value;
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
