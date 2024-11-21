import React, { ButtonHTMLAttributes } from "react";

interface ButtonSocialProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  
}

const ButtonSocial: React.FC<ButtonSocialProps> = ({
  children,  
}) => {
  return (
    <button
      className="
        bg-transparent text-white border border-white 
        p-2  rounded-full items-center justify-center 
        cursor-pointer transition-colors duration-300 ease-in-out
      "
    >
      <span className="text-white">{children}</span>
    </button>
  );
};

export default ButtonSocial;

