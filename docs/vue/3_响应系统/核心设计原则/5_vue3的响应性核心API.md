# vue3 的响应性核心 API

因为 `Object.defineProperty` 存在的问题，所以 `vue3` 中修改了这个核心的 `API`，改为使用 `Proxy` 来实现。

代码如下：

```js
// 定义一个商品对象，包含价格和数量
let product = {
  price: 10,
  quantity: 2,
};

// proxyProduct 代理对象，拥有被代理对象的所有属性(只有代理对象，才会触发 getter 和 setter)
// product 被代理对象
const proxyProduct = new Proxy(product, {
  /**
   * 监听 proxyProduct 的 set 方法，在 proxyProduct.xx = xx 时，被触发
   * @params target 被代理对象
   * @params key 指定的属性名
   * @params newVal 新值
   * @params receiver 一般来说就是代理对象
   * @returns 为一个 boolean 类型，true 表示属性设置成功
   */
  set(target, key, newVal, receiver) {
    // 给 target 赋新的值
    target[key] = newVal;

    // 触发 effect，重新计算总价
    effect();

    // true 表示属性设置成功
    return true;
  },

  /**
   * 监听 proxyProduct 的 get 方法，在 proxyProduct.xx 时，被触发
   * @params target 被代理对象
   * @params key 指定的属性名
   * @params receiver 一般来说就是代理对象
   * @returns proxyProduct.xx 的结果
   */
  get(target, key, receiver) {
    return target[key];
  },
});

// 总价格
let total = 0;
// 计算总价格的函数
function effect() {
  // 要用代理对象 proxyProduct.price proxyProduct.quantity，因为只有代理对象，才会触发 getter 和 setter
  total = proxyProduct.price * proxyProduct.quantity;
}

effect();
console.log(`总价格：${total}`);
```

可以看到，`Proxy` 和 `Object.defineProperty` 存在着比较大的区别：

1. `Proxy`
   a. `Proxy` 将代理一个对象（被代理对象），得到一个新的对象（代理对象），同时拥有被代理对象中所有的属性。
   b. 当想要修改对象的指定属性时，我们应该使用 **代理对象** 进行修改。
   c. **代理对象** 的任何一个属性都可以触发 `handler` 的 `getter` 和 `setter`。

2. `Object.defineProperty`:
   a. `Object.defineProperty` 为 **指定对象的指定属性** 设置 **属性描述符**。
   b. 当想要修改对象的指定实行时，我们可以使用原对象进行修改。
   c. 通过属性描述符，只有 **被监听** 的指定属性，才可以触发 `getter` 和 `setter`。

所以，当 `vue3` 通过 `Proxy` 实现响应性核心 `API` 之后，`vue` 将 **不会** 再存在新增属性时，失去响应性的问题。
