# Generic interfaces

```js
interface GenericFn {
  <Type>(arg: Array<Type>): Array<Type>
}

function log<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length)
  return arg
}

let fn: GenericFn = log

const arr = [1, 2, 3]

fn(arr)

// Returns 3
```

Alternatively, move the parameter to the whole interface

```js
interface GenericFn<Type> {
  (arg: Array<Type>): Array<Type>
}

function log<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length)
  return arg
}

let fn: GenericFn<number> = log

const arr = [1, 2, 3]

fn(arr)
```

With this change, the following line will make the compiler fail

```js
let fn: GenericFn<string> = log
```

This is because now the compiler knows that the Generic is of `type` `string`, but the `const` is an array of numbers.