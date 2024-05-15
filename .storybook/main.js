module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
