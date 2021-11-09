# tsconfig.json

Replace the CLI commands of `tsc` with parameters in this config file.

To auto-generate this file, run `tsc --init`

Add the `watch: true` compiler option so TSC recompiles everytime a file change is detected.

`tsc` will look for a `tsconfig.json` file in the local directory. If it does not find one, it will traverse the folder structure until it finds one.

# Modules

The `tsconfig.json` file has a property called `module`. Use this to define how the compiled JS code will deal with modules (CommonsJS, ES2015, or others.)