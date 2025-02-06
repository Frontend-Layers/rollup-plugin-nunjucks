# rollup-plugin-nunjucks

A Rollup plugin for rendering Nunjucks templates.

## Installation

```bash
npm install --save-dev rollup-plugin-nunjucks nunjucks
```

Note: Add `nunjucks` as a peer dependency.

## Usage

In your rollup.config.js, import the plugin and add it to the plugins array:

```javascript
import nunjucksPlugin from 'rollup-plugin-nunjucks';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
  },
  plugins: [
    nunjucksPlugin({
      extensions: ['.html', '.njk'],
      context: {
        title: 'My Nunjucks Template',
        version: '1.0.0'
      },
    }),
  ]
};
```

## Options

- `extensions` (Array): File extensions to process (default: `['.html']`).
- `context` (Object): Data to pass into templates (default: `{}`).
- `include` (String|Array): Glob patterns for files to include
- `exclude` (String|Array): Glob patterns for files to exclude


## Example

Render a template with dynamic data:

```html
<h1>{{ title }}</h1>
<p>Version: {{ version }}</p>
```

## Requirements

- Rollup
- Nunjucks

## License

MIT