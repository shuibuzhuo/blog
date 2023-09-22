# 缓存性和死循环

## 死循环

`computed` 区别于 `function` 最大的地方就是：**computed 具备缓存**，即，当多次读取 `computedObj.value` 时，传入的 `getter` 只会执行一次。

所以，我们可以写出以下的测试用例：

```js
const { reactive, effect, computed } = Vue;

const obj = reactive({
  name: "shuibuzhuo",
});

const computedObj = computed(() => {
  console.log("计算属性计算了");
  return "姓名" + obj.name;
});

effect(() => {
  document.getElementById("app").innerText = computedObj.value;
  document.getElementById("app").innerText = computedObj.value;
});

setTimeout(() => {
  obj.name = "zhangsan";
}, 2000);
```

但是，将这个代码在浏览器一执行，出现了 **死循环** 的问题。

大致代码执行步骤如下：

1. 执行 `obj` 的 `setter` 行为，会触发 `trigger`。
2. 触发 `trigger` 会走到 `triggerEffects`。
3. `triggerEffect` 中会遍历所有的 `effect`，目前我们的代码是下面这样的：

```js
export function triggerEffects(dep: Dep) {
  const effects = isArray(dep) ? dep : [...dep];

  for (const effect of effects) {
    triggerEffect(effect);
  }
}
```

此时，`effects` 的顺序是 `非计算属性的 effect` 和 `计算属性的 effect`，按照这样的顺序进行执行，最终就会导致死循环。

所以我们需要再这里再做一层判断，让 `计算属性的 effect`先执行，代码如下：

```js
export function triggerEffects(dep: Dep) {
  const effects = isArray(dep) ? dep : [...dep];

  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect);
    }
  }

  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect);
    }
  }
}
```

这样子，将执行顺序一修改，死循环的问题就解决了。

## 缓存

我们在读取 `computedObj` 的值的时候，实际上是触发了 `get value`。

在 `get value` 中，我们通过 `脏变量`，控制了 `effect` 的 `run` 方法的执行，即控制了 我们传给 `computed` 的 `getter` 的执行。

只有 `_dirty` 为 true，我们才重新执行 `computed` 的 `getter`，重新计算一次 `computedObj` 的值。
