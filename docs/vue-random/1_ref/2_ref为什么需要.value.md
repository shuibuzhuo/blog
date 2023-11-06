大家好，我是哈默。今天我们来说一下为什么 `ref` 中我们需要 `.value`。

## ref 不是由 Proxy 实现的

经过之前的文章，我们已经知道了 `ref` 并不是由 `Proxy` 来实现的：
![ref是一个RefImpl对象](./ref是一个RefImpl对象.png)

所以它可以接收原始类型的数据，但是 **数据的响应性** 是如何处理的呢？

## RefImpl 类的实现

首先，我们知道，Proxy 实现响应式的关键，在于它能监听 `被代理对象` 的 `getter` 行为 和 `setter` 行为：

```js
const proxyObj = new Proxy(obj, {
  set() {
    // 监听了 setter 行为
    console.log("触发了 set，设置了值");
  },
  get() {
    // 监听了 getter 行为
    console.log("触发了 get，读取了值");
  },
});
```

那么对于 `ref` 而言，我们可以来到 Vue 的源码中，查看一下 `RefImpl` 类的实现：

```js
class RefImpl<T> {
  ...

  constructor(value: T, public readonly __v_isShallow: boolean) {
    ...
  }

  get value() {
    trackRefValue(this)
    return this._value
  }

  set value(newVal) {
    ...
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal
      this._value = useDirectValue ? newVal : toReactive(newVal)
      triggerRefValue(this, newVal)
    }
  }
}
```

有意思的是，我们也看到了 `get value()` 和 `set value()`。

那么在我们使用的时候，什么时候会触发 `get value()` 呢？就是当我们 `xxxRef.value` 的时候 ；
什么时候会触发 `set value()` 呢？就是当我们`xxxRef.value = '100'` 的时候

也就是说，我们通过 `.value` 就可以成功触发 `get value()` 和 `set value()` ，从而成功的监听到我们 **读取值** 和 **设置值** 的行为。

也就是实现了和 `Proxy` 一样的效果，这样一来 **数据的响应性** 也可以在这两种行为中被处理。

## 总结

.value 的存在就是让我们能通过 `ref` 也能实现数据的响应性。
