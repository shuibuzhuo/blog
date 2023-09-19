# ref 对于复杂数据类型

## 代码

```html
<body>
  <div id="app"></div>
</body>
<script>
  const { ref, effect } = Vue;

  const obj = ref({
    name: "张三",
  });

  // 调用 effect 方法
  effect(() => {
    document.querySelector("#app").innerText = obj.value.name;
  });

  setTimeout(() => {
    obj.value.name = "李四";
  }, 2000);
</script>
```

## ref 函数

重点：

1. 对于 `ref` 而言，主要生成了 `RefImpl` 的实例
2. 在构造函数中对传入的数据进行了处理：
   a. 复杂数据类型：转为响应性的 `proxy` 实例
   b. 简单数据类型：不做处理
3. `RefImpl` 分别提供了 `get value`、`set value` 来完成对 `getter` 和 `setter` 的监听，注意这里并没有使用 `proxy`
   a. `xxx.value` 会触发 `get` 标记
   b. `xxx.value = xxx` 会触发 `set` 标记

## effect 函数

之前已经了解过了 `effect` 函数的执行流程，它主要做了 3 件事情

1. 生成 `ReactiveEffect` 实例
2. ** 触发 `fn` 方法，从而激活 `getter` **
3. 建立 `targetMap` 和 `activeEffect` 之间的联系。
   a. `dep.add(activeEffect)`
   b. `activeEffect.deps.push(dep)`

通过以上可知，`effect` 会触发 `fn` 函数，也就是会执行 `obj.value.name`，因为要 `obj.value`，所以会触发 `get value` 机制。

## get value()

在 `get value` 中会触发 `trackRefValue` 方法。
a. 触发 `trackEffects` 函数，并在此时为 `ref` 新增一个 `dep` 属性

```js
trackEffects(ref.dep || (ref.dep = createDep())...}
```

    b. 而 `trackEffect` 的作用就是：**收集所有的依赖 **

总结：`get value` 还是通过之前的 `trackEffects` 属性来收集依赖的。

## 再次触发 get value()

最后就是在 2s 之后，修改数据源了。

```js
obj.value.name = "李四";
```

这里有一个关键的问题：**此时会触发 `get value` 还是 `set value`**

上面的代码可以被拆解为

```js
const value = obj.value;
value.name = "李四";
```

所以，我们触发的是 `get value` 函数。

在 `get value` 函数中：

1. 再次执行 `trackRefValue` 函数
   a. 但此时 `activeEffect` 为 `undefined`，所以不会执行后续逻辑
2. 返回 `this._value`：
   a. 通过 **构造函数**，我们可知，此时的 `this._value` 是经过 `toReactive` 函数过滤之后的数据，在当前实例中为 `**proxy**` 实例
3. get value 执行完成

由以上逻辑可知：

1. `const value` 是 `proxy` 类型的实例，即：代理对象，被代理对象为 `{name: '张三'}`
2. 执行 `value.name = '李四'`，本质上是触发了 `proxy` 的 `setter`
3. 根据 `reactive` 的执行逻辑可知，此时会触发 `trigger` 触发依赖。
4. 至此，视图修改完成。

## 总结

1. 对于 `ref` 函数，会返回 `RefImpl` 类型的实例
2. 在该实例中，会根据传入的数据类型进行分开处理
   a. 复杂数据类型：交给 `reactive` 处理，返回一个 `proxy` 实例。
   b. 简单数据类型：不做处理
3. 无论我们执行 `obj.value.name` 还是 `obj.value.name = xxx`，本质上都是触发了 `get value`
4. 之所以会进行 **响应性**，是因为 `obj.value` 是一个 `reactive` 函数生成的 `proxy`，由 `proxy` 的 `getter` 和 `setter` 实现的响应性。
