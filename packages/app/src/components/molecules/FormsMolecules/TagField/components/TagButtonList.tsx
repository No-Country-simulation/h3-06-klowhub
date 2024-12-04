import TagButton from '@/components/ui/buttons/TagButton/TagButton';
import { HTMLAttributes } from 'react';

export type TTagButtonListProps = {
  data: { id: string; label: string }[];
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
        data.map((el: { id: string; label: string }) => (
          <TagButton
            className={className}
            key={el.id}
            onClick={() => handleDeleteTag(el.label)}
            withHash
            {...rest}
          >
            {el.label}
          </TagButton>
        ))}
    </>
  );
};

export default TagButtonList;
