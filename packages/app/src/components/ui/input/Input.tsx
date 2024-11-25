import { InputHTMLAttributes } from 'react';

function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="border rounded-md w-full p-2" {...rest} />;
}

export default Input;
