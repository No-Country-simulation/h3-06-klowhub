'use client';
import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import Button from '../buttons/BaseButton/BaseButton';

const SubmitButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: 'string';
}) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      variant="primary"
      size="xl"
      className={className}
    >
      {pending ? 'Submitting...' : children}
    </Button>
  );
};

export default SubmitButton;
