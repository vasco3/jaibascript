const {
  fundamentalObjects,
  globalFunctions,
  globalProperties,
  indexedCollections,
  numbersAndDates,
  PropiedadesMetodosDeObjetosEstandard,
  textProcessing,
} = require('./diccionario');

const ObjetosEstandard = {};

module.exports = function jaibascript({ types: t }) {
  return {
    name: 'jaibascript',
    visitor: {
      CallExpression(path) {
        const calleeName = path.node.callee.name;

        const callee =
          numbersAndDates[calleeName] ||
          indexedCollections[calleeName] ||
          globalFunctions[calleeName] ||
          fundamentalObjects[calleeName];

        if (callee) {
          path.node.callee = t.identifier(callee);
        }
      },
      ExpressionStatement(path) {
        const nodeExpressionName = path.node.expression.name;
        const expressionName = globalProperties[nodeExpressionName];

        if (expressionName) {
          path.node.expression = t.identifier(expressionName);
        }
      },
      MemberExpression(path) {
        const objectName = (path.node.object || {}).name || '';

        const primitiveIdentifier =
          indexedCollections[objectName] ||
          numbersAndDates[objectName] ||
          textProcessing[objectName];

        if (primitiveIdentifier) {
          path.node.object = t.identifier(primitiveIdentifier);
        }

        const property =
          PropiedadesMetodosDeObjetosEstandard[path.node.property.name];

        if (property) {
          path.node.property = t.identifier(property);
        }
      },
      NewExpression(path) {
        const callee = numbersAndDates[path.node.callee.name];

        if (callee) {
          path.node.callee = t.identifier(callee);
        }
      },
    },
  };
};
