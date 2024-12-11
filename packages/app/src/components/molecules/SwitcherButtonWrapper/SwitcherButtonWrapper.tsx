'use client';

import SwitcherButton, {
  TSwitcherButtonProps,
} from '@/components/ui/buttons/SwitcherButton/SwitcherButton';
import { useConfigStateAppStore } from '@/stores/configStateApp.store';
import { FC, HTMLAttributes, MouseEvent, useState } from 'react';

export type TSwitcherWrapperProps = HTMLAttributes<HTMLDivElement> &
  Omit<TSwitcherButtonProps, 'isActive'> & {
    onClick?: (
      e: MouseEvent<HTMLButtonElement, MouseEvent> | MouseEvent,
    ) => void;
  };
const SwitcherButtonWrapper: FC<TSwitcherWrapperProps> = ({
  className,
  leftComponent,
  rightComponent,
  variant = 'primary',
  onClick,
  ...rest
}) => {
  const { getSellerMode, updateSellerModeState } = useConfigStateAppStore(
    (state) => state,
  );
  const isExplorer = getSellerMode() === 'EXPLORADOR' ? true : false;
  const [isButtonActive, setIsButtonActive] = useState(isExplorer || true);

  const handleSwitcherClick = (
    e: MouseEvent<HTMLButtonElement, MouseEvent> | MouseEvent,
  ) => {
    setIsButtonActive((prev) => !prev);
    if (!isButtonActive) updateSellerModeState('VENDEDOR');
    if (isButtonActive) updateSellerModeState('EXPLORADOR');

    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <div className={className}>
      <SwitcherButton
        leftComponent={leftComponent}
        rightComponent={rightComponent}
        variant={variant}
        onClick={(e) => handleSwitcherClick(e)}
        className="mx-7"
        {...rest}
        isActive={isButtonActive}
      />
    </div>
  );
};

export default SwitcherButtonWrapper;
