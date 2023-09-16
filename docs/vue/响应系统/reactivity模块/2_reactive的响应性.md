# reactive 的响应性和 effect

这一节看一下 reactive 和 effect 分别做了什么

## 代码

```html
<div id="app"></div>

<script>
  const { reactive, effect } = Vue;

  const obj = reactive({
    name: "张三",
  });

  effect(() => {
    document.querySelector("#app").innerText = obj.name;
  });

  setTimeout(() => {
    obj.name = "李四";
  }, 3000);
</script>
```

## reactive

1. 创建了 `proxy`
2. 把 `proxy` 放到了 `proxyMap` 里面
3. 最后返回 `proxy`

## effect

1. 生成 `ReactiveEffect` 实例
2. 触发传递给 `effect` 的 `fn` 方法，从而激活 `getter`
3. 建立了 `targetMap` 和 `activeEffect` 之间的联系。

   - a. `dep.add(activeEffect)`
   - b. `activeEffect.deps.push(dep)`

targetMap 的结构

- `key`: `target`
- `value`: `Map`
  - `key`: `key`
  - `value`: `Set` -> 这个 `Set` 就是 `dep`

第二步，触发 `fn` 方法时，会触发 `getter`，这里会走到 `track` 函数，这是一个重点函数

track 函数的核心逻辑就是：**收集了 `activeEffect(里面有 `fn` 属性)`**

当我们 2s 后触发 `setter` 时，setter 主要做了 2 件事情：

1. 修改 `obj` 的值
2. 触发 `targetMap` 下保存的 `fn` 函数，从而让视图更新

## 总结

代码总共做了 3 件事情：

1. `reactive` 函数
2. `effect` 函数
3. `obj.name = 'xx'` 表达式

这三处代码，`vue` 内部做的事情：

1. 创建 `proxy`
2. 收集 `effect` 的依赖
3. 触发收集的依赖
