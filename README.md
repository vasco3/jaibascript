# JaibaScript
> JavaScript en español

## Objetivo

Recrear JavaScript en español. Darle a los usuarios hispanoparlantes la posibilidad de escribir JavaScript usando terminología en su idioma nativo. Esto es con el objetivo de facilitar el aprendizaje de la programación para las personas que no saben inglés.

## Requerimientos

- NodeJS v6+
- babel v6+


## Instalacion

- `npm install --save jaibascript`
- Agregar jaibascript a la lista de babel plugins.


## Uso

Escribe jaibascript y traduce a JavaScript

```js
const lista = [1,3,4];

lista.filtrar(num => num > 2);

// traducido a
lista.filter(num => num > 2);
```


## Objetos Estandares traducidos

> JaibaScript tiene traducidos los siguientos Objetos estandares con sus respectivos metodos y propiedades


Español | Ingles
------- | ------
Fecha | Date
Lista | Array
Numero | Number
Texto | String

## Referencias

- https://github.com/jacobp100/babel-plugin-swift-blocks
- https://medium.com/@jacobp100/adding-custom-syntax-to-babel-e1a1315c6a90
- [babel types](https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/core.js)
- [Developer Mozilla](https://developer.mozilla.org)
- [AST Explorer](http://astexplorer.net/)
- [Babel Plugin Handbook](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#toc-babel-types)
- [Babel plugin playground](http://www.mattzeunert.com/babel-plugin-playground/)

## Contribuidores

- Jorge C. Cuadra F.


## Licencia

MIT
