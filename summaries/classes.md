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

## Variable declaration

Instead of having this:

```js
class Manager {
  name: string

  constructor(name: string) {
    this.name = name
  }
}
```

Declare the public property in the constructor:

```js
class Manager {
  // name: string // This line becomes redundant
  constructor(public name: string) {
    // this.name = name  // becomes redundant
  }
}
```

# Methods

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

# Accessors

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

# Private properties

The `private` keyword is just a compile-time restriction. At runtime, an external piece of code can still access properties with this accessor modifier.
ECMAScript2015 added support for real private properties (prefixed with a #).

```js
class Exam {
    id: number
    private seniority: string
    #salary: number
}
```

# Classes and interfaces

```js
interface Exam {
    id: number,
    author: string
    booking: (name: string) => string
}

class WebExam implements Exam {
    id: number
    author: string
    booking = (name: string) => 'not_useful'

    constructor() {
        this.id = 1
        this.author = 'some_name'
        console.log(this.booking(''))
    }
}
```

# Static members

```js
class Manager {
  name: string
  static owner: string
  static printMe() {
    console.log(Manager.owner)  // Access static prop by calling from the Class
    return 'printMe'
  }

  constructor() {
    this.name = 'name'
  }
}

Manager.printMe() // Access static prop by calling from the Class
```

# Abstract classes

Cant instantiate them. Only used for inheritance.

```js
abstract class Account {
  abstract name: string       // Child must implement this
  id: number                  // Child get this for free, no implementation needed
}
```