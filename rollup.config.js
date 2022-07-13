// Import rollup plugins
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';

// https://rollupjs.org/guide/en/#configuration-files
// https://lit.dev/docs/tools/production/
export default {
    input: 'client/js/main.js',
    plugins: [
      // Resolve bare module specifiers to relative paths
      resolve(),
      // Minify HTML template literals
      minifyHTML(),
      // Minify JS
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
      }),
      // Print bundle summary
      summary(),
      // Optional: copy any static assets to build directory
      copy({
        patterns: ['images/**/*'],
      }),
    ],
    output: {
        file: 'client/js/bundle.js',
        format: 'cjs'
    },
    preserveEntrySignatures: 'strict',
};