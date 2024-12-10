import { cn } from '@/_lib';
import { ButtonHTMLAttributes, FC } from 'react';

export type TToolbarButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  activeKey?: boolean | string;
};

const ToolbarButton: FC<TToolbarButtonProps> = ({
  onClick,
  children,
  activeKey,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'hover:bg-secondary-700 hover:text-white ',
        'border-none p-1 rounded-lg',
        activeKey ? 'bg-secondary-700 text-white ' : 'text-gray-950 h ',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default ToolbarButton;
