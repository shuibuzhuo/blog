# readonly 只读修饰符

使用 readonly 修饰符，你可以确保对象的属性或数组的元素在被赋值后不会被修改，从而提高代码的可靠性和可维护性

## 没有使用 readonly

会修改传递进来的原数组，有副作用

```ts
function reverseSorted1(input: number[]): number[] {
  return input.sort().reverse();
}

const init1 = [1, 2, 3, 4, 5];
const res1 = reverseSorted1(init1);
console.log("init1", init1); //  [ 5, 4, 3, 2, 1 ]
console.log("res1", res1); //  [ 5, 4, 3, 2, 1 ]
// 会修改传递进来的原数组，有副作用
```

## 使用 readonly

```ts
// 加上 readonly 只读修饰符
function reverseSorted2(input: readonly number[]): number[] {
  // return input.sort().reverse(); // 报错，Property 'sort' does not exist on type 'readonly number[]'.ts(2339)
  // return input.slice().sort().reverse() // ok
  return [...input].sort().reverse(); // ok
}

const init2 = [1, 2, 3, 4, 5];
const res2 = reverseSorted2(init2);
console.log("init2", init2); //  [ 1, 2, 3, 4, 5 ]  // 原数组没有被修改
console.log("res2", res2); //  [ 5, 4, 3, 2, 1 ]
```
