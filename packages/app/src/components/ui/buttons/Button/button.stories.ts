import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Buttons/DefaultButton',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    layout: 'padded',
    title: 'Default Buttons',
    componentSubtitle:
      'The `Button` component is a versatile React button component that can be customized with various variants and sizes.',
  },
  argTypes: {
    color: {
      description: 'The colors of the buttons',
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    fullWidth: {
      description: 'The different sizes',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'xl',
    fullWidth: false,
    children: 'Botón',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
};

export const Terciary: Story = {
  args: {
    ...Primary.args,
    variant: 'terciary',
  },
};

export const Social: Story = {
  args: {
    ...Primary.args,
    variant: 'social',
  },
};

export const large: Story = {
  args: {
    ...Primary.args,
    size: 'l',
  },
};

export const small: Story = {
  args: {
    ...Primary.args,
    size: 's',
  },
};

export const fullWidth: Story = {
  args: {
    ...Primary.args,
    fullWidth: true,
  },
};
