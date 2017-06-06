const booleano = require('./booleano');
const fecha = require('./fecha');
const json = require('./json');
const lista = require('./lista');
const numero = require('./numero');
const texto = require('./texto');

exports.globalFunctions = {
  codificarComponenteURI: 'encodeURIComponent',
  codificarURI: 'encodeURI',
  decodificarComponenteURI: 'decodeURIComponent',
  decodificarURI: 'decodeURI',
  deTextoAEntero: 'parseInt',
  deTextoAFraccionario: 'parseFloat',
  esAntiNumero: 'isNaN',
  esFinito: 'isFinite',
  evaluar: 'eval',
};

exports.globalProperties = {
  AntiNumero: 'NaN',
  indefinido: 'undefined',
  Infinito: 'Infinity',
  nulo: 'null',
};

exports.fundamentalObjects = {
  Booleano: 'Boolean',
  Error: 'Error',
  ErrorEvaluacion: 'EvalError',
  Funcion: 'Function',
  ErrorInterno: 'InternalError',
  Objecto: 'Object',
  ErrorDeRango: 'RangeError',
  ErrorDeReferencia: 'ReferenceError',
  Simbolo: 'Symbol',
  ErrorDeSintaxis: 'SyntaxError',
  ErrorDeTipo: 'TypeError',
  ErrorURI: 'URIError'
};

exports.ObjetosEstandard = {
  Fecha: 'Date',
  Lista: 'Array',
  Numero: 'Number',
  Texto: 'String',
};

/**********
 * Comunes
 *
 * Metodos y propiedades que coinciden en varios Standard Objects
 **********/
const comunes = {
  // propiedades
  longitud: 'length',
  prototipo: 'prototype',

  // metodos
  aTexto: 'toString',
  concatenar: 'concat',
  incluye: 'includes',
  indiceDe: 'indexOf',
  ultimoIndiceDe: 'lastIndexOf',
};

exports.PropiedadesMetodosDeObjetosEstandard = Object.assign({}, booleano, comunes, fecha, json, lista, numero, texto);

