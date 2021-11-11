# ECMAScript version

Define the version of ECMAScript used for compilation (default is ES3)

```js
tsc --target
```

# Strict levels

Do not generate JS output if there are errors:

```js
tsc --noEmitOnError
```

Force `strict` behavior:

```js
tsc --strict
```

Disallow implcit `any`. You can still annotate a variable with `any`, but any implicit `any`'s will be disallowed:

```js
tsc --noImplicitAny
```