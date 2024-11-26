import ButtonSocial from './ButtonSocial';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Fields/InputText',
  tags: ['autodocs'],
  component: ButtonSocial,
  parameters: {
    layout: 'padded',
    title: 'ButtonSocial',
    componentSubtitle: 'The ButtonSocial component',
  },
} satisfies Meta<typeof ButtonSocial>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: { children: 'Google' },
};
