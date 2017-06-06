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
      title: 'AntiNumero',
      code: 'AntiNumero',
      output: 'NaN',
    },
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
  ],
});


