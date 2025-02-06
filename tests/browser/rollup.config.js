import nunjucksPlugin from '../../index.js';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'MyApp',
  },
  plugins: [
    nunjucksPlugin({
      extensions: ['.html'],
    }),
  ],
};
