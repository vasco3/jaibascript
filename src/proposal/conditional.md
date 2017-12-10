# Conditional proposal

## examples

### if

```js
if (x === 3) {
  y = 5;
}
```

```
(x === 3) ? {     // if
  y = 5;
}
```

### else

```js
if (x === 3) {
  y = 5;
} else {
  y = 10;
}
```

```
(x === 3) ? {     // if
  y = 5;
} : {             // else
  y = 10
}
```

### elseif

```js
if (x === 3) {
  y = 5;
} else if (x === 5) {
  y = 100;
} else {
  y = 10;
}
```

```
(x === 3) ? {         // if
  y = 5;
} : (x === 5) ? {     // else-if
  y = 100;
} : {
  y = 10;
}
```
