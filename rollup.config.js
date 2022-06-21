import { nodeResolve } from '@rollup/plugin-node-resolve';

// https://rollupjs.org/guide/en/#configuration-files
export default {
  input: 'client/js/main.js',
  output: {
    file: 'client/js/bundle.js',
    format: 'cjs'
  },
  // https://github.com/rollup/plugins/tree/master/packages/node-resolve
  plugins: [nodeResolve()]
};