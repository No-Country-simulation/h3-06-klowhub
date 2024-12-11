import type { Meta, StoryObj } from '@storybook/react';
import NavBarCollapse from './NavBarCollapse';

const meta = {
  title: 'Nav/NavBarCollapse',
  tags: ['autodocs'],
  component: NavBarCollapse,
  parameters: {
    title: 'NavBarCollapse',
    componentSubtitle: 'The NavBarCollapse component',
  },
} satisfies Meta<typeof NavBarCollapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'text-black',
    children: (
      <ul>
        <li>hola</li>
        <li>chau</li>
      </ul>
    ),
  },
  render: (args) => (
    <div className="w-screen flex flex-col">
      <NavBarCollapse {...args}></NavBarCollapse>
    </div>
  ),
};
