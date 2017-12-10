const booleano = require('./boolean');
const fecha = require('./date');
const json = require('./json');
const lista = require('./array');
const numero = require('./number');
const texto = require('./string');

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
  ErrorURI: 'URIError',
};

exports.globalFunctions = {
  codificarComponenteURI: 'encodeURIComponent',
  codificarURI: 'encodeURI',
  decodificarComponenteURI: 'decodeURIComponent',
  decodificarURI: 'decodeURI',
  deTextoAEntero: 'parseInt',
  deTextoAFraccionario: 'parseFloat',
  esNeN: 'isNaN',
  esFinito: 'isFinite',
  evaluar: 'eval',
};

exports.globalProperties = {
  NeN: 'NaN',
  indefinido: 'undefined',
  Infinito: 'Infinity',
  nulo: 'null',
};

exports.keyedCollections = {
  Mapa: 'Map',
  MapaDebil: 'WeakMap',
  Serie: 'Set',
  SerieDebil: 'WeakSet',
};

exports.indexedCollections = {
  // Float32Array: 'Float32Array',
  // Float64Array: 'Float64Array',
  // Int16Array: 'Int16Array',
  // Int32Array: 'Int32Array',
  // Int8Array: 'Int8Array',
  Lista: 'Array',
  // Uint16Array: 'Uint16Array',
  // Uint32Array: 'Uint32Array',
  // Uint8Array: 'Uint8Array',
  // Uint8ClampedArray: 'Uint8ClampedArray',
};

exports.numbersAndDates = {
  Fecha: 'Date',
  Mate: 'Math',
  Numero: 'Number',
};

exports.textProcessing = {
  ExpresionRegular: 'RegExp',
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

exports.PropiedadesMetodosDeObjetosEstandard = Object.assign(
  {},
  booleano,
  comunes,
  fecha,
  json,
  lista,
  numero,
  texto,
);
