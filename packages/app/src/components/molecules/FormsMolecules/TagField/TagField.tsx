import { cn } from '@/_lib/utils/cn-utility-function';
import { Input } from '@/components/ui';
import MessageField from '@/components/ui/fields/MessageField/MessageField';
import { FC, HTMLAttributes, useState } from 'react';
import TagButtonList from './components/TagButtonList';
import useTagField from './useTagField';

const myData = [
  { id: '0', label: 'mercado' },
  { id: '1', label: 'moneda' },
];

export type TTagField = HTMLAttributes<HTMLInputElement> & {
  placeholder: string;
};

const TagField: FC<TTagField> = ({ className, placeholder, ...rest }) => {
  const [isError, setIsError] = useState('');
  const onError = (error: string) => setIsError(error);
  const onChange = (submitedValue: typeof myData) =>
    console.log('submit article ', submitedValue);
  const {
    inputRef,
    tagsOfArticle,
    // suggestionList,
    onLocalChange,
    onLocalKeyDown,
    // isSuggestionBoxOpen,
    // applyValue,
    deleteTag,
    // selectedItem,
    value,
  } = useTagField({
    data: myData,
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
              fluid
              value={value}
              ref={inputRef}
              padding={false}
              className="py-3"
              {...rest}
            />
          </div>
        </div>
        {/* 
        <ul className={isSuggestionBoxOpen ? 'flex flex-col px-0' : 'hidden'}>
          <Suggest
            selectedItem={selectedItem}
            data={suggestionList}
            nameList="tags"
            onSelect={applyValue}
          />
        </ul> */}
      </div>
      <MessageField variant="error" className={isError ? 'flex' : 'hidden'}>
        {isError}
      </MessageField>
    </>
  );
};

export default TagField;
