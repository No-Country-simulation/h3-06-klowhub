import { Meta, StoryObj } from '@storybook/react';
import SignInButton from './SignInButton';
import { mock, fn } from 'jest';

mock('@/_lib/actions/session', () => ({
  getSession: fn(),
}));

import { getSession } from '@/_lib/actions/session';

const mockGetSessionNoUser = fn(() => Promise.resolve(null));
const mockGetSessionWithUser = fn(() =>
  Promise.resolve({
    user: {
      _id: '123',
      userName: 'Juan Pérez',
      role: 'admin',
    },
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
  }),
);

const withMockedSession = (getSessionMock: Mock) => {
  return (Story: any) => {
    getSession.mockImplementation(getSessionMock);
    return <Story />;
  };
};

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
  decorators: [withMockedSession(mockGetSessionNoUser)],
};

export const Authenticated: Story = {
  render: () => <SignInButton />,
  decorators: [withMockedSession(mockGetSessionWithUser)],
};
