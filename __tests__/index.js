const path = require('path');
const plugin = require('../src/index');
const pluginTester = require('babel-plugin-tester');

// Json blobs
const arrayTests = require('./array');
const booleanTests = require('./boolean');
const dateTests = require('./date');
const jsonTests = require('./json');
const numberTests = require('./number');
const stringTests = require('./string');

pluginTester({
  plugin,
  fixtures: path.join(__dirname, '__fixtures__'),
  tests: [
    ...arrayTests,
    ...booleanTests,
    ...dateTests,
    ...jsonTests,
    ...numberTests,
    ...stringTests,
    {
      title: 'undefined',
      code: 'indefinido',
      output: 'undefined',
    },
    {
      title: 'encodeURIComponent',
      code: 'codificarComponenteURI()',
      output: 'encodeURIComponent()',
    },
    {
      title: 'encodeURI',
      code: 'codificarURI()',
      output: 'encodeURI()',
    },
    {
      title: 'decodeURIComponent',
      code: 'decodificarComponenteURI()',
      output: 'decodeURIComponent()',
    },
    {
      title: 'decodeURI',
      code: 'decodificarURI()',
      output: 'decodeURI()',
    },
    {
      title: 'parseFloat',
      code: 'deTextoAFraccionario()',
      output: 'parseFloat()',
    },
    {
      title: 'parseInt',
      code: 'deTextoAEntero()',
      output: 'parseInt()',
    },
    {
      title: 'AntiNumero',
      code: 'AntiNumero',
      output: 'NaN',
    },
    {
      title: 'isNaN',
      code: 'esAntiNumero()',
      output: 'isNaN()',
    },
    {
      title: 'isFinite',
      code: 'esFinito()',
      output: 'isFinite()',
    },
    {
      title: 'eval',
      code: 'evaluar()',
      output: 'eval()',
    },
    {
      title: 'null',
      code: 'nulo',
      output: 'null',
    },
    {
      title: 'Infinity',
      code: 'Infinito',
      output: 'Infinity',
    },
  ],
});
