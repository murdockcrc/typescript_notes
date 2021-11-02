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

# Generic constraints

Use them to enforce that the `Type` of a generic conforms to a specification.

```js
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property
  return arg;
}
```

# Factory generics

```js
class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  id: "guid1";
}
 
class Lion extends Animal {
  id: "guid2";
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

let a = createInstance(Lion);
let b = createInstance(Bee);
```