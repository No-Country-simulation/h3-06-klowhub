import { cn } from '@/_lib/utils/cn-utility-function';
import Tag from '@/components/ui/tags/Tag';
import { FC, HTMLAttributes } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { RiCloseFill } from 'react-icons/ri';

export type ButtonTagProps = HTMLAttributes<HTMLButtonElement> & {
  children: string;
  type?: 'close' | 'arrow';
};

const TagButton: FC<ButtonTagProps> = ({
  children,
  className,
  onClick,
  type = 'close',
  ...rest
}) => {
  return (
    <div
      className={cn(
        ' flex-grow-0 flex justify-center items-center bg-black text-white rounded-2xl px-2 py-1 ',
        'hover:border-primary-lavander-500 border-2',
        className,
      )}
    >
      <Tag withHash={false} className="bg-transparent">
        {children}
      </Tag>
      {onClick && (
        <button type="button" arial-label="Cerrar" onClick={onClick} {...rest}>
          {type === 'close' ? (
            <RiCloseFill className=" w-5 h-5 bg-transparent text-white" />
          ) : (
            <GoChevronRight className=" w-5 h-5  bg-transparent text-white" />
          )}
        </button>
      )}
    </div>
  );
};

export default TagButton;
