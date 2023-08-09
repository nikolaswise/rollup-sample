import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'process.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [nodeResolve()]
};