import type { StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
