# vue2 的响应性核心 API

`vue2` 以 `Object.defineProperty` 作为响应性的核心 `API`，该 `API` 可以监听：**指定对象的指定属性的 `getter` 和 `setter`**

我们可以利用这个 `API`，让我们之前的程序进行 **自动计算**，该 `API` 接收三个参数：**指定对象、指定属性、属性描述符对象**

```js
// 定义一个商品对象，包含价格和数量
let quantity = 2;

let product = {
  price: 10,
  quantity,
};

// 总价格
let total = 0;
// 计算总价格的函数
function effect() {
  total = product.price * product.quantity;
}

effect();
// 第一次打印
console.log(`总价格：${total}`); // 20

// 监听对于 product 的 quantity 属性的操作
Object.defineProperty(product, "quantity", {
  set(newVal) {
    console.log("setter");
    // 不能是 product.quantity = newVal，因为这样会重复触发 set 行为
    quantity = newVal;

    // 重新触发 effect
    effect();
  },
  get() {
    console.log("getter");
    // 以 quantity 变量的值作为 product.quantity 的属性值
    return quantity;
  },
});
```

此时，我们就通过 `Object.defineProperty` 方法成功监听了 `quantity` 属性的 `getter` 和 `setter` 行为。

现在，当 `quantity` 发生变化时，`effect` 函数将重新计算，从而得到最新的 `total`
