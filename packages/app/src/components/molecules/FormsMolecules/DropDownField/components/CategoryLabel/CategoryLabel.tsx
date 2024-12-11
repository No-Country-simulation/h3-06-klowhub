import { cn } from '@/_lib/utils/cn-utility-function';
import { cva } from 'class-variance-authority';
import { ComponentType, HTMLAttributes } from 'react';

const categoryLabel = cva(
  [
    'flex',
    'justify-center',
    'items-center',
    'text-center',
    'flex-row',
    'gap-2',
  ],
  {
    variants: {
      size: {
        big: ['text-medium'],
        medium: ['text-medium'],
        normal: [' text-base'],
        small: [' text-small'],
      },
    },
    defaultVariants: {
      size: 'normal',
    },
  },
);

export type TCategoryLabelprops = HTMLAttributes<HTMLDivElement> & {
  icon: ComponentType;
  text: string;
  alt?: string;
  size?: 'small' | 'normal' | 'big';
};

const CategoryLabel = ({
  icon,
  text,
  size = 'normal',
  className,
}: TCategoryLabelprops) => {
  const Icon = icon;
  return (
    <div className={cn(categoryLabel({ size }), className)}>
      {icon && <Icon />}
      <span>{text}</span>
    </div>
  );
};

export default CategoryLabel;
