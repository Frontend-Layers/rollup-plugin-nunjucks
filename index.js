import { createFilter } from '@rollup/pluginutils';
import { Environment, FileSystemLoader } from 'nunjucks';

export default function NunjucksPlugin(options = {}) {
  const {
    extensions = ['.html', '.njk'],
    include,
    exclude,
    context = {}
  } = options;

  const filter = createFilter(
    include || extensions.map(ext => `**/*${ext}`),
    exclude || []
  );

  const env = new Environment(new FileSystemLoader('/'));

  return {
    name: 'rollup-plugin-nunjucks',
    transform(code, id) {
      if (!filter(id)) return null;

      try {
        const compiled = env.render(id, context);
        return {
          code: `export default ${JSON.stringify(compiled)};`,
          map: { mappings: '' }
        };
      } catch (error) {
        this.error(`Nunjucks rendering error in ${id}: ${error.message}`);
      }
    }
  };
}