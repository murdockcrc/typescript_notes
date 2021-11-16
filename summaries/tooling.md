# tsconfig.json

Replace the CLI commands of `tsc` with parameters in this config file.

To auto-generate this file, run `tsc --init`

Add the `watch: true` compiler option so TSC recompiles everytime a file change is detected.

`tsc` will look for a `tsconfig.json` file in the local directory. If it does not find one, it will traverse the folder structure until it finds one.

## Inheritance

Multiple tsconfig files can be used across the project (they inherit from each other). Example:

**Base file**: src/tsconfig.base.json

**Inheriting file**: src/app/tsconfig.json

## Modules

The `tsconfig.json` file has a property called `module`. Use this to define how the compiled JS code will deal with modules (CommonsJS, ES2015, or others.)

## outFile

Will compile all output into one single JS file. The options for `module` are reduced when this setting is enabled.

## Includes

With the `include` statement, you might be compiling files which are not needed.
You can instead remove the `include` and change it for `files`, and list specific files to be compiled.
Additional files will be compiled if they are references from TS files included in that list by using the reference directive:

```
/// <reference path="path_to_another_ts_file" />
```