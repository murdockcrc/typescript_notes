# Types of decorators

## Class

Appled to class constructor to observice, modify or replace class definition

```js
@controller("api")
class API { }
```

## Method

```js
@controller("api")
class API { 
  @log("some event happened")
  public addUser(user: string) { }
}
```

## Property

```js
class API { 
  @inject
  public app:Express
}
```

## Parameter

```js
class API { 
  @validate
  public addUser(@required user: string) { }
}
```