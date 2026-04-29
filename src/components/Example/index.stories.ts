import { StoryObj } from '@storybook/nextjs-vite';
import { action } from 'storybook/actions';
import { Example } from '.';

type Story = StoryObj<typeof Example>;

export default { component: Example };

export const Default: Story = {};
export const SetDefault: Story = {
  args: {
    text: 'Test',
    bgColor: 'cyan',
    onClick: action('clicked!')
  }
};
