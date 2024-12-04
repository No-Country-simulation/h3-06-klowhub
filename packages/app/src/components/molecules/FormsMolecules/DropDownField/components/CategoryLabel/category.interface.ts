import { ComponentType } from 'react';
import {
  MdHealthAndSafety,
  MdOutlineHealthAndSafety,
  MdOutlineToys,
  MdToys,
} from 'react-icons/md';
import {
  RiBankFill,
  RiBankLine,
  RiGovernmentFill,
  RiGovernmentLine,
} from 'react-icons/ri';

// Define el tipo genérico para los elementos en options
export type TCategoryItem = {
  id: string;
  icon: ComponentType;
  iconActive: ComponentType;
  text: string;
  link: string;
  tags: string[];
};

/** Example data */

export const categoryList: Array<TCategoryItem> = [
  {
    id: '1',
    icon: MdHealthAndSafety,
    iconActive: MdOutlineHealthAndSafety,
    text: 'Salud',
    link: '/category/health',
    tags: ['9', '13'],
  },
  {
    id: '2',
    icon: MdOutlineToys,
    iconActive: MdToys,
    text: 'Juguetes',
    link: '/category/Toys',
    tags: ['10', '11', '12'],
  },
  {
    id: '3',
    icon: RiBankLine,
    iconActive: RiBankFill,
    text: 'Bancos',
    link: '/category/banks',
    tags: ['1', '3', '4', '5', '6', '7', '8'],
  },
  {
    id: '4',
    icon: RiGovernmentLine,
    iconActive: RiGovernmentFill,
    text: 'Gobierno',
    link: '/category/government',
    tags: ['1', '2', '8'],
  },
];
