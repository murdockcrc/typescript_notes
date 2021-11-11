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