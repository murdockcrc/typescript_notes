# Inheritance

```js
interface Employee {
  name: string
  title: string
}

interface Manager extends Employee {
  department: string
  scheduleMeeting: (topic: string) => void
}
```