> JaibaScript hace posible poder programar en español. 

## Objetivo

Recrear JavaScript en español. Darle a los usuarios hispanoparlantes la posibilidad de escribir JavaScript usando terminología en su idioma nativo. Esto es con el objetivo de facilitar el aprendizaje de la programación para las personas que no saben inglés.


## Instalacion

Proximamente con npm


## Ejemplos

```js
Numero.esEntero(100);
```

Se traduce a 

```js
Number.isInteger(100);
```

### Se puede combinar ingles y español

```js
// Number en ingles, esEntero() en español

Number.esEntero(num);
```

se traduce a

```js
Number.isInteger(num);
```

## Uso

Escribe jaibascript y traduce a JavaScript

```js
var lista = [1,3,4];

lista.filtrar(num => num > 2);

// traduce a
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

[Documentación sobre Objetos Estandard](objetos-estandard.md)


## Referencias

- https://github.com/jacobp100/babel-plugin-swift-blocks
- https://medium.com/@jacobp100/adding-custom-syntax-to-babel-e1a1315c6a90
- [babel types](https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/core.js)
- [Developer Mozilla](https://developer.mozilla.org)
- [AST Explorer](http://astexplorer.net/)
- [Babel Plugin Handbook](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#toc-babel-types)


## Contribuidores

- Jorge C. Cuadra F.
![Jorge Cuadra](./profile.jpeg)



## Licencia

> MIT
