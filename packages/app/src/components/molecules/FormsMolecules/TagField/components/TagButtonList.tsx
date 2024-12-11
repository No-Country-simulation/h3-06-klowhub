import TagButton from '@/components/ui/buttons/TagButton/TagButton';
import { HTMLAttributes } from 'react';

export type TTagButtonListProps = {
  data: string[];
  onDelete: (val: string) => void;
} & HTMLAttributes<HTMLButtonElement>;

const TagButtonList = ({
  data,
  className,
  onDelete,
  ...rest
}: TTagButtonListProps) => {
  const handleDeleteTag = (val: string) => {
    onDelete(val);
  };

  return (
    <>
      {data.length > 0 &&
        data.map((el: string, index) => (
          <TagButton
            className={className}
            key={index}
            onClick={() => handleDeleteTag(el)}
            {...rest}
          >
            {el}
          </TagButton>
        ))}
    </>
  );
};

export default TagButtonList;
