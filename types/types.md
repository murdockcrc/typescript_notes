# Bypass any type checks

Use this to quickly convince TSC that anything is valid for a declared variable:

```js
let obj: any = { x: 0 };
```

You can do anything with `obj` and the compiler won't complain.

# Type inference

If the compiler can't infer a type, and none was declared, it will default to `any`. Use the configuration `--noImplicitAny` to avoid this.

# Narrowing

When using unions, check their types before calling methods which are not common to all the types in the union

## Type checking

```js
const printIds= (x: string[] | string) => {
    if (Array.isArray(x)) {
        x.forEach((s) => {
            console.log(s.toUpperCase());
        })
    } else {
        console.log(x)
    }
};
```

Alternatively, use the `typeof` operator.

## Narrowing with the `in` operator

`in` will check if the object has a property with the name `in`.

```js
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}
```

## Narrowign with `instanceof`

This checks if the prototype chain of the object contains the prototype chain of the type.

```js
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
(parameter) x: Date
  } else {
    console.log(x.toUpperCase());
(parameter) x: string
  }
}
```

## Exhaustiveness checking

Use the `never` type to confirm that switch statements dont behave unexpectedly when more types are added to a union (but the dev forgot to extend the narrowing statements):

```js
interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

Now, if someone later comes and changes the union to this:

```js
interface Triangle {
  kind: "triangle";
  sideLength: number;
}
 
type Shape = Circle | Square | Triangle;
```

TSC will throw an error because the `getArea` function has not been updated to accommodate for the new `Triangle` type.

# Naming object types

## <a name='Typealiases'></a>Type aliases

For convenience when refering to objects of the same structure:

```js
function geometry(obj: { x: number; y: number }) {
}

// Create an alias for the cartesian coordinate
type Point = {
    x: number;
    y: number;
};

// Use the alias
function geometryV2(obj: Point) {
}
```

You can also do aliases of unions:

```js
type ID = string | number;
```

## <a name='Interfaces'></a>Interfaces

The following interface can be used in the example above:

```js
interface Point {
  x: number;
  y: number;
}
```

### <a name='Typesvsinterfaces'></a>Types vs interfaces

Both can be extended.

A type cannot be changed after it is declared (i.e: can't add new properties).

# Type assertions

There are two ways to do this:

```js
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

For complex assertions which the compiler fails (but you know are valid):

```js
const a = (expr as any) as T;
```

# null and undefined

The general recommendation is to enable `strictNullChecks`.

If a propery can be null, use union and narrowing to support it:

```js
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```

If you are absolutely sure that a value cannot be null, use the non-null assertion operator to indicate so:

```js
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

# Functions

## <a name='Parametertypes'></a>Parameter types

```js
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

## <a name='Returntypes'></a>Return types

```js
function getFavoriteNumber(): number {
  return 26;
}
```