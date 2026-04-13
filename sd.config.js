// sd.config.js — Style Dictionary configuration
// Run with: npm run tokens
// Output: src/tokens/tokens.css

import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['src/tokens/tokens.json'],

  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'pebble',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: true,
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
console.log('\n✅  Tokens built → src/tokens/tokens.css + tokens.js\n');
