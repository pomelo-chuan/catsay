import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const plugins = [
  nodeResolve({
    preferBuiltins: true,
  }),
  commonjs(),
  json(),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: false,
    declarationMap: false,
  }),
];

export default [
  {
    input: 'src/index.ts',
    plugins,
    output: [
      { file: 'dist/catsay.cjs', format: 'cjs', exports: 'named' },
      { file: 'dist/catsay.es.js', format: 'es' },
      { file: 'dist/catsay.umd.js', format: 'umd', name: 'catsay' },
    ],
  },
  {
    input: 'src/cli.ts',
    plugins,
    external: (id) => id === 'yargs' || id.startsWith('node:'),
    output: {
      file: 'dist/cli.cjs',
      format: 'cjs',
      banner: '#!/usr/bin/env node',
    },
  },
];
