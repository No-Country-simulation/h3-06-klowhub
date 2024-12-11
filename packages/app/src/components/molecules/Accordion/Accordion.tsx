import { HTMLAttributes, ReactNode, useState } from 'react';
import AccordionContent from './AccordionContent';

import { cn } from '@/_lib';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import ToggleButton from '../../ui/buttons/ToggleButton/ToggleButton';
import AccordionBar from './AccordionBar';

export type accordionProps = HTMLAttributes<HTMLElement> & {
  bar: ReactNode;
  rounded?: boolean;
  reverse?: boolean;
  isOpenOnInit?: boolean;
};

export const Accordion = ({
  bar: Bar,
  rounded,
  children,
  reverse,
  isOpenOnInit = false,
  className,
  ...rest
}: accordionProps) => {
  const [isOpen, setIsOpen] = useState(isOpenOnInit);

  const toggleAccordion = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('accordion ', isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={cn(
          'flex text-text-white p-4',
          rounded
            ? isOpen
              ? 'rounded-tl-lg rounded-tr-lg overflow-hidden'
              : 'rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-lg overflow-hidden'
            : '',
          reverse && 'flex-row-reverse',
          className,
        )}
        {...rest}
      >
        <div className="flex-grow">{Bar}</div>
        <ToggleButton isActive={isOpen} onClick={(e) => toggleAccordion(e)}>
          <VscChevronDown />
          <VscChevronUp />
        </ToggleButton>
      </div>
      {isOpen && (
        <div
          className={`${
            rounded && 'rounded-bl-lg rounded-br-lg overflow-hidden'
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Accordion;

Accordion.Content = AccordionContent;
Accordion.Bar = AccordionBar;
