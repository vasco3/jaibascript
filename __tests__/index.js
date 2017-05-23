const path = require('path');
const pluginTester = require('babel-plugin-tester');
const plugin = require('../src/index');

pluginTester({
  plugin,
  fixtures: path.join(__dirname, '__fixtures__'),
  tests: [
    {
      title: 'Bool',
      code: 'Booleano()',
      output: 'Boolean()',
    },
    {
      title: 'Fecha',
      code: 'Fecha.prototipo.definirFecha()',
      output: 'Date.prototype.setDate()',
    },
    {
      title: 'nueva Fecha',
      code: 'new Fecha()',
      output: 'new Date()',
    },
    {
      title: 'Lista',
      code: 'Lista.prototipo.mapear()',
      output: 'Array.prototype.map()',
    },
    {
      title: 'mapear',
      code: 'lista.mapear()',
      output: 'lista.map()',
    },
    {
      title: 'reducir',
      code: 'ciudades.reducir()',
      output: 'ciudades.reduce()',
    },
    {
      title: 'Numero',
      code: 'Numero.prototipo.esEntero()',
      output: 'Number.prototype.isInteger()',
    },
    {
      title: 'Texto',
      code: 'Texto.prototipo.separar()',
      output: 'String.prototype.split()',
    },
    {
      title: 'JSON parse',
      code: 'JSON.convertir()',
      output: 'JSON.parse()',
    },
    {
      title: 'funcion',
      code: 'funcion f()',
      output: 'function f()',
    },
  ],
});


