'use client';
import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

const SubmitButton = ({ children }: { children: ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="w-full mt-2 bg-primary-lavander-600 p-3 rounded-lg text-white weight-bolder hover:bg-primary-lavander-400 transition-colors duration-300 ease-in-out"
    >
      {pending ? 'Submitting...' : children}
    </button>
  );
};

export default SubmitButton;
