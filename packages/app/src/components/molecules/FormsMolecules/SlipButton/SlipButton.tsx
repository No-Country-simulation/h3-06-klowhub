import { cn } from '@/_lib/utils/cn-utility-function';
import { ToggleButton } from '@/components/ui';
import {
  forwardRef,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  Ref,
} from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import SlipButtonInput, { TSlipButtonInputProps } from './SlipButtonInput';

/**
 * Component SlipButton
 * Description: A selector with suggestions
 */
export type SlipButtonProps = InputHTMLAttributes<HTMLInputElement> &
  TSlipButtonInputProps & {
    onToggle: (val: boolean) => void;
    isOpened: boolean;
    children?: ReactNode;
    icon?: ReactNode;
    alt?: string;
  };
const SlipButton = forwardRef<HTMLInputElement, SlipButtonProps>(
  (
    {
      children,
      onToggle,
      isOpened,
      className,
      alt,
      icon,
      ...rest
    }: SlipButtonProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const toggleMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
      onToggle(!isOpened);
    };
    return (
      <div className=" relative">
        <div
          className={cn(
            ' flex items-center justify-between h-10  bg-surface-triarty-white rounded-rdlg pl-4 w-full ',
            className,
          )}
        >
          <SlipButtonInput alt={alt} icon={icon} ref={ref || null} {...rest} />
          <ToggleButton
            className="h-4 w-4 mx-2"
            isActive={isOpened}
            onClick={() => toggleMenu}
          >
            <VscChevronUp />
            <VscChevronDown />
          </ToggleButton>
        </div>

        <div className={isOpened ? 'w-flex' : 'hidden'}>
          <ul>{children}</ul>
        </div>
      </div>
    );
  },
);

export default SlipButton;
