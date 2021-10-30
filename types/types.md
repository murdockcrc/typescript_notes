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