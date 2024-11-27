'use client';

import { FC, HTMLAttributes, MouseEvent, ReactNode, useState } from 'react';
import { SwitcherButton } from '@/components/ui';

export type TSwitcherWrapperProps = HTMLAttributes<HTMLDivElement> & {
  leftComponent: ReactNode;
  rightComponent: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement, MouseEvent> | MouseEvent) => void;
};
const SwitcherButtonWrapper: FC<TSwitcherWrapperProps> = ({
  className,
  leftComponent,
  rightComponent,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleSwitcherClick = (
    e: MouseEvent<HTMLButtonElement, MouseEvent> | MouseEvent,
  ) => {
    setIsActive((prev) => !prev);
    onClick && onClick(e);
  };

  return (
    <div className={className}>
      <SwitcherButton
        leftComponent={leftComponent}
        rightComponent={rightComponent}
        isActive={isActive}
        onClick={(e) => handleSwitcherClick(e)}
        className="mx-7"
      />
    </div>
  );
};

export default SwitcherButtonWrapper;
