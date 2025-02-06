import * as rollup from 'rollup';
import config from './rollup.config.js';

async function run() {
  const bundle = await rollup.rollup(config);
  await bundle.write(config.output);
}

run();