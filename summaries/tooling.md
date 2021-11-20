# tsconfig.json

[Full usage reference](https://www.typescriptlang.org/tsconfig)

Recommended options:
[tsconfig/bases](https://github.com/tsconfig/bases)

When using these recommended configs, your `tsconfig.json` must extend it. This is done by adding the following to your file:

```
"extends": "@tsconfig/xxx/tsconfig.json"
```

Replace the CLI commands of `tsc` with parameters in this config file.

To auto-generate this file, run `tsc --init`

Add the `watch: true` compiler option so TSC recompiles everytime a file change is detected.

`tsc` will look for a `tsconfig.json` file in the local directory. If it does not find one, it will traverse the folder structure until it finds one.

## ECMAScript versions

* ES3: super legacy
* ES6: most modern browers. May face issues in enterprise environments where browsers and OSs might be very out of date.
* ESnext: the latest

There other options available, however these are the most common ones.

## Inheritance

Multiple tsconfig files can be used across the project (they inherit from each other). Example:

**Base file**: src/tsconfig.base.json

**Inheriting file**: src/app/tsconfig.json

## Modules

The `tsconfig.json` file has a property called `module`. Use this to define how the compiled JS code will deal with modules (CommonsJS, ES2015, or others.)

## Module resolution

With this setting, the compiler will provide a verbose output of how it is resolving for imported modules:

`"traceResolution": true`

Use is to troubleshoot if a module import cannot be resolved.

## outFile

Will compile all output into one single JS file. The options for `module` are reduced when this setting is enabled.

## Includes

With the `include` statement, you might be compiling files which are not needed.
You can instead remove the `include` and change it for `files`, and list specific files to be compiled.
Additional files will be compiled if they are references from TS files included in that list by using the reference directive:

```
/// <reference path="path_to_another_ts_file" />
```

# References

Use references to link to other TS projects, without the need to compile them every time. These references must have their own `tsconfig.json` file with the option `composite` enabled. For an example, see [HERE](src/interfaces/index.ts)

# Declaration files

## Community driven

[DefinitivelyTyped](https://definitelytyped.org/)

## Write your own declarations

Encapsulate non-TS code with typing information, without having to rewrite the legacy code in TS. For an example, see [HERE](src/lib/language.d.ts)

# Source map files

Options:

* Generate a source map per file
* Generate one big file with all source maps
* Embed the source map into the generated file

Activate the parameter `"sourceMap": true,` in the compiler options. Also, you might need to set this up in webpack (or whatever you are using): `devtool: 'eval-source-map'`