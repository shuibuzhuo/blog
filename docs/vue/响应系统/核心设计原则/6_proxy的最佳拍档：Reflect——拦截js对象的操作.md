# Reflect - Proxy 的最佳拍档

## 示例

```js
const obj = {
  name: "shuibuzhuo",
};

console.log(obj.name); // shuibuzhuo
console.log(Reflect.get(obj, "name")); // shuibuzhuo
```

上面的代码中，两次打印的结果是相同的。说明 `Reflect.get(obj, 'name')` 本质上和 `obj.name` 的作用 **相同**

那么，既然如此，我们为什么还需要 `Reflect` 呢？

`Reflect` 还有第三个参数，`receiver`，这个参数的作用是什么呢？

MDN 上的介绍是：

> 如果 `target` 对象中指定了 `getter`，`receiver` 则为 `getter` 调用时的 `this` 值。

```js
const obj = {
  name: "shuibuzhuo",
};

console.log(obj.name);
console.log(Reflect.get(obj, "name"));

const p1 = {
  lastName: "张",
  firstName: "三",
  get fullName() {
    return this.lastName + this.firstName;
  },
};

const p2 = {
  lastName: "李",
  firstName: "四",
};

console.log(p1.fullName); // 张三
console.log(Reflect.get(p1, "fullName")); // 张三
console.log(Reflect.get(p1, "fullName", p2)); // 李四
```

在上述代码中，我们可以利用 `p2` 作为第三个参数 `receiver`，以此来修改 `fullName` 的打印结果。让 `p2.fullName` 这个 `getter` 在调用的时候，`this` 的值，指向 `p2`。

再来看一个例子：

```js
const p1 = {
  lastName: "张",
  firstName: "三",
  get fullName() {
    return this.lastName + this.firstName;
  },
};

const proxy = new Proxy(p1, {
  get(target, key, receiver) {
    console.log("触发了 getter");
    return target[key];
  },
});

console.log(proxy.fullName);
```

在以上代码中，我们触发了 `proxy.fullName`，在这个 `fullName` 中，又触发了 `this.lastName + this.firstName`，那么：**getter 应该被触发几次？**

此时，**`getter` 应该被触发 3 次**！但是 **实际只触发了 1 次**！这是为什么呢？

这是因为，在 `this.lastName + this.firstName` 时，我们的 `this` 是 `p1`，**而不是 `proxy`**，所以 `lastName` 和 `firstName` 的触发，不会再次触发 `getter`。

那么，如何才能让 `getter` 触发三次呢？

想要实现这个效果，那么就需要使用到 `Reflect.get` 了。

已知，`Reflect.get` 的第三个参数 `receiver` 可以修改 `this` 的指向，那么我们可以利用 Reflect.get 的第三个参数，把 `proxy` 传入，让 `fullName` 中的 this 指向 `proxy`，这样来触发三次 `getter`。
