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

# Using multiple types

More than one type can be specified by using ',':

```js
function test<T, V>(x: T, y: V): T {
    const var1: T = getXFromDb(x)
    const var2: V = getVFromDb(y)

    return x
}

const a: Array<string> = ['Microsoft']
const b: Array<number> = [10]

test<Array<string>, Array<number>>(a, b)
```

Using more than 1 type parameter is highly unusual, as the complexity of the abstraction increases.

# Generic classes

You can't use generics on static members, only on instances of the class.

A generic class can implement a generic interface. The types of both must match.

Type constraints can be implemented too:

```js
interface NamedObject {
    id: string
    name: string
}

class Person<T extends NamedObject> {

    constructor(public id: string, public name: string, public nationality: string) { }

    requestName(request: T): string {
        return request.name
    }
}

const t = {
    id: "001",
    name: "name"
}

const x = new Person<NamedObject>(t.id, t.name, 'costa rican')
x.requestName(t)
```