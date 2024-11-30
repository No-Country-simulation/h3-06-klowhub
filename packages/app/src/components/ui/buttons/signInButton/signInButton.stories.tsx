import { Meta, StoryObj } from '@storybook/react';
import SignInButton from './SignInButton';

const meta: Meta<typeof SignInButton> = {
  title: 'Nav/SignInButton',
  component: SignInButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    componentSubtitle:
      'El componente `SignInButton` muestra botones dependiendo del estado de autenticación del usuario.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NotAuthenticated: Story = {
  render: () => <SignInButton />,
};

export const Authenticated: Story = {
  render: () => <SignInButton />,
};
