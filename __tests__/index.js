const path = require('path');
const pluginTester = require('babel-plugin-tester');
const plugin = require('../src/index');

pluginTester({
  plugin,
  // snapshot: true,
  fixtures: path.join(__dirname, '__fixtures__'),
  tests: [
    {
      code: 'lista.mapear()',
      output: 'lista.map()',
    },
    {
      code: 'ciudades.reducir()',
      output: 'ciudades.reduce()',
    },
  ],
});


