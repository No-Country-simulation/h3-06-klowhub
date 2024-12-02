import type { Meta, StoryObj } from '@storybook/react';
import SwitcherButton from './SwitcherButton';
import { PiRocketLaunchLight } from 'react-icons/pi';
import { RiMailLine } from 'react-icons/ri';

const meta = {
  title: 'Buttons/SwitcherButton',
  tags: ['autodocs'],
  component: SwitcherButton,
  parameters: {
    layout: 'padded',
    title: 'Default SwitcherButton',
    componentSubtitle:
      'The `SwitcherButton` component is a versatile React SwitcherButton component that can be customized with various variants and sizes.',
  },
  args: {
    isActive: false,
  },
  argTypes: {
    variant: {
      description: 'The colors of the buttons',
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    isActive: {
      description: 'The different sizes',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof SwitcherButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Primary: Story = {
  args: {
    leftComponent: 'Home',
    rightComponent: 'Platform',
    variant: 'primary',
  },
};

export const Icon: Story = {
  args: {
    leftComponent: <RiMailLine />,
    rightComponent: <PiRocketLaunchLight />,
    variant: 'secondary',
  },
};
