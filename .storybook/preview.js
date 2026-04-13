import '../src/tokens/tokens.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'subtle', value: '#F1EFE8' },
        { name: 'dark', value: '#2C2C2A' },
      ],
    },
    a11y: {
      // Storybook a11y addon — surfaces contrast issues from your token choices
      config: {},
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
        },
      },
    },
  },
};

export default preview;
