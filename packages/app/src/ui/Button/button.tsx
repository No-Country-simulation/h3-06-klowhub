import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  fullWidth = false,
  children,
}) => {
  return (
    <button
      className={`
        ${color === "primary" ? "bg-[#9d32bc] text-white font-medium" : "bg-transparent text-purple-700 border-2 border-purple-700 font-semibold"}
        ${fullWidth ? "w-60" : "inline-flex"}
        px-5 py-2 text-xs rounded-lg items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out
      `}
    >
      {children}
    </button>
  );
};

export default Button;
