# Strict class initialization

Controls whether class props need to be initialized in the constructor:

`strictPropertyInitialization`

```js
class GoodGreeter {
  name: string;
 
  constructor() {
    this.name = "hello";
  }
}
```

If a field will be initialized outside of the constructor for sure, use the definite assignment operator:

```js
class OKGreeter {
  // Not initialized, but no error
  name!: string;
}
```

Readonly props can also be used. They will be populated by the constructor, and become immutable after that:

```js
class GoodGreeter {
  name: string;
  readonly id: number;
 
  constructor(name = 'default_value') { // Type annotation also possible
    this.name = name;
    this.id = 123;
  }
}
```

# Constructors

## Super class

Instantiating a derived class needs to call `super()`

```js
class Base {
  name: string
}

class Derived extends Base {
  department: string

  constructor(name: string, department: string) {
    super()
    this.name = name
    this.department = department
  }
}
```

## Methods

Same syntax support as for constructors:

```js
class Base {
  name: string
  transactions: Array<number>

  constructor(name = 'default_value') {
    this.name = name
  }

  add(q: number) {
    this.transactions.push(q)
  }
}
```

## Accessors

Use them only if you need to add extra logic to the process of getting/setting these values. Otherwise, this pattern is uncommon and not useful in Javascript.

If no `set` exists, the property is assumed to be readonly.

```js
class Base {
  name: string
  _id = ''

  get id() {
    return this._id
  }

  set id(input) {
    this._id = input
  }
}
```