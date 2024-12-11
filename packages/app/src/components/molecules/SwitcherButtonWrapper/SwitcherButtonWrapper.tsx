'use client';

import SwitcherButton, {
  TSwitcherButtonProps,
} from '@/components/ui/buttons/SwitcherButton/SwitcherButton';
import { FC, HTMLAttributes, MouseEvent, useState } from 'react';

export type TSwitcherWrapperProps = HTMLAttributes<HTMLDivElement> &
  TSwitcherButtonProps & {
    onClick?: (
      e: MouseEvent<HTMLButtonElement, MouseEvent> | MouseEvent,
    ) => void;
  };
const SwitcherButtonWrapper: FC<TSwitcherWrapperProps> = ({
  className,
  leftComponent,
  rightComponent,
  variant = 'primary',
  isActive,
  onClick,
  ...rest
}) => {
  const [isButtonActive, setIsButtonActive] = useState(isActive);

  const handleSwitcherClick = (
    e: MouseEvent<HTMLButtonElement, MouseEvent> | MouseEvent,
  ) => {
    setIsButtonActive((prev) => !prev);
    if (onClick) onClick(e);
  };

  return (
    <div className={className}>
      <SwitcherButton
        leftComponent={leftComponent}
        rightComponent={rightComponent}
        isActive={isButtonActive}
        variant={variant}
        onClick={(e) => handleSwitcherClick(e)}
        className="mx-7"
        {...rest}
      />
    </div>
  );
};

export default SwitcherButtonWrapper;
