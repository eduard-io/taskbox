import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  //stories: ['../src/app/*.mdx', '../src/app/components/**/*.stories.ts'],
   stories: [
    //👇 Your documentation written in MDX along with your stories goes here
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y', // Enable accesibility addon
    '@storybook/addon-designs', // Figma
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;