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
    toggle: (val: boolean) => void;
    isOpened: boolean;
    children?: ReactNode;
    icon?: ReactNode;
    alt?: string;
  };
const SlipButton = forwardRef<HTMLInputElement, SlipButtonProps>(
  (
    {
      children,
      toggle,
      isOpened,
      className,
      alt,
      icon,
      ...rest
    }: SlipButtonProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const toggleMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
      toggle(!isOpened);
    };
    return (
      <div className=" relative">
        <div
          className={cn(
            ' flex items-center justify-between h-10 text-black bg-white rounded-2xl pl-4 w-full ',
            className,
          )}
        >
          <SlipButtonInput alt={alt} icon={icon} ref={ref || null} {...rest} />
          <ToggleButton
            className="h-6 w-6 mx-4 p-0 text-black bg-transparent"
            isActive={isOpened}
            onClick={toggleMenu}
          >
            <VscChevronDown />
            <VscChevronUp />
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