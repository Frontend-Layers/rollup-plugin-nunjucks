import { expect } from 'chai';
import { rollup } from 'rollup';
import nunjucks from './../../index.js';
import { join, dirname } from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('rollup-plugin-nunjucks', () => {
  it('should compile nunjucks template', async () => {

    const bundle = await rollup({
      input: join(__dirname, 'fixtures', 'template.html'),
      plugins: [
        nunjucks({
          context: { name: 'World' },
        })
      ]
    });

    const { output } = await bundle.generate({ format: 'es' });
    const compiled = output[0].code;
    expect(compiled).to.equal('var template = "Hello, World!";\n\nexport { template as default };\n');
  });

  it('should handle include and exclude patterns', async () => {
    const bundle = await rollup({
      input: join(__dirname, 'fixtures', 'template.html'),
      plugins: [
        nunjucks({
          include: '**/*.html',
          exclude: '**/excluded.html',
          context: { name: 'World' }
        })
      ]
    });

    const { output } = await bundle.generate({ format: 'es' });
    const compiled = output[0].code;

    expect(compiled).to.equal('var template = "Hello, World!";\n\nexport { template as default };\n');
  });
});