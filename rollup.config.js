export default {
  input: 'index.js',
  output: [
    { file: 'dist/bundle.cjs.js', format: 'cjs' },
    { file: 'dist/bundle.umd.js', format: 'umd' }
  ]
}
