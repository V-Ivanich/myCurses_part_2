import styles from 'rollup-plugin-styles'
import serve from 'rollup-plugin-serve'
import image from 'rollup-plugin-img'
import { babel } from '@rollup/plugin-babel'
import livereload from 'rollup-plugin-livereload'

export default {
  input: './index.js',
  output: {
    file: './builds/bundle.js',
    format: 'cjs',
  },
  watch: {
    exclude: 'node_modules/**',
  },
  plugins: [
    serve({
      open: true,
      port: 8000,
    }),
    styles(),
    image({
      limit: 1000000,
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/env'],
    }),
    livereload(),
  ],
}
