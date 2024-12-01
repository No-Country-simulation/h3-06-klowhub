import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; 
  fullWidth?: boolean; 
}

const Input: React.FC<InputProps> = ({
  fullWidth = false,
  ...props
}) => {
  return (
    <div className={`flex flex-col ${fullWidth ? 'w-full' : ''}`}>
      
      <input
        {...props}
        className={`p-2 border text-xs rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      
    </div>
  );
};

export default Input;
