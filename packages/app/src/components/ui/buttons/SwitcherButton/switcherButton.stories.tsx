import type { Meta, StoryObj } from '@storybook/react';
import SwitcherButton from './SwitcherButton';

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
  argTypes: {},
} satisfies Meta<typeof SwitcherButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Primary: Story = {
  args: {},
};
