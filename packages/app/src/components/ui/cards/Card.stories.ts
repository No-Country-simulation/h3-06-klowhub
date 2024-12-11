import { Meta, StoryObj } from '@storybook/react';
import Card from './Card'; // Ruta de tu componente

const meta: Meta<typeof Card> = {
  title: 'Card/Base',
  component: Card,
  tags: ['autodocs'], // Habilita documentación automática
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
    },
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    id: 1,
    title: 'Creación de aplicaciones empresariales',
    description:
      'Descubre cómo desarrollar aplicaciones personalizadas que optimicen los procesos de tu empresa.',
    imageUrl: 'https://picsum.photos/400/200',
    duration: '30 horas',
    level: 'Intermedio',
    tag: 'Power Apps',
    rating: 3.5,
    reviews: 136,
  },
};
