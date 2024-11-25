import React from "react";
import { ReactNode } from "react";

interface MenuItemProps {
  text?: string;  
  icon?: ReactNode;  
}

const MenuItem: React.FC<MenuItemProps> = ({ text, icon }) => {
  return (
    <li className="flex items-center space-x-2 cursor-pointer">
    
      {icon && <span className="text-white text-xl">{icon}</span>}
      {text && <span className="text-white">{text}</span>}
    </li>
  );
};

export default MenuItem;
