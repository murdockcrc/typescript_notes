# Export declarations

```js
export interface Person { }

export function hireDeveloper() { }

// If importer does not specify what is requested, then this will be the only thing exported
export default class Employee { }

class Manager { } // This remains outside the module
```

Or simplify the export statements into one:

```js
interface Person { }
function hireDeveloper() { }
class Employee { }
class Manager { } // This remains outside the module

export { Person, hireDeveloper, Employee as TeamMember } // aliases Employee to TeamMember
```

# Import statements

## Selective

```js
import { Person, hireDeveloper } from './person'
```

## Default with alias

This will import the default from the module and give it another name

```js
import Worker from './person'
```

## Aliasing

```js
import { StaffMember as Coworker } from './person'
```

## Import everything

```js
import * as Team from './person'
```