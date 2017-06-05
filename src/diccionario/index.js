const booleano = require('./booleano');
const fecha = require('./fecha');
const json = require('./json');
const lista = require('./lista');
const numero = require('./numero');
const texto = require('./texto');

exports.propiedadesGlobales = {
  AntiNumero: 'NaN',
};

exports.ObjetosEstandard = {
  Booleano: 'Boolean',
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

