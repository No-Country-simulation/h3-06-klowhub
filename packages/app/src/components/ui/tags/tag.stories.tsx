import AppSheetLogo from '@/assets/appSheetLogo.svg';
import PowerAppLogo from '@/assets/powerAppLogo.svg';
import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';

const meta = {
  title: 'Layouts/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <img src={AppSheetLogo.src} alt="AppSheet Logo" />,
    children: 'AppSheet',
  },
};

export const PowerApp: Story = {
  args: {
    icon: <img src={PowerAppLogo.src} alt="PowerApp Logo" />,
    children: 'Power Apps',
  },
};

export const Badge: Story = {
  args: {
    children: 'Logística',
  },
};
