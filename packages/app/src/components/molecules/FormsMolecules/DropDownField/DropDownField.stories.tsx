'use client';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  categoryList,
  TCategoryItem,
} from './components/CategoryLabel/category.interface';
import { CategoryLabel, DropDownField } from './index';

const meta = {
  title: 'Fields/DropDownField',
  component: DropDownField,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof DropDownField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ref: null,
    options: ['Pequeño', 'Regular', 'Medio'],
    placeholder: 'Tamaño',
  },
};

export const Objects: Story = {
  args: {
    ref: null,
    options: categoryList,
    indexChamp: 'text',
    iconChamp: 'icon',
    placeholder: 'Categorias',
    component: (elem: unknown) => {
      const { icon, text } = elem as TCategoryItem;
      return <CategoryLabel icon={icon} text={text} size={'normal'} />;
    },
  },
  // Resto de las configuraciones...
};
