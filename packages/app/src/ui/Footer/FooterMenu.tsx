import React from 'react';
import MenuItem from '@/ui/Footer/MenuItem';
import { ReactNode } from 'react';

interface FooterMenuProps {
  title: string;
  options: (string | ReactNode)[];
}

const FooterMenu: React.FC<FooterMenuProps> = ({ title, options }) => {
  // Determinamos si las opciones son iconos o texto
  const areAllIcons = options.every((option) => typeof option !== 'string');

  return (
    <div className="flex flex-col space-y-1 text-xs">
      <h3 className=" font-semibold text-xs text-[#bfa3e7]">{title}</h3>
      <ul
        className={`space-y-1 ${areAllIcons ? 'flex flex-row space-x-4' : ''}`}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            text={typeof option === 'string' ? option : undefined}
            icon={typeof option !== 'string' ? option : undefined}
          />
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
