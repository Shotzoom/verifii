const join = require('path').join;
const pkg = require('./package.json');

export default {
  input: join('lib/verifii.js'),
  output: [
    { file: pkg.main, name: 'verifii', format: 'umd' }
  ]
}
