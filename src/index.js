
const {
  ObjetosEstandard,
  PropiedadesMetodosDeObjetosEstandard
} = require('./diccionario');

module.exports = function jaibascript({types: t}) {
  return {
    name: 'jaibascript',
    visitor: {
      CallExpression(path) {
        const callee = ObjetosEstandard[path.node.callee.name];

        if (callee) {
          path.node.callee = t.identifier(callee);
        }
      },
      MemberExpression(path) {
        const objectName = (path.node.object || {}).name || '';
        const primitiveIdentifier = ObjetosEstandard[objectName];

        if (primitiveIdentifier) {
          path.node.object = t.identifier(primitiveIdentifier);
        }

        const property = PropiedadesMetodosDeObjetosEstandard[path.node.property.name];

        if (property) {
          path.node.property = t.identifier(property);
        }
      },
      NewExpression(path) {
        const callee = ObjetosEstandard[path.node.callee.name];

        if (callee) {
          path.node.callee = t.identifier(callee);
        }
      },
    }
  }
};
