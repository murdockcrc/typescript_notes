# Default values

```js
function func(input: string = 'Good morning'): void {
  console.log(input)
}
```

# Optional parameters

All params are mandatory unless specified otherwise with the conditional (?) operator.

```js
function func(input?: string): void {
  console.log(input)
}
```

# Using function types

Functions that have the same signature can be clubbed together by declaring their function type:

```js
function post(i: number) {
  let logger: (value: string) => void // define function type

  if (i < 0) {
    logger = logError
  } else {
    logger = logMessage
  }

  logger(i.toString())

}

function logError(msg: string): void {
  console.error(msg)
}

function logMessage(msg: string): void {
  console.log(msg)
}
```