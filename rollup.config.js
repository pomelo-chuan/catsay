import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';

export default {
  input: 'lib/index.js',
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    babel({ babelHelpers: 'bundled' }),
  ],
  output: [
    { file: 'dist/catsay.umd.js', format: 'umd', name: 'catsay' },
    { file: 'dist/catsay.es.js', format: 'es' },
  ],
}
