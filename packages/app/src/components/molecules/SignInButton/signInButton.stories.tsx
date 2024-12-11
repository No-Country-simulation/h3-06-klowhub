import type { Meta, StoryObj } from '@storybook/react';
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

export const Default: Story = {
  // async beforeEach() {
  //   getSession.mockReturnValue(
  //     Promise.resolve({
  //       user: {
  //         _id: 'id',
  //         userName: 'jose',
  //         role: 'admin',
  //       },
  //       accessToken: 'accessToken',
  //       refreshToken: 'refreshToken',
  //     }),
  //   );
  // },
  // parameters: {
  //   cookie: {
  //     session:
  //       'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7Il9pZCI6InVubyIsInVzZXJOYW1lIjoibWFyaWEiLCJyb2xlIjoiVkVOREVET1IifSwicmVmcmVzaFRva2VuIjoicmVmcmVzaFRva2VuIiwiYWNjZXNzVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPaUkyTnpSallXSTVaVGcxTVRVNE9XSmxPV1UxWWpNMk9UVWlMQ0psYldGcGJDSTZJbXRoZEdkbFpXc3VaR1YyUUdkdFlXbHNMbU52YlNJc0ltbGhkQ0k2TVRjek16RTJNak0xT0N3aVpYaHdJam94TnpNek1UWTFPVFU0ZlEuUFRnX1ZKRWY4bjFvUlYza2V5SEhuMDg2MmpGd2JiZWcwLWl6MlpCZEVNWSIsImlhdCI6MTczMzE2MjM1OCwiZXhwIjoxNzMzNzY3MTU4fQ.bo6NXJIylnZZ0EEJJPyy2cAhTVEWOMUAAk8zhUOjWvQ',
  //   },
  // },
};
