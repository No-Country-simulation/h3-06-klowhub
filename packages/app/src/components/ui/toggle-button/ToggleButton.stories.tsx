import ToggleButton from './ToggleButton';
import { ArrowDown, ArrowTop } from '../icons';
import type { Meta, StoryObj } from '@storybook/react';

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
      <ArrowDown key="0" className="w-4 h-4" />,
      <ArrowTop key="1" className="w-4 h-4" />,
    ],
  },
};
