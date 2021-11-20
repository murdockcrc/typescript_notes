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

# Loading JSON files as modules

Requires the compiler option `resolveJsonModule: true`. This work in Node modules resolution only. Browsers do not allow loading non-JS files. You'll need a loader like webpack to packge it up.

# Aliasing

Used together with the compiler option `baseUrl`. Used to shorten very long module paths. Example:

```json
{
    "paths": {
        "deep/*": ["./some/deeper/components/folder/*"]
    }
}
```

# Virtual directories

Used to merge more than one root directory for the compiler.