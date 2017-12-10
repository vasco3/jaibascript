# JaibaScript

> JavaScript in Spanish

## Overview

JaibaScript is a babel plugin that allows developers to write
JavaScript code in spanish and
JaibaScript will translate it into english.

This is the first step on making JavaScript a truly universal language.

JavaScript is a partial scripted language,
like Mathematics and musical notations.
However, it mixes symbols and reserved keywords.

For example, you have symbol notations such as AND and OR

```js
if (a || b) {
  x = 3;
}
```

And you also have reserved keywords such as

```js
function a(x) {
  return x;
}
```

Thanks to ES6/ES2015 now we can use symbol notations to declare a function:

```js
var a = x => x; // looks more mathematical and english agnostic.
```

Having reserved keywords in english restrict JavaScript.
Non-english speakers may find friction while learning it.
This doesn't have to be the case for ES/JS APIs.

Would be very hard to remember all the symbol notations for
hundreds of commands such as `Math.random()`. Therefor I propose
translating the JS API into different spoken languages.
JavaScript's first conception goal was to be beginner friendly.
Replacing reserved keywords with more symbols, and translating
the EcmaScript's APIs will make it more universal.

In the future this project could be forked into a generic tool
that will enable the translation of JavaScript to other languages.

## Requirements

* NodeJS v6+
* babel v6+

## How to install

* `npm install --save jaibascript`
* Add jaibascript to the list of babel plugins

## Usage

Browse the docs to see the translation of the commands. Then run you build babel build script.
JaibaScript plugin will translate your code.

![JaibaScript](./docs/jaibascript.gif)

## Examples

```js
const lista = [1, 3, 4];

lista.filtrar(num => num > 2);

// traducido a
lista.filter(num => num > 2);
```

## References

* https://github.com/jacobp100/babel-plugin-swift-blocks
* https://medium.com/@jacobp100/adding-custom-syntax-to-babel-e1a1315c6a90
* [babel types](https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/core.js)
* [Developer Mozilla](https://developer.mozilla.org)
* [AST Explorer](http://astexplorer.net/)
* [Babel Plugin Handbook](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#toc-babel-types)
* [Babel plugin playground](http://www.mattzeunert.com/babel-plugin-playground/)

## Contributors

* Jorge C. Cuadra F.

## License

MIT
