'use client';
import { cn } from '@/_lib/utils/cn-utility-function';
import { Input } from '@/components/ui';
import MessageField from '@/components/ui/fields/MessageField/MessageField';
import { forwardRef, HTMLAttributes, Ref, RefObject, useState } from 'react';
import TagButtonList from './components/TagButtonList';
import useTagField from './useTagField';

export type TTagField = HTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  data?: string[];
  name: string;
  onChange: (value: string[]) => void;
};

const TagField = forwardRef<HTMLInputElement, TTagField>(
  (
    { className, placeholder, onChange, onBlur, name, data, ...rest },
    ref: Ref<HTMLInputElement>,
  ) => {
    const [isError, setIsError] = useState('');
    const onError = (error: string) => setIsError(error);
    const { tagsOfArticle, onLocalChange, onLocalKeyDown, deleteTag, value } =
      useTagField({
        ref: ref as RefObject<HTMLInputElement | null>,
        data: data || [],
        articleTags: [],
        onChange: onChange,
        onError: onError,
      });

    return (
      <>
        <div
          className={cn(
            'min-h-12 w-80 flex flex-col max-w-screen-mobile rounded-lg overflow-hidden mobile:max-w-[855px] mobile:w-full p-0 border-gray-600 bg-white',
            isError
              ? 'border border-invalid-light'
              : value
                ? 'border border-success-light'
                : 'focus-within:border focus-within:border-primary-lavander-100',
          )}
        >
          <div
            className={cn(
              tagsOfArticle.length > 0 && 'items-center px-1',
              ' flex flex-row max-w-full flex-wrap',
            )}
          >
            <TagButtonList
              data={tagsOfArticle}
              className="my-1"
              onDelete={deleteTag}
            />

            <div
              className={cn(
                ' px-4 py-0 flex-grow items-center justify-centerbg-transparent text-black',
                className,
              )}
            >
              <Input
                type="text"
                placeholder={placeholder}
                onChange={onLocalChange}
                onKeyDown={onLocalKeyDown}
                onBlur={onBlur}
                fluid
                value={value}
                name={name}
                ref={ref}
                padding={false}
                className="py-3"
                {...rest}
              />
            </div>
          </div>
        </div>
        <MessageField variant="error" className={isError ? 'flex' : 'hidden'}>
          {isError}
        </MessageField>
      </>
    );
  },
);

TagField.displayName = 'TagField';

export default TagField;
