> JaibaScript compilando a Javascript en tiempo real

![JaibaScript](./jaibascript.gif)

## Comunidad

[Follow me in Twitter @Cuadraman](twitter.com/Cuadraman)

## Objetivo

JavaScript en español. Darle a los programadores hispanoparlantes la posibilidad de escribir JavaScript usando terminología en su idioma nativo. Esto es con el objetivo de facilitar el aprendizaje de la programación para las personas que no saben inglés.

## Requerimientos

- NodeJS v6+
- Babel v6+

## Instalación

- `npm install --save-dev jaibascript`
- agregar a los plugins de babel


## Ejemplos

### Traduce Objetos Estandard y sus métodos

```js
Numero.esEntero(100);
```

Se traduce a 

```js
Number.isInteger(100);
```

### Se puede combinar inglés y español

> Ideal para implementarse poco a poco en un proyecto hecho con JavaScript. Se puede incorporar en pequeñas secciones para ir lo probando.

```js
// Number en ingles, esEntero() en español
Number.esEntero(num);
```

Se traduce a

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

[Lisa de traducciones de los Objetos Estandard](objetos-estandard.md)


## Referencias

- https://github.com/jacobp100/babel-plugin-swift-blocks
- https://medium.com/@jacobp100/adding-custom-syntax-to-babel-e1a1315c6a90
- [babel types](https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/core.js)
- [Developer Mozilla](https://developer.mozilla.org)
- [AST Explorer](http://astexplorer.net/)
- [Babel Plugin Handbook](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#toc-babel-types)


## Contribuidores

- Jorge C. Cuadra F.

<img src="./jorge-cuadra.png" width="200"/>


<a href="https://js.org" target="_blank" title="JS.ORG | JavaScript Community">
<img src="https://logo.js.org/dark_horz.png" width="102" alt="JS.ORG Logo"/></a>
<!-- alternatives [bright|dark]_[horz|vert|tiny].png (width[horz:102,vert:50,tiny:77]) -->

## Licencia

> MIT
