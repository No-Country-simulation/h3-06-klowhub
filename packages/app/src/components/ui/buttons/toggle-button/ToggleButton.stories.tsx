import ToggleButton from './ToggleButton';
import type { Meta, StoryObj } from '@storybook/react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const meta = {
  title: 'Buttons/ToggleButton',
  tags: ['autodocs'],
  component: ToggleButton,
  parameters: {
    layout: 'padded',
    title: 'A button that toggle its state',
  },
  argTypes: {
    variant: {
      description: 'Button State',
      control: 'radio',
      options: ['default', 'rounded'],
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    children: [
      <RiArrowDownSLine key="0" className="w-4 h-4" />,
      <RiArrowUpSLine key="1" className="w-4 h-4" />,
    ],
  },
};
