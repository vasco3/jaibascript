
const properties = {
  adjuntar: 'push',
  aFuente: 'toSource',
  algunos: 'some',
  aTexto: 'toString',
  aTextoLocal: 'toLocaleString',
  cadaUno: 'every',
  claves: 'keys',
  concatenar: 'concat',
  copiarDentro: 'copyWithin',
  cortarCopia: 'slice',
  cortarOriginal: 'splice',
  de: 'of',
  destronar: 'shift',
  buscar: 'find',
  buscarIndice: 'findIndex',
  entradas: 'entries',
  esLista: 'isArray',
  expulsar: 'pop',
  filtrar: 'filter',
  desde: 'from',
  incluye: 'includes',
  indiceDe: 'indexOf',
  juntar: 'join',
  llenar: 'fill',
  longitud: 'length',
  mapear: 'map',
  ordenar: 'sort',
  paraCadaUno: 'forEach',
  preadjuntar: 'unshift',
  prototipo: 'prototype',
  reducir: 'reduce',
  reducirDerecha: 'reduceRight',
  revertir: 'reverse',
  ultimoIndiceDe: 'lastIndexOf',
  valores: 'values',
};

module.exports = function jaibascript({types: t}) {
  return {
    name: 'jaibascript',
    visitor: {
      MemberExpression(path) {
        const property = properties[path.node.property.name];
        if (property) {
          path.node.property = t.identifier(property);
        }
      }
    }
  }
};
