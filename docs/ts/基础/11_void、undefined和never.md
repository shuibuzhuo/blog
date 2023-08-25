## void 没有任何返回值

```js
// void 没有任何返回值
// function print1(): void
function print1() {
  console.log("something...");
}
```

## undefined 一个值是未定义的

```js
// undefined 类型表示一个值是未定义的，一个变量没有被初始化或者没有被赋予一个值
function print2(): undefined {
  console.log("something...");
  return;
}
```

## never 函数永远无法正常执行完

```js
// never 函数永远无法正常执行完

// 1. 抛出异常
function print3(message: string): never {
  throw new Error(message);
}

// 2. 无限循环
function print4(): never {
  while (true) {
    console.log("true");
  }
}
```
