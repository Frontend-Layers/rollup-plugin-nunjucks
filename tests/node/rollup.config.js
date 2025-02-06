import nunjucksPlugin from '../../index.js';

export default {
  input: 'test/input/template.html',
  output: {
    file: 'test/output/bundle.js',
    format: 'es',
  },
  plugins: [
    nunjucksPlugin({
      extensions: ['.html'],
      context: {
        title: 'Hello, Nunjucks!',
      },
    })
  ]
};