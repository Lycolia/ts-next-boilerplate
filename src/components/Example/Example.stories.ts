import type { ComponentStoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Example } from './Example';

type Story = ComponentStoryObj<typeof Example>;

export default { component: Example };

export const Default: Story = {};
export const SetDefault: Story = {
  args: {
    text: 'Test',
    bgColor: 'cyan',
    onClick: action('clicked!'),
  },
};
