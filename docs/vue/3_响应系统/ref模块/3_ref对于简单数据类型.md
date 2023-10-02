# ref 对于简单数据类型

## 代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="../../dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app"></div>

    <script>
      const { ref, effect } = Vue;

      const obj = ref("shuibuzhuo");

      effect(() => {
        document.getElementById("app").innerText = obj.value;
      });

      setTimeout(() => {
        obj.value = "zhangsan";
      }, 3000);
    </script>
  </body>
</html>
```

## ref 函数

整个 `ref` 函数的初始化流程与复杂数据类型完全相同，但有一个地方不同，需要**特别注意**：因为当前不是复杂数据类型，所以在 `toReactive` 函数中，不会通过 `reactive` 函数处理 value。所以此时 `this._value` **不是**一个 `proxy`。即：无法监听 `getter` 和 `setter`。

## effect 函数

和复杂数据类型相同

## get value()

和复杂数据类型相同

## set value() 不同！！！

延迟 3 秒后，执行 `obj.value` = 'zhangsan' 的逻辑。

- 在复杂数据类型下，我们 `obj.value.name = 'zhangsan'`，触发的是 `get value` 行为。
- 但是在简单数据类型下，我们 `obj.value = 'zhangsan'`，触发的是 `set value` 行为，这里也是 `**ref可以监听到简单数据类型响应性的关键**`。

流程：set value(newVal) -> 判断 `hasChanged`，对比数据是否发生变化 -> 如果发生变化，则触发 `triggerRefValue` -> 执行 `triggerEffects`，触发依赖，完成响应性

即，利用了 `set` 语法，执行 xxx.value = 'zhangsan'，其实是调用了 `xxx.value('zhangsan')`，在 `value` 函数中，触发依赖

## 总结

我们可以说：对于 `ref` 标记的简单数据类型而言，它其实**“并不具备响应性”**，所谓的响应性只不过是因为我们 **主动触发了 `value` 方法** 而已。
