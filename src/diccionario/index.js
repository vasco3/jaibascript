
exports.ObjetosEstandard = {
  Fecha: 'Date',
  Lista: 'Array',
  Numero: 'Number',
  Texto: 'String',
};

exports.PropiedadesMetodosDeObjetosEstandard = {
  /**********
   * Comunes
   *
   * Metodos y propiedades que coinciden en varios Standard Objects
   **********/

  // propiedades
  longitud: 'length',
  prototipo: 'prototype',
  // metodos
  aTexto: 'toString',
  concatenar: 'concat',
  incluye: 'includes',
  indiceDe: 'indexOf',
  ultimoIndiceDe: 'lastIndexOf',

  /**
   * Fecha
   * original: Date
   */

  // metodos
  UTC: 'UTC',
  ahora: 'now',
  convertir: 'parse',
  obtenerFecha: 'getDate',
  obtenerDia: 'getDay',
  obtenerAnioCompleto: 'getFullYear',
  obtenerHoras: 'getHours',
  obtenerMilisegundos: 'getMilliseconds',
  obtenerMinutos: 'getMinutes',
  obtenerMes: 'getMonth',
  obtenerSegundos: 'getSeconds',
  obtenerTiempo: 'getTime',
  obtenerDesfaceUsoHorario: 'getTimezoneOffset',
  obtenerFechaUTC: 'getUTCDate',
  obtenerDiaUTC: 'getUTCDay',
  obtenerAnioCompletoUTC: 'getUTCFullYear',
  obtenerHorasUTC: 'getUTCHours',
  obtenerMilisegundosUTC: 'getUTCMilliseconds',
  obtenerMinutosUTC: 'getUTCMinutes',
  obtenerMesUTC: 'getUTCMonth',
  obtenerSegundosUTC: 'getUTCSeconds',
  definirFecha: 'setDate',
  definirAnioCompleto: 'setFullYear',
  definirHoras: 'setHours',
  definirMilisegundos: 'setMilliseconds',
  definirMinutos: 'setMinutes',
  definirMes: 'setMonth',
  definirSegundos: 'setSeconds',
  definirTiempo: 'setTime',
  definirFechaUTC: 'setUTCDate',
  definirAnioCompletoUTC: 'setUTCFullYear',
  definirHorasUTC: 'setUTCHours',
  definirMilisegundosUTC: 'setUTCMilliseconds',
  definirMinutosUTC: 'setUTCMinutes',
  definirMesUTC: 'setUTCMonth',
  definirSegundosUTC: 'setUTCSeconds',
  aFechaEnTexto: 'toDateString',
  aTextoISO: 'toISOString',
  aJSON: 'toJSON',
  aFechaEnTextoLocalizada: 'toLocaleDateString',
  aFormatoLocalizado: 'toLocaleFormat',
  aTiempoEnTextoLocalizado: 'toLocaleTimeString',
  aTiempoEnTexto: 'toTimeString',
  aTextoUTC: 'toUTCString',

  /**
   * JSON
   */
  // metodos
  convertir: 'parse',
  // aTexto: 'stringify',

  /*********
   * Lista
   * original: Array
   *********/
  // metodos
  adjuntar: 'push',
  aFuente: 'toSource',
  algunos: 'some',
  cadaUno: 'every',
  claves: 'keys',
  copiarDentro: 'copyWithin',
  cortarCopia: 'slice',
  cortarOriginal: 'splice',
  de: 'of',
  desde: 'from',
  destronar: 'shift',
  encontrar: 'find',
  encontrarIndice: 'findIndex',
  entradas: 'entries',
  esLista: 'isArray',
  expulsar: 'pop',
  filtrar: 'filter',
  juntar: 'join',
  llenar: 'fill',
  mapear: 'map',
  ordenar: 'sort',
  paraCadaUno: 'forEach',
  preadjuntar: 'unshift',
  reducir: 'reduce',
  reducirDerecha: 'reduceRight',
  revertir: 'reverse',
  valores: 'values',

  /********
   * Numero
   * original: Number
   ********/

  // propiedades
  AntiNumero: 'NaN',
  ENTERO_SEGURO_MAXIMO: 'MAX_SAFE_INTEGER',
  ENTERO_SEGURO_MINIMO: 'MIN_SAFE_INTEGER',
  EPSILON: 'EPSILON',
  INFINITO_NEGATIVO: 'NEGATIVE_INFINITY',
  INFINITO_POSITIVO: 'POSITIVE_INFINITY',
  VALOR_MAXIMO: 'MAX_VALUE',
  VALOR_MINIMO: 'MIN_VALUE',

  // metodos
  aExponencial: 'toExponential',
  aFraccionario: 'toFixed',
  conPrecision: 'toPrecision',
  deTextoAEntero: 'parseInt',
  deTextoAFraccionario: 'parseFloat',
  esAntiNumero: 'isNaN',
  esEntero: 'isInteger',
  esEnteroSeguro: 'isSafeInteger',
  esFinite: 'isFinite',

  /********
   * Texto
   ********/

  // metodos
  aMayusculas: 'toUpperCase',
  aMayusculasLocalizadas: 'toLocaleUpperCase',
  aMinusculas: 'toLowerCase',
  aMinusculasLocalizadas: 'toLocaleLowerCase',
  ancla: 'anchor',
  buscar: 'search',
  characterEn: 'charAt',
  codigoCaracterEn: 'charCodeAt',
  coditoPuntoEn: 'codePointAt',
  compararLocal: 'localeCompare',
  copiarCaracteresPorCantidad: 'substr',
  copiarCaracteresPorIndice: 'substring',
  cortar: 'slice',
  crudo: 'raw',
  deCodigoCaracter: 'fromCharCode',
  deCodigoPunto: 'fromCodePoint',
  empiezaCon: 'startsWith',
  encontrarExpresionRegular: 'match',
  enlazar: 'link',
  normalizar: 'normalize',
  recortar: 'trim',
  recortarDerecha: 'trimRight',
  recortarIzquierda: 'trimLeft',
  reemplazar: 'replace',
  repetir: 'repeat',
  separar: 'split',
  terminaCon: 'endsWith',
  valodDe: 'valueOf',
};

