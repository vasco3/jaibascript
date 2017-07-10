# Proposals

JavaScript should use symbols to replace reserved keywords. 
This would make the language more universal. 
By using symbols in partial scripts like mathematics avoids the 
restrictions of a fully scripted language like English.
I propose replacing reserved keywords for symbols, and translate 
the API into different language like Spreadsheet apps do. 
This would make JavaScript a truly 
universal programming language.

To avoid breaking the web, we can preserve reserved keywords 
inspite of adding symbol alternatives.

Being english my second language, I learned some keywords just by
heart instead of by meaning. Human languages tend to be 
subjective to its historical context.


## Date

```js
var date = new Date();
// var date = new @();
```

## function

```js
function f(x) {
  return x;
}
```

```
ƒ f(x) {
  => x
}
```

## undefined, null

```js
var x = undefined;

// var x = __;
```

removing null 

```js
var y = null;

// var y = __;
```

## boolean

```js
var isHere = true;    

// var isHere = 1;

isHere = false;   

isHere = !0;   
```

## NaN

```js
var x = 'hi';
if (x === NaN) { x = 9 }
```

```
if (x === !#) { x = 9 }
```

## const, let, var

```js
const x = 1;
let y = 2;
var z = 3;
```

```
x -> 1;
y ~> 2;
z = 3;
```

## eval

```js
eval(script);
```

```
var script = "sendText()";
§(script);
```

## Infinity

```js
var i = Infinity;
var n = -Infinity;
```

```
var i = ∞;
var n = -∞;
```

## switch case

```js
var x = 1;
var result = 0;

switch (x) {
  case 1:
    result = 0;
    break;
  case 2:
    result = 2;
    break;
  default:
    result = 5;
    break;
}
```


```
x = 1;
var result = 0;

(x) -> {
  1:
    result = 0;
    <>;
  2:
    result = 2;
    <>;
  :
    result = 5;
    <>;
}
```

